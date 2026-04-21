'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

const moments = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop&q=80',
    caption: 'Bonfire nights hit different here 🔥',
    tags: ['bonfire', 'community'],
    likes: 234,
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=600&auto=format&fit=crop&q=80',
    caption: 'When strangers become travel family',
    tags: ['friends', 'vibes'],
    likes: 189,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80',
    caption: 'Morning chai with mountain views',
    tags: ['morning', 'views'],
    likes: 312,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&auto=format&fit=crop&q=80',
    caption: 'Trek days are the best days',
    tags: ['trek', 'adventure'],
    likes: 267,
    featured: true,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop&q=80',
    caption: 'Finding the perfect work spot',
    tags: ['nomad', 'work'],
    likes: 156,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80',
    caption: 'Kitchen sessions = best conversations',
    tags: ['cooking', 'family'],
    likes: 198,
  },
]

function MomentCard({ moment, index }) {
  const [ref, visible] = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[24px] cursor-pointer group transition-all duration-500 border border-[#E6E4DF] p-1 ${
        moment.featured ? 'row-span-2' : ''
      } ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative w-full h-full rounded-[20px] overflow-hidden">
        <Image
          src={moment.image}
          alt={moment.caption}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
           <p className="text-white text-[13px] font-medium leading-snug mb-2">{moment.caption}</p>
           <div className="flex items-center gap-1.5 text-white/70 text-[10px]">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span>{moment.likes}</span>
           </div>
        </div>
      </div>

      {moment.featured && (
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#FBB11A] text-white text-[9px] font-bold rounded-full uppercase tracking-widest shadow-sm">
          Featured
        </div>
      )}
    </div>
  )
}

export default function LifeAtMonkey() {
  const [headerRef, headerVisible] = useReveal(0.1)

  return (
    <section className="py-16 md:py-20 bg-white" id="life">
      <Container className="max-w-[1400px]">
        {/* Section Header - Cute & Small */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#128790]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">Real Stories</span>
            </div>
            <h2 className="text-[#1E1F1C] font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em]">
              Life at the <span className="text-[#FBB11A]">Monkey House.</span>
            </h2>
            <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light max-w-md mt-2">
              Every day is a story. These are ours — unfiltered, unscripted, unforgettable.
            </p>
          </div>

          <a href="https://instagram.com/hiddenmonkey" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
             <div className="text-right hidden md:block">
                <span className="text-[11px] font-bold text-[#1E1F1C] uppercase tracking-widest block">Follow our journey</span>
                <span className="text-[10px] text-[#128790] font-medium">@hiddenmonkey</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-white border border-[#E6E4DF] flex items-center justify-center text-[#1E1F1C] group-hover:bg-[#128790] group-hover:text-white group-hover:border-[#128790] transition-all duration-300 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
             </div>
          </a>
        </div>

        {/* Photo Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px] md:auto-rows-[180px]">
          {moments.map((moment, index) => (
            <MomentCard key={moment.id} moment={moment} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#E6E4DF] text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full shadow-sm hover:border-[#128790] transition-colors">
            View full gallery
          </Link>
        </div>
      </Container>
    </section>
  )
}
