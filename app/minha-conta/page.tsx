"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { User, Mail, Calendar, LogOut, ShoppingBag, Heart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/auth-context"

export default function MyAccountPage() {
  const router = useRouter()
  const { user, isAuthenticated, isLoading, logout } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/entrar")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-muted/30 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link href="/" className="inline-block mb-4 sm:mb-6">
            <Image
              src="https://i.postimg.cc/28xcK79L/Chat-GPT-Image-28-dez-de-2025-22-53-40-1-removebg-preview.png"
              alt="EscolaShop Logo"
              width={180}
              height={60}
              className="h-10 sm:h-14 w-auto object-contain"
            />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Minha Conta</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">Gerencie suas informações pessoais</p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {/* Perfil */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center p-4 sm:p-6">
              <Avatar className="h-16 w-16 sm:h-24 sm:w-24 mx-auto mb-3 sm:mb-4">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl sm:text-2xl">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-base sm:text-lg">{user.name}</CardTitle>
              <CardDescription className="text-xs sm:text-sm break-all">{user.email}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <Button
                variant="outline"
                className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 bg-transparent text-sm h-10"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair da conta
              </Button>
            </CardContent>
          </Card>

          {/* Informações */}
          <Card className="md:col-span-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">Informações da conta</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Seus dados cadastrados</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Nome completo</p>
                  <p className="font-medium text-sm sm:text-base truncate">{user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm sm:text-base truncate">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Membro desde</p>
                  <p className="font-medium text-sm sm:text-base">{formatDate(user.createdAt)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Atalhos */}
          <Card className="md:col-span-3">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">Atalhos rápidos</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                <Link href="/carrinho" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full h-auto py-3 sm:py-4 flex-col gap-1 sm:gap-2 bg-transparent"
                  >
                    <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-xs sm:text-sm">Meu Carrinho</span>
                  </Button>
                </Link>
                <Link href="/" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full h-auto py-3 sm:py-4 flex-col gap-1 sm:gap-2 bg-transparent"
                  >
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-xs sm:text-sm">Continuar Comprando</span>
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full h-auto py-3 sm:py-4 flex-col gap-1 sm:gap-2 bg-transparent"
                  disabled
                >
                  <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-xs sm:text-sm">Configurações</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
