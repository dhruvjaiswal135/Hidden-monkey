'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'

/**
 * Destinations Section - Ultimate Creative Edition
 * 
 * Design Philosophy:
 * "Each destination is a portal to a unique adventure"
 * 
 * Features:
 * - Interactive 3D card reveals
 * - Parallax scroll effects
 * - Live traveler counts
 * - Animated background elements
 * - Immersive hover states
 */

// Destination data with rich details
const destinations = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'Where Souls Find Peace',
    description: 'Ancient ghats, spiritual awakenings, and unforgettable sunrise boat rides along the Ganges.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
    color: 'from-amber-500 to-orange-600',
    emoji: '🛕',
    travelers: 28,
    experiences: ['Sunrise Boat Ride', 'Ghat Walk', 'Temple Tour'],
    vibe: 'Spiritual • Historic • Mystical',
    price: '₹899',
    rating: 4.9,
    reviews: 234,
    highlight: 'Watch the legendary Ganga Aarti ceremony',
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Adventure Meets Serenity',
    description: 'Yoga capital of the world meets adrenaline paradise. Raft by day, meditate by sunset.',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=800&q=80',
    color: 'from-emerald-500 to-teal-600',
    emoji: '🧘',
    travelers: 34,
    experiences: ['White Water Rafting', 'Yoga Sessions', 'Beatles Ashram'],
    vibe: 'Adventure • Wellness • Peaceful',
    price: '₹799',
    rating: 4.8,
    reviews: 189,
    highlight: 'Camp under stars by the Ganges',
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'Where Mountains Touch Clouds',
    description: 'Tea gardens, toy trains, and the majestic Kanchenjunga views that steal your breath.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    color: 'from-blue-500 to-indigo-600',
    emoji: '🍵',
    travelers: 19,
    experiences: ['Toy Train Ride', 'Tea Tasting', 'Tiger Hill Sunrise'],
    vibe: 'Scenic • Cozy • Colonial',
    price: '₹999',
    rating: 4.9,
    reviews: 156,
    highlight: 'Witness sunrise over Himalayan peaks',
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Where The Party Never Ends',
    description: 'Beach vibes, golden sunsets, and that perfect blend of Portuguese charm and Indian soul.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    color: 'from-pink-500 to-rose-600',
    emoji: '🏖️',
    travelers: 45,
    experiences: ['Beach Hopping', 'Night Markets', 'Spice Tours'],
    vibe: 'Beachy • Vibrant • Chill',
    price: '₹699',
    rating: 4.7,
    reviews: 312,
    highlight: 'Dance barefoot on the beach at sunset',
  },
]

// Animated background blob
const BackgroundBlob = ({ className }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.4, 0.3],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
  />
)

// Destination Card Component
const DestinationCard = ({ destination, index, isExpanded, onExpand }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="relative bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={() => onExpand(destination.id === isExpanded ? null : destination.id)}
        layoutId={`card-${destination.id}`}
      >
        {/* Image Container */}
        <div className="relative h-64 lg:h-72 overflow-hidden">
          <motion.img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${destination.color} opacity-40 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <motion.div
              className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-charcoal text-xs font-medium">{destination.travelers} travelers</span>
            </motion.div>
            
            <motion.div
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              {destination.emoji}
            </motion.div>
          </div>
          
          {/* Bottom content */}
          <div className="absolute bottom-4 left-4 right-4">
            <motion.h3 
              className="text-white font-bold text-2xl mb-1"
              layoutId={`title-${destination.id}`}
            >
              {destination.name}
            </motion.h3>
            <p className="text-white/80 text-sm">{destination.tagline}</p>
          </div>
        </div>
        
        {/* Card body */}
        <div className="p-5">
          {/* Vibe tags */}
          <p className="text-charcoal-muted text-xs mb-3">{destination.vibe}</p>
          
          {/* Description */}
          <p className="text-charcoal text-sm leading-relaxed mb-4">
            {destination.description}
          </p>
          
          {/* Experience pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {destination.experiences.map((exp, i) => (
              <motion.span
                key={exp}
                className="px-3 py-1 bg-sand-cream text-charcoal text-xs rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {exp}
              </motion.span>
            ))}
          </div>
          
          {/* Highlight */}
          <div className="flex items-center gap-2 text-xs text-charcoal-muted mb-4">
            <svg className="w-4 h-4 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{destination.highlight}</span>
          </div>
          
          {/* Footer with price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <span className="text-xs text-charcoal-muted">from</span>
              <span className="text-xl font-bold text-charcoal ml-1">{destination.price}</span>
              <span className="text-xs text-charcoal-muted">/night</span>
            </div>
            
            <Link href={`/destinations?location=${destination.id}`}>
              <motion.button
                className={`px-5 py-2.5 bg-gradient-to-r ${destination.color} text-white text-sm font-semibold rounded-full flex items-center gap-2 shadow-lg`}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${destination.color} rounded-[36px] opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`}
        />
      </motion.div>
      
      {/* Rating badge - floating */}
      <motion.div
        className="absolute -top-3 -right-3 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-1.5 z-10"
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
      >
        <svg className="w-4 h-4 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-charcoal font-bold text-sm">{destination.rating}</span>
        <span className="text-charcoal-muted text-xs">({destination.reviews})</span>
      </motion.div>
    </motion.div>
  )
}

// Stats counter component
const StatCounter = ({ value, label, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.p
        className="text-3xl lg:text-4xl font-bold text-charcoal"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        {value}
      </motion.p>
      <p className="text-charcoal-muted text-sm mt-1">{label}</p>
    </motion.div>
  )
}

export default function Destinations() {
  const [expandedCard, setExpandedCard] = useState(null)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -30])

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-sand-cream overflow-hidden"
    >
      {/* Animated background elements */}
      <BackgroundBlob className="w-[500px] h-[500px] bg-sunset-gold -top-48 -left-48" />
      <BackgroundBlob className="w-[400px] h-[400px] bg-sunset-orange -bottom-32 -right-32" />
      
      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 text-6xl opacity-10 pointer-events-none"
        style={{ y: backgroundY }}
      >
        🗺️
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-5xl opacity-10 pointer-events-none hidden lg:block"
        style={{ y: backgroundY }}
      >
        ✈️
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          style={{ y: headerY }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl">🌍</span>
            <span className="text-charcoal font-medium text-sm">4 Epic Destinations</span>
          </motion.div>
          
          <motion.h2 
            className="text-charcoal font-bold text-4xl lg:text-5xl xl:text-6xl mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Where Will Your{' '}
            <span className="bg-gradient-to-r from-sunset-gold to-sunset-orange bg-clip-text text-transparent">
              Story
            </span>
            {' '}Begin?
          </motion.h2>
          
          <motion.p 
            className="text-charcoal-muted text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Each Hidden Monkey outpost has its own unique vibe. Choose your adventure 
            and become part of a community that spans the world.
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="flex justify-center gap-12 lg:gap-20 mb-16 pb-16 border-b border-charcoal/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <StatCounter value="126" label="travelers this month" delay={0.3} />
          <StatCounter value="12" label="countries represented" delay={0.4} />
          <StatCounter value="4.8" label="avg. rating" delay={0.5} />
        </motion.div>

        {/* Destination Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
              isExpanded={expandedCard}
              onExpand={setExpandedCard}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-charcoal-muted text-sm mb-4">
            Can't decide? Take our quiz to find your perfect match
          </p>
          <Link href="/destinations">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal hover:bg-charcoal/90 text-white font-semibold rounded-full transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View All Destinations</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 lg:h-24 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.15,141.14,## 282.15,141.14,321.39,56.44,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
