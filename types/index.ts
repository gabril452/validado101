export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images: string[]
  category: string
  categorySlug: string
  brand: string
  description: string
  specifications: { label: string; value: string }[]
  rating: number
  reviews: number
  inStock: boolean
  isBestSeller?: boolean
  isOnSale?: boolean
  colorVariants?: ColorVariant[]
  sizeVariants?: SizeVariant[]
}

export interface ColorVariant {
  name: string
  image: string
}

export interface SizeVariant {
  name: string
  dimensions: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Category {
  name: string
  slug: string
  image: string
  productCount: number
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  comment: string
  date: string
}

export interface ShippingOption {
  id: string
  name: string
  price: number
  days: string
}

export interface CheckoutData {
  customer: {
    name: string
    cpf: string
    email: string
    phone: string
  }
  address: {
    cep: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
  }
  shipping: ShippingOption | null
  payment: {
    method: "pix" | "credit" | "debit"
    cardNumber?: string
    cardName?: string
    cardExpiry?: string
    cardCvv?: string
    installments?: number
  }
}

export interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}
