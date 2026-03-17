export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface PortfolioItem {
  title: string
  category: string
  description: string
  metrics: string[]
  image: string
}

export interface MethodologyStep {
  number: string
  title: string
  description: string
  icon: string
}

export interface NavigationItem {
  name: string
  id: string
}
