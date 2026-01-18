import { Link, useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { CONTACT_INFO, SOCIAL_MEDIA } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isContactPage = location.pathname === '/contacto'

  const handleScrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                CARNES DORADAS
              </h3>
              <p className="text-sm text-gray-400">DE COSTA RICA</p>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Más de 20 años abasteciendo a restaurantes y hoteles en Costa Rica
              con carnes premium de la más alta calidad. Trazabilidad certificada
              y cadena de frío garantizada en cada entrega.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                {isHomePage ? (
                  <a
                    href="#nosotros"
                    onClick={(e) => {
                      e.preventDefault()
                      handleScrollToSection('#nosotros')
                    }}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Nosotros
                  </a>
                ) : (
                  <Link
                    to="/#nosotros"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Nosotros
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a
                    href="#productos"
                    onClick={(e) => {
                      e.preventDefault()
                      handleScrollToSection('#productos')
                    }}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Productos
                  </a>
                ) : (
                  <Link
                    to="/#productos"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Productos
                  </Link>
                )}
              </li>
              {!isContactPage && (
                <li>
                  <Link
                    to="/contacto"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">
              Contáctanos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-3 text-sm hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 text-sm hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${CONTACT_INFO.coordinates.lat},${CONTACT_INFO.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm hover:text-primary transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span>{CONTACT_INFO.address}</span>
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <h5 className="text-white font-semibold text-sm mb-2">
                Horario
              </h5>
              <p className="text-xs">{CONTACT_INFO.hours.weekday}</p>
              <p className="text-xs text-gray-500 mt-1">
                {CONTACT_INFO.hours.weekend}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Carnes Doradas de Costa Rica S.A. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-600">
              Certified Angus Beef 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
