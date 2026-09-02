/**
 * Blog Listing Page — "Stories from the Monkey House"
 *
 * Static server page: posts and categories are fetched at build time and the
 * ?category= filtering happens client-side (useSearchParams) inside the
 * Suspense boundary, so the route can be statically prerendered.
 */

import { Suspense } from 'react'
import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/content/blog'
import { BlogListingBrowser } from '@/components/features/blog/BlogGrid'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Stories from the Monkey House',
  description: 'Real travel stories from backpackers. Tales, tips, and moments shared from the road.',
  alternates: { canonical: 'https://hiddenmonkey.in/blog' },
}

function ListingFallback() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="card h-[350px]" />
      ))}
    </div>
  )
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()])
  // Strip the heavy article HTML before handing posts to the client component.
  const listPosts = posts.map(({ content, ...rest }) => rest)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface pb-20 lg:pb-0">
        {/* Hero */}
        <section className="bg-white border-b border-line">
          <div className="container-site pt-9 md:pt-16 pb-7">
            <p className="kicker">The journal</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">Stories from the<br /><span className="text-teal">Monkey House.</span></h1>
              <div className="flex flex-col gap-3 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-ink-3">Tales and moments from travellers who stayed, connected, and left changed.</p>
                <div>
                  <span className="block font-display font-extrabold text-[36px] leading-none">{posts.length}+</span>
                  <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-ink-4">Tales shared</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters + grid */}
        <section className="py-8 md:py-14 min-h-[60vh]">
          <div className="container-site">
            <Suspense fallback={<ListingFallback />}>
              <BlogListingBrowser posts={listPosts} categories={categories} />
            </Suspense>
          </div>
        </section>

        {/* CTA — dark accent */}
        <section className="section bg-jungle text-white">
          <div className="container-site">
            <div className="max-w-[640px] mx-auto flex flex-col items-center text-center gap-4">
              <p className="kicker text-gold">Your turn</p>
              <h2 className="h2">Got a story to tell?</h2>
              <p className="text-[16px] leading-relaxed text-white/80 max-w-md">
                We love featuring stories from our community. Share your travel memories with us and get featured on the blog.
              </p>
              <Link href="/contact" className="btn-gold">Submit your tale</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
