// TrexPay Gateway Integration
// Docs: https://app.trexpay.com.br

import crypto from "crypto"

// Configurações da TrexPay
const TREXPAY_API_URL = "https://app.trexpay.com.br/api/wallet/deposit/payment"
const TREXPAY_TOKEN = process.env.TREXPAY_TOKEN || ""
const TREXPAY_SECRET = process.env.TREXPAY_SECRET || ""

export interface TrexPayCreatePixRequest {
  amount: number
  debtor_name: string
  phone: string
  email: string
  debtor_document_number: string
  postback: string
  utm_source?: string
  utm_campaign?: string
  split_email?: string
  split_percentage?: string
}

export interface TrexPayCreatePixResponse {
  success: boolean
  qrcode?: string
  qrcode_base64?: string
  transaction_id?: string
  txid?: string
  expires_at?: string
  error?: string
}

export interface TrexPayWebhookPayload {
  event: string
  data: {
    idTransaction: string
    status: string
    amount: number
    paid_at?: string
    typeTransaction: string
    payer: {
      name: string
      document: string
    }
    metadata: {
      txid: string
    }
  }
  signature?: string
}

// Verifica assinatura do webhook
export function verifyTrexPaySignature(
  payload: TrexPayWebhookPayload,
  signature: string,
  secret: string = TREXPAY_SECRET
): boolean {
  if (!signature || !secret) {
    console.error("[TrexPay] Assinatura ou secret não fornecidos")
    return false
  }

  try {
    const expectedSignature =
      "sha256=" +
      crypto.createHmac("sha256", secret).update(JSON.stringify(payload)).digest("hex")

    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))
  } catch (error) {
    console.error("[TrexPay] Erro ao verificar assinatura:", error)
    return false
  }
}

// Cria cobrança PIX
export async function createTrexPayPix(
  request: TrexPayCreatePixRequest
): Promise<TrexPayCreatePixResponse> {
  console.log("===========================================")
  console.log("[TrexPay] INICIANDO CRIACAO DE PIX")
  console.log("===========================================")
  console.log("[TrexPay] API URL:", TREXPAY_API_URL)
  console.log("[TrexPay] Token:", TREXPAY_TOKEN.substring(0, 10) + "...")
  console.log("[TrexPay] Valor:", request.amount)
  console.log("[TrexPay] Cliente:", request.debtor_name)
  console.log("[TrexPay] Email:", request.email)
  console.log("[TrexPay] Documento:", request.debtor_document_number)
  console.log("[TrexPay] UTM Source:", request.utm_source)
  console.log("[TrexPay] UTM Campaign:", request.utm_campaign)
  console.log("[TrexPay] Postback URL:", request.postback)

  if (!TREXPAY_TOKEN || !TREXPAY_SECRET) {
    console.error("[TrexPay] Token ou Secret não configurados!")
    return {
      success: false,
      error: "Credenciais TrexPay não configuradas",
    }
  }

  try {
    const requestBody = {
      token: TREXPAY_TOKEN,
      secret: TREXPAY_SECRET,
      amount: request.amount,
      debtor_name: request.debtor_name,
      phone: request.phone,
      email: request.email,
      debtor_document_number: request.debtor_document_number,
      method_pay: "pix",
      postback: request.postback,
      utm_source: request.utm_source || "",
      utm_campaign: request.utm_campaign || "",
      split_email: request.split_email || "",
      split_percentage: request.split_percentage || "",
    }

    console.log("[TrexPay] Request body:", JSON.stringify(requestBody, null, 2))

    const response = await fetch(TREXPAY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    })

    console.log("[TrexPay] Response status:", response.status)

    const responseData = await response.json()
    console.log("[TrexPay] Response body:", JSON.stringify(responseData, null, 2))

    if (!response.ok) {
      console.error("[TrexPay] ERRO! Status:", response.status)
      return {
        success: false,
        error: responseData.message || responseData.error || "Erro ao criar PIX",
      }
    }

    console.log("===========================================")
    console.log("[TrexPay] PIX CRIADO COM SUCESSO!")
    console.log("===========================================")

    return {
      success: true,
      qrcode: responseData.qrcode || responseData.pix_code || responseData.emv,
      qrcode_base64: responseData.qrcode_base64 || responseData.qr_code_base64,
      transaction_id: responseData.transaction_id || responseData.id || responseData.idTransaction,
      txid: responseData.txid || responseData.tx_id,
      expires_at: responseData.expires_at || responseData.expiration,
    }
  } catch (error) {
    console.error("===========================================")
    console.error("[TrexPay] ERRO AO CRIAR PIX!")
    console.error("[TrexPay] Error:", error)
    console.error("===========================================")
    return {
      success: false,
      error: String(error),
    }
  }
}

// Mapeia status TrexPay para status interno
export function mapTrexPayStatus(status: string): "pending" | "paid" | "cancelled" | "expired" {
  switch (status.toLowerCase()) {
    case "paid":
    case "approved":
    case "completed":
      return "paid"
    case "cancelled":
    case "canceled":
    case "refused":
      return "cancelled"
    case "expired":
      return "expired"
    case "pending":
    case "waiting_payment":
    default:
      return "pending"
  }
}

// Store para guardar transações (em produção usar banco de dados)
const transactionStore = new Map<
  string,
  {
    orderId: string
    status: string
    amount: number
    customer: {
      name: string
      email: string
      phone: string
      document: string
    }
    trackingParams: {
      utm_source?: string
      utm_campaign?: string
      utm_medium?: string
      utm_content?: string
      utm_term?: string
      src?: string
      sck?: string
    }
    products: Array<{
      id: string
      name: string
      price: number
      quantity: number
    }>
    createdAt: Date
    paidAt?: Date
  }
>()

export function saveTransaction(
  transactionId: string,
  data: {
    orderId: string
    status: string
    amount: number
    customer: {
      name: string
      email: string
      phone: string
      document: string
    }
    trackingParams: {
      utm_source?: string
      utm_campaign?: string
      utm_medium?: string
      utm_content?: string
      utm_term?: string
      src?: string
      sck?: string
    }
    products: Array<{
      id: string
      name: string
      price: number
      quantity: number
    }>
  }
) {
  transactionStore.set(transactionId, {
    ...data,
    createdAt: new Date(),
  })
  console.log("[TrexPay] Transação salva:", transactionId)
}

export function getTransaction(transactionId: string) {
  return transactionStore.get(transactionId)
}

export function updateTransactionStatus(
  transactionId: string,
  status: string,
  paidAt?: Date
) {
  const transaction = transactionStore.get(transactionId)
  if (transaction) {
    transaction.status = status
    if (paidAt) {
      transaction.paidAt = paidAt
    }
    transactionStore.set(transactionId, transaction)
    console.log("[TrexPay] Status da transação atualizado:", transactionId, status)
  }
}
