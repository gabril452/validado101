"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const categoryData = [
  {
    name: "Cadernos",
    slug: "cadernos",
    image: "https://i.postimg.cc/6qRY9dh5/br-11134207-7r98o-lwr2xhlo79a73e.webp",
  },
  {
    name: "Estojos",
    slug: "estojos",
    image: "https://i.postimg.cc/zG9D6CTR/image.png",
  },
  {
    name: "Lápis e Canetas",
    slug: "lapis-canetas",
    image: "https://i.postimg.cc/5NK2qd07/image.png",
  },
  {
    name: "Mochilas",
    slug: "mochilas",
    image: "https://i.postimg.cc/GmYnBZsP/image.png",
  },
  {
    name: "Kits Escolares",
    slug: "kits-escolares",
    image: "https://i.postimg.cc/Hkc02bbf/br-11134207-81z1k-mi68f36x4w01d1.webp",
  },
]

export function HeroBanner() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 150
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-background">
      {/* Full width banner image */}
      <div className="w-full">
        <Image
          src="https://i.postimg.cc/RhfNpgDn/BANNER1.png"
          alt="COMETA PAPELARIA - Sua rotina em outra galáxia!"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="bg-background py-6">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-gray-600 font-semibold text-sm sm:text-base mb-4 tracking-wide">COMPRE POR CATEGORIA:</h2>

          <div className="flex items-center gap-2">
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/80 text-gray-400 hover:text-gray-600 hover:bg-white transition-all flex-shrink-0 shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div ref={scrollRef} className="flex-1 overflow-x-auto scroll-smooth scrollbar-hide">
              <div className="flex gap-6 sm:gap-8 py-2 px-1">
                {categoryData.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/categoria/${cat.slug}`}
                    className="flex flex-col items-center gap-2 group flex-shrink-0"
                  >
                    {/* Circular image container */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src={cat.image || "/placeholder.svg"}
                        alt={cat.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 text-center whitespace-nowrap">
                      {cat.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/80 text-gray-400 hover:text-gray-600 hover:bg-white transition-all flex-shrink-0 shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
