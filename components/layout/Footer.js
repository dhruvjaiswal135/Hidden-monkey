import Link from 'next/link'
import Container from '@/components/ui/Container'

/**
 * Footer Component
 * Backpacker-friendly footer with authentic, minimal design
 */

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Large Year Background with Creative Text Overlay */}
      <div className="relative py-16 md:py-20">
        <Container className="max-w-[1400px]">
          {/* Giant Year Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="text-[180px] sm:text-[240px] md:text-[300px] lg:text-[360px] font-bold text-gray-100 leading-none select-none">
              {currentYear}
            </div>
          </div>

          {/* Creative Overlay Text */}
          <div className="relative z-10 text-center mb-16 md:mb-20">
            <div className="inline-block">
              <h2 className="font-sans text-[42px] sm:text-[56px] md:text-[68px] font-bold text-[#1A1A1A] leading-none mb-2 tracking-tight">
                chase your
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-[42px] sm:text-[56px] md:text-[68px] font-bold text-[#1A1A1A] leading-none tracking-tight">dreams</span>
                <span className="text-[56px] sm:text-[72px] md:text-[88px] animate-pulse">✈️</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Download App Section */}
            <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl p-8 border border-gray-200">
              <h3 className="text-[#1A1A1A] text-[18px] font-semibold mb-4">Download Hidden Monkey App</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                  <span className="text-[18px] mt-0.5">🎒</span>
                  <span>Book beds & rooms on the go</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                  <span className="text-[18px] mt-0.5">🗺️</span>
                  <span>Explore local guides & hidden spots</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                  <span className="text-[18px] mt-0.5">🤝</span>
                  <span>Connect with fellow travelers</span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-[#374151]">
                  <span className="text-[18px] mt-0.5">🎉</span>
                  <span>Join hostel events & activities</span>
                </li>
              </ul>

              {/* QR Code Placeholder */}
              <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-center border border-gray-200">
                <div className="w-32 h-32 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex gap-3">
                <a href="#" className="flex-1 bg-[#1A1A1A] text-white rounded-lg px-3 py-2 flex items-center justify-center gap-2 hover:bg-[#2D7A5F] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-[11px] font-medium">App Store</span>
                </a>
                <a href="#" className="flex-1 bg-[#1A1A1A] text-white rounded-lg px-3 py-2 flex items-center justify-center gap-2 hover:bg-[#2D7A5F] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span className="text-[11px] font-medium">Play Store</span>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
              
              {/* Hidden Monkey */}
              <div>
                <h4 className="text-[#1A1A1A] text-[13px] font-semibold mb-4 uppercase tracking-wide">Hidden Monkey</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/rooms" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Rooms</Link></li>
                  <li><Link href="/dorms" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Dorms</Link></li>
                  <li><Link href="/private-rooms" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Private Rooms</Link></li>
                  <li><Link href="/offers" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Offers</Link></li>
                  <li><Link href="/events" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Events</Link></li>
                </ul>
              </div>

              {/* Destinations */}
              <div>
                <h4 className="text-[#1A1A1A] text-[13px] font-semibold mb-4 uppercase tracking-wide">Destinations</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/hostels/rishikesh" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Rishikesh</Link></li>
                  <li><Link href="/hostels/bir" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Bir</Link></li>
                  <li><Link href="/hostels/goa" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Goa</Link></li>
                  <li><Link href="/hostels/kasol" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Kasol</Link></li>
                  <li><Link href="/hostels/manali" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Manali</Link></li>
                  <li><Link href="/destinations" className="text-[14px] text-[#2D7A5F] hover:text-[#1A1A1A] font-medium transition-colors">View All →</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-[#1A1A1A] text-[13px] font-semibold mb-4 uppercase tracking-wide">Company</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/about" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Contact Us</Link></li>
                  <li><Link href="/careers" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Careers</Link></li>
                  <li><Link href="/blog" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Blog</Link></li>
                  <li><Link href="/press" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Press</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-[#1A1A1A] text-[13px] font-semibold mb-4 uppercase tracking-wide">Support</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/help" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Help Center</Link></li>
                  <li><Link href="/faq" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">FAQs</Link></li>
                  <li><Link href="/cancellation" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Cancellation</Link></li>
                  <li><Link href="/safety" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Safety</Link></li>
                  <li><Link href="/feedback" className="text-[14px] text-[#6B7280] hover:text-[#2D7A5F] transition-colors">Feedback</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1A1A1A] text-white">
        <Container className="max-w-[1400px] py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left - Copyright & Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-[13px]">
              <p className="text-gray-400">Hidden Monkey © {currentYear}. All Rights Reserved</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>

            {/* Right - Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px] mr-2">Follow us</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D7A5F] flex items-center justify-center transition-colors group" aria-label="Instagram">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D7A5F] flex items-center justify-center transition-colors group" aria-label="Facebook">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D7A5F] flex items-center justify-center transition-colors group" aria-label="Twitter">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D7A5F] flex items-center justify-center transition-colors group" aria-label="YouTube">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D7A5F] flex items-center justify-center transition-colors group" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
