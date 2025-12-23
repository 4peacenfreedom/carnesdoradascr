import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main image */}
              <div className="col-span-2">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/assets/images/team/andres.jpg"
                    alt="Andrés Ramírez - Director General"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Experience badge - floating */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0">
                <div className="bg-primary text-white rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-heading font-bold">20+</div>
                    <div className="text-sm uppercase tracking-wider mt-1">
                      Años de
                      <br />
                      Experiencia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 lg:pl-8">
            {/* Section label */}
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Sobre Nosotros
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight">
              Calidad Premium en{' '}
              <span className="text-primary">Cada Corte</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Con más de <strong>20 años de experiencia</strong> en el mercado
                costarricense, nos hemos consolidado como el proveedor líder de
                carnes premium para restaurantes y hoteles de todo el país.
              </p>
              <p>
                Nuestro compromiso con la calidad nos ha permitido establecer
                relaciones duraderas con los chefs más exigentes, quienes confían
                en nosotros para obtener los mejores cortes de carne, tanto
                nacionales como importados.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-3 pt-4">
              {[
                'Trazabilidad certificada en cada producto',
                'Cadena de frío garantizada 24/7',
                'Cortes personalizados según tu menú',
                'Asesoría especializada de expertos',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Director signature section */}
            <div className="pt-6 border-t border-gray-200 mt-8">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-heading font-semibold text-lg text-dark">
                    Andrés Ramírez
                  </p>
                  <p className="text-sm text-gray-500">Director General</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button asChild size="lg">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
