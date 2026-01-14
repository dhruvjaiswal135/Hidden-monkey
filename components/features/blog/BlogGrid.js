'use client'

import { useState } from 'react'
import BlogCard from './BlogCard'
import Link from 'next/link'

/**
 * BlogGrid Component
 * 
 * Sophisticated grid layout inspired by professional blog templates:
 * - Header with title, description, search
 * - Category filter chips
 * - Complex grid: 2 full-width cards → 3-card row (1 full + 2 stacked + 1 full)
 * - Professional metadata (author avatars, date, category tags)
 * - Warm Hidden Monkey aesthetic maintained throughout
 */
export default function BlogGrid({
  posts,
  layout = 'masonry', // 'masonry' | 'horizontal' | 'related' | 'featured'
  showFilters = true,
  categories = [],
}) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')


  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-charcoal/60 text-lg">No stories yet. Check back soon.</p>
      </div>
    )
  }

  // Filter posts by category and search
  const filteredPosts = posts.filter(post => {
    const categoryMatch = activeCategory === 'all' || post.category === activeCategory
    const searchMatch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.publishedAt) - new Date(a.publishedAt)
  )

  // Horizontal layout for homepage (2-3 cards)
  if (layout === 'horizontal') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sortedPosts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} post={post} variant="standard" />
        ))}
      </div>
    )
  }

  // Related posts layout (2 compact cards)
  if (layout === 'related') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sortedPosts.slice(0, 2).map((post) => (
          <BlogCard key={post.slug} post={post} variant="compact" />
        ))}
      </div>
    )
  }

  // Featured layout - with hero post and grid
  if (layout === 'featured') {
    const [featuredPost, ...gridPosts] = sortedPosts

    return (
      <div className="space-y-12 md:space-y-16">
        {featuredPost && (
          <BlogCard post={featuredPost} variant="featured" />
        )}

        {showFilters && (
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
            {categories.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === 'all'
                      ? 'bg-[#EEA727] text-white'
                      : 'bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10'
                  }`}
                >
                  View all
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap capitalize transition-all ${
                      activeCategory === cat
                        ? 'bg-[#EEA727] text-white'
                        : 'bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10'
                    }`}
                  >
                    {cat.replace('-', ' ')}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gridPosts.map((post) => (
            <BlogCard key={post.slug} post={post} variant="standard" />
          ))}
        </div>
      </div>
    )
  }

  // Default masonry layout - Complex grid inspired by professional templates
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header Section */}
      <div className="space-y-4 md:space-y-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-2">Blog</h1>
          <p className="text-lg text-charcoal/60">Stay in the loop with the latest about our hostel</p>
        </div>

        {/* Search & Filters */}
        <div className="space-y-6">
          {/* Mobile Search Bar */}
          <div className="md:hidden flex gap-2">
            <input
              type="text"
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-charcoal/10 bg-white text-sm focus:outline-none focus:border-[#EEA727] transition-colors"
            />
            <button className="px-4 py-2 text-charcoal/60 hover:text-charcoal transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

          {/* Filters & Desktop Search */}
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between">
            {/* Category Chips */}
            {categories.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 flex-wrap md:flex-nowrap">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === 'all'
                      ? 'bg-[#EEA727] text-white'
                      : 'bg-white text-charcoal border border-charcoal/20 hover:bg-charcoal/5'
                  }`}
                >
                  All categories
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap capitalize transition-all ${
                      activeCategory === cat
                        ? 'bg-[#EEA727] text-white'
                        : 'bg-white text-charcoal hover:bg-charcoal/5'
                    }`}
                  >
                    {cat.replace('-', ' ')}
                  </button>
                ))}
              </div>
            )}

            {/* Desktop Search & RSS */}
            <div className="hidden md:flex gap-2 items-center">
              <input
                type="text"
                placeholder="Search…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg border border-charcoal/10 bg-white text-sm w-64 focus:outline-none focus:border-[#EEA727] transition-colors"
              />
              <button className="px-3 py-2 text-charcoal/60 hover:text-charcoal transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Complex Grid Layout */}
      <div className="grid grid-cols-12 gap-6 md:gap-8">
        {/* First two cards - Full width */}
        {sortedPosts.slice(0, 2).map((post) => (
          <div key={post.slug} className="col-span-12 md:col-span-6">
            <BlogCard post={post} variant="standard" />
          </div>
        ))}

        {/* Third card - 4 columns, full height */}
        {sortedPosts[2] && (
          <div className="col-span-12 md:col-span-4">
            <BlogCard post={sortedPosts[2]} variant="standard" />
          </div>
        )}

        {/* Middle section - 2 cards stacked (text-heavy, no images) */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
          {sortedPosts.slice(3, 5).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-3 p-5 bg-white rounded-2xl border border-charcoal/5 hover:border-charcoal/10 transition-all hover:shadow-lg group"
            >
              {/* Tag */}
              <span className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#EEA727]">
                {post.category.replace('-', ' ')}
              </span>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-charcoal leading-snug line-clamp-2 group-hover:text-[#EEA727] transition-colors">
                {post.title}
              </h3>

              {/* Description */}
              {post.excerpt && (
                <p className="text-sm text-charcoal/60 line-clamp-2 flex-grow">
                  {post.excerpt}
                </p>
              )}

              {/* Meta - Author & Date */}
              <div className="flex items-center gap-3 pt-3 border-t border-charcoal/10">
                {post.author && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EEA727] to-[#D89714] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                )}
                <span className="text-xs font-medium text-charcoal/60">
                  {post.author}
                </span>
                {post.publishedAt && (
                  <span className="text-xs text-charcoal/50 ml-auto">
                    {post.publishedAt}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Fifth card - 4 columns, full height */}
        {sortedPosts[5] && (
          <div className="col-span-12 md:col-span-4">
            <BlogCard post={sortedPosts[5]} variant="standard" />
          </div>
        )}

        {/* Remaining cards - Standard 3-column grid */}
        {sortedPosts.slice(6).length > 0 && (
          <>
            {sortedPosts.slice(6).map((post) => (
              <div key={post.slug} className="col-span-12 md:col-span-4">
                <BlogCard post={post} variant="standard" />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
