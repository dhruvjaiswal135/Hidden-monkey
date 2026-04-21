'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useBooking } from '@/context/BookingContext'

const heroSlides = [
  {
    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=90',
    alt: 'View from a camping tent at golden hour',
  },
  {
    url: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&q=90',
    alt: 'Hiker with open arms on mountain overlook',
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90',
    alt: 'Mountain peaks in warm golden light',
  },
]

const destinations = ['Darjeeling', 'Varanasi']

export default function Hero() {
  const { openBooking } = useBooking()
  const [slide, setSlide] = useState(0)
  const [ready, setReady] = useState(false)
  const [dest, setDest] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const iv = setInterval(() => setSlide((p) => (p + 1) % heroSlides.length), 6500)
    return () => clearInterval(iv)
  }, [])

  const today = new Date().toISOString().split('T')[0]

  const anim = (d) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? 'none' : 'translateY(12px)',
    transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${d}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${d}s`,
  })

  return (
    <section id="hero" className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center"
          style={{ minHeight: 'calc(100svh - 120px)', paddingTop: '2rem', paddingBottom: '3rem' }}
        >
          {/* ─── LEFT COLUMN ─── */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6" style={anim(0.1)}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBB11A]" />
              <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#9A948C]">
                Community Hostels · India
              </span>
            </div>

            <h1 style={anim(0.2)}>
              <span className="block font-bold tracking-[-0.03em] leading-[1.05] text-[#1E1F1C] text-[clamp(2.2rem,5vw,3.6rem)]">
                Where strangers
              </span>
              <span className="block font-bold tracking-[-0.03em] leading-[1.05] mt-1 text-[clamp(2.2rem,5vw,3.6rem)]">
                <span className="text-[#1E1F1C]">become </span>
                <span className="relative inline-block text-[#FBB11A]">
                  travel family.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#128790]/20 rounded-full" />
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-[24rem] text-[#6B665E] text-[15px] md:text-[16px] leading-relaxed font-light" style={anim(0.3)}>
              Stay in places that feel like home, with people who feel like old friends. Two destinations, one spirit.
            </p>

            {/* ─── Compact Booking Card ─── */}
            <div className="mt-8 max-w-[560px]" style={anim(0.4)}>
              <div className="bg-white rounded-[24px] border border-[#E6E4DF] shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">
                <div className="flex divide-x divide-[#F0EDE8]">
                  <div className="flex-1 px-5 py-3">
                    <label className="block text-[9px] uppercase tracking-widest font-bold text-[#B8B1A6] mb-1">Where</label>
                    <select 
                      value={dest} 
                      onChange={(e) => setDest(e.target.value)}
                      className="w-full bg-transparent text-[13px] font-bold text-[#1E1F1C] outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Destinations</option>
                      {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="flex-1 px-5 py-3">
                    <label className="block text-[9px] uppercase tracking-widest font-bold text-[#B8B1A6] mb-1">Guests</label>
                    <select 
                      value={guests} 
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-transparent text-[13px] font-bold text-[#1E1F1C] outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Guests</option>
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Guests</option>)}
                    </select>
                  </div>
                </div>
                
                <div className="px-5 py-3 border-t border-[#F0EDE8] flex divide-x divide-[#F0EDE8]">
                   <div className="flex-1 pr-4">
                      <label className="block text-[9px] uppercase tracking-widest font-bold text-[#B8B1A6] mb-1">Check-in</label>
                      <input type="date" value={checkIn} min={today} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-transparent text-[12px] font-bold text-[#1E1F1C] outline-none cursor-pointer" />
                   </div>
                   <div className="flex-1 pl-4">
                      <label className="block text-[9px] uppercase tracking-widest font-bold text-[#B8B1A6] mb-1">Check-out</label>
                      <input type="date" value={checkOut} min={checkIn || today} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-transparent text-[12px] font-bold text-[#1E1F1C] outline-none cursor-pointer" />
                   </div>
                </div>

                <div className="p-3">
                  <button
                    onClick={() => openBooking({ destination: dest, checkIn, checkOut, guests: parseInt(guests) || 1 })}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#128790] text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#FBB11A] transition-all shadow-sm"
                  >
                    Book Your Journey
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-[#ADA89F] px-1">
                From <span className="text-[#128790] font-bold">₹499</span>/night · Community-first shared dorms
              </p>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: Compact Image ─── */}
          <div className="relative order-1 lg:order-2" style={anim(0.3)}>
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#E6E4DF]">
              {heroSlides.map((s, i) => (
                <Image
                  key={i}
                  src={s.url}
                  alt={s.alt}
                  fill
                  className={`object-cover transition-all duration-[1500ms] ${i === slide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                  priority={i === 0}
                  unoptimized
                />
              ))}

              <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`} />
                ))}
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-[20px] shadow-xl border border-[#F0EDE8] flex items-center gap-3 animate-float-slow">
               <div className="w-8 h-8 rounded-full bg-[#FBB11A]/10 flex items-center justify-center text-[#FBB11A]">⭐</div>
               <div>
                  <p className="text-[12px] font-bold text-[#1E1F1C]">4.8 Rating</p>
                  <p className="text-[9px] text-[#9A948C]">2k+ Travelers</p>
               </div>
            </div>

            {/* Handwritten */}
            <p className="hidden lg:block absolute -bottom-10 right-4 font-accent text-[18px] -rotate-3 text-[#B8B1A6]">
              find your tribe ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
