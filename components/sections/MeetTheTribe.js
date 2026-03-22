'use client'

import { useRef, useEffect, useState } from 'react'
import Container from '@/components/ui/Container'

function useReveal(threshold = 0.15) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

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
    countryCode: 'AU',
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
    countryCode: 'IT',
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
    countryCode: 'IN',
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
    countryCode: 'US',
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
    countryCode: 'DE',
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
    countryCode: 'BR',
    city: 'S\u00e3o Paulo',
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
  return (
    <div
      className="flex-shrink-0 w-[320px] md:w-[360px] group"
    >
      <div className="h-full bg-white rounded-[24px] p-6 border border-neutral-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
        {/* Quote Icon + Highlight */}
        <div className="flex items-start gap-2 mb-4">
          <svg className="w-8 h-8 text-sunset-gold/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <span className="px-3 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full">
            {traveler.highlight}
          </span>
        </div>

        {/* Quote */}
        <p className="text-charcoal text-[15px] leading-relaxed mb-6">
          &ldquo;{traveler.quote}&rdquo;
        </p>

        {/* Divider */}
        <div className="h-px bg-neutral-100 mb-4" />

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={traveler.avatar}
              alt={traveler.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-charcoal flex items-center justify-center text-white text-[8px] font-bold">
              {traveler.countryCode}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-charcoal font-semibold text-sm">{traveler.name}</p>
            <p className="text-charcoal-muted text-xs">{traveler.city}, {traveler.country}</p>
          </div>
          <div className="text-right">
            <p className="text-charcoal-muted text-[11px]">{traveler.stayDates}</p>
            <p className="text-sunset-gold text-[11px] font-medium">{traveler.stayLength}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Community banner
function WorldMapPreview() {
  return (
    <div className="relative bg-charcoal rounded-[24px] p-6 md:p-8 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            A global tribe
          </h3>
          <p className="text-white/65 text-sm max-w-xs">
            Travelers from over 50 countries have called Hidden Monkey home.
          </p>
        </div>

        {/* Country codes */}
        <div className="flex flex-wrap gap-2">
          {['AU', 'IT', 'US', 'DE', 'BR', 'FR', 'GB', 'JP', 'CA', 'NL', 'ES', 'IN'].map((code, i) => (
            <span key={i} className="px-2 py-1 bg-white/10 text-white/70 text-[10px] font-medium rounded border border-white/15">{code}</span>
          ))}
          <span className="text-white/50 text-sm font-medium self-center ml-1">+38 more</span>
        </div>

        {/* CTA */}
        <a
          href="/community"
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full border border-white/20 transition-colors"
        >
          Explore the community
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function MeetTheTribe() {
  const scrollContainerRef = useRef(null)
  const [headerRef, headerVisible] = useReveal(0.1)
  const [mapRef, mapVisible] = useReveal(0.1)

  return (
    <section
      className="py-20 md:py-28 bg-white"
      aria-label="Meet the Tribe"
    >
      <Container className="max-w-[1440px]">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-10 md:mb-14 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-neutral-200 text-neutral-500 text-[11px] tracking-[0.2em] uppercase rounded-full mb-5">
                Real stories from real travelers
              </span>
              <h2 className="text-charcoal font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight">
                Meet the tribe
              </h2>
              <p className="text-charcoal-muted text-base md:text-lg mt-2 max-w-xl">
                Thousands have stayed. Here&rsquo;s what they remember most.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-8">
              {communityStats.map((stat, i) => (
                <div
                  key={i}
                  className={`text-center transition-all duration-500 ${
                    headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <p className="text-charcoal text-2xl md:text-3xl font-bold">
                    {stat.number}
                  </p>
                  <p className="text-charcoal-muted text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

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
          {/* Fade edges */}
          <div className="absolute top-0 bottom-4 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 bottom-4 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* Community Banner */}
        <div
          ref={mapRef}
          className={`mt-12 transition-all duration-700 ${
            mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <WorldMapPreview />
        </div>
      </Container>
    </section>
  )
}
