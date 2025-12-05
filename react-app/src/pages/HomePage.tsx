import Layout from '@/components/layout/Layout'
import HeroSlider from '@/components/home/HeroSlider'
import AboutSection from '@/components/home/AboutSection'
import ClientCarousel from '@/components/home/ClientCarousel'
import ProductsCarousel from '@/components/home/ProductsCarousel'
import ProductsTabs from '@/components/home/ProductsTabs'

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Products Carousel */}
      <ProductsCarousel />

      {/* Products Tabs */}
      <ProductsTabs />

      {/* More sections coming soon... */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-6 py-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-600">
              🚧 Más secciones en construcción (Entregas, Testimonios, Blog)...
            </span>
          </div>
        </div>
      </section>
    </Layout>
  )
}
