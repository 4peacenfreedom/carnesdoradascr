import { Facebook, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ShareButtonProps {
  title: string
  url: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`
    window.open(facebookUrl, '_blank', 'width=600,height=400')
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 py-8 border-y border-gray-200">
      <p className="text-gray-700 font-semibold">Compartir este artículo:</p>
      <div className="flex gap-3">
        {/* Facebook Share */}
        <Button
          onClick={handleFacebookShare}
          className="bg-[#1877F2] hover:bg-[#166FE5] text-white"
        >
          <Facebook className="w-4 h-4 mr-2" />
          Compartir en Facebook
        </Button>

        {/* Native Share (mobile) */}
        {'share' in navigator && (
          <Button
            onClick={handleNativeShare}
            variant="outline"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Compartir
          </Button>
        )}
      </div>
    </div>
  )
}
