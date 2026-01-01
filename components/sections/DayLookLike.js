'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

/**
 * What A Day Looks Like Section
 * Helps travelers imagine themselves living a day at Hidden Monkey
 * Focus: vibe and flow of life, not features or amenities
 */
export default function DayLookLike() {
  const [hoveredId, setHoveredId] = useState(null)

  const dayMoments = [
    {
      id: 1,
      period: 'Morning',
      description: 'Slow starts, chai in hand, conversations without introductions.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80',
      order: 1
    },
    {
      id: 2,
      period: 'Afternoon',
      description: 'Work, wander, nap, or just sit and watch the day.',
      image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=80',
      order: 2
    },
    {
      id: 3,
      period: 'Evening',
      description: 'Shared meals, music, and stories from everywhere.',
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&auto=format&fit=crop&q=80',
      order: 3
    },
    {
      id: 4,
      period: 'Night',
      description: 'Quiet corners, laughter, or early sleep — your call.',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&auto=format&fit=crop&q=80',
      order: 4
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background Typography Layer - Diagonal Repeating Text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-4 select-none" style={{ transform: 'rotate(-10deg)' }}>
          <div className="text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#f5f5f5] whitespace-nowrap leading-[1.4] tracking-widest">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="py-2">
                no plans • just moments • no plans • just moments • no plans • just moments
              </div>
            ))}
          </div>
        </div>
      </div>

      <Container className="max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1F1C] mb-2">
            What a day here feels like
          </h2>
          <p className="text-[#5E625A] text-sm md:text-base font-light">
            No plans. Just moments that happen.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connecting Line (subtle decoration) */}
          <div className="absolute top-[120px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6E4DF] to-transparent" />

          {/* Timeline Dots */}
          <div className="absolute top-[118px] left-0 right-0 flex justify-between px-16">
            {dayMoments.map((moment) => (
              <div
                key={moment.id}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  hoveredId === moment.id ? 'bg-[#F05A28] scale-125' : 'bg-[#E6E4DF]'
                }`}
              />
            ))}
          </div>

          {/* Moment Cards */}
          {dayMoments.map((moment) => (
            <div
              key={moment.id}
              onMouseEnter={() => setHoveredId(moment.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-default"
            >
              {/* Image */}
              <div className={`relative aspect-square rounded-[16px] overflow-hidden mb-4 bg-gray-100 transition-all duration-500 ${
                hoveredId === moment.id ? '-translate-y-1 shadow-lg' : 'shadow-sm'
              }`}>
                <Image
                  src={moment.image}
                  alt={moment.period}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div>
                {/* Period Label */}
                <h3 className={`text-base font-semibold transition-colors duration-300 ${
                  hoveredId === moment.id ? 'text-[#F05A28]' : 'text-[#1E1F1C]'
                }`}>
                  {moment.period}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5E625A] leading-relaxed font-light mt-2">
                  {moment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll Layout */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ minWidth: 'max-content' }}>
            {dayMoments.map((moment) => (
              <div
                key={moment.id}
                className="flex-shrink-0 w-64 group"
                onMouseEnter={() => setHoveredId(moment.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className={`relative aspect-square rounded-[16px] overflow-hidden mb-3 bg-gray-100 transition-all duration-500 ${
                  hoveredId === moment.id ? '-translate-y-1 shadow-lg' : 'shadow-sm'
                }`}>
                  <Image
                    src={moment.image}
                    alt={moment.period}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className={`text-base font-semibold transition-colors duration-300 ${
                    hoveredId === moment.id ? 'text-[#F05A28]' : 'text-[#1E1F1C]'
                  }`}>
                    {moment.period}
                  </h3>
                  <p className="text-sm text-[#5E625A] leading-relaxed font-light mt-2">
                    {moment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Footer Text */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-xs md:text-sm text-[#5E625A] font-light italic">
            Every day is different. Every traveler writes their own story here.
          </p>
        </div>
      </Container>

      <style jsx>{`
        .scale-103 {
          transform: scale(1.03);
        }

        /* Hide scrollbar but keep scrolling functional */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
