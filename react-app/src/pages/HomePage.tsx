import Layout from '@/components/layout/Layout'
import HeroSlider from '@/components/home/HeroSlider'
import AboutSection from '@/components/home/AboutSection'

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      {/* More sections coming soon... */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
            <span className="text-gray-600">
              🚧 Más secciones en construcción (Productos, Entregas, Testimonios, Blog)...
            </span>
          </div>
        </div>
      </section>
    </Layout>
  )
}
