import { Button } from '@/components/ui/button'
import { Truck, MapPin, Phone } from 'lucide-react'

export default function DeliverySection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hola, quisiera consultar sobre el servicio de entrega en mi zona'
    )
    window.open(`https://wa.me/50688234567?text=${message}`, '_blank')
  }

  return (
    <section id="entregas" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            {/* Section label */}
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Servicio de Entrega
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight uppercase">
              Flotilla Propia con{' '}
              <span className="text-primary">Refrigeración Certificada</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Carnes Doradas cuenta con flotilla propia equipada con refrigeración
              certificada y control de temperatura constante. Garantizamos la cadena
              de frío en cada entrega, manteniendo la frescura y calidad de nuestros
              productos desde nuestras instalaciones hasta su cocina.
            </p>

            {/* Coverage areas */}
            <div className="pt-4">
              <h3 className="font-heading font-semibold text-lg text-dark mb-4 uppercase">
                Zonas de Cobertura
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Valle Central', icon: MapPin },
                  { name: 'Pacífico Central', icon: MapPin },
                  { name: 'Zona Norte', icon: MapPin },
                ].map((zone, index) => {
                  const Icon = zone.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                    >
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">
                        {zone.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-lg text-dark mb-1">
                    Solicite Su Entrega
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Servicio confiable y puntual. Contáctenos para consultar
                    disponibilidad en su zona.
                  </p>
                  <Button onClick={handleWhatsAppClick} size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Consultar Cobertura
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              {/* Facebook Video Embed */}
              <div
                className="fb-video"
                data-href="https://www.facebook.com/reel/1868576597364039/"
                data-width="auto"
                data-show-text="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50 pointer-events-none" />
    </section>
  )
}
