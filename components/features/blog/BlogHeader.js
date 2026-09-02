'use client'

/**
 * BlogHeader — editorial article header
 * Category chip, display title, excerpt, author row, and full-width hero image
 */
import Image from 'next/image'
import { BLOG_IMAGES, FALLBACK } from '@/content/images'

export default function BlogHeader({ post }) {
  return (
    <header className="mb-10 md:mb-14">
      {/* Meta row: category + reading time + date */}
      <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-5">
        {post.category && (
          <span className="chip uppercase tracking-[0.1em] font-bold text-teal">
            {post.category.replace('-', ' ')}
          </span>
        )}
        {post.readingTime && (
          <>
            <span className="w-1 h-1 rounded-full bg-line" />
            <span className="text-[12px] font-bold text-ink-4 uppercase tracking-[0.14em]">{post.readingTime} read</span>
          </>
        )}
        {post.publishedAt && (
          <>
            <span className="w-1 h-1 rounded-full bg-line" />
            <span className="text-[13px] text-ink-4">{post.publishedAt}</span>
          </>
        )}
      </div>

      {/* Title */}
      <h1 className="display text-[clamp(36px,5vw,64px)] leading-[0.95] text-ink mb-4 max-w-3xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-[17px] md:text-[18px] text-ink-3 leading-relaxed max-w-2xl mb-8">
          {post.excerpt}
        </p>
      )}

      {/* Author row */}
      {post.author && (
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-line">
          <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-[13px] font-bold text-ink">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-[14px] font-semibold text-ink">{post.author}</p>
            <p className="text-[12px] text-ink-4">Hidden Monkey Team</p>
          </div>
        </div>
      )}

      {/* Featured image — full-width rounded */}
      {post.image && (
        <div className="relative w-full h-[240px] md:h-[340px] lg:h-[420px] rounded-hero overflow-hidden bg-surface border border-line">
          <Image
            src={BLOG_IMAGES[post.slug] || FALLBACK.room}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
            unoptimized
          />
        </div>
      )}
    </header>
  )
}
