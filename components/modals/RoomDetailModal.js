'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Room Detail Modal - Comprehensive Room Experience
 * 
 * Design Philosophy:
 * "Let travelers FEEL what it's like to stay here"
 * 
 * Features:
 * - Full-screen immersive gallery
 * - Community signals & social proof
 * - Detailed amenities with descriptions
 * - What to expect section
 * - Booking CTA with live availability
 * - Smooth animations throughout
 */

// Amenity icon mapping with descriptions
const AMENITY_DETAILS = {
  locker: { 
    icon: '🔐', 
    name: 'Personal Locker', 
    description: 'Secure storage for your valuables' 
  },
  curtain: { 
    icon: '🪟', 
    name: 'Privacy Curtain', 
    description: 'Your own private space within the dorm' 
  },
  light: { 
    icon: '💡', 
    name: 'Reading Light', 
    description: 'Individual light for late-night reads' 
  },
  charging: { 
    icon: '🔌', 
    name: 'Charging Points', 
    description: 'USB & power outlets at each bed' 
  },
  bathroom: { 
    icon: '🚿', 
    name: 'Clean Bathrooms', 
    description: 'Cleaned multiple times daily' 
  },
  wifi: { 
    icon: '📶', 
    name: 'Fast WiFi', 
    description: '100+ Mbps for work & streaming' 
  },
  kitchen: { 
    icon: '🍳', 
    name: 'Shared Kitchen', 
    description: 'Cook your own meals anytime' 
  },
  female: { 
    icon: '👩', 
    name: 'Women Only', 
    description: 'Safe, women-focused environment' 
  },
  ac: { 
    icon: '❄️', 
    name: 'Air Conditioning', 
    description: 'Climate-controlled comfort' 
  },
  towel: { 
    icon: '🛁', 
    name: 'Towels Provided', 
    description: 'Fresh towels included' 
  },
}

// What to expect content
const ROOM_EXPECTATIONS = {
  'mixed-dorm': [
    { icon: '🌍', text: 'Meet travelers from 20+ countries weekly' },
    { icon: '🗣️', text: 'Easy conversations start naturally' },
    { icon: '🌙', text: 'Quiet hours after 11 PM' },
    { icon: '☀️', text: 'Complimentary breakfast included' },
  ],
  'female-dorm': [
    { icon: '🔒', text: 'Keycard access for added security' },
    { icon: '👭', text: 'Supportive community of women travelers' },
    { icon: '🪞', text: 'Extra vanity area with good lighting' },
    { icon: '☀️', text: 'Complimentary breakfast included' },
  ],
  'private-room': [
    { icon: '🛏️', text: 'Queen-size bed with premium bedding' },
    { icon: '🚿', text: 'Private attached bathroom' },
    { icon: '🏠', text: 'Access to all common areas' },
    { icon: '☀️', text: 'Complimentary breakfast included' },
  ],
}

// House rules
const HOUSE_RULES = [
  'Check-in from 2 PM, Check-out by 11 AM',
  'Quiet hours: 11 PM - 7 AM',
  'No smoking inside the property',
  'Guests must be registered',
  'ID required at check-in',
]

export default function RoomDetailModal({ room, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryFullscreen, setIsGalleryFullscreen] = useState(false)
  const modalRef = useRef(null)

  // Handle escape key and body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isGalleryFullscreen) {
          setIsGalleryFullscreen(false)
        } else if (isOpen) {
          onClose()
        }
      }
      if (e.key === 'ArrowRight' && isOpen) {
        nextImage()
      }
      if (e.key === 'ArrowLeft' && isOpen) {
        prevImage()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, isGalleryFullscreen, onClose])

  const nextImage = () => {
    if (room?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % room.images.length)
    }
  }

  const prevImage = () => {
    if (room?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length)
    }
  }

  if (!isOpen || !room) return null

  const expectations = ROOM_EXPECTATIONS[room.id] || ROOM_EXPECTATIONS['mixed-dorm']

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {/* Hero Gallery Section */}
              <div className="relative h-[300px] md:h-[400px] lg:h-[450px] bg-sand-cream">
                {/* Main Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setIsGalleryFullscreen(true)}
                  >
                    <Image
                      src={room.images?.[currentImageIndex] || room.image}
                      alt={`${room.name} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      priority
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Gallery Navigation */}
                {room.images && room.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {room.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex 
                              ? 'bg-white w-6' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Room Label */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-charcoal text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {room.name}
                  </span>
                </div>

                {/* View All Photos */}
                <button
                  onClick={() => setIsGalleryFullscreen(true)}
                  className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-charcoal text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  View all {room.images?.length || 1} photos
                </button>

                {/* Thumbnail Strip */}
                {room.images && room.images.length > 1 && (
                  <div className="absolute -bottom-12 left-4 right-4 md:left-8 md:right-8 flex gap-2 overflow-x-auto scrollbar-hide z-10">
                    {room.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                          idx === currentImageIndex 
                            ? 'border-sunset-gold shadow-lg scale-105' 
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                          unoptimized
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="px-6 md:px-10 lg:px-16 pt-16 pb-8">
                {/* Room Title & Vibe */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
                    {room.name}
                  </h2>
                  <p className="text-lg text-charcoal-muted leading-relaxed">
                    {room.vibe}
                  </p>
                </div>

                {/* Community Tags */}
                {room.communityTags && room.communityTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.communityTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 bg-jungle-light/10 text-jungle-dark text-sm font-medium px-4 py-2 rounded-full border border-jungle-light/20"
                      >
                        <span className="w-1.5 h-1.5 bg-jungle-moss rounded-full" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Detailed Description */}
                {room.detailedDescription && (
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">
                      About this space
                    </h3>
                    <div className="space-y-4">
                      {room.detailedDescription.map((paragraph, idx) => (
                        <p key={idx} className="text-charcoal-muted leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Two Column Layout for Amenities & Expectations */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Amenities */}
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4">
                      What's included
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities?.map((amenityKey, idx) => {
                        const amenity = AMENITY_DETAILS[amenityKey]
                        if (!amenity) return null
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-sand-cream rounded-xl"
                          >
                            <span className="text-xl">{amenity.icon}</span>
                            <div>
                              <p className="text-sm font-medium text-charcoal">
                                {amenity.name}
                              </p>
                              <p className="text-xs text-charcoal-muted">
                                {amenity.description}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4">
                      What to expect
                    </h3>
                    <div className="space-y-3">
                      {expectations.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-sunset-gold/5 rounded-xl border border-sunset-gold/10"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <p className="text-sm text-charcoal">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* House Rules */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    House rules
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {HOUSE_RULES.map((rule, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 text-sm text-charcoal-muted bg-sand-light px-4 py-2 rounded-full"
                      >
                        <svg className="w-4 h-4 text-charcoal-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {rule}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Proof */}
                <div className="bg-gradient-to-r from-jungle-light/5 to-sunset-gold/5 rounded-2xl p-6 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {['🇦🇺', '🇩🇪', '🇺🇸', '🇫🇷', '🇧🇷'].map((flag, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-lg shadow-sm"
                          >
                            {flag}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-charcoal font-medium">
                          Loved by 2,400+ travelers
                        </p>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(i => (
                            <svg key={i} className="w-4 h-4 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                          <span className="text-sm text-charcoal-muted ml-1">4.9 average</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="#reviews"
                      className="text-sunset-gold hover:text-sunset-orange font-medium text-sm transition-colors"
                    >
                      Read all reviews →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Booking Bar */}
            <div className="sticky bottom-0 bg-white border-t border-border px-6 md:px-10 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-charcoal-muted">Starting from</p>
                <p className="text-2xl font-bold text-charcoal">
                  ₹599 <span className="text-sm font-normal text-charcoal-muted">/ night</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-6 py-3 bg-sand-cream hover:bg-sand-light text-charcoal font-medium rounded-full transition-colors border border-border">
                  Ask a question
                </button>
                <Link
                  href="/book"
                  className="px-8 py-3 bg-gradient-to-r from-sunset-gold to-sunset-orange hover:from-sunset-orange hover:to-sunset-gold text-white font-semibold rounded-full transition-all shadow-button hover:shadow-button-hover hover:-translate-y-0.5"
                >
                  Book now
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Fullscreen Gallery */}
          <AnimatePresence>
            {isGalleryFullscreen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
              >
                <button
                  onClick={() => setIsGalleryFullscreen(false)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close fullscreen"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4">
                  <Image
                    src={room.images?.[currentImageIndex] || room.image}
                    alt={`${room.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                    unoptimized
                  />
                </div>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                  {currentImageIndex + 1} / {room.images?.length || 1}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}
