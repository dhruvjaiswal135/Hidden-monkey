/**
 * Blog Listing Page
 * 
 * Design: "Stories from the Monkey House"
 * - Header + Footer included
 * - Cute, compact editorial header
 * - Simple 3-column grid
 * - Branded pill filters (Teal/Gold)
 */

import { Suspense } from 'react'
import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/content/blog'
import { BlogGrid } from '@/components/features/blog'
import Container from '@/components/ui/Container'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// SEO metadata
export const metadata = {
  title: 'Stories from the Monkey House | Hidden Monkey Hostel',
  description: 'Real travel stories from backpackers. Tales, tips, and moments shared from the road.',
}

async function BlogPostsList({ selectedCategory = null }) {
  const posts = await getAllPosts()
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts

  return <BlogGrid posts={filteredPosts} />
}

async function CategoryFilter({ selectedCategory = null }) {
  const categories = await getAllCategories()

  return (
    <div className="mb-8 overflow-x-auto hide-scrollbar">
      <div className="flex gap-2 min-w-max pb-2">
        <Link
          href="/blog"
          className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${
            !selectedCategory
              ? 'bg-[#128790] text-white border-[#128790]'
              : 'bg-white text-[#6B665E] border-[#E6E4DF] hover:border-[#128790]/50'
          }`}
        >
          All Stories
        </Link>

        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${
              selectedCategory === category
                ? 'bg-[#128790] text-white border-[#128790]'
                : 'bg-white text-[#6B665E] border-[#E6E4DF] hover:border-[#128790]/50'
            }`}
          >
            {category.replace('-', ' ')}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default async function BlogPage({ searchParams }) {
  const selectedCategory = searchParams?.category || null

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FBFBF9] pb-20 lg:pb-0">
        <section className="pt-12 pb-8 bg-[#FBFBF9] border-b border-[#E6E4DF]">
          <Container className="max-w-[1400px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-4 h-[2px] bg-[#128790]"></span>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">The Journal</span>
                </div>
                <h1 className="text-[32px] md:text-[48px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.02em] mb-4">
                  Stories from the <span className="text-[#FBB11A]">Monkey House.</span>
                </h1>
                <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light leading-relaxed max-w-xl">
                  Tales and moments from travelers who stayed, connected, and left changed.
                </p>
              </div>
              
              <div className="hidden lg:block">
                 <div className="text-right">
                    <span className="text-[24px] font-bold text-[#1E1F1C] block">5+</span>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#9A948C]">Tales shared</span>
                 </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Suspense fallback={<div className="h-10 bg-white/50 rounded-full w-64 animate-pulse" />}>
                <CategoryFilter selectedCategory={selectedCategory} />
              </Suspense>
            </div>
          </Container>
        </section>

        <section className="py-12 min-h-[60vh]">
          <Container className="max-w-[1400px]">
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-[24px] h-[350px] border border-[#E6E4DF]" />
                ))}
              </div>
            }>
              <BlogPostsList selectedCategory={selectedCategory} />
            </Suspense>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-[#E6E4DF]">
           <Container className="max-w-[800px]">
              <div className="bg-[#128790] rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden group">
                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FBB11A]/10 rounded-full blur-[40px]" />
                 <div className="relative z-10">
                    <span className="text-4xl mb-4 block">✍️</span>
                    <h2 className="text-[24px] md:text-[32px] font-bold text-white mb-4">Got a story to tell?</h2>
                    <p className="text-white/80 text-[14px] md:text-[16px] font-light mb-8 max-w-md mx-auto">
                      We love featuring stories from our community. Share your travel memories with us and get featured on the blog.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#FBB11A] text-[#1E1F1C] text-[12px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-lg">
                      Submit Your Tale
                    </Link>
                 </div>
              </div>
           </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
