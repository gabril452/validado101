import { Shield, Truck, RefreshCw, CreditCard } from "lucide-react"
import Image from "next/image"

const badges = [
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Seus dados protegidos",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Para todo o Brasil",
  },
  {
    icon: RefreshCw,
    title: "Troca Fácil",
    description: "Até 30 dias",
  },
  {
    icon: CreditCard,
    title: "Parcele em 12x",
    description: "Sem juros",
  },
]

export function TrustBadges() {
  return (
    <section className="py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <Image
            src="https://i.postimg.cc/XvWwSRrH/certificado-ssl.png"
            alt="Certificado SSL - Site Seguro"
            width={150}
            height={80}
            className="h-16 md:h-20 w-auto object-contain"
          />
          <Image
            src="https://i.postimg.cc/k44R7qqf/Selo-removebg-preview.png"
            alt="Selo de Qualidade"
            width={150}
            height={80}
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
