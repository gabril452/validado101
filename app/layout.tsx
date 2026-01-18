import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fredoka, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MiniCart } from "@/components/cart/mini-cart"

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "COMETA PAPELARIA - Papelaria Criativa que Brilha como uma Estrela!",
  description:
    "Sua loja de papelaria criativa com produtos fofos e encantadores. Cadernos, canetas, estojos e muito mais para deixar sua rotina em outra galáxia!",
  keywords: ["papelaria criativa", "cadernos kawaii", "material escolar fofo", "papelaria fofa", "cometa papelaria"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#FF80AB",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var params = new URLSearchParams(window.location.search);
                var utms = ['utm_source', 'utm_campaign', 'utm_content', 'utm_term', 'utm_medium', 'src', 'sck'];
                var hasNew = false;
                
                utms.forEach(function(u) {
                  if (params.get(u)) {
                    hasNew = true;
                  }
                });
                
                // Only save if we have new UTM params (don't overwrite on internal navigation)
                if (hasNew) {
                  var data = {};
                  utms.forEach(function(u) {
                    if (params.get(u)) {
                      data[u] = params.get(u);
                    }
                  });
                  try {
                    localStorage.setItem('cometa_utm_params', JSON.stringify(data));
                  } catch(e) {}
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${fredoka.variable} ${geistMono.variable} font-sans antialiased`}>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        />
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "695e92e7d354d839f77e0bf5";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <MiniCart />
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
