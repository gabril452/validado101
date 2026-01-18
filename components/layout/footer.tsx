import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import { categories } from "@/data/products"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#4A3F5C] to-[#3D3348] text-white">
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://i.postimg.cc/RCcS8J0w/Design-sem-nome-(8).png"
                alt="COMETA PAPELARIA Logo"
                width={160}
                height={50}
                className="h-12 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Papelaria criativa que brilha como uma estrela! Produtos fofos e encantadores para deixar sua rotina em
              outra galáxia.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/50 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Categorias</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categoria/${cat.slug}`}
                    className="text-sm text-white/70 hover:text-primary transition-colors inline-block py-1"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Ajuda</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-primary transition-colors inline-block py-1">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-primary transition-colors inline-block py-1">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-primary transition-colors inline-block py-1">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-primary transition-colors inline-block py-1">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 hover:text-primary transition-colors inline-block py-1">
                  Rastreie seu Pedido
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>(11) 99258-3987</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="break-all">contato@cometapapelaria.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>
                  Av. Paulista, 1000
                  <br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-4 mb-6">
            <img
              src="https://i.postimg.cc/8zRsdbyz/Selo-removebg-preview.png"
              alt="Selo de Segurança"
              className="h-12 sm:h-14 w-auto object-contain opacity-80"
            />
            <img
              src="https://i.postimg.cc/q7BnzYp5/certificado-ssl.png"
              alt="Certificado SSL"
              className="h-12 sm:h-14 w-auto object-contain opacity-80"
            />
          </div>
          <p className="text-center text-xs sm:text-sm text-white/50 px-4">
            © 2025 COMETA PAPELARIA. Todos os direitos reservados.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            CNPJ: 01.963.117/0001-33
          </p>
        </div>
      </div>
    </footer>
  )
}
