import type { Product } from '@/types'

export const products: Product[] = [
  // CARNE DE RES
  {
    id: 'ribeye',
    name: 'RIBEYE',
    description: 'Corte premium con marmoleo excepcional, jugosidad y sabor intenso',
    detailedDescription: 'El Ribeye es uno de los cortes más codiciados por chefs profesionales y amantes de la carne. Proveniente de la sección del costillar, este corte se caracteriza por su excepcional marmoleo (infiltración de grasa), que garantiza una jugosidad incomparable y un sabor profundo e intenso. Su textura tierna y su capacidad para mantener los jugos durante la cocción lo convierten en la opción perfecta para parrilla o sartén a altas temperaturas. Es el favorito en steakhouses de todo el mundo y un éxito garantizado en cualquier menú premium.',
    category: 'res',
    featured: true,
    rating: 5,
    image: '/assets/images/products/ribeye.jpeg',
  },
  {
    id: 'tomahawk',
    name: 'TOMAHAWK',
    description: 'Ribeye de presentación espectacular con hueso largo, perfecto para parrilla',
    detailedDescription: 'El Tomahawk es esencialmente un Ribeye de presentación espectacular, caracterizado por su hueso largo de costilla que le da el aspecto de un hacha (de ahí su nombre). Este corte de 30-45 cm de largo no solo ofrece todo el sabor excepcional del Ribeye tradicional, sino que añade un elemento visual impresionante que lo convierte en el centro de atención de cualquier mesa. El hueso aporta sabor adicional durante la cocción y ayuda a regular la temperatura, resultando en una carne jugosa y perfectamente cocida. Es el corte ideal para compartir y crear experiencias memorables en tu restaurante.',
    category: 'res',
    featured: true,
    rating: 5,
    image: '/assets/images/products/tomahawk.jpeg',
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
    description: 'Porterhouse, asado de tira, falda y cortes personalizados según necesidad',
    category: 'res',
  },

  // CARNE DE RES - T-BONE
  {
    id: 't-bone',
    name: 'T-BONE',
    description: 'Corte icónico que combina filet mignon y new york strip en un solo bistec, el mejor de dos mundos',
    detailedDescription: 'El T-Bone es un corte legendario que ofrece lo mejor de dos mundos en un solo bistec. Separados por el hueso característico en forma de T, este corte incluye una porción generosa de New York Strip en un lado y un filete tierno (filet mignon) en el otro. Esta combinación permite a los comensales disfrutar de dos texturas y sabores distintos en una sola pieza: la intensidad y sabor robusto del strip, junto con la terneza excepcional del filet. Es el corte perfecto para quienes buscan variedad y calidad en cada bocado, y un clásico que nunca falla en los menús de restaurantes de primer nivel.',
    category: 'res',
    featured: true,
    rating: 5,
    image: '/assets/images/products/tbone.jpeg',
  },

  // CARNE DE CERDO
  {
    id: 'baby-back',
    name: 'COSTILLAS BABY BACK',
    description: 'Costillas premium del lomo, carne tierna y jugosa con poco hueso',
    detailedDescription: 'Las Costillas Baby Back son el corte premium de costillas de cerdo, provenientes de la sección del lomo superior. A diferencia de las costillas tradicionales, estas son más cortas, más tiernas y tienen una mayor proporción de carne magra con respecto al hueso. Su textura jugosa y su sabor delicado las hacen perfectas para técnicas de cocción lenta, ahumado y BBQ. Son extremadamente populares en restaurantes especializados en parrilla y BBQ, donde se marinan con salsas especiales y se cocinan hasta lograr esa textura perfecta que se desprende del hueso con facilidad. Un plato que garantiza satisfacción y que tus clientes pedirán una y otra vez.',
    category: 'cerdo',
    featured: true,
    rating: 5,
    image: '/assets/images/products/babybackrib.jpeg',
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
