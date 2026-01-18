"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus, ShoppingBag, Tag, ArrowRight, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"
import type { ShippingOption } from "@/types"

const shippingOptions: ShippingOption[] = [
  { id: "pac", name: "PAC - Correios", price: 0, days: "5-8 dias úteis" },
  { id: "sedex", name: "SEDEX", price: 7.9, days: "2-3 dias úteis" },
  { id: "express", name: "Entrega Expressa", price: 12.9, days: "1-2 dias úteis" },
]

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    total,
    coupon,
    couponDiscount,
    applyCoupon,
    removeCoupon,
    shipping,
    setShipping,
  } = useCart()

  const [couponInput, setCouponInput] = useState("")
  const [couponError, setCouponError] = useState("")
  const [cep, setCep] = useState("")
  const [showShippingOptions, setShowShippingOptions] = useState(false)

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return

    const success = applyCoupon(couponInput)
    if (success) {
      setCouponError("")
      setCouponInput("")
    } else {
      setCouponError("Cupom inválido ou expirado")
    }
  }

  const handleCalculateShipping = () => {
    if (cep.replace(/\D/g, "").length === 8) {
      setShowShippingOptions(true)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-muted rounded-full flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Seu carrinho está vazio</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Que tal dar uma olhada nos nossos produtos e encontrar algo especial?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
            >
              <Link href="/">
                Explorar Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const discountAmount = (subtotal * couponDiscount) / 100

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3 sm:py-4">
        <div className="container mx-auto px-3 sm:px-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Início
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Carrinho</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">Meu Carrinho</h1>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 order-2 lg:order-1">
            {items.map((item) => (
              <Card key={item.product.id} className="bg-card border-border overflow-hidden">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex gap-2 sm:gap-4">
                    {/* Product Image */}
                    <Link
                      href={`/produto/${item.product.slug}`}
                      className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted"
                    >
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <Link href={`/produto/${item.product.slug}`}>
                        <h3 className="font-medium text-card-foreground hover:text-primary transition-colors line-clamp-2 text-xs sm:text-sm md:text-base break-words">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1 truncate">
                        {item.product.brand}
                      </p>

                      <div className="flex flex-col gap-1.5 sm:gap-3 mt-2 sm:mt-4">
                        {/* Quantity Control */}
                        <div className="flex items-center gap-1.5 sm:gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 sm:h-8 sm:w-8 bg-transparent flex-shrink-0"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <span className="w-5 sm:w-8 text-center font-medium text-foreground text-xs sm:text-base">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 sm:h-8 sm:w-8 bg-transparent flex-shrink-0"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div>
                          {item.product.originalPrice && (
                            <p className="text-[10px] sm:text-sm text-muted-foreground line-through">
                              {formatPrice(item.product.originalPrice * item.quantity)}
                            </p>
                          )}
                          <p className="text-sm sm:text-lg font-bold text-primary">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive flex-shrink-0 h-6 w-6 sm:h-10 sm:w-10"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary - Shows first on mobile */}
          <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
            {/* Shipping Calculator */}
            <Card className="bg-card border-border">
              <CardHeader className="p-3 sm:p-4 md:p-6 pb-2 sm:pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-card-foreground">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
                  Calcular Frete
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => {
                      setCep(e.target.value.replace(/\D/g, "").slice(0, 8))
                      setShowShippingOptions(false)
                    }}
                    className="flex-1 h-9 sm:h-10 text-sm"
                  />
                  <Button
                    onClick={handleCalculateShipping}
                    className="bg-primary text-primary-foreground h-9 sm:h-10 text-sm px-3 sm:px-4"
                  >
                    OK
                  </Button>
                </div>

                {showShippingOptions && (
                  <div className="space-y-2">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center justify-between p-2 sm:p-3 rounded-lg border cursor-pointer transition-colors ${
                          shipping?.id === option.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <input
                            type="radio"
                            name="shipping"
                            checked={shipping?.id === option.id}
                            onChange={() => setShipping(option)}
                            className="accent-primary"
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
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Coupon */}
            <Card className="bg-card border-border">
              <CardHeader className="p-3 sm:p-4 md:p-6 pb-2 sm:pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-card-foreground">
                  <Tag className="h-4 w-4 sm:h-5 sm:w-5" />
                  Cupom de Desconto
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                {coupon ? (
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-primary/10 rounded-lg">
                    <div>
                      <p className="font-medium text-primary text-sm sm:text-base">{coupon}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{couponDiscount}% de desconto aplicado</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removeCoupon}
                      className="text-destructive text-xs sm:text-sm h-8"
                    >
                      Remover
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Digite o cupom"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value.toUpperCase())
                          setCouponError("")
                        }}
                        className="flex-1 h-9 sm:h-10 text-sm"
                      />
                      <Button
                        onClick={handleApplyCoupon}
                        className="bg-primary text-primary-foreground h-9 sm:h-10 text-sm px-3 sm:px-4"
                      >
                        Aplicar
                      </Button>
                    </div>
                    {couponError && <p className="text-xs sm:text-sm text-destructive">{couponError}</p>}
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      Experimente: VOLTA10, ESCOLA20 ou PRIMEIRACOMPRA
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="bg-card border-border">
              <CardHeader className="p-3 sm:p-4 md:p-6 pb-2 sm:pb-3">
                <CardTitle className="text-base sm:text-lg text-card-foreground">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap justify-between gap-x-2 text-sm sm:text-base text-card-foreground">
                    <span className="flex-shrink-0">Subtotal</span>
                    <span className="font-medium break-all text-right">{formatPrice(subtotal)}</span>
                  </div>

                  {coupon && (
                    <div className="flex flex-wrap justify-between gap-x-2 text-green-600 text-sm sm:text-base">
                      <span className="flex-shrink-0">Desconto ({couponDiscount}%)</span>
                      <span className="font-medium break-all text-right">-{formatPrice(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap justify-between gap-x-2 text-sm sm:text-base text-card-foreground">
                    <span className="flex-shrink-0">Frete</span>
                    <span
                      className={`font-medium break-all text-right ${shipping?.price === 0 ? "text-green-600 font-semibold" : ""}`}
                    >
                      {shipping ? (shipping.price === 0 ? "Grátis" : formatPrice(shipping.price)) : "Calcule o frete"}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-3 sm:pt-4">
                  <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-1 text-lg sm:text-xl font-bold text-card-foreground">
                    <span className="flex-shrink-0">Total</span>
                    <span className="break-all text-right">{formatPrice(total)}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    ou 3x de {formatPrice(total / 3)} sem juros
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base h-11 sm:h-12"
                >
                  <Link href="/checkout">
                    Ir para o Pagamento
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full bg-transparent h-10 sm:h-11 text-sm">
                  <Link href="/">Continuar Comprando</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
