export type Theme = 'light' | 'dark'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface NavLink {
  label: string
  href: string
}
