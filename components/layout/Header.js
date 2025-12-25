'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * Header Component
 * Simple navigation for backpacker hostel
 */

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" fill="#8B4513"/>
              <ellipse cx="16" cy="19" rx="8" ry="6" fill="#D2691E"/>
              <circle cx="12" cy="14" r="2" fill="#1A1A1A"/>
              <circle cx="20" cy="14" r="2" fill="#1A1A1A"/>
              <circle cx="12.5" cy="13.5" r="0.5" fill="white"/>
              <circle cx="20.5" cy="13.5" r="0.5" fill="white"/>
              <path d="M 12 20 Q 16 22 20 20" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
              <path d="M 22 8 L 24 10 L 22 12 Z" fill="#2D7A5F"/>
            </svg>
            
            <div>
              <span className="font-semibold text-[#1A1A1A] text-base">Hidden Monkey</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/rooms" className="text-[#1A1A1A] hover:text-[#2D7A5F] text-sm">
              Rooms
            </Link>
            <Link href="/destinations" className="text-[#1A1A1A] hover:text-[#2D7A5F] text-sm">
              Destinations
            </Link>
            <Link href="/about" className="text-[#1A1A1A] hover:text-[#2D7A5F] text-sm">
              About
            </Link>
            <Link href="/blog" className="text-[#1A1A1A] hover:text-[#2D7A5F] text-sm">
              Blog
            </Link>
            <Link href="/contact" className="text-[#1A1A1A] hover:text-[#2D7A5F] text-sm">
              Contact
            </Link>
          </div>
          
          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 bg-[#2D7A5F] hover:bg-[#246B51] text-white text-sm font-medium rounded-lg"
            >
              Book Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1A1A]"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200">
            <div className="flex flex-col gap-1">
              <Link
                href="/rooms"
                className="text-[#1A1A1A] hover:text-[#2D7A5F] px-2 py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rooms
              </Link>
              <Link
                href="/destinations"
                className="text-[#1A1A1A] hover:text-[#2D7A5F] px-2 py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/about"
                className="text-[#1A1A1A] hover:text-[#2D7A5F] px-2 py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-[#1A1A1A] hover:text-[#2D7A5F] px-2 py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-[#1A1A1A] hover:text-[#2D7A5F] px-2 py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2 bg-[#2D7A5F] text-white text-sm font-medium rounded-lg mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
