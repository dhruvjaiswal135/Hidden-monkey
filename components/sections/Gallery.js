'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import { getGalleryImages, GALLERY_ROTATIONS } from '@/content/images'

/**
 * Inside the Monkey House - Compact Gallery Teaser
 * Quick snapshots of hostel vibes - encourages "View all" click
 * 
 * Data is now centralized in content/images/gallery.js
 */

export default function Gallery() {
  const [isClient, setIsClient] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Get gallery images from centralized data
  const galleryImages = getGalleryImages()
  const rotations = GALLERY_ROTATIONS

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % galleryImages.length
    setLightboxIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
    setLightboxIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, lightboxIndex])

  return (
    <section className="relative py-6 md:py-10 bg-white overflow-hidden" aria-label="Gallery">
      <Container className="max-w-[1400px]">
        {/* Compact Header */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[#1E1F1C] text-[24px] md:text-[32px] font-bold">
            Inside the Monkey House
          </h2>
          <p className="text-[#5E625A] text-[13px] md:text-[14px] font-light">
            Snapshots of life on the road
          </p>
        </div>

        {/* Gallery Grid - Compact Collage */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-12 gap-3 h-[280px]">
            {/* Large anchor image (tall, left) */}
            <div
              className="col-span-5 row-span-2 relative rounded-[16px] overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
              // style={{ transform: `rotate(${rotations[0]}deg)` }}
              onClick={() => openLightbox(0)}
            >
              {isClient && (
                <>
                  <Image
                    src={galleryImages[0].url}
                    alt="Gallery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="300px"
                    quality={80}
                    unoptimized
                  />
                  <div className="absolute inset-0 group-hover:bg-black/5 transition-all duration-300" />
                </>
              )}
            </div>

            {/* Top right cluster */}
            <div
              className="col-span-3 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
              //style={{ transform: `rotate(${rotations[1]}deg)` }}
              onClick={() => openLightbox(1)}
            >
              {isClient && (
                <>
                  <Image
                    src={galleryImages[1].url}
                    alt="Gallery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="200px"
                    quality={80}
                    unoptimized
                  />
                  <div className="absolute inset-0 group-hover:bg-black/5 transition-all duration-300" />
                </>
              )}
            </div>

            {/* Middle right */}
            <div
              className="col-span-4 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
              // style={{ transform: `rotate(${rotations[2]}deg)` }}
              onClick={() => openLightbox(2)}
            >
              {isClient && (
                <>
                  <Image
                    src={galleryImages[2].url}
                    alt="Gallery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="220px"
                    quality={80}
                    unoptimized
                  />
                  <div className="absolute inset-0 group-hover:bg-black/5 transition-all duration-300" />
                </>
              )}
            </div>

            {/* Bottom right cluster */}
            <div
              className="col-span-3 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
              // style={{ transform: `rotate(${rotations[3]}deg)` }}
              onClick={() => openLightbox(3)}
            >
              {isClient && (
                <>
                  <Image
                    src={galleryImages[3].url}
                    alt="Gallery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="200px"
                    quality={80}
                    unoptimized
                  />
                  <div className="absolute inset-0 group-hover:bg-black/5 transition-all duration-300" />
                </>
              )}
            </div>

            {/* Bottom middle */}
            <div
              className="col-span-4 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
              //style={{ transform: `rotate(${rotations[4]}deg)` }}
              onClick={() => openLightbox(4)}
            >
              {isClient && (
                <>
                  <Image
                    src={galleryImages[4].url}
                    alt="Gallery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="220px"
                    quality={80}
                    unoptimized
                  />
                  <div className="absolute inset-0 group-hover:bg-black/5 transition-all duration-300" />
                </>
              )}
            </div>

            {/* Last image */}
            <div
              className="col-span-2 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
              //style={{ transform: `rotate(${rotations[5]}deg)` }}
              onClick={() => openLightbox(5)}
            >
              {isClient && (
                <>
                  <Image
                    src={galleryImages[5].url}
                    alt="Gallery"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="140px"
                    quality={80}
                    unoptimized
                  />
                  <div className="absolute inset-0 group-hover:bg-black/5 transition-all duration-300" />
                </>
              )}
            </div>
          </div>

          {/* Mobile - Horizontal scroll */}
          <div className="md:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 relative w-28 h-28 rounded-[12px] overflow-hidden cursor-pointer shadow-sm active:shadow-md transition-shadow"
                onClick={() => openLightbox(idx)}
              >
                {isClient && (
                  <>
                    <Image
                      src={image.url}
                      alt="Gallery"
                      fill
                      className="object-cover"
                      sizes="112px"
                      quality={75}
                      unoptimized
                    />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* View All CTA Button - Desktop */}
          <div className="hidden md:block absolute bottom-6 right-4">
            <a
              href="/gallery"
              className="relative w-32 h-12 rounded-full border border-[#EEA727] hover:bg-[#E84D1B] text-white flex items-center justify-center font-semibold text-[12px] text-center transition-all duration-200 shadow-sm hover:shadow-xl hover:scale-110 group"
            >
              <div className="flex flex-col items-center text-[#EEA727] gap-0.5">
                <span className = "">View all  →</span>
                 </div>
            </a>
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-4 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#EEA727] hover:bg-[#E84D1B] text-white text-[12px] font-semibold rounded-full transition-all duration-200"
          >
            View all <span className="text-sm">→</span>
          </a>
        </div>
      </Container>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative w-full max-w-2xl max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isClient && (
              <Image
                src={selectedImage.url}
                alt="Gallery"
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                quality={90}
                unoptimized
              />
            )}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-full transition-all"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-full transition-all"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-[12px]">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
