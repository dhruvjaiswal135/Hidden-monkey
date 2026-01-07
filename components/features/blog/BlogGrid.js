'use client'

import BlogCard from './BlogCard'

/**
 * BlogGrid Component
 * Responsive grid layout for blog posts
 * 
 * Props:
 * - posts: Array of post objects
 * - columns: 2 | 3 | 4 (default: 3)
 * - variant: 'default' | 'compact'
 */

export default function BlogGrid({ posts, columns = 3, variant = 'default' }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12 text-[#5E625A]">
        No posts found
      </div>
    )
  }

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} variant={variant} />
      ))}
    </div>
  )
}
