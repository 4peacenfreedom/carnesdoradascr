import { Link } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-9xl font-heading font-bold text-primary mb-4">
              404
            </h1>
            <h2 className="text-3xl font-heading font-semibold text-gray-900 mb-6">
              Oops... ese enlace no lo tenemos :(
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              La página que buscas no existe o fue movida a otra ubicación.
            </p>
            <Button asChild size="lg">
              <Link to="/">Vamos al inicio</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
