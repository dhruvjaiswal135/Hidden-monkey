'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import BlogCard from './BlogCard'

export default function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="card p-10 md:p-16 text-center">
        <p className="display font-bold text-[26px] mb-1">No stories found</p>
        <p className="text-[14px] text-ink-3">Check back later for more tales from the road.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

/**
 * Client-side category browser for the blog listing page.
 * Reads ?category= via useSearchParams (must be rendered inside a Suspense
 * boundary) so the /blog route itself can stay statically prerendered.
 */
export function BlogListingBrowser({ posts, categories }) {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('category')

  const filtered = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts

  return (
    <>
      <div className="mb-8 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-2 min-w-max pb-1">
          <Link
            href="/blog"
            className={`${!selectedCategory ? 'pill-on hover:text-white' : 'pill-off hover:text-teal'} inline-flex items-center whitespace-nowrap`}
          >
            All stories
          </Link>

          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className={`${selectedCategory === category ? 'pill-on hover:text-white' : 'pill-off hover:text-teal'} inline-flex items-center whitespace-nowrap capitalize`}
            >
              {category.replace('-', ' ')}
            </Link>
          ))}

          <span className="ml-auto pl-3 text-[13px] text-ink-3 font-semibold whitespace-nowrap hidden sm:block">
            {filtered.length} stor{filtered.length === 1 ? 'y' : 'ies'}
          </span>
        </div>
      </div>

      <BlogGrid posts={filtered} />
    </>
  )
}
