"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"

export function MiniCart() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md bg-card flex flex-col p-0 rounded-l-3xl">
        <SheetHeader className="p-5 sm:p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
          <SheetTitle className="flex items-center gap-3 text-foreground">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
              <ShoppingBag className="h-5 w-5 text-primary" />
            </div>
            Carrinho ({itemCount} {itemCount === 1 ? "item" : "itens"})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center p-6">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <p className="text-lg font-medium text-foreground">Carrinho vazio</p>
              <p className="text-sm text-muted-foreground mt-1">Adicione produtos fofos para continuar!</p>
            </div>
            <Button
              onClick={closeCart}
              className="bg-gradient-to-r from-primary to-pink-400 text-white hover:from-primary/90 hover:to-pink-400/90 rounded-full px-6"
            >
              Explorar Produtos
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 p-3 bg-muted rounded-2xl">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground line-clamp-2">{item.product.name}</h4>
                      <p className="text-sm font-bold text-primary mt-1">{formatPrice(item.product.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 rounded-full bg-card"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center text-foreground">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 rounded-full bg-card"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0 rounded-full"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border p-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold text-foreground">
                <span>Subtotal</span>
                <span className="text-primary">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-sm text-muted-foreground">Frete calculado no checkout</p>
              <div className="grid gap-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-pink-400 text-white hover:from-primary/90 hover:to-pink-400/90 h-12 rounded-full font-semibold"
                >
                  <Link href="/carrinho" onClick={closeCart}>
                    Ver Carrinho
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12 rounded-full bg-card">
                  <Link href="/carrinho" onClick={closeCart}>
                    Finalizar Compra
                  </Link>
                </Button>
              </div>
              <Button variant="ghost" className="w-full text-muted-foreground text-sm rounded-full" onClick={closeCart}>
                Continuar Comprando
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
