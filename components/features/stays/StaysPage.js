'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import RoomDetailModal from '@/components/modals/RoomDetailModal'

/**
 * Stays Page (Book Your Stay)
 * Full room catalog with filtering and booking interface
 * 
 * Design Philosophy:
 * "Find your perfect space in our community"
 */

// Full rooms data
const allRooms = [
  {
    id: 'mixed-dorm-6',
    name: 'Mixed Dorm (6 Bed)',
    category: 'dorm',
    description: 'Our most social option! Comfy pod-style beds with privacy curtains, personal locker, and reading light.',
    shortDescription: 'Perfect for solo travelers looking to make friends',
    price: 499,
    originalPrice: 799,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop&q=80',
    ],
    capacity: '1 person per bed',
    bedType: 'Single pod bed',
    size: '40 sqft per pod',
    amenities: ['Privacy curtain', 'Personal locker', 'Reading light', 'USB charging', 'Fresh linens', 'AC', 'WiFi', 'Shared bathroom'],
    highlights: ['Most popular choice', 'Pod-style beds', 'Make new friends daily'],
    available: true,
    rating: 4.8,
    reviews: 234,
    locations: ['Varanasi', 'Rishikesh', 'Goa', 'Darjeeling'],
    expectations: [
      { icon: '🛏️', title: 'Your Own Space', description: 'Privacy curtains for your pod' },
      { icon: '🔒', title: 'Secure Storage', description: 'Personal locker with key' },
      { icon: '🧹', title: 'Daily Cleaning', description: 'Fresh sheets provided' },
    ],
    houseRules: [
      'Quiet hours: 11 PM - 7 AM',
      'No food in dorms',
      'Respect others privacy',
      'Lock your valuables',
    ],
    checkIn: '2:00 PM',
    checkOut: '11:00 AM',
    pastGuests: ['🇫🇷', '🇩🇪', '🇦🇺', '🇺🇸', '🇧🇷'],
  },
  {
    id: 'female-dorm-6',
    name: 'Female Only Dorm (6 Bed)',
    category: 'dorm',
    description: 'A comfortable, secure space just for women. Same great pod-style beds with extra privacy and security.',
    shortDescription: 'Safe and comfortable space for solo female travelers',
    price: 549,
    originalPrice: 849,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80',
    ],
    capacity: '1 person per bed',
    bedType: 'Single pod bed',
    size: '40 sqft per pod',
    amenities: ['Privacy curtain', 'Personal locker', 'Vanity mirror', 'Hair dryer', 'Reading light', 'USB charging', 'AC', 'WiFi'],
    highlights: ['Women only', 'Extra secure', 'Community vibes'],
    available: true,
    rating: 4.9,
    reviews: 156,
    locations: ['Varanasi', 'Rishikesh', 'Goa'],
    expectations: [
      { icon: '👩', title: 'Women Only', description: 'Safe space for solo travelers' },
      { icon: '🔒', title: 'Extra Security', description: 'Additional lock and keycard' },
      { icon: '✨', title: 'Vanity Area', description: 'Shared mirrors and amenities' },
    ],
    houseRules: [
      'Female guests only',
      'Quiet hours: 11 PM - 7 AM',
      'No outside guests',
    ],
    checkIn: '2:00 PM',
    checkOut: '11:00 AM',
    pastGuests: ['🇬🇧', '🇯🇵', '🇨🇦', '🇳🇱'],
  },
  {
    id: 'private-double',
    name: 'Private Double Room',
    category: 'private',
    description: 'Your own cozy room with a comfortable double bed. Perfect for couples or those wanting privacy without losing the hostel vibe.',
    shortDescription: 'Privacy meets community for couples',
    price: 1499,
    originalPrice: 2199,
    images: [
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560185127-6a8a6dfd7b7b?w=800&auto=format&fit=crop&q=80',
    ],
    capacity: '2 people',
    bedType: 'Queen bed',
    size: '180 sqft',
    amenities: ['Private bathroom', 'Queen bed', 'AC', 'WiFi', 'TV', 'Mini fridge', 'Work desk', 'Wardrobe', 'Balcony (select rooms)'],
    highlights: ['Private bathroom', 'Best for couples', 'Balcony available'],
    available: true,
    rating: 4.9,
    reviews: 89,
    locations: ['Goa', 'Rishikesh'],
    expectations: [
      { icon: '🏠', title: 'Your Space', description: 'Complete privacy in your room' },
      { icon: '🚿', title: 'Private Bath', description: 'Attached bathroom with hot water' },
      { icon: '🌅', title: 'Balcony Views', description: 'Select rooms with mountain/sea view' },
    ],
    houseRules: [
      'Max 2 guests per room',
      'No parties in rooms',
      'Respect quiet hours',
    ],
    checkIn: '2:00 PM',
    checkOut: '11:00 AM',
    pastGuests: ['🇺🇸', '🇫🇷', '🇮🇳', '🇦🇺'],
  },
  {
    id: 'deluxe-private',
    name: 'Deluxe Private Suite',
    category: 'private',
    description: 'Our most spacious room with premium amenities. King bed, private balcony, and mountain or sea views.',
    shortDescription: 'Premium comfort with stunning views',
    price: 2499,
    originalPrice: 3499,
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
    ],
    capacity: '2 people',
    bedType: 'King bed',
    size: '280 sqft',
    amenities: ['Private bathroom', 'King bed', 'AC', 'WiFi', 'Smart TV', 'Mini bar', 'Coffee maker', 'Bathrobe', 'Private balcony', 'Room service'],
    highlights: ['King bed', 'Private balcony', 'Premium amenities'],
    available: true,
    rating: 5.0,
    reviews: 45,
    locations: ['Goa', 'Darjeeling'],
    expectations: [
      { icon: '👑', title: 'Premium Suite', description: 'Our best room with luxury touches' },
      { icon: '🌄', title: 'View Balcony', description: 'Private space with stunning views' },
      { icon: '☕', title: 'In-Room Amenities', description: 'Coffee maker, mini bar, robe' },
    ],
    houseRules: [
      'Max 2 guests per room',
      'Premium guests get early check-in',
      'Room service available',
    ],
    checkIn: '1:00 PM (early)',
    checkOut: '12:00 PM',
    pastGuests: ['🇬🇧', '🇩🇪', '🇯🇵'],
  },
  {
    id: 'mixed-dorm-4',
    name: 'Mixed Dorm (4 Bed)',
    category: 'dorm',
    description: 'A cozier dorm option with just 4 beds. Great for making close friends while still having more space.',
    shortDescription: 'Smaller dorm for more intimate vibes',
    price: 649,
    originalPrice: 899,
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop&q=80',
    ],
    capacity: '1 person per bed',
    bedType: 'Single pod bed',
    size: '50 sqft per pod',
    amenities: ['Privacy curtain', 'Large locker', 'Reading light', 'USB charging', 'AC', 'WiFi', 'En-suite bathroom'],
    highlights: ['Only 4 beds', 'More space', 'En-suite bathroom'],
    available: true,
    rating: 4.9,
    reviews: 112,
    locations: ['Varanasi', 'Goa'],
    expectations: [
      { icon: '👥', title: 'Small Group', description: 'Just 4 people for intimate vibes' },
      { icon: '🚿', title: 'En-Suite Bath', description: 'Private bathroom for the dorm' },
      { icon: '📦', title: 'Large Lockers', description: 'Fit your whole backpack' },
    ],
    houseRules: [
      'Quiet hours: 11 PM - 7 AM',
      'Be considerate of roommates',
      'Keep bathroom clean',
    ],
    checkIn: '2:00 PM',
    checkOut: '11:00 AM',
    pastGuests: ['🇧🇷', '🇲🇽', '🇮🇹', '🇰🇷'],
  },
]

// Room category filters
const categories = [
  { id: 'all', name: 'All Rooms', icon: '🏠' },
  { id: 'dorm', name: 'Dorms', icon: '🛏️' },
  { id: 'private', name: 'Private Rooms', icon: '🚪' },
]

// Location options
const locations = [
  { id: 'all', name: 'All Locations' },
  { id: 'Varanasi', name: 'Varanasi' },
  { id: 'Rishikesh', name: 'Rishikesh' },
  { id: 'Goa', name: 'Goa' },
  { id: 'Darjeeling', name: 'Darjeeling' },
]

function RoomCard({ room, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => onClick(room)}
      className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-sunset-gold/30 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 ${room.category === 'dorm' ? 'bg-blue-500' : 'bg-purple-500'} text-white text-xs font-bold rounded-full uppercase tracking-wide`}>
            {room.category === 'dorm' ? 'Dorm' : 'Private'}
          </span>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium rounded-full flex items-center gap-1">
            <span className="text-yellow-500">★</span> {room.rating}
          </span>
        </div>
        
        {/* Discount Badge */}
        {room.originalPrice && (
          <div className="absolute bottom-3 left-3">
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
              {Math.round((1 - room.price / room.originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
            ₹{room.price}<span className="text-xs opacity-70">/night</span>
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-sunset-gold transition-colors">
          {room.name}
        </h3>
        <p className="text-charcoal-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {room.shortDescription}
        </p>
        
        {/* Amenities preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.highlights.slice(0, 3).map((highlight, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-sand-cream text-charcoal-muted rounded-full">
              {highlight}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-charcoal-muted">
            <span>{room.capacity}</span>
            <span>•</span>
            <span>{room.size}</span>
          </div>
          
          <span className="text-sunset-gold text-sm font-medium flex items-center gap-1">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function StaysPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  // Filter rooms
  const filteredRooms = allRooms.filter((room) => {
    const categoryMatch = selectedCategory === 'all' || room.category === selectedCategory
    const locationMatch = selectedLocation === 'all' || room.locations.includes(selectedLocation)
    return categoryMatch && locationMatch
  })

  const handleRoomClick = (room) => {
    setSelectedRoom(room)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedRoom(null)
  }

  // Get today's date for min date input
  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 md:py-24 bg-gradient-to-b from-jungle-dark to-jungle-moss text-white overflow-hidden">
        <Container className="max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full mb-6"
            >
              🛏️ Find Your Perfect Space
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Book your <span className="text-sunset-gold">stay</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              From social dorms to private retreats. Every space is designed 
              for comfort, connection, and the best sleep of your trip.
            </p>
          </motion.div>
          
          {/* Quick Booking Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-4 md:p-6 shadow-elevated"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs text-charcoal-muted font-medium mb-1">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2.5 bg-sand-cream border border-border rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sunset-gold"
                >
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-charcoal-muted font-medium mb-1">Check In</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={today}
                  className="w-full px-4 py-2.5 bg-sand-cream border border-border rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sunset-gold"
                />
              </div>
              <div>
                <label className="block text-xs text-charcoal-muted font-medium mb-1">Check Out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || today}
                  className="w-full px-4 py-2.5 bg-sand-cream border border-border rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sunset-gold"
                />
              </div>
              <div>
                <label className="block text-xs text-charcoal-muted font-medium mb-1">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-sand-cream border border-border rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sunset-gold"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Room Type Filters */}
      <section className="py-6 bg-white border-b border-border sticky top-16 z-40">
        <Container className="max-w-[1400px]">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-jungle-dark text-white'
                    : 'bg-sand-cream text-charcoal hover:bg-sand-light'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Rooms Grid */}
      <section className="py-12 md:py-20 bg-sand-light">
        <Container className="max-w-[1400px]">
          {filteredRooms.length > 0 ? (
            <>
              <p className="text-charcoal-muted mb-8">{filteredRooms.length} rooms available</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRooms.map((room, index) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    index={index}
                    onClick={handleRoomClick}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🏠</p>
              <h3 className="text-2xl font-bold text-charcoal mb-2">No rooms found</h3>
              <p className="text-charcoal-muted">
                Try selecting a different location or room type.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedLocation('all'); }}
                className="mt-4 px-6 py-2 bg-sunset-gold text-white rounded-full font-medium hover:bg-sunset-orange transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Group Booking CTA */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-[1400px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl mb-4 block">🎉</span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Traveling with a group?
              </h2>
              <p className="text-charcoal-muted text-lg mb-6">
                Get special rates for group bookings of 5+ people. We'll help you 
                find the perfect combination of dorms and private rooms.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-charcoal">
                  <span className="w-6 h-6 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  Group discounts up to 20%
                </li>
                <li className="flex items-center gap-3 text-charcoal">
                  <span className="w-6 h-6 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  Private event space available
                </li>
                <li className="flex items-center gap-3 text-charcoal">
                  <span className="w-6 h-6 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  Customizable experience packages
                </li>
              </ul>
              <Link
                href="/group-booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sunset-gold hover:bg-sunset-orange text-white font-semibold rounded-full transition-colors"
              >
                Inquire about group rates
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80"
                alt="Group of travelers at Hidden Monkey"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-sand-light">
        <Container className="max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal-muted">Everything you need to know about your stay</p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                q: 'What time is check-in and check-out?',
                a: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be arranged based on availability.'
              },
              {
                q: 'Are towels and linens provided?',
                a: 'Yes! Fresh linens are provided for all guests. Towels are included in private rooms and available for rent in dorms (₹50).'
              },
              {
                q: 'Can I store my luggage before check-in?',
                a: 'Absolutely! We have secure luggage storage available for all guests at no extra charge.'
              },
              {
                q: 'Is there a kitchen I can use?',
                a: 'Yes, our community kitchen is available 24/7 with a fridge, stove, microwave, and basic utensils. Please clean up after yourself!'
              },
              {
                q: 'What\'s your cancellation policy?',
                a: 'Free cancellation up to 48 hours before check-in. Within 48 hours, the first night is non-refundable.'
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-border p-5 group"
              >
                <summary className="font-semibold text-charcoal cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-charcoal-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-charcoal-muted mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoom}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
