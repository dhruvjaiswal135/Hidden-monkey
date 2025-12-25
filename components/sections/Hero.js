import Image from 'next/image'
import Container from '@/components/ui/Container'

/**
 * Hero Section
 * Camping/glamping themed hero with search functionality
 */

export default function Hero() {
  return (
    <section className="relative py-8">
      <Container className="max-w-[1400px] px-0 md:px-6">
        {/* Hero Card with rounded corners */}
        <div className="relative md:rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className=" h-[550px] sm:h-[550px] md:h-[600px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1723478515436-5f8e0202c909?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Camping tent in nature"
              fill
              priority
              className="object-cover w-full h-full"
              sizes="100vw"
              quality={90}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          </div>
          
          {/* Content Overlay - Upper Section */}
          <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-start px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 md:pt-20">
            {/* Main Heading */}
            <h1 className="font-bold text-white text-center mb-5 sm:mb-6 md:mb-8 leading-[1.15] max-w-4xl" 
                style={{ 
                  fontSize: 'clamp(1.625rem, 4.5vw, 4rem)',
                  textShadow: '0 2px 20px rgba(0,0,0,0.4)'
                }}>
              Secure Your Dream Vacation with a Reservation
            </h1>
            
            {/* Search Bar */}
            <div className="w-full max-w-4xl bg-white opacity-80 rounded-xl md:rounded-full shadow-2xl p-2.5 md:p-2 flex flex-col md:flex-row items-stretch md:items-center gap-0 md:gap-2">
              {/* Location Input */}
              <div className="flex items-center gap-2.5 px-4 py-3 flex-1 min-w-0 md:min-w-[180px] border-b md:border-b-0 border-gray-100">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="outline-none text-gray-700 placeholder-gray-400 text-sm font-medium bg-transparent flex-1 w-full"
                />
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-gray-200"></div>
              
              {/* Date Input */}
              <div className="flex items-center gap-2.5 px-4 py-3 flex-1 min-w-0 md:min-w-[220px] border-b md:border-b-0 border-gray-100">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Check-in - Check-out" 
                  className="outline-none text-gray-700 placeholder-gray-400 text-sm font-medium bg-transparent flex-1 w-full"
                />
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-gray-200"></div>
              
              {/* Person Input */}
              <div className="flex items-center gap-2.5 px-4 py-3 flex-1 min-w-0 md:min-w-[140px] border-b md:border-b-0 border-gray-100">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Person" 
                  className="outline-none text-gray-700 placeholder-gray-400 text-sm font-medium bg-transparent flex-1 w-full"
                />
              </div>
              
              {/* Search Button */}
              <button className="bg-[#2D7A5F] hover:bg-[#246B51] active:bg-[#1f5a44] text-white px-6 md:px-8 py-3.5 md:py-3 rounded-lg md:rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2 md:mt-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
              </button>
            </div>
          </div>
          
          {/* Bottom Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-7 md:pb-10">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
                {/* Mission Statement - Left Side */}
                <div className="flex-1 max-w-md order-2 md:order-1">
                  <p className="text-white/95 text-[11px] sm:text-xs md:text-sm leading-relaxed font-light tracking-wide">
                    We believe in the power of the great outdoors. We think that everyone deserves the chance to explore the wild and to find their very own adventure.
                  </p>
                </div>
                
                {/* Stats - Right Side */}
                <div className="flex gap-8 sm:gap-10 md:gap-14 lg:gap-20 order-1 md:order-2">
                  <div className="text-left">
                    <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 tracking-tight">121+</div>
                    <div className="text-white/80 text-[10px] sm:text-[11px] md:text-xs font-light tracking-wide whitespace-nowrap">Capital Raised</div>
                  </div>
                  
                  <div className="text-left">
                    <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 tracking-tight">80+</div>
                    <div className="text-white/80 text-[10px] sm:text-[11px] md:text-xs font-light tracking-wide whitespace-nowrap">Happy Customers</div>
                  </div>
                  
                  <div className="text-left">
                    <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 tracking-tight">1K+</div>
                    <div className="text-white/80 text-[10px] sm:text-[11px] md:text-xs font-light tracking-wide whitespace-nowrap">Property options</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
