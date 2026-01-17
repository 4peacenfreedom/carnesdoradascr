import { useEffect } from 'react'
import { MessageSquare } from 'lucide-react'

interface FacebookCommentsProps {
  url: string
  numPosts?: number
}

export default function FacebookComments({ url, numPosts = 10 }: FacebookCommentsProps) {
  useEffect(() => {
    // Initialize Facebook SDK if not already loaded
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }, [url])

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-heading font-bold text-gray-900">
          Comentarios
        </h3>
      </div>

      {/* Facebook Comments Plugin */}
      <div className="bg-white rounded-lg">
        <div
          className="fb-comments"
          data-href={url}
          data-width="100%"
          data-numposts={numPosts}
          data-order-by="reverse_time"
          data-colorscheme="light"
        />
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Inicia sesión con Facebook para dejar un comentario
      </p>
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void
      }
    }
  }
}
