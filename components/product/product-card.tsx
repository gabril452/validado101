"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="group overflow-hidden rounded-3xl bg-card kawaii-shadow kawaii-shadow-hover transition-all duration-300">
      <Link href={`/produto/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-muted rounded-t-3xl">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-[10px] sm:text-xs px-2 py-1 rounded-full">
              -{product.discount}%
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground text-[10px] sm:text-xs px-2 py-1 rounded-full">
              Mais Vendido
            </Badge>
          )}
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <Link href={`/produto/${product.slug}`}>
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">{product.brand}</p>
          <h3 className="font-medium text-xs sm:text-sm text-card-foreground line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem] hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-2">
          <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-secondary text-secondary" />
          <span className="text-xs sm:text-sm font-medium text-card-foreground">{product.rating}</span>
          <span className="text-[10px] sm:text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="mt-3">
          {product.originalPrice && (
            <p className="text-[10px] sm:text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </p>
          )}
          <p className="text-base sm:text-lg md:text-xl font-bold text-primary">{formatPrice(product.price)}</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground">ou 3x de {formatPrice(product.price / 3)}</p>
        </div>

        <Button
          className="w-full mt-4 bg-gradient-to-r from-primary to-pink-400 text-white hover:from-primary/90 hover:to-pink-400/90 h-10 sm:h-11 text-xs sm:text-sm font-semibold rounded-full shadow-md"
          onClick={(e) => {
            e.preventDefault()
            addItem(product)
          }}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Comprar
        </Button>
      </div>
    </div>
  )
}
