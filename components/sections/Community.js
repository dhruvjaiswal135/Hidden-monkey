'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

/**
 * Why Choose Hidden Monkey Section
 * Enhanced interactive horizontal scrolling feature cards
 * Feels social, playful, and hostel-like with micro-interactions
 */

export default function Community() {
  const scrollContainerRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

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
    <section 
      ref={sectionRef}
      className="relative py-12 md:py- bg-white overflow-hidden" 
      aria-label="Why Choose Hidden Monkey"
    >
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating circles - top left */}
        {/* <svg className="absolute top-20 left-12 w-24 h-24 opacity-8 animate-pulse" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="25" fill="none" stroke="#EEA727" strokeWidth="2" opacity="0.4"/>
          <circle cx="50" cy="50" r="18" fill="none" stroke="#EEA727" strokeWidth="1.5" opacity="0.3"/>
        </svg> */}

        {/* Passport stamp - top center right */}
        <svg className="absolute top-16 right-32 w-20 h-20 opacity-7 animate-bounce" viewBox="0 0 100 100" fill="none" style={{ animationDuration: '3s' }}>
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="#EEA727" strokeWidth="2" opacity="0.5" rx="4" transform="rotate(15 50 50)"/>
          <text x="50" y="55" textAnchor="middle" fontSize="24" fill="#EEA727" opacity="0.4" fontWeight="bold">✓</text>
        </svg>

        {/* Umbrella shape - middle right */}
        {/* <svg className="absolute top-1/2 right-10 w-32 h-32 opacity-6 animate-[spin]" viewBox="0 0 100 100" fill="none" style={{ animationDuration: '8s' }}>
          <path d="M 50 20 Q 30 40 20 60 L 80 60 Q 70 40 50 20" fill="none" stroke="#EEA727" strokeWidth="2" opacity="0.4"/>
          <line x1="50" y1="60" x2="50" y2="80" stroke="#EEA727" strokeWidth="1.5" opacity="0.3"/>
          <circle cx="50" cy="80" r="3" fill="#EEA727" opacity="0.4"/>
        </svg> */}

        {/* Arrow path - bottom left */}
        {/* <svg className="absolute bottom-32 left-8 w-40 h-20 opacity-6 animate-[slideRight]" viewBox="0 0 160 80" fill="none" style={{ animationDuration: '4s' }}>
          <path d="M 10 40 Q 40 20 70 40 T 130 40" stroke="#EEA727" strokeWidth="2" opacity="0.4" strokeDasharray="4,4"/>
          <polygon points="145,40 135,36 135,44" fill="#EEA727" opacity="0.5"/>
        </svg> */}

        {/* Tape strip - center left */}
        {/* <svg className="absolute top-2/3 left-20 w-28 h-14 opacity-7 animate-[tapeFloat]" viewBox="0 0 112 56" fill="none" style={{ animationDuration: '5s' }}>
          <rect x="6" y="12" width="100" height="32" fill="#EEA727" opacity="0.3" rx="3"/>
          <line x1="12" y1="16" x2="12" y2="48" stroke="#1E1F1C" strokeWidth="0.8" opacity="0.2"/>
          <line x1="28" y1="16" x2="28" y2="48" stroke="#1E1F1C" strokeWidth="0.8" opacity="0.2"/>
          <line x1="44" y1="16" x2="44" y2="48" stroke="#1E1F1C" strokeWidth="0.8" opacity="0.2"/>
          <line x1="60" y1="16" x2="60" y2="48" stroke="#1E1F1C" strokeWidth="0.8" opacity="0.2"/>
          <line x1="76" y1="16" x2="76" y2="48" stroke="#1E1F1C" strokeWidth="0.8" opacity="0.2"/>
          <line x1="92" y1="16" x2="92" y2="48" stroke="#1E1F1C" strokeWidth="0.8" opacity="0.2"/>
        </svg> */}

        {/* Blob shape - top right background */}
        {/* <svg className="absolute -top-10 right-40 w-52 h-52 opacity-5 animate-[blobFloat]" viewBox="0 0 200 200" fill="none" style={{ animationDuration: '8s' }}>
          <path d="M100,20 C140,20 170,50 170,100 C170,150 140,180 100,180 C60,180 30,150 30,100 C30,50 60,20 100,20" fill="#5C6F5A" opacity="0.4"/>
        </svg> */}

        {/* Star/spark - middle */}
        {/* <svg className="absolute top-1/3 right-1/4 w-12 h-12 opacity-7 animate-pulse" viewBox="0 0 48 48" fill="none" style={{ animationDuration: '2.5s' }}>
          <circle cx="24" cy="24" r="6" fill="#EEA727" opacity="0.5"/>
          <line x1="24" y1="12" x2="24" y2="36" stroke="#EEA727" strokeWidth="1" opacity="0.3"/>
          <line x1="12" y1="24" x2="36" y2="24" stroke="#EEA727" strokeWidth="1" opacity="0.3"/>
        </svg> */}

        {/* Wavy line - bottom center */}
        {/* <svg className="absolute bottom-40 left-1/3 w-48 h-16 opacity-6 animate-[waveFloat]" viewBox="0 0 192 64" fill="none" style={{ animationDuration: '6s' }}>
          <path d="M 0 32 Q 24 16 48 32 T 96 32 T 144 32 T 192 32" stroke="#EEA727" strokeWidth="2" opacity="0.4"/>
        </svg> */}

        {/* Dots cluster - bottom right */}
        <svg className="absolute bottom-10 right-20 w-16 h-16 opacity-7 animate-[dotBounce]" viewBox="0 0 64 64" fill="none" style={{ animationDuration: '3s' }}>
          <circle cx="16" cy="16" r="3" fill="#EEA727" opacity="0.5"/>
          <circle cx="32" cy="20" r="2.5" fill="#EEA727" opacity="0.4"/>
          <circle cx="48" cy="18" r="2" fill="#EEA727" opacity="0.3"/>
          <circle cx="20" cy="40" r="2" fill="#EEA727" opacity="0.3"/>
          <circle cx="40" cy="44" r="3" fill="#EEA727" opacity="0.5"/>
        </svg>
      </div>

      <Container className="max-w-[1400px] relative z-10">
        {/* Header with animation */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="space-y-2">
            <h2 className="font-sans text-[#1E1F1C] text-[32px] md:text-[48px] font-bold leading-tight">
              Why Hidden Monkey ?
            </h2>
            <p className="text-[#5E625A] text-[16px] font-light">
              Because the best journeys are <span className="text-[#EEA727] font-medium">shared</span>
            </p>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
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
                className="flex-shrink-0 transition-all duration-300"
                style={{ 
                  width: '300px',
                  scrollSnapAlign: 'start',
                  opacity: isVisible ? 1 : 0.6,
                  transform: isVisible ? `translateY(0)` : `translateY(20px)`,
                  transitionDelay: `${index * 50}ms`,
                  animation: isVisible ? `cardFadeIn 0.6s ease-out ${index * 80}ms both` : 'none'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative overflow-hidden rounded-[24px] bg-white h-[380px] my-4 transition-all duration-300 cursor-grab active:cursor-grabbing ${
                  hoveredCard === index 
                    ? 'shadow-xl' 
                    : 'shadow-sm hover:shadow-lg'
                }`}>
                  {/* Image Section with interactive effects */}
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="300px"
                      className={`object-cover transition-all duration-300 ${
                        hoveredCard === index 
                          ? 'scale-110 rotate-1' 
                          : 'scale-100 rotate-0'
                      }`}
                      style={{
                        filter: hoveredCard === index ? 'brightness(1.1)' : 'brightness(1)'
                      }}
                      loading={index < 2 ? "eager" : "lazy"}
                      priority={index < 2}
                      quality={80}
                      unoptimized
                    />
                    {/* Subtle overlay */}
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      hoveredCard === index ? 'bg-black/5' : 'bg-black/10'
                    }`}></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-6 transition-all duration-300 ${
                    hoveredCard === index ? 'translate-y-0' : 'translate-y-0'
                  }`}>
                    <h3 className={`text-[#1E1F1C] font-semibold text-[18px] mb-3 transition-colors duration-300 ${
                      hoveredCard === index ? 'text-[#EEA727]' : ''
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-[#5E625A] text-[14px] leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-[#EEA727] transition-all duration-300 ${
                    hoveredCard === index ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden md:block">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white border border-[#E6E4DF] rounded-full shadow-md hover:shadow-lg hover:border-[#EEA727] transition-all duration-200 flex items-center justify-center group"
              aria-label="Scroll left"
              type="button"
            >
              <svg className="w-5 h-5 text-[#1E1F1C] group-hover:text-[#EEA727] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-[#EEA727] hover:bg-[#E84D1B] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group"
              aria-label="Scroll right"
              type="button"
            >
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Social Proof Element */}
        {/* <div className={`mt-12 flex items-center gap-3 justify-center transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex -space-x-2">
            {['A', 'B', 'C', 'D'].map((letter, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EEA727] to-[#E84D1B] text-white text-xs font-semibold flex items-center justify-center border-2 border-white shadow-sm"
              >
                {letter}
              </div>
            ))}
          </div>
          <div> 
          <p className="text-[#5E625A] text-sm font-light flex items-center gap-1">
            <span className="font-medium text-[#1E1F1C]">50+</span> travellers hanging out here right now
          </p></div>
        </div> */}
      </Container>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(12px);
          }
        }

        @keyframes tapeFloat {
          0%, 100% {
            transform: translateY(0px) rotate(-2deg);
          }
          50% {
            transform: translateY(-8px) rotate(-2deg);
          }
        }

        @keyframes blobFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-10px, -15px) scale(1.05);
          }
          50% {
            transform: translate(10px, -10px) scale(0.95);
          }
          75% {
            transform: translate(-5px, 10px) scale(1.02);
          }
        }

        @keyframes waveFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes dotBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Enhanced card animations */
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
