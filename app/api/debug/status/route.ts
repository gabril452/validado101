import { NextResponse } from "next/server"

export async function GET() {
  const config = {
    utmfy: {
      apiToken: process.env.UTMFY_API_TOKEN ? "Configurado" : "NAO CONFIGURADO",
    },
    app: {
      url: process.env.NEXT_PUBLIC_APP_URL || "NAO CONFIGURADO",
    },
    environment: process.env.NODE_ENV,
  }

  // Test UTMFY connection
  let utmfyConnection = "NAO TESTADO"
  if (process.env.UTMFY_API_TOKEN) {
    try {
      const response = await fetch("https://api.utmify.com.br/api-credentials/orders", {
        method: "POST",
        headers: {
          "x-api-token": process.env.UTMFY_API_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: "TEST-" + Date.now(),
          platform: "CometaPapelaria",
          paymentMethod: "pix",
          status: "waiting_payment",
          createdAt: new Date().toISOString().replace("T", " ").substring(0, 19),
          approvedDate: null,
          refundedAt: null,
          customer: {
            name: "Teste Conexao",
            email: "teste@teste.com",
            phone: "11999999999",
            document: "12345678900",
            country: "BR",
          },
          products: [
            {
              id: "test-product",
              name: "Produto Teste",
              planId: null,
              planName: null,
              quantity: 1,
              priceInCents: 100,
            },
          ],
          trackingParameters: {
            src: null,
            sck: null,
            utm_source: null,
            utm_campaign: null,
            utm_medium: null,
            utm_content: null,
            utm_term: null,
          },
          commission: {
            totalPriceInCents: 100,
            gatewayFeeInCents: 10,
            userCommissionInCents: 90,
            currency: "BRL",
          },
          isTest: true,
        }),
      })

      if (response.ok) {
        utmfyConnection = "CONECTADO - Pedido de teste enviado!"
      } else {
        const error = await response.json()
        utmfyConnection = `ERRO: ${JSON.stringify(error)}`
      }
    } catch (error) {
      utmfyConnection = `ERRO DE CONEXAO: ${error}`
    }
  }

  return NextResponse.json({
    ...config,
    utmfyConnection,
    instructions: {
      testeManual: "Acesse /api/debug/status para ver o status das configuracoes",
      utmfy: "Configure UTMFY_API_TOKEN nas variáveis de ambiente",
      pagamento: "Integração de pagamento pendente - configure um novo provedor",
    },
  })
}
