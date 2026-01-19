'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import { SectionStickers } from '@/components/decorations/FloatingStickers'

/**
 * Life at Hidden Monkey Section
 * Instagram-style photo grid showcasing real moments
 * Hover reveals story/caption - creates emotional connection
 */

// Moment data - real hostel life snapshots
const moments = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&auto=format&fit=crop&q=80',
    caption: 'Bonfire nights hit different here 🔥',
    tags: ['bonfire', 'community', 'night'],
    likes: 234,
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=600&auto=format&fit=crop&q=80',
    caption: 'When strangers become travel family',
    tags: ['friends', 'community'],
    likes: 189,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80',
    caption: 'Morning chai with mountain views',
    tags: ['morning', 'chai', 'views'],
    likes: 312,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&auto=format&fit=crop&q=80',
    caption: 'Trek days are the best days',
    tags: ['trek', 'adventure'],
    likes: 267,
    featured: true,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop&q=80',
    caption: 'Finding the perfect work spot',
    tags: ['remote-work', 'nomad'],
    likes: 156,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80',
    caption: 'Kitchen sessions = best conversations',
    tags: ['kitchen', 'cooking', 'community'],
    likes: 198,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop&q=80',
    caption: 'Sunset watching is our sport',
    tags: ['sunset', 'chill'],
    likes: 421,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
    caption: 'Wake up to this every day',
    tags: ['morning', 'views', 'mountains'],
    likes: 378,
    featured: true,
  },
]

// Single moment card component
function MomentCard({ moment, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-[20px] cursor-pointer group ${
        moment.featured ? 'row-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-full min-h-[200px]">
        <Image
          src={moment.image}
          alt={moment.caption}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          unoptimized
        />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Always visible subtle overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      
      {/* Hover Content */}
      <div className={`absolute inset-0 p-4 flex flex-col justify-end transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Caption */}
        <p className="text-white text-sm md:text-base font-medium mb-2 leading-snug">
          {moment.caption}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {moment.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-[10px] font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Likes */}
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-sunset-coral" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span className="text-white/80 text-xs">{moment.likes}</span>
        </div>
      </div>
      
      {/* Featured badge */}
      {moment.featured && (
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-sunset-gold text-white text-[10px] font-bold rounded-full uppercase tracking-wide">
            Featured
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default function LifeAtMonkey() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
      aria-label="Life at Hidden Monkey"
    >
      {/* Decorative stickers */}
      <SectionStickers variant="community" />
      
      <Container className="max-w-[1400px]">
        {/* Section Header */}
        <motion.div 
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <motion.span 
                className="inline-block px-3 py-1 bg-sunset-gold/10 text-sunset-gold text-sm font-medium rounded-full mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                📸 Real moments, real people
              </motion.span>
              <h2 className="text-charcoal text-[28px] md:text-[40px] font-bold leading-tight">
                Life at the Monkey House
              </h2>
              <p className="text-charcoal-muted text-base md:text-lg mt-2 max-w-xl">
                Every day is a story. These are ours — unfiltered, unscripted, unforgettable.
              </p>
            </div>
            
            {/* Instagram link */}
            <a 
              href="https://instagram.com/hiddenmonkey" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-charcoal-muted hover:text-sunset-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-sm font-medium group-hover:underline">Follow @hiddenmonkey</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
        
        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {moments.map((moment, index) => (
            <MomentCard key={moment.id} moment={moment} index={index} />
          ))}
        </div>
        
        {/* View All CTA */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-medium rounded-full transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
          >
            View full gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
