"use client"
import { notFound } from "next/navigation"
import { ProductPageClient } from "@/components/product/product-page-client"
import { getProductBySlug, getBestSellers } from "@/data/products"

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getBestSellers()
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return <ProductPageClient product={product} relatedProducts={relatedProducts} />
}
