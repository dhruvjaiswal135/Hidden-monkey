'use client'

import { motion } from 'framer-motion'

/**
 * FloatingStickers
 * Decorative floating travel-themed elements
 * Adds playful, travel-journal aesthetic to sections
 */

// Individual sticker component
function Sticker({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 6,
  x = 0,
  y = 0,
  rotation = 0 
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ x, y, rotate: rotation }}
      animate={{ 
        y: [y - 5, y + 8, y - 5],
        rotate: [rotation - 2, rotation + 2, rotation - 2]
      }}
      transition={{ 
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Passport stamp sticker
export function PassportStamp({ className = '', delay = 0 }) {
  return (
    <Sticker className={className} delay={delay} duration={7} rotation={-12}>
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-sunset-gold/40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-[8px] md:text-[10px] font-bold text-sunset-gold/60 tracking-wider">
            INDIA
          </div>
          <div className="text-[6px] md:text-[8px] text-sunset-gold/40">
            VERIFIED
          </div>
        </div>
      </div>
    </Sticker>
  )
}

// Map pin sticker
export function MapPin({ className = '', delay = 0 }) {
  return (
    <Sticker className={className} delay={delay} duration={5} rotation={8}>
      <svg className="w-8 h-10 md:w-10 md:h-12 text-sunset-gold/50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </Sticker>
  )
}

// Airplane sticker
export function Airplane({ className = '', delay = 0 }) {
  return (
    <Sticker className={className} delay={delay} duration={8} rotation={-25}>
      <svg className="w-10 h-10 md:w-12 md:h-12 text-sunset-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
    </Sticker>
  )
}

// Compass sticker
export function Compass({ className = '', delay = 0 }) {
  return (
    <Sticker className={className} delay={delay} duration={9} rotation={15}>
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-jungle-light/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
        <svg className="w-6 h-6 md:w-7 md:h-7 text-sunset-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={1}/>
          <polygon points="12,2 15,12 12,22 9,12" fill="currentColor" opacity="0.3"/>
          <text x="12" y="6" textAnchor="middle" fontSize="4" fill="currentColor">N</text>
        </svg>
      </div>
    </Sticker>
  )
}

// Backpack sticker
export function Backpack({ className = '', delay = 0 }) {
  return (
    <Sticker className={className} delay={delay} duration={6} rotation={-8}>
      <svg className="w-10 h-10 md:w-12 md:h-12 text-sunset-gold/45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="6" y="6" width="12" height="14" rx="2" strokeWidth={1.5}/>
        <path d="M9 6V4a3 3 0 0 1 6 0v2" strokeWidth={1.5}/>
        <line x1="6" y1="11" x2="18" y2="11" strokeWidth={1}/>
        <rect x="9" y="13" width="6" height="4" rx="1" strokeWidth={1}/>
      </svg>
    </Sticker>
  )
}

// Monkey face sticker (brand mascot)
export function MonkeyFace({ className = '', delay = 0 }) {
  return (
    <Sticker className={className} delay={delay} duration={5} rotation={10}>
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-sunset-gold/10 border border-sunset-gold/20 flex items-center justify-center">
        <span className="text-2xl md:text-3xl">🐒</span>
      </div>
    </Sticker>
  )
}

// Star/sparkle sticker
export function Sparkle({ className = '', delay = 0, size = 'md' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }
  
  return (
    <Sticker className={className} delay={delay} duration={4} rotation={0}>
      <motion.svg 
        className={`${sizes[size]} text-sunset-gold/50`} 
        fill="currentColor" 
        viewBox="0 0 24 24"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10"/>
      </motion.svg>
    </Sticker>
  )
}

// Verified badge sticker
export function VerifiedBadge({ className = '', delay = 0 }) {
  return (
    <Sticker className={className} delay={delay} duration={7} rotation={-5}>
      <div className="px-3 py-1.5 bg-jungle-light/80 rounded-full border border-sunset-gold/30 shadow-sm">
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-sunset-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <span className="text-[10px] font-medium text-white/90 tracking-wide">VERIFIED BACKPACKER</span>
        </div>
      </div>
    </Sticker>
  )
}

// Tape strip decoration
export function TapeStrip({ className = '', delay = 0, rotation = -3 }) {
  return (
    <Sticker className={className} delay={delay} duration={10} rotation={rotation}>
      <div 
        className="w-24 h-6 md:w-32 md:h-8 bg-sunset-gold/20 backdrop-blur-sm"
        style={{ 
          clipPath: 'polygon(0 10%, 5% 0, 95% 0, 100% 10%, 100% 90%, 95% 100%, 5% 100%, 0 90%)',
        }}
      >
        <div className="w-full h-full opacity-30" style={{
          background: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px)'
        }}/>
      </div>
    </Sticker>
  )
}

// Polaroid corner decoration
export function PolaroidCorner({ className = '', delay = 0 }) {
  return (
    <Sticker className={className} delay={delay} duration={8} rotation={15}>
      <div className="w-16 h-20 md:w-20 md:h-24 bg-white shadow-polaroid rounded-sm p-1">
        <div className="w-full h-3/4 bg-gradient-to-br from-jungle-light/20 to-sunset-gold/20 rounded-sm"/>
        <div className="h-1/4 flex items-center justify-center">
          <div className="w-8 h-1 bg-charcoal/10 rounded"/>
        </div>
      </div>
    </Sticker>
  )
}

// Collection for Hero section
export function HeroStickers() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top area stickers */}
      <PassportStamp className="top-[15%] left-[5%] hidden lg:block" delay={0.5} />
      <MapPin className="top-[20%] right-[8%] hidden lg:block" delay={1} />
      <Sparkle className="top-[10%] right-[25%] hidden md:block" delay={0.3} size="lg" />
      
      {/* Middle area stickers */}
      <Airplane className="top-[40%] left-[3%] hidden lg:block" delay={1.5} />
      <Compass className="top-[50%] right-[5%] hidden lg:block" delay={2} />
      
      {/* Bottom area stickers */}
      <MonkeyFace className="bottom-[25%] left-[8%] hidden lg:block" delay={0.8} />
      <Backpack className="bottom-[15%] right-[12%] hidden lg:block" delay={1.2} />
      <Sparkle className="bottom-[30%] right-[20%] hidden md:block" delay={0.6} size="sm" />
      <Sparkle className="bottom-[45%] left-[15%] hidden md:block" delay={1.8} size="md" />
    </div>
  )
}

// Collection for general sections
export function SectionStickers({ variant = 'default' }) {
  const variants = {
    default: (
      <>
        <Sparkle className="top-8 right-12 hidden md:block" delay={0.2} size="sm" />
        <Sparkle className="bottom-12 left-8 hidden md:block" delay={0.8} size="md" />
      </>
    ),
    community: (
      <>
        <PassportStamp className="top-16 right-8 hidden lg:block" delay={0.3} />
        <MapPin className="bottom-20 left-12 hidden lg:block" delay={0.7} />
        <Sparkle className="top-32 left-16 hidden md:block" delay={0.5} size="lg" />
      </>
    ),
    travel: (
      <>
        <Airplane className="top-12 left-8 hidden lg:block" delay={0.4} />
        <Compass className="bottom-16 right-12 hidden lg:block" delay={0.9} />
        <Backpack className="top-24 right-16 hidden lg:block" delay={0.6} />
      </>
    )
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {variants[variant]}
    </div>
  )
}

export default {
  PassportStamp,
  MapPin,
  Airplane,
  Compass,
  Backpack,
  MonkeyFace,
  Sparkle,
  VerifiedBadge,
  TapeStrip,
  PolaroidCorner,
  HeroStickers,
  SectionStickers
}
