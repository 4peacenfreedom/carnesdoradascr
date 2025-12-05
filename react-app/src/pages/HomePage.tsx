import Layout from '@/components/layout/Layout'

export default function HomePage() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            CARNES DORADAS
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Calidad Premium para tu Cocina
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Más de 20 años abasteciendo a restaurantes y hoteles en Costa Rica.
            Trazabilidad certificada y cadena de frío garantizada.
          </p>
          <div className="mt-12">
            <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-lg">
              🚧 Secciones del Home en construcción...
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
