import type { BlogPost } from '@/types/blog'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'como-elegir-corte-perfecto',
    title: 'Cómo elegir el corte perfecto para tu menú',
    description: 'Guía completa para seleccionar los mejores cortes de carne según el tipo de preparación y preferencias de tus comensales.',
    heroImage: '/assets/images/blog/blog_1.webp',
    heroImageAlt: 'Diferentes cortes de carne premium',
    author: {
      name: 'Carlos Hernández',
      role: 'Chef Consultor',
    },
    publishDate: '2024-11-15',
    readTime: '6 min de lectura',
    tags: ['Guías', 'Consejos', 'Técnicas'],
    content: [
      {
        type: 'paragraph',
        content: 'La selección del corte de carne adecuado puede hacer la diferencia entre un plato ordinario y una experiencia gastronómica excepcional. En esta guía completa, te ayudaremos a elegir el corte perfecto según el tipo de preparación y las preferencias de tus comensales.',
      },
      {
        type: 'heading',
        content: '1. Conoce los Cortes Principales',
      },
      {
        type: 'paragraph',
        content: 'Cada corte tiene características únicas que lo hacen ideal para diferentes métodos de cocción. El ribeye es perfecto para la parrilla gracias a su marmoleo, mientras que el filet mignon destaca por su suavidad incomparable.',
      },
      {
        type: 'heading',
        content: '2. Considera el Método de Cocción',
      },
      {
        type: 'list',
        content: [
          'Parrilla: Ribeye, T-bone, New York Strip',
          'Horno: Prime Rib, Lomo completo',
          'Cocción lenta: Chuck roast, Short ribs',
          'Sartén: Filet mignon, Sirloin',
        ],
      },
      {
        type: 'heading',
        content: '3. El Marmoleo es Clave',
      },
      {
        type: 'paragraph',
        content: 'El marmoleo (vetas de grasa intramuscular) es fundamental para la jugosidad y el sabor. Los cortes con buen marmoleo son más sabrosos y permanecen jugosos durante la cocción.',
      },
      {
        type: 'quote',
        content: 'Un corte bien marmoleado es la base de un plato excepcional. La grasa aporta sabor y jugosidad incomparables.',
      },
      {
        type: 'heading',
        content: '4. Presupuesto y Rendimiento',
      },
      {
        type: 'paragraph',
        content: 'No siempre el corte más caro es el más adecuado. Considera el rendimiento, el desperdicio y la presentación final. Algunos cortes económicos, bien preparados, pueden superar a opciones premium mal ejecutadas.',
      },
      {
        type: 'paragraph',
        content: 'En Carnes Doradas, nuestros expertos están disponibles para asesorarte en la selección del corte perfecto para tu menú. Contáctanos para conocer nuestras opciones premium.',
      },
    ],
  },
  {
    id: '2',
    slug: 'importancia-cadena-frio',
    title: 'La importancia de la cadena de frío en carnes premium',
    description: 'Descubre por qué mantener la cadena de frío es fundamental para preservar la calidad y seguridad de las carnes.',
    heroImage: '/assets/images/blog/blog_4.webp',
    heroImageAlt: 'Sistema de refrigeración de carnes',
    author: {
      name: 'María González',
      role: 'Directora de Calidad',
    },
    publishDate: '2024-11-08',
    readTime: '5 min de lectura',
    tags: ['Calidad', 'Seguridad Alimentaria', 'Información'],
    content: [
      {
        type: 'paragraph',
        content: 'La cadena de frío es el proceso que garantiza que los productos cárnicos se mantengan a temperaturas controladas desde su procesamiento hasta que llegan a tu cocina. En Carnes Doradas, este proceso es fundamental para nuestra promesa de calidad.',
      },
      {
        type: 'heading',
        content: '¿Qué es la Cadena de Frío?',
      },
      {
        type: 'paragraph',
        content: 'Es el mantenimiento continuo de temperaturas entre 0°C y 4°C durante toda la vida útil del producto. Una ruptura en esta cadena puede comprometer la calidad y seguridad del alimento.',
      },
      {
        type: 'heading',
        content: 'Beneficios de una Cadena de Frío Adecuada',
      },
      {
        type: 'list',
        content: [
          'Preserva las propiedades organolépticas (sabor, textura, aroma)',
          'Previene el crecimiento bacteriano',
          'Extiende la vida útil del producto',
          'Garantiza la seguridad alimentaria',
          'Mantiene el valor nutricional',
        ],
      },
      {
        type: 'heading',
        content: 'Nuestro Compromiso',
      },
      {
        type: 'list',
        content: [
          'Camiones refrigerados certificados',
          'Monitoreo de temperatura en tiempo real',
          'Entrega directa sin intermediarios',
          'Almacenamiento en cámaras de última generación',
          'Personal capacitado en manejo de productos perecederos',
        ],
      },
      {
        type: 'quote',
        content: 'Cada grado cuenta. Por eso monitoreamos constantemente la temperatura de nuestros productos desde el momento de su empaque hasta la entrega.',
      },
      {
        type: 'heading',
        content: 'Señales de Ruptura en la Cadena de Frío',
      },
      {
        type: 'paragraph',
        content: 'Es importante saber identificar si un producto ha sufrido una ruptura en la cadena de frío: cambios en el color, presencia de cristales de hielo en productos frescos, empaque con humedad excesiva o temperatura al tacto superior a la esperada.',
      },
      {
        type: 'paragraph',
        content: 'Cuando eliges Carnes Doradas, no solo estás eligiendo calidad premium, sino también la tranquilidad de saber que cada corte ha sido manejado con los más altos estándares de seguridad alimentaria.',
      },
    ],
  },
  {
    id: '3',
    slug: 'tendencias-carnes-maduradas-2024',
    title: 'Tendencias gastronómicas 2024: Carnes maduradas',
    description: 'Las carnes maduradas están revolucionando los menús de restaurantes. Te contamos todo sobre este proceso.',
    heroImage: '/assets/images/blog/blog_3.webp',
    heroImageAlt: 'Carne madurada en proceso de aging',
    author: {
      name: 'Andrés Rojas',
      role: 'Chef Ejecutivo',
    },
    publishDate: '2024-10-25',
    readTime: '7 min de lectura',
    tags: ['Tendencias', 'Técnicas', 'Gastronomía'],
    content: [
      {
        type: 'paragraph',
        content: 'La maduración de carnes es una de las tendencias más importantes en la gastronomía contemporánea. Este proceso ancestral ha tomado nueva vida en los restaurantes premium de todo el mundo, ofreciendo sabores y texturas incomparables.',
      },
      {
        type: 'heading',
        content: '¿Qué es la Maduración de Carnes?',
      },
      {
        type: 'paragraph',
        content: 'La maduración (o "aging") es un proceso controlado donde la carne se almacena en condiciones específicas de temperatura, humedad y ventilación durante un período determinado. Este proceso permite que las enzimas naturales descompongan las fibras musculares, resultando en una carne más tierna y sabrosa.',
      },
      {
        type: 'heading',
        content: 'Tipos de Maduración',
      },
      {
        type: 'paragraph',
        content: 'Existen dos métodos principales: Dry Aging (maduración en seco) y Wet Aging (maduración húmeda). El dry aging se realiza en cámaras especiales con control de temperatura y humedad, mientras que el wet aging se hace al vacío en bolsas selladas.',
      },
      {
        type: 'heading',
        content: 'Beneficios de las Carnes Maduradas',
      },
      {
        type: 'list',
        content: [
          'Sabor más intenso y complejo',
          'Textura excepcionalmente tierna',
          'Mayor jugosidad',
          'Perfil de sabor único tipo nuez o mantequilla',
          'Experiencia gastronómica premium',
        ],
      },
      {
        type: 'quote',
        content: 'Una carne bien madurada puede transformar completamente un plato, elevándolo de bueno a extraordinario.',
      },
      {
        type: 'heading',
        content: 'Implementación en tu Restaurante',
      },
      {
        type: 'paragraph',
        content: 'Para incorporar carnes maduradas en tu menú, es fundamental trabajar con proveedores certificados que garanticen el proceso correcto. La maduración requiere instalaciones especializadas y control estricto de condiciones.',
      },
      {
        type: 'paragraph',
        content: 'En Carnes Doradas, estamos explorando opciones de carnes maduradas para nuestros clientes premium. Contáctanos para conocer más sobre esta tendencia que está revolucionando la gastronomía.',
      },
    ],
  },
  {
    id: '4',
    slug: 'optimizar-costos-sin-sacrificar-calidad',
    title: 'Tips para optimizar costos sin sacrificar calidad',
    description: 'Estrategias profesionales para gestionar el inventario de carnes y reducir desperdicios en tu cocina.',
    heroImage: '/assets/images/blog/blog_2.webp',
    heroImageAlt: 'Gestión de inventario de carnes',
    author: {
      name: 'Roberto Campos',
      role: 'Consultor de Negocios',
    },
    publishDate: '2024-10-10',
    readTime: '8 min de lectura',
    tags: ['Negocios', 'Gestión', 'Ahorro'],
    content: [
      {
        type: 'paragraph',
        content: 'En el competitivo mundo de la gastronomía, optimizar costos sin comprometer la calidad es esencial para el éxito. Aquí te compartimos estrategias probadas para gestionar eficientemente tu inventario de carnes.',
      },
      {
        type: 'heading',
        content: '1. Planificación Estratégica del Menú',
      },
      {
        type: 'paragraph',
        content: 'Diseña tu menú considerando cortes que compartan despieces similares. Esto permite aprovechar mejor cada pieza de carne y reducir desperdicios significativamente.',
      },
      {
        type: 'heading',
        content: '2. Sistema FIFO (First In, First Out)',
      },
      {
        type: 'paragraph',
        content: 'Implementa un sistema riguroso de rotación de inventario. Los productos que llegan primero deben ser los primeros en utilizarse, minimizando pérdidas por vencimiento.',
      },
      {
        type: 'heading',
        content: '3. Compras Inteligentes',
      },
      {
        type: 'list',
        content: [
          'Establece relaciones a largo plazo con proveedores confiables',
          'Negocia volúmenes según tu capacidad real de rotación',
          'Aprovecha promociones en cortes de temporada',
          'Considera cortes alternativos de calidad similar',
          'Programa entregas frecuentes en lugar de grandes volúmenes',
        ],
      },
      {
        type: 'heading',
        content: '4. Aprovechamiento Total',
      },
      {
        type: 'paragraph',
        content: 'Los recortes y partes menos nobles pueden transformarse en caldos, rellenos o platos especiales. La creatividad culinaria es tu mejor aliada para el aprovechamiento total.',
      },
      {
        type: 'quote',
        content: 'La diferencia entre un negocio rentable y uno en pérdidas a menudo está en los detalles de la gestión de inventario.',
      },
      {
        type: 'heading',
        content: '5. Control de Porciones',
      },
      {
        type: 'paragraph',
        content: 'Estandariza las porciones con básculas y herramientas de medición. Una porción de 200g servida como 250g representa una pérdida del 25% en ese plato.',
      },
      {
        type: 'heading',
        content: '6. Tecnología de Apoyo',
      },
      {
        type: 'list',
        content: [
          'Software de gestión de inventario',
          'Sistemas de punto de venta integrados',
          'Aplicaciones de control de costos',
          'Termómetros digitales para conservación',
          'Etiquetadoras con fecha de recepción',
        ],
      },
      {
        type: 'heading',
        content: '7. Capacitación del Personal',
      },
      {
        type: 'paragraph',
        content: 'Un equipo bien capacitado en técnicas de corte, almacenamiento y aprovechamiento es fundamental. La inversión en capacitación se traduce en ahorros significativos.',
      },
      {
        type: 'paragraph',
        content: 'En Carnes Doradas, no solo te proveemos productos premium, sino que también te asesoramos en la gestión eficiente de tu inventario. Contáctanos para optimizar tus costos sin sacrificar la calidad que tus clientes merecen.',
      },
    ],
  },
]
