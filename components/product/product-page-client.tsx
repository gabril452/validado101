"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Star, Minus, Plus, ShoppingCart, Zap, Shield, Truck, ChevronLeft, ChevronRight, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"
import { ProductCard } from "@/components/product/product-card"
import { CountdownTimer } from "@/components/product/countdown-timer"
import { SocialProofPopup } from "@/components/product/social-proof-popup"
import type { Product } from "@/types"

interface ShippingEstimate {
  cep: string
  options: { name: string; price: number; days: string }[]
}

interface ProductPageClientProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
  const { addItem } = useCart()
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [cep, setCep] = useState("")
  const [shippingEstimate, setShippingEstimate] = useState<ShippingEstimate | null>(null)
  const [loadingShipping, setLoadingShipping] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colorVariants?.[0]?.name || null)
  const [selectedSize, setSelectedSize] = useState(product.sizeVariants?.[0]?.name || null)

  const allImages = Array.from(new Set([product.image, ...product.images].filter(Boolean)))

  const getCurrentImage = () => {
    if (selectedColor && product.colorVariants) {
      const colorVariant = product.colorVariants.find((c) => c.name === selectedColor)
      if (colorVariant) return colorVariant.image
    }
    return allImages[selectedImage] || "/placeholder.svg"
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  const handleBuyNow = () => {
    addItem(product, quantity)
    router.push("/carrinho")
  }

  const calculateShipping = async () => {
    if (cep.replace(/\D/g, "").length !== 8) return

    setLoadingShipping(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setShippingEstimate({
      cep: cep,
      options: [
        { name: "PAC", price: 0, days: "5-8 dias úteis" },
        { name: "SEDEX", price: 7.9, days: "2-3 dias úteis" },
        { name: "Entrega Expressa", price: 12.9, days: "1-2 dias úteis" },
      ],
    })
    setLoadingShipping(false)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const countdownEndDate = new Date()
  countdownEndDate.setHours(countdownEndDate.getHours() + 23)
  countdownEndDate.setMinutes(countdownEndDate.getMinutes() + 34)
  const endDateString = countdownEndDate.toISOString()

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <SocialProofPopup productName={product.name} />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3 sm:py-4">
        <div className="container mx-auto px-3 sm:px-4 max-w-full overflow-hidden">
          <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground overflow-hidden">
            <button
              onClick={() => router.back()}
              className="hover:text-primary flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 transition-colors flex-shrink-0"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Voltar</span>
            </button>
            <span>/</span>
            <Link href={`/categoria/${product.categorySlug}`} className="hover:text-primary flex-shrink-0">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 max-w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          {/* Product Images */}
          <div className="space-y-3 sm:space-y-4 overflow-hidden max-w-full">
            <div className="relative aspect-square bg-muted rounded-lg sm:rounded-xl overflow-hidden">
              <Image
                src={getCurrentImage() || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.discount && (
                <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-destructive text-destructive-foreground text-sm sm:text-lg px-2 sm:px-3 py-0.5 sm:py-1">
                  -{product.discount}%
                </Badge>
              )}
              {product.isBestSeller && (
                <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-primary text-primary-foreground text-xs sm:text-sm">
                  Mais Vendido
                </Badge>
              )}

              {allImages.length > 1 && !selectedColor && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background h-8 w-8 sm:h-10 sm:w-10"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background h-8 w-8 sm:h-10 sm:w-10"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index)
                      setSelectedColor(null)
                    }}
                    className={`relative w-14 h-14 sm:w-20 sm:h-20 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index && !selectedColor
                        ? "border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6 overflow-hidden max-w-full">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">{product.brand}</p>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 break-words">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${
                        i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium text-foreground text-sm sm:text-base">{product.rating}</span>
                <span className="text-muted-foreground text-xs sm:text-sm">({product.reviews} avaliações)</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <p className="text-sm text-gray-500 line-through mb-1">De: {formatPrice(product.price * 2)}</p>
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  Por: {formatPrice(product.price)}
                </p>
                <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                  50% OFF
                </span>
              </div>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                ou <span className="font-medium text-foreground">3x de {formatPrice(product.price / 3)}</span> sem juros
              </p>
            </div>

            <CountdownTimer endDate={endDateString} />

            {product.inStock ? (
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-600 border-green-500/30 text-xs sm:text-sm"
              >
                Em estoque - Envio imediato
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="bg-destructive/10 text-destructive border-destructive/30 text-xs sm:text-sm"
              >
                Produto indisponível
              </Badge>
            )}

            {product.colorVariants && product.colorVariants.length > 0 && (
              <div className="space-y-2 sm:space-y-3 overflow-hidden">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Cor: <span className="text-primary">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
                  {product.colorVariants.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        selectedColor === color.name
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-border hover:border-primary/50"
                      }`}
                      title={color.name}
                    >
                      <Image src={color.image || "/placeholder.svg"} alt={color.name} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizeVariants && product.sizeVariants.length > 0 && (
              <div className="space-y-2 sm:space-y-3 overflow-hidden">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Tamanho: <span className="text-primary">{selectedSize}</span>
                </span>
                <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide">
                  {product.sizeVariants.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border-2 transition-all text-xs sm:text-sm flex-shrink-0 ${
                        selectedSize === size.name
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      <span className="font-semibold">{size.name}</span>
                      <span className="text-muted-foreground ml-1">({size.dimensions})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xs sm:text-sm font-medium text-foreground">Quantidade:</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <span className="w-8 sm:w-12 text-center font-medium text-foreground text-sm sm:text-base">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base h-11 sm:h-12"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Adicionar ao Carrinho
              </Button>
              <Button
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm sm:text-base h-11 sm:h-12"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Comprar Agora
              </Button>
            </div>

            <div className="border border-border rounded-lg sm:rounded-xl p-3 sm:p-4">
              <h3 className="font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                Calcular Frete
              </h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
                  className="flex-1 min-w-0 h-9 sm:h-10 text-sm"
                />
                <Button
                  onClick={calculateShipping}
                  disabled={loadingShipping}
                  className="bg-primary text-primary-foreground h-9 sm:h-10 text-sm px-3 sm:px-4 flex-shrink-0"
                >
                  {loadingShipping ? "..." : "Calcular"}
                </Button>
              </div>

              {shippingEstimate && (
                <div className="mt-3 sm:mt-4 space-y-2">
                  {shippingEstimate.options.map((option) => (
                    <div
                      key={option.name}
                      className="flex justify-between items-center p-2 sm:p-3 bg-muted rounded-lg text-xs sm:text-sm"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground">{option.name}</p>
                        <p className="text-muted-foreground text-[10px] sm:text-xs">{option.days}</p>
                      </div>
                      <p className="font-semibold text-foreground flex-shrink-0 ml-2">{formatPrice(option.price)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="flex items-center gap-2 p-2 sm:p-3 bg-muted rounded-lg">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm text-foreground">Compra Segura</span>
              </div>
              <div className="flex items-center gap-2 p-2 sm:p-3 bg-muted rounded-lg">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm text-foreground">Entrega Garantida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8 sm:mt-12 overflow-hidden">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 gap-4 sm:gap-8 overflow-x-auto scrollbar-hide flex-nowrap">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground data-[state=active]:text-foreground whitespace-nowrap flex-shrink-0"
              >
                Descrição
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground data-[state=active]:text-foreground whitespace-nowrap flex-shrink-0"
              >
                Especificações
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground data-[state=active]:text-foreground whitespace-nowrap flex-shrink-0"
              >
                Avaliações ({product.reviews})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-4 sm:mt-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-foreground leading-relaxed text-sm sm:text-base whitespace-pre-line break-words">
                  {product.description}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-4 sm:mt-6">
              <div className="grid gap-2 sm:gap-3">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0"
                  >
                    <span className="sm:w-1/3 font-medium text-foreground">{spec.label}</span>
                    <span className="sm:w-2/3 text-muted-foreground break-words">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-4 sm:mt-6">
              <div className="space-y-6">
                {/* Resumo */}
                <div className="text-center py-4 sm:py-6 bg-muted/50 rounded-lg">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Este produto possui {product.reviews} avaliações com média de {product.rating} estrelas.
                  </p>
                </div>

                {/* Avaliações */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Avaliação 1 */}
                  <div className="border border-border rounded-lg p-4 sm:p-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <img
                        src="https://i.postimg.cc/NFFMNnqk/image.png"
                        alt="Ana P."
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base">Ana P.</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1">
                          <Check className="h-3 w-3" />
                          Compra Verificada
                        </span>
                        <h5 className="font-medium text-foreground mt-2 sm:mt-3 text-sm sm:text-base">
                          Minha filha não quer mais largar a mochila nova!
                        </h5>
                        <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
                          Comprei o kit para minha filha de 8 anos e foi um sucesso total! Ela ficou encantada com o brilho metalizado e não para de falar do estojo gigante. A mochila de rodinhas é ótima, bem espaçosa e parece ser bem resistente. A entrega foi super rápida. Recomendo muito, ver a felicidade dela não tem preço!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Avaliação 2 */}
                  <div className="border border-border rounded-lg p-4 sm:p-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <img
                        src="https://i.postimg.cc/FRssR6R1/image.png"
                        alt="Mariana S."
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base">Mariana S.</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1">
                          <Check className="h-3 w-3" />
                          Compra Verificada
                        </span>
                        <h5 className="font-medium text-foreground mt-2 sm:mt-3 text-sm sm:text-base">
                          Material de ótima qualidade e muito lindo!
                        </h5>
                        <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
                          Fiquei surpresa com a qualidade do material. A mochila é firme, as rodinhas deslizam bem e o puxador tem uma altura boa. A lancheira tem um tamanho excelente e o estojo é o sonho de qualquer criança. Minha filha amou e eu fiquei tranquila por ter comprado um produto que vai durar. Valeu cada centavo.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Avaliação 3 */}
                  <div className="border border-border rounded-lg p-4 sm:p-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <img
                        src="https://i.postimg.cc/Gt6cXhjs/image.png"
                        alt="Fernanda L."
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base">Fernanda L.</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1">
                          <Check className="h-3 w-3" />
                          Compra Verificada
                        </span>
                        <h5 className="font-medium text-foreground mt-2 sm:mt-3 text-sm sm:text-base">
                          O kit mais completo e estiloso que já vi!
                        </h5>
                        <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
                          Minha filha estava louca por uma mochila da Emilly Vick e essa superou todas as expectativas. O design metalizado é ainda mais bonito pessoalmente. O fato de já vir com a lancheira e o estojo combinando é perfeito, super prático. Ela se sentiu o máximo na escola. Ótima compra!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Avaliação 4 */}
                  <div className="border border-border rounded-lg p-4 sm:p-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <img
                        src="https://i.postimg.cc/BQ1ZXHq1/image.png"
                        alt="Camila R."
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base">Camila R.</h4>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4].map((star) => (
                              <Star key={star} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-300" />
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1">
                          <Check className="h-3 w-3" />
                          Compra Verificada
                        </span>
                        <h5 className="font-medium text-foreground mt-2 sm:mt-3 text-sm sm:text-base">
                          Muito bonita, mas a alça poderia ser mais forte.
                        </h5>
                        <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
                          O kit é deslumbrante, minha filha amou o brilho e o estojo é incrível. A mochila tem bastante espaço. A única coisa que me preocupou um pouco foi a alça de mão, que parece um pouco frágil para o peso dos livros. Mas as rodinhas funcionam perfeitamente, então ela vai usar mais o carrinho. No geral, uma boa compra.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-12 sm:mt-16 overflow-hidden">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
