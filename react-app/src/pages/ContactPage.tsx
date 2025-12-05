import Layout from '@/components/layout/Layout'

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Contacto
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos listos para atenderte. Completa el formulario o contáctanos
            directamente por teléfono o WhatsApp.
          </p>
          <div className="mt-12">
            <div className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-lg">
              🚧 Formulario de contacto en construcción...
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
