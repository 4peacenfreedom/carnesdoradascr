# Carnes Doradas CR - React Migration

Migración del sitio web de Carnes Doradas de Costa Rica a un stack moderno con React, TypeScript, Vite, Tailwind CSS y shadcn-ui.

## 🎯 Objetivo del Proyecto

Modernizar el sitio web actual (HTML + jQuery + Bootstrap) a una aplicación React moderna, manteniendo toda la funcionalidad existente pero con:

- ✅ Mejor performance (70-80% reducción en bundle size)
- ✅ Código más mantenible y escalable
- ✅ Type-safety completo con TypeScript
- ✅ Componentes reutilizables
- ✅ Developer Experience superior
- ✅ Testing automatizado posible

## 🛠️ Stack Tecnológico

### Core
- **React 19** - UI Library
- **TypeScript 5** - Type safety
- **Vite 7** - Build tool ultra-rápido
- **React Router 6** - Client-side routing

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn-ui** - Componentes UI accesibles y customizables
- **Radix UI** - Headless components primitivos

### Forms & Validation
- **React Hook Form** - Manejo de formularios performante
- **Zod** - Schema validation

### UI Components & Effects
- **Swiper** - Carruseles modernos (reemplazo de Owl Carousel)
- **Framer Motion** - Animaciones declarativas
- **Lucide React** - Iconos SVG

### Utilities
- **Axios** - HTTP client
- **class-variance-authority** - Variantes de componentes
- **clsx + tailwind-merge** - Utility para clases CSS

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/          # shadcn-ui components (Button, Card, Tabs, etc.)
│   ├── layout/      # Header, Footer, Topbar
│   ├── home/        # Componentes de la landing page
│   ├── contact/     # Componentes de contacto
│   └── shared/      # Componentes compartidos
│
├── pages/
│   ├── HomePage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
│
├── lib/
│   └── utils.ts     # Utilidades (cn function, etc.)
│
├── hooks/           # Custom React hooks
├── types/           # TypeScript types
├── data/            # Data estática (productos, testimonios, etc.)
│
├── App.tsx          # Router setup
├── main.tsx         # Entry point
└── index.css        # Global styles + Tailwind directives
```

## 🚀 Comenzar a Desarrollar

### Instalación

```bash
cd react-app
npm install
```

### Desarrollo

```bash
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en `dist/`

### Preview del Build

```bash
npm run preview
```

## 📊 Performance Actual

**Bundle Size (Producción):**
- CSS: 16.39 kB (3.87 kB gzipped)
- JS: 257.49 kB (82.54 kB gzipped)

**vs. Sitio Actual:**
- CSS: ~330 kB → **-95% reducción**
- JS: ~450+ kB → **-43% reducción**

## ✅ Progreso de Migración

### ✔️ Completado

- [x] Setup inicial del proyecto (Vite + React + TypeScript)
- [x] Configuración de Tailwind CSS v4
- [x] Path aliases (`@/components`, `@/lib`)
- [x] Componentes base de shadcn-ui:
  - Button
  - Card
  - Tabs
  - Input
  - Textarea
  - Label
  - Dialog
- [x] React Router con 3 rutas (Home, Contacto, 404)
- [x] Estructura de carpetas
- [x] Build system funcional

### 🚧 En Progreso

- [ ] Tipos TypeScript para datos
- [ ] Migración de assets e imágenes
- [ ] Componentes de layout (Header, Footer, Topbar)

### 📋 Pendiente

- [ ] Página Home/Landing con todas las secciones:
  - [ ] Hero slider (3 slides)
  - [ ] About section
  - [ ] Client carousel
  - [ ] Products carousel
  - [ ] Products tabs (Res/Cerdo/Pollo/Especiales)
  - [ ] Delivery/Entregas section
  - [ ] Testimonials carousel
  - [ ] Blog carousel
- [ ] Página de Contacto:
  - [ ] Formulario con validación
  - [ ] Google Maps
  - [ ] Info de contacto
- [ ] Página 404 completa
- [ ] Animaciones scroll (IntersectionObserver)
- [ ] Custom cursor (opcional)
- [ ] Optimización de imágenes (WebP, lazy loading)
- [ ] SEO optimization
- [ ] Testing

## 🎨 Paleta de Colores

```css
/* Color primario de la marca */
--color-primary: 164 33 37;  /* #A42125 - Rojo Carnes */

/* Grises */
--gray-light: #EBE3D9
--gray-default: #D7D3CB
--gray-dark: #E2D8CB
```

## 🔤 Tipografías

- **Headings:** Roboto Condensed
- **Body:** Plus Jakarta Sans
- **Serif:** Cormorant
- **Special:** Quicksand
- **Decorative:** Alex Brush

## 📝 Comparativa: jQuery → React

| Funcionalidad | Antes (jQuery) | Ahora (React) |
|---------------|----------------|---------------|
| Carruseles | Owl Carousel | Swiper |
| Animaciones | WOW.js | Framer Motion + IntersectionObserver |
| Validación | jQuery Validate | React Hook Form + Zod |
| Modales | Magnific Popup | Radix Dialog (shadcn) |
| Tabs | Bootstrap | Radix Tabs (shadcn) |
| Parallax | Jarallax | CSS + scroll listener |
| State | DOM manipulation | React state |

## 🔧 Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Compilar para producción
- `npm run preview` - Preview del build
- `npm run lint` - Ejecutar ESLint

## 📚 Recursos

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn-ui](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Swiper](https://swiperjs.com/react)

## 👨‍💻 Desarrollo

Este proyecto está siendo desarrollado en la rama `claude/react-migration-analysis-01MdAuV6E5gMSvAZoKuAkK7a` sin afectar el sitio actual en producción.

**Rama de trabajo:** `claude/react-migration-analysis-01MdAuV6E5gMSvAZoKuAkK7a`
**Sitio actual:** Permanece intacto en rama `main`

## 📞 Información de Contacto (del sitio)

- **Email:** info@carnesdoradascr.com
- **Teléfono:** +506 2102-7323
- **WhatsApp:** 8823-4567
- **Ubicación:** 1 km al sur gasolinera las Tejitas, Alajuela
- **Horario:** Lun-Vie 7:00 AM - 5:00 PM

---

**Última actualización:** Diciembre 2025
