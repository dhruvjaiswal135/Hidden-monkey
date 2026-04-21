'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import RoomCard from './RoomCard'
import { getAllRooms } from '@/content/rooms'

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

export default function StayOptions() {
  const stayOptions = getAllRooms()
  const [headerRef, headerVisible] = useReveal(0.1)

  return (
    <section className="py-16 md:py-20 bg-[#FBFBF9] border-t border-[#E6E4DF]" id="stays">
      <Container className="max-w-[1400px]">
        {/* Header */}
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
                Where You Rest
              </span>
            </div>
            <h2 className="text-[#1E1F1C] font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em]">
              Choose your <span className="text-[#FBB11A]">stay.</span>
            </h2>
            <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light mt-2">
              Different spaces. Same wild community.
            </p>
          </div>
          
          <Link href="/stays" className="group hidden md:flex items-center gap-2 text-[#128790] text-[12px] font-bold uppercase tracking-widest hover:gap-3 transition-all">
            See all room types
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stayOptions.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/stays" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#E6E4DF] text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full shadow-sm">
            View all rooms
          </Link>
        </div>
      </Container>
    </section>
  )
}
