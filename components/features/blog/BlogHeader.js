/**
 * BlogHeader Component
 * Header section for blog detail pages
 * 
 * Props:
 * - title: string
 * - intro: string (optional)
 * - category: string
 * - author: string (optional)
 * - date: string (optional)
 * - readTime: number (optional)
 */

export default function BlogHeader({ 
  title, 
  intro, 
  category, 
  author, 
  date, 
  readTime 
}) {
  return (
    <header className="mb-8">
      {/* Category Tag */}
      {category && (
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-[#EEA727]/10 text-[#EEA727] font-medium">
            {category}
          </span>
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1F1C] mb-5 leading-tight">
        {title}
      </h1>

      {/* Intro/Excerpt */}
      {intro && (
        <p className="text-lg md:text-xl text-[#5E625A] font-light leading-relaxed max-w-2xl">
          {intro}
        </p>
      )}

      {/* Meta Info */}
      {(author || date || readTime) && (
        <div className="flex flex-wrap items-center gap-4 mt-6 text-[14px] text-[#5E625A]">
          {author && <span>by {author}</span>}
          {date && (
            <span>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          )}
          {readTime && <span>{readTime} min read</span>}
        </div>
      )}
    </header>
  )
}
