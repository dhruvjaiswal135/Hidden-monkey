// import { notFound } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'
// import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer'
// import Container from '@/components/ui/Container'
// import { generateMetadata as generateMeta, JsonLd, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
// import { formatDate } from '@/lib/utils'
// import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/content/blog'

// /**
//  * Generate static params for all blog posts
//  */
// export async function generateStaticParams() {
//   const posts = getAllPosts()
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// /**
//  * Generate metadata for SEO
//  */
// export async function generateMetadata({ params }) {
//   const { slug } = await params
//   const post = getPostBySlug(slug)
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     }
//   }
  
//   return generateMeta({
//     title: post.title,
//     description: post.excerpt,
//     path: `/blog/${slug}`,
//     image: post.image,
//   })
// }

// /**
//  * Individual Blog Post Page
//  */
// export default async function BlogPostPage({ params }) {
//   const { slug } = await params
//   const post = getPostBySlug(slug)
  
//   if (!post) {
//     notFound()
//   }

//   const relatedPosts = getRelatedPosts(slug, 3)
  
//   const articleSchema = generateArticleSchema({
//     title: post.title,
//     description: post.excerpt,
//     image: post.image,
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
      
//       <main className="bg-white">
//         {/* Hero Section */}
//         <article className="pt-32 pb-16">
//           <Container className="max-w-[900px]">
//             {/* Meta Info */}
//             <div className="flex items-center gap-4 mb-6">
//               <span className="px-3 py-1.5 bg-[#2D7A5F]/10 text-[#2D7A5F] text-[12px] font-semibold uppercase tracking-wider rounded-full">
//                 {post.category}
//               </span>
//               <span className="text-[14px] text-[#6B7280]">
//                 {formatDate(post.date, 'long')}
//               </span>
//               <span className="text-[14px] text-[#6B7280]">
//                 {post.readTime} min read
//               </span>
//             </div>

//             {/* Title */}
//             <h1 className="text-[40px] md:text-[52px] font-bold text-[#1A1A1A] leading-tight mb-6 tracking-tight">
//               {post.title}
//             </h1>

//             {/* Author */}
//             <div className="flex items-center gap-3 mb-12 pb-8 border-b border-gray-200">
//               <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//                 <span className="text-[18px] font-semibold text-gray-600">
//                   {post.author.charAt(0)}
//                 </span>
//               </div>
//               <div>
//                 <p className="font-semibold text-[#1A1A1A]">{post.author}</p>
//                 <p className="text-[14px] text-[#6B7280]">Travel Writer</p>
//               </div>
//             </div>

//             {/* Featured Image */}
//             <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 fill
//                 className="object-cover"
//                 priority
//                 unoptimized
//               />
//             </div>

//             {/* Content */}
//             <div 
//               className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1A1A1A] prose-p:text-[#374151] prose-p:leading-relaxed prose-a:text-[#2D7A5F] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-strong:text-[#1A1A1A]"
//               dangerouslySetInnerHTML={{ __html: post.content }}
//             />
//           </Container>
//         </article>

//         {/* Related Posts */}
//         {relatedPosts.length > 0 && (
//           <section className="py-16 bg-gray-50">
//             <Container className="max-w-[1400px]">
//               <h2 className="text-[32px] font-bold text-[#1A1A1A] mb-10">
//                 Related Stories
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {relatedPosts.map((relatedPost) => (
//                   <article key={relatedPost.id} className="group">
//                     <Link href={`/blog/${relatedPost.slug}`} className="block">
//                       <div className="relative h-[220px] overflow-hidden rounded-2xl mb-4 bg-gray-100">
//                         <Image
//                           src={relatedPost.image}
//                           alt={relatedPost.title}
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-500"
//                           unoptimized
//                         />
//                       </div>
                      
//                       <span className="text-[12px] text-[#2D7A5F] font-medium mb-2 block">
//                         {relatedPost.category}
//                       </span>
                      
//                       <h3 className="text-[20px] font-semibold text-[#1A1A1A] leading-tight group-hover:text-[#2D7A5F] transition-colors">
//                         {relatedPost.title}
//                       </h3>
//                     </Link>
//                   </article>
//                 ))}
//               </div>
//             </Container>
//           </section>
//         )}

//         {/* Back to Blog */}
//         <section className="py-12">
//           <Container className="max-w-[900px]">
//             <Link 
//               href="/blog"
//               className="inline-flex items-center gap-2 text-[#2D7A5F] hover:text-[#246B51] font-semibold transition-colors"
//             >
//               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back to all stories
//             </Link>
//           </Container>
//         </section>
//       </main>
      
//       <Footer />
//     </>
//   )
// }
