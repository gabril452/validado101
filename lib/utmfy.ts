// UTMFY Tracking API Integration
// Docs: https://api.utmify.com.br

export interface UtmfyCustomer {
  name: string
  email: string
  phone: string | null
  document: string | null
  country?: string // ISO 3166-1 alfa-2
  ip?: string
}

export interface UtmfyProduct {
  id: string
  name: string
  planId: string | null
  planName: string | null
  quantity: number
  priceInCents: number
}

export interface UtmfyTrackingParameters {
  src: string | null
  sck: string | null
  utm_source: string | null
  utm_campaign: string | null
  utm_medium: string | null
  utm_content: string | null
  utm_term: string | null
}

export interface UtmfyCommission {
  totalPriceInCents: number
  gatewayFeeInCents: number
  userCommissionInCents: number
  currency?: "BRL" | "USD" | "EUR" | "GBP" | "ARS" | "CAD" | "COP" | "MXN" | "PYG" | "CLP" | "PEN" | "PLN"
}

export interface UtmfyOrderRequest {
  orderId: string
  platform: string
  paymentMethod: "credit_card" | "boleto" | "pix" | "paypal" | "free_price"
  status: "waiting_payment" | "paid" | "refused" | "refunded" | "chargedback"
  createdAt: string // YYYY-MM-DD HH:MM:SS (UTC)
  approvedDate: string | null // YYYY-MM-DD HH:MM:SS (UTC)
  refundedAt: string | null // YYYY-MM-DD HH:MM:SS (UTC)
  customer: UtmfyCustomer
  products: UtmfyProduct[]
  trackingParameters: UtmfyTrackingParameters
  commission: UtmfyCommission
  isTest?: boolean
}

// Format date to UTMFY format (YYYY-MM-DD HH:MM:SS in UTC)
export function formatUtmfyDate(date: Date | string | null): string | null {
  if (!date) return null
  const d = typeof date === "string" ? new Date(date) : date
  return d.toISOString().replace("T", " ").substring(0, 19)
}

const UTMFY_API_TOKEN = "5wWR3OtU5Pla0dTHL6qJg6Z3M7XvxUunCaVY"
const UTMFY_API_URL = "https://api.utmify.com.br/api-credentials/orders"

// Send order to UTMFY
export async function sendOrderToUtmfy(
  order: UtmfyOrderRequest,
): Promise<{ success: boolean; error?: string; response?: string }> {
  console.log("===========================================")
  console.log("[UTMFY] INICIANDO ENVIO DO PEDIDO")
  console.log("===========================================")
  console.log("[UTMFY] API URL:", UTMFY_API_URL)
  console.log("[UTMFY] Token:", UTMFY_API_TOKEN.substring(0, 15) + "...")
  console.log("[UTMFY] Order ID:", order.orderId)
  console.log("[UTMFY] Status:", order.status)
  console.log("[UTMFY] Customer:", order.customer.name, order.customer.email)
  console.log("[UTMFY] Products:", order.products.length)
  console.log("[UTMFY] Total:", order.commission.totalPriceInCents / 100)

  try {
    const requestBody = JSON.stringify(order)
    console.log("[UTMFY] Request body:", requestBody)

    const response = await fetch(UTMFY_API_URL, {
      method: "POST",
      headers: {
        "x-api-token": UTMFY_API_TOKEN,
        "Content-Type": "application/json",
      },
      body: requestBody,
    })

    console.log("[UTMFY] Response status:", response.status)
    console.log("[UTMFY] Response headers:", JSON.stringify(Object.fromEntries(response.headers.entries())))

    const responseText = await response.text()
    console.log("[UTMFY] Response body:", responseText)

    if (!response.ok) {
      console.error("[UTMFY] ERRO! Status:", response.status)
      console.error("[UTMFY] Erro body:", responseText)
      return { success: false, error: responseText, response: responseText }
    }

    console.log("===========================================")
    console.log("[UTMFY] PEDIDO ENVIADO COM SUCESSO!")
    console.log("[UTMFY] Order:", order.orderId, "Status:", order.status)
    console.log("===========================================")
    return { success: true, response: responseText }
  } catch (error) {
    console.error("===========================================")
    console.error("[UTMFY] ERRO AO ENVIAR PEDIDO!")
    console.error("[UTMFY] Error:", error)
    console.error("===========================================")
    return { success: false, error: String(error) }
  }
}

// Map payment status to UTMFY status
export function mapPaymentStatusToUtmfy(
  status: string,
): "waiting_payment" | "paid" | "refused" | "refunded" | "chargedback" {
  switch (status) {
    case "waiting_payment":
    case "pending":
      return "waiting_payment"
    case "approved":
    case "paid":
      return "paid"
    case "refused":
    case "cancelled":
      return "refused"
    case "refunded":
      return "refunded"
    case "chargeback":
      return "chargedback"
    default:
      return "waiting_payment"
  }
}
