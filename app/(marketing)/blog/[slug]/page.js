import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import { generateMetadata as generateMeta, JsonLd, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { formatDate } from '@/lib/utils'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/content/blog'

/**
 * Generate static params for all blog posts
 */
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return generateMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
  })
}

/**
 * Individual Blog Post Page
 */
export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)
  
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    publishedDate: post.date,
    url: `https://hiddenmonkeyhotel.com/blog/${slug}`,
  })
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://hiddenmonkeyhotel.com' },
    { name: 'Blog', url: 'https://hiddenmonkeyhotel.com/blog' },
    { name: post.title, url: `https://hiddenmonkeyhotel.com/blog/${slug}` },
  ])
  
  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Header />
      
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative pt-6 pb-12 md:pb-16 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2D7A5F]/5 rounded-full blur-3xl"></div>
          
          <Container className="max-w-[1200px] relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[#9CA3AF] text-[13px] mb-6 font-light">
              <Link href="/" className="hover:text-[#2D7A5F] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#2D7A5F] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#1A1A1A]">{post.category}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                {/* Category Badge */}
                <div className="mb-5">
                  <span className="inline-block px-3 py-1 bg-[#2D7A5F] text-white text-[11px] font-medium uppercase tracking-[0.15em] rounded-lg">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-sans text-[#1A1A1A] text-[42px] md:text-[52px] lg:text-[58px] font-normal leading-[1.1] mb-6 tracking-tight">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-[#6B7280] text-[14px] font-light">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-[#2D7A5F]/10 rounded-full flex items-center justify-center">
                      <span className="text-[14px] font-medium text-[#2D7A5F]">{post.author.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-[#1A1A1A]">{post.author}</span>
                  </div>
                  <span className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
                  <time>{formatDate(post.date, 'short')}</time>
                  <span className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex justify-end">
                <div className="hidden lg:block relative">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#2D7A5F]/10 to-[#2D7A5F]/5 backdrop-blur-sm"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#FAF8F5] -z-10"></div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Content Section */}
        <article className="py-8 md:py-12 bg-white">
          <Container className="max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-[180px,1fr] gap-10 lg:gap-12">
              {/* Left Sidebar - Metadata */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="bg-[#FAF8F5] rounded-2xl p-5 shadow-sm border border-[#E5E7EB]/50">
                    {/* Date */}
                    <div className="mb-5 pb-5 border-b border-[#E5E7EB]/50">
                      <div className="text-[#9CA3AF] text-[10px] font-medium uppercase tracking-[0.1em] mb-2">Published</div>
                      <div className="text-[#1A1A1A] text-[13px] font-light">{formatDate(post.date, 'short')}</div>
                    </div>

                    {/* Category */}
                    <div className="mb-5 pb-5 border-b border-[#E5E7EB]/50">
                      <div className="text-[#9CA3AF] text-[10px] font-medium uppercase tracking-[0.1em] mb-2">Category</div>
                      <div className="text-[#2D7A5F] text-[13px] font-medium">{post.category}</div>
                    </div>

                    {/* Author */}
                    <div className="mb-5 pb-5 border-b border-[#E5E7EB]/50">
                      <div className="text-[#9CA3AF] text-[10px] font-medium uppercase tracking-[0.1em] mb-2">Author</div>
                      <div className="text-[#1A1A1A] text-[13px] font-light">{post.author}</div>
                    </div>

                    {/* Share */}
                    <div>
                      <div className="text-[#9CA3AF] text-[10px] font-medium uppercase tracking-[0.1em] mb-3">Share</div>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#2D7A5F] hover:text-[#2D7A5F] text-[#6B7280] flex items-center justify-center transition-all duration-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#2D7A5F] hover:text-[#2D7A5F] text-[#6B7280] flex items-center justify-center transition-all duration-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#2D7A5F] hover:text-[#2D7A5F] text-[#6B7280] flex items-center justify-center transition-all duration-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="max-w-[720px]">
                {/* Featured Image */}
                <div className="relative">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-10 bg-gray-50 shadow-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FAF8F5] rounded-2xl -z-10"></div>
                </div>

                {/* Introduction / Excerpt */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-[2px] bg-[#2D7A5F]"></div>
                    <h2 className="font-sans text-[#1A1A1A] text-[20px] font-normal tracking-tight">Introduction</h2>
                  </div>
                  <p className="text-[#374151] text-[17px] leading-[1.75] font-light">
                    {post.excerpt}
                  </p>
                </div>

                {/* Main Content */}
                <div 
                  className="prose prose-lg max-w-none
                    /* Headings */
                    prose-headings:font-sans prose-headings:text-[#1A1A1A] prose-headings:tracking-tight prose-headings:font-normal
                    prose-h2:text-[20px] prose-h2:mt-12 prose-h2:mb-5 prose-h2:leading-tight
                    prose-h3:text-[18px] prose-h3:mt-10 prose-h3:mb-4 prose-h3:font-medium
                    
                    /* Paragraphs */
                    prose-p:text-[#374151] prose-p:text-[17px] prose-p:leading-[1.75] prose-p:mb-5
                    prose-p:font-light
                    
                    /* Links */
                    prose-a:text-[#2D7A5F] prose-a:font-medium prose-a:no-underline 
                    hover:prose-a:underline prose-a:underline-offset-2 prose-a:transition-all
                    
                    /* Lists */
                    prose-ul:my-5 prose-ul:space-y-2
                    prose-li:text-[#374151] prose-li:text-[17px] prose-li:leading-[1.75] prose-li:font-light
                    prose-li:marker:text-[#2D7A5F]
                    prose-ol:my-5 prose-ol:space-y-2
                    
                    /* Blockquotes */
                    prose-blockquote:border-l-4 prose-blockquote:border-[#2D7A5F]/30
                    prose-blockquote:pl-6 prose-blockquote:py-3 prose-blockquote:my-8
                    prose-blockquote:italic prose-blockquote:text-[#374151] prose-blockquote:font-light
                    prose-blockquote:bg-[#FAF8F5] prose-blockquote:rounded-r-xl
                    
                    /* Strong */
                    prose-strong:text-[#1A1A1A] prose-strong:font-semibold
                    
                    /* Images */
                    prose-img:rounded-2xl prose-img:my-10 prose-img:w-full prose-img:shadow-lg
                    
                    /* Code */
                    prose-code:text-[#2D7A5F] prose-code:bg-[#FAF8F5] prose-code:px-2 prose-code:py-1 
                    prose-code:rounded-md prose-code:text-[15px] prose-code:font-medium
                    prose-code:before:content-[''] prose-code:after:content-['']"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Divider */}
                <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

                {/* Author Card */}
                <div className="relative mb-10">
                  <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F4EFEA] rounded-2xl p-7 border border-[#E5E7EB]/50 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2D7A5F] to-[#246B51] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-[22px] font-semibold text-white">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-[#2D7A5F]"></div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-[#1A1A1A] text-[16px] font-semibold mb-1">
                          {post.author}
                        </div>
                        <p className="text-[#6B7280] text-[14px] leading-relaxed font-light">
                          Travel writer sharing honest stories from the road. Been backpacking for 5+ years across 30 countries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Link */}
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#2D7A5F] hover:gap-3 text-[15px] font-light transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to all stories
                </Link>
              </div>
            </div>
          </Container>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#FAF8F5]">
            <Container className="max-w-[1200px]">
              <div className="mb-10">
                <div className="w-12 h-[2px] bg-[#2D7A5F] mb-5"></div>
                <h2 className="font-sans text-[#1A1A1A] text-[32px] md:text-[36px] font-normal leading-tight tracking-tight">
                  Continue Reading
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {relatedPosts.map((relatedPost, index) => (
                  <article key={relatedPost.id} className="group" style={{ marginTop: index === 1 ? '2rem' : index === 2 ? '4rem' : '0' }}>
                    <Link href={`/blog/${relatedPost.slug}`} className="block">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-gray-50 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-1000"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="px-1">
                        <span className="inline-block px-2.5 py-1 bg-white border border-[#E5E7EB] text-[#2D7A5F] text-[11px] font-medium uppercase tracking-[0.1em] rounded-lg mb-4">
                          {relatedPost.category}
                        </span>
                        
                        <h3 className="font-sans text-[19px] font-normal text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#2D7A5F] transition-colors duration-300">
                          {relatedPost.title}
                        </h3>

                        <div className="flex items-center gap-2 text-[13px] text-[#9CA3AF] font-light">
                          <span>{formatDate(relatedPost.date, 'short')}</span>
                          <span className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
                          <span>{relatedPost.readTime} min</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-16 md:py-20 bg-white">
          <Container className="max-w-[700px]">
            <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-3xl p-10 md:p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D7A5F]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2D7A5F]/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-block mb-5">
                  <div className="w-12 h-12 mx-auto bg-[#2D7A5F] rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h2 className="font-sans text-white text-[32px] md:text-[36px] font-normal mb-3 leading-tight tracking-tight">
                  Get More Stories
                </h2>
                <p className="text-[#9CA3AF] text-[15px] mb-8 font-light leading-relaxed max-w-md mx-auto">
                  Join 2,000+ travelers getting weekly stories, tips, and deals in their inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-[#9CA3AF] text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-[#2D7A5F] focus:border-[#2D7A5F] transition-all duration-300"
                  />
                  <button className="px-7 py-3.5 bg-[#2D7A5F] hover:bg-[#246B51] text-white font-medium text-[15px] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    Subscribe
                  </button>
                </div>
                <p className="text-[#6B7280] text-[12px] mt-4 font-light">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
