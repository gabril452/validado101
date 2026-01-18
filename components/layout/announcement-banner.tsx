"use client"

export function AnnouncementBanner() {
  const announcements = ["FRETE GRÁTIS PARA TODO BRASIL", "DESCONTO NO PIX", "MEGA PROMOÇÃO DE VOLTA ÀS AULAS"]

  // Duplicate announcements for seamless loop
  const scrollContent = [...announcements, ...announcements, ...announcements]

  return (
    <div className="w-full bg-[#fe7dac] overflow-hidden">
      <div className="flex animate-scroll">
        {scrollContent.map((text, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="px-4 py-2 text-sm font-medium text-white whitespace-nowrap">{text}</span>
            <span className="text-white px-2">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
