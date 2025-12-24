import { Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <h4 className="text-2xl font-heading font-bold text-dark uppercase">
            Te Ayudamos a Escoger?
          </h4>
          <p className="text-gray-600">
            Nuestro equipo está listo para atenderle, de lunes a viernes de 7am a 5pm y resolver cualquier consulta
            sobre nuestros productos y servicios.
          </p>
        </div>

        {/* Contact List */}
        <div className="space-y-4 pt-4">
          {/* Phone */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Llame Ahora
              </span>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="block text-lg font-semibold text-dark hover:text-primary transition-colors mt-1"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Email
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block text-lg font-semibold text-dark hover:text-primary transition-colors mt-1 break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Dirección
              </span>
              <a
                href="https://maps.app.goo.gl/BGEEPPnogKLavEVV8"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-dark hover:text-primary transition-colors mt-1"
              >
                1 km al sur de la gasolinera las Tejitas, Alajuela
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
