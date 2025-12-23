import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getProductsByCategory } from '@/data/products'
import { PRODUCT_CATEGORIES } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card'

export default function ProductsTabs() {
  return (
    <section id="productos-disponibles" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Catálogo Completo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mt-3 mb-4 uppercase">
            Productos <span className="text-primary">Disponibles</span>
          </h2>
          <p className="text-gray-600">
            Explora nuestra selección completa de carnes premium por categoría
          </p>
        </div>

        {/* Products tabs */}
        <Tabs defaultValue="res" className="w-full">
          {/* Tabs navigation */}
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto mb-8 bg-white p-2 rounded-lg shadow-md">
            {PRODUCT_CATEGORIES.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="py-4 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs content */}
          {PRODUCT_CATEGORIES.map((category) => {
            const products = getProductsByCategory(category.id)

            return (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {/* Products grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        {/* Content */}
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-dark mb-2 uppercase">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {product.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Additional info */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-dark mb-2 uppercase">
                      ¿No encuentras lo que buscas?
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Ofrecemos cortes personalizados según las necesidades de tu menú.
                      Nuestro catálogo completo incluye más de 100 productos diferentes.
                    </p>
                    <p className="text-gray-700">
                      Contáctenos para recibir asesoría especializada sobre el corte perfecto para tu menú.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
