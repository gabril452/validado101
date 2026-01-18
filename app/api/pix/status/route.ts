import { type NextRequest, NextResponse } from "next/server"
import { getTransaction } from "@/lib/trexpay"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const transactionId = searchParams.get("transactionId")

    if (!transactionId) {
      return NextResponse.json({ error: "transactionId é obrigatório" }, { status: 400 })
    }

    console.log("[PIX Status] Consultando transação:", transactionId)

    // Busca transação salva localmente
    const transaction = getTransaction(transactionId)

    if (transaction) {
      console.log("[PIX Status] Transação encontrada:", transaction.orderId, "Status:", transaction.status)
      return NextResponse.json({
        success: true,
        transactionId,
        orderId: transaction.orderId,
        status: transaction.status,
        paidAt: transaction.paidAt?.toISOString() || null,
      })
    }

    // Se não encontrou, retorna pendente
    console.log("[PIX Status] Transação não encontrada, retornando pending")
    return NextResponse.json({
      success: true,
      transactionId,
      status: "pending",
    })
  } catch (error) {
    console.error("[PIX Status] Erro:", error)
    return NextResponse.json({ error: "Erro interno ao consultar status" }, { status: 500 })
  }
}
