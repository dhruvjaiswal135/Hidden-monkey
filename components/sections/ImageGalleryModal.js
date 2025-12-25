'use client'

import { useEffect } from 'react'
import Image from 'next/image'

/**
 * ImageGalleryModal Component
 * Full-screen image gallery modal
 */

export default function ImageGalleryModal({ isOpen, onClose, images, roomTypes, activeRoomIndex, onRoomChange }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <span className="text-[15px] font-medium text-[#1A1A1A]">
              {roomTypes[activeRoomIndex]?.title || 'Room Gallery'}
            </span>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 text-[#6B7280] hover:text-[#1A1A1A] hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close gallery"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Room Type Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 py-4 overflow-x-auto">
            <button className="px-4 py-2 text-[14px] text-[#6B7280] hover:text-[#1A1A1A] whitespace-nowrap border border-gray-300 rounded-full transition-colors">
              Property
            </button>
            {roomTypes.map((room, index) => (
              <button
                key={index}
                onClick={() => onRoomChange(index)}
                className={`px-4 py-2 text-[14px] whitespace-nowrap rounded-full transition-colors ${
                  index === activeRoomIndex
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#6B7280] hover:text-[#1A1A1A] border border-gray-300'
                }`}
              >
                {room.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100"
            >
              <Image
                src={img}
                alt={`Room image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={85}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
