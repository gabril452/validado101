"use client"

import { useState, useMemo } from "react"
import { ChevronDown, SlidersHorizontal, Grid3X3, LayoutList, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product/product-card"
import type { Category, Product } from "@/types"

type SortOption = "best-sellers" | "price-low" | "price-high" | "newest"

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "best-sellers", label: "Mais Vendidos" },
  { value: "price-low", label: "Menor Preço" },
  { value: "price-high", label: "Maior Preço" },
  { value: "newest", label: "Mais Recentes" },
]

const brands = ["Tilibra", "Faber-Castell", "BIC", "Kipling", "Sestini", "EscolaShop"]

interface CategoryPageClientProps {
  category: Category
  products: Product[]
}

export function CategoryPageClient({ category, products: categoryProducts }: CategoryPageClientProps) {
  const [sortBy, setSortBy] = useState<SortOption>("best-sellers")
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts]

    // Filter by price
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Filter by brands
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand))
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
        break
      case "best-sellers":
      default:
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
        break
    }

    return result
  }, [categoryProducts, priceRange, selectedBrands, sortBy])

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const clearFilters = () => {
    setPriceRange([0, 300])
    setSelectedBrands([])
  }

  const activeFiltersCount = (selectedBrands.length > 0 ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 300 ? 1 : 0)

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Faixa de Preço</h3>
        <Slider value={priceRange} onValueChange={setPriceRange} max={300} step={10} className="mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>R$ {priceRange[0]}</span>
          <span>R$ {priceRange[1]}</span>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Marca</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label htmlFor={brand} className="text-sm cursor-pointer text-foreground">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
          Limpar Filtros
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3 sm:py-4">
        <div className="container mx-auto px-3 sm:px-4">
          <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
            <a
              href="/"
              className="hover:text-primary flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Voltar</span>
            </a>
            <span>/</span>
            <span className="text-foreground font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
        <div className="flex flex-col gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{category.name}</h1>
            <p className="text-sm sm:text-base text-muted-foreground">{filteredProducts.length} produtos encontrados</p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Mobile Filters */}
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" className="bg-transparent text-xs sm:text-sm h-9 sm:h-10">
                  <SlidersHorizontal className="h-4 w-4 mr-1 sm:mr-2" />
                  Filtros
                  {activeFiltersCount > 0 && (
                    <Badge className="ml-1 sm:ml-2 bg-primary text-primary-foreground h-5 w-5 p-0 flex items-center justify-center text-[10px]">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-[300px] sm:w-80 bg-background overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-foreground">Filtros</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-transparent text-xs sm:text-sm h-9 sm:h-10 flex-1 sm:flex-none justify-between sm:justify-start max-w-[200px]"
                >
                  <span className="truncate">{sortOptions.find((o) => o.value === sortBy)?.label}</span>
                  <ChevronDown className="ml-1 sm:ml-2 h-4 w-4 flex-shrink-0" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={sortBy === option.value ? "bg-accent" : ""}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Toggle - Hidden on very small screens */}
            <div className="hidden sm:flex items-center border border-border rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className={`h-9 w-9 sm:h-10 sm:w-10 ${viewMode === "grid" ? "bg-muted" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-9 w-9 sm:h-10 sm:w-10 ${viewMode === "list" ? "bg-muted" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-6 sm:gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-56 xl:w-64 flex-shrink-0">
            <div className="sticky top-24 sm:top-32 bg-card p-4 sm:p-6 rounded-xl border border-border">
              <h2 className="font-semibold text-lg text-card-foreground mb-6">Filtrar por</h2>
              <FilterContent />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                  Nenhum produto encontrado com esses filtros.
                </p>
                <Button onClick={clearFilters} className="bg-primary text-primary-foreground">
                  Limpar Filtros
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
                    : "flex flex-col gap-3 sm:gap-4"
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
