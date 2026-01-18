import Image from "next/image"
import Link from "next/link"
import { categories } from "@/data/products"

export function CategoriesSection() {
  return (
    <section className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">Categorias em Destaque</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Encontre tudo que você precisa para o ano letivo</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl aspect-square bg-muted"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <h3 className="font-semibold text-background text-xs sm:text-sm md:text-base">{category.name}</h3>
                <p className="text-[10px] sm:text-xs text-background/70">{category.productCount} produtos</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
