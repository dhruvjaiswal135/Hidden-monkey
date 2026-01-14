// import Image from 'next/image'
// import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer'
// import Container from '@/components/ui/Container'
// import Section from '@/components/ui/Section'
// import Card, { CardHeader, CardBody, CardFooter } from '@/components/ui/Card'
// import Button from '@/components/ui/Button'
// import Badge from '@/components/ui/Badge'
// import { generateMetadata as generateMeta, JsonLd, generateBreadcrumbSchema } from '@/lib/seo'
// import { ROOM_TYPES } from '@/lib/constants'
// import { formatCurrency } from '@/lib/utils'

// /**
//  * Rooms Page Metadata
//  */
// export const metadata = generateMeta({
//   title: 'Our Rooms',
//   description: 'From shared dorms to private rooms - find your perfect space. Budget-friendly accommodation for backpackers and travelers across India.',
//   path: '/rooms',
//   keywords: ['hostel rooms', 'dorm beds', 'private rooms', 'backpacker accommodation', 'budget travel'],
// })

// /**
//  * Rooms Page
//  * Detailed room listings
//  */
// export default function RoomsPage() {
//   const breadcrumbSchema = generateBreadcrumbSchema([
//     { name: 'Home', url: 'https://hiddenmonkeyhotel.com' },
//     { name: 'Rooms', url: 'https://hiddenmonkeyhotel.com/rooms' },
//   ])
  
//   return (
//     <>
//       <JsonLd schema={breadcrumbSchema} />
//       <Header />
//       <main>
//         {/* Page Header */}
//         <section className="py-12 md:py-16 bg-white border-b border-gray-200">
//           <Container className="max-w-[1400px]">
//             <div className="max-w-3xl">
//               <div className="inline-flex items-center gap-2 bg-[#2D7A5F]/10 text-[#2D7A5F] px-3 py-1.5 rounded-full text-[12px] font-medium mb-3">
//                 <span>🏕️</span>
//                 <span>Find Your Perfect Space</span>
//               </div>
//               <h1 className="font-sans text-[#1A1A1A] text-[36px] md:text-[48px] font-normal mb-3 leading-tight">
//                 Beds, Bunks & Private Rooms
//               </h1>
//               <p className="text-[#6B7280] text-[15px] leading-relaxed">
//                 Whether you're looking to meet fellow travelers in a shared dorm or need some quiet time in a private room, we've got you covered. All at prices that won't break your travel budget.
//               </p>
//             </div>
//           </Container>
//         </section>
        
//         {/* Room Listings */}
//         <section className="py-12 md:py-16 bg-[#FAFAFA]">
//           <Container className="max-w-[1400px]">
//             <div className="space-y-6">
//               {ROOM_TYPES.map((room, index) => {
//                 // Custom content for each room type
//                 const roomContent = {
//                   0: {
//                     badge: '🌟 Most Popular',
//                     badgeColor: 'bg-[#2D7A5F] text-white',
//                     title: 'Mixed Dorm',
//                     subtitle: 'Make friends, share stories',
//                     description: 'Perfect for solo travelers who love meeting new people. Our mixed dorms are where friendships begin - cozy bunks, individual lockers, reading lights, and USB charging ports. The common vibe? Always lively, never lonely.',
//                     vibe: 'Social & Energetic',
//                     travelers: '156 travelers stayed here last month'
//                   },
//                   1: {
//                     badge: '🛡️ Safe Space',
//                     badgeColor: 'bg-purple-600 text-white',
//                     title: 'Female-Only Dorm',
//                     subtitle: 'Your sanctuary on the road',
//                     description: 'Exclusively for female travelers seeking comfort and community. Privacy curtains, secure access, and a supportive environment. Share travel tips, plan adventures together, or just enjoy peaceful downtime with like-minded women.',
//                     vibe: 'Safe & Supportive',
//                     travelers: '89 women travelers stayed here last month'
//                   },
//                   2: {
//                     badge: '🤫 Quiet Vibes',
//                     badgeColor: 'bg-blue-600 text-white',
//                     title: 'Private Room',
//                     subtitle: 'Your own space, hostel prices',
//                     description: 'Need some me-time? Our private rooms give you the peace you need without the hotel price tag. Perfect for couples, close friends, or solo travelers who want to recharge. Still have full access to our social spaces when you\'re ready to mingle.',
//                     vibe: 'Peaceful & Private',
//                     travelers: '73 travelers stayed here last month'
//                   },
//                   3: {
//                     badge: '👨‍👩‍👧‍👦 Group Ready',
//                     badgeColor: 'bg-orange-600 text-white',
//                     title: 'Family Room',
//                     subtitle: 'Space for the whole crew',
//                     description: 'Traveling with family or a small group? This room is all yours. Multiple beds, more space, and all the hostel perks - kitchen access, social areas, and local tips. Budget-friendly adventure for everyone, regardless of age.',
//                     vibe: 'Spacious & Flexible',
//                     travelers: '42 groups stayed here last month'
//                   }
//                 }[index]

//                 return (
//                   <article 
//                     key={room.id}
//                     id={room.slug}
//                     className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors"
//                   >
//                     <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-0">
//                       {/* Image */}
//                       <div className="relative h-[300px] sm:h-[360px] lg:h-[420px] overflow-hidden">
//                         <Image
//                           src={room.image}
//                           alt={roomContent.title}
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 1024px) 100vw, 60vw"
//                           quality={85}
//                           unoptimized
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
//                         {/* Badge */}
//                         <div className={`absolute top-4 left-4 ${roomContent.badgeColor} px-3 py-1.5 rounded-lg text-[12px] font-medium shadow-lg`}>
//                           {roomContent.badge}
//                         </div>

//                         {/* Price Tag */}
//                         <div className="absolute top-4 right-4 bg-white text-[#1A1A1A] px-3 py-1.5 rounded-lg text-[13px] font-semibold shadow-lg">
//                           {formatCurrency(room.price)}<span className="text-[11px] font-normal text-gray-500">/night</span>
//                         </div>

//                         {/* Popularity Indicator */}
//                         <div className="absolute bottom-4 left-4 right-4">
//                           <div className="bg-black/40 backdrop-blur-md text-white px-3 py-2 rounded-lg text-[11px] flex items-center gap-2">
//                             <span>🔥</span>
//                             <span>{roomContent.travelers}</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Content */}
//                       <div className="p-6 lg:p-7 flex flex-col">
//                         <div className="mb-3">
//                           <h2 className="font-sans text-[#1A1A1A] text-[26px] sm:text-[30px] font-normal mb-1 leading-tight">
//                             {roomContent.title}
//                           </h2>
//                           <p className="text-[#2D7A5F] text-[13px] font-medium">
//                             {roomContent.subtitle}
//                           </p>
//                         </div>
                        
//                         <p className="text-[#6B7280] text-[13px] mb-4 leading-relaxed">
//                           {roomContent.description}
//                         </p>
                        
//                         {/* Vibe Badge */}
//                         <div className="inline-flex items-center gap-1.5 bg-[#FAFAFA] text-[#1A1A1A] px-3 py-1.5 rounded-lg text-[11px] font-medium mb-4 border border-gray-200 self-start">
//                           <span>✨</span>
//                           <span>Vibe: {roomContent.vibe}</span>
//                         </div>
                        
//                         {/* Quick Info */}
//                         <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200">
//                           <div>
//                             <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Space</div>
//                             <div className="text-[#1A1A1A] text-[13px] font-medium">{room.size}</div>
//                           </div>
//                           <div>
//                             <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Sleeps</div>
//                             <div className="text-[#1A1A1A] text-[13px] font-medium">{room.occupancy}</div>
//                           </div>
//                           <div>
//                             <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Setup</div>
//                             <div className="text-[#1A1A1A] text-[13px] font-medium">{room.beds}</div>
//                           </div>
//                         </div>
                        
//                         {/* Features */}
//                         <div className="mb-5">
//                           <h3 className="text-[#1A1A1A] text-[11px] uppercase tracking-wider mb-2.5 font-semibold">You Get</h3>
//                           <div className="grid grid-cols-2 gap-x-3 gap-y-2">
//                             {room.features.slice(0, 6).map((feature, featureIndex) => (
//                               <div key={featureIndex} className="flex items-center gap-2 text-[12px] text-gray-600">
//                                 <span className="text-[#2D7A5F]">✓</span>
//                                 <span>{feature}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
                        
//                         {/* Buttons */}
//                         <div className="flex gap-2 mt-auto">
//                           <a
//                             href="/contact"
//                             className="flex-1 bg-[#2D7A5F] text-white px-5 py-3 rounded-lg text-[14px] font-medium hover:bg-[#246B51] transition-colors text-center"
//                           >
//                             Reserve This Space
//                           </a>
//                           <a
//                             href="/contact"
//                             className="px-5 py-3 bg-white text-[#1A1A1A] rounded-lg text-[14px] font-medium border border-gray-300 hover:border-gray-400 transition-colors"
//                           >
//                             <span className="hidden sm:inline">More Info</span>
//                             <span className="sm:hidden">Info</span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 )
//               })}
//             </div>
//           </Container>
//         </section>
        
//         {/* Additional Info */}
//         <section className="py-12 md:py-16 bg-white border-t border-gray-200">
//           <Container className="max-w-[1400px]">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//               {/* Left - What's Included */}
//               <div>
//                 <h2 className="font-sans text-[#1A1A1A] text-[28px] font-normal mb-2">Every stay includes</h2>
//                 <p className="text-[#6B7280] text-[13px] mb-6">The essentials, sorted</p>
//                 <div className="space-y-3">
//                   <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-lg border border-gray-200">
//                     <span className="text-[20px]">📶</span>
//                     <div>
//                       <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-0.5">Fast WiFi Everywhere</h3>
//                       <p className="text-[#6B7280] text-[12px]">Upload those travel pics, video call home, or catch up on work</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-lg border border-gray-200">
//                     <span className="text-[20px]">🔑</span>
//                     <div>
//                       <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-0.5">24/7 Access</h3>
//                       <p className="text-[#6B7280] text-[12px]">Early flight or late-night adventure? Come and go as you please</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-lg border border-gray-200">
//                     <span className="text-[20px]">🛏️</span>
//                     <div>
//                       <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-0.5">Fresh & Clean</h3>
//                       <p className="text-[#6B7280] text-[12px]">Clean linens, towels on request, and rooms cleaned daily</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-lg border border-gray-200">
//                     <span className="text-[20px]">🔒</span>
//                     <div>
//                       <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-0.5">Secure Lockers</h3>
//                       <p className="text-[#6B7280] text-[12px]">Keep your valuables safe (just bring your own padlock)</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right - Hostel Perks */}
//               <div>
//                 <h2 className="font-sans text-[#1A1A1A] text-[28px] font-normal mb-2">Hostel perks</h2>
//                 <p className="text-[#6B7280] text-[13px] mb-6">Because you're here for more than just a bed</p>
//                 <div className="space-y-3">
//                   <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-lg border border-gray-200">
//                     <span className="text-[20px]">🍳</span>
//                     <div>
//                       <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-0.5">Shared Kitchen</h3>
//                       <p className="text-[#6B7280] text-[12px]">Cook your own meals and save some cash for adventures</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-lg border border-gray-200">
//                     <span className="text-[20px]">☕</span>
//                     <div>
//                       <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-0.5">Common Hangout Spaces</h3>
//                       <p className="text-[#6B7280] text-[12px]">Meet travelers, swap stories, or just chill with a book</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-lg border border-gray-200">
//                     <span className="text-[20px]">🗺️</span>
//                     <div>
//                       <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-0.5">Local Tips & Tours</h3>
//                       <p className="text-[#6B7280] text-[12px]">Our staff knows all the hidden spots tourists miss</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-lg border border-gray-200">
//                     <span className="text-[20px]">🎸</span>
//                     <div>
//                       <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-0.5">Events & Activities</h3>
//                       <p className="text-[#6B7280] text-[12px]">Movie nights, jam sessions, and group treks - never a dull moment</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom CTA */}
//             <div className="mt-10 p-6 bg-[#2D7A5F]/5 border border-[#2D7A5F]/20 rounded-2xl">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                 <div>
//                   <h3 className="text-[#1A1A1A] text-[18px] font-medium mb-1">Not sure which room to pick?</h3>
//                   <p className="text-[#6B7280] text-[13px]">Message us and we'll help you find the perfect fit for your travel style</p>
//                 </div>
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center px-5 py-2.5 bg-[#2D7A5F] text-white rounded-lg text-[14px] font-medium hover:bg-[#246B51] transition-colors whitespace-nowrap"
//                 >
//                   Get Help Choosing
//                 </a>
//               </div>
//             </div>
//           </Container>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }
