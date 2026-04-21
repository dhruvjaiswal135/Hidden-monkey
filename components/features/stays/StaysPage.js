'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RoomDetailModal from '@/components/modals/RoomDetailModal'

/* ─── Reveal hook ────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const [v, setV] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, v]
}

/* ─── Room data ──────────────────────────────────────────────── */
const ALL_ROOMS = [
  {
    id: 'mixed-dorm-6',
    name: 'Mixed Dorm · 6 Bed',
    category: 'dorm',
    tagline: 'Social, affordable, and full of good people.',
    description: 'Pod-style beds with privacy curtains, personal locker, and reading light. Our most-booked option for solo travelers.',
    price: 499,
    originalPrice: 799,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585399171635-76e0f6c7ad4a?w=900&auto=format&fit=crop&q=80',
    ],
    capacity: '1 per bed',
    bedType: 'Single pod',
    size: '40 sqft / pod',
    amenities: ['locker', 'curtain', 'light', 'charging', 'bathroom', 'wifi'],
    highlights: ['Pod-style beds', 'Privacy curtains', 'Daily housekeeping'],
    available: true,
    rating: 4.8,
    reviews: 234,
    locations: ['Varanasi', 'Darjeeling'],
    detailedDescription: [
      'Our Mixed Dorm is the heart of the Monkey House community. Share a space with travelers from around the world and make lasting friendships.',
      'Each bed has a personal locker, privacy curtain, and reading light. Shared bathrooms are cleaned throughout the day.',
    ],
    communityTags: ['Mostly solo travelers', 'Easy conversations', 'Social & vibrant'],
    houseRules: ['Quiet hours 11 PM – 7 AM', 'No food in dorms', 'Respect others privacy'],
    checkIn: '2:00 PM', checkOut: '11:00 AM',
  },
  {
    id: 'female-dorm-6',
    name: 'Female Only Dorm · 6 Bed',
    category: 'dorm',
    tagline: 'A safe, welcoming space designed for women.',
    description: 'Comfortable pod-style beds with extra privacy and security features. A supportive community of women travelers.',
    price: 549,
    originalPrice: 849,
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1612277795784-0d822ed70d8f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80',
    ],
    capacity: '1 per bed',
    bedType: 'Single pod',
    size: '40 sqft / pod',
    amenities: ['locker', 'curtain', 'light', 'charging', 'bathroom', 'female', 'wifi'],
    highlights: ['Women only', 'Keycard access', 'Vanity area'],
    available: true,
    rating: 4.9,
    reviews: 156,
    locations: ['Varanasi', 'Darjeeling'],
    detailedDescription: [
      'A dedicated space designed with women travelers in mind — safe, respected, and part of a supportive community.',
      'All pods feature personal lockers, blackout privacy curtains, and individual reading lights.',
    ],
    communityTags: ['Women-focused community', 'Safe & supportive', 'Friendly connections'],
    houseRules: ['Female guests only', 'Quiet hours 11 PM – 7 AM', 'No outside guests'],
    checkIn: '2:00 PM', checkOut: '11:00 AM',
  },
  {
    id: 'mixed-dorm-4',
    name: 'Mixed Dorm · 4 Bed',
    category: 'dorm',
    tagline: 'Intimate dorm vibes with more space per person.',
    description: 'Only 4 beds — more space, larger lockers, and an en-suite bathroom just for your dorm.',
    price: 649,
    originalPrice: 899,
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80',
    ],
    capacity: '1 per bed',
    bedType: 'Single pod',
    size: '50 sqft / pod',
    amenities: ['curtain', 'locker', 'light', 'charging', 'bathroom', 'wifi'],
    highlights: ['Only 4 beds', 'En-suite bathroom', 'Large lockers'],
    available: true,
    rating: 4.9,
    reviews: 112,
    locations: ['Varanasi', 'Darjeeling'],
    detailedDescription: [
      'The cozier dorm option — just 4 beds means more space, less noise, and a more intimate atmosphere.',
      'Includes an en-suite bathroom shared only between the 4 pod guests.',
    ],
    communityTags: ['Close-knit group', 'More personal space', 'Quieter vibe'],
    houseRules: ['Quiet hours 11 PM – 7 AM', 'Keep bathroom clean'],
    checkIn: '2:00 PM', checkOut: '11:00 AM',
  },
  {
    id: 'private-double',
    name: 'Private Double Room',
    category: 'private',
    tagline: 'Your own space, still part of the community.',
    description: 'Cozy private room with a comfortable double bed, private bathroom, and access to all community spaces.',
    price: 1499,
    originalPrice: 2199,
    images: [
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560185127-6a8a6dfd7b7b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&auto=format&fit=crop&q=80',
    ],
    capacity: '2 people',
    bedType: 'Queen bed',
    size: '180 sqft',
    amenities: ['bathroom', 'wifi', 'ac', 'charging', 'light'],
    highlights: ['Private bathroom', 'Queen bed', 'Work desk'],
    available: true,
    rating: 4.9,
    reviews: 89,
    locations: ['Varanasi', 'Darjeeling'],
    detailedDescription: [
      'Your own cozy room with a comfortable queen bed. Privacy without losing the hostel vibe.',
      'Includes a private attached bathroom, AC, fast WiFi, and access to all community spaces.',
    ],
    communityTags: ['Best for couples', 'Privacy + community', 'Work-friendly'],
    houseRules: ['Max 2 guests', 'No parties in rooms', 'Respect quiet hours'],
    checkIn: '2:00 PM', checkOut: '11:00 AM',
  },
  {
    id: 'deluxe-suite',
    name: 'Deluxe Private Suite',
    category: 'private',
    tagline: 'Premium comfort with the Monkey House spirit.',
    description: 'King bed, private balcony, mini bar, and stunning views. Our best room for those who want it all.',
    price: 2499,
    originalPrice: 3499,
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1679922603955-8d9b650ef796?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80',
    ],
    capacity: '2 people',
    bedType: 'King bed',
    size: '280 sqft',
    amenities: ['bathroom', 'wifi', 'ac', 'charging', 'towel', 'kitchen'],
    highlights: ['King bed', 'Private balcony', 'Mini bar & coffee'],
    available: true,
    rating: 5.0,
    reviews: 45,
    locations: ['Darjeeling'],
    detailedDescription: [
      'Our most spacious room with premium amenities — king bed, private balcony with stunning views, mini bar, coffee maker.',
      'Perfect for couples seeking luxury comfort while still experiencing the Monkey House community.',
    ],
    communityTags: ['Luxury comfort', 'Balcony views', 'Premium amenities'],
    houseRules: ['Max 2 guests', 'Early check-in available', 'Room service available'],
    checkIn: '1:00 PM', checkOut: '12:00 PM',
  },
]

const FILTERS = [
  { id: 'all', label: 'All rooms' },
  { id: 'dorm', label: 'Dorms' },
  { id: 'private', label: 'Private rooms' },
]

const LOCATIONS = [
  { id: 'all', label: 'All locations' },
  { id: 'Darjeeling', label: 'Darjeeling' },
  { id: 'Varanasi', label: 'Varanasi' },
]

const FAQ = [
  { q: 'What time is check-in and check-out?', a: 'Check-in from 2:00 PM, check-out by 11:00 AM. Early/late arrangements possible based on availability.' },
  { q: 'Are towels and linens provided?', a: 'Fresh linens are included for all guests. Towels come with private rooms and are available for rent in dorms (₹50).' },
  { q: 'Can I store luggage before check-in?', a: 'Yes — secure luggage storage is available at no charge for all guests.' },
  { q: 'Is there a kitchen available?', a: 'Our community kitchen is open 24/7 with fridge, stove, microwave, and utensils. Please clean up after use.' },
  { q: "What's your cancellation policy?", a: 'Free cancellation up to 48 hours before check-in. Within 48 hours the first night is non-refundable.' },
]

function StaysRoomCard({ room, index, onOpen }) {
  const discount = Math.round((1 - room.price / room.originalPrice) * 100)
  return (
    <article
      onClick={() => onOpen(room)}
      className="group cursor-pointer bg-white rounded-[20px] overflow-hidden border border-[#E6E4DF] hover:border-[#128790]/30 transition-all duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 flex flex-col"
    >
      <div className="p-1.5 pb-0">
        <div className="relative h-[160px] md:h-[180px] overflow-hidden rounded-[14px]">
          <Image
            src={room.images[0]}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Top badges */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <span className={`text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-widest ${
              room.category === 'dorm' ? 'bg-[#128790] text-white' : 'bg-[#FBB11A] text-[#1E1F1C]'
            }`}>
              {room.category === 'dorm' ? 'Dorm' : 'Private'}
            </span>
            {discount >= 20 && (
              <span className="text-[9px] font-bold px-2 py-1 rounded-md bg-emerald-500 text-white shadow-sm">
                -{discount}%
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-md px-2 py-1 shadow-sm">
            <svg className="w-2.5 h-2.5 text-[#FBB11A]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-[10px] font-bold text-[#1E1F1C]">{room.rating}</span>
          </div>

          {/* Photo count */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/40 backdrop-blur-sm border border-white/15 rounded-md px-2 py-1">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white text-[9px] font-medium">{room.images.length}</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-[16px] font-bold text-[#1E1F1C] mb-1 group-hover:text-[#128790] transition-colors leading-[1.2]">
          {room.name}
        </h3>
        <p className="text-[12px] text-[#6B665E] font-light mb-3 line-clamp-2 leading-relaxed flex-1">
          {room.tagline}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between border-t border-[#E6E4DF] pt-3">
          <div className="flex items-center gap-2 text-[10px] text-[#9A948C]">
            <span>{room.capacity}</span>
            <span className="w-1 h-1 rounded-full bg-[#E6E4DF]"></span>
            <span>{room.size}</span>
          </div>
          
          <div className="text-right">
             <div className="flex flex-col">
               {room.originalPrice && (
                 <span className="text-[9px] text-[#9A948C] line-through leading-none">&#8377;{room.originalPrice}</span>
               )}
               <span className="text-[#1E1F1C] font-bold text-[14px] leading-tight">&#8377;{room.price}<span className="text-[10px] font-normal text-[#6B665E]">/nt</span></span>
             </div>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ─── Main page ──────────────────────────────────────────────── */
export default function StaysPage() {
  const [filter, setFilter] = useState('all')
  const [location, setLocation] = useState('all')
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [openFaq, setOpenFaq] = useState(null)
  const [heroRef, heroVisible] = useReveal(0.05)
  const today = new Date().toISOString().split('T')[0]

  const filtered = ALL_ROOMS.filter(r => {
    const catOk = filter === 'all' || r.category === filter
    const locOk = location === 'all' || r.locations.includes(location)
    return catOk && locOk
  })

  const openModal = (room) => { setSelectedRoom(room); setModalOpen(true) }
  const closeModal = () => { setModalOpen(false); setSelectedRoom(null) }

  return (
    <>
      {/* ─── CUTE COMPACT HERO ─── */}
      <section ref={heroRef} className="pt-12 pb-8 bg-[#FBFBF9] border-b border-[#E6E4DF]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className={`max-w-2xl transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-[2px] bg-[#128790]"></span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">
                  Book your stay
                </span>
              </div>
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.02em] mb-4">
                Find your perfect <span className="text-[#FBB11A]">space.</span>
              </h1>
              <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light leading-relaxed max-w-xl">
                From social dorms to private retreats — every room is designed for comfort, connection, and the best sleep of your trip.
              </p>
            </div>

            {/* ─── CUTE BOOKING WIDGET ─── */}
            {/*  */}
          </div>
        </div>
      </section>

      {/* ─── CUTE FILTER BAR ─── */}
      <section className="py-4 bg-white border-b border-[#E6E4DF] sticky top-[60px] z-40 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-3 md:items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 md:pb-0">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                  filter === f.id
                    ? 'bg-[#128790] text-white border-[#128790]'
                    : 'bg-white text-[#6B665E] border-[#E6E4DF] hover:border-[#128790]/50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-[#9A948C]">
            {filtered.length} room{filtered.length !== 1 ? 's' : ''} available
          </div>
        </div>
      </section>

      {/* ─── ROOMS GRID ─── */}
      <section className="bg-[#FBFBF9] py-10 min-h-[50vh]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {filtered.map((room, i) => (
                <StaysRoomCard key={room.id} room={room} index={i} onOpen={openModal} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E6E4DF]">
              <div className="text-3xl mb-3">🛌</div>
              <h3 className="text-[18px] font-bold text-[#1E1F1C] mb-1">No rooms match</h3>
              <p className="text-[#6B665E] text-[13px] mb-4">Try a different location or room type.</p>
              <button
                onClick={() => { setFilter('all'); setLocation('all') }}
                className="px-4 py-2 bg-[#FBFBF9] border border-[#E6E4DF] text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── GROUP BOOKING ─── */}
      <section className="bg-white py-12 border-t border-[#E6E4DF]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="bg-[#128790] rounded-[24px] overflow-hidden grid md:grid-cols-2 gap-0 group">
            <div className="px-8 py-10 lg:px-12 lg:py-12 flex flex-col justify-center relative z-10">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-[20px] transition-transform duration-700 group-hover:scale-150" />
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-md w-fit mb-4">
                Group rates
              </span>
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#FBB11A] leading-[1] mb-3">
                Traveling with<br />a group?
              </h2>
              <p className="text-white/90 text-[13px] font-light leading-relaxed mb-6">
                Special rates for 5+ people. Mix dorms and private rooms. We'll help you find the perfect combination.
              </p>
              <ul className="space-y-2 mb-8">
                {['Group discounts up to 20%', 'Private event space available', 'Customizable experience packages'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90 text-[12px] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#FBB11A]/20 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#FBB11A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 w-fit px-5 py-2.5 bg-white text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#FBFBF9] transition-colors"
              >
                Inquire now
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
            <div className="relative min-h-[240px] md:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80"
                alt="Group travelers"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#128790] to-transparent opacity-80 md:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#FBFBF9] py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">

          <div className="flex items-end justify-between mb-10 gap-6">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.02em]">
              Frequently asked<br />questions
            </h2>
          </div>

          <div className="divide-y divide-[#E6E4DF]">
            {FAQ.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="group w-full py-5 flex items-start justify-between gap-6 text-left"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[11px] font-bold text-[#128790] tabular-nums mt-1 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[14px] font-bold leading-snug transition-colors duration-200 ${
                      openFaq === i ? 'text-[#FBB11A]' : 'text-[#1E1F1C] group-hover:text-[#FBB11A]'
                    }`}>
                      {f.q}
                    </span>
                  </div>
                  <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    openFaq === i
                      ? 'bg-[#128790] border-[#128790] text-white'
                      : 'border-[#E6E4DF] text-[#6B665E] group-hover:border-[#128790] group-hover:text-[#128790]'
                  }`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFaq === i
                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4"/>
                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16"/>}
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === i ? 'max-h-48 pb-5' : 'max-h-0'
                }`}>
                  <p className="pl-9 text-[13px] text-[#6B665E] font-light leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-white py-12 border-t border-[#E6E4DF]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#128790] text-[10px] uppercase tracking-widest font-bold mb-3">Still deciding?</p>
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#1E1F1C] mb-4 leading-[1]">We're happy to help you choose.</h2>
          <p className="text-[#6B665E] text-[13px] font-light mb-8 max-w-sm mx-auto">Every room type has its vibe. Message us and we'll match you to the perfect space.</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/contact" className="px-6 py-2.5 bg-[#1E1F1C] hover:bg-[#128790] text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors">
              Message us
            </Link>
            <Link href="/" className="px-6 py-2.5 bg-[#FBFBF9] border border-[#E6E4DF] hover:bg-white text-[#6B665E] text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MODAL ─── */}
      <RoomDetailModal room={selectedRoom} isOpen={modalOpen} onClose={closeModal} />
    </>
  )
}
