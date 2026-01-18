import { type NextRequest, NextResponse } from "next/server"
import {
  verifyTrexPaySignature,
  mapTrexPayStatus,
  getTransaction,
  updateTransactionStatus,
  type TrexPayWebhookPayload,
} from "@/lib/trexpay"
import {
  sendOrderToUtmfy,
  formatUtmfyDate,
  mapPaymentStatusToUtmfy,
  type UtmfyOrderRequest,
} from "@/lib/utmfy"

// Converte valor em reais para centavos
function toCents(value: number): number {
  return Math.round(value * 100)
}

export async function POST(request: NextRequest) {
  console.log("===========================================")
  console.log("[TrexPay Webhook] RECEBENDO WEBHOOK")
  console.log("===========================================")

  try {
    const signature = request.headers.get("x-signature") || request.headers.get("signature") || ""
    const rawBody = await request.text()

    console.log("[TrexPay Webhook] Signature header:", signature)
    console.log("[TrexPay Webhook] Raw body:", rawBody)

    let payload: TrexPayWebhookPayload
    try {
      payload = JSON.parse(rawBody)
    } catch {
      console.error("[TrexPay Webhook] Erro ao parsear JSON")
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
    }

    console.log("[TrexPay Webhook] Event:", payload.event)
    console.log("[TrexPay Webhook] Data:", JSON.stringify(payload.data, null, 2))

    // Verifica assinatura (se fornecida)
    if (signature && process.env.TREXPAY_SECRET) {
      const isValid = verifyTrexPaySignature(payload, signature)
      if (!isValid) {
        console.error("[TrexPay Webhook] Assinatura inválida!")
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
      }
      console.log("[TrexPay Webhook] Assinatura válida!")
    } else {
      console.log("[TrexPay Webhook] Assinatura não verificada (secret não configurado ou assinatura não fornecida)")
    }

    // Processa o evento
    const { data } = payload
    const transactionId = data.idTransaction || data.metadata?.txid
    const status = mapTrexPayStatus(data.status)

    console.log("[TrexPay Webhook] Transaction ID:", transactionId)
    console.log("[TrexPay Webhook] Status original:", data.status)
    console.log("[TrexPay Webhook] Status mapeado:", status)

    // Busca transação salva
    const transaction = getTransaction(transactionId)

    if (!transaction) {
      console.warn("[TrexPay Webhook] Transação não encontrada:", transactionId)
      // Mesmo sem a transação salva, retornamos sucesso para o TrexPay
      return NextResponse.json({ success: true, message: "Transaction not found but acknowledged" })
    }

    console.log("[TrexPay Webhook] Transação encontrada:", transaction.orderId)
    console.log("[TrexPay Webhook] Cliente:", transaction.customer.name)
    console.log("[TrexPay Webhook] Tracking params:", JSON.stringify(transaction.trackingParams))

    // Atualiza status da transação
    const paidAt = status === "paid" ? new Date(data.paid_at || Date.now()) : undefined
    updateTransactionStatus(transactionId, status, paidAt)

    // Envia atualização para UTMFY
    if (status === "paid") {
      console.log("[TrexPay Webhook] Pagamento APROVADO! Enviando para UTMify...")

      try {
        const utmfyOrder: UtmfyOrderRequest = {
          orderId: transaction.orderId,
          platform: "papelaria-site",
          paymentMethod: "pix",
          status: "paid",
          createdAt: formatUtmfyDate(transaction.createdAt) || "",
          approvedDate: formatUtmfyDate(paidAt || new Date()),
          refundedAt: null,
          customer: {
            name: transaction.customer.name,
            email: transaction.customer.email,
            phone: transaction.customer.phone || null,
            document: transaction.customer.document || null,
            country: "BR",
          },
          products: transaction.products.map((item) => ({
            id: item.id || "product",
            name: item.name,
            planId: null,
            planName: null,
            quantity: item.quantity,
            priceInCents: toCents(item.price),
          })),
          trackingParameters: {
            src: transaction.trackingParams.src || null,
            sck: transaction.trackingParams.sck || null,
            utm_source: transaction.trackingParams.utm_source || null,
            utm_campaign: transaction.trackingParams.utm_campaign || null,
            utm_medium: transaction.trackingParams.utm_medium || null,
            utm_content: transaction.trackingParams.utm_content || null,
            utm_term: transaction.trackingParams.utm_term || null,
          },
          commission: {
            totalPriceInCents: toCents(transaction.amount),
            gatewayFeeInCents: 0,
            userCommissionInCents: toCents(transaction.amount),
            currency: "BRL",
          },
        }

        console.log("[TrexPay Webhook] Enviando evento PAID para UTMify:", JSON.stringify(utmfyOrder))
        const utmfyResult = await sendOrderToUtmfy(utmfyOrder)
        console.log("[TrexPay Webhook] Resultado UTMify (aprovado):", utmfyResult)

        console.log("===========================================")
        console.log("[TrexPay Webhook] VENDA APROVADA ENVIADA PARA UTMFY!")
        console.log("[TrexPay Webhook] Order:", transaction.orderId)
        console.log("[TrexPay Webhook] UTM Source:", transaction.trackingParams.utm_source)
        console.log("[TrexPay Webhook] UTM Campaign:", transaction.trackingParams.utm_campaign)
        console.log("===========================================")
      } catch (utmfyError) {
        console.error("[TrexPay Webhook] Erro ao enviar para UTMify:", utmfyError)
      }
    } else if (status === "cancelled" || status === "expired") {
      console.log("[TrexPay Webhook] Pagamento CANCELADO/EXPIRADO! Enviando para UTMify...")

      try {
        const utmfyStatus = mapPaymentStatusToUtmfy(status === "cancelled" ? "refused" : "refused")

        const utmfyOrder: UtmfyOrderRequest = {
          orderId: transaction.orderId,
          platform: "papelaria-site",
          paymentMethod: "pix",
          status: utmfyStatus,
          createdAt: formatUtmfyDate(transaction.createdAt) || "",
          approvedDate: null,
          refundedAt: null,
          customer: {
            name: transaction.customer.name,
            email: transaction.customer.email,
            phone: transaction.customer.phone || null,
            document: transaction.customer.document || null,
            country: "BR",
          },
          products: transaction.products.map((item) => ({
            id: item.id || "product",
            name: item.name,
            planId: null,
            planName: null,
            quantity: item.quantity,
            priceInCents: toCents(item.price),
          })),
          trackingParameters: {
            src: transaction.trackingParams.src || null,
            sck: transaction.trackingParams.sck || null,
            utm_source: transaction.trackingParams.utm_source || null,
            utm_campaign: transaction.trackingParams.utm_campaign || null,
            utm_medium: transaction.trackingParams.utm_medium || null,
            utm_content: transaction.trackingParams.utm_content || null,
            utm_term: transaction.trackingParams.utm_term || null,
          },
          commission: {
            totalPriceInCents: toCents(transaction.amount),
            gatewayFeeInCents: 0,
            userCommissionInCents: toCents(transaction.amount),
            currency: "BRL",
          },
        }

        console.log("[TrexPay Webhook] Enviando evento REFUSED para UTMify:", JSON.stringify(utmfyOrder))
        const utmfyResult = await sendOrderToUtmfy(utmfyOrder)
        console.log("[TrexPay Webhook] Resultado UTMify (cancelado):", utmfyResult)
      } catch (utmfyError) {
        console.error("[TrexPay Webhook] Erro ao enviar para UTMify:", utmfyError)
      }
    }

    console.log("===========================================")
    console.log("[TrexPay Webhook] WEBHOOK PROCESSADO COM SUCESSO")
    console.log("===========================================")

    return NextResponse.json({ success: true, status })
  } catch (error) {
    console.error("===========================================")
    console.error("[TrexPay Webhook] ERRO AO PROCESSAR WEBHOOK!")
    console.error("[TrexPay Webhook] Error:", error)
    console.error("===========================================")
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// GET para verificação de saúde do webhook
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "TrexPay webhook endpoint is active",
    timestamp: new Date().toISOString(),
  })
}
