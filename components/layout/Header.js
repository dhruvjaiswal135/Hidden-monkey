'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * FloatingHeader Component
 * Modern, minimal floating pill-shaped header for Hidden Monkey
 * Inspired by premium travel brand UI design
 */

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 group">
    {/* Minimal jungle mark - abstract eye/leaf */}
    <div className="relative w-5 h-5">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full text-[#1E1F1C]"
      >
        {/* Stylized leaf mark */}
        <path
          d="M12 2C12 2 8 8 8 12C8 15.3 10 18 12 18C14 18 16 15.3 16 12C16 8 12 2 12 2Z"
          fill="currentColor"
        />
        <circle cx="12" cy="10" r="2" fill="white" opacity="0.6" />
      </svg>
    </div>
    <span
      className="font-semibold text-[#1E1F1C] text-[17px] tracking-tight"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      Hidden Monkey
    </span>
  </Link>
)

const NavLink = ({ href, label, isActive = false }) => (
  <Link
    href={href}
    className="relative text-[#1E1F1C] text-[14px] font-medium transition-all duration-150 ease-out hover:text-[#F05A28] group"
  >
    {label}
    {/* Animated underline indicator */}
    <span
      className={`absolute bottom-0 left-0 h-0.5 bg-[#F05A28] transition-all duration-150 ease-out ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}
    ></span>
  </Link>
)

const PrimaryButton = ({ href, label }) => (
  <Link
    href={href}
    className="px-5 py-2.5 bg-[#F05A28] hover:bg-[#E84D1B] text-white text-[14px] font-medium rounded-full transition-all duration-150 ease-out shadow-sm hover:shadow-md"
  >
    {label}
  </Link>
)

const MobileMenuIcon = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col gap-1.5 p-2 -mr-2 lg:hidden"
    aria-label="Toggle menu"
    aria-expanded={isOpen}
  >
    <span
      className={`h-0.5 w-5 bg-[#1E1F1C] transition-all duration-200 ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    ></span>
    <span
      className={`h-0.5 w-5 bg-[#1E1F1C] transition-all duration-200 ${
        isOpen ? 'opacity-0' : ''
      }`}
    ></span>
    <span
      className={`h-0.5 w-5 bg-[#1E1F1C] transition-all duration-200 ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    ></span>
  </button>
)

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/stays', label: 'Stays' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/community', label: 'Community' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/stories', label: 'Stories' },
  ]

  return (
    <>
      {/* Header container wrapper */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 lg:pt-6 px-4 lg:px-6">
        {/* Floating pill container */}
        <div className="max-w-[1200px] mx-auto">
          <nav
            className="relative flex items-center justify-between h-16 px-6 lg:px-8 bg-white/30 border border-[#E6E4DF] rounded-full shadow-sm transition-shadow duration-300 hover:shadow-md"
            style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <PrimaryButton href="/book" label="Book Your Stay" />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-auto">
              <MobileMenuIcon
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </nav>

          {/* Mobile Menu Panel */}
          {isMobileMenuOpen && (
            <div
              className="absolute top-20 left-4 right-4 bg-white border border-[#E6E4DF] rounded-3xl shadow-lg p-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)' }}
            >
              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[#1E1F1C] text-[15px] font-medium hover:text-[#F05A28] transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E6E4DF]"></div>

              {/* Mobile CTA */}
              <Link
                href="/book"
                className="block w-full px-5 py-3 bg-[#F05A28] hover:bg-[#E84D1B] text-white text-[14px] font-medium rounded-full text-center transition-all duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Your Stay
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero offset - creates space below floating header */}
      <div className="h-24 lg:h-32"></div>
    </>
  )
}
