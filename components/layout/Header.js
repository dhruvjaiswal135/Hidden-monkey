'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'

/**
 * Hidden Monkey Header - Community Edition
 * 
 * Design Philosophy:
 * "A header that feels alive, welcoming, and adventurous"
 * 
 * Features:
 * - Magnetic hover effects on nav items
 * - Dynamic scroll-based transformations
 * - Micro-interactions that delight
 * - Live community indicator
 * - Creative mobile drawer with personality
 */

// Magnetic link component - follows cursor slightly
const MagneticNavLink = ({ href, label, emoji, isActive = false }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Link
        href={href}
        className="relative flex items-center gap-1.5 text-charcoal text-sm font-medium transition-all duration-200 hover:text-sunset-gold group py-2"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-base">
          {emoji}
        </span>
        <span className="relative">
          {label}
          {/* Animated dot indicator */}
          <motion.span
            className="absolute -bottom-1 left-1/2 w-1 h-1 bg-sunset-gold rounded-full"
            initial={{ scale: 0, x: '-50%' }}
            whileHover={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </span>
      </Link>
    </motion.div>
  )
}

// Animated logo with hover effect
const Logo = ({ isScrolled }) => (
  <Link href="/" className="flex items-center gap-3 group relative">
    <motion.div 
      className="relative w-10 h-10 flex-shrink-0 bg-gradient-to-br from-sunset-gold to-sunset-orange rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.05, rotate: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src="/images/logo.png"
        alt="Hidden Monkey"
        fill
        className="object-contain p-1"
        priority
      />
    </motion.div>
    
    {/* Brand name - hidden on scroll */}
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="hidden sm:block"
        >
          <span className="text-charcoal font-bold text-lg tracking-tight">
            Hidden<span className="text-sunset-gold">Monkey</span>
          </span>
          <span className="block text-[10px] text-charcoal-muted font-medium -mt-0.5 tracking-wide">
            COMMUNITY HOSTELS
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  </Link>
)

// Live community pulse indicator
const LiveIndicator = () => (
  <motion.div
    className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 }}
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
    <span className="text-green-700 text-xs font-medium">47 travelers online</span>
  </motion.div>
)

// Creative book button with hover animation
const BookButton = ({ isCompact = false }) => (
  <Link href="/stays" className="group relative">
    <motion.div
      className={`relative overflow-hidden ${
        isCompact 
          ? 'px-4 py-2 text-xs' 
          : 'px-6 py-2.5 text-sm'
      } bg-charcoal text-white font-semibold rounded-full transition-all duration-300`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sunset-gold via-sunset-orange to-sunset-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundSize: '200% 100%' }}
        animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      
      <span className="relative flex items-center gap-2">
        <span>Book Your Stay</span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      </span>
    </motion.div>
  </Link>
)

// Animated hamburger icon
const MenuIcon = ({ isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    className="relative w-10 h-10 flex items-center justify-center lg:hidden rounded-xl bg-sand-cream hover:bg-sand-light transition-colors"
    whileTap={{ scale: 0.95 }}
    aria-label="Toggle menu"
    aria-expanded={isOpen}
  >
    <div className="w-5 h-4 flex flex-col justify-between">
      <motion.span
        className="w-full h-0.5 bg-charcoal rounded-full origin-left"
        animate={isOpen ? { rotate: 45, y: -1 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="w-3 h-0.5 bg-charcoal rounded-full"
        animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="w-full h-0.5 bg-charcoal rounded-full origin-left"
        animate={isOpen ? { rotate: -45, y: 1 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  </motion.button>
)

// Mobile menu with personality
const MobileMenu = ({ isOpen, onClose, navItems }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40 lg:hidden"
          />
          
          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-4 right-4 mt-3 bg-white rounded-3xl shadow-elevated border border-border overflow-hidden z-50 lg:hidden"
          >
            {/* Header with vibe */}
            <div className="px-6 py-4 bg-gradient-to-r from-sunset-gold/5 to-sunset-orange/5 border-b border-border">
              <p className="text-charcoal font-semibold">Where to next? 🌍</p>
              <p className="text-charcoal-muted text-sm">Explore our community</p>
            </div>
            
            {/* Nav Links */}
            <div className="p-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-charcoal font-medium hover:bg-sand-cream transition-colors group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">{item.emoji}</span>
                    <span className="group-hover:text-sunset-gold transition-colors">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Footer CTA */}
            <div className="p-4 pt-0">
              <Link
                href="/stays"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-charcoal to-charcoal hover:from-sunset-gold hover:to-sunset-orange text-white font-semibold rounded-2xl transition-all duration-300"
              >
                <span>Book Your Adventure</span>
                <span className="text-lg">🎒</span>
              </Link>
            </div>
            
            {/* Quick info */}
            <div className="px-6 py-4 bg-sand-cream border-t border-border">
              <div className="flex items-center justify-between text-xs text-charcoal-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  47 travelers online
                </span>
                <span>4 destinations</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)
  
  // Track scroll position and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: '/#life', label: 'Life', emoji: '🌅' },
    { href: '/experiences', label: 'Experiences', emoji: '🎪' },
    { href: '/#work', label: 'Work', emoji: '💻' },
    { href: '/destinations', label: 'Destinations', emoji: '🗺️' },
    { href: '/gallery', label: 'Gallery', emoji: '📸' },
    { href: '/stays', label: 'Stays', emoji: '🛏️' },
  ]

  return (
    <>
      {/* Header wrapper with scroll-aware transform */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6"
        initial={{ y: -100 }}
        animate={{ 
          y: scrollDirection === 'down' && isScrolled ? -100 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Top bar spacer for visual balance */}
        <div className={`transition-all duration-300 ${isScrolled ? 'h-2' : 'h-4 lg:h-6'}`} />
        
        {/* Main nav container */}
        <div className="max-w-[1400px] mx-auto">
          <motion.nav
            className={`relative flex items-center justify-between px-4 lg:px-6 rounded-2xl transition-all duration-500 ${
              isScrolled 
                ? 'h-14 bg-white/98 backdrop-blur-xl shadow-elevated border border-white/50' 
                : 'h-16 bg-white/95 backdrop-blur-md shadow-soft border border-border/50'
            }`}
            aria-label="Main navigation"
            layout
          >
            {/* Left: Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Center: Navigation (Desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.03 }}
                >
                  <MagneticNavLink
                    href={item.href}
                    label={item.label}
                    emoji={item.emoji}
                  />
                </motion.div>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              {/* Live indicator - desktop only, hidden on scroll */}
              <AnimatePresence>
                {!isScrolled && <LiveIndicator />}
              </AnimatePresence>
              
              {/* Book button - desktop */}
              <motion.div 
                className="hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <BookButton isCompact={isScrolled} />
              </motion.div>

              {/* Mobile menu button */}
              <MenuIcon
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </motion.nav>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={navItems}
          />
        </div>
      </motion.header>

      {/* Dynamic spacer based on scroll state */}
      <div className="h-20 lg:h-24" />
    </>
  )
}
