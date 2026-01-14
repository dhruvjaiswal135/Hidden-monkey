/**
 * Blog Listing Page
 * 
 * Design: "Stories from the Monkey House"
 * - Calm, compact header (not hero-style)
 * - Masonry/staggered grid with varying card heights
 * - Light pill filters (optional)
 * - "Load more" pagination (no page numbers)
 * 
 * Cards feel like journal entries, not marketing.
 */

import { Suspense } from 'react'
import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/content/blog'
import { BlogGrid } from '@/components/features/blog'
import Container from '@/components/ui/Container'

// SEO metadata
export const metadata = {
  title: 'Stories from the Monkey House | Hidden Monkey Hostel',
  description:
    'Real travel stories from backpackers. Tales, tips, and moments shared from the road.',
  openGraph: {
    title: 'Stories from the Monkey House | Hidden Monkey Hostel',
    description:
      'Real travel stories from backpackers. Tales, tips, and moments shared from the road.',
    type: 'website',
    url: 'https://hiddenmonkey.com/blog',
  },
}

/**
 * Blog Posts Component with Server-Side Loading
 */
async function BlogPostsList({ selectedCategory = null }) {
  const posts = await getAllPosts()

  // Filter by category if selected
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-charcoal/60 mb-4">
          No stories in this category yet.
        </p>
        <Link
          href="/blog"
          className="text-charcoal/70 hover:text-charcoal font-medium transition-colors"
        >
          ← View all stories
        </Link>
      </div>
    )
  }

  return (
    <div>
      <BlogGrid posts={filteredPosts} layout="masonry" />
      
      {/* Load More - simple, calm */}
      {filteredPosts.length > 9 && (
        <div className="mt-14 text-center">
          <button 
            className="
              px-6 py-3 
              text-charcoal/70 hover:text-charcoal
              text-sm font-medium
              border border-charcoal/20 hover:border-charcoal/40
              rounded-full
              transition-all duration-200
            "
          >
            Load more stories
          </button>
        </div>
      )}
    </div>
  )
}

/**
 * Category Filter Component - Light pill filters
 */
async function CategoryFilter({ selectedCategory = null }) {
  const categories = await getAllCategories()

  return (
    <div className="mb-10 md:mb-12">
      <div className="flex flex-wrap gap-2">
        {/* All Posts Pill */}
        <Link
          href="/blog"
          className={`
            px-4 py-2 rounded-full text-sm font-medium
            transition-all duration-200
            ${!selectedCategory
              ? 'bg-[#EEA727] text-white'
              : 'bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10 hover:text-charcoal'
            }
          `}
        >
          All
        </Link>

        {/* Category Pills */}
        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={`
              px-4 py-2 rounded-full text-sm font-medium capitalize
              transition-all duration-200
              ${selectedCategory === category
                ? 'bg-[#EEA727] text-white'
                : 'bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10 hover:text-charcoal'
              }
            `}
          >
            {category.replace('-', ' ')}
          </Link>
        ))}
      </div>
    </div>
  )
}

/**
 * Main Blog Page Component
 */
export default async function BlogPage({ searchParams }) {
  const selectedCategory = searchParams?.category || null

  return (
    <main className="min-h-screen bg-sand-light">
      <Container className="py-12 md:py-16">
        {/* Page Header - Calm, compact, not hero-style */}
        <header className="mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-charcoal mb-2">
            Stories from the Monkey House
          </h1>
          <p className="text-charcoal/60 text-lg">
            Tales and moments from travelers who stayed with us.
          </p>
        </header>

        {/* Category Filter - Light pills */}
        <Suspense fallback={<div className="h-10 bg-charcoal/5 rounded-lg w-64 mb-10" />}>
          <CategoryFilter selectedCategory={selectedCategory} />
        </Suspense>

        {/* Blog Posts - Masonry Grid */}
        <Suspense
          fallback={
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-sand-cream rounded-xl h-72 animate-pulse break-inside-avoid"
                />
              ))}
            </div>
          }
        >
          <BlogPostsList selectedCategory={selectedCategory} />
        </Suspense>
      </Container>
    </main>
  )
}
