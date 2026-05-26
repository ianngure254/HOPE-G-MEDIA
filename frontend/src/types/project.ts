export type ProjectCategory =
  | 'Flyers'
  | 'Posters'
  | 'Social Media'
  | 'Business Cards'
  | 'Branding'
  | 'Marketing'
  | 'Templates'
  | 'Print'

export interface Project {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  description: string
  thumbnail: string
  images: string[]
  tools: string[]
  clientType: string
  challenge?: string
  solution?: string
  featured: boolean
  createdAt: string // ISO date string
}
