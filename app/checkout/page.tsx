"use client"

import { useState, Suspense, useEffect, useCallback } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Check, MapPin, Truck, CreditCard, Shield, QrCode, Loader2, Copy, Clock, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { formatPrice, formatCPF, formatPhone, formatCEP } from "@/lib/utils"
import { useUtmParams, getUtmParamsFromStorage } from "@/hooks/use-utm-params"
import type { ShippingOption } from "@/types"
import { QRCodeSVG } from "qrcode.react"

interface PixData {
  qrcode: string
  transactionId: string
  orderId: string
}

function CheckoutContent() {
  const router = useRouter()
  const { items, subtotal, total, couponDiscount, shipping, setShipping, clearCart } = useCart()
  const utmParams = useUtmParams()

  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [cep, setCep] = useState("")
  const [addressData, setAddressData] = useState({
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  })
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  })
  const [error, setError] = useState<string | null>(null)

  const [showPixModal, setShowPixModal] = useState(false)
  const [pixData, setPixData] = useState<PixData | null>(null)
  const [copied, setCopied] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"waiting" | "paid" | "error">("waiting")
  const [isPolling, setIsPolling] = useState(false)

  const checkPaymentStatus = useCallback(async () => {
    if (!pixData?.transactionId) return

    try {
      const response = await fetch(`/api/pix/status?transactionId=${pixData.transactionId}`)
      const data = await response.json()

      if (data.status === "paid" || data.status === "approved") {
        setPaymentStatus("paid")
        setIsPolling(false)
        setTimeout(() => {
          clearCart()
          router.push(`/obrigado?pedido=${pixData.orderId}&metodo=pix&status=paid`)
        }, 2000)
      }
    } catch (error) {
      console.error("Error checking status:", error)
    }
  }, [pixData, clearCart, router])

  useEffect(() => {
    if (!isPolling || !pixData) return

    checkPaymentStatus()
    const interval = setInterval(checkPaymentStatus, 5000)
    const timeout = setTimeout(() => setIsPolling(false), 30 * 60 * 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [isPolling, pixData, checkPaymentStatus])

  const handleCopyPixCode = () => {
    if (pixData?.qrcode) {
      navigator.clipboard.writeText(pixData.qrcode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(items.length > 0 && customerData.name && customerData.email && customerData.cpf && customerData.phone)
      case 2:
        return !!(
          cep &&
          addressData.street &&
          addressData.number &&
          addressData.neighborhood &&
          addressData.city &&
          addressData.state
        )
      case 3:
        return !!shipping
      default:
        return false
    }
  }

  const handleNextStep = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setStep((prev) => prev + 1)
      }
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  const handleFinishOrder = async () => {
    if (!validateStep(3)) return

    setIsProcessing(true)
    setError(null)

    try {
      const freshUtmParams = getUtmParamsFromStorage()
      console.log("[v0] UTM Params being sent:", JSON.stringify(freshUtmParams))

      const response = await fetch("/api/pix/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: customerData,
          address: {
            ...addressData,
            cep: cep,
          },
          items: items.map((item) => ({
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
          })),
          total: total,
          shipping: shipping,
          trackingParams: freshUtmParams,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erro ao gerar PIX")
      }

      setPixData({
        qrcode: data.pix?.qrcode || data.pix?.pixKey || "",
        transactionId: data.transactionId,
        orderId: data.orderId,
      })
      setShowPixModal(true)
      setIsPolling(true)
      setPaymentStatus("waiting")
    } catch (err) {
      console.error("Checkout Error:", err)
      setError(err instanceof Error ? err.message : "Erro ao processar pagamento")
    } finally {
      setIsProcessing(false)
    }
  }

  if (items.length === 0 && !showPixModal) {
    router.push("/carrinho")
    return null
  }

  const steps = [
    { id: 1, title: "Produto", icon: Truck },
    { id: 2, title: "Endereço", icon: MapPin },
    { id: 3, title: "Pagamento", icon: CreditCard },
  ]

  const shippingOptions: ShippingOption[] = [
    { id: "pac", name: "PAC - Correios", price: 0, days: "5-8 dias úteis" },
    { id: "sedex", name: "SEDEX", price: 7.9, days: "2-3 dias úteis" },
    { id: "express", name: "Entrega Expressa", price: 12.9, days: "1-2 dias úteis" },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      {showPixModal && pixData && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              {/* Header do Modal */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  {paymentStatus === "paid" ? (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h2 className="font-bold text-card-foreground text-sm sm:text-base">
                      {paymentStatus === "paid" ? "Pagamento Aprovado!" : "Aguardando Pagamento"}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground">Pedido #{pixData.orderId}</p>
                  </div>
                </div>
                {paymentStatus !== "paid" && (
                  <button
                    onClick={() => setShowPixModal(false)}
                    className="text-muted-foreground hover:text-foreground p-1"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {paymentStatus === "paid" ? (
                <div className="text-center py-4 sm:py-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2">Pagamento Confirmado!</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Seu pedido foi aprovado e está sendo preparado.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Redirecionando...</p>
                </div>
              ) : (
                <>
                  {/* QR Code */}
                  <div className="bg-white rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                    <div className="flex items-center justify-center">
                      {pixData.qrcode ? (
                        <QRCodeSVG
                          value={pixData.qrcode}
                          size={160}
                          level="M"
                          includeMargin={false}
                          className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                        />
                      ) : (
                        <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] flex items-center justify-center bg-muted rounded-lg">
                          <QrCode className="h-16 w-16 sm:h-20 sm:w-20 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Valor */}
                  <div className="bg-green-500/10 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Valor a pagar</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-600">
                      {formatPrice(subtotal + (shipping?.price || 0))}
                    </p>
                  </div>

                  {/* Chave PIX Copia e Cola */}
                  {pixData.qrcode && (
                    <div className="mb-3 sm:mb-4">
                      <p className="text-xs sm:text-sm font-medium text-card-foreground mb-2">Pix Copia e Cola</p>
                      <div className="flex items-center gap-2 bg-muted p-2 sm:p-3 rounded-lg">
                        <code className="flex-1 text-[10px] sm:text-xs text-card-foreground break-all line-clamp-2">
                          {pixData.qrcode}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopyPixCode}
                          className="flex-shrink-0 h-8 w-8 p-0 sm:h-auto sm:w-auto sm:px-3"
                        >
                          {copied ? (
                            <span className="text-green-600 text-[10px] sm:text-xs font-medium hidden sm:inline">
                              Copiado!
                            </span>
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Botão Copiar */}
                  <Button
                    onClick={handleCopyPixCode}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-3 sm:mb-4 h-10 sm:h-11 text-sm"
                    disabled={!pixData.qrcode}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    {copied ? "Copiado!" : "Copiar Chave PIX"}
                  </Button>

                  {/* Aviso de tempo */}
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-card-foreground text-xs sm:text-sm">Pague em até 30 minutos</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          O pagamento é confirmado automaticamente. Não feche esta página.
                        </p>
                      </div>
                    </div>
                  </div>

                  {isPolling && (
                    <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4 text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-xs sm:text-sm">Verificando pagamento...</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center">
            {steps.map((stepItem, index) => (
              <div key={stepItem.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                      step > stepItem.id
                        ? "bg-green-500 text-white"
                        : step === stepItem.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > stepItem.id ? (
                      <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <stepItem.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs mt-1 sm:mt-2 ${
                      step >= stepItem.id ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {stepItem.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 sm:w-12 md:w-24 h-1 mx-1 sm:mx-2 rounded ${step > stepItem.id ? "bg-green-500" : "bg-muted"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-destructive/10 border border-destructive/30 rounded-xl text-destructive text-center text-sm">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Order Summary - Shows first on mobile */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <Card className="bg-card border-border lg:sticky lg:top-4">
              <CardHeader className="p-3 sm:p-4 md:p-6 pb-2 sm:pb-3">
                <CardTitle className="text-base sm:text-lg">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="space-y-2 sm:space-y-3 max-h-32 sm:max-h-48 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground truncate max-w-[60%]">
                        {item.quantity}x {item.product.name.slice(0, 20)}...
                      </span>
                      <span className="text-card-foreground font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-3 sm:pt-4 space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-card-foreground">{formatPrice(subtotal)}</span>
                  </div>

                  {shipping && (
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Frete</span>
                      <span className={shipping.price === 0 ? "text-green-600 font-medium" : "text-card-foreground"}>
                        {shipping.price === 0 ? "Grátis" : formatPrice(shipping.price)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t border-border pt-3 sm:pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-card-foreground text-sm sm:text-base">Total</span>
                    <span className="font-bold text-lg sm:text-xl text-primary">
                      {formatPrice(subtotal + (shipping?.price || 0))}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                {/* Step 1: Customer Data */}
                {step === 1 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-card-foreground mb-1">Produto</h2>
                      <p className="text-muted-foreground text-xs sm:text-sm">Seu pedido</p>
                    </div>

                    <div className="space-y-2 sm:space-y-3 max-h-48 sm:max-h-60 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.product.id} className="flex gap-3">
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            <Image
                              src={item.product.image || "/placeholder.svg"}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-medium text-card-foreground line-clamp-2">
                              {item.product.name}
                            </p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">Qtd: {item.quantity}</p>
                            <p className="text-xs sm:text-sm font-semibold text-primary">
                              {formatPrice(item.product.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Customer Information */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="name" className="text-foreground text-sm">
                          Nome *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Seu nome"
                          value={customerData.name}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, name: e.target.value }))}
                          className="h-10 sm:h-11 text-sm"
                        />
                      </div>

                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="email" className="text-foreground text-sm">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          placeholder="seuemail@example.com"
                          value={customerData.email}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, email: e.target.value }))}
                          className="h-10 sm:h-11 text-sm"
                        />
                      </div>

                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="cpf" className="text-foreground text-sm">
                          CPF *
                        </Label>
                        <Input
                          id="cpf"
                          placeholder="000.000.000-00"
                          value={customerData.cpf}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, cpf: formatCPF(e.target.value) }))}
                          className="h-10 sm:h-11 text-sm"
                        />
                      </div>

                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="phone" className="text-foreground text-sm">
                          Telefone *
                        </Label>
                        <Input
                          id="phone"
                          placeholder="(00) 00000-0000"
                          value={customerData.phone}
                          onChange={(e) => setCustomerData((prev) => ({ ...prev, phone: formatPhone(e.target.value) }))}
                          className="h-10 sm:h-11 text-sm"
                        />
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                      <Button
                        variant="outline"
                        onClick={handlePrevStep}
                        disabled={step === 1 || isProcessing}
                        className="bg-transparent text-sm h-10 sm:h-11"
                      >
                        Voltar
                      </Button>

                      <Button
                        onClick={handleNextStep}
                        disabled={!validateStep(step)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm h-10 sm:h-11"
                      >
                        Continuar
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Address */}
                {step === 2 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-card-foreground mb-1">Endereço de Entrega</h2>
                      <p className="text-muted-foreground text-xs sm:text-sm">Onde devemos entregar seu pedido?</p>
                    </div>

                    <div className="grid gap-3 sm:gap-4">
                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="cep" className="text-foreground text-sm">
                          CEP *
                        </Label>
                        <Input
                          id="cep"
                          placeholder="00000-000"
                          value={cep}
                          onChange={(e) => setCep(formatCEP(e.target.value))}
                          maxLength={9}
                          className="h-10 sm:h-11 text-sm"
                        />
                      </div>

                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="street" className="text-foreground text-sm">
                          Rua *
                        </Label>
                        <Input
                          id="street"
                          placeholder="Nome da rua"
                          value={addressData.street}
                          onChange={(e) => setAddressData((prev) => ({ ...prev, street: e.target.value }))}
                          className="h-10 sm:h-11 text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="grid gap-1.5 sm:gap-2">
                          <Label htmlFor="number" className="text-foreground text-sm">
                            Número *
                          </Label>
                          <Input
                            id="number"
                            placeholder="123"
                            value={addressData.number}
                            onChange={(e) => setAddressData((prev) => ({ ...prev, number: e.target.value }))}
                            className="h-10 sm:h-11 text-sm"
                          />
                        </div>
                        <div className="grid gap-1.5 sm:gap-2">
                          <Label htmlFor="complement" className="text-foreground text-sm">
                            Complemento
                          </Label>
                          <Input
                            id="complement"
                            placeholder="Apto, Bloco..."
                            value={addressData.complement}
                            onChange={(e) => setAddressData((prev) => ({ ...prev, complement: e.target.value }))}
                            className="h-10 sm:h-11 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="neighborhood" className="text-foreground text-sm">
                          Bairro *
                        </Label>
                        <Input
                          id="neighborhood"
                          placeholder="Nome do bairro"
                          value={addressData.neighborhood}
                          onChange={(e) => setAddressData((prev) => ({ ...prev, neighborhood: e.target.value }))}
                          className="h-10 sm:h-11 text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="grid gap-1.5 sm:gap-2">
                          <Label htmlFor="city" className="text-foreground text-sm">
                            Cidade *
                          </Label>
                          <Input
                            id="city"
                            placeholder="Sua cidade"
                            value={addressData.city}
                            onChange={(e) => setAddressData((prev) => ({ ...prev, city: e.target.value }))}
                            className="h-10 sm:h-11 text-sm"
                          />
                        </div>
                        <div className="grid gap-1.5 sm:gap-2">
                          <Label htmlFor="state" className="text-foreground text-sm">
                            Estado *
                          </Label>
                          <Input
                            id="state"
                            placeholder="Seu Estado"
                            value={addressData.state}
                            onChange={(e) =>
                              setAddressData((prev) => ({ ...prev, state: e.target.value.toUpperCase().slice(0, 2) }))
                            }
                            maxLength={2}
                            className="h-10 sm:h-11 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                      <Button
                        variant="outline"
                        onClick={handlePrevStep}
                        disabled={step === 1 || isProcessing}
                        className="bg-transparent text-sm h-10 sm:h-11"
                      >
                        Voltar
                      </Button>

                      <Button
                        onClick={handleNextStep}
                        disabled={!validateStep(step)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm h-10 sm:h-11"
                      >
                        Continuar
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-lg sm:text-xl font-bold text-card-foreground mb-1">Forma de Pagamento</h2>
                      <p className="text-muted-foreground text-xs sm:text-sm">Pagamento via Pix</p>
                    </div>

                    {console.log("[v0] Step 3 rendering, shippingOptions:", shippingOptions)}

                    {/* Shipping Options */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="font-medium text-card-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                        Escolha o frete
                      </h3>
                      <div className="space-y-2">
                        {shippingOptions.map((option) => {
                          console.log("[v0] Rendering shipping option:", option)
                          return (
                            <label
                              key={option.id}
                              className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border cursor-pointer transition-colors ${
                                shipping?.id === option.id
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="flex items-center gap-2 sm:gap-3">
                                <input
                                  type="radio"
                                  name="shipping"
                                  value={option.id}
                                  checked={shipping?.id === option.id}
                                  onChange={() => setShipping(option)}
                                  className="w-4 h-4 text-primary"
                                />
                                <div>
                                  <p className="font-medium text-card-foreground text-xs sm:text-sm">{option.name}</p>
                                  <p className="text-[10px] sm:text-xs text-muted-foreground">{option.days}</p>
                                </div>
                              </div>
                              <span
                                className={`font-semibold text-xs sm:text-sm ${option.price === 0 ? "text-green-600" : "text-card-foreground"}`}
                              >
                                {option.price === 0 ? "Grátis" : formatPrice(option.price)}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {/* Pix Payment */}
                    <div className="bg-muted/50 rounded-xl p-4 sm:p-6 text-center">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src="https://i.postimg.cc/DZhxRJxg/Untitled-design-3.png"
                          alt="PIX QR Code"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-card-foreground font-medium mb-2 text-sm sm:text-base">Pague com Pix</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        O QR Code será gerado após a confirmação do pedido
                      </p>
                      <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-500/10 rounded-lg">
                        <p className="text-green-600 font-semibold text-sm sm:text-base">
                          Valor: {formatPrice(subtotal + (shipping?.price || 0))}
                        </p>
                      </div>
                    </div>

                    {/* Security Badge */}
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-muted/50 rounded-xl">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-card-foreground text-xs sm:text-sm">Pagamento 100% Seguro</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          Seus dados são criptografados e protegidos
                        </p>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                      <Button
                        variant="outline"
                        onClick={handlePrevStep}
                        disabled={step === 1 || isProcessing}
                        className="bg-transparent text-sm h-10 sm:h-11"
                      >
                        Voltar
                      </Button>

                      <Button
                        onClick={handleFinishOrder}
                        disabled={!validateStep(3) || isProcessing}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[140px] sm:min-w-[180px] text-sm h-10 sm:h-11"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Processando...
                          </>
                        ) : (
                          "Finalizar Pedido"
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  )
}
