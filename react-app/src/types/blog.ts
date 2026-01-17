export interface BlogPost {
  id: string
  slug: string // URL-friendly identifier (e.g., "secretos-carne-perfecta")
  title: string
  description: string // Meta description / excerpt
  heroImage: string
  heroImageAlt: string
  author: {
    name: string
    role: string
  }
  publishDate: string
  readTime: string // e.g., "5 min de lectura"
  content: BlogContent[]
  tags?: string[]
}

export interface BlogContent {
  type: 'heading' | 'paragraph' | 'image' | 'list' | 'quote'
  content: string | string[]
  imageAlt?: string
}
