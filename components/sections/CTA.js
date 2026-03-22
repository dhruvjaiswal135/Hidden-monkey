'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
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

const stats = [
  { value: '50+', label: 'Countries' },
  { value: '12k+', label: 'Travelers' },
  { value: '4.9', label: 'Rating' },
  { value: '85%', label: 'Return visitors' },
]

export default function CTA() {
  const [sectionRef, isInView] = useReveal(0.25)

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-charcoal"
      aria-label="Call to Action"
    >
      <Container className="max-w-5xl">
        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 mb-16 border-b border-white/10"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-bold text-3xl md:text-4xl tracking-tight">{s.value}</p>
              <p className="text-white/40 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div
          className="text-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >
          <p className="text-white/40 text-[11px] font-medium tracking-[0.2em] uppercase mb-5">
            Join the Tribe
          </p>

          <h2 className="text-white font-bold leading-tight tracking-tight mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Ready for your next<br />
            <span className="text-sunset-gold">adventure?</span>
          </h2>

          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto mb-10 font-light leading-relaxed">
            Book now and become part of the tribe that thousands of travelers
            already call home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/stays"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-sunset-gold text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Check availability
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/8 text-white/80 text-sm font-medium rounded-full border border-white/15 hover:bg-white/12 hover:text-white transition-colors"
            >
              Explore destinations
            </Link>
          </div>

          {/* Star rating */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/70 text-sm">4.9 &middot; 12,000+ travelers</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
