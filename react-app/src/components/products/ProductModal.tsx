import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { Product } from '@/types'

interface ProductModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-heading font-bold text-dark uppercase">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Corte Premium - {product.category === 'res' ? 'Carne de Res' : product.category === 'cerdo' ? 'Carne de Cerdo' : product.category === 'pollo' ? 'Carne de Pollo' : 'Producto Especial'}
          </DialogDescription>
        </DialogHeader>

        {/* Product image if available */}
        {product.image && (
          <div className="w-full aspect-video overflow-hidden rounded-lg mt-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Detailed description */}
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-heading font-semibold text-lg text-dark mb-2 uppercase">
              Características
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {product.detailedDescription || product.description}
            </p>
          </div>

          {/* Call to action */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              ¿Interesado en este producto? Contáctanos para obtener más información sobre precios y disponibilidad.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
