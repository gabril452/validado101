"use client"

import { useSearchParams } from "next/navigation"
import { searchProducts } from "@/data/products"
import { ProductCard } from "@/components/product/product-card"
import { Search } from "lucide-react"

export function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const results = searchProducts(query)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Resultados da busca</h1>
        {query && (
          <p className="text-muted-foreground">
            {results.length} {results.length === 1 ? "produto encontrado" : "produtos encontrados"} para "{query}"
          </p>
        )}
      </div>

      {!query ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Search className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Digite algo para buscar</h2>
          <p className="text-muted-foreground">Use a barra de pesquisa acima para encontrar produtos</p>
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Search className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h2>
          <p className="text-muted-foreground">
            Não encontramos produtos para "{query}". Tente buscar por outro termo.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
