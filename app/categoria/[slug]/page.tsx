"use client"
import { notFound } from "next/navigation"
import { getCategoryBySlug, products } from "@/data/products"
import { CategoryPageClient } from "@/components/category/category-page-client"

type SortOption = "best-sellers" | "price-low" | "price-high" | "newest"

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "best-sellers", label: "Mais Vendidos" },
  { value: "price-low", label: "Menor Preço" },
  { value: "price-high", label: "Maior Preço" },
  { value: "newest", label: "Mais Recentes" },
]

const brands = ["Tilibra", "Faber-Castell", "BIC", "Kipling", "Sestini", "EscolaShop"]

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  // Filter products by category on server
  const categoryProducts = products.filter((p) => p.categorySlug === slug)

  return <CategoryPageClient category={category} products={categoryProducts} />
}
