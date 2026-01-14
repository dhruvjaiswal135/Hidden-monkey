'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { BlogGrid } from '@/components/features/blog'
import { getRecentPosts } from '@/content/blog'

/**
 * Blog Section (Homepage Preview)
 * 
 * Design intent:
 * - Spark curiosity, invite exploration
 * - Do not overwhelm
 * - Feels like someone casually recommending a story
 * 
 * Shows only 2-3 blogs with horizontal/asymmetric layout
 * Small text link CTA, no button
 */

async function BlogContent() {
  const posts = await getRecentPosts(3)

  return (
    <div>
      {/* Section Header - Calm, minimal */}
      <div className="mb-12 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-charcoal mb-3">
          Stories from the Road
        </h2>
        <p className="text-charcoal/60 text-lg max-w-xl">
          Real tales from travelers who passed through.
        </p>
      </div>

      {/* Blog Grid - Horizontal layout for homepage */}
      <BlogGrid posts={posts} layout="horizontal" />

      {/* Small text link CTA - not a button */}
      <div className="mt-10 md:mt-12">
        <Link
          href="/blog"
          className="
            inline-flex items-center gap-2 
            text-charcoal/70 hover:text-charcoal
            text-base font-medium
            transition-colors duration-200
            group
          "
        >
          <span className="
            bg-[linear-gradient(#EEA727,#EEA727)] bg-no-repeat
            bg-[length:0%_1.5px] bg-[position:0_100%]
            transition-[background-size] duration-300 ease-out
            group-hover:bg-[length:100%_1.5px]
          ">
            Read all stories
          </span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <section className="py-16 md:py-24 bg-sand-light">
      <Container>
        <Suspense
          fallback={
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="h-10 bg-charcoal/5 rounded w-64" />
                <div className="h-6 bg-charcoal/5 rounded w-80" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-sand-cream rounded-xl h-72 animate-pulse"
                  />
                ))}
              </div>
            </div>
          }
        >
          <BlogContent />
        </Suspense>
      </Container>
    </section>
  )
}
