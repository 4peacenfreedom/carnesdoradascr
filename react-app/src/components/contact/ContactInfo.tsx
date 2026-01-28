import { useState, useEffect } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export default function ContactInfo() {
  const [isBusinessHours, setIsBusinessHours] = useState(false)

  useEffect(() => {
    const checkBusinessHours = () => {
      // Obtener hora actual en Costa Rica (GMT-6)
      const now = new Date()
      const costaRicaTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Costa_Rica' }))

      const day = costaRicaTime.getDay() // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
      const hour = costaRicaTime.getHours()

      // Lunes a Viernes (1-5) y entre 7am y 5pm (7-17)
      const isWeekday = day >= 1 && day <= 5
      const isWorkingHour = hour >= 7 && hour < 17

      setIsBusinessHours(isWeekday && isWorkingHour)
    }

    // Verificar inmediatamente
    checkBusinessHours()

    // Verificar cada minuto
    const interval = setInterval(checkBusinessHours, 60000)

    return () => clearInterval(interval)
  }, [])
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
              {isBusinessHours ? (
                <>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Llame Ahora
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                    className="block text-lg font-semibold text-dark hover:text-primary transition-colors mt-1"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </>
              ) : (
                <>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Teléfono
                  </span>
                  <div className="block text-lg font-semibold text-gray-400 mt-1">
                    {CONTACT_INFO.phone}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Llámanos entre semana de 7am y 5pm
                  </p>
                </>
              )}
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
