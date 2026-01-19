'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'

/**
 * Work From Paradise Section
 * Dedicated digital nomad section highlighting remote work amenities
 * WiFi speed, coworking spaces, nomad community
 */

// Work features
const workFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'High-Speed WiFi',
    description: '100+ Mbps fiber connection with backup',
    stat: '100 Mbps',
    statLabel: 'avg speed',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Coworking Spaces',
    description: 'Dedicated desks, power outlets, good lighting',
    stat: '24/7',
    statLabel: 'access',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Quiet Zones',
    description: 'Focus areas for deep work sessions',
    stat: '3',
    statLabel: 'zones',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Nomad Community',
    description: 'Meet other remote workers daily',
    stat: '15+',
    statLabel: 'nomads/week',
  },
]

// Nomad testimonial
const nomadTestimonial = {
  quote: "I've worked from hostels in 20+ countries. Hidden Monkey is the first place where I didn't have to choose between good WiFi and good vibes. Both just happen here.",
  name: "Alex Chen",
  role: "Software Engineer",
  company: "Remote @ Stripe",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  flag: "🇨🇦"
}

// Nomads currently here (simulated)
const nomadsHere = [
  { id: 1, country: '🇺🇸', role: 'Designer' },
  { id: 2, country: '🇩🇪', role: 'Developer' },
  { id: 3, country: '🇫🇷', role: 'Writer' },
  { id: 4, country: '🇦🇺', role: 'Marketer' },
  { id: 5, country: '🇯🇵', role: 'Engineer' },
]

export default function WorkFromParadise() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-jungle-dark to-jungle-moss overflow-hidden"
      aria-label="Work from Paradise"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      
      <Container className="max-w-[1400px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.span 
              className="inline-block px-3 py-1 bg-sunset-gold/20 text-sunset-gold text-sm font-medium rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              💻 For digital nomads
            </motion.span>
            
            <h2 className="text-white text-[28px] md:text-[40px] font-bold leading-tight mb-4">
              Work from paradise
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-lg">
              Fast WiFi, quiet corners, and a community of remote workers who get it. 
              Your most productive workdays might just happen here.
            </p>
            
            {/* WiFi Speed Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Live WiFi</span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div>
                <span className="text-white text-xl font-bold">100+ Mbps</span>
                <span className="text-white/50 text-sm ml-2">avg speed</span>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {workFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                >
                  <div className="text-sunset-gold mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-sm font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sunset-gold hover:bg-sunset-orange text-white font-medium rounded-full transition-all duration-300 shadow-button hover:shadow-button-hover"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#stays"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/20 transition-all duration-300"
              >
                Book a coworking spot
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Image */}
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Coworking at Hidden Monkey"
                fill
                className="object-cover"
                unoptimized
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Nomads currently here card */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-glass">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-charcoal text-sm font-semibold">Nomads here now</p>
                    <span className="text-xs text-charcoal-muted">{nomadsHere.length} working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {nomadsHere.map((nomad, i) => (
                      <motion.div
                        key={nomad.id}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + (i * 0.1), duration: 0.3, type: 'spring' }}
                      >
                        <div className="w-10 h-10 rounded-full bg-sand-cream border-2 border-white flex items-center justify-center text-lg shadow-sm">
                          {nomad.country}
                        </div>
                        <span className="text-[9px] text-charcoal-muted mt-1">{nomad.role}</span>
                      </motion.div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-sunset-gold/10 border-2 border-sunset-gold/30 flex items-center justify-center text-sunset-gold text-xs font-bold">
                      +8
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Card - Floating */}
            <motion.div
              className="absolute -bottom-8 -right-4 lg:-right-8 w-[280px] bg-white rounded-2xl p-4 shadow-card-hover border border-border hidden md:block"
              initial={{ opacity: 0, y: 20, rotate: 3 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 3 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3 h-3 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-charcoal text-xs leading-relaxed mb-3">
                "{nomadTestimonial.quote.substring(0, 120)}..."
              </p>
              <div className="flex items-center gap-2">
                <img 
                  src={nomadTestimonial.avatar}
                  alt={nomadTestimonial.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-charcoal text-xs font-semibold flex items-center gap-1">
                    {nomadTestimonial.name}
                    <span>{nomadTestimonial.flag}</span>
                  </p>
                  <p className="text-charcoal-muted text-[10px]">{nomadTestimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
