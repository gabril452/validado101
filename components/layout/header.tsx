"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnnouncementBanner } from "@/components/layout/announcement-banner" // Fixed import to use named export
import {
  Search,
  ShoppingCart,
  Menu,
  User,
  BookOpen,
  Briefcase,
  Pencil,
  Backpack,
  Package,
  Home,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { categories } from "@/data/products"

const categoryIcons: Record<string, React.ReactNode> = {
  cadernos: <BookOpen className="h-5 w-5" />,
  estojos: <Briefcase className="h-5 w-5" />,
  "lapis-canetas": <Pencil className="h-5 w-5" />,
  mochilas: <Backpack className="h-5 w-5" />,
  "kits-escolares": <Package className="h-5 w-5" />,
}

export function Header() {
  const { itemCount, openCart } = useCart()
  const { user, isAuthenticated, logout } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/busca?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 kawaii-shadow">
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Main header - Mobile optimized with centered logo */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Left: Search icon on mobile, Menu on desktop */}
          <div className="flex items-center gap-2">
            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-primary/10">
                  <Menu className="h-5 w-5 text-foreground" strokeWidth={2.5} />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full max-w-[300px] sm:w-80 bg-card p-0 overflow-y-auto rounded-r-3xl"
              >
                <SheetHeader className="p-6 pb-4 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
                  <SheetTitle className="flex items-center justify-center">
                    <Image
                      src="https://i.postimg.cc/xjBKbPgZ/image.png"
                      alt="COMETA PAPELARIA Logo"
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col p-4 gap-1">
                  {/* Link Início */}
                  <Link
                    href="/"
                    className="flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium text-foreground hover:bg-primary/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <span>Início</span>
                  </Link>

                  {/* Separador */}
                  <div className="my-2 px-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Categorias</p>
                  </div>

                  {/* Links das categorias */}
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categoria/${cat.slug}`}
                      className="flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium text-foreground hover:bg-primary/10 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-accent/30 to-secondary/30">
                        {categoryIcons[cat.slug] || <Package className="h-5 w-5 text-accent" />}
                      </div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}

                  {/* Separador */}
                  <div className="my-3 border-t border-border" />

                  {/* Carrinho */}
                  <Link
                    href="/carrinho"
                    className="flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium text-foreground hover:bg-primary/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-pink-300/30">
                      <ShoppingCart className="h-5 w-5 text-primary" />
                    </div>
                    <span>Meu Carrinho</span>
                    {itemCount > 0 && (
                      <Badge className="ml-auto bg-primary text-primary-foreground rounded-full px-3">
                        {itemCount}
                      </Badge>
                    )}
                  </Link>

                  {isAuthenticated && user ? (
                    <>
                      <Link
                        href="/minha-conta"
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium text-foreground hover:bg-primary/10 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-primary to-pink-400">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="truncate">{user.name}</span>
                          <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                        </div>
                      </Link>
                      <button
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium text-destructive hover:bg-destructive/10 transition-colors w-full text-left"
                        onClick={() => {
                          logout()
                          setMobileMenuOpen(false)
                        }}
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-destructive/10">
                          <LogOut className="h-5 w-5 text-destructive" />
                        </div>
                        <span>Sair da conta</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/entrar"
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium text-foreground hover:bg-primary/10 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10">
                          <LogIn className="h-5 w-5 text-primary" />
                        </div>
                        <span>Entrar</span>
                      </Link>
                      <Link
                        href="/cadastro"
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium text-foreground hover:bg-primary/10 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-secondary/50">
                          <UserPlus className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <span>Criar conta</span>
                      </Link>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Search toggle for mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-10 w-10 rounded-full hover:bg-primary/10"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5 text-foreground" strokeWidth={2.5} />
              <span className="sr-only">Buscar</span>
            </Button>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="flex items-center justify-center flex-shrink-0">
            <Image
              src="https://i.postimg.cc/xjBKbPgZ/image.png"
              alt="COMETA PAPELARIA Logo"
              width={112}
              height={112}
              className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover"
              priority
            />
          </Link>

          {/* Right: Cart */}
          <div className="flex items-center gap-2">
            {/* User dropdown - desktop only */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden lg:flex h-10 w-10 rounded-full hover:bg-primary/10"
                >
                  <User className="h-5 w-5 text-foreground" strokeWidth={2.5} />
                  <span className="sr-only">Conta</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl">
                {isAuthenticated && user ? (
                  <>
                    <div className="px-3 py-3">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="rounded-xl">
                      <Link href="/minha-conta" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        Minha Conta
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-destructive cursor-pointer rounded-xl">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sair
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild className="rounded-xl">
                      <Link href="/entrar" className="cursor-pointer">
                        <LogIn className="mr-2 h-4 w-4" />
                        Entrar
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-xl">
                      <Link href="/cadastro" className="cursor-pointer">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Criar conta
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10 rounded-full hover:bg-primary/10"
              onClick={openCart}
            >
              <ShoppingCart className="h-5 w-5 text-foreground" strokeWidth={2.5} />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground rounded-full">
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Carrinho</span>
            </Button>
          </div>
        </div>

        {/* Search bar - Mobile (collapsible) */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="lg:hidden pb-4">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos fofos..."
                className="pl-11 pr-4 w-full h-11 rounded-full border-2 border-primary/20 bg-background focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
          </form>
        )}

        {/* Search bar - Desktop */}
        <form onSubmit={handleSearch} className="hidden lg:flex pb-4 max-w-xl mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos fofos..."
              className="pl-11 pr-4 w-full h-11 rounded-full border-2 border-primary/20 bg-background focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 pb-4">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Início
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
