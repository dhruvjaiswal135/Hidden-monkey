'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

/**
 * Destinations Section - Compact & Playful
 * Quick escape into hostel vibes across destinations
 * Now with individual hostel location cards
 */

export default function Destinations() {
  const [isClient, setIsClient] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [selectedHostel, setSelectedHostel] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const destinations = [
    {
      name: 'Varanasi',
      vibe: 'Slow mornings. Old souls.',
      tags: ['Spiritual', 'Cultural', 'Riverside'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
      link: '/hostels/varanasi',
      hostels: [
        {
          id: 'varanasi-1',
          name: 'Assi Ghat',
          image: 'https://images.unsplash.com/photo-1537457984863-1fc67de99f5e?w=400&auto=format&fit=crop&q=85',
          gallery: [
            'https://images.unsplash.com/photo-1537457984863-1fc67de99f5e?w=800&auto=format&fit=crop&q=85',
            'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=800&auto=format&fit=crop&q=85',
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=85'
          ]
        },
        {
          id: 'varanasi-2',
          name: 'Manikarnika Steps',
          image: 'https://images.unsplash.com/photo-1549887534-f2c03c1b5eec?w=400&auto=format&fit=crop&q=85',
          gallery: [
            'https://images.unsplash.com/photo-1549887534-f2c03c1b5eec?w=800&auto=format&fit=crop&q=85',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=85',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=85'
          ]
        }
      ]
    },
    {
      name: 'Darjeeling',
      vibe: 'Mist, mountains, quiet conversations.',
      tags: ['Mountains', 'Calm', 'Nature'],
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=85',
      link: '/hostels/darjeeling',
      hostels: [
        {
          id: 'darjeeling-1',
          name: 'Batasia Loop',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=85',
          gallery: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=85',
            'https://images.unsplash.com/photo-1469022563149-aa64dbd37dc0?w=800&auto=format&fit=crop&q=85',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=85'
          ]
        },
        {
          id: 'darjeeling-2',
          name: 'Ching Monastery',
          image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&auto=format&fit=crop&q=85',
          gallery: [
            'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&auto=format&fit=crop&q=85',
            'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&auto=format&fit=crop&q=85',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=85'
          ]
        }
      ]
    }
  ]

  return (
    <section className="relative py-8 md:py-12 bg-white overflow-hidden" aria-label="Destinations">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dotted path - top left */}
        <svg className="absolute top-12 left-8 w-32 h-32 opacity-4" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 Q 25 30 50 50 T 90 50" stroke="#EEA727" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6"/>
          <polygon points="95,50 90,48 90,52" fill="#EEA727" opacity="0.5"/>
        </svg>

        {/* Pin marker - top right */}
        <svg className="absolute top-20 right-16 w-12 h-12 opacity-5 animate-pulse" viewBox="0 0 48 48" fill="none">
          <path d="M24 8 C16 8 10 14 10 22 C10 32 24 40 24 40 C24 40 38 32 38 22 C38 14 32 8 24 8" stroke="#EEA727" strokeWidth="1.5" fill="none"/>
          <circle cx="24" cy="22" r="4" fill="#EEA727" opacity="0.6"/>
        </svg>

        {/* Arrow - bottom right */}
        <svg className="absolute bottom-20 right-12 w-20 h-12 opacity-4 animate-[slideRight_4s_ease-in-out_infinite]" viewBox="0 0 80 48" fill="none">
          <path d="M 10 24 L 65 24" stroke="#EEA727" strokeWidth="1.5" opacity="0.5"/>
          <polygon points="70,24 65,22 65,26" fill="#EEA727" opacity="0.5"/>
        </svg>
      </div>

      <Container className="max-w-[1400px] relative z-10">
        {/* Section Header - Compact */}
        <div className="mb-6 md:mb-8">
          <h2 className="font-sans text-[#1E1F1C] text-[28px] md:text-[36px] font-bold mb-1">
            Find Your Vibe
          </h2>
          <p className="text-[#5E625A] text-[13px] font-light">
            Hand-picked destinations for wanderers
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 overflow-x-auto md:overflow-x-visible scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {destinations.map((destination, index) => (
              <Link 
                key={index}
                href={destination.link}
                className="block group flex-shrink-0 md:flex-shrink relative"
                style={{ width: 'auto' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className={`relative aspect-[2/1] md:aspect-[2.2/1] overflow-hidden rounded-[20px] transition-all duration-300 ${
                  hoveredCard === index 
                    ? 'shadow-xl -translate-y-1' 
                    : 'shadow-md hover:shadow-lg'
                }`}>
                  {/* Image */}
                  {isClient && (
                    <>
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className={`object-cover transition-all duration-300 ${
                          hoveredCard === index 
                            ? 'scale-105 brightness-110' 
                            : 'scale-100 brightness-100'
                        }`}
                        loading={index < 2 ? "eager" : "lazy"}
                        priority={index < 2}
                        quality={80}
                        unoptimized
                      />
                      {/* Overlay - lighter */}
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        hoveredCard === index 
                          ? 'bg-gradient-to-t from-black/40 to-transparent' 
                          : 'bg-gradient-to-t from-black/30 to-transparent'
                      }`} />
                    </>
                  )}
                  
                  {/* Content */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-5 transition-all duration-300 ${
                    hoveredCard === index ? 'translate-y-0' : 'translate-y-0'
                  }`}>
                    {/* Destination Name with hover underline */}
                    <h3 className={`text-white font-bold text-[22px] md:text-[26px] mb-1.5 transition-all duration-300 ${
                      hoveredCard === index ? 'translate-x-1' : 'translate-x-0'
                    }`}>
                      {destination.name}
                    </h3>
                    
                    {/* Vibe Line */}
                    <p className={`text-white/80 text-[12px] md:text-[13px] font-light leading-snug mb-2.5 transition-all duration-300 ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-85'
                    }`}>
                      {destination.vibe}
                    </p>
                    
                    {/* Vibe Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {destination.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`inline-block px-2.5 py-1 text-[10px] md:text-[11px] font-medium rounded-full transition-all duration-300 ${
                            hoveredCard === index 
                              ? 'bg-[#EEA727] text-white' 
                              : 'bg-white/20 text-white/90'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover CTA Arrow */}
                  <div className={`absolute top-4 right-4 transition-all duration-300 ${
                    hoveredCard === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-2'
                  }`}>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hostel Location Cards - Bottom Right */}
                <div className="absolute bottom-16 right-8 flex gap-2 flex-wrap justify-end pointer-events-auto"
                  style={{
                    transform: 'translate(0, 50%)',
                    zIndex: 20
                  }}>
                  {destination.hostels && destination.hostels.map((hostel, hostelIndex) => (
                    <button
                      key={hostel.id}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setSelectedHostel(hostel)
                        setIsModalOpen(true)
                      }}
                      className="group/hostel relative w-24 h-24 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                      title={hostel.name}
                      type="button"
                    >
                      {/* Hostel Image */}
                      {isClient && (
                        <Image
                          src={hostel.image}
                          alt={hostel.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                          quality={75}
                          unoptimized
                        />
                      )}
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover/hostel:bg-black/50 transition-all duration-300" />
                      
                      {/* Location Name - Positioned below the square */}
                      <div className="absolute top-full left-0 right-0 mt-2 text-center">
                        <p className="text-[#1E1F1C] text-[10px] font-semibold leading-tight line-clamp-2 w-full px-1">
                          {hostel.name}
                        </p>
                      </div>

                      {/* Hover Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/hostel:opacity-100 transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mt-6 md:mt-8 text-center">
          <Link 
            href="/hostels" 
            className="inline-flex items-center gap-1.5 text-[#1E1F1C] text-[12px] md:text-[13px] font-medium hover:text-[#EEA727] transition-all duration-200 group"
          >
            <span>Explore all destinations</span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </Container>

      {/* Image Gallery Modal */}
      {isModalOpen && selectedHostel && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="text-[#1E1F1C] font-bold text-xl">
                {selectedHostel.name}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                type="button"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedHostel.gallery && selectedHostel.gallery.map((imageUrl, imgIndex) => (
                <div 
                  key={imgIndex}
                  className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                >
                  {isClient && (
                    <Image
                      src={imageUrl}
                      alt={`${selectedHostel.name} - Image ${imgIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      quality={85}
                      unoptimized
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
        }
      `}</style>
    </section>
  )
}
