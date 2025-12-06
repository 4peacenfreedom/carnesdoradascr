import { Mail, MapPin, Clock } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export default function Topbar() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-2">
          {/* Left side - Contact Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
            </a>

            <a
              href={`https://maps.google.com/?q=${CONTACT_INFO.coordinates.lat},${CONTACT_INFO.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden lg:inline">{CONTACT_INFO.address}</span>
              <span className="lg:hidden">Ubicación</span>
            </a>
          </div>

          {/* Right side - Hours */}
          <div className="flex items-center gap-2 text-sm text-white/90">
            <Clock className="w-4 h-4" />
            <span className="hidden md:inline">{CONTACT_INFO.hours.weekday}</span>
            <span className="md:hidden">Lun-Vie 7AM-5PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
