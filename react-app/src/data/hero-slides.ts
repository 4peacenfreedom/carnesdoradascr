import type { HeroSlide } from '@/types'

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'CALIDAD PREMIUM PARA TU COCINA',
    subtitle: 'MÁS DE 20 AÑOS DE EXPERIENCIA',
    image: '/assets/images/team/logo_dark.png',
    cta: {
      text: 'Conócenos',
      link: '#nosotros',
    },
  },
  {
    id: 'slide-2',
    title: 'EXCELENCIA EN CADA CORTE',
    subtitle: 'CORTES NACIONALES E IMPORTADOS',
    image: '/assets/images/team/chef_sosteniendo_ribeye.png',
    cta: {
      text: 'COTIZAR',
      link: '/contacto',
    },
  },
  {
    id: 'slide-3',
    title: 'ENTREGA PUNTUAL CERTIFICADA',
    subtitle: 'VALLE CENTRAL • PACÍFICO • ZONA NORTE',
    image: '/assets/images/team/repartidor.png',
    cta: {
      text: 'CONTÁCTANOS',
      link: '/contacto',
    },
  },
]
