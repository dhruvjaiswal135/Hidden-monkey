'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Building Detail Modal
 * Shows detailed information about a specific hostel building/location
 * 
 * Design Philosophy:
 * "Every building has a story to tell"
 */

// Sample building data (in a real app, this would come from props/API)
const buildingDetails = {
  'varanasi-main': {
    name: 'Hidden Monkey Varanasi',
    tagline: 'Where spirituality meets backpacker vibes',
    description: 'Our flagship location overlooking the ancient ghats of Varanasi. Watch the sunrise over the Ganges from our rooftop cafe while sipping chai with fellow travelers.',
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80',
    ],
    address: 'B 1/27, Meer Ghat, Varanasi, UP 221001',
    rating: 4.9,
    reviews: 847,
    priceFrom: 499,
    features: [
      { icon: '🌅', title: 'Ghat Views', description: 'Watch the sunrise from our rooftop' },
      { icon: '🍵', title: 'Rooftop Cafe', description: 'Best chai and views in the city' },
      { icon: '🧘', title: 'Daily Yoga', description: 'Free morning sessions' },
      { icon: '🛕', title: 'Walking Distance', description: 'Steps from Dashashwamedh Ghat' },
    ],
    roomTypes: [
      { name: '6-Bed Mixed Dorm', price: 499, available: true },
      { name: '6-Bed Female Dorm', price: 549, available: true },
      { name: '4-Bed Dorm', price: 649, available: true },
      { name: 'Private Double', price: 1499, available: false },
    ],
    amenities: ['Free WiFi', '24/7 Hot Water', 'Rooftop Terrace', 'Common Kitchen', 'AC/Fans', 'Lockers', 'Book Exchange', 'Tour Desk'],
    nearbyAttractions: [
      { name: 'Dashashwamedh Ghat', distance: '2 min walk' },
      { name: 'Kashi Vishwanath Temple', distance: '10 min walk' },
      { name: 'Manikarnika Ghat', distance: '5 min walk' },
      { name: 'Varanasi Railway Station', distance: '20 min auto' },
    ],
    reviews_highlights: [
      { text: "Best hostel I've stayed at in India. The rooftop vibes are unmatched!", author: 'Sophie, Germany' },
      { text: 'Made lifelong friends here. The staff feels like family.', author: 'Marco, Brazil' },
    ],
  },
}

// Fallback building template
const defaultBuilding = {
  name: 'Hidden Monkey Building',
  tagline: 'Your home away from home',
  description: 'A beautiful space designed for travelers seeking comfort and community.',
  images: ['https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80'],
  address: 'Contact us for address',
  rating: 4.8,
  reviews: 100,
  priceFrom: 499,
  features: [
    { icon: '🏠', title: 'Cozy Space', description: 'Designed for travelers' },
    { icon: '👥', title: 'Community', description: 'Meet fellow travelers' },
  ],
  roomTypes: [{ name: 'Mixed Dorm', price: 499, available: true }],
  amenities: ['Free WiFi', 'Hot Water', 'Common Area', 'Kitchen'],
  nearbyAttractions: [],
  reviews_highlights: [],
}

export default function BuildingModal({ building, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  
  // Get building details or use props/default
  const details = building?.id ? (buildingDetails[building.id] || { ...defaultBuilding, ...building }) : { ...defaultBuilding, ...building }
  
  // Close on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Auto-rotate images
  useEffect(() => {
    if (!isOpen || !details?.images?.length) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % details.images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isOpen, details?.images?.length])

  if (!building) return null

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-t-3xl md:rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-white transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="overflow-y-auto max-h-[90vh] scroll-smooth">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={details.images?.[currentImageIndex] || details.images?.[0]}
                      alt={details.name || 'Building'}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                
                {/* Image Indicators */}
                {details.images?.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {details.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-16 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-1">{details.name || building?.name}</h2>
                  <p className="text-white/80 text-sm md:text-base">{details.tagline}</p>
                </div>
              </div>
              
              {/* Tab Navigation */}
              <div className="sticky top-0 bg-white border-b border-border z-10">
                <div className="flex gap-0 overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-sunset-gold text-sunset-gold'
                          : 'border-transparent text-charcoal-muted hover:text-charcoal'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="p-6 pb-28">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* Quick Stats */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-charcoal">{details.rating}</span>
                        <span className="text-charcoal-muted">({details.reviews} reviews)</span>
                      </div>
                      <div className="px-4 py-2 bg-sand-cream rounded-full text-charcoal">
                        📍 {details.address}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-charcoal-muted leading-relaxed">{details.description}</p>
                    
                    {/* Features Grid */}
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal mb-4">What makes us special</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {details.features?.map((feature, index) => (
                          <div key={index} className="flex gap-3 p-4 bg-sand-light rounded-xl">
                            <span className="text-2xl">{feature.icon}</span>
                            <div>
                              <h4 className="font-semibold text-charcoal text-sm">{feature.title}</h4>
                              <p className="text-charcoal-muted text-xs">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Nearby */}
                    {details.nearbyAttractions?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-4">Nearby attractions</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {details.nearbyAttractions.map((place, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-sand-light rounded-lg">
                              <span className="text-charcoal text-sm">{place.name}</span>
                              <span className="text-charcoal-muted text-xs">{place.distance}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'rooms' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-charcoal mb-4">Available room types</h3>
                    {details.roomTypes?.map((room, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 border rounded-xl transition-colors ${
                          room.available
                            ? 'border-border hover:border-sunset-gold/30 bg-white'
                            : 'border-border bg-sand-light opacity-60'
                        }`}
                      >
                        <div>
                          <h4 className="font-semibold text-charcoal">{room.name}</h4>
                          {!room.available && (
                            <span className="text-xs text-red-500">Sold out</span>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-charcoal">₹{room.price}</p>
                          <p className="text-xs text-charcoal-muted">per night</p>
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/stays"
                      className="block w-full text-center py-4 bg-jungle-dark text-white font-semibold rounded-xl hover:bg-jungle-moss transition-colors mt-6"
                    >
                      View all rooms
                    </Link>
                  </div>
                )}
                
                {activeTab === 'amenities' && (
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-4">What we offer</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {details.amenities?.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-sand-light rounded-lg"
                        >
                          <span className="w-5 h-5 bg-green-500/20 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                          <span className="text-charcoal text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-charcoal">{details.rating}</p>
                        <p className="text-yellow-500">★★★★★</p>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Exceptional</p>
                        <p className="text-charcoal-muted text-sm">{details.reviews} reviews</p>
                      </div>
                    </div>
                    
                    {details.reviews_highlights?.length > 0 ? (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-charcoal">What guests say</h3>
                        {details.reviews_highlights.map((review, index) => (
                          <div key={index} className="p-4 bg-sand-light rounded-xl">
                            <p className="text-charcoal italic mb-2">"{review.text}"</p>
                            <p className="text-charcoal-muted text-sm">— {review.author}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-charcoal-muted text-center py-8">
                        Reviews coming soon!
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Sticky Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-charcoal-muted text-xs">From</p>
                  <p className="text-2xl font-bold text-charcoal">
                    ₹{details.priceFrom}<span className="text-sm font-normal text-charcoal-muted">/night</span>
                  </p>
                </div>
                <Link
                  href={`/stays?location=${building?.location || 'all'}`}
                  className="px-8 py-3 bg-sunset-gold hover:bg-sunset-orange text-white font-semibold rounded-full transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
