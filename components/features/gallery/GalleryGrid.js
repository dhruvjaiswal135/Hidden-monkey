'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import { getGalleryImages } from '@/content/images'

/**
 * Masonry gallery grid for full-page gallery view
 * Displays all images in a breathing, organic layout
 */

export default function GalleryGrid({ onImageClick }) {
  const [isClient, setIsClient] = useState(false)
  const images = getGalleryImages()

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Create masonry layout with varied aspect ratios
  // Tall: 3, Square: 1, Wide: 1.5
  const getAspectClass = (aspect) => {
    switch (aspect) {
      case 'tall':
        return 'col-span-1 row-span-2'
      case 'wide':
        return 'col-span-2 row-span-1'
      case 'square':
      default:
        return 'col-span-1 row-span-1'
    }
  }

  const getMobileAspectClass = (aspect) => {
    switch (aspect) {
      case 'tall':
        return 'aspect-[3/4]'
      case 'wide':
        return 'aspect-[16/9]'
      case 'square':
      default:
        return 'aspect-square'
    }
  }

  return (
    <section className="relative py-8 md:py-12 bg-white">
      <Container className="max-w-[1400px]">
        {/* Desktop Masonry Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 auto-rows-[280px]">
          {images.map((image, idx) => (
            <div
              key={image.id}
              className={`${getAspectClass(
                image.aspect
              )} relative rounded-[12px] overflow-hidden cursor-pointer group bg-gray-100 transition-all duration-300 hover:shadow-md`}
              onClick={() => onImageClick(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onImageClick(idx)
                }
              }}
              aria-label={`Open ${image.alt}`}
            >
              {isClient && (
                <>
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    sizes="(max-width: 1400px) 33vw, 350px"
                    quality={75}
                    unoptimized
                  />
                  {/* Soft overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-all duration-300" />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Flexible grid (2 columns on most devices, 1 on very small) */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-2 gap-3">
          {images.map((image, idx) => (
            <div
              key={image.id}
              className={`${getMobileAspectClass(
                image.aspect
              )} relative rounded-[10px] overflow-hidden cursor-pointer group bg-gray-100`}
              onClick={() => onImageClick(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onImageClick(idx)
                }
              }}
              aria-label={`Open ${image.alt}`}
            >
              {isClient && (
                <>
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 45vw"
                    quality={70}
                    unoptimized
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
