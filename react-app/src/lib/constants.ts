import type { ContactInfo, SocialMedia } from '@/types'

// Información de contacto
export const CONTACT_INFO: ContactInfo = {
  email: 'info@carnesdoradascr.com',
  phone: '+506 2102-7323',
  whatsapp: '8823-4567',
  address: '1 km al sur gasolinera las Tejitas, Alajuela',
  coordinates: {
    lat: 9.989203,
    lng: -84.232367,
  },
  hours: {
    weekday: 'Lun-Vie 7:00 AM - 5:00 PM',
    weekend: 'Sábado - Domingo: Cerrado',
  },
}

// Redes sociales
export const SOCIAL_MEDIA: SocialMedia = {
  facebook: 'https://facebook.com/carnesdoradas',
  instagram: 'https://instagram.com/carnesdoradascr',
}

// Navegación del sitio
export const NAVIGATION = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'productos', label: 'Productos', href: '#productos' },
  { id: 'entregas', label: 'Entregas', href: '#entregas' },
  { id: 'blogs', label: 'Noticias', href: '#blog' },
] as const

// Categorías de productos
export const PRODUCT_CATEGORIES = [
  { id: 'res', label: 'Carne de Res' },
  { id: 'cerdo', label: 'Carne de Cerdo' },
  { id: 'pollo', label: 'Carne de Pollo' },
  { id: 'especiales', label: 'Especiales' },
] as const
