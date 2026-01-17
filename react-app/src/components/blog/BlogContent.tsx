import { BlogContent as BlogContentType } from '@/types/blog'

interface BlogContentProps {
  content: BlogContentType[]
}

export default function BlogContent({ content }: BlogContentProps) {
  const renderContent = (item: BlogContentType, index: number) => {
    switch (item.type) {
      case 'heading':
        return (
          <h2
            key={index}
            className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mt-8 mb-4"
          >
            {item.content}
          </h2>
        )

      case 'paragraph':
        return (
          <p
            key={index}
            className="text-gray-700 leading-relaxed mb-6 text-lg"
          >
            {item.content}
          </p>
        )

      case 'image':
        return (
          <div key={index} className="my-8">
            <img
              src={item.content as string}
              alt={item.imageAlt || 'Blog image'}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {item.imageAlt && (
              <p className="text-sm text-gray-500 text-center mt-2 italic">
                {item.imageAlt}
              </p>
            )}
          </div>
        )

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6 ml-4">
            {(item.content as string[]).map((listItem, i) => (
              <li key={i} className="text-gray-700 leading-relaxed text-lg">
                {listItem}
              </li>
            ))}
          </ul>
        )

      case 'quote':
        return (
          <blockquote
            key={index}
            className="border-l-4 border-primary bg-amber-50 pl-6 pr-4 py-4 my-8 italic text-gray-800 text-lg"
          >
            {item.content}
          </blockquote>
        )

      default:
        return null
    }
  }

  return (
    <div className="prose prose-lg max-w-none">
      {content.map((item, index) => renderContent(item, index))}
    </div>
  )
}
