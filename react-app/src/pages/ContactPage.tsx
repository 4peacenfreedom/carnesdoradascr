import Layout from '@/components/layout/Layout'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import BusinessHours from '@/components/contact/BusinessHours'
import GoogleMap from '@/components/contact/GoogleMap'

export default function ContactPage() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark mb-4 uppercase">
              Contacto
            </h1>
            <p className="text-lg text-gray-600">
              Estamos aquí para atenderle. Utilice cualquiera de nuestros canales
              de comunicación.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Image Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Form Side */}
            <div>
              <ContactForm />
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/contacto/contacto.webp"
                  alt="Servicio de entrega de carnes premium"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block">
                <p className="text-sm font-semibold">
                  📞 Respuesta rápida garantizada
                </p>
                <p className="text-xs mt-1 opacity-90">
                  Nos comprometemos a responder en menos de 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Business Hours Section */}
      <section
        className="py-16 md:py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(/assets/images/backgrounds/footer-bg.png)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <ContactInfo />
            </div>

            {/* Business Hours */}
            <div>
              <BusinessHours />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <GoogleMap />
    </Layout>
  )
}
