'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'

/**
 * Meet the Tribe Section
 * Enhanced testimonials with country flags, travel dates, and emotional stories
 * Includes a mini world map preview showing global community
 */

// Traveler testimonials data
const travelers = [
  {
    id: 1,
    name: 'Sarah',
    country: 'Australia',
    flag: '🇦🇺',
    city: 'Melbourne',
    stayDates: 'Nov 2025',
    stayLength: '3 weeks',
    quote: 'I came for a week and stayed for three. Made best friends, went on the most amazing treks, and learned more about myself than in years at home.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    highlight: 'Found my travel family',
  },
  {
    id: 2,
    name: 'Marco',
    country: 'Italy',
    flag: '🇮🇹',
    city: 'Rome',
    stayDates: 'Oct 2025',
    stayLength: '2 months',
    quote: 'Finally found a place where remote work meets real community. The WiFi actually works, and the people here become your friends, not just housemates.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    highlight: 'Digital nomad paradise',
  },
  {
    id: 3,
    name: 'Priya',
    country: 'India',
    flag: '🇮🇳',
    city: 'Delhi',
    stayDates: 'Dec 2025',
    stayLength: '10 days',
    quote: 'As a solo female traveler, I felt safer here than anywhere else I\'ve stayed. The whole vibe just says "we\'ve got you."',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    highlight: 'Safe & welcoming',
  },
  {
    id: 4,
    name: 'Jake',
    country: 'USA',
    flag: '🇺🇸',
    city: 'Portland',
    stayDates: 'Sep 2025',
    stayLength: '2 weeks',
    quote: 'The staff are actual travelers, not just people working a job. They actually care about the experience, not just bookings.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    highlight: 'Staff who get it',
  },
  {
    id: 5,
    name: 'Elena',
    country: 'Germany',
    flag: '🇩🇪',
    city: 'Berlin',
    stayDates: 'Aug 2025',
    stayLength: '1 week',
    quote: 'The morning yoga on the rooftop watching the sun rise over the mountains is something I\'ll never forget. Pure magic.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    highlight: 'Unforgettable moments',
  },
  {
    id: 6,
    name: 'Carlos',
    country: 'Brazil',
    flag: '🇧🇷',
    city: 'São Paulo',
    stayDates: 'Jul 2025',
    stayLength: '3 weeks',
    quote: 'Brought my friends here for a reunion and we didn\'t want to leave. This place just has that special something that makes you feel like home.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    highlight: 'Feels like home',
  },
]

// Stats for the section
const communityStats = [
  { number: '50+', label: 'Countries' },
  { number: '12k+', label: 'Travelers' },
  { number: '4.9', label: 'Rating', suffix: '⭐' },
  { number: '85%', label: 'Return visitors' },
]

// Testimonial Card
function TestimonialCard({ traveler, index }) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Slight rotation for playful feel
  const rotations = [-1.5, 1, -0.5, 1.5, -1, 0.5]
  const rotation = rotations[index % rotations.length]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, rotate: 0, transition: { duration: 0.3 } }}
      className="flex-shrink-0 w-[320px] md:w-[360px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full bg-white rounded-[24px] p-6 border border-border shadow-soft hover:shadow-card-hover transition-all duration-300">
        {/* Quote Icon */}
        <div className="flex items-start gap-2 mb-4">
          <svg className="w-8 h-8 text-sunset-gold/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          {/* Highlight tag */}
          <span className="px-3 py-1 bg-sunset-gold/10 text-sunset-gold text-xs font-medium rounded-full">
            {traveler.highlight}
          </span>
        </div>
        
        {/* Quote */}
        <p className="text-charcoal text-[15px] leading-relaxed mb-6">
          "{traveler.quote}"
        </p>
        
        {/* Divider */}
        <div className="h-px bg-border mb-4" />
        
        {/* Author Info */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative">
            <img 
              src={traveler.avatar}
              alt={traveler.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            {/* Country flag */}
            <span className="absolute -bottom-1 -right-1 text-lg">
              {traveler.flag}
            </span>
          </div>
          
          {/* Name & Details */}
          <div className="flex-1">
            <p className="text-charcoal font-semibold text-sm">
              {traveler.name}
            </p>
            <p className="text-charcoal-muted text-xs">
              {traveler.city}, {traveler.country}
            </p>
          </div>
          
          {/* Stay info */}
          <div className="text-right">
            <p className="text-charcoal-muted text-[11px]">
              {traveler.stayDates}
            </p>
            <p className="text-sunset-gold text-[11px] font-medium">
              {traveler.stayLength}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Mini World Map showing community spread
function WorldMapPreview() {
  return (
    <div className="relative bg-jungle-dark rounded-[24px] p-6 md:p-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Simplified world map outline */}
          <ellipse cx="200" cy="100" rx="180" ry="80" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4,4" />
          <ellipse cx="200" cy="100" rx="120" ry="50" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="2,2" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
          A global tribe 🌍
        </h3>
        <p className="text-white/70 text-sm mb-6 max-w-xs">
          Travelers from over 50 countries have called Hidden Monkey home.
        </p>
        
        {/* Country flags floating */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['🇦🇺', '🇮🇹', '🇺🇸', '🇩🇪', '🇧🇷', '🇫🇷', '🇬🇧', '🇯🇵', '🇨🇦', '🇳🇱', '🇪🇸', '🇮🇳'].map((flag, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.05), duration: 0.3, type: 'spring' }}
            >
              {flag}
            </motion.span>
          ))}
          <span className="text-white/60 text-sm font-medium self-center ml-2">+38 more</span>
        </div>
        
        {/* CTA */}
        <a 
          href="/community"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full border border-white/20 transition-all duration-300"
        >
          Explore the community
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      
      {/* Floating pins */}
      <div className="absolute top-4 right-4 flex -space-x-2">
        {['🇦🇺', '🇮🇹', '🇺🇸'].map((flag, i) => (
          <motion.div
            key={i}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm border border-white/30"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          >
            {flag}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function MeetTheTribe() {
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
      aria-label="Meet the Tribe"
    >
      <Container className="max-w-[1400px]">
        {/* Section Header */}
        <motion.div 
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.span 
                className="inline-block px-3 py-1 bg-sunset-gold/10 text-sunset-gold text-sm font-medium rounded-full mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                ❤️ Real stories from real travelers
              </motion.span>
              <h2 className="text-charcoal text-[28px] md:text-[40px] font-bold leading-tight">
                Meet the tribe
              </h2>
              <p className="text-charcoal-muted text-base md:text-lg mt-2 max-w-xl">
                Thousands have stayed. Here's what they remember most.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex gap-6 md:gap-8">
              {communityStats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                >
                  <p className="text-charcoal text-2xl md:text-3xl font-bold">
                    {stat.number}{stat.suffix || ''}
                  </p>
                  <p className="text-charcoal-muted text-xs md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Testimonials Horizontal Scroll */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 md:-mx-8 md:px-8 scrollbar-hide"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          >
            {travelers.map((traveler, index) => (
              <TestimonialCard key={traveler.id} traveler={traveler} index={index} />
            ))}
          </div>
          
          {/* Scroll indicators (fade edges) */}
          <div className="absolute top-0 bottom-4 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 bottom-4 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
        </div>
        
        {/* World Map Preview */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <WorldMapPreview />
        </motion.div>
      </Container>
    </section>
  )
}
