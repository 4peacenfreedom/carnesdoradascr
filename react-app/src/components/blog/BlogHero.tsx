import { Calendar, Clock, User } from 'lucide-react'

interface BlogHeroProps {
  title: string
  heroImage: string
  heroImageAlt: string
  author: {
    name: string
    role: string
  }
  publishDate: string
  readTime: string
}

export default function BlogHero({
  title,
  heroImage,
  heroImageAlt,
  author,
  publishDate,
  readTime,
}: BlogHeroProps) {
  // Format date
  const formattedDate = new Date(publishDate).toLocaleDateString('es-CR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Title overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 max-w-4xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta information */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600">
            {/* Author */}
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <div>
                <span className="font-semibold text-gray-900">{author.name}</span>
                <span className="text-gray-500 ml-1">· {author.role}</span>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{formattedDate}</span>
            </div>

            {/* Read time */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
