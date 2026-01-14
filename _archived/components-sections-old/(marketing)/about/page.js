// import Image from 'next/image'
// import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer'
// import Container from '@/components/ui/Container'
// import { generateMetadata as generateMeta, JsonLd, generateBreadcrumbSchema } from '@/lib/seo'

// /**
//  * About Page Metadata
//  */
// export const metadata = generateMeta({
//   title: 'About Us',
//   description: 'Discover the story behind Hidden Monkey. A backpacker hostel built by travelers, for travelers—where authentic connections and adventures begin.',
//   path: '/about',
//   keywords: ['backpacker hostel', 'hostel story', 'travel community', 'budget travel', 'about us'],
// })

// /**
//  * About Page
//  * Our story and values
//  */
// export default function AboutPage() {
//   const breadcrumbSchema = generateBreadcrumbSchema([
//     { name: 'Home', url: 'https://hiddenmonkeyhotel.com' },
//     { name: 'About', url: 'https://hiddenmonkeyhotel.com/about' },
//   ])
  
//   return (
//     <>
//       <JsonLd schema={breadcrumbSchema} />
//       <Header />
//       <main className="bg-white">
//         {/* Hero Section */}
//         <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-white to-[#F4EFEA]"></div>
//           <div className="absolute top-20 right-0 w-96 h-96 bg-[#2D7A5F]/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2D7A5F]/5 rounded-full blur-3xl"></div>
          
//           <Container className="max-w-[1400px] relative z-10">
//             <div className="max-w-4xl">
//               <div className="inline-block mb-6">
//                 <span className="text-[13px] tracking-[0.2em] uppercase text-[#2D7A5F] font-medium">Est. 2019</span>
//               </div>
//               <h1 className="font-sans text-[#1A1A1A] text-[52px] md:text-[68px] lg:text-[82px] font-normal leading-[1.1] tracking-tight mb-8">
//                 We're not just a place<br />
//                 <span className="text-[#6B7280]">to crash—</span><br />
//                 <span className="relative inline-block">
//                   <span className="relative z-10">we're home base</span>
//                   <span className="absolute bottom-2 left-0 w-full h-3 bg-[#2D7A5F]/10 -rotate-1"></span>
//                 </span>
//               </h1>
//               <p className="text-[#374151] text-[18px] md:text-[20px] font-light leading-[1.75] max-w-2xl">
//                 Built by backpackers who got tired of sterile hotels and party hostels with nothing in between. This is where real travelers connect.
//               </p>
//             </div>
//           </Container>
//         </section>
        
//         {/* Story Section */}
//         <section className="py-20 md:py-28 lg:py-36 bg-white relative">
//           <Container className="max-w-[1400px]">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
//               <div className="lg:col-span-5 lg:sticky lg:top-32">
//                 <div className="mb-8">
//                   <div className="w-12 h-[2px] bg-[#2D7A5F] mb-8"></div>
//                   <h2 className="font-sans text-[#1A1A1A] text-[42px] md:text-[48px] font-normal leading-[1.15] tracking-tight">
//                     Started with a backpack<br />and an idea
//                   </h2>
//                 </div>
                
//                 <div className="relative mt-12 lg:mt-16">
//                   <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
//                     <Image
//                       src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&auto=format&fit=crop&q=85"
//                       alt="Hidden Monkey hostel common area"
//                       fill
//                       className="object-cover hover:scale-105 transition-transform duration-1000"
//                       sizes="(max-width: 1024px) 100vw, 42vw"
//                       unoptimized
//                     />
//                   </div>
//                   <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FAF8F5] rounded-3xl -z-10"></div>
//                 </div>
//               </div>
              
//               <div className="lg:col-span-7 space-y-12">
//                 <div className="space-y-8 text-[#374151] text-[17px] md:text-[18px] font-light leading-[1.85]">
//                   <p className="text-[19px] md:text-[21px] text-[#1A1A1A] leading-[1.7]">
//                     Hidden Monkey started in 2019 when three travelers met in a cramped hostel in Manali and realized something was off about the whole backpacker accommodation scene.
//                   </p>
//                   <p>
//                     Most places fell into two camps: sterile budget hotels that felt like airports, or party hostels where you couldn't have a conversation without shouting. Nobody was building spaces for travelers who actually wanted to meet people <span className="italic">and</span> get some sleep.
//                   </p>
//                   <p>
//                     So we built it ourselves. Clean beds, fast WiFi, communal spaces designed for actual conversation, and staff who remember your name. The essentials done right, with zero pretension about being a "lifestyle brand" or whatever.
//                   </p>
                  
//                   <div className="bg-[#FAF8F5] p-8 rounded-2xl border-l-4 border-[#2D7A5F] my-10">
//                     <p className="text-[#1A1A1A] text-[18px] md:text-[19px] font-light leading-[1.7] italic">
//                       "We wanted spaces that felt less like a transaction and more like dropping by a friend's place who happens to live somewhere incredible."
//                     </p>
//                     <p className="text-[#6B7280] text-[14px] mt-4 tracking-wide">— Founding team, 2019</p>
//                   </div>
                  
//                   <p>
//                     Every location reflects where it is. Rishikesh has a different vibe than Bir, which feels nothing like Goa. We hire locals and long-term travelers who actually know the area—people who give recommendations because they mean it, not because they're getting a cut.
//                   </p>
//                   <p>
//                     Five years in, we've hosted thousands of travelers from 60+ countries. The best part? Watching friendships form at our dinner tables that turn into travel partnerships that last years. That's the whole point.
//                   </p>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-6 pt-8">
//                   <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                     <p className="text-[36px] font-light text-[#2D7A5F] mb-1">60+</p>
//                     <p className="text-[14px] text-[#6B7280] font-light">Countries represented</p>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                     <p className="text-[36px] font-light text-[#2D7A5F] mb-1">5K+</p>
//                     <p className="text-[14px] text-[#6B7280] font-light">Stories collected</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </section>
        
//         {/* Values Section */}
//         <section className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-white via-[#FAF8F5] to-white relative overflow-hidden">
//           <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#2D7A5F]/5 rounded-full blur-3xl"></div>
          
//           <Container className="max-w-[1400px] relative z-10">
//             <div className="max-w-3xl mb-16 md:mb-20">
//               <div className="w-12 h-[2px] bg-[#2D7A5F] mb-8"></div>
//               <h2 className="font-sans text-[#1A1A1A] text-[42px] md:text-[48px] font-normal leading-[1.15] tracking-tight mb-6">
//                 What drives us
//               </h2>
//               <p className="text-[#6B7280] text-[17px] md:text-[18px] font-light leading-[1.75]">
//                 Three principles that shape every decision we make
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
//               <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#E5E7EB]/50 hover:border-[#2D7A5F]/20">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D7A5F] to-[#2D7A5F]/50 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <div className="mb-8">
//                   <svg className="w-10 h-10 text-[#2D7A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                 </div>
                
//                 <h3 className="text-[#1A1A1A] text-[22px] font-sans mb-4 tracking-tight leading-tight">Community First</h3>
//                 <p className="text-[#6B7280] text-[16px] font-light leading-[1.75]">
//                   Hostels work when people connect. We design spaces and organize events that make meeting others natural and easy—not forced.
//                 </p>
//               </div>
              
//               <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#E5E7EB]/50 hover:border-[#2D7A5F]/20 md:mt-12">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D7A5F] to-[#2D7A5F]/50 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <div className="mb-8">
//                   <svg className="w-10 h-10 text-[#2D7A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
                
//                 <h3 className="text-[#1A1A1A] text-[22px] font-sans mb-4 tracking-tight leading-tight">Honest Value</h3>
//                 <p className="text-[#6B7280] text-[16px] font-light leading-[1.75]">
//                   Budget travel shouldn't mean compromising on what matters. Clean, comfortable, functional—we nail the basics without the unnecessary markup.
//                 </p>
//               </div>
              
//               <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#E5E7EB]/50 hover:border-[#2D7A5F]/20 md:col-span-2 lg:col-span-1 lg:mt-24">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D7A5F] to-[#2D7A5F]/50 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <div className="mb-8">
//                   <svg className="w-10 h-10 text-[#2D7A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
                
//                 <h3 className="text-[#1A1A1A] text-[22px] font-sans mb-4 tracking-tight leading-tight">Local Connection</h3>
//                 <p className="text-[#6B7280] text-[16px] font-light leading-[1.75]">
//                   Our staff are locals and long-term travelers who genuinely know the area. Real recommendations from real people, not tourist traps.
//                 </p>
//               </div>
//             </div>
//           </Container>
//         </section>
        
//         {/* Team Section */}
//         <section className="py-20 md:py-28 lg:py-36 bg-white">
//           <Container className="max-w-[1400px]">
//             <div className="max-w-2xl mb-16 md:mb-20">
//               <div className="w-12 h-[2px] bg-[#2D7A5F] mb-8"></div>
//               <h2 className="font-sans text-[#1A1A1A] text-[42px] md:text-[48px] font-normal leading-[1.15] tracking-tight mb-6">
//                 People behind<br />the places
//               </h2>
//               <p className="text-[#6B7280] text-[17px] md:text-[18px] font-light leading-[1.75]">
//                 Former travelers who traded their backpacks for hostel management
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
//               <div className="md:col-span-4 group">
//                 <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-6">
//                   <Image
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=85"
//                     alt="Rahul Sharma"
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-1000"
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     unoptimized
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>
//                 <div className="pl-2">
//                   <h3 className="text-[#1A1A1A] text-[22px] font-sans mb-2 tracking-tight">Rahul Sharma</h3>
//                   <p className="text-[#2D7A5F] text-[15px] font-medium mb-3 tracking-wide">Operations Manager</p>
//                   <p className="text-[#6B7280] text-[15px] font-light leading-relaxed">
//                     8 years managing hostels from Ladakh to Kerala. Knows every creaky floorboard and how to fix a shower at 2 AM.
//                   </p>
//                 </div>
//               </div>
              
//               <div className="md:col-span-4 group md:mt-12">
//                 <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-6">
//                   <Image
//                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=85"
//                     alt="Priya Desai"
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-1000"
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     unoptimized
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>
//                 <div className="pl-2">
//                   <h3 className="text-[#1A1A1A] text-[22px] font-sans mb-2 tracking-tight">Priya Desai</h3>
//                   <p className="text-[#2D7A5F] text-[15px] font-medium mb-3 tracking-wide">Community Manager</p>
//                   <p className="text-[#6B7280] text-[15px] font-light leading-relaxed">
//                     Organizes events that actually bring people together. If you've made a friend at our hostel, she probably introduced you.
//                   </p>
//                 </div>
//               </div>
              
//               <div className="md:col-span-4 group md:mt-24">
//                 <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-6">
//                   <Image
//                     src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=85"
//                     alt="Arjun Patel"
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-1000"
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     unoptimized
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>
//                 <div className="pl-2">
//                   <h3 className="text-[#1A1A1A] text-[22px] font-sans mb-2 tracking-tight">Arjun Patel</h3>
//                   <p className="text-[#2D7A5F] text-[15px] font-medium mb-3 tracking-wide">Local Experience Lead</p>
//                   <p className="text-[#6B7280] text-[15px] font-light leading-relaxed">
//                     Born in Rishikesh, backpacked through 30 countries, came home. His recommendations skip the tourist stuff.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </section>
        
//         {/* Stats Section */}
//         <section className="py-20 md:py-28 lg:py-36 bg-[#1A1A1A] text-white relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyRDdBNUYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          
//           <Container className="max-w-[1400px] relative z-10">
//             <div className="max-w-2xl mb-16 md:mb-20">
//               <h2 className="font-sans text-white text-[42px] md:text-[48px] font-normal leading-[1.15] tracking-tight mb-6">
//                 The numbers that<br />matter to us
//               </h2>
//               <p className="text-[#9CA3AF] text-[17px] md:text-[18px] font-light leading-[1.75]">
//                 Beyond the stats—this is what we're proud of
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//               <div className="relative">
//                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#2D7A5F]/10 rounded-full blur-2xl"></div>
//                 <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#2D7A5F]/50 transition-all duration-300 group">
//                   <p className="text-[56px] md:text-[64px] font-light text-[#2D7A5F] mb-3 leading-none group-hover:scale-105 transition-transform duration-300">3</p>
//                   <p className="text-[15px] text-[#E5E7EB] font-light tracking-wide">Destinations across India</p>
//                 </div>
//               </div>
              
//               <div className="relative md:mt-8">
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2D7A5F]/10 rounded-full blur-2xl"></div>
//                 <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#2D7A5F]/50 transition-all duration-300 group">
//                   <p className="text-[56px] md:text-[64px] font-light text-[#2D7A5F] mb-3 leading-none group-hover:scale-105 transition-transform duration-300">5K+</p>
//                   <p className="text-[15px] text-[#E5E7EB] font-light tracking-wide">Travelers who stayed with us</p>
//                 </div>
//               </div>
              
//               <div className="relative lg:mt-16">
//                 <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#2D7A5F]/10 rounded-full blur-2xl"></div>
//                 <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#2D7A5F]/50 transition-all duration-300 group">
//                   <p className="text-[56px] md:text-[64px] font-light text-[#2D7A5F] mb-3 leading-none group-hover:scale-105 transition-transform duration-300">4.8</p>
//                   <p className="text-[15px] text-[#E5E7EB] font-light tracking-wide">Average rating from guests</p>
//                 </div>
//               </div>
              
//               <div className="relative md:mt-8 lg:mt-24">
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#2D7A5F]/10 rounded-full blur-2xl"></div>
//                 <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#2D7A5F]/50 transition-all duration-300 group">
//                   <div className="flex items-baseline gap-1 mb-3">
//                     <p className="text-[56px] md:text-[64px] font-light text-[#2D7A5F] leading-none group-hover:scale-105 transition-transform duration-300">24</p>
//                     <span className="text-[32px] text-[#2D7A5F]/70 font-light">/7</span>
//                   </div>
//                   <p className="text-[15px] text-[#E5E7EB] font-light tracking-wide">Front desk availability</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-16 md:mt-20 text-center">
//               <p className="text-[#9CA3AF] text-[15px] font-light italic">
//                 "More than numbers—every stat represents a story, a connection, or a moment that mattered."
//               </p>
//             </div>
//           </Container>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }
