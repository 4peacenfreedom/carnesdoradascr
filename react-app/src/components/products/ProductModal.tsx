import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import type { Product } from '@/types'

interface ProductModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  if (!product) return null

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto: ${product.name}. Me gustaría obtener más información sobre precios y disponibilidad.`
    )
    window.open(`https://wa.me/50684445138?text=${message}`, '_blank')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white/80 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-heading font-bold text-dark uppercase">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Corte Premium - {product.category === 'res' ? 'Carne de Res' : product.category === 'cerdo' ? 'Carne de Cerdo' : product.category === 'pollo' ? 'Carne de Pollo' : 'Producto Especial'}
          </DialogDescription>
        </DialogHeader>

        {/* Detailed description */}
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-heading font-semibold text-lg text-dark mb-3 uppercase">
              Características
            </h3>
            <p className="text-gray-900 leading-relaxed text-base">
              {product.detailedDescription || product.description}
            </p>
          </div>

          {/* Call to action */}
          <div className="mt-6 pt-6 border-t border-gray-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-800 text-center md:text-left flex-1">
                ¿Interesado en este producto? Contáctanos para obtener más información sobre precios y disponibilidad.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white shrink-0"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
