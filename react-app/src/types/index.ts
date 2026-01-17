// Tipo para productos
export interface Product {
  id: string
  name: string
  description: string
  detailedDescription?: string // Descripción extendida para modal
  category: 'res' | 'cerdo' | 'pollo' | 'especiales'
  image?: string
  rating?: number
  featured?: boolean
}

// Tipo para testimonios
export interface Testimonial {
  id: string
  name: string
  position: string
  company?: string
  image: string
  rating: number
  text: string
}

// Tipo para posts de blog
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category?: string
}

// Tipo para clientes (logos)
export interface Client {
  id: string
  name: string
  logo: string
}

// Tipo para slides del hero
export interface HeroSlide {
  id: string
  title: string
  subtitle?: string
  image: string
  cta?: {
    text: string
    link: string
  }
}

// Tipo para items de "Por qué elegirnos"
export interface WhyChooseItem {
  id: string
  icon: string
  title: string
  description: string
}

// Información de contacto
export interface ContactInfo {
  email: string
  phone: string
  whatsapp: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  hours: {
    weekday: string
    weekend: string
  }
}

// Redes sociales
export interface SocialMedia {
  facebook: string
  instagram: string
}
