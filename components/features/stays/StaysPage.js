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
    locations: ['Varanasi', 'Rishikesh', 'Goa', 'Darjeeling'],
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
    locations: ['Varanasi', 'Rishikesh', 'Goa'],
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
    locations: ['Varanasi', 'Goa'],
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
    locations: ['Goa', 'Rishikesh'],
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
    locations: ['Goa', 'Darjeeling'],
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
  { id: 'Varanasi', label: 'Varanasi' },
  { id: 'Rishikesh', label: 'Rishikesh' },
  { id: 'Goa', label: 'Goa' },
  { id: 'Darjeeling', label: 'Darjeeling' },
]

const FAQ = [
  { q: 'What time is check-in and check-out?', a: 'Check-in from 2:00 PM, check-out by 11:00 AM. Early/late arrangements possible based on availability.' },
  { q: 'Are towels and linens provided?', a: 'Fresh linens are included for all guests. Towels come with private rooms and are available for rent in dorms (₹50).' },
  { q: 'Can I store luggage before check-in?', a: 'Yes — secure luggage storage is available at no charge for all guests.' },
  { q: 'Is there a kitchen available?', a: 'Our community kitchen is open 24/7 with fridge, stove, microwave, and utensils. Please clean up after use.' },
  { q: "What's your cancellation policy?", a: 'Free cancellation up to 48 hours before check-in. Within 48 hours the first night is non-refundable.' },
]

/* ─── Room card for Stays page ─────────────────────────────── */
function StaysRoomCard({ room, index, onOpen }) {
  const discount = Math.round((1 - room.price / room.originalPrice) * 100)
  return (
    <article
      onClick={() => onOpen(room)}
      className="group cursor-pointer bg-white rounded-[22px] overflow-hidden border border-neutral-100 hover:border-sunset-gold/40 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
            room.category === 'dorm' ? 'bg-sky-500 text-white' : 'bg-violet-500 text-white'
          }`}>
            {room.category === 'dorm' ? 'Dorm' : 'Private'}
          </span>
          {discount >= 20 && (
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-500 text-white">
              {discount}% off
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
          <svg className="w-3 h-3 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span className="text-[11px] font-semibold text-charcoal">{room.rating}</span>
          <span className="text-[10px] text-charcoal-muted">({room.reviews})</span>
        </div>

        {/* Price */}
        <div className="absolute bottom-3.5 right-3.5">
          <div className="bg-charcoal/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-right">
            {room.originalPrice && (
              <span className="block text-[9px] text-white/50 line-through leading-none">&#8377;{room.originalPrice}</span>
            )}
            <span className="text-white font-bold text-sm leading-tight">&#8377;{room.price}<span className="text-[10px] font-normal text-white/60">/night</span></span>
          </div>
        </div>

        {/* Photo count */}
        <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1 bg-black/30 border border-white/15 rounded-full px-2 py-1">
          <svg className="w-3 h-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-white text-[10px]">{room.images.length}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-[16px] font-bold text-charcoal mb-1 group-hover:text-sunset-gold transition-colors leading-snug">
          {room.name}
        </h3>
        <p className="text-[13px] text-charcoal-muted mb-3.5 line-clamp-2 leading-relaxed">{room.tagline}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {room.highlights.slice(0, 3).map((h, i) => (
            <span key={i} className="text-[11px] text-charcoal-muted bg-[#F4EFEA] px-2.5 py-0.5 rounded-full">
              {h}
            </span>
          ))}
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-charcoal-muted">
            <span>{room.capacity}</span>
            <span className="text-neutral-200">·</span>
            <span>{room.size}</span>
          </div>
          <span className="text-[12px] font-semibold text-sunset-gold flex items-center gap-1 group-hover:gap-2 transition-all">
            View room
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </span>
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
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative bg-charcoal overflow-hidden -mt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1600&auto=format&fit=crop&q=60"
            alt=""
            fill
            className="object-cover opacity-25"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-0">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/15 text-white text-[11px] tracking-[0.18em] uppercase rounded-full mb-6">
              Book your stay
            </span>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold text-white leading-[1.1] tracking-tight mb-5">
              Find your perfect<br />
              <span className="text-sunset-gold">space</span> in our community
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              From social dorms to private retreats — every room is designed for comfort, connection, and the best sleep of your trip.
            </p>
          </div>

          {/* ─── BOOKING WIDGET ─── */}
          <div className={`max-w-3xl mx-auto transition-all duration-700 delay-150 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-[20px] p-1 shadow-2xl mb-0 relative top-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
                <div className="px-4 py-3.5">
                  <label className="block text-[10px] font-bold text-charcoal uppercase tracking-wider mb-1.5">Location</label>
                  <select
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full bg-transparent text-[13.5px] text-charcoal font-medium focus:outline-none cursor-pointer"
                  >
                    {LOCATIONS.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
                  </select>
                </div>
                <div className="px-4 py-3.5 border-l border-neutral-100">
                  <label className="block text-[10px] font-bold text-charcoal uppercase tracking-wider mb-1.5">Check in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                    min={today}
                    className="w-full bg-transparent text-[13.5px] text-charcoal font-medium focus:outline-none cursor-pointer"
                  />
                </div>
                <div className="px-4 py-3.5 border-l border-neutral-100">
                  <label className="block text-[10px] font-bold text-charcoal uppercase tracking-wider mb-1.5">Check out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                    min={checkIn || today}
                    className="w-full bg-transparent text-[13.5px] text-charcoal font-medium focus:outline-none cursor-pointer"
                  />
                </div>
                <div className="px-4 py-3.5 border-l border-neutral-100 flex items-center justify-between gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-charcoal uppercase tracking-wider mb-1.5">Guests</label>
                    <select
                      value={guests}
                      onChange={e => setGuests(Number(e.target.value))}
                      className="w-full bg-transparent text-[13.5px] text-charcoal font-medium focus:outline-none cursor-pointer"
                    >
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                  <button className="shrink-0 w-10 h-10 bg-sunset-gold hover:bg-sunset-orange rounded-full flex items-center justify-center transition-colors shadow">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STICKY FILTER BAR ─── */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3.5 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 px-5 py-2 rounded-full text-[12.5px] font-semibold whitespace-nowrap transition-all duration-200 ${
                filter === f.id
                  ? 'bg-charcoal text-white'
                  : 'bg-neutral-100 text-charcoal hover:bg-neutral-200'
              }`}
            >
              {f.label}
            </button>
          ))}
          <div className="ml-auto shrink-0 text-[12px] text-charcoal-muted font-medium">
            {filtered.length} room{filtered.length !== 1 ? 's' : ''} available
          </div>
        </div>
      </div>

      {/* ─── ROOMS GRID ─── */}
      <section className="bg-[#F4EFEA] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((room, i) => (
                <StaysRoomCard key={room.id} room={room} index={i} onOpen={openModal} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-charcoal-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">No rooms match</h3>
              <p className="text-charcoal-muted mb-5 text-sm">Try a different location or room type.</p>
              <button
                onClick={() => { setFilter('all'); setLocation('all') }}
                className="px-6 py-2.5 bg-charcoal text-white text-sm font-semibold rounded-full hover:bg-charcoal/85 transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── GROUP BOOKING ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="bg-charcoal rounded-[28px] overflow-hidden grid md:grid-cols-2 gap-0">
            <div className="px-10 py-14 lg:px-16 lg:py-16 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/15 text-white text-[11px] tracking-[0.18em] uppercase rounded-full mb-6 w-fit">
                Group rates
              </span>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-white leading-tight mb-4">
                Traveling with<br />a group?
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
                Special rates for 5+ people. Mix dorms and private rooms. We&apos;ll help you find the perfect combination.
              </p>
              <ul className="space-y-3 mb-10">
                {['Group discounts up to 20%', 'Private event space available', 'Customizable experience packages'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-sunset-gold/20 border border-sunset-gold/40 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-sunset-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 w-fit px-7 py-3 bg-sunset-gold hover:bg-sunset-orange text-white text-sm font-bold rounded-full transition-colors"
              >
                Inquire about group rates
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
            <div className="relative min-h-[280px] md:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80"
                alt="Group travelers"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F4EFEA] py-20 md:py-28">
        <div className="max-w-[860px] mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="flex items-end justify-between mb-16 gap-6">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-charcoal leading-tight tracking-tight">
              Frequently asked<br />questions
            </h2>
            <p className="text-charcoal/50 text-sm leading-relaxed max-w-[200px] text-right hidden sm:block">
              {FAQ.length} questions answered
            </p>
          </div>

          {/* Items */}
          <div className="divide-y divide-charcoal/10">
            {FAQ.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="group w-full py-6 flex items-start justify-between gap-6 text-left"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-[11px] font-bold text-charcoal/25 tabular-nums mt-1 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                      openFaq === i ? 'text-sunset-gold' : 'text-charcoal group-hover:text-sunset-gold/80'
                    }`}>
                      {f.q}
                    </span>
                  </div>
                  <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 mt-0.5 ${
                    openFaq === i
                      ? 'bg-charcoal border-charcoal text-white'
                      : 'border-charcoal/20 text-charcoal/40 group-hover:border-charcoal/40 group-hover:text-charcoal/70'
                  }`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFaq === i
                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4"/>
                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16"/>}
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === i ? 'max-h-48 pb-6' : 'max-h-0'
                }`}>
                  <p className="pl-10 text-[14px] text-charcoal/60 leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-white py-16 md:py-20 border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-charcoal-muted text-sm uppercase tracking-widest font-semibold mb-4">Still deciding?</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-charcoal mb-6">We&apos;re happy to help you choose.</h2>
          <p className="text-charcoal-muted text-lg mb-10 max-w-md mx-auto">Every room type has its vibe. Message us and we&apos;ll match you to the perfect space.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="px-8 py-3.5 bg-charcoal hover:bg-charcoal/85 text-white font-semibold rounded-full transition-colors">
              Message us
            </Link>
            <Link href="/" className="px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-charcoal font-semibold rounded-full transition-colors">
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
