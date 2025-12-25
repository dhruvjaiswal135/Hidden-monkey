// import { notFound } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'
// import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer'
// import Container from '@/components/ui/Container'
// import Section from '@/components/ui/Section'
// import Badge from '@/components/ui/Badge'
// import { generateMetadata as generateMeta, JsonLd, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
// import { formatDate } from '@/lib/utils'
// import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/content/blog'

// /**
//  * Generate static params for blog posts
//  * This tells Next.js which pages to pre-render at build time
//  */
// export async function generateStaticParams() {
//   const allPosts = getAllPosts()
//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// /**
//  * Generate metadata for blog post
//  * This creates SEO-optimized metadata for each blog post
//  */
// export async function generateMetadata({ params }) {
//   const { slug } = await params
//   const post = getPostBySlug(slug)
  
//   if (!post) {
//     return {}
//   }
  
//   return generateMeta({
//     title: post.title,
//     description: post.excerpt,
//     path: `/blog/${slug}`,
//     image: post.image,
//   })
// }

// /**
//  * Blog Post Page
//  * Dynamically renders blog posts from content files
//  */
// export default async function BlogPostPage({ params }) {
//   const { slug } = await params
//   const post = getPostBySlug(slug)
  
//   if (!post) {
//     notFound()
//   }

//   // Get related posts from the same category
//   const relatedPosts = getRelatedPosts(slug, 2)
  
//   const articleSchema = generateArticleSchema({
//     title: post.title,
//     description: post.excerpt,
//     image: `https://hiddenmonkeyhotel.com${post.image}`,
//     publishedDate: post.date,
//     url: `https://hiddenmonkeyhotel.com/blog/${slug}`,
//   })
  
//   const breadcrumbSchema = generateBreadcrumbSchema([
//     { name: 'Home', url: 'https://hiddenmonkeyhotel.com' },
//     { name: 'Blog', url: 'https://hiddenmonkeyhotel.com/blog' },
//     { name: post.title, url: `https://hiddenmonkeyhotel.com/blog/${slug}` },
//   ])
  
//   return (
//     <>
//       <JsonLd schema={articleSchema} />
//       <JsonLd schema={breadcrumbSchema} />
//       <Header />
//       <main className="bg-[#ebe5dc]">
//         {/* Hero Section - Title overlay on beige */}
//         <section className="relative bg-[#ebe5dc] pt-32 pb-8">
//           <Container>
//             <div className="max-w-4xl">
//               <h1 className="font-serif font-normal text-5xl md:text-6xl text-[#2B2622] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
//                 {post.title}
//               </h1>
//               <div className="flex items-center gap-4 text-[#6B6862] text-sm mb-8">
//                 <div className="inline-flex items-center gap-2">
//                   <span className="bg-[#D8734A] text-white text-xs px-3 py-1.5 rounded font-medium">
//                     {post.category}
//                   </span>
//                 </div>
//                 <span>By {post.author}</span>
//                 <span>•</span>
//                 <time dateTime={post.date}>{formatDate(post.date, 'long')}</time>
//                 <span>•</span>
//                 <span>{post.readTime} minute read</span>
//               </div>
//             </div>
//           </Container>
//         </section>

//         {/* Full Width Hero Image */}
//         <section className="relative h-[450px] overflow-hidden">
//           <Image
//             src={post.image}
//             alt={post.title}
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//           />
//         </section>

//         {/* Main Content with Sidebar - Beige textured background */}
//         <section className="bg-[#ebe5dc] py-12">
//           <Container>
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//               {/* Main Article Content - Left column */}
//               <div className="lg:col-span-8">
//                 {/* Excerpt paragraph */}
//                 <p className="text-[#4A4541] text-lg leading-relaxed mb-8">
//                   {post.excerpt}
//                 </p>

//                 {/* Article content */}
//                 <article 
//                   className="prose prose-lg max-w-none
//                     prose-headings:font-serif prose-headings:text-[#2B2622]
//                     prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4
//                     prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:italic
//                     prose-p:text-[#4A4541] prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base
//                     prose-strong:text-[#2B2622] prose-strong:font-semibold
//                     prose-em:italic prose-em:text-[#6B6862]
//                     prose-a:text-[#D8734A] prose-a:no-underline hover:prose-a:underline
//                     prose-img:rounded-lg prose-img:shadow-md prose-img:my-8"
//                   style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
//                   dangerouslySetInnerHTML={{ __html: post.content }}
//                 />

//                 {/* Inline image with caption (if exists in content) */}
//                 {post.inlineImage && (
//                   <figure className="my-10">
//                     <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
//                       <Image
//                         src={post.inlineImage}
//                         alt="Article inline image"
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 1024px) 100vw, 66vw"
//                       />
//                     </div>
//                   </figure>
//                 )}
//               </div>

//               {/* Sidebar - Sticky paper-style cards */}
//               <aside className="lg:col-span-4">
//                 <div className="sticky top-24 space-y-6">
//                   {/* Key Details Card - Paper texture with border */}
//                   {post.metadata && (
//                     <div className="bg-[#f5f0e8] border-2 border-[#d8cdb8] p-6 shadow-sm">
//                       <h3 className="font-serif font-semibold text-xl mb-6 text-[#2B2622]" style={{ fontFamily: 'Playfair Display, serif' }}>
//                         Key Details
//                       </h3>
//                       <div className="space-y-4 text-sm">
//                         {post.metadata.bestTime && (
//                           <div className="flex items-start gap-3">
//                             <svg className="w-5 h-5 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <div>
//                               <span className="font-semibold text-[#2B2622] block mb-1">Best Time to go:</span>
//                               <span className="text-[#6B6862]">{post.metadata.bestTime}</span>
//                             </div>
//                           </div>
//                         )}
//                         {post.metadata.difficulty && (
//                           <div className="flex items-start gap-3">
//                             <svg className="w-5 h-5 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                             </svg>
//                             <div>
//                               <span className="font-semibold text-[#2B2622] block mb-1">Difficulty:</span>
//                               <span className="text-[#6B6862]">{post.metadata.difficulty}</span>
//                             </div>
//                           </div>
//                         )}
//                         {post.metadata.gear && (
//                           <div className="flex items-start gap-3">
//                             <svg className="w-5 h-5 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                             </svg>
//                             <div>
//                               <span className="font-semibold text-[#2B2622] block mb-1">Gear:</span>
//                               <span className="text-[#6B6862]">{post.metadata.gear}</span>
//                             </div>
//                           </div>
//                         )}
//                         {post.metadata.tip && (
//                           <div className="flex items-start gap-3">
//                             <svg className="w-5 h-5 text-[#8B7355] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <div>
//                               <span className="font-semibold text-[#2B2622] block mb-1">Tip:</span>
//                               <span className="text-[#6B6862]">{post.metadata.tip}</span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                       <button className="w-full mt-6 bg-[#D8734A] hover:bg-[#C5653F] text-white px-6 py-3 rounded text-sm font-medium transition-colors shadow-sm">
//                         Read in 2 Minutes
//                       </button>
//                     </div>
//                   )}

//                   {/* Related Posts Card */}
//                   {relatedPosts.length > 0 && (
//                     <div className="bg-[#f5f0e8] border-2 border-[#d8cdb8] p-6 shadow-sm">
//                       <h3 className="font-serif font-semibold text-xl mb-6 text-[#2B2622]" style={{ fontFamily: 'Playfair Display, serif' }}>
//                         Related Posts
//                       </h3>
//                       <div className="space-y-6">
//                         {relatedPosts.map((related, index) => (
//                           <Link key={index} href={`/blog/${related.slug}`} className="block group">
//                             <div className="relative h-40 mb-3 overflow-hidden rounded">
//                               <Image
//                                 src={related.image}
//                                 alt={related.title}
//                                 fill
//                                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//                                 sizes="300px"
//                               />
//                             </div>
//                             <h4 className="font-serif font-semibold text-base mb-2 text-[#2B2622] group-hover:text-[#D8734A] transition-colors leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>
//                               {related.title}
//                             </h4>
//                             <div className="flex items-center gap-2 text-xs text-[#6B6862]">
//                               <div className="w-5 h-5 rounded-full bg-[#8B7355]"></div>
//                               <span className="font-medium">{related.author}</span>
//                               <span>•</span>
//                               <span className="italic">{formatDate(related.date, 'short')}</span>
//                               <span>•</span>
//                               <span>{related.category}</span>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </aside>
//             </div>
//           </Container>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }
