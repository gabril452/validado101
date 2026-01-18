"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { User } from "@/types"

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Simulação de banco de dados local
const USERS_STORAGE_KEY = "escolashop_users"
const SESSION_STORAGE_KEY = "escolashop_session"

interface StoredUser extends User {
  password: string
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Carregar sessão ao iniciar
  useEffect(() => {
    const savedSession = localStorage.getItem(SESSION_STORAGE_KEY)
    if (savedSession) {
      try {
        const sessionUser = JSON.parse(savedSession) as User
        setUser(sessionUser)
      } catch {
        localStorage.removeItem(SESSION_STORAGE_KEY)
      }
    }
    setIsLoading(false)
  }, [])

  const getUsers = (): StoredUser[] => {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY)
    if (!usersData) return []
    try {
      return JSON.parse(usersData)
    } catch {
      return []
    }
  }

  const saveUsers = (users: StoredUser[]) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
  }

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)

    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 500))

    const users = getUsers()
    const foundUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase())

    if (!foundUser) {
      setIsLoading(false)
      return { success: false, error: "Email não encontrado. Verifique ou crie uma conta." }
    }

    if (foundUser.password !== password) {
      setIsLoading(false)
      return { success: false, error: "Senha incorreta. Tente novamente." }
    }

    const sessionUser: User = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      createdAt: foundUser.createdAt,
    }

    setUser(sessionUser)
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
    setIsLoading(false)

    return { success: true }
  }, [])

  const register = useCallback(async (name: string, email: string, password: string) => {
    setIsLoading(true)

    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 500))

    const users = getUsers()
    const existingUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase())

    if (existingUser) {
      setIsLoading(false)
      return { success: false, error: "Este email já está cadastrado. Faça login." }
    }

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      name,
      email: email.toLowerCase(),
      password,
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)
    saveUsers(users)

    const sessionUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
    }

    setUser(sessionUser)
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser))
    setIsLoading(false)

    return { success: true }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem(SESSION_STORAGE_KEY)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
