"use client"

import { useState, useEffect } from "react"
import { Clock, Flame } from "lucide-react"

interface CountdownTimerProps {
  endDate: string
}

export function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 34,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endDate).getTime() - new Date().getTime()

      if (difference <= 0) {
        setIsExpired(true)
        return
      }

      const hours = Math.floor(difference / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  if (isExpired) {
    return (
      <div className="bg-muted/80 rounded-xl p-3 sm:p-4 text-center">
        <p className="text-muted-foreground font-medium text-sm sm:text-base">Oferta Expirada</p>
      </div>
    )
  }

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <div className="bg-pink-100 rounded-xl p-3 sm:p-4">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-destructive" />
        <span className="text-xs sm:text-sm font-medium text-foreground">Oferta por tempo limitado! Termina em:</span>
        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground font-bold text-lg sm:text-2xl px-3 sm:px-4 py-2 rounded-lg min-w-[50px] sm:min-w-[60px] text-center">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">Horas</span>
        </div>

        <span className="text-lg sm:text-2xl font-bold text-primary">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground font-bold text-lg sm:text-2xl px-3 sm:px-4 py-2 rounded-lg min-w-[50px] sm:min-w-[60px] text-center">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">Minutos</span>
        </div>

        <span className="text-lg sm:text-2xl font-bold text-primary">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground font-bold text-lg sm:text-2xl px-3 sm:px-4 py-2 rounded-lg min-w-[50px] sm:min-w-[60px] text-center">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">Segundos</span>
        </div>
      </div>
    </div>
  )
}
