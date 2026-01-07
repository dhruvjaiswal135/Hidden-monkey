'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { getPostsForHomepage } from '@/components/features/blog'

/**
 * Blog Section
 * Features curated stories and travel insights
 * Minimal, story-first layout
 * 
 * Data is now centralized in content/blog/posts.js
 */

export default function Blog() {
  const [hoveredId, setHoveredId] = useState(null)

  // Get posts from centralized data
  const blogPosts = getPostsForHomepage(3)

  return (
    <section className="relative py-6 md:py-10 bg-white" aria-label="Blog Stories">
      <Container className="max-w-[1400px]">
        {/* Header with CTA */}
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-[#1E1F1C] text-[28px] md:text-[36px] font-semibold mb-2">
              Stories from the road
            </h2>
            <p className="text-[#5E625A] text-[14px] md:text-[15px]">
              Thoughts, tips, and moments from our community.
            </p>
          </div>
          <a
            href="/blog"
            className="text-[#EEA727] text-[12px] md:text-[13px] font-medium whitespace-nowrap hover:gap-2 transition-all duration-300 flex items-center gap-1"
          >
            Read all →
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div className="h-full flex flex-col">
                
                {/* Image */}
                <div className="relative h-[220px] md:h-[240px] rounded-[18px] overflow-hidden mb-4 border border-[#E6E4DF]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  
                  {/* Category */}
                  <p className="text-[#5E625A] text-[12px] font-medium uppercase tracking-wide mb-2">
                    {post.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-[#1E1F1C] text-[16px] md:text-[17px] font-semibold leading-snug mb-3 group-hover:text-[#EEA727] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Hover Indicator */}
                  <div className="text-[#EEA727] text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 mt-auto">
                    Read story
                    <span className="text-[12px] group-hover:translate-x-0.5 transition-transform duration-300">
                      →
                    </span>
                  </div>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  )
}
