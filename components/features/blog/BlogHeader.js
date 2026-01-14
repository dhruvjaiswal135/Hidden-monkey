'use client'

/**
 * BlogHeader Component
 * 
 * Design: Reading a travel diary
 * - Title (large but soft)
 * - One-line intro text
 * - Optional destination tag
 * 
 * NO: Author block, date, read time, social share clutter
 * 
 * Feature image: medium height, rounded corners, centered
 */
import Image from 'next/image'

export default function BlogHeader({ post }) {
  return (
    <header className="mb-12 md:mb-16">
      {/* Optional category tag - pill style with accent color */}
      {post.category && (
        <div className="mb-5">
          <span className="
            inline-block 
            px-3.5 py-1.5
            text-xs font-medium tracking-wide uppercase
            text-white bg-[#EEA727]
            rounded-full
            opacity-85
          ">
            {post.category.replace('-', ' ')}
          </span>
        </div>
      )}

      {/* Title - Large but soft, friendly typography */}
      <h1 className="
        text-3xl md:text-4xl lg:text-5xl 
        font-semibold text-charcoal 
        leading-tight mb-6
        max-w-3xl
        tracking-tight
      ">
        {post.title}
      </h1>

      {/* One-line intro text - breathing space before image */}
      {post.excerpt && (
        <p className="
          text-lg md:text-xl 
          text-charcoal/60 
          leading-relaxed max-w-2xl mb-10
          font-medium
        ">
          {post.excerpt}
        </p>
      )}

      {/* Featured Image - Medium height, rounded, centered with subtle shadow */}
      {post.image && (
        <div className="
          relative w-full 
          h-64 md:h-80 lg:h-96 
          rounded-2xl overflow-hidden
          bg-sand-cream
          shadow-soft
          border border-charcoal/5
        ">
          <Image
            src={`/images/blog/${post.slug}/${post.image}`}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </header>
  )
}
