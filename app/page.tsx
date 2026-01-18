import { HeroBanner } from "@/components/home/hero-banner"
import { ProductsSection } from "@/components/home/products-section"
import { getBestSellers, getOnSaleProducts, getAllProducts } from "@/data/products"

export default function HomePage() {
  const bestSellers = getBestSellers()
  const onSaleProducts = getOnSaleProducts()
  const allProducts = getAllProducts()

  return (
    <>
      <HeroBanner />
      <ProductsSection
        title="Mais Vendidos"
        subtitle="Os produtos favoritos dos nossos clientes"
        products={bestSellers}
      />
      <ProductsSection
        title="Ofertas da Semana"
        subtitle="Aproveite os melhores descontos"
        products={onSaleProducts}
        showAll={true}
      />
      <ProductsSection
        title="Todos os Produtos"
        subtitle="Confira nossa linha completa de materiais escolares"
        products={allProducts}
        showAll={true}
      />
    </>
  )
}
