'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HeroStickers } from '@/components/decorations/FloatingStickers'

/**
 * Hero Section - Enhanced
 * Immersive full-screen hero with floating stickers, 
 * animated elements, and community-first messaging
 * "Not a Hostel. A Hidden Tribe."
 */

// Hero background images for slider
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=1920&q=85',
    alt: 'Travelers sharing stories around bonfire',
  },
  {
    url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=85',
    alt: 'Friends hiking through mountains',
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85',
    alt: 'Mountain sunrise view',
  },
]

// Live traveler count (simulated)
const TRAVELER_DATA = {
  checkedInThisWeek: 28,
  countries: 12,
  avatars: ['🇦🇺', '🇩🇪', '🇮🇳', '🇺🇸', '🇫🇷', '🇧🇷'],
}

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Image slider effect
  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="relative w-full lg:-mt-16 lg:pb-0 lg:pt-0 lg:min-h-[92vh] lg:flex lg:items-center overflow-hidden">
        {/* Hero Container */}
        <div className="max-w-[1600px] mx-auto w-full px-4 lg:px-8">
          <div className="relative rounded-[32px] lg:rounded-[48px] overflow-hidden h-[600px] lg:h-[85vh] min-h-[550px]">
            
            {/* Background Image Slider with Parallax */}
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={heroImages[currentImageIndex].url}
                    alt={heroImages[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Gradient overlays for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Travel Stickers */}
            <HeroStickers />

            {/* Content Grid: Left Text + Right Card */}
            <div className="relative h-full grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-16 items-center px-6 lg:px-16 py-10 lg:py-0">
              
              {/* LEFT COLUMN - TEXT CONTENT */}
              <motion.div 
                className="flex flex-col justify-center space-y-6 lg:space-y-8 z-10"
                initial={{ opacity: 0, x: -30 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                
                {/* Micro-label with typing effect */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-white/90 text-sm font-medium tracking-wide">
                      {TRAVELER_DATA.checkedInThisWeek}+ travelers checked in this week
                    </p>
                  </div>
                </motion.div>
                
                {/* Main Headline - Emotional, Tribe-focused */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h1 className="text-white font-bold leading-[1.1] text-hero">
                    Not a Hostel.<br />
                    <span className="bg-gradient-to-r from-[#EEA727] to-[#FF8770] bg-clip-text text-transparent">
                      A Hidden Tribe.
                    </span>
                  </h1>
                </motion.div>
                
                {/* Subtext - Storytelling */}
                <motion.p 
                  className="text-white/85 text-base lg:text-lg leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Where backpackers become friends, strangers share stories by the bonfire, 
                  and every morning feels like the start of a new adventure.
                </motion.p>
                
                {/* CTA Group - Community Focused */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Link
                    href="#stays"
                    className="group px-8 py-4 bg-gradient-to-r from-[#EEA727] to-[#E84D1B] hover:from-[#E84D1B] hover:to-[#EEA727] text-white font-semibold rounded-full transition-all duration-300 text-base shadow-button hover:shadow-button-hover hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    Book a Bed
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#community"
                    className="group px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full transition-all duration-300 text-base border border-white/30 hover:border-white/50 flex items-center gap-2"
                  >
                    <span className="text-lg">👋</span>
                    Join the Tribe
                  </Link>
                </motion.div>
                
                {/* Social Proof - Country Flags */}
                <motion.div 
                  className="flex items-center gap-4 pt-2"
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {/* Traveler Avatars */}
                  <div className="flex -space-x-2">
                    {TRAVELER_DATA.avatars.slice(0, 5).map((flag, i) => (
                      <motion.div
                        key={i}
                        className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center text-base shadow-sm"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 1 + (i * 0.1), duration: 0.3, type: 'spring' }}
                      >
                        {flag}
                      </motion.div>
                    ))}
                    <motion.div
                      className="w-9 h-9 rounded-full bg-[#EEA727] border-2 border-white/50 flex items-center justify-center text-white text-xs font-bold shadow-sm"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 1.5, duration: 0.3, type: 'spring' }}
                    >
                      +{TRAVELER_DATA.countries}
                    </motion.div>
                  </div>
                  <div className="text-white/80 text-sm">
                    <span className="font-semibold text-white">{TRAVELER_DATA.countries} countries</span> represented this month
                  </div>
                </motion.div>
              </motion.div>
              
              {/* RIGHT COLUMN - FLOATING BOOKING CARD (Desktop Only) */}
              <motion.div 
                className="hidden lg:flex lg:items-center lg:justify-center lg:z-20"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-[28px] p-8 shadow-glass border border-white/50">
                  
                  {/* Card Header */}
                  <div className="mb-6">
                    <h2 className="text-charcoal font-bold text-2xl mb-1">
                      Find your vibe
                    </h2>
                    <p className="text-charcoal-muted text-sm font-light">
                      Search across all our locations
                    </p>
                  </div>
                  
                  {/* Card Input Fields */}
                  <div className="space-y-3 mb-6">
                    
                    {/* Location Input */}
                    <div className="group flex items-center gap-3 px-4 py-3.5 bg-sand-cream border border-border rounded-2xl hover:border-sunset-gold/50 transition-all duration-200 cursor-pointer">
                      <svg className="w-5 h-5 text-charcoal-muted group-hover:text-sunset-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="flex-1 text-charcoal-muted text-sm font-medium">
                        Where are you heading?
                      </span>
                    </div>
                    
                    {/* Dates Input */}
                    <div className="group flex items-center gap-3 px-4 py-3.5 bg-sand-cream border border-border rounded-2xl hover:border-sunset-gold/50 transition-all duration-200 cursor-pointer">
                      <svg className="w-5 h-5 text-charcoal-muted group-hover:text-sunset-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="flex-1 text-charcoal-muted text-sm font-medium">
                        When? (dates)
                      </span>
                    </div>
                    
                    {/* Travelers Input */}
                    <div className="group flex items-center gap-3 px-4 py-3.5 bg-sand-cream border border-border rounded-2xl hover:border-sunset-gold/50 transition-all duration-200 cursor-pointer">
                      <svg className="w-5 h-5 text-charcoal-muted group-hover:text-sunset-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="flex-1 text-charcoal-muted text-sm font-medium">
                        How many travelers?
                      </span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    href="#stays"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#EEA727] to-[#E84D1B] hover:from-[#E84D1B] hover:to-[#EEA727] text-white font-semibold rounded-full transition-all duration-300 text-sm shadow-button hover:shadow-button-hover"
                  >
                    Check Availability
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  
                  {/* Trust indicators */}
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-center gap-4 text-xs text-charcoal-muted">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Free cancellation
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Best price guarantee
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Image Slider Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-8 bg-white' 
                      : 'w-1.5 bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOOKING BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-glass z-50 rounded-t-[24px]">
        <div className="px-5 py-4 max-w-[1600px] mx-auto w-full">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-charcoal font-semibold text-sm">Find your tribe</p>
              <p className="text-charcoal-muted text-xs">Book your adventure today</p>
            </div>
            <Link
              href="#stays"
              className="px-6 py-3 bg-gradient-to-r from-[#EEA727] to-[#E84D1B] text-white font-semibold rounded-full text-sm shadow-button"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}