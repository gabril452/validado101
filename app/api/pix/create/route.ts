import { type NextRequest, NextResponse } from "next/server"
import { sendOrderToUtmfy, formatUtmfyDate, type UtmfyOrderRequest } from "@/lib/utmfy"
import { saveUtmParams } from "@/lib/server-utm-store"
import { createTrexPayPix, saveTransaction } from "@/lib/trexpay"

// Gera ID único para o pedido
function generateOrderId(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `PED-${timestamp}-${random}`
}

// Converte valor em reais para centavos
function toCents(value: number): number {
  return Math.round(value * 100)
}

// Gera URL do webhook baseado no ambiente
function getWebhookUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL
  if (baseUrl) {
    const url = baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`
    return `${url}/api/webhook/trexpay`
  }
  return "https://seusite.com/api/webhook/trexpay"
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("[PIX Create] Recebendo requisição:", JSON.stringify(body))

    const { customer, items, total, trackingParams } = body

    // Validações básicas
    if (!customer || !customer.name || !customer.email || !customer.cpf || !customer.phone) {
      return NextResponse.json({ error: "Dados do cliente incompletos" }, { status: 400 })
    }

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Nenhum item no pedido" }, { status: 400 })
    }

    if (!total || total <= 0) {
      return NextResponse.json({ error: "Valor total inválido" }, { status: 400 })
    }

    const orderId = generateOrderId()
    const amountInCents = toCents(total)

    if (trackingParams) {
      saveUtmParams(orderId, {
        src: trackingParams.src || null,
        sck: trackingParams.sck || null,
        utm_source: trackingParams.utm_source || null,
        utm_campaign: trackingParams.utm_campaign || null,
        utm_medium: trackingParams.utm_medium || null,
        utm_content: trackingParams.utm_content || null,
        utm_term: trackingParams.utm_term || null,
      })
      console.log("[PIX Create] UTMs salvos no servidor para orderId:", orderId)
    }

    // Cria PIX via TrexPay
    const webhookUrl = getWebhookUrl()
    console.log("[PIX Create] Webhook URL:", webhookUrl)

    const trexPayResponse = await createTrexPayPix({
      amount: total,
      debtor_name: customer.name,
      phone: customer.phone.replace(/\D/g, ""),
      email: customer.email,
      debtor_document_number: customer.cpf.replace(/\D/g, ""),
      postback: webhookUrl,
      utm_source: trackingParams?.utm_source || trackingParams?.src || "",
      utm_campaign: trackingParams?.utm_campaign || trackingParams?.sck || "",
    })

    if (!trexPayResponse.success) {
      console.error("[PIX Create] Erro TrexPay:", trexPayResponse.error)
      return NextResponse.json(
        { error: trexPayResponse.error || "Erro ao gerar PIX" },
        { status: 500 }
      )
    }

    const transactionId = trexPayResponse.transaction_id || trexPayResponse.txid || orderId

    // Salva transação para consulta posterior e envio ao UTMFY
    saveTransaction(transactionId, {
      orderId,
      status: "pending",
      amount: total,
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone.replace(/\D/g, ""),
        document: customer.cpf.replace(/\D/g, ""),
      },
      trackingParams: {
        utm_source: trackingParams?.utm_source || null,
        utm_campaign: trackingParams?.utm_campaign || null,
        utm_medium: trackingParams?.utm_medium || null,
        utm_content: trackingParams?.utm_content || null,
        utm_term: trackingParams?.utm_term || null,
        src: trackingParams?.src || null,
        sck: trackingParams?.sck || null,
      },
      products: items.map((item: { id: string; name: string; price: number; quantity: number }) => ({
        id: item.id || "product",
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    })

    // Envia evento para UTMify (waiting_payment - venda pendente)
    try {
      const utmfyOrder: UtmfyOrderRequest = {
        orderId: orderId,
        platform: "papelaria-site",
        paymentMethod: "pix",
        status: "waiting_payment",
        createdAt: formatUtmfyDate(new Date()) || "",
        approvedDate: null,
        refundedAt: null,
        customer: {
          name: customer.name,
          email: customer.email,
          phone: customer.phone?.replace(/\D/g, "") || null,
          document: customer.cpf?.replace(/\D/g, "") || null,
          country: "BR",
        },
        products: items.map((item: { id: string; name: string; price: number; quantity: number }) => ({
          id: item.id || "product",
          name: item.name,
          planId: null,
          planName: null,
          quantity: item.quantity,
          priceInCents: toCents(item.price),
        })),
        trackingParameters: {
          src: trackingParams?.src || null,
          sck: trackingParams?.sck || null,
          utm_source: trackingParams?.utm_source || null,
          utm_campaign: trackingParams?.utm_campaign || null,
          utm_medium: trackingParams?.utm_medium || null,
          utm_content: trackingParams?.utm_content || null,
          utm_term: trackingParams?.utm_term || null,
        },
        commission: {
          totalPriceInCents: amountInCents,
          gatewayFeeInCents: 0,
          userCommissionInCents: amountInCents,
          currency: "BRL",
        },
      }

      console.log("[PIX Create] Enviando evento WAITING_PAYMENT para UTMify:", JSON.stringify(utmfyOrder))
      const utmfyResult = await sendOrderToUtmfy(utmfyOrder)
      console.log("[PIX Create] Resultado UTMify (pendente):", utmfyResult)
    } catch (utmfyError) {
      console.error("[PIX Create] Erro ao enviar para UTMify:", utmfyError)
    }

    // Retorna resposta com dados do PIX
    return NextResponse.json({
      success: true,
      orderId,
      transactionId,
      pix: {
        qrcode: trexPayResponse.qrcode,
        qrCodeBase64: trexPayResponse.qrcode_base64,
        expiresAt: trexPayResponse.expires_at,
      },
    })
  } catch (error) {
    console.error("[PIX Create] Erro:", error)
    return NextResponse.json({ error: "Erro interno ao processar pagamento" }, { status: 500 })
  }
}
