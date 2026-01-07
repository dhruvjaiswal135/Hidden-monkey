'use client'

import Image from 'next/image'
import Link from 'next/link'

/**
 * BlogCard Component
 * Individual blog post card for grid displays
 * 
 * Props:
 * - post: { id, slug, title, category, image, excerpt?, readTime? }
 * - variant: 'default' | 'compact' | 'featured'
 */

export default function BlogCard({ post, variant = 'default' }) {
  if (!post) return null

  const href = `/blog/${post.slug}`

  if (variant === 'compact') {
    return (
      <Link href={href} className="group cursor-pointer">
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
    )
  }

  // Default variant
  return (
    <Link href={href} className="group cursor-pointer block">
      <article className="h-full flex flex-col">
        {/* Image */}
        <div className="relative h-[220px] md:h-[260px] rounded-[18px] overflow-hidden mb-4 border border-[#E6E4DF]">
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
          <h3 className="text-[#1E1F1C] text-[18px] md:text-[20px] font-semibold leading-snug mb-3 group-hover:text-[#EEA727] transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt (if available) */}
          {post.excerpt && (
            <p className="text-[#5E625A] text-[14px] leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-4 mt-auto text-[12px] text-[#5E625A]">
            {post.readTime && <span>{post.readTime} min read</span>}
            {post.author && <span>by {post.author}</span>}
          </div>
        </div>
      </article>
    </Link>
  )
}
