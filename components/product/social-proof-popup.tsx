"use client"

import { useState, useEffect } from "react"
import { X, ShoppingBag, MapPin } from "lucide-react"

interface SocialProofPopupProps {
  productName: string
}

const BRAZILIAN_NAMES = [
  "Juliana",
  "Rafael",
  "Beatriz",
  "Lucas",
  "Mariana",
  "Pedro",
  "Amanda",
  "Gustavo",
  "Camila",
  "Felipe",
  "Larissa",
  "Bruno",
  "Fernanda",
  "Thiago",
  "Carolina",
  "Diego",
  "Patrícia",
  "Ricardo",
  "Isabela",
  "Matheus",
]

const BRAZILIAN_CITIES = [
  { city: "São Paulo", state: "SP" },
  { city: "Rio de Janeiro", state: "RJ" },
  { city: "Belo Horizonte", state: "MG" },
  { city: "Curitiba", state: "PR" },
  { city: "Porto Alegre", state: "RS" },
  { city: "Salvador", state: "BA" },
  { city: "Brasília", state: "DF" },
  { city: "Fortaleza", state: "CE" },
  { city: "Recife", state: "PE" },
  { city: "Goiânia", state: "GO" },
  { city: "Manaus", state: "AM" },
  { city: "Florianópolis", state: "SC" },
  { city: "Campinas", state: "SP" },
  { city: "Vitória", state: "ES" },
  { city: "Natal", state: "RN" },
]

export function SocialProofPopup({ productName }: SocialProofPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [purchaseInfo, setPurchaseInfo] = useState({
    name: "",
    city: "",
    state: "",
    minutesAgo: 0,
  })

  const generatePurchaseInfo = () => {
    const randomName = BRAZILIAN_NAMES[Math.floor(Math.random() * BRAZILIAN_NAMES.length)]
    const randomLocation = BRAZILIAN_CITIES[Math.floor(Math.random() * BRAZILIAN_CITIES.length)]
    const randomMinutes = Math.floor(Math.random() * 15) + 2

    setPurchaseInfo({
      name: randomName,
      city: randomLocation.city,
      state: randomLocation.state,
      minutesAgo: randomMinutes,
    })
  }

  useEffect(() => {
    // Generate initial random purchase info
    generatePurchaseInfo()

    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    const intervalTimer = setInterval(() => {
      generatePurchaseInfo()
      setIsAnimatingOut(false)
      setIsVisible(true)
    }, 30000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(intervalTimer)
    }
  }, [])

  useEffect(() => {
    if (isVisible && !isAnimatingOut) {
      const hideTimer = setTimeout(() => {
        handleClose()
      }, 15000)
      return () => clearTimeout(hideTimer)
    }
  }, [isVisible, isAnimatingOut])

  const handleClose = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsAnimatingOut(false)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed top-44 left-3 md:bottom-4 md:top-auto md:left-4 z-50 max-w-[260px] sm:max-w-[280px] transition-all duration-300 ${
        isAnimatingOut
          ? "opacity-0 -translate-y-2 md:translate-y-4 md:-translate-y-0"
          : "opacity-100 translate-y-0 animate-in slide-in-from-top-4 md:slide-in-from-bottom-4"
      }`}
    >
      <div className="p-3 shadow-xl rounded-xl border border-pink-200 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-500" />

        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-pink-100 transition-colors"
          aria-label="Fechar notificação"
        >
          <X className="h-3 w-3 text-pink-400" />
        </button>

        <div className="flex items-start gap-2.5 mt-1">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-md">
            <ShoppingBag className="h-4 w-4 text-white" />
          </div>

          <div className="flex-1 min-w-0 pr-4">
            <p className="text-xs text-gray-700 font-medium leading-snug">
              <span className="font-bold text-pink-600">{purchaseInfo.name}</span>{" "}
              <span className="text-gray-500">de</span>{" "}
              <span className="inline-flex items-center gap-0.5 font-semibold text-gray-700">
                <MapPin className="h-2.5 w-2.5 text-pink-500" />
                {purchaseInfo.city}, {purchaseInfo.state}
              </span>
            </p>
            <p className="text-xs text-pink-600 font-semibold mt-0.5">comprou este item!</p>
            <p className="text-[10px] text-gray-400 mt-1">há {purchaseInfo.minutesAgo} minutos</p>
          </div>
        </div>

        <p className="text-[10px] text-gray-500 mt-2 truncate border-t border-pink-100 pt-2 font-medium">
          {productName}
        </p>
      </div>
    </div>
  )
}
