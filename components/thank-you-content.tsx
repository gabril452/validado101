"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Package, Mail, Copy, Clock, QrCode, ArrowRight, Home, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QRCodeSVG } from "qrcode.react"

export function ThankYouContent() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("pedido") || "COM00000000"
  const paymentMethod = searchParams.get("metodo") || "pix"
  const transactionId = searchParams.get("transactionId")
  const qrcodeFromUrl = searchParams.get("qrcode")

  const [copied, setCopied] = useState(false)
  const [pixCode] = useState(qrcodeFromUrl || "")
  const [paymentStatus, setPaymentStatus] = useState<"waiting" | "paid" | "error">("waiting")
  const [isPolling, setIsPolling] = useState(paymentMethod === "pix" && !!transactionId)

  const checkPaymentStatus = useCallback(async () => {
    if (!transactionId) return

    try {
      const response = await fetch(`/api/pix/status?transactionId=${transactionId}`)
      const data = await response.json()

      if (data.status === "paid" || data.status === "approved") {
        setPaymentStatus("paid")
        setIsPolling(false)
      }
    } catch (error) {
      console.error("[ThankYou] Error checking status:", error)
    }
  }, [transactionId])

  useEffect(() => {
    if (!isPolling) return

    // Check immediately
    checkPaymentStatus()

    // Then poll every 5 seconds
    const interval = setInterval(checkPaymentStatus, 5000)

    // Stop polling after 30 minutes
    const timeout = setTimeout(
      () => {
        setIsPolling(false)
      },
      30 * 60 * 1000,
    )

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [isPolling, checkPaymentStatus])

  const handleCopyPixCode = () => {
    navigator.clipboard.writeText(pixCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Determine if payment is complete
  const isPaid = paymentStatus === "paid" || paymentMethod === "credit" || paymentMethod === "debit"

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div
              className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                isPaid ? "bg-green-500" : "bg-yellow-500"
              }`}
            >
              {isPaid ? <CheckCircle className="h-12 w-12 text-white" /> : <Clock className="h-12 w-12 text-white" />}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {isPaid ? "Pedido Realizado com Sucesso!" : "Aguardando Pagamento"}
            </h1>
            <p className="text-muted-foreground">
              {isPaid ? "Obrigado por comprar na Cometa Papelaria" : "Complete o pagamento via PIX"}
            </p>
          </div>

          {/* Order Info Card */}
          <Card className="bg-card border-border mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Número do Pedido</p>
                  <p className="text-xl font-bold text-card-foreground">{orderNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <div className={`flex items-center gap-2 ${isPaid ? "text-green-600" : "text-yellow-600"}`}>
                    {isPolling ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : isPaid ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                    <span className="font-medium">{isPaid ? "Aprovado" : "Aguardando Pagamento"}</span>
                  </div>
                </div>
              </div>

              {/* Pix Payment Instructions */}
              {paymentMethod === "pix" && !isPaid && (
                <div className="space-y-6">
                  <div className="bg-primary/5 rounded-xl p-6 text-center">
                    {pixCode ? (
                      <div className="w-48 h-48 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2">
                        <QRCodeSVG value={pixCode} size={176} level="M" includeMargin={false} />
                      </div>
                    ) : (
                      <div className="w-48 h-48 mx-auto mb-4 bg-card rounded-lg flex items-center justify-center border border-border">
                        <QrCode className="h-32 w-32 text-card-foreground" />
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mb-2">
                      Escaneie o QR Code ou copie o código abaixo para pagar
                    </p>
                    {pixCode && (
                      <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                        <code className="flex-1 text-xs text-card-foreground truncate">{pixCode}</code>
                        <Button variant="ghost" size="sm" onClick={handleCopyPixCode}>
                          {copied ? (
                            <span className="text-green-600 text-xs">Copiado!</span>
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-card-foreground">Pague em até 30 minutos</p>
                        <p className="text-sm text-muted-foreground">
                          Após o pagamento, seu pedido será processado automaticamente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Approved */}
              {isPaid && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-card-foreground">Pagamento Aprovado</p>
                      <p className="text-sm text-muted-foreground">
                        Seu pagamento foi aprovado e seu pedido já está sendo preparado.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-card border-border mb-6">
            <CardContent className="p-6">
              <h2 className="font-semibold text-card-foreground mb-4">Próximos Passos</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Confirmação por E-mail</p>
                    <p className="text-sm text-muted-foreground">
                      Você receberá um e-mail com os detalhes do seu pedido e código de rastreamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Package className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Preparação do Pedido</p>
                    <p className="text-sm text-muted-foreground">
                      Seus produtos serão separados e embalados com cuidado para envio.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Voltar para a Loja
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <Link href="/categoria/cadernos">
                Continuar Comprando
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Precisa de ajuda?{" "}
              <a href="#" className="text-primary hover:underline">
                Entre em contato
              </a>{" "}
              com nosso atendimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
