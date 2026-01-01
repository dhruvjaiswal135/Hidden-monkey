'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

/**
 * Stay Options Section
 * Introduces different accommodation types focused on vibe and community
 * NOT transactional - about how it feels to stay
 */

export default function StayOptions() {
  const [hoveredId, setHoveredId] = useState(null)

  const stayOptions = [
    {
      id: 'mixed-dorm',
      name: 'Mixed Dorm',
      vibe: 'Shared rooms, easy conversations, and people from everywhere.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80',
      highlights: [
        'Lockers available',
        'Privacy curtains'
      ]
    },
    {
      id: 'female-dorm',
      name: 'Female Dorm',
      vibe: 'Comfortable, secure, and designed for women travellers.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=80',
      highlights: [
        'Women only space',
        'Safe and supportive'
      ]
    },
    {
      id: 'private-room',
      name: 'Private Room',
      vibe: 'Your own space with all the community vibes of the Monkey House.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=80',
      highlights: [
        'Personal space',
        'Still connected'
      ]
    }
  ]

  return (
    <section className="relative py-8 md:py-12 bg-white" aria-label="Stay Options">
      <Container className="max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-[#1E1F1C] text-[28px] md:text-[36px] font-semibold mb-2">
            How you can stay
          </h2>
          <p className="text-[#5E625A] text-[14px] md:text-[15px]">
            Different spaces, same shared vibe.
          </p>
        </div>

        {/* Stay Options Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stayOptions.map((option) => (
            <div
              key={option.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(option.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div className="bg-white border border-[#E6E4DF] rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  
                  {/* Title with underline indicator */}
                  <div className="mb-3">
                    <h3 className="text-[#1E1F1C] text-[18px] md:text-[20px] font-semibold mb-2">
                      {option.name}
                    </h3>
                    <div className="h-0.5 w-8 bg-[#F05A28] rounded-full transition-all duration-300" />
                  </div>

                  {/* Vibe Description */}
                  <p className="text-[#5E625A] text-[14px] leading-relaxed mb-5">
                    {option.vibe}
                  </p>

                  {/* Highlights (max 2) */}
                  <div className="space-y-2 mb-6">
                    {option.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-[13px] text-[#5E625A]"
                      >
                        <div className="w-1.5 h-1.5 bg-[#F05A28] rounded-full mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA - Subtle */}
                  <button className="text-[13px] font-medium text-[#F05A28] hover:text-[#E84D1B] transition-colors inline-flex items-center gap-1.5">
                    Learn more
                    <span className="text-[12px] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Message */}
        <div className="mt-12 pt-8 border-t border-[#E6E4DF] text-center">
          <p className="text-[#5E625A] text-[13px] md:text-[14px]">
            Whichever you choose, you're part of the same community. <br className="hidden md:inline" />
            We've got you covered.
          </p>
        </div>

      </Container>
    </section>
  )
}
