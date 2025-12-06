import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { heroSlides } from '@/data/hero-slides'
import { Button } from '@/components/ui/button'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export default function HeroSlider() {
  return (
    <section id="inicio" className="relative bg-gray-50">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-primary',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
        }}
        loop={true}
        className="hero-slider"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white" />

              <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div className="text-center lg:text-left space-y-6 py-12 lg:py-0">
                    {/* Subtitle */}
                    <div className="inline-block">
                      <span className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-dark leading-tight">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i}>
                          {word}
                          {i < slide.title.split(' ').length - 1 && <br />}
                        </span>
                      ))}
                    </h1>

                    {/* CTA Button */}
                    {slide.cta && (
                      <div className="pt-4">
                        <Button
                          asChild
                          size="xl"
                          className="font-semibold uppercase tracking-wide"
                        >
                          {slide.cta.link.startsWith('#') ? (
                            <a
                              href={slide.cta.link}
                              onClick={(e) => {
                                e.preventDefault()
                                const element = document.querySelector(slide.cta!.link)
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' })
                                }
                              }}
                            >
                              {slide.cta.text}
                            </a>
                          ) : (
                            <Link to={slide.cta.link}>{slide.cta.text}</Link>
                          )}
                        </Button>
                      </div>
                    )}

                    {/* Description Text */}
                    <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      {slide.id === 'slide-1' &&
                        'Más de 20 años abasteciendo a restaurantes y hoteles en Costa Rica. Trazabilidad certificada y cadena de frío garantizada en cada entrega.'}
                      {slide.id === 'slide-2' &&
                        'Cortes nacionales e importados de la más alta calidad. Servicio profesional para chefs que buscan excelencia en cada plato.'}
                      {slide.id === 'slide-3' &&
                        'Flotilla equipada con refrigeración controlada. Servicio rápido y consistente para que tu cocina nunca se detenga.'}
                    </p>
                  </div>

                  {/* Image Slide */}
                  <div className="relative flex items-center justify-center">
                    <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
                      {/* Decorative background circle */}
                      <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-110" />

                      {/* Image */}
                      <div className="relative z-10">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              {slide.id === 'slide-1' && (
                <a
                  href="#nosotros"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector('#nosotros')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden lg:flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors"
                >
                  <span className="text-xs uppercase tracking-wider">Scroll</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-slider .swiper-pagination {
          bottom: 2rem !important;
        }
        .hero-slider .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 0.5;
        }
        .hero-slider .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
