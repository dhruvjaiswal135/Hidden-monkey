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
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

export default function StayOptions() {
  const stayOptions = getAllRooms()
  const [headerRef, headerVisible] = useReveal(0.1)

  return (
    <section className="py-20 md:py-28 bg-[#F4EFEA]" aria-label="Stay Options">
      <Container className="max-w-[1440px]">

        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <span className="inline-block px-3 py-1 bg-neutral-200 text-neutral-500 text-[11px] tracking-[0.2em] uppercase rounded-full mb-5">
              Where you sleep
            </span>
            <h2 className="text-charcoal font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight">
              Choose your stay
            </h2>
            <p className="text-charcoal-muted text-base mt-2">
              Different spaces. Same community.
            </p>
          </div>
          <Link
            href="/stays"
            className="inline-flex items-center gap-2 text-charcoal text-sm font-medium hover:text-sunset-gold transition-colors group"
          >
            View all rooms
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stayOptions.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-neutral-300/60 text-center">
          <p className="text-charcoal-muted text-sm">
            Whichever you choose, you&rsquo;re part of the same community.
          </p>
        </div>

      </Container>
    </section>
  )
}
