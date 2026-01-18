import { NextResponse } from "next/server"

const UTMFY_API_TOKEN = "5wWR3OtU5Pla0dTHL6qJg6Z3M7XvxUunCaVY"

export async function GET() {
  console.log("[Test UTMFY] Iniciando teste...")

  // Create a test order
  const testOrder = {
    orderId: `TEST${Date.now()}`,
    platform: "CometaPapelaria",
    paymentMethod: "pix",
    status: "waiting_payment",
    createdAt: new Date().toISOString().replace("T", " ").substring(0, 19),
    approvedDate: null,
    refundedAt: null,
    customer: {
      name: "Cliente Teste",
      email: "teste@teste.com",
      phone: "11999999999",
      document: "12345678901",
      country: "BR",
      ip: "127.0.0.1",
    },
    products: [
      {
        id: "prod-teste",
        name: "Produto Teste",
        planId: null,
        planName: null,
        quantity: 1,
        priceInCents: 1000,
      },
    ],
    trackingParameters: {
      src: null,
      sck: null,
      utm_source: "teste",
      utm_campaign: null,
      utm_medium: null,
      utm_content: null,
      utm_term: null,
    },
    commission: {
      totalPriceInCents: 1000,
      gatewayFeeInCents: 100,
      userCommissionInCents: 900,
      currency: "BRL",
    },
    isTest: true,
  }

  try {
    console.log("[Test UTMFY] Enviando para:", "https://api.utmify.com.br/api-credentials/orders")
    console.log("[Test UTMFY] Token:", UTMFY_API_TOKEN.substring(0, 10) + "...")
    console.log("[Test UTMFY] Body:", JSON.stringify(testOrder, null, 2))

    const response = await fetch("https://api.utmify.com.br/api-credentials/orders", {
      method: "POST",
      headers: {
        "x-api-token": UTMFY_API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testOrder),
    })

    const responseText = await response.text()
    console.log("[Test UTMFY] Response status:", response.status)
    console.log("[Test UTMFY] Response body:", responseText)

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      response: responseText,
      testOrderId: testOrder.orderId,
      apiUrl: "https://api.utmify.com.br/api-credentials/orders",
      tokenUsed: UTMFY_API_TOKEN.substring(0, 10) + "...",
    })
  } catch (error) {
    console.error("[Test UTMFY] Erro:", error)
    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 },
    )
  }
}
