import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { testimonials } from '@/data/testimonials'
import { Star, Quote } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonios Reales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mt-3 mb-4 uppercase">
            Lo Que Dicen{' '}
            <span className="text-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-gray-600">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={600}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-primary',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
            }}
            navigation={{
              nextEl: '.testimonials-next',
              prevEl: '.testimonials-prev',
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-carousel pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-primary/20" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 leading-relaxed mb-6 min-h-[100px]">
                    "{testimonial.text}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position} - {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <button
            className="testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="testimonials-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .testimonials-carousel .swiper-pagination {
          bottom: -10px !important;
        }
        .testimonials-carousel .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 0.4;
        }
        .testimonials-carousel .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
