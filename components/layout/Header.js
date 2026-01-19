'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * FloatingHeader Component
 * Modern, minimal floating pill-shaped header for Hidden Monkey
 * Scroll-aware with Framer Motion animations
 */

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 group">
    {/* Logo Image */}
    <div className="relative w-20 h-12 flex-shrink-0">
      <Image
        src="/images/logo.png"
        alt="Hidden Monkey Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  </Link>
)

const NavLink = ({ href, label, isActive = false }) => (
  <Link
    href={href}
    className="relative text-charcoal text-sm font-medium transition-all duration-150 ease-out hover:text-sunset-gold group"
  >
    {label}
    {/* Animated underline indicator */}
    <span
      className={`absolute bottom-0 left-0 h-0.5 bg-sunset-gold transition-all duration-150 ease-out ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}
    ></span>
  </Link>
)

const PrimaryButton = ({ href, label }) => (
  <Link
    href={href}
    className="px-5 py-2.5 bg-gradient-to-r from-sunset-gold to-sunset-orange hover:from-sunset-orange hover:to-sunset-gold text-white text-sm font-medium rounded-full transition-all duration-300 shadow-button hover:shadow-button-hover hover:-translate-y-0.5"
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
      className={`h-0.5 w-5 bg-charcoal transition-all duration-200 ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    ></span>
    <span
      className={`h-0.5 w-5 bg-charcoal transition-all duration-200 ${
        isOpen ? 'opacity-0' : ''
      }`}
    ></span>
    <span
      className={`h-0.5 w-5 bg-charcoal transition-all duration-200 ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    ></span>
  </button>
)

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/#life', label: 'Life' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/#work', label: 'Work' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/stays', label: 'Stays' },
  ]

  return (
    <>
      {/* Header container wrapper */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 pt-4 lg:pt-6 px-4 lg:px-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Floating pill container */}
        <div className="max-w-[1200px] mx-auto">
          <nav
            className={`relative flex items-center justify-between h-16 px-6 lg:px-8 bg-white/95 backdrop-blur-md border border-border rounded-full transition-all duration-300 ${
              isScrolled ? 'shadow-elevated' : 'shadow-soft'
            }`}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <NavLink
                    href={item.href}
                    label={item.label}
                  />
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <PrimaryButton href="/stays" label="Book Your Stay" />
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-auto">
              <MobileMenuIcon
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </nav>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md border border-border rounded-3xl shadow-elevated p-6 space-y-4"
              >
                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="text-charcoal text-base font-medium hover:text-sunset-gold transition-colors duration-150"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border"></div>

                {/* Mobile CTA */}
                <Link
                  href="/stays"
                  className="block w-full px-5 py-3 bg-gradient-to-r from-sunset-gold to-sunset-orange hover:from-sunset-orange hover:to-sunset-gold text-white text-sm font-medium rounded-full text-center transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Your Stay
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero offset - creates space below floating header */}
      <div className="h-24 lg:h-32"></div>
    </>
  )
}
