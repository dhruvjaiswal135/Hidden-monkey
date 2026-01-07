'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * ImageGallery Component
 * Carousel/grid gallery with swipe support for mobile
 * Displays room-specific images
 */

export default function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextImage()
    } else if (isRightSwipe) {
      prevImage()
    }
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 rounded-xl h-[400px] flex items-center justify-center text-gray-500">
        No images available
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div
        className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden bg-gray-200 group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex]}
          alt={`Room image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 640px) 100vw, 600px"
          quality={85}
          priority
          unoptimized
        />

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white px-3 py-1.5 rounded-lg text-[12px] font-medium">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1A1A1A] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 focus:outline-none focus:ring-2 focus:ring-[#2D7A5F]"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1A1A1A] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 focus:outline-none focus:ring-2 focus:ring-[#2D7A5F]"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? 'border-[#2D7A5F] ring-2 ring-[#2D7A5F] ring-offset-2'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
                quality={60}
                unoptimized
              />
            </button>
          ))}
        </div>
      )}

      {/* Mobile Swipe Hint */}
      {images.length > 1 && (
        <div className="sm:hidden text-center text-[12px] text-gray-400 mt-4">
          Swipe to explore images
        </div>
      )}
    </div>
  )
}
