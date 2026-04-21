'use client'

import { useRef, useEffect, useState } from 'react'
import Container from '@/components/ui/Container'
import Image from 'next/image'
import { useBooking } from '@/context/BookingContext'

function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

const travelers = [
  {
    id: 1,
    name: 'Sarah',
    country: 'Australia',
    stayDates: 'Nov 2025',
    quote: "I came for a week and stayed for three. Made best friends, went on the most amazing treks, and learned more about myself than in years at home.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    highlight: 'Found my travel family',
  },
  {
    id: 2,
    name: 'Marco',
    country: 'Italy',
    stayDates: 'Oct 2025',
    quote: "Finally found a place where remote work meets real community. The WiFi actually works, and the people here become your friends.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    highlight: 'Digital nomad paradise',
  },
  {
    id: 3,
    name: 'Priya',
    country: 'India',
    stayDates: 'Dec 2025',
    quote: "As a solo female traveler, I felt safer here than anywhere else I've stayed. The whole vibe just says 'we've got you.'",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    highlight: 'Safe & welcoming',
  }
]

function TestimonialCard({ traveler }) {
  return (
    <div className="flex-shrink-0 w-[300px] md:w-[340px] group">
      <div className="h-full bg-white rounded-[28px] p-6 border border-[#E6E4DF] shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 transition-all duration-500 bg-[#FBFBF9]/30">
        <div className="flex items-center gap-3 mb-6">
           <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <Image src={traveler.avatar} alt={traveler.name} fill className="object-cover" unoptimized />
           </div>
           <div>
              <h4 className="text-[#1E1F1C] font-bold text-[15px]">{traveler.name}</h4>
              <p className="text-[#9A948C] text-[11px] font-bold uppercase tracking-widest">{traveler.country}</p>
           </div>
           <div className="ml-auto">
              <span className="text-[#FBB11A] text-[18px]">★</span>
           </div>
        </div>

        <p className="text-[#6B665E] text-[13px] font-light leading-relaxed italic mb-6">
          "{traveler.quote}"
        </p>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#128790]/5 rounded-full border border-[#128790]/10">
           <span className="text-[9px] font-bold text-[#128790] uppercase tracking-widest">{traveler.highlight}</span>
        </div>
      </div>
    </div>
  )
}

// Community banner
function WorldMapPreview() {
  return (
    <div className="relative bg-[#1E1F1C] rounded-[24px] p-6 md:p-8 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            A global tribe
          </h3>
          <p className="text-white/65 text-sm max-w-xs">
            Travelers from over 50 countries have called Hidden Monkey home.
          </p>
        </div>

        {/* Country codes */}
        <div className="flex flex-wrap gap-2">
          {['AU', 'IT', 'US', 'DE', 'BR', 'FR', 'GB', 'JP', 'CA', 'NL', 'ES', 'IN'].map((code, i) => (
            <span key={i} className="px-2 py-1 bg-white/10 text-white/70 text-[10px] font-medium rounded border border-white/15">{code}</span>
          ))}
          <span className="text-white/50 text-sm font-medium self-center ml-1">+38 more</span>
        </div>

        {/* CTA */}
        <a
          href="/community"
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full border border-white/20 transition-colors"
        >
          Explore the community
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}


function BookStayButton() {
  const { openBooking } = useBooking()
  return (
    <button
      onClick={() => openBooking()}
      className="px-6 py-2.5 bg-white text-[#128790] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#FBB11A] hover:text-white transition-all shadow-sm"
    >
      Book Your Stay
    </button>
  )
}

export default function MeetTheTribe() {
  const [headerRef, headerVisible] = useReveal(0.1)

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#E6E4DF]" id="community">
      <Container className="max-w-[1400px]">
        {/* Header - Cute & Small */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#128790]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">Our Global Family</span>
            </div>
            <h2 className="text-[#1E1F1C] font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em]">
              Meet the <span className="text-[#FBB11A]">tribe.</span>
            </h2>
          </div>
          
          <div className="hidden md:flex gap-8">
             <div className="text-right">
                <span className="text-[20px] font-bold text-[#1E1F1C] block">12k+</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#9A948C]">Travelers</span>
             </div>
             <div className="text-right">
                <span className="text-[20px] font-bold text-[#1E1F1C] block">50+</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#9A948C]">Countries</span>
             </div>
          </div>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div className="relative -mx-4 md:-mx-8 lg:mx-0 overflow-hidden">
          <div 
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 md:px-8 lg:px-0 scrollbar-hide"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          >
            {travelers.map((traveler) => (
              <TestimonialCard key={traveler.id} traveler={traveler} />
            ))}
            {/* CTA Card */}
            <div className="flex-shrink-0 w-[300px] md:w-[340px]">
               <div className="h-full bg-[#128790] rounded-[28px] p-8 flex flex-col items-center justify-center text-center text-white border border-[#128790] shadow-sm">
                  <span className="text-3xl mb-4">🌍</span>
                  <h4 className="text-[18px] font-bold mb-2">Be our next story</h4>
                  <p className="text-white/70 text-[12px] font-light mb-6">Join 12,000+ travelers on the journey of a lifetime.</p>
                  <BookStayButton />
               </div>
            </div>
          </div>
          <WorldMapPreview />
        </div>
      </Container>
    </section>
  )
}
