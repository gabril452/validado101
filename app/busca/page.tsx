import { Suspense } from "react"
import { SearchResults } from "@/components/search/search-results"

export const metadata = {
  title: "Busca - EscolaShop",
  description: "Busque por produtos na EscolaShop",
}

function SearchFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-muted rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-64 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchResults />
    </Suspense>
  )
}
