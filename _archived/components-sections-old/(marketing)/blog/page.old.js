// import Link from 'next/link'
// import Image from 'next/image'
// import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer'
// import Container from '@/components/ui/Container'
// import { generateMetadata as generateMeta, JsonLd, generateBreadcrumbSchema } from '@/lib/seo'
// import { formatDate } from '@/lib/utils'
// import { getAllPosts } from '@/content/blog'

// /**
//  * Blog Page Metadata
//  */
// export const metadata = generateMeta({
//   title: 'Hotel Blog & Travel Tips',
//   description: 'Discover travel tips, local attractions, hotel updates, and insider guides from Hidden Monkey Hotel.',
//   path: '/blog',
//   keywords: ['hotel blog', 'travel tips', 'luxury travel', 'hotel news', 'travel guide', 'local attractions'],
// })

// /**
//  * Minimal Blog Page
//  * Clean, focused design with grid layout
//  */
// export default function BlogPage() {
//   const allPosts = getAllPosts()
  
//   const breadcrumbSchema = generateBreadcrumbSchema([
//     { name: 'Home', url: 'https://hiddenmonkeyhotel.com' },
//     { name: 'Blog', url: 'https://hiddenmonkeyhotel.com/blog' },
//   ])
  
//   return (
//     <>
//       <JsonLd schema={breadcrumbSchema} />
//       <Header />
//       <main className="bg-white min-h-screen">
        
//         {/* Header */}
//         <section className="pt-32 pb-16 bg-white">
//           <Container className="max-w-[1400px]">
//             <div className="max-w-3xl">
//               <h1 className="text-[56px] md:text-[72px] font-bold text-[#1A1A1A] leading-none tracking-tight mb-4">
//                 Blog
//               </h1>
//               <p className="text-[#6B7280] text-[18px] leading-relaxed">
//                 Travel stories, tips, and guides from around the world
//               </p>
//             </div>
//           </Container>
//         </section>

//         {/* Blog Grid */}
//         <section className="pb-20">
//           <Container className="max-w-[1400px]">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//               {allPosts.map((post) => (
//                 <article key={post.slug} className="group">
//                   <Link href={`/blog/${post.slug}`} className="block">
//                     {/* Image */}
//                     <div className="relative h-[280px] overflow-hidden rounded-2xl mb-5 bg-gray-100">
//                       <Image
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         unoptimized
//                       />
//                     </div>

//                     {/* Content */}
//                     <div>
//                       <div className="flex items-center gap-3 mb-3">
//                         <span className="text-[12px] text-[#6B7280]">
//                           {formatDate(post.date, 'short')}
//                         </span>
//                         <span className="w-1 h-1 bg-gray-300 rounded-full" />
//                         <span className="text-[12px] text-[#2D7A5F] font-medium">
//                           {post.category}
//                         </span>
//                       </div>

//                       <h2 className="text-[#1A1A1A] font-semibold text-[22px] leading-tight mb-3 group-hover:text-[#2D7A5F] transition-colors">
//                         {post.title}
//                       </h2>

//                       <p className="text-[#6B7280] text-[15px] leading-relaxed line-clamp-2">
//                         {post.excerpt}
//                       </p>
//                     </div>
//                   </Link>
//                 </article>
//               ))}
//             </div>
//           </Container>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }
