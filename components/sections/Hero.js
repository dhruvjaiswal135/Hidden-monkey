'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'

/**
 * Hero Section - Ultimate Creative Edition
 * 
 * Design Philosophy:
 * "An immersive gateway to adventure that makes you feel 
 * you're already part of the tribe"
 * 
 * Features:
 * - Parallax video/image background with depth layers
 * - Animated text reveal with character-by-character animation
 * - Interactive cursor follower
 * - Live activity feed
 * - Floating adventure cards
 * - Morphing shape decorations
 */

// Hero media for immersive background
const heroMedia = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=1920&q=85',
    alt: 'Travelers sharing stories around bonfire',
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=85',
    alt: 'Friends hiking through mountains',
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85',
    alt: 'Mountain sunrise view',
  },
]

// Live activity feed data
const liveActivities = [
  { id: 1, text: 'Sarah from Australia just checked in at Varanasi', time: '2m ago', emoji: '🇦🇺' },
  { id: 2, text: 'Bonfire night starting in 3 hours!', time: '15m ago', emoji: '🔥' },
  { id: 3, text: 'Marco & friends completed the sunrise trek', time: '1h ago', emoji: '🏔️' },
  { id: 4, text: '12 new travelers joined this week', time: '2h ago', emoji: '🎉' },
]

// Floating destination cards
const floatingCards = [
  { id: 1, name: 'Varanasi', emoji: '🛕', travelers: 28, x: '75%', y: '25%' },
  { id: 2, name: 'Rishikesh', emoji: '🧘', travelers: 34, x: '85%', y: '55%' },
  { id: 3, name: 'Darjeeling', emoji: '🍵', travelers: 19, x: '70%', y: '75%' },
]

// Character animation component
const AnimatedText = ({ text, className, delay = 0 }) => {
  const words = text.split(' ')
  
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + (wordIndex * 0.1) + (charIndex * 0.03),
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}

// Interactive cursor blob
const CursorBlob = ({ mouseX, mouseY }) => {
  const size = 400
  const x = useSpring(mouseX, { damping: 25, stiffness: 150 })
  const y = useSpring(mouseY, { damping: 25, stiffness: 150 })
  
  return (
    <motion.div
      className="pointer-events-none fixed z-0 hidden lg:block"
      style={{
        x,
        y,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-sunset-gold/20 to-sunset-orange/20 blur-[100px]" />
    </motion.div>
  )
}

// Live activity ticker
const ActivityTicker = ({ activities }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [activities.length])
  
  return (
    <div className="relative h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <span className="text-xl">{activities[currentIndex].emoji}</span>
          <span className="text-white/90 text-sm">{activities[currentIndex].text}</span>
          <span className="text-white/50 text-xs">{activities[currentIndex].time}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Floating destination card
const FloatingCard = ({ card, index }) => {
  return (
    <motion.div
      className="absolute hidden lg:block"
      style={{ left: card.x, top: card.y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
    >
      <motion.div
        className="relative bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20 cursor-pointer group"
        whileHover={{ scale: 1.05, y: -5 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          y: { duration: 3 + index, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 0.2 }
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{card.emoji}</span>
          <div>
            <p className="text-white font-semibold text-sm">{card.name}</p>
            <p className="text-white/60 text-xs">{card.travelers} travelers</p>
          </div>
        </div>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-sunset-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
      </motion.div>
    </motion.div>
  )
}

// Morphing blob decoration
const MorphingBlob = ({ className }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      borderRadius: [
        '60% 40% 30% 70% / 60% 30% 70% 40%',
        '30% 60% 70% 40% / 50% 60% 30% 60%',
        '60% 40% 30% 70% / 60% 30% 70% 40%',
      ],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className="w-full h-full bg-gradient-to-r from-sunset-gold/30 to-sunset-orange/30 blur-3xl" />
  </motion.div>
)

export default function Hero() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Parallax scroll effect
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const contentY = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  // Track mouse for cursor blob
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Image slider
  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % heroMedia.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Cursor follower blob */}
      <CursorBlob mouseX={mouseX} mouseY={mouseY} />
      
      <section 
        ref={containerRef}
        className="relative w-full min-h-screen lg:-mt-20 overflow-hidden"
      >
        {/* Background Layer with Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: backgroundY }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMediaIndex}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={heroMedia[currentMediaIndex].url}
                alt={heroMedia[currentMediaIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Multi-layer gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-transparent" />
          
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
          />
        </motion.div>

        {/* Morphing blob decorations */}
        <MorphingBlob className="w-[600px] h-[600px] -left-48 top-1/4 opacity-40" />
        <MorphingBlob className="w-[400px] h-[400px] right-1/4 bottom-1/4 opacity-30" />

        {/* Floating destination cards */}
        {floatingCards.map((card, index) => (
          <FloatingCard key={card.id} card={card} index={index} />
        ))}

        {/* Main Content */}
        <motion.div 
          className="relative z-10 min-h-screen flex items-center"
          style={{ y: contentY, opacity }}
        >
          <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Column - Main Content */}
              <div className="space-y-8">
                
                {/* Live Activity Ticker */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <ActivityTicker activities={liveActivities} />
                </motion.div>
                
                {/* Main Headline with Character Animation */}
                <div className="space-y-2">
                  <h1 className="text-white font-bold leading-[0.95] tracking-tight">
                    <AnimatedText 
                      text="Not a Hostel." 
                      className="block text-[clamp(2.5rem,8vw,5rem)]"
                      delay={0.5}
                    />
                    <motion.span 
                      className="block text-[clamp(2.5rem,8vw,5rem)] bg-gradient-to-r from-sunset-gold via-sunset-orange to-sunset-gold bg-clip-text text-transparent bg-[length:200%_auto]"
                      animate={{ backgroundPosition: ['0% center', '200% center'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <AnimatedText text="A Hidden Tribe." delay={0.8} />
                    </motion.span>
                  </h1>
                </div>
                
                {/* Subtext with reveal */}
                <motion.p 
                  className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Where backpackers become friends, strangers share stories by the bonfire, 
                  and every morning feels like the start of a new adventure.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-wrap items-center gap-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <Link href="/stays" className="group relative">
                    <motion.div
                      className="relative px-8 py-4 bg-gradient-to-r from-sunset-gold to-sunset-orange rounded-full font-semibold text-white overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative flex items-center gap-2">
                        Book Your Adventure
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 5 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/experiences" className="group">
                    <motion.div
                      className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full font-medium text-white hover:bg-white/20 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xl group-hover:animate-bounce">🎪</span>
                      Explore Experiences
                    </motion.div>
                  </Link>
                </motion.div>
                
                {/* Social Proof */}
                <motion.div 
                  className="flex items-center gap-5 pt-6"
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  {/* Traveler avatars */}
                  <div className="flex -space-x-3">
                    {['🇦🇺', '🇩🇪', '🇮🇳', '🇺🇸', '🇫🇷'].map((flag, i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center text-lg shadow-lg"
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1.8 + (i * 0.1), type: 'spring' }}
                        whileHover={{ y: -5, scale: 1.1 }}
                      >
                        {flag}
                      </motion.div>
                    ))}
                    <motion.div
                      className="w-10 h-10 rounded-full bg-sunset-gold border-2 border-white/50 flex items-center justify-center text-white text-xs font-bold shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.3, type: 'spring' }}
                    >
                      +47
                    </motion.div>
                  </div>
                  <div className="text-white/80 text-sm">
                    <span className="font-semibold text-white">12 countries</span> represented this month
                  </div>
                </motion.div>
              </div>
              
              {/* Right Column - Quick Search Card (Desktop) */}
              <motion.div 
                className="hidden lg:block"
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                animate={isLoaded ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative">
                  {/* Glow effect behind card */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-sunset-gold/30 to-sunset-orange/30 rounded-[40px] blur-2xl opacity-50" />
                  
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl border border-white/50">
                    {/* Card header with illustration */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-charcoal font-bold text-2xl mb-1">
                          Find your tribe
                        </h2>
                        <p className="text-charcoal-muted text-sm">
                          Search across 4 epic destinations
                        </p>
                      </div>
                      <motion.div 
                        className="text-4xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        🐒
                      </motion.div>
                    </div>
                    
                    {/* Quick destination pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['Varanasi', 'Rishikesh', 'Goa', 'Darjeeling'].map((dest, i) => (
                        <motion.button
                          key={dest}
                          className="px-4 py-2 bg-sand-cream hover:bg-sunset-gold/10 border border-border hover:border-sunset-gold/30 rounded-full text-sm text-charcoal font-medium transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                        >
                          {dest}
                        </motion.button>
                      ))}
                    </div>
                    
                    {/* Date inputs */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="group px-4 py-3 bg-sand-cream border border-border rounded-xl hover:border-sunset-gold/50 transition-all cursor-pointer">
                        <p className="text-xs text-charcoal-muted mb-1">Check in</p>
                        <p className="text-charcoal font-medium text-sm">Select date</p>
                      </div>
                      <div className="group px-4 py-3 bg-sand-cream border border-border rounded-xl hover:border-sunset-gold/50 transition-all cursor-pointer">
                        <p className="text-xs text-charcoal-muted mb-1">Check out</p>
                        <p className="text-charcoal font-medium text-sm">Select date</p>
                      </div>
                    </div>
                    
                    {/* Travelers */}
                    <div className="group px-4 py-3 bg-sand-cream border border-border rounded-xl hover:border-sunset-gold/50 transition-all cursor-pointer mb-6">
                      <p className="text-xs text-charcoal-muted mb-1">Travelers</p>
                      <p className="text-charcoal font-medium text-sm">1 solo adventurer</p>
                    </div>
                    
                    {/* CTA */}
                    <Link href="/stays" className="block">
                      <motion.button
                        className="w-full py-4 bg-charcoal hover:bg-charcoal/90 text-white font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        Search Availability
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </motion.button>
                    </Link>
                    
                    {/* Trust badges */}
                    <div className="mt-5 pt-5 border-t border-border flex items-center justify-center gap-6 text-xs text-charcoal-muted">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Free cancellation
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Best price
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Image indicators */}
        <div className="absolute bottom-8 right-8 flex items-center gap-2 z-20">
          {heroMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMediaIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentMediaIndex 
                  ? 'w-8 h-2 bg-white' 
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <motion.div 
        className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-border z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-charcoal font-semibold text-sm">Join the tribe</p>
              <p className="text-charcoal-muted text-xs">47 travelers online now</p>
            </div>
            <Link
              href="/stays"
              className="px-6 py-3 bg-gradient-to-r from-sunset-gold to-sunset-orange text-white font-semibold rounded-full text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}
