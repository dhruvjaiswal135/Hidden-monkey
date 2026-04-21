'use client'

/**
 * BlogHeader — Premium editorial header
 * Category pill, title, excerpt, metadata row, and full-width hero image
 */
import Image from 'next/image'

export default function BlogHeader({ post }) {
  return (
    <header className="mb-10 md:mb-14">
      {/* Meta row: category + reading time */}
      <div className="flex items-center gap-3 mb-5">
        {post.category && (
          <span className="px-2.5 py-1 bg-[#128790]/10 text-[#128790] text-[9px] font-bold uppercase tracking-widest rounded-md">
            {post.category.replace('-', ' ')}
          </span>
        )}
        {post.readingTime && (
          <>
            <span className="w-1 h-1 rounded-full bg-[#E6E4DF]" />
            <span className="text-[10px] font-bold text-[#9A948C] uppercase tracking-widest">{post.readingTime} read</span>
          </>
        )}
        {post.publishedAt && (
          <>
            <span className="w-1 h-1 rounded-full bg-[#E6E4DF]" />
            <span className="text-[10px] font-medium text-[#9A948C]">{post.publishedAt}</span>
          </>
        )}
      </div>

      {/* Title */}
      <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1E1F1C] leading-[1.08] tracking-[-0.025em] mb-4 max-w-3xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-[16px] md:text-[18px] text-[#6B665E] font-light leading-relaxed max-w-2xl mb-8">
          {post.excerpt}
        </p>
      )}

      {/* Author row */}
      {post.author && (
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#E6E4DF]">
          <div className="w-9 h-9 rounded-full bg-[#FBB11A] flex items-center justify-center text-[12px] font-bold text-white shadow-sm">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#1E1F1C]">{post.author}</p>
            <p className="text-[10px] text-[#9A948C]">Hidden Monkey Team</p>
          </div>
        </div>
      )}

      {/* Featured Image — full-width rounded */}
      {post.image && (
        <div className="relative w-full h-[240px] md:h-[340px] lg:h-[420px] rounded-[20px] overflow-hidden bg-[#FBFBF9] border border-[#E6E4DF]">
          <Image
            src={`/images/blog/${post.slug}/${post.image}`}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      )}
    </header>
  )
}
