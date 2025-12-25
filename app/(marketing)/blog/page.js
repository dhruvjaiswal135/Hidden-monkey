import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import { generateMetadata as generateMeta, JsonLd, generateBreadcrumbSchema } from '@/lib/seo'
import { formatDate } from '@/lib/utils'
import { getAllPosts } from '@/content/blog'

/**
 * Blog Page Metadata
 */
export const metadata = generateMeta({
  title: 'Travel Blog & Stories',
  description: 'Discover travel tips, destination guides, and inspiring stories from travelers around the world.',
  path: '/blog',
  keywords: ['travel blog', 'travel tips', 'destination guides', 'travel stories'],
})

/**
 * Blog List Page
 * Clean, minimal design with 3-column grid
 */
export default function BlogPage() {
  const allPosts = getAllPosts()
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://hiddenmonkeyhotel.com' },
    { name: 'Blog', url: 'https://hiddenmonkeyhotel.com/blog' },
  ])
  
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Header />
      <main className="bg-white">
        
        {/* Header */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pb-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-white to-[#F4EFEA]/30"></div>
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#2D7A5F]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2D7A5F]/5 rounded-full blur-3xl"></div>
          
          <Container className="max-w-[1400px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <div className="inline-block mb-6">
                  <span className="text-[13px] tracking-[0.25em] uppercase text-[#2D7A5F] font-medium">The Journal</span>
                </div>
                <h1 className="font-sans text-[#1A1A1A] text-[52px] md:text-[68px] lg:text-[76px] font-normal leading-[1.1] tracking-tight mb-8">
                  Stories from
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10">the road</span>
                    <span className="absolute bottom-3 left-0 w-full h-4 bg-[#2D7A5F]/10 -rotate-1"></span>
                  </span>
                </h1>
                <p className="text-[#374151] text-[18px] md:text-[19px] font-light leading-[1.75] max-w-xl">
                  Real travel experiences, honest advice, and stories that actually help. Written by backpackers who've been there.
                </p>
              </div>
              
              <div className="lg:col-span-5 flex justify-end">
                <div className="relative">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-[#2D7A5F]/10 backdrop-blur-sm"></div>
                      <div className="w-20 h-20 rounded-2xl bg-[#2D7A5F]/5 backdrop-blur-sm"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-[#2D7A5F]/5 backdrop-blur-sm"></div>
                      <div className="w-20 h-20 rounded-2xl bg-[#2D7A5F]/10 backdrop-blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Post */}
        {allPosts.length > 0 && (
          <section className="pb-16 md:pb-20 lg:pb-28 bg-white">
            <Container className="max-w-[1400px]">
              <div className="mb-12">
                <div className="w-12 h-[2px] bg-[#2D7A5F] mb-6"></div>
                <h2 className="font-sans text-[#1A1A1A] text-[28px] md:text-[32px] font-normal tracking-tight">Featured Story</h2>
              </div>
              
              <Link href={`/blog/${allPosts[0].slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 relative">
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={allPosts[0].image}
                        alt={allPosts[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        unoptimized
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#FAF8F5] rounded-3xl -z-10"></div>
                  </div>
                  
                  <div className="lg:col-span-5">
                    <span className="inline-block px-3 py-1.5 bg-[#2D7A5F] text-white text-[11px] font-medium uppercase tracking-[0.15em] rounded-full mb-5">
                      {allPosts[0].category}
                    </span>
                    <h3 className="font-sans text-[#1A1A1A] text-[32px] md:text-[38px] font-normal leading-[1.2] tracking-tight mb-5 group-hover:text-[#2D7A5F] transition-colors duration-300">
                      {allPosts[0].title}
                    </h3>
                    <p className="text-[#374151] text-[17px] font-light leading-[1.75] mb-6">
                      {allPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[14px] text-[#6B7280] font-light mb-8">
                      <time dateTime={allPosts[0].date}>{formatDate(allPosts[0].date, 'short')}</time>
                      <span className="w-1 h-1 bg-[#9CA3AF] rounded-full"></span>
                      <span>{allPosts[0].readTime} min read</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[#2D7A5F] text-[15px] font-medium group-hover:gap-4 transition-all duration-300">
                      <span>Read full story</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </Container>
          </section>
        )}

        {/* All Stories */}
        <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-[#FAF8F5]">
          <Container className="max-w-[1400px]">
            <div className="mb-12 md:mb-16">
              <div className="w-12 h-[2px] bg-[#2D7A5F] mb-6"></div>
              <h2 className="font-sans text-[#1A1A1A] text-[28px] md:text-[32px] font-normal tracking-tight">All Stories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-16">
              {allPosts.slice(1).map((post, index) => (
                <article key={post.id} className="group" style={{ marginTop: index % 3 === 1 ? '2rem' : index % 3 === 2 ? '4rem' : '0' }}>
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-50 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="px-1">
                      {/* Category Badge */}
                      <span className="inline-block px-2.5 py-1 bg-white border border-[#E5E7EB] text-[#2D7A5F] text-[11px] font-medium uppercase tracking-[0.1em] rounded-lg mb-4">
                        {post.category}
                      </span>

                      <h2 className="font-sans text-[#1A1A1A] text-[22px] md:text-[24px] font-normal leading-[1.3] tracking-tight mb-4 group-hover:text-[#2D7A5F] transition-colors duration-300">
                        {post.title}
                      </h2>

                      <p className="text-[#6B7280] text-[15px] leading-[1.7] font-light line-clamp-2 mb-5">
                        {post.excerpt}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center gap-2.5 text-[13px] text-[#9CA3AF] font-light">
                        <time dateTime={post.date}>{formatDate(post.date, 'short')}</time>
                        <span className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
