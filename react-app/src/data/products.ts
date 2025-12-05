import type { Product } from '@/types'

export const products: Product[] = [
  // CARNE DE RES
  {
    id: 'ribeye',
    name: 'RIBEYE',
    description: 'Corte premium con marmoleo excepcional, jugosidad y sabor intenso',
    category: 'res',
    featured: true,
    rating: 5,
  },
  {
    id: 'tomahawk',
    name: 'TOMAHAWK',
    description: 'Ribeye de presentación espectacular con hueso largo, perfecto para parrilla',
    category: 'res',
    featured: true,
    rating: 5,
  },
  {
    id: 'filete-mignon',
    name: 'FILET MIGNON',
    description: 'El corte más tierno de la res, textura mantequillosa y sabor suave',
    category: 'res',
    rating: 5,
  },
  {
    id: 'new-york',
    name: 'NEW YORK STRIP',
    description: 'Corte clásico de steakhouse, equilibrio perfecto entre terneza y sabor',
    category: 'res',
    rating: 5,
  },
  {
    id: 'cuadril',
    name: 'CUADRIL',
    description: 'Corte versátil, magro y con buen sabor, ideal para cocinar en punto medio',
    category: 'res',
  },
  {
    id: 'lomo',
    name: 'LOMO',
    description: 'Lomo completo o en medallones, terneza premium y bajo en grasa',
    category: 'res',
  },
  {
    id: 'otros-res',
    name: 'OTROS CORTES',
    description: 'T-Bone, porterhouse, asado de tira, falda y cortes personalizados según necesidad',
    category: 'res',
  },

  // CARNE DE CERDO
  {
    id: 'baby-back',
    name: 'COSTILLAS BABY BACK',
    description: 'Costillas premium del lomo, carne tierna y jugosa con poco hueso',
    category: 'cerdo',
    featured: true,
    rating: 5,
  },
  {
    id: 'st-louis',
    name: 'COSTILLAS ST. LOUIS',
    description: 'Corte más grande y carnoso que el baby back, perfecto para BBQ',
    category: 'cerdo',
  },
  {
    id: 'chuletas',
    name: 'CHULETAS',
    description: 'Chuletas de cerdo con hueso o deshuesadas, jugosas y sabrosas',
    category: 'cerdo',
  },
  {
    id: 'lomo-cerdo',
    name: 'LOMO Y LOMITO',
    description: 'Cortes magros y versátiles del cerdo para múltiples preparaciones',
    category: 'cerdo',
  },
  {
    id: 'otros-cerdo',
    name: 'OTROS CORTES DISPONIBLES',
    description: 'Pierna, paleta, tocino, embutidos y más opciones de cerdo premium',
    category: 'cerdo',
  },

  // CARNE DE POLLO
  {
    id: 'pechuga',
    name: 'PECHUGA',
    description: 'Filetes sin hueso y sin piel, magros y de cocción rápida',
    category: 'pollo',
    featured: true,
    rating: 5,
  },
  {
    id: 'muslo',
    name: 'MUSLO',
    description: 'Muslo entero o deshuesado, jugoso y con más sabor que la pechuga',
    category: 'pollo',
  },
  {
    id: 'alitas',
    name: 'ALITAS',
    description: 'Alas de pollo completas, ideales para freír, asar o preparaciones BBQ',
    category: 'pollo',
  },
  {
    id: 'cortes-especiales-pollo',
    name: 'CORTES ESPECIALES',
    description: 'Supremas, ballotines, carcazas para fondos y cortes personalizados',
    category: 'pollo',
  },
  {
    id: 'otros-pollo',
    name: 'OTROS PRODUCTOS',
    description: 'Pollo entero, cortes específicos según necesidad de su cocina',
    category: 'pollo',
  },

  // ESPECIALES
  {
    id: 'empacados-vacio',
    name: 'EMPACADOS AL VACÍO',
    description: 'Máxima frescura y vida útil extendida, conservación óptima del producto',
    category: 'especiales',
  },
  {
    id: 'madurados',
    name: 'CORTES MADURADOS',
    description: 'Proceso controlado de maduración para desarrollar sabor y terneza',
    category: 'especiales',
  },
  {
    id: 'porcionados',
    name: 'PORCIONADOS EXACTOS',
    description: 'Cortes según peso y medida específica, control perfecto de costos',
    category: 'especiales',
  },
  {
    id: 'personalizados',
    name: 'OPCIONES PERSONALIZADAS',
    description: 'Cortes especiales, marinados y preparaciones según su menú',
    category: 'especiales',
  },
  {
    id: 'embutidos',
    name: 'EMBUTIDOS',
    description: 'Chorizo, salchichón, tocinera, carne prensada y más opciones',
    category: 'especiales',
  },
  {
    id: 'quesos-mariscos',
    name: 'QUESOS Y MARISCOS',
    description: 'Mozzarella, queso fresco, pangasius, mariscada y más productos',
    category: 'especiales',
  },
  {
    id: 'congelados',
    name: 'PRODUCTOS CONGELADOS',
    description: 'Papas, vegetales, aros de cebolla, patacones y más opciones',
    category: 'especiales',
  },
]

// Productos destacados (para el carousel)
export const featuredProducts = products.filter(p => p.featured)

// Productos por categoría
export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category)
}
