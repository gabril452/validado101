"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Preencha todos os campos.")
      return
    }

    const result = await login(email, password)

    if (result.success) {
      router.push("/")
    } else {
      setError(result.error || "Erro ao fazer login.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-3 sm:p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-3 sm:space-y-4 px-4 sm:px-6">
          <Link href="/" className="inline-block mx-auto">
            <Image
              src="https://i.postimg.cc/xjBKbPgZ/image.png"
              alt="Papelaria Cometa Logo"
              width={200}
              height={70}
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </Link>
          <div>
            <CardTitle className="text-xl sm:text-2xl font-bold">Bem-vindo de volta!</CardTitle>
            <CardDescription className="text-sm">Entre na sua conta para continuar</CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
            {error && (
              <div className="p-2 sm:p-3 rounded-lg bg-destructive/10 text-destructive text-xs sm:text-sm text-center">
                {error}
              </div>
            )}

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10 h-10 sm:h-11 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="password" className="text-sm">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-10 sm:h-11 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6">
            <Button type="submit" className="w-full h-10 sm:h-11 text-sm sm:text-base" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </Button>

            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              Não tem uma conta?{" "}
              <Link href="/cadastro" className="text-primary font-medium hover:underline">
                Criar conta
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
