"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, User, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"

export default function RegisterPage() {
  const router = useRouter()
  const { register, isLoading } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const passwordRequirements = [
    { label: "Mínimo 6 caracteres", met: password.length >= 6 },
    { label: "Senhas coincidem", met: password === confirmPassword && confirmPassword.length > 0 },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos.")
      return
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.")
      return
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.")
      return
    }

    const result = await register(name, email, password)

    if (result.success) {
      router.push("/")
    } else {
      setError(result.error || "Erro ao criar conta.")
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
            <CardTitle className="text-xl sm:text-2xl font-bold">Criar sua conta</CardTitle>
            <CardDescription className="text-sm">Cadastre-se para aproveitar ofertas exclusivas</CardDescription>
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
              <Label htmlFor="name" className="text-sm">
                Nome completo
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="pl-10 h-10 sm:h-11 text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

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

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm">
                Confirmar senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 h-10 sm:h-11 text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Requisitos da senha */}
            <div className="space-y-1.5 sm:space-y-2">
              {passwordRequirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
                  <CheckCircle2
                    className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${req.met ? "text-green-500" : "text-muted-foreground/40"}`}
                  />
                  <span className={req.met ? "text-green-600" : "text-muted-foreground"}>{req.label}</span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6">
            <Button type="submit" className="w-full h-10 sm:h-11 text-sm sm:text-base" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Criando conta...
                </>
              ) : (
                "Criar conta"
              )}
            </Button>

            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              Já tem uma conta?{" "}
              <Link href="/entrar" className="text-primary font-medium hover:underline">
                Fazer login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
