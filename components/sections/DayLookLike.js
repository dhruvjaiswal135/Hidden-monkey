'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

export default function DayLookLike() {
  const [headerRef, headerVisible] = useReveal(0.1)
  
  const dayMoments = [
    {
      id: 1,
      period: 'Morning',
      time: '08:00',
      description: 'Slow starts, chai in hand, quiet conversations.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      period: 'Afternoon',
      time: '14:00',
      description: 'Work, wander, or just watch the world go by.',
      image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      period: 'Evening',
      time: '19:00',
      description: 'Shared meals, music, and stories from everywhere.',
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      period: 'Night',
      time: '23:00',
      description: 'Quiet corners, laughter, or early sleep — your call.',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&auto=format&fit=crop&q=80',
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-[#FBFBF9] border-t border-[#E6E4DF] overflow-hidden" id="experience">
      <Container className="max-w-[1200px]">
        {/* Header - Cute & Small */}
        <div 
          ref={headerRef}
          className={`mb-10 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#128790]"></span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">The Rhythm of Life</span>
          </div>
          <h2 className="text-[#1E1F1C] font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em]">
            A day at <span className="text-[#FBB11A]">Monkey House.</span>
          </h2>
          <p className="text-[#6B665E] text-[13px] md:text-[14px] font-light mt-2 max-w-md">
            No plans. Just moments that happen when you let go of the clock.
          </p>
        </div>

        {/* Compact Timeline Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[100px] left-0 right-0 h-[1.5px] bg-[#E6E4DF] z-0" />
          
          {dayMoments.map((moment, i) => (
            <div key={moment.id} className="relative z-10 group">
              {/* Image Container - Cute & Small */}
              <div className="relative h-[200px] md:h-[180px] rounded-[20px] overflow-hidden mb-4 border border-[#E6E4DF] bg-white p-1.5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:border-[#128790]/20">
                 <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                    <Image
                      src={moment.image}
                      alt={moment.period}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Time Badge */}
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm border border-[#E6E4DF]">
                       <span className="text-[10px] font-bold text-[#128790] tracking-wider">{moment.time}</span>
                    </div>
                 </div>
              </div>

              {/* Text Content - Compact Sizing */}
              <div className="px-1">
                <div className="flex items-center gap-2 mb-1.5">
                   <div className="w-2 h-2 rounded-full bg-[#FBB11A] shadow-sm" />
                   <h3 className="text-[#1E1F1C] font-bold text-[15px] group-hover:text-[#128790] transition-colors">{moment.period}</h3>
                </div>
                <p className="text-[#6B665E] text-[12px] font-light leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white border border-[#E6E4DF] rounded-full shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#128790] animate-pulse" />
             <p className="text-[11px] text-[#9A948C] font-bold uppercase tracking-[0.1em]">
               Every day is yours to write
             </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
