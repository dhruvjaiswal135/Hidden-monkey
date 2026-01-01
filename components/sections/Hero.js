'use client'

import Link from 'next/link'

/**
 * Hero Section
 * Modern 2-column layout: text on left, floating search card on right
 * Matches Hidden Monkey's floating pill aesthetic
 */

export default function Hero() {
  return (
    <>
      <section className="relative w-full lg:-mt-16 pb-32 lg:pb-0 lg:pt-0 lg:min-h-[90vh] lg:flex lg:items-center">
        {/* Hero Container */}
        <div className="max-w-[1600px] mx-auto w-full px-4 lg:px-8">
        <div className="relative rounded-[32px] lg:rounded-[40px] overflow-hidden h-[600px] lg:h-[80vh] min-h-[600px]">
          
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
              alt="Mountain hiking landscape"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Subtle overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content Grid: Left Text + Right Card */}
          <div className="relative h-full grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-center px-6 lg:px-12 py-8 lg:py-0">
            
            {/* LEFT COLUMN - TEXT CONTENT */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8 z-10">
              
              {/* Micro-label */}
              <div>
                <p className="text-white/80 text-sm font-light tracking-wide">
                  — it's time to travel differently
                </p>
              </div>
              
              {/* Main Headline */}
              <div>
                <h1
                  className="text-white font-bold leading-tight"
                  style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
                >
                  Don't just stay.<br />
                  <span className="text-[#F05A28]">Live with the tribe.</span>
                </h1>
              </div>
              
              {/* Subtext */}
              <p className="text-white/85 text-base lg:text-lg leading-relaxed max-w-md font-light">
                Join thousands of backpackers and adventurers who've found their community. Share stories, make friends, explore together.
              </p>
              
              {/* CTA Group */}
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="/stays"
                  className="px-6 lg:px-8 py-3 lg:py-3.5 bg-[#F05A28] hover:bg-[#E84D1B] text-white font-semibold rounded-full transition-all duration-150 text-sm lg:text-base shadow-lg hover:shadow-xl"
                >
                  Explore Stays
                </Link>
                <button
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-150 border border-white/30 hover:border-white/50"
                  aria-label="Learn more"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-3 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-white/80 text-sm font-light">
                  28+ travellers checked in this week
                </p>
              </div>
            </div>
            
            {/* RIGHT COLUMN - FLOATING CARD (Desktop Only) */}
            <div className="hidden lg:relative lg:h-full lg:flex lg:items-center lg:justify-center lg:z-20">
              <div className="w-full max-w-sm bg-white rounded-[28px] p-8 shadow-2xl">
                
                {/* Card Header */}
                <div className="mb-8">
                  <h2 className="text-[#1E1F1C] font-bold text-2xl">
                    Find your next stay
                  </h2>
                  <p className="text-[#5E625A] text-sm mt-1 font-light">
                    Search across 200+ locations
                  </p>
                </div>
                
                {/* Card Input Fields */}
                <div className="space-y-4 mb-8">
                  
                  {/* Location Input */}
                  <div className="flex items-center gap-3 px-4 py-3.5 bg-white border border-[#E6E4DF] rounded-2xl hover:border-[#D0CCC4] transition-colors duration-150">
                    <svg className="w-5 h-5 text-[#5E625A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="flex-1 outline-none text-[#1E1F1C] placeholder-[#5E625A] text-sm font-medium bg-transparent"
                      readOnly
                    />
                  </div>
                  
                  {/* Dates Input */}
                  <div className="flex items-center gap-3 px-4 py-3.5 bg-white border border-[#E6E4DF] rounded-2xl hover:border-[#D0CCC4] transition-colors duration-150">
                    <svg className="w-5 h-5 text-[#5E625A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="When? (dates)"
                      className="flex-1 outline-none text-[#1E1F1C] placeholder-[#5E625A] text-sm font-medium bg-transparent"
                      readOnly
                    />
                  </div>
                  
                  {/* Room Type Input */}
                  <div className="flex items-center gap-3 px-4 py-3.5 bg-white border border-[#E6E4DF] rounded-2xl hover:border-[#D0CCC4] transition-colors duration-150">
                    <svg className="w-5 h-5 text-[#5E625A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Room type"
                      className="flex-1 outline-none text-[#1E1F1C] placeholder-[#5E625A] text-sm font-medium bg-transparent"
                      readOnly
                    />
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link
                  href="/search"
                  className="w-full inline-block py-3.5 bg-[#F05A28] hover:bg-[#E84D1B] text-white font-semibold rounded-full transition-all duration-150 text-center text-sm shadow-lg hover:shadow-xl"
                >
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* MOBILE STICKY BOOKING BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E6E4DF] shadow-2xl z-50 rounded-t-[32px]">
        <div className="px-6 py-4 max-w-[1600px] mx-auto w-full">
          {/* One-row booking inputs */}
          <div className="space-y-3">
            <h3 className="text-[#1E1F1C] font-semibold text-sm">Find your next stay</h3>
            <div className="grid grid-cols-3 gap-2">
              
              {/* Location Input */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-white border border-[#E6E4DF] rounded-xl">
                <svg className="w-4 h-4 text-[#5E625A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Location"
                  className="flex-1 outline-none text-[#1E1F1C] placeholder-[#5E625A] text-xs font-medium bg-transparent"
                  readOnly
                />
              </div>
              
              {/* Dates Input */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-white border border-[#E6E4DF] rounded-xl">
                <svg className="w-4 h-4 text-[#5E625A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input
                  type="text"
                  placeholder="Dates"
                  className="flex-1 outline-none text-[#1E1F1C] placeholder-[#5E625A] text-xs font-medium bg-transparent"
                  readOnly
                />
              </div>
              
              {/* Room Type Input */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-white border border-[#E6E4DF] rounded-xl">
                <svg className="w-4 h-4 text-[#5E625A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <input
                  type="text"
                  placeholder="Room"
                  className="flex-1 outline-none text-[#1E1F1C] placeholder-[#5E625A] text-xs font-medium bg-transparent"
                  readOnly
                />
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/search"
              className="w-full inline-block py-2.5 bg-[#F05A28] hover:bg-[#E84D1B] text-white font-semibold rounded-full transition-all duration-150 text-center text-xs shadow-lg hover:shadow-xl"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}