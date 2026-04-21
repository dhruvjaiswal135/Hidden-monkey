'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const destinations = [
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'Where Mountains Touch Clouds',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
    vibe: 'Scenic · Cozy',
    price: '₹999',
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'Where Souls Find Peace',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80',
    vibe: 'Spiritual · Mystical',
    price: '₹899',
  },
]

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

function DestinationCard({ destination, index }) {
  const [ref, visible] = useReveal(0.1)

  return (
    <Link href={`/destinations?location=${destination.id}`} className="group block">
      <div
        ref={ref}
        className={`bg-white rounded-[24px] overflow-hidden border border-[#E6E4DF] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        <div className="p-1.5 pb-0">
          <div className="relative h-[200px] rounded-[20px] overflow-hidden">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3">
               <h3 className="text-white font-bold text-[20px] leading-tight mb-0.5">{destination.name}</h3>
               <p className="text-white/80 text-[11px] font-medium uppercase tracking-wider">{destination.vibe}</p>
            </div>
          </div>
        </div>

        <div className="p-4 flex items-center justify-between">
           <div>
              <span className="text-[10px] text-[#9A948C] font-bold uppercase tracking-widest block mb-0.5">Starting From</span>
              <span className="text-[#1E1F1C] font-bold text-[15px]">{destination.price}/night</span>
           </div>
           <div className="w-8 h-8 rounded-full bg-[#128790]/5 flex items-center justify-center text-[#128790] group-hover:bg-[#128790] group-hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
           </div>
        </div>
      </div>
    </Link>
  )
}

export default function Destinations() {
  const [headerRef, headerVisible] = useReveal(0.1)

  return (
    <section className="py-16 md:py-20 bg-[#FBFBF9] border-t border-[#E6E4DF]" id="destinations">
      <Container className="max-w-[1400px]">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#128790]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">
                Explore Our Map
              </span>
            </div>
            <h2 className="text-[#1E1F1C] font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em]">
              Where will your <span className="text-[#FBB11A]">story begin?</span>
            </h2>
          </div>
          
          <Link href="/destinations" className="group hidden md:flex items-center gap-2 text-[#128790] text-[12px] font-bold uppercase tracking-widest hover:gap-3 transition-all">
            See all locations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/destinations" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#E6E4DF] text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full shadow-sm">
            View all destinations
          </Link>
        </div>
      </Container>
    </section>
  )
}
