import { ProductCard } from "@/components/product/product-card"
import type { Product } from "@/types"

interface ProductsSectionProps {
  title: string
  subtitle?: string
  products: Product[]
  showAll?: boolean
}

export function ProductsSection({ title, subtitle, products, showAll = false }: ProductsSectionProps) {
  const displayedProducts = showAll ? products : products.slice(0, 8)

  return (
    <section className="py-10 sm:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>
          {subtitle && <p className="text-sm sm:text-base text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
