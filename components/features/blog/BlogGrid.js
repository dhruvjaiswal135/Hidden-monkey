'use client'

import BlogCard from './BlogCard'

export default function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-[32px] border border-[#E6E4DF] shadow-sm">
        <span className="text-4xl mb-4 block">🍃</span>
        <h3 className="text-[#1E1F1C] font-bold text-[18px] mb-2">No stories found</h3>
        <p className="text-[#6B665E] text-[13px] font-light">Check back later for more tales from the road.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
