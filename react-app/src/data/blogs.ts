import { BlogPost } from '@/types/blog'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'secretos-de-la-carne-perfecta',
    title: 'Los Secretos de la Carne Perfecta: Consejos de Nuestros Expertos',
    description: 'Descubre los secretos que utilizan los chefs profesionales para preparar cortes de carne perfectos. Desde la selección hasta la cocción.',
    heroImage: '/assets/images/blog/blog_1.webp',
    heroImageAlt: 'Chef preparando un corte de carne premium',
    author: {
      name: 'Andrés Rojas',
      role: 'Chef Ejecutivo',
    },
    publishDate: '2024-01-15',
    readTime: '5 min de lectura',
    tags: ['Consejos', 'Técnicas', 'Chef'],
    content: [
      {
        type: 'paragraph',
        content: 'La preparación de un corte de carne perfecto es un arte que combina técnica, conocimiento y pasión. En Carnes Doradas, trabajamos con los mejores chefs de Costa Rica y hemos recopilado los secretos más importantes para lograr resultados excepcionales.',
      },
      {
        type: 'heading',
        content: '1. La Importancia de la Selección',
      },
      {
        type: 'paragraph',
        content: 'Todo comienza con elegir el corte adecuado. Un buen ribeye debe tener marmoleo visible, lo que garantiza jugosidad y sabor. La carne debe tener un color rojo brillante y grasa blanca cremosa.',
      },
      {
        type: 'heading',
        content: '2. Temperatura Ambiente',
      },
      {
        type: 'paragraph',
        content: 'Uno de los errores más comunes es cocinar la carne directamente del refrigerador. Deja que tu corte alcance temperatura ambiente (unos 30 minutos) antes de cocinarlo. Esto permite una cocción más uniforme.',
      },
      {
        type: 'heading',
        content: '3. Sazonado Correcto',
      },
      {
        type: 'list',
        content: [
          'Sal gruesa de mar - resalta el sabor natural',
          'Pimienta negra recién molida - añade complejidad',
          'Un toque de ajo en polvo - opcional pero recomendado',
          'Aceite de oliva - para sellar correctamente',
        ],
      },
      {
        type: 'heading',
        content: '4. La Técnica de Sellado',
      },
      {
        type: 'paragraph',
        content: 'Calienta tu sartén o parrilla a fuego alto. Debe estar muy caliente antes de colocar la carne. Esto creará una costra perfecta que sella los jugos. No muevas la carne durante los primeros 3-4 minutos.',
      },
      {
        type: 'quote',
        content: 'La paciencia es clave. Una buena costra se forma cuando la carne está en contacto constante con una superficie muy caliente.',
      },
      {
        type: 'heading',
        content: '5. Tiempo de Reposo',
      },
      {
        type: 'paragraph',
        content: 'Después de cocinar, deja reposar la carne durante 5-10 minutos. Este paso permite que los jugos se redistribuyan, resultando en un corte más jugoso y sabroso.',
      },
      {
        type: 'paragraph',
        content: 'En Carnes Doradas, todos nuestros cortes están listos para que apliques estas técnicas y logres resultados de restaurante en tu cocina. ¿Listo para convertirte en un maestro de la parrilla?',
      },
    ],
  },
  {
    id: '2',
    slug: 'importancia-cadena-frio',
    title: 'La Importancia de la Cadena de Frío en Productos Cárnicos',
    description: 'Conoce por qué la cadena de frío es fundamental para garantizar la calidad y seguridad de los productos cárnicos premium.',
    heroImage: '/assets/images/blog/blog_2.webp',
    heroImageAlt: 'Refrigeración de carne premium',
    author: {
      name: 'María González',
      role: 'Directora de Calidad',
    },
    publishDate: '2024-01-10',
    readTime: '4 min de lectura',
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
        content: 'Nuestro Compromiso',
      },
      {
        type: 'list',
        content: [
          'Camiones refrigerados certificados',
          'Monitoreo de temperatura en tiempo real',
          'Entrega directa sin intermediarios',
          'Almacenamiento en cámaras de última generación',
        ],
      },
      {
        type: 'quote',
        content: 'Cada grado cuenta. Por eso monitoreamos constantemente la temperatura de nuestros productos.',
      },
      {
        type: 'paragraph',
        content: 'Cuando eliges Carnes Doradas, no solo estás eligiendo calidad premium, sino también la tranquilidad de saber que cada corte ha sido manejado con los más altos estándares de seguridad alimentaria.',
      },
    ],
  },
]
