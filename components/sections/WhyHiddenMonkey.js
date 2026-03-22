'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

/**
 * Why Choose Hidden Monkey Section
 * Enhanced interactive horizontal scrolling feature cards
 * Feels social, playful, and hostel-like with micro-interactions
 */

export default function WhyHiddenMonkey() {
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
      className="relative py-14 md:py-20 bg-white overflow-hidden"
      aria-label="Why Choose Hidden Monkey"
    >



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
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`,
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


    </section>
  )
}
