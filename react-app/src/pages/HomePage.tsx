import Layout from '@/components/layout/Layout'
import HeroSlider from '@/components/home/HeroSlider'
import AboutSection from '@/components/home/AboutSection'
import ClientCarousel from '@/components/home/ClientCarousel'
import ProductsCarousel from '@/components/home/ProductsCarousel'
import ProductsTabs from '@/components/home/ProductsTabs'
import DeliverySection from '@/components/home/DeliverySection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import BlogCarousel from '@/components/home/BlogCarousel'

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Products Carousel */}
      <ProductsCarousel />

      {/* Products Tabs */}
      <ProductsTabs />

      {/* Delivery Section */}
      <DeliverySection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Blog Carousel */}
      <BlogCarousel />
    </Layout>
  )
}
