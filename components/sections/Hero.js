'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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

const destinations = ['Varanasi', 'Rishikesh', 'Goa', 'Darjeeling']

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden -mt-20">
      {/* Background */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === currentImage ? 1 : 0,
              transition: 'opacity 1.6s ease',
            }}
          >
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center">
        <div className="w-full grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_430px] gap-8 lg:gap-14 pt-20">

          {/* Left */}
          <div
            className="flex flex-col justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
              transitionDelay: '0.15s',
            }}
          >
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Community Hostels &nbsp;&middot;&nbsp; 4 Destinations Across India
            </p>

            <h1 className="text-white font-bold leading-[0.9] tracking-tight mb-7">
              <span className="block" style={{ fontSize: 'clamp(2.8rem,7.5vw,6rem)' }}>
                Not a Hostel.
              </span>
              <span className="block text-sunset-gold" style={{ fontSize: 'clamp(2.8rem,7.5vw,6rem)' }}>
                A Hidden Tribe.
              </span>
            </h1>

            <p className="text-[17px] leading-relaxed max-w-[420px] font-light mb-9" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Where backpackers become friends, strangers share stories by the
              bonfire, and every morning starts a new adventure.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/stays"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-sunset-gold text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                Book Your Adventure
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white text-sm font-medium rounded-full border border-white/25 hover:bg-white/10 transition-colors duration-200"
              >
                Explore Experiences
              </Link>
            </div>

            <p className="text-sm mt-8" style={{ color: 'rgba(255,255,255,0.38)' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>12 countries</span> represented this month
            </p>
          </div>

          {/* Right — Booking card */}
          <div
            className="hidden lg:flex items-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
              transitionDelay: '0.4s',
            }}
          >
            <div className="w-full bg-white rounded-2xl p-7" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.28)' }}>
              <h2 className="font-semibold text-neutral-900 text-[17px] mb-1">Find your tribe</h2>
              <p className="text-neutral-400 text-[13px] mb-5">Search across 4 destinations</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {destinations.map((dest) => (
                  <button
                    key={dest}
                    className="px-3.5 py-1.5 text-[12px] font-medium bg-neutral-50 text-neutral-600 rounded-full border border-neutral-200 hover:border-sunset-gold hover:text-sunset-gold transition-colors"
                  >
                    {dest}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="px-4 py-3 bg-neutral-50 rounded-xl cursor-pointer hover:bg-neutral-100 transition-colors">
                  <p className="text-[11px] text-neutral-400 mb-0.5">Check in</p>
                  <p className="text-neutral-900 text-[13px] font-medium">Select date</p>
                </div>
                <div className="px-4 py-3 bg-neutral-50 rounded-xl cursor-pointer hover:bg-neutral-100 transition-colors">
                  <p className="text-[11px] text-neutral-400 mb-0.5">Check out</p>
                  <p className="text-neutral-900 text-[13px] font-medium">Select date</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-neutral-50 rounded-xl cursor-pointer hover:bg-neutral-100 transition-colors mb-5">
                <p className="text-[11px] text-neutral-400 mb-0.5">Travelers</p>
                <p className="text-neutral-900 text-[13px] font-medium">1 solo adventurer</p>
              </div>

              <Link href="/stays" className="block">
                <button className="w-full py-3.5 bg-neutral-900 text-white text-[13px] font-semibold rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                  Search Availability
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </Link>

              <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-center gap-5">
                <span className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free cancellation
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Best price
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 lg:right-10 flex items-center gap-1.5 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === currentImage ? '20px' : '6px',
              height: '6px',
              backgroundColor: i === currentImage ? 'white' : 'rgba(255,255,255,0.32)',
            }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer"
        style={{ opacity: 0.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <span className="text-white text-[10px] font-medium tracking-[0.22em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bg-white" style={{ height: '40%', animation: 'scrollLine 2s ease-in-out infinite' }} />
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 border-t border-neutral-100 z-40 px-5 py-4" style={{ backgroundColor: 'rgba(255,255,255,0.97)' }}>
        <Link
          href="/stays"
          className="block w-full py-3.5 bg-sunset-gold text-white font-semibold text-sm text-center rounded-full"
        >
          Book Your Adventure
        </Link>
      </div>
    </section>
  )
}
