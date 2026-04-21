'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-[24px] overflow-hidden border border-[#E6E4DF] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full bg-[#FBFBF9]/50">
        {/* Image Container - Compact & Cute */}
        <div className="p-2 pb-0">
          <div className="relative h-[200px] rounded-[18px] overflow-hidden bg-[#FBFBF9]">
            {post.image ? (
              <Image
                src={`/images/blog/${post.slug}/${post.image}`}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            ) : (
              <div className="absolute inset-0 bg-[#FBB11A]/5 flex items-center justify-center">
                 <span className="text-4xl opacity-20">📖</span>
              </div>
            )}
            
            {/* Category Badge */}
            {post.category && (
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[#128790] text-[9px] font-bold uppercase tracking-widest rounded-lg shadow-sm border border-[#E6E4DF]/50">
                  {post.category.replace('-', ' ')}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content - Refined Typography */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
             <span className="text-[10px] font-bold text-[#9A948C] uppercase tracking-widest">{post.publishedAt}</span>
             <span className="w-1 h-1 rounded-full bg-[#E6E4DF]"></span>
             <span className="text-[10px] font-bold text-[#128790] uppercase tracking-widest">{post.readingTime} read</span>
          </div>

          <h3 className="text-[#1E1F1C] font-bold text-[18px] md:text-[20px] leading-[1.2] mb-3 group-hover:text-[#128790] transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-[#6B665E] text-[13px] font-light leading-relaxed mb-6 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          {/* Footer - Author & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E6E4DF]">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#FBB11A] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                   {post.author ? post.author.charAt(0) : 'M'}
                </div>
                <span className="text-[11px] font-bold text-[#1E1F1C]">{post.author}</span>
             </div>
             <span className="text-[#128790] text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
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
