'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BLOG_IMAGES, FALLBACK } from '@/content/images'

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="card-hover flex flex-col h-full">
        {/* Image */}
        <div className="relative h-[200px] overflow-hidden bg-surface">
          {post.image ? (
            <Image
              src={BLOG_IMAGES[post.slug] || FALLBACK.room}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 bg-surface-sand flex items-center justify-center">
              <span className="text-4xl opacity-20" aria-hidden="true">📖</span>
            </div>
          )}

          {/* Category badge */}
          {post.category && (
            <span className="absolute top-3 left-3 px-2.5 py-1.5 rounded-lg bg-white/95 text-teal text-[11px] font-bold tracking-[0.1em] uppercase">
              {post.category.replace('-', ' ')}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3 text-[12px] font-bold uppercase tracking-[0.14em]">
            <span className="text-ink-4">{post.publishedAt}</span>
            <span className="w-1 h-1 rounded-full bg-line" />
            <span className="text-teal">{post.readingTime} read</span>
          </div>

          <h3 className="display font-bold text-[24px] leading-[0.98] text-ink mb-2.5 group-hover:text-teal transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-[14px] leading-relaxed text-ink-3 mb-5 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          {/* Footer — author & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-line">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-[11px] font-bold text-ink">
                {post.author ? post.author.charAt(0) : 'M'}
              </div>
              <span className="text-[12px] font-bold text-ink">{post.author}</span>
            </div>
            <span className="text-teal text-[12px] font-bold uppercase tracking-[0.14em] flex items-center gap-1 group-hover:gap-2 transition-all">
              Read
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
