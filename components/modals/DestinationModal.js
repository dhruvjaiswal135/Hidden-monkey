'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Destination Modal
 * 
 * Full-screen modal with detailed destination information
 * Showcases hostels, experiences, and practical info
 * 
 * Design Philosophy:
 * "Transport travelers there before they book"
 */

export default function DestinationModal({ destination, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedBuilding, setSelectedBuilding] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Auto-rotate images
  useEffect(() => {
    if (!isOpen || !destination?.coverImages?.length) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % destination.coverImages.length
      )
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isOpen, destination])

  if (!isOpen || !destination) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 md:inset-4 lg:inset-8 z-50 bg-white md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {/* Hero Section with Image Gallery */}
              <div className="relative h-[350px] md:h-[450px] bg-sand-cream">
                {/* Rotating Background Images */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={destination.coverImages?.[currentImageIndex] || destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Image Indicators */}
                {destination.coverImages && destination.coverImages.length > 1 && (
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {destination.coverImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  {destination.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-white/80 text-sm mb-2">{destination.tagline}</p>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">
                      {destination.name}
                    </h1>
                    <p className="text-white/90 text-lg max-w-2xl">
                      {destination.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 md:px-10 lg:px-16 py-10">
                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {destination.highlights?.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-sand-cream rounded-2xl"
                    >
                      <span className="text-2xl">{highlight.icon}</span>
                      <span className="text-sm text-charcoal">{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* Weather & Travel Tip */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {destination.weather && (
                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">🌤️</span>
                        <h3 className="font-semibold text-charcoal">Weather</h3>
                      </div>
                      <p className="text-charcoal-muted text-sm">
                        Temperature: {destination.weather.temp}
                      </p>
                      <p className="text-charcoal-muted text-sm">
                        Best time to visit: <span className="text-charcoal font-medium">{destination.weather.best}</span>
                      </p>
                    </div>
                  )}
                  
                  {destination.travelTip && (
                    <div className="p-5 bg-sunset-gold/5 rounded-2xl border border-sunset-gold/10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">💡</span>
                        <h3 className="font-semibold text-charcoal">Pro tip</h3>
                      </div>
                      <p className="text-charcoal-muted text-sm">
                        {destination.travelTip}
                      </p>
                    </div>
                  )}
                </div>

                {/* Our Places */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-charcoal mb-6">
                    Our places in {destination.name}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {destination.buildings?.map((building) => (
                      <motion.div
                        key={building.id}
                        whileHover={{ y: -4 }}
                        className="group bg-white rounded-2xl border border-border hover:border-sunset-gold/30 overflow-hidden shadow-soft hover:shadow-elevated transition-all cursor-pointer"
                        onClick={() => setSelectedBuilding(building)}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={building.image}
                            alt={building.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          
                          {/* Price Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-charcoal text-sm font-semibold rounded-full shadow">
                              From ₹{building.priceFrom}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-sunset-gold transition-colors">
                            {building.name}
                          </h3>
                          <p className="text-charcoal-muted text-sm mb-4">
                            {building.vibe}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              <span className="text-sm font-medium text-charcoal">{building.rating}</span>
                              <span className="text-sm text-charcoal-muted">({building.reviews} reviews)</span>
                            </div>
                            
                            <span className="text-sunset-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                              View
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Experiences */}
                {destination.experiences && destination.experiences.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-charcoal mb-6">
                      Experiences you can join
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {destination.experiences.map((exp, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-jungle-light/10 text-jungle-dark text-sm font-medium rounded-full border border-jungle-light/20"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="sticky bottom-0 bg-white border-t border-border px-6 md:px-10 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-charcoal-muted">Starting from</p>
                <p className="text-2xl font-bold text-charcoal">
                  ₹{Math.min(...(destination.buildings?.map(b => b.priceFrom) || [599]))}
                  <span className="text-sm font-normal text-charcoal-muted"> / night</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={onClose}
                  className="px-6 py-3 bg-sand-cream hover:bg-sand-light text-charcoal font-medium rounded-full transition-colors border border-border"
                >
                  Keep exploring
                </button>
                <Link
                  href={`/book?destination=${destination.id}`}
                  className="px-8 py-3 bg-gradient-to-r from-sunset-gold to-sunset-orange hover:from-sunset-orange hover:to-sunset-gold text-white font-semibold rounded-full transition-all shadow-button hover:shadow-button-hover hover:-translate-y-0.5"
                >
                  Book in {destination.name}
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
