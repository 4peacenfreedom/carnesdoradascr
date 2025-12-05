import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { blogPosts } from '@/data/blog'
import { Calendar, ArrowRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default function BlogCarousel() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-CR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="blog" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left content */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Nuestro Blog
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mt-3 mb-4">
                Consejos y{' '}
                <span className="text-primary">Novedades</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Descubra técnicas profesionales, consejos de expertos y las últimas
                novedades del mundo de las carnes premium.
              </p>
            </div>
          </div>

          {/* Right carousel */}
          <div className="lg:col-span-7">
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                speed={600}
                navigation={{
                  nextEl: '.blog-next',
                  prevEl: '.blog-prev',
                }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1.2,
                  },
                  768: {
                    slidesPerView: 1.5,
                  },
                  1024: {
                    slidesPerView: 1.8,
                  },
                  1280: {
                    slidesPerView: 2,
                  },
                }}
                className="blog-carousel"
              >
                {blogPosts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading font-bold text-xl text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Read more link */}
                        <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                          Leer Más
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom navigation buttons */}
              <div className="flex gap-3 mt-8 justify-end">
                <button
                  className="blog-prev w-12 h-12 bg-gray-100 hover:bg-primary rounded-full flex items-center justify-center text-dark hover:text-white transition-all duration-300"
                  aria-label="Previous blog post"
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
                  className="blog-next w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Next blog post"
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
          </div>
        </div>
      </div>
    </section>
  )
}
