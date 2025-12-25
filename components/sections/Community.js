'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

/**
 * Why Choose Hidden Monkey Section
 * Horizontal scrolling feature cards showcasing hostel benefits
 */

export default function Community() {
  const scrollContainerRef = useRef(null)

  const features = [
    {
      title: 'Social by Design',
      description: 'Meet fellow travelers from around the world through shared spaces and nightly activities',
      image: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=800&auto=format&fit=crop&q=75',
    },
    {
      title: 'Budget-Friendly Comfort',
      description: 'Clean beds, lockers, charging points, and fast WiFi — everything you need, nothing you don\'t',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=75',
    },
    {
      title: 'Traveler-Led Experiences',
      description: 'Our staff are travelers too — expect treks, walks, and experiences that feel truly local',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&auto=format&fit=crop&q=75',
    },
    {
      title: 'Prime Locations',
      description: 'Stay close to cafés, trails, beaches, and transport — explore more with less effort',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=75',
    },
    {
      title: 'Safe & Secure',
      description: '24/7 staff, secure lockers, and verified guests so you can travel with peace of mind',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=75',
    },
    {
      title: 'Community Kitchen',
      description: 'Cook together, share meals, and save money while making real connections',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=75',
    }
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-12 md:py-16 bg-[#FAFAFA]" aria-label="Why Choose Hidden Monkey">
      <Container className="max-w-[1400px]">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-sans text-[#1A1A1A] text-[32px] md:text-[40px] font-normal mb-2">
            Why Hidden Monkey
          </h2>
          <p className="text-[#6B7280] text-[14px] font-light">
            Because the best journeys are shared
          </p>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory'
            }}
          >
            {features.map((feature, index) => (
              <article
                key={index}
                className="flex-shrink-0"
                style={{ 
                  width: '280px',
                  scrollSnapAlign: 'start'
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-[360px]">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-gray-50">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index < 2 ? "eager" : "lazy"}
                      priority={index < 2}
                      quality={80}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-[#1A1A1A] font-medium text-[17px] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7280] text-[13px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden md:block">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              aria-label="Scroll left"
              type="button"
            >
              <svg className="w-4 h-4 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-[#1A1A1A] text-white rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              aria-label="Scroll right"
              type="button"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
