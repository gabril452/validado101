import { Suspense } from "react"
import { ThankYouContent } from "@/components/thank-you-content"

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-muted/30 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Carregando...</div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  )
}
