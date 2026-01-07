'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * ImageGrid Component
 * Responsive image grid with click-to-expand functionality
 * 
 * Props:
 * - images: Array of { url, alt, aspect? }
 * - onImageClick: (index) => void
 * - columns: 2 | 3 | 4 (default: 3)
 */

export default function ImageGrid({ images, onImageClick, columns = 3 }) {
  const [isClient, setIsClient] = useState(false)

  // Hydration fix
  useState(() => {
    setIsClient(true)
  }, [])

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-12 text-[#5E625A]">
        No images available
      </div>
    )
  }

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-3 md:gap-4`}>
      {images.map((image, index) => (
        <div
          key={image.id || index}
          className="relative aspect-square rounded-[16px] overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => onImageClick?.(index)}
        >
          <Image
            src={image.url}
            alt={image.alt || `Gallery image ${index + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 33vw"
            quality={80}
            unoptimized
          />
          <div className="absolute inset-0 group-hover:bg-black/5 transition-all duration-300" />
        </div>
      ))}
    </div>
  )
}
