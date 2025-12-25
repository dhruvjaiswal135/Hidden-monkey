'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

/**
 * Destinations Section
 * Premium destination showcase with enhanced visual effects
 */

export default function Destinations() {
  const [isClient, setIsClient] = useState(false)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const destinations = [
    {
      name: 'Rishikesh',
      tagline: 'Yoga & Adventure',
      count: '2 hostels',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
      link: '/hostels/rishikesh'
    },
    {
      name: 'Bir',
      tagline: 'Paragliding',
      count: '1 hostel',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
      link: '/hostels/bir'
    },
    {
      name: 'Goa',
      tagline: 'Beaches',
      count: '3 hostels',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop&q=85',
      link: '/hostels/goa'
    },
    {
      name: 'Manali',
      tagline: 'Mountains',
      count: '2 hostels',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=85',
      link: '/hostels/manali'
    },
    {
      name: 'Kasol',
      tagline: 'Valley Vibes',
      count: '1 hostel',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
      link: '/hostels/kasol'
    }
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-12 md:py-16 bg-white" aria-label="Destinations">
      <Container className="max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-sans text-[#1A1A1A] text-[32px] md:text-[40px] font-normal mb-1">
              Find Your Place
            </h2>
            <p className="text-[#6B7280] text-[14px]">
              Hostels across India
            </p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-lg hover:border-[#2D7A5F] transition-colors"
              aria-label="Previous"
              type="button"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-lg hover:border-[#2D7A5F] transition-colors"
              aria-label="Next"
              type="button"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Destinations Carousel */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {destinations.map((destination, index) => (
              <article
                key={index}
                className="flex-shrink-0"
                style={{ width: '240px' }}
              >
                <Link 
                  href={destination.link}
                  className="block group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-3">
                    {isClient && (
                      <>
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          sizes="240px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          loading={index < 3 ? "eager" : "lazy"}
                          priority={index < 3}
                          quality={80}
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </>
                    )}
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-white/80 text-[11px] mb-1">{destination.tagline}</div>
                      <h3 className="text-white font-semibold text-[20px] mb-1">{destination.name}</h3>
                      <div className="text-white/90 text-[12px]">{destination.count}</div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="mt-8 text-center">
          <Link 
            href="/hostels" 
            className="inline-flex items-center gap-1.5 text-[#1A1A1A] text-[13px] hover:text-[#2D7A5F] transition-colors"
          >
            <span>View all destinations</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
