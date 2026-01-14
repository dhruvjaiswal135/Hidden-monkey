'use client'

import { useEffect } from 'react'
import Image from 'next/image'

/**
 * Full-screen gallery modal / lightbox
 * Displays image with navigation and close functionality
 */

export default function GalleryModal({
  image,
  currentIndex,
  totalImages,
  onClose,
  onNext,
  onPrev,
}) {
  // Keyboard navigation
  useEffect(() => {
    if (!image) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [image, onNext, onPrev, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [image])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery modal"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-60 text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
        aria-label="Close gallery"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-contain max-h-[85vh]"
          quality={90}
          unoptimized
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-2 md:p-3 rounded-full transition-all duration-200 group"
        aria-label="Previous image"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-2 md:p-3 rounded-full transition-all duration-200 group"
        aria-label="Next image"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-[13px] md:text-[14px] font-light">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  )
}
