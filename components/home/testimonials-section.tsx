import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/products"

export function TestimonialsSection() {
  return (
    <section className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
            O que nossos clientes dizem
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">Avaliações reais de quem já comprou com a gente</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 sm:h-4 sm:w-4 ${
                        i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-card-foreground mb-3 sm:mb-4 leading-relaxed">{`"${testimonial.content}"`}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-xs sm:text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm sm:text-base">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
