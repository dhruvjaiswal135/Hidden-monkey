'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { href: '/#life', label: 'Life' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/#work', label: 'Work' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/stays', label: 'Stays' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const onLinkClick = () => setIsMobileOpen(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          transition: 'background-color 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div
            className="flex items-center justify-between"
            style={{
              height: isScrolled ? '64px' : '76px',
              transition: 'height 0.4s ease',
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Hidden Monkey"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span
                  className="font-semibold text-[15px] tracking-tight leading-none block"
                  style={{
                    color: isScrolled ? '#171717' : 'white',
                    transition: 'color 0.4s ease',
                  }}
                >
                  Hidden<span className="text-sunset-gold">Monkey</span>
                </span>
                <span
                  className="text-[9px] tracking-[0.12em] uppercase leading-none mt-0.5 block"
                  style={{
                    color: isScrolled ? '#a3a3a3' : 'rgba(255,255,255,0.45)',
                    transition: 'color 0.4s ease',
                  }}
                >
                  Community Hostels
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-sunset-gold"
                  style={{
                    color: isScrolled ? '#404040' : 'rgba(255,255,255,0.82)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/stays"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full"
                style={{
                  backgroundColor: isScrolled ? '#171717' : 'white',
                  color: isScrolled ? 'white' : '#171717',
                  transition: 'background-color 0.4s ease, color 0.4s ease',
                }}
              >
                Book Your Stay
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2 w-10 h-10"
                aria-label="Toggle menu"
              >
                <span
                  className="block h-[1.5px] rounded-full origin-center"
                  style={{
                    width: '22px',
                    backgroundColor: isScrolled ? '#171717' : 'white',
                    transform: isMobileOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
                    transition: 'transform 0.25s ease, background-color 0.4s ease',
                  }}
                />
                <span
                  className="block h-[1.5px] rounded-full"
                  style={{
                    width: '22px',
                    backgroundColor: isScrolled ? '#171717' : 'white',
                    opacity: isMobileOpen ? 0 : 1,
                    transition: 'opacity 0.2s ease, background-color 0.4s ease',
                  }}
                />
                <span
                  className="block h-[1.5px] rounded-full origin-center"
                  style={{
                    width: '22px',
                    backgroundColor: isScrolled ? '#171717' : 'white',
                    transform: isMobileOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
                    transition: 'transform 0.25s ease, background-color 0.4s ease',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Layout spacer — pushes non-hero page content below the fixed header */}
      <div className="h-20" aria-hidden="true" />

      {/* Mobile Drawer */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        style={{ pointerEvents: isMobileOpen ? 'auto' : 'none' }}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          style={{
            opacity: isMobileOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col"
          style={{
            transform: isMobileOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
            <span className="font-semibold text-neutral-900 text-sm">Navigation</span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors rounded-lg hover:bg-neutral-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 px-6 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onLinkClick}
                className="flex items-center justify-between py-3.5 text-neutral-700 font-medium border-b border-neutral-50 last:border-0 hover:text-sunset-gold transition-colors text-sm"
              >
                {item.label}
                <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-neutral-100">
            <Link
              href="/stays"
              onClick={onLinkClick}
              className="block w-full py-3.5 bg-neutral-900 text-white font-semibold text-center rounded-full hover:bg-neutral-800 transition-colors text-sm"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
