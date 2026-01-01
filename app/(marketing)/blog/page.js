'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

/**
 * Blog Listing Page
 * Masonry layout with filters and story-first design
 */
export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredId, setHoveredId] = useState(null)
  const [displayCount, setDisplayCount] = useState(12)

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'varanasi', label: 'Varanasi' },
    { id: 'darjeeling', label: 'Darjeeling' },
    { id: 'tips', label: 'Tips' },
    { id: 'stories', label: 'Stories' }
  ]

  const allPosts = [
    {
      id: 1,
      title: 'The Secret Trails Around Rishikesh Nobody Talks About',
      category: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
      slug: 'secret-trails-rishikesh',
      filter: 'varanasi',
      height: 'h-[280px]'
    },
    {
      id: 2,
      title: 'How to Eat Like a Local Without Getting Lost in Translation',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1504674900769-7a6f7e1b912e?w=600&auto=format&fit=crop&q=80',
      slug: 'eating-like-local',
      filter: 'tips',
      height: 'h-[240px]'
    },
    {
      id: 3,
      title: 'Why Solo Travel Changed Everything I Thought I Knew',
      category: 'Stories',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80',
      slug: 'solo-travel-lessons',
      filter: 'stories',
      height: 'h-[320px]'
    },
    {
      id: 4,
      title: 'Morning Chai at 5000 Feet: A Darjeeling Sunrise Story',
      category: 'Darjeeling',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&auto=format&fit=crop&q=80',
      slug: 'darjeeling-sunrise',
      filter: 'darjeeling',
      height: 'h-[260px]'
    },
    {
      id: 5,
      title: 'The Best Ghat-Side Conversations We\'ve Overheard',
      category: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=600&auto=format&fit=crop&q=80',
      slug: 'ghat-conversations',
      filter: 'varanasi',
      height: 'h-[240px]'
    },
    {
      id: 6,
      title: 'Budget Hacks That Actually Work (From Our Guests)',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&auto=format&fit=crop&q=80',
      slug: 'budget-hacks',
      filter: 'tips',
      height: 'h-[300px]'
    },
    {
      id: 7,
      title: 'When the Mountains Taught Me to Slow Down',
      category: 'Stories',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
      slug: 'mountains-slowdown',
      filter: 'stories',
      height: 'h-[280px]'
    },
    {
      id: 8,
      title: 'The Hidden Tea Gardens of Darjeeling: A Visitor\'s Guide',
      category: 'Darjeeling',
      image: 'https://images.unsplash.com/photo-1576092160550-2173dba999ef?w=600&auto=format&fit=crop&q=80',
      slug: 'tea-gardens-guide',
      filter: 'darjeeling',
      height: 'h-[320px]'
    },
    {
      id: 9,
      title: 'What Happens When Strangers Become Family',
      category: 'Stories',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
      slug: 'strangers-family',
      filter: 'stories',
      height: 'h-[240px]'
    },
    {
      id: 10,
      title: 'Photography Tips: Capturing the Soul of a Place',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&auto=format&fit=crop&q=80',
      slug: 'photography-tips',
      filter: 'tips',
      height: 'h-[280px]'
    },
    {
      id: 11,
      title: 'The Spiritual Journey: Finding Yourself in Varanasi',
      category: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1548013154-72923a115988?w=600&auto=format&fit=crop&q=80',
      slug: 'spiritual-varanasi',
      filter: 'varanasi',
      height: 'h-[300px]'
    },
    {
      id: 12,
      title: 'The Unexpected Friendships That Last Forever',
      category: 'Stories',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
      slug: 'lasting-friendships',
      filter: 'stories',
      height: 'h-[240px]'
    }
  ]

  const filteredPosts = activeFilter === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.filter === activeFilter)

  const displayedPosts = filteredPosts.slice(0, displayCount)
  return (
    <main className="bg-white">
      
      {/* Header */}
      <section className="py-8 md:py-10 border-b border-[#E6E4DF]">
        <Container className="max-w-[1400px]">
          <h1 className="text-[#1E1F1C] text-[32px] md:text-[42px] font-semibold mb-2">
            Stories from the Monkey House
          </h1>
          <p className="text-[#5E625A] text-[14px] md:text-[15px] max-w-[600px]">
            Travel stories, tips, and moments shared by our community.
          </p>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-6 md:py-7 border-b border-[#E6E4DF] sticky top-0 bg-white z-10">
        <Container className="max-w-[1400px]">
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#F05A28] text-white'
                    : 'bg-[#FAFAF9] text-[#5E625A] hover:bg-[#F0F0F0]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Grid - Masonry Layout */}
      <section className="py-10 md:py-12">
        <Container className="max-w-[1400px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {displayedPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card Container */}
                <div className={`h-full flex flex-col bg-white rounded-[16px] overflow-hidden border border-[#E6E4DF] transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
                  
                  {/* Image */}
                  <div className={`relative ${post.height} overflow-hidden`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                      unoptimized
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5 md:p-6">
                    
                    {/* Category */}
                    <p className="text-[#5E625A] text-[11px] font-medium uppercase tracking-wide mb-2.5">
                      {post.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-[#1E1F1C] text-[15px] md:text-[16px] font-semibold leading-snug mb-3 group-hover:text-[#F05A28] transition-colors duration-300 flex-grow">
                      {post.title}
                    </h3>

                    {/* Hover Indicator */}
                    <div className="text-[#F05A28] text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      Read story
                      <span className="text-[11px] group-hover:translate-x-0.5 transition-transform duration-300">
                        →
                      </span>
                    </div>

                  </div>

                </div>
              </a>
            ))}
          </div>

          {/* Load More Button */}
          {displayedPosts.length < filteredPosts.length && (
            <div className="flex justify-center mt-10 md:mt-12">
              <button
                onClick={() => setDisplayCount(displayCount + 6)}
                className="px-6 md:px-8 py-3 md:py-3 bg-white border border-[#E6E4DF] text-[#1E1F1C] text-[13px] md:text-[14px] font-medium rounded-[12px] hover:bg-[#FAFAF9] transition-colors duration-300"
              >
                Load more stories
              </button>
            </div>
          )}

          {/* No Results Message */}
          {displayedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#5E625A] text-[14px]">
                No stories found for this filter.
              </p>
            </div>
          )}

        </Container>
      </section>

    </main>
  )
}
