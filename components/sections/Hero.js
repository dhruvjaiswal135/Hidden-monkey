'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useBooking, nightsBetween } from '@/context/BookingContext'
import { HERO_SLIDES, TRIBE_AVATARS, CTA_AVATARS } from '@/content/images'
import { HOMESTAY_FROM_PRICE } from '@/content/homestays'

const COPY = {
  hostel: { line1: 'Beds from ₹499.', line2: 'Friends for life.', sub: "Community hostels in India's most soulful places. Pod beds that actually sleep well, a kitchen that's always buzzing, and a bonfire most nights.", base: 499 },
  homestay: { line1: 'A room in a family home.', line2: "Dinner's at eight.", sub: "Homestays with local families in Darjeeling and Varanasi. Your own room, home-cooked breakfast and dinner, and the hostel's events two minutes away.", base: HOMESTAY_FROM_PRICE },
}

export default function Hero() {
  const { booking, updateBooking, setStayType } = useBooking()
  const { stayType, destination, checkIn, checkOut, guests } = booking
  const [slide, setSlide] = useState(0)
  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 6500)
    return () => clearInterval(t)
  }, [])

  const c = COPY[stayType]
  const nights = nightsBetween(checkIn, checkOut)
  const units = stayType === 'homestay' ? Math.ceil(guests / 2) : guests
  const summary = nights > 0
    ? `${nights} night${nights > 1 ? 's' : ''} · from ₹${(nights * c.base * units).toLocaleString('en-IN')}`
    : stayType === 'homestay' ? `Rooms from ₹${c.base.toLocaleString('en-IN')} · meals included` : 'Beds from ₹499 · free cancellation'

  return (
    <section id="hero" className="relative bg-jungle text-white isolate">
      <div className="absolute inset-0 overflow-hidden">
        {HERO_SLIDES.map((s, i) => (
          <Image key={s.url} src={s.url} alt={s.alt} fill priority={i === 0} unoptimized sizes="100vw"
            className={`object-cover object-[center_45%] animate-kenburns transition-opacity duration-[1600ms] ${i === slide ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,47,42,.35)_0%,rgba(15,47,42,.15)_35%,rgba(15,47,42,.75)_75%,rgba(15,47,42,.97)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,47,42,.55)_0%,rgba(15,47,42,0)_60%)]" />
      </div>

      <div className="relative container-site pt-7 md:pt-14 min-h-[min(94vh,900px)] flex flex-col">
        {/* Stay-type switch */}
        <div className="inline-flex self-start p-[5px] rounded-full bg-white/[0.12] border border-white/[0.22] backdrop-blur-md gap-1">
          {[['hostel', 'Hostel', 'from ₹499'], ['homestay', 'Homestay', `from ₹${HOMESTAY_FROM_PRICE.toLocaleString('en-IN')}`]].map(([id, label, sub]) => (
            <button key={id} onClick={() => setStayType(id)}
              className={`min-h-[44px] px-[18px] rounded-full font-display font-bold text-[17px] uppercase tracking-[0.04em] inline-flex items-center gap-2 transition-colors duration-300 ${stayType === id ? 'bg-gold text-ink' : 'text-white'}`}>
              {label}<span className="font-sans font-semibold text-[12px] normal-case tracking-normal opacity-80">{sub}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 flex flex-wrap items-end justify-between gap-8 py-10 md:py-[88px] md:pb-11">
          <div className="flex-[1_1_560px] min-w-0 max-w-[900px]">
            <div className="inline-flex items-center gap-2.5 py-[5px] pl-[5px] pr-3 rounded-full bg-white/[0.12] border border-white/20 backdrop-blur mb-5">
              <span className="px-2 py-[3px] rounded-full bg-gold text-ink text-[12px] font-bold">★ 4.8</span>
              <span className="text-[13px] font-medium text-white/90">2,100+ reviews · 12,000 guests · Darjeeling &amp; Varanasi</span>
            </div>
            <h1 className="display text-d-hero [text-wrap:balance] drop-shadow-[0_2px_24px_rgba(0,0,0,.25)]">{c.line1}<br /><span className="text-gold">{c.line2}</span></h1>
            <p className="mt-5 max-w-[560px] text-[clamp(17px,1.4vw,20px)] leading-relaxed text-white/90 [text-wrap:pretty]">{c.sub}</p>
          </div>

          {/* Live card */}
          <div className="flex-[0_1_340px] min-w-[280px] p-[18px] rounded-card bg-white/10 border border-white/[0.22] backdrop-blur-xl flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase font-bold text-gold"><span className="w-[7px] h-[7px] rounded-full bg-gold shadow-[0_0_0_4px_rgba(251,177,26,.25)]" />Tonight at Batasia Loop</span>
              <span className="text-[12px] text-white/70">8 pm</span>
            </div>
            <div>
              <p className="font-display font-bold text-[28px] leading-none uppercase">Bonfire &amp; stories</p>
              <p className="mt-1.5 text-[14px] text-white/80 leading-snug">Garden · marshmallows &amp; chai · free for guests</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex">
                {CTA_AVATARS.slice(0, 4).map((a, i) => <Image key={a} src={a} alt="" width={30} height={30} unoptimized className={`w-[30px] h-[30px] rounded-full border-2 border-jungle object-cover ${i ? '-ml-2.5' : ''}`} />)}
              </div>
              <span className="text-[13px] text-white/85"><strong>14 going</strong> · from 6 countries</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-white/15 text-[13px] text-white/75"><span>Kanchenjunga visible at sunrise</span><span className="text-gold font-bold">Likely ✦</span></div>
          </div>
        </div>

        {/* Booking bar */}
        <div id="book" className="relative z-[2] -mb-11 bg-white text-ink rounded-card p-2.5 shadow-bar flex flex-wrap gap-1.5 items-stretch">
          <label className="field flex-[1_1_170px]"><span className="field-label">Stay type</span>
            <select value={stayType} onChange={(e) => setStayType(e.target.value)} className="field-input"><option value="hostel">Hostel · dorms &amp; privates</option><option value="homestay">Homestay · family home</option></select></label>
          <label className="field flex-[1_1_170px]"><span className="field-label">Where</span>
            <select value={destination} onChange={(e) => updateBooking({ destination: e.target.value })} className="field-input"><option value="">Any destination</option><option value="Darjeeling">Darjeeling · mountains</option><option value="Varanasi">Varanasi · ghats</option></select></label>
          <label className="field flex-[1_1_150px]"><span className="field-label">Check-in</span>
            <input type="date" min={today} value={checkIn} onChange={(e) => updateBooking({ checkIn: e.target.value })} className="field-input" /></label>
          <label className="field flex-[1_1_150px]"><span className="field-label">Check-out</span>
            <input type="date" min={checkIn || today} value={checkOut} onChange={(e) => updateBooking({ checkOut: e.target.value })} className="field-input" /></label>
          <label className="field flex-[1_1_130px]"><span className="field-label">Guests</span>
            <select value={guests} onChange={(e) => updateBooking({ guests: Number(e.target.value) })} className="field-input">{[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n} traveller{n > 1 ? 's' : ''}</option>)}<option value={5}>5+ · group rates</option></select></label>
          <Link href={stayType === 'homestay' ? '/stays#homestays' : '/stays#book'} className="flex-[1_1_220px] flex flex-col items-center justify-center gap-0.5 min-h-[64px] px-5 rounded-xl bg-teal hover:bg-teal-dark text-white text-center transition-colors">
            <span className="font-display font-bold text-[20px] uppercase tracking-[0.04em] leading-none">Check availability</span>
            <span className="text-[12px] text-white/85">{summary}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
