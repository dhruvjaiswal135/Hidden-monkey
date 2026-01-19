'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Experience Detail Modal
 * 
 * Design Philosophy:
 * "Make travelers FEEL the adventure before they join"
 * 
 * Features:
 * - Immersive imagery
 * - Activity timeline
 * - What's included
 * - Who joins (social proof)
 * - Easy booking/sign-up
 */

// Experience categories with icons
const CATEGORY_ICONS = {
  adventure: { icon: '🏔️', color: 'bg-blue-500/10 text-blue-600' },
  culture: { icon: '🎭', color: 'bg-purple-500/10 text-purple-600' },
  food: { icon: '🍜', color: 'bg-orange-500/10 text-orange-600' },
  social: { icon: '🎉', color: 'bg-pink-500/10 text-pink-600' },
  wellness: { icon: '🧘', color: 'bg-green-500/10 text-green-600' },
  explore: { icon: '🗺️', color: 'bg-teal-500/10 text-teal-600' },
  nightlife: { icon: '🌙', color: 'bg-indigo-500/10 text-indigo-600' },
  workshop: { icon: '🎨', color: 'bg-yellow-500/10 text-yellow-600' },
}

export default function ExperienceModal({ experience, isOpen, onClose }) {
  const [isJoining, setIsJoining] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
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
  }, [isOpen, onClose])

  if (!isOpen || !experience) return null

  const categoryInfo = CATEGORY_ICONS[experience.category] || CATEGORY_ICONS.social

  // Default experience data structure
  const defaultExperience = {
    title: experience.title || 'Amazing Experience',
    description: experience.description || 'Join us for an unforgettable adventure.',
    image: experience.image || 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=1200',
    category: experience.category || 'social',
    date: experience.date || 'Every weekend',
    time: experience.time || 'Varies',
    duration: experience.duration || '2-3 hours',
    spots: experience.spots || 12,
    spotsLeft: experience.spotsLeft || 5,
    price: experience.price || 'Free',
    host: experience.host || { name: 'Hidden Monkey Team', avatar: '🐒' },
    includes: experience.includes || [
      'Local guide',
      'Snacks & refreshments',
      'Photo opportunities',
      'New friends guaranteed',
    ],
    timeline: experience.timeline || [
      { time: 'Start', activity: 'Meet at the common area' },
      { time: '+30min', activity: 'Kickoff activity' },
      { time: '+1hr', activity: 'Main experience' },
      { time: 'End', activity: 'Wrap up & share stories' },
    ],
    whatToBring: experience.whatToBring || [
      'Comfortable clothes',
      'Open mind',
      'Camera (optional)',
    ],
    pastJoiners: experience.pastJoiners || ['🇦🇺', '🇩🇪', '🇺🇸', '🇯🇵', '🇧🇷'],
    reviews: experience.reviews || [],
    gallery: experience.gallery || [],
  }

  const handleJoin = () => {
    setIsJoining(true)
    // Simulate joining process
    setTimeout(() => {
      setIsJoining(false)
      // Could trigger a success toast here
    }, 1500)
  }

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
              {/* Hero Image */}
              <div className="relative h-[250px] md:h-[350px] bg-sand-cream">
                <Image
                  src={defaultExperience.image}
                  alt={defaultExperience.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center gap-2 ${categoryInfo.color} backdrop-blur-sm text-sm font-medium px-4 py-2 rounded-full`}>
                    {categoryInfo.icon} {defaultExperience.category}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                    {defaultExperience.title}
                  </h2>
                  <p className="text-white/90 text-sm md:text-base drop-shadow">
                    {defaultExperience.description}
                  </p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="px-6 md:px-10 lg:px-16 py-8">
                {/* Quick Info Bar */}
                <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border">
                  <div className="flex items-center gap-2 text-charcoal">
                    <svg className="w-5 h-5 text-sunset-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">{defaultExperience.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal">
                    <svg className="w-5 h-5 text-sunset-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">{defaultExperience.time} · {defaultExperience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal">
                    <svg className="w-5 h-5 text-sunset-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm font-medium">
                      {defaultExperience.spotsLeft} spots left
                      <span className="text-charcoal-muted"> of {defaultExperience.spots}</span>
                    </span>
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column - Main Content */}
                  <div className="md:col-span-2 space-y-8">
                    {/* Host Info */}
                    <div className="flex items-center gap-4 p-4 bg-sand-cream rounded-2xl">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                        {defaultExperience.host.avatar}
                      </div>
                      <div>
                        <p className="text-sm text-charcoal-muted">Hosted by</p>
                        <p className="text-charcoal font-semibold">{defaultExperience.host.name}</p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-4">
                        How it goes
                      </h3>
                      <div className="relative pl-6 space-y-4">
                        {/* Timeline line */}
                        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-sunset-gold to-sunset-orange" />
                        
                        {defaultExperience.timeline.map((item, idx) => (
                          <div key={idx} className="relative flex gap-4">
                            <div className="absolute left-[-17px] w-3 h-3 bg-sunset-gold rounded-full border-2 border-white shadow" />
                            <div className="flex-1 pb-4">
                              <p className="text-xs font-medium text-sunset-gold uppercase tracking-wide mb-1">
                                {item.time}
                              </p>
                              <p className="text-charcoal">{item.activity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-4">
                        What's included
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {defaultExperience.includes.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-jungle-light/5 rounded-xl border border-jungle-light/10"
                          >
                            <svg className="w-5 h-5 text-jungle-moss flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-charcoal">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What to Bring */}
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-4">
                        What to bring
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {defaultExperience.whatToBring.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-2 text-sm text-charcoal-muted bg-sand-light px-4 py-2 rounded-full"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Booking Card */}
                  <div className="md:col-span-1">
                    <div className="sticky top-4 bg-white border border-border rounded-2xl p-6 shadow-soft">
                      {/* Price */}
                      <div className="text-center mb-6">
                        <p className="text-3xl font-bold text-charcoal">
                          {defaultExperience.price === 'Free' ? 'Free' : `₹${defaultExperience.price}`}
                        </p>
                        <p className="text-sm text-charcoal-muted">per person</p>
                      </div>

                      {/* Spots Indicator */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-charcoal-muted">Spots remaining</span>
                          <span className="font-medium text-charcoal">{defaultExperience.spotsLeft} / {defaultExperience.spots}</span>
                        </div>
                        <div className="h-2 bg-sand-cream rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-sunset-gold to-sunset-orange rounded-full transition-all"
                            style={{ width: `${((defaultExperience.spots - defaultExperience.spotsLeft) / defaultExperience.spots) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* Join Button */}
                      <button
                        onClick={handleJoin}
                        disabled={isJoining || defaultExperience.spotsLeft === 0}
                        className="w-full py-4 bg-gradient-to-r from-sunset-gold to-sunset-orange hover:from-sunset-orange hover:to-sunset-gold text-white font-semibold rounded-full transition-all shadow-button hover:shadow-button-hover hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                      >
                        {isJoining ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Joining...
                          </>
                        ) : (
                          <>
                            Join this experience
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      {/* Social Proof */}
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm text-charcoal-muted mb-3">Travelers who joined</p>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {defaultExperience.pastJoiners.slice(0, 5).map((flag, i) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded-full bg-sand-cream border-2 border-white flex items-center justify-center text-sm shadow-sm"
                              >
                                {flag}
                              </div>
                            ))}
                          </div>
                          <span className="text-sm text-charcoal-muted">+200 more</span>
                        </div>
                      </div>

                      {/* Quick Note */}
                      <div className="mt-4 p-3 bg-sand-cream rounded-xl">
                        <p className="text-xs text-charcoal-muted">
                          💡 Guests staying at Hidden Monkey get priority booking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
