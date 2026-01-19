'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'

/**
 * Final CTA Section
 * Emotion-driven closing section with strong call to action
 * "Your adventure starts here"
 */

// Social proof data
const socialProof = {
  avatars: ['🇦🇺', '🇮🇹', '🇺🇸', '🇩🇪', '🇧🇷'],
  count: 12000,
  rating: 4.9,
}

export default function CTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden" 
      aria-label="Call to Action"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-light via-sand-cream to-sand-light" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <p className="text-[80px] md:text-[150px] lg:text-[200px] font-bold text-charcoal/[0.02] whitespace-nowrap text-center leading-none">
            JOIN THE TRIBE
          </p>
        </div>
        
        {/* Floating sparkles */}
        <motion.div
          className="absolute top-10 right-10 text-4xl opacity-20"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-3xl opacity-15"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          🎒
        </motion.div>
      </div>
      
      <Container className="max-w-4xl relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-sunset-gold/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-charcoal-muted text-sm font-medium">
              Beds available this week
            </span>
          </motion.div>
          
          {/* Main Headline */}
          <h2 className="text-charcoal text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-tight mb-4">
            Ready to join the<br />
            <span className="bg-gradient-to-r from-sunset-gold to-sunset-orange bg-clip-text text-transparent">
              Monkey House?
            </span>
          </h2>
          
          {/* Subtext */}
          <p className="text-charcoal-muted text-base md:text-lg max-w-xl mx-auto mb-8">
            Your next adventure is just one click away. Book now and become part of 
            the tribe that thousands of travelers already call home.
          </p>
          
          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link 
              href="#stays"
              className="group px-8 py-4 bg-gradient-to-r from-sunset-gold to-sunset-orange hover:from-sunset-orange hover:to-sunset-gold text-white font-semibold rounded-full transition-all duration-300 shadow-button hover:shadow-button-hover hover:-translate-y-0.5 flex items-center gap-2"
            >
              Check availability
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/community"
              className="px-8 py-4 bg-white hover:bg-sand-cream text-charcoal font-semibold border border-border hover:border-charcoal/20 rounded-full transition-all duration-300 shadow-soft"
            >
              Explore the community
            </Link>
          </motion.div>
          
          {/* Social Proof */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Traveler avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {socialProof.avatars.map((flag, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-sand-cream border-2 border-white flex items-center justify-center text-base shadow-sm"
                  >
                    {flag}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-jungle-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  +{Math.floor(socialProof.count / 1000)}k
                </div>
              </div>
              <p className="text-charcoal-muted text-sm">
                travelers and counting
              </p>
            </div>
            
            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-border" />
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-charcoal font-semibold">{socialProof.rating}</span>
              <span className="text-charcoal-muted text-sm">average rating</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
