import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogHero from '@/components/blog/BlogHero'
import BlogContent from '@/components/blog/BlogContent'
import ShareButton from '@/components/blog/ShareButton'
import FacebookComments from '@/components/blog/FacebookComments'
import { blogPosts } from '@/data/blogs'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.slug === slug)

  // If post not found, redirect to 404
  if (!post) {
    return <Navigate to="/404" replace />
  }

  // Construct full URL for sharing
  const fullUrl = `${window.location.origin}/blog/${post.slug}`

  return (
    <>
      <Helmet>
        <title>{post.title} | Carnes Doradas de Costa Rica</title>
        <meta name="description" content={post.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={`${window.location.origin}${post.heroImage}`} />
        <meta property="og:url" content={fullUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={`${window.location.origin}${post.heroImage}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Banner */}
          <BlogHero
            title={post.title}
            heroImage={post.heroImage}
            heroImageAlt={post.heroImageAlt}
            author={post.author}
            publishDate={post.publishDate}
            readTime={post.readTime}
          />

          {/* Blog Content */}
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Main Content */}
            <BlogContent content={post.content} />

            {/* Share Button */}
            <ShareButton title={post.title} url={fullUrl} />

            {/* Facebook Comments */}
            <FacebookComments url={fullUrl} />
          </article>
        </main>

        <Footer />
      </div>
    </>
  )
}
