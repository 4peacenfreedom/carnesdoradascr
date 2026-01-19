import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Facebook, Instagram } from 'lucide-react'
import { NAVIGATION, CONTACT_INFO, SOCIAL_MEDIA } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isContactPage = location.pathname === '/contacto'

  const scrollToSection = (href: string) => {
    if (isHomePage && href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, quisiera consultar sobre sus productos y servicios')
    window.open(`https://wa.me/50688234567?text=${message}`, '_blank')
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/images/logo.svg"
              alt="Carnes Doradas de Costa Rica"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {isHomePage ? (
              // One-page navigation for home
              NAVIGATION.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))
            ) : (
              // Regular navigation for other pages
              <>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Inicio
                </Link>
                <Link
                  to="/contacto"
                  className={cn(
                    "text-gray-700 hover:text-primary transition-colors font-medium",
                    location.pathname === '/contacto' && "text-primary"
                  )}
                >
                  Contacto
                </Link>
              </>
            )}
          </nav>

          {/* Right side - Social & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Phone & CTA Button */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right">
                <div className="text-xs text-gray-500">Llámanos</div>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm font-semibold text-gray-800 hover:text-primary"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {isContactPage ? (
                <Button onClick={handleWhatsAppClick}>
                  Abrir WhatsApp
                </Button>
              ) : (
                <Button asChild>
                  <Link to="/contacto">
                    Contáctanos
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {isHomePage ? (
                NAVIGATION.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.label}
                  </a>
                ))
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/contacto"
                    className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </>
              )}

              {/* Mobile Social & Contact */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <a
                  href={SOCIAL_MEDIA.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_MEDIA.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-gray-700 hover:text-primary py-2"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{CONTACT_INFO.phone}</span>
              </a>

              {isContactPage ? (
                <Button onClick={handleWhatsAppClick} className="w-full">
                  Abrir WhatsApp
                </Button>
              ) : (
                <Button asChild className="w-full">
                  <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                    Contáctanos
                  </Link>
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
