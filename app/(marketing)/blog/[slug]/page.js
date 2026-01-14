/**
 * Blog Detail Page
 * 
 * Design: Reading a travel diary, sitting quietly in a hostel corner
 * 
 * Structure:
 * - Small "← Back to stories" nav
 * - Title (large but soft), one-line intro, optional tag
 * - Feature image (medium height, rounded, centered)
 * - Content area (fixed readable width, comfortable line height)
 * - Soft closing block
 * - 2 related stories at end
 * 
 * NO: Author block, date, read time, social share, sticky sidebars, floating CTAs
 */

import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPosts,
} from '@/content/blog'
import {
  BlogHeader,
  BlogContent,
  BlogGrid,
} from '@/components/features/blog'
import Container from '@/components/ui/Container'

/**
 * Generate static paths for all blog posts
 */
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Story Not Found | Hidden Monkey Hostel',
    }
  }

  const url = `https://hiddenmonkey.com/blog/${post.slug}`
  const imageUrl = post.image
    ? `https://hiddenmonkey.com/images/blog/${post.slug}/${post.image}`
    : 'https://hiddenmonkey.com/og-image.jpg'

  return {
    title: `${post.title} | Hidden Monkey Hostel`,
    description: post.seoDescription || post.excerpt,
    keywords: post.tags || [],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
}

/**
 * Soft Closing Block
 * Feels optional, not promotional, with breathing space
 */
function ClosingBlock() {
  return (
    <div className="
      mt-16 md:mt-20 
      pt-10 md:pt-12
      border-t border-charcoal/10
    ">
      <p className="text-charcoal/50 text-base">
        <Link 
          href="/blog" 
          className="
            inline-flex items-center gap-2
            text-charcoal/60 hover:text-charcoal
            transition-colors duration-200
            group
          "
        >
          <span className="
            bg-[linear-gradient(#EEA727,#EEA727)] bg-no-repeat
            bg-[length:0%_1.5px] bg-[position:0_100%]
            transition-[background-size] duration-300 ease-out
            group-hover:bg-[length:100%_1.5px]
          ">
            Read another story
          </span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </p>
    </div>
  )
}

/**
 * Related Posts Section
 * Small cards, same design language, placed at end only
 * Visual breathing space with section marker
 */
function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null
  
  return (
    <div className="
      mt-18 md:mt-24 
      pt-12 md:pt-14
      border-t border-charcoal/10
    ">
      <div className="mb-8 md:mb-10">
        <h2 className="
          text-lg font-medium text-charcoal 
          flex items-center gap-2
        ">
          <span className="text-[#EEA727] opacity-70">•</span>
          More stories
        </h2>
      </div>
      <BlogGrid posts={posts.slice(0, 2)} layout="related" />
    </div>
  )
}

/**
 * Blog Post Detail Component
 */
async function BlogPostDetail({ post }) {
  const relatedPosts = await getRelatedPosts(post.slug, 2)

  return (
    <>
      {/* Post Header */}
      <BlogHeader post={post} />

      {/* Post Content - Reading experience */}
      <div className="mt-12 md:mt-14">
        <BlogContent content={post.content} />
      </div>

      {/* Soft Closing Block */}
      <ClosingBlock />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </>
  )
}

/**
 * Main Blog Detail Page
 */
export default async function BlogDetailPage({ params }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-sand-light">
      <article className="py-10 md:py-14">
        <Container className="max-w-4xl">
          {/* Back to Stories - Small, calm, accessible */}
          <Link
            href="/blog"
            className="
              inline-flex items-center gap-2 
              text-charcoal/50 hover:text-charcoal/70
              text-sm font-medium
              mb-10 md:mb-12
              transition-colors duration-200
              group
            "
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>Back to stories</span>
          </Link>

          <BlogPostDetail post={post} />
        </Container>
      </article>
    </main>
  )
}
