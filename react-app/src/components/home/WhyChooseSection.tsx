import { whyChooseItems } from '@/data/why-choose'
import { Beef, Clock, ShieldCheck, Phone } from 'lucide-react'

// Map icon names to Lucide components
const iconMap: Record<string, typeof Beef> = {
  'icon-meat-3': Beef,
  'icon-time': Clock,
  'icon-check': ShieldCheck,
  'icon-phone-call': Phone,
}

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            ¿Por qué Carnes Doradas?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mt-3 mb-4">
            Algunas Razones para{' '}
            <span className="text-primary">Elegirnos</span>
          </h2>
          <p className="text-gray-600">
            Calidad certificada, frescura garantizada y servicio profesional que no
            falla. Trabajamos con los estándares más altos de la industria para que
            usted pueda enfocarse en lo que mejor hace: crear experiencias
            gastronómicas excepcionales.
          </p>
        </div>

        {/* Why Choose Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyChooseItems.map((item) => {
            const Icon = iconMap[item.icon] || Beef

            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            Más de 20 años siendo el respaldo de las mejores cocinas de Costa Rica.
            Estamos en todo el Valle Central trabajando con hoteles, restaurantes y
            sodas institucionales. Así mismo en la zona Pacífico Central: Orotina,
            Herradura, Jacó, Parrita, Quepos y Manuel Antonio. También en la zona
            Norte: Ciudad Quesada y La Fortuna.
          </p>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
