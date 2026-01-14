'use client'

import Image from 'next/image'
import Link from 'next/link'

/**
 * BlogCard Component
 * 
 * Design: Clean, professional blog card with metadata
 * - Category badge on image
 * - Large readable title
 * - Short description
 * - Author avatar, name, and date at bottom
 * - Maintains Hidden Monkey's warm community vibe
 */
export default function BlogCard({
  post,
  variant = 'standard', // 'featured' | 'standard' | 'compact'
}) {
  // Featured variant - full overlay style
  if (variant === 'featured') {
    return (
      <Link href={`/blog/${post.slug}`}>
        <article className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
          {/* Background Image */}
          {post.image && (
            <Image
              src={`/images/blog/${post.slug}/${post.image}`}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          )}

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

          {/* Content Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col gap-4">
            {/* Title & Description */}
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight mb-2">
                  {post.title}
                </h2>
                <p className="text-sm md:text-base text-white/90 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-4 border-t border-white/20">
              {/* Author */}
              {post.author && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">Written by</p>
                  <p className="text-sm font-semibold text-white">{post.author}</p>
                </div>
              )}

              {/* Date */}
              {post.publishedAt && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">Published</p>
                  <p className="text-sm font-semibold text-white">{post.publishedAt}</p>
                </div>
              )}

              {/* Category & Tags */}
              {post.category && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">Category</p>
                  <span className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium text-white border border-white/30 bg-white/10">
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </article>
      </Link>
    )
  }

  // Compact variant - for related posts
  if (variant === 'compact') {
    return (
      <Link href={`/blog/${post.slug}`} className="block group">
        <article className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md border border-charcoal/5">
          {/* Image */}
          {post.image && (
            <div className="relative h-40 overflow-hidden">
              <Image
                src={`/images/blog/${post.slug}/${post.image}`}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {post.category && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-[#EEA727]">
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-4">
            <h3 className="text-base font-semibold text-charcoal line-clamp-2 mb-2">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="text-sm text-charcoal/60 line-clamp-1 mb-3">{post.excerpt}</p>
            )}
            {post.author && (
              <div className="flex items-center gap-2 pt-2 border-t border-charcoal/5">
                <div className="w-6 h-6 rounded-full bg-[#EEA727] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                  {post.author.charAt(0)}
                </div>
                <span className="text-xs font-medium text-charcoal/60">{post.author}</span>
              </div>
            )}
          </div>
        </article>
      </Link>
    )
  }

  // Standard variant - main grid cards (matching the reference design)
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="flex flex-col gap-0 h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-charcoal/5 hover:border-charcoal/10">
        {/* Image Container with Category Badge */}
        <div className="relative overflow-hidden bg-charcoal/5">
          {post.image && (
            <div className="relative h-56 md:h-64 overflow-hidden">
              <Image
                src={`/images/blog/${post.slug}/${post.image}`}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>
          )}
          
          {/* Category Badge - Positioned on Image */}
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#EEA727] shadow-md">
                {post.category.replace('-', ' ')}
              </span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-4 p-5 md:p-6 flex-1">
          {/* Title */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-charcoal leading-snug line-clamp-2 mb-2 group-hover:text-[#EEA727] transition-colors">
              {post.title}
            </h3>
            
            {/* Description */}
            {post.excerpt && (
              <p className="text-sm md:text-base text-charcoal/60 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Author Info - At Bottom */}
          {post.author && (
            <div className="flex items-center gap-3 pt-4 border-t border-charcoal/10">
              {/* Author Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EEA727] to-[#D89714] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">
                  {post.author.charAt(0)}
                </span>
              </div>
              
              {/* Author Details */}
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-semibold text-charcoal">{post.author}</p>
                {post.publishedAt && (
                  <p className="text-xs text-charcoal/50">{post.publishedAt}</p>
                )}
              </div>

              {/* Reading Time Badge */}
              {post.readingTime && (
                <span className="text-xs text-charcoal/50 whitespace-nowrap">
                  {post.readingTime}
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
