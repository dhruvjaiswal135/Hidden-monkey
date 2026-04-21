'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import {
  Users, Wifi, Map, Compass, ShieldCheck, Coffee,
  ChevronRight, ChevronLeft, Zap, Heart, Globe, Star,
  ArrowRight, Smile
} from 'lucide-react'

/* ─── Reveal hook ──────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* ─── Count-up hook ─────────────────────────────────────────────── */
function useCountUp(target, duration = 1500, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, started])
  return count
}

/* ─── Data ──────────────────────────────────────────────────────── */
const features = [
  {
    id: 1,
    title: 'Social by Design',
    tagline: 'Find your tribe, not just a bed.',
    description:
      'Open common areas, nightly events, and shared kitchens engineered to turn strangers into lifelong travel friends.',
    icon: Users,
    accent: '#128790',
    light: 'rgba(18,135,144,0.08)',
    image:
      'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=800&auto=format&fit=crop&q=80',
    stat: '12k+',
    statLabel: 'Travelers connected',
  },
  {
    id: 2,
    title: 'Budget Comfort',
    tagline: 'Every penny counts. So does sleep.',
    description:
      'Clean pod beds with privacy curtains, individual lockers, fast WiFi, 24-hour hot shower access — and prices that make sense.',
    icon: Wifi,
    accent: '#FBB11A',
    light: 'rgba(251,177,26,0.08)',
    image:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
    stat: '₹499',
    statLabel: 'Per night, starting from',
  },
  {
    id: 3,
    title: 'Authentic Vibes',
    tagline: 'Travel that actually feels real.',
    description:
      'Local treks, food walks, heritage trails and chai sessions — curated by people who live, breathe and love the destination.',
    icon: Compass,
    accent: '#128790',
    light: 'rgba(18,135,144,0.08)',
    image:
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&auto=format&fit=crop&q=80',
    stat: '80+',
    statLabel: 'Local experiences',
  },
  {
    id: 4,
    title: 'Prime Locations',
    tagline: 'Close to everything that matters.',
    description:
      'Strategically placed in the heart of India\'s most iconic destinations — so you spend less time commuting, more time exploring.',
    icon: Map,
    accent: '#FBB11A',
    light: 'rgba(251,177,26,0.08)',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80',
    stat: '4',
    statLabel: 'Cities across India',
  },
  {
    id: 5,
    title: 'Safe & Trusted',
    tagline: 'Your safety is never a question.',
    description:
      'CCTV across all common areas, 24-hour staff, women-only dorm options, and a zero-tolerance community code.',
    icon: ShieldCheck,
    accent: '#128790',
    light: 'rgba(18,135,144,0.08)',
    image:
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=80',
    stat: '4.9★',
    statLabel: 'Safety rating avg.',
  },
  {
    id: 6,
    title: 'Fuelled by Caffeine',
    tagline: 'Great conversations start here.',
    description:
      'On-site café with freshly brewed coffee, chai and local snacks — the ideal backdrop for planning your next adventure.',
    icon: Coffee,
    accent: '#FBB11A',
    light: 'rgba(251,177,26,0.08)',
    image:
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80',
    stat: '∞',
    statLabel: 'Cups of chai served',
  },
]

const statsData = [
  { value: 12000, suffix: '+', label: 'Travelers hosted', icon: Users },
  { value: 50, suffix: '+', label: 'Countries represented', icon: Globe },
  { value: 80, suffix: '+', label: 'Local experiences', icon: Compass },
  { value: 4, suffix: ' cities', label: 'Prime locations', icon: Map },
]

/* ─── Feature Card ──────────────────────────────────────────────── */
function FeatureCard({ feature, index }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex-shrink-0 w-[290px] md:w-[320px] group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative bg-white rounded-[28px] overflow-hidden border border-[#E6E4DF] transition-all duration-500 cursor-pointer"
        style={{
          boxShadow: hovered
            ? `0 20px 48px rgba(0,0,0,0.10), 0 0 0 1px ${feature.accent}30`
            : '0 2px 8px rgba(0,0,0,0.03)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        }}
      >
        {/* Image area */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
            unoptimized
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Icon badge */}
          <div
            className="absolute top-4 left-4 w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300"
            style={{
              background: hovered ? feature.accent : 'rgba(255,255,255,0.92)',
            }}
          >
            <feature.icon
              size={18}
              strokeWidth={1.8}
              style={{ color: hovered ? '#fff' : feature.accent }}
            />
          </div>

          {/* Stat pill */}
          <div className="absolute bottom-4 left-4">
            <span
              className="text-[22px] font-black text-white leading-none tracking-tight drop-shadow-sm"
            >
              {feature.stat}
            </span>
            <p className="text-white/75 text-[10px] font-medium mt-0.5">{feature.statLabel}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3"
            style={{ background: feature.light }}
          >
            <span
              className="text-[9px] font-black uppercase tracking-[0.18em]"
              style={{ color: feature.accent }}
            >
              {feature.tagline}
            </span>
          </div>

          <h3 className="text-[#1E1F1C] font-bold text-[18px] mb-2 leading-[1.15] tracking-[-0.01em] transition-colors duration-200"
            style={{ color: hovered ? feature.accent : '#1E1F1C' }}
          >
            {feature.title}
          </h3>

          <p className="text-[#6B665E] text-[12.5px] font-light leading-relaxed">
            {feature.description}
          </p>

          {/* Arrow indicator */}
          <div className="mt-4 flex items-center gap-1.5 transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(-8px)' }}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: feature.accent }}>
              Learn more
            </span>
            <ArrowRight size={12} style={{ color: feature.accent }} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Stat Counter ──────────────────────────────────────────────── */
function StatPill({ stat, started, index }) {
  const count = useCountUp(stat.value, 1200, started)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={started ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-4 bg-white rounded-[20px] px-6 py-5 border border-[#E6E4DF] shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex-1 min-w-[160px]"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(18,135,144,0.10)' }}>
        <stat.icon size={18} className="text-[#128790]" strokeWidth={1.8} />
      </div>
      <div>
        <span className="text-[24px] font-black text-[#1E1F1C] leading-none tracking-[-0.02em]">
          {count.toLocaleString()}{stat.suffix}
        </span>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#9A948C] mt-0.5">{stat.label}</p>
      </div>
    </motion.div>
  )
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function WhyHiddenMonkey() {
  const scrollRef = useRef(null)
  const [headerRef, headerVisible] = useReveal(0.1)
  const [statsRef, statsVisible] = useReveal(0.2)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -340, behavior: 'smooth' })
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 340, behavior: 'smooth' })

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 8)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
      const idx = Math.round(el.scrollLeft / 340)
      setActiveIndex(Math.min(idx, features.length - 1))
    }
    el.addEventListener('scroll', update, { passive: true })
    update()
    return () => el.removeEventListener('scroll', update)
  }, [])

  return (
    <section className="py-14 md:py-20 bg-[#FBFBF9] overflow-hidden" id="why">
      <Container className="max-w-[1400px]">

        {/* ── Header row ── */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#128790]" />
              <span className="text-[10px] tracking-[0.22em] uppercase font-black text-[#128790]">
                The Experience
              </span>
            </div>
            <h2 className="text-[#1E1F1C] font-black text-[28px] md:text-[40px] leading-[1.05] tracking-[-0.025em]">
              More than just a{' '}
              <span className="text-[#FBB11A]">place to sleep.</span>
            </h2>
            <p className="mt-3 text-[#6B665E] text-[14px] font-light leading-relaxed max-w-lg">
              Hidden Monkey is where the best stories of your travels begin — designed from the ground up for the curious, the bold, and the budget-savvy.
            </p>
          </div>

          {/* Desktop arrows + dot indicators */}
          <div className="flex flex-col items-end gap-3">
            <div className="hidden md:flex gap-2">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E6E4DF] bg-white text-[#1E1F1C] hover:border-[#128790] hover:text-[#128790] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#128790] text-white hover:bg-[#0c6b73] transition-all duration-200 shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            {/* Progress dots */}
            <div className="hidden md:flex gap-1.5">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollRef.current?.scrollTo({ left: i * 340, behavior: 'smooth' })}
                  className="rounded-full transition-all duration-300 focus:outline-none"
                  style={{
                    width: i === activeIndex ? 20 : 6,
                    height: 6,
                    background: i === activeIndex ? '#128790' : '#E6E4DF',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Horizontal scrollable cards ── */}
        <div className="relative -mx-4 md:-mx-6 lg:mx-0">
          {/* Left fade */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-6 w-16 z-10 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to right, #FBFBF9, transparent)',
              opacity: canScrollLeft ? 1 : 0,
            }}
          />
          {/* Right fade */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-6 w-16 z-10 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to left, #FBFBF9, transparent)',
              opacity: canScrollRight ? 1 : 0,
            }}
          />

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 px-4 md:px-6 lg:px-0"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {features.map((f, i) => (
              <div key={f.id} style={{ scrollSnapAlign: 'start' }}>
                <FeatureCard feature={f} index={i} />
              </div>
            ))}

            {/* CTA card at end */}
            <div className="flex-shrink-0 w-[240px] md:w-[260px] self-stretch" style={{ scrollSnapAlign: 'start' }}>
              <div className="h-full bg-[#128790] rounded-[28px] p-8 flex flex-col items-center justify-center text-center min-h-[380px]"
                style={{ boxShadow: '0 8px 32px rgba(18,135,144,0.25)' }}
              >
                <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mb-5">
                  <Smile size={26} className="text-white" strokeWidth={1.8} />
                </div>
                <h4 className="text-white font-black text-[20px] leading-[1.1] mb-2">
                  Your vibe.<br />Your adventure.
                </h4>
                <p className="text-white/65 text-[12px] font-light leading-relaxed mb-6">
                  Join thousands of travelers who found more than just a hostel.
                </p>
                <a
                  href="/stays"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-[#128790] text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#FBB11A] hover:text-white transition-all duration-250 shadow-sm"
                >
                  Book a stay
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats ribbon ── */}
        <div
          ref={statsRef}
          className="mt-10"
        >
          <div
            className={`transition-all duration-700 delay-100 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] flex-1 bg-[#E6E4DF]" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#9A948C]">
                By the numbers
              </span>
              <div className="h-[1px] flex-1 bg-[#E6E4DF]" />
            </div>

            <div className="flex flex-wrap gap-3">
              {statsData.map((stat, i) => (
                <StatPill key={i} stat={stat} started={statsVisible} index={i} />
              ))}
            </div>
          </div>
        </div>

      </Container>

    </section>
  )
}
