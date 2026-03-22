'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
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
 * Work From Paradise Section
 */

// Nomad testimonial
const nomadTestimonial = {
  quote: "I've worked from hostels in 20+ countries. Hidden Monkey is the first place where I didn't have to choose between good WiFi and good vibes. Both just happen here.",
  name: "Alex Chen",
  role: "Software Engineer",
  company: "Remote @ Stripe",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
}

// Nomads currently here (simulated)
const nomadsHere = [
  { id: 1, country: 'US', role: 'Designer' },
  { id: 2, country: 'DE', role: 'Developer' },
  { id: 3, country: 'FR', role: 'Writer' },
  { id: 4, country: 'AU', role: 'Marketer' },
  { id: 5, country: 'JP', role: 'Engineer' },
]

export default function WorkFromParadise() {
  const [leftRef, leftVisible] = useReveal(0.15)
  const [rightRef, rightVisible] = useReveal(0.15)

  return (
    <section
      className="py-16 md:py-20 bg-charcoal"
      aria-label="Work from Paradise"
    >
      <Container className="max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Column — Content */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-7">
              <span className="px-3 py-1 bg-white/10 text-white/50 text-[11px] tracking-[0.2em] uppercase rounded-full">
                For digital nomads
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-[11px]">100+ Mbps live</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-white font-bold leading-[0.92] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.6rem,5vw,4rem)' }}>
              Work without<br />
              <span className="text-sunset-gold">compromise.</span>
            </h2>

            <p className="text-white/50 text-sm md:text-[15px] leading-relaxed mb-8 max-w-sm">
              Fast internet, dedicated desks, and a community of remote workers who actually inspire you.
            </p>

            {/* Stats strip */}
            <div className="grid grid-cols-4 mb-8 border border-white/10 rounded-2xl overflow-hidden">
              {[
                { value: '100+', label: 'Mbps' },
                { value: '24/7', label: 'Access' },
                { value: '15+', label: 'Nomads' },
                { value: '4.9', label: 'Rating' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`py-4 text-center ${i < 3 ? 'border-r border-white/10' : ''}`}
                >
                  <p className="text-white font-bold text-lg leading-none mb-1">{stat.value}</p>
                  <p className="text-white/35 text-[10px] tracking-widest uppercase">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sunset-gold hover:bg-sunset-orange text-white text-sm font-medium rounded-full transition-colors"
              >
                Explore workspace
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#stays"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 hover:bg-white/12 text-white/80 text-sm font-medium rounded-full border border-white/12 transition-colors"
              >
                Book a desk
              </a>
            </div>
          </div>

          {/* Right Column — Image */}
          <div
            ref={rightRef}
            className={`relative transition-all duration-700 delay-150 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Coworking at Hidden Monkey"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/25" />

              {/* Nomads here card */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-charcoal text-sm font-semibold">Nomads here now</p>
                    <span className="text-xs text-charcoal-muted">{nomadsHere.length} working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {nomadsHere.map((nomad) => (
                      <div key={nomad.id} className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-charcoal-muted shadow-sm">
                          {nomad.country}
                        </div>
                        <span className="text-[9px] text-charcoal-muted mt-1">{nomad.role}</span>
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-sunset-gold/10 border-2 border-sunset-gold/30 flex items-center justify-center text-sunset-gold text-xs font-bold">
                      +8
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial — static card */}
            <div className="hidden md:block absolute -bottom-8 -right-4 lg:-right-8 w-[280px] bg-white rounded-2xl p-4 shadow-xl border border-neutral-100">
              <div className="flex items-center gap-0.5 mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3 h-3 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-charcoal text-xs leading-relaxed mb-3">
                &ldquo;{nomadTestimonial.quote.substring(0, 110)}&hellip;&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={nomadTestimonial.avatar}
                  alt={nomadTestimonial.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-charcoal text-xs font-semibold">{nomadTestimonial.name}</p>
                  <p className="text-charcoal-muted text-[10px]">{nomadTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
