import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import { generateMetadata as generateMeta, JsonLd, generateBreadcrumbSchema } from '@/lib/seo'
import { ROOM_TYPES } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'
import RoomCard from '@/components/sections/RoomCard'

/**
 * Rooms Page Metadata
 */
export const metadata = generateMeta({
  title: 'Our Rooms',
  description: 'From shared dorms to private rooms - find your perfect space. Budget-friendly accommodation for backpackers and travelers across India.',
  path: '/rooms',
  keywords: ['hostel rooms', 'dorm beds', 'private rooms', 'backpacker accommodation', 'budget travel'],
})

/**
 * Rooms Page
 * Detailed room listings
 */
export default function RoomsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://hiddenmonkeyhotel.com' },
    { name: 'Rooms', url: 'https://hiddenmonkeyhotel.com/rooms' },
  ])
  
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Header />
      <main>
        {/* Page Header */}
        
          <section 
          className="py-12 md:py-12 bg-cover bg-fixed bg-center relative"
          style={{
            backgroundImage: 'url(/images/rooms-hero.png)',
            // minHeight: '100vh'
          }}
        >
          {/* Overlay for better content readability */}
          <div className="absolute inset-0 bg-white/35 backdrop-blur-sm"></div>
          <Container className="max-w-[1400px] relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#2D7A5F]/10 text-[#2D7A5F] px-3 py-1.5 rounded-full text-[12px] font-medium mb-3">
                <span>🏕️</span>
                <span>Find Your Perfect Space</span>
              </div>
              <h1 className="font-sans text-[#1A1A1A] text-[36px] md:text-[48px] font-normal mb-3 leading-tight">
                Beds, Bunks & Private Rooms
              </h1>
              <p className="text-[#6B7280] text-[15px] leading-relaxed">
                Whether you're looking to meet fellow travelers in a shared dorm or need some quiet time in a private room, we've got you covered. All at prices that won't break your travel budget.
              </p>
            </div>
          </Container>
        </section>
        
        {/* Room Listings */}
        <section 
          className="py-12 md:py-12 bg-cover bg-fixed bg-center relative"
          style={{
            backgroundImage: 'url(/images/rooms-hero.png)',
            minHeight: '100vh'
          }}
        >
          {/* Overlay for better content readability */}
          <div className="absolute inset-0 bg-white/35 backdrop-blur-sm"></div>
          
          <Container className="max-w-[1400px] relative z-10">
            <div className="space-y-6">
              {ROOM_TYPES.map((room, index) => {
                // Custom content for each room type
                const allRoomContent = [
                  {
                    badge: '🌟 Most Popular',
                    badgeColor: 'bg-[#2D7A5F] text-white',
                    title: 'Mixed Dorm',
                    subtitle: 'Make friends, share stories',
                    description: 'Perfect for solo travelers who love meeting new people. Our mixed dorms are where friendships begin - cozy bunks, individual lockers, reading lights, and USB charging ports. The common vibe? Always lively, never lonely.',
                    vibe: 'Social & Energetic',
                    travelers: '156 travelers stayed here last month',
                    gallery: [
                      ROOM_TYPES[0].image,
                      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80'
                    ]
                  },
                  {
                    badge: '🛡️ Safe Space',
                    badgeColor: 'bg-purple-600 text-white',
                    title: 'Female-Only Dorm',
                    subtitle: 'Your sanctuary on the road',
                    description: 'Exclusively for female travelers seeking comfort and community. Privacy curtains, secure access, and a supportive environment. Share travel tips, plan adventures together, or just enjoy peaceful downtime with like-minded women.',
                    vibe: 'Safe & Supportive',
                    travelers: '89 women travelers stayed here last month',
                    gallery: [
                      ROOM_TYPES[1].image,
                      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80'
                    ]
                  },
                  {
                    badge: '🤫 Quiet Vibes',
                    badgeColor: 'bg-blue-600 text-white',
                    title: 'Private Room',
                    subtitle: 'Your own space, hostel prices',
                    description: 'Need some me-time? Our private rooms give you the peace you need without the hotel price tag. Perfect for couples, close friends, or solo travelers who want to recharge. Still have full access to our social spaces when you\'re ready to mingle.',
                    vibe: 'Peaceful & Private',
                    travelers: '73 travelers stayed here last month',
                    gallery: [
                      ROOM_TYPES[2].image,
                      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80'
                    ]
                  },
                  {
                    badge: '👨‍👩‍👧‍👦 Group Ready',
                    badgeColor: 'bg-orange-600 text-white',
                    title: 'Family Room',
                    subtitle: 'Space for the whole crew',
                    description: 'Traveling with family or a small group? This room is all yours. Multiple beds, more space, and all the hostel perks - kitchen access, social areas, and local tips. Budget-friendly adventure for everyone, regardless of age.',
                    vibe: 'Spacious & Flexible',
                    travelers: '42 groups stayed here last month',
                    gallery: [
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80'
                    ]
                  }
                ]
                
                const roomContent = {
                  0: {
                    badge: '🌟 Most Popular',
                    badgeColor: 'bg-[#2D7A5F] text-white',
                    title: 'Mixed Dorm',
                    subtitle: 'Make friends, share stories',
                    description: 'Perfect for solo travelers who love meeting new people. Our mixed dorms are where friendships begin - cozy bunks, individual lockers, reading lights, and USB charging ports. The common vibe? Always lively, never lonely.',
                    vibe: 'Social & Energetic',
                    travelers: '156 travelers stayed here last month',
                    gallery: [
                      room.image,
                      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80'
                    ]
                  },
                  1: {
                    badge: '🛡️ Safe Space',
                    badgeColor: 'bg-purple-600 text-white',
                    title: 'Female-Only Dorm',
                    subtitle: 'Your sanctuary on the road',
                    description: 'Exclusively for female travelers seeking comfort and community. Privacy curtains, secure access, and a supportive environment. Share travel tips, plan adventures together, or just enjoy peaceful downtime with like-minded women.',
                    vibe: 'Safe & Supportive',
                    travelers: '89 women travelers stayed here last month',
                    gallery: [
                      room.image,
                      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80'
                    ]
                  },
                  2: {
                    badge: '🤫 Quiet Vibes',
                    badgeColor: 'bg-blue-600 text-white',
                    title: 'Private Room',
                    subtitle: 'Your own space, hostel prices',
                    description: 'Need some me-time? Our private rooms give you the peace you need without the hotel price tag. Perfect for couples, close friends, or solo travelers who want to recharge. Still have full access to our social spaces when you\'re ready to mingle.',
                    vibe: 'Peaceful & Private',
                    travelers: '73 travelers stayed here last month',
                    gallery: [
                      room.image,
                      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80'
                    ]
                  },
                  3: {
                    badge: '👨‍👩‍👧‍👦 Group Ready',
                    badgeColor: 'bg-orange-600 text-white',
                    title: 'Family Room',
                    subtitle: 'Space for the whole crew',
                    description: 'Traveling with family or a small group? This room is all yours. Multiple beds, more space, and all the hostel perks - kitchen access, social areas, and local tips. Budget-friendly adventure for everyone, regardless of age.',
                    vibe: 'Spacious & Flexible',
                    travelers: '42 groups stayed here last month',
                    gallery: [
                      room.image,
                      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80'
                    ]
                  }
                }[index]

                return (
                  <RoomCard
                    key={room.id}
                    room={room}
                    roomContent={roomContent}
                    allRoomTypes={allRoomContent}
                    currentIndex={index}
                  />
                )
              })}
            </div>
          </Container>
        </section>
        
        {/* What We Offer */}
        <section className="py-12 md:py-14 bg-white border-t border-gray-200">
          <Container className="max-w-[1400px]">
            <h2 className="text-[#1A1A1A] text-[28px] font-normal mb-8">What We Offer</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Hot water</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Card Payment Accepted</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Common hangout area</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Breakfast (Extra)</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Parking (private)</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Indoor Games</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Laundry Services (Extra)</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Water Dispenser</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Cafe</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Storage Facility</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Charging Points</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Free Wi-Fi</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Air-conditioning</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">In-house Activities</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">UPI Payment Accepted</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#1A1A1A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-[#1A1A1A] text-[14px]">Power Backup</span>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-5 bg-[#FAFAFA] border border-gray-200 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-[#1A1A1A] text-[16px] font-medium mb-1">Not sure which room to pick?</h3>
                  <p className="text-[#6B7280] text-[13px]">Message us and we'll help you find the perfect fit</p>
                </div>
                <a
                  href="/contact"
                  className="px-5 py-2.5 bg-[#2D7A5F] text-white rounded-lg text-[13px] font-medium hover:bg-[#246B51] transition-colors whitespace-nowrap"
                >
                  Get Help
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
