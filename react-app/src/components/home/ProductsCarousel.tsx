import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { featuredProducts } from '@/data/products'
import { Card, CardContent } from '@/components/ui/card'
import ProductModal from '@/components/products/ProductModal'
import type { Product } from '@/types'

import 'swiper/css'
import 'swiper/css/navigation'

export default function ProductsCarousel() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }
  return (
    <section id="productos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Productos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mt-3 mb-4 uppercase">
            Cortes <span className="text-primary">Premium</span>
          </h2>
          <p className="text-gray-600">
            Selección de nuestros cortes más populares para el sector gastronómico
          </p>
        </div>

        {/* Products carousel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.products-carousel-next',
            prevEl: '.products-carousel-prev',
          }}
          speed={800}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="products-carousel pb-12"
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Card className="group hover:shadow-xl transition-shadow duration-300 border-gray-200 cursor-pointer">
                <CardContent className="p-0">
                  {/* Product image - Clickeable */}
                  <div
                    className="aspect-square overflow-hidden rounded-t-lg"
                    onClick={() => handleProductClick(product)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleProductClick(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product info */}
                  <div className="p-6 space-y-2">
                    <h3
                      className="font-heading font-semibold text-lg text-dark group-hover:text-primary transition-colors uppercase cursor-pointer"
                      onClick={() => handleProductClick(product)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleProductClick(product)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="products-carousel-prev w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="products-carousel-next w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
    </section>
  )
}
