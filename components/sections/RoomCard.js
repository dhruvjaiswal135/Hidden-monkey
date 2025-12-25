'use client'

import { useState } from 'react'
import Image from 'next/image'
import { formatCurrency } from '@/lib/utils'
import ImageGalleryModal from './ImageGalleryModal'

/**
 * RoomCard Component
 * Simplified horizontal room card
 */

export default function RoomCard({ room, roomContent, allRoomTypes, currentIndex }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeRoomIndex, setActiveRoomIndex] = useState(currentIndex)

  const handleImageClick = () => {
    setIsGalleryOpen(true)
  }

  const handleRoomChange = (index) => {
    setActiveRoomIndex(index)
  }

  return (
    <>
      <article 
        id={room.slug}
        className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
      >
        <div className="flex flex-col sm:flex-row">
          {/* Left - Image */}
          <button 
            onClick={handleImageClick}
            className="relative h-[220px] sm:h-auto sm:w-[280px] flex-shrink-0 cursor-pointer group"
          >
            <Image
              src={room.image}
              alt={roomContent.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="280px"
              quality={85}
              unoptimized
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        
        {/* Right - Content */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h2 className="text-[#1A1A1A] text-[19px] font-medium leading-tight">
              {roomContent.title}
            </h2>
            <div className="flex items-center gap-1.5 text-[#6B7280] text-[14px] flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{room.occupancy}</span>
            </div>
          </div>
          
          <p className="text-[#6B7280] text-[14px] leading-relaxed mb-4 line-clamp-2">
            {roomContent.description}
          </p>
          
          {/* Amenity Icons */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-gray-400 text-[13px]">P</span>
          </div>
          
          {/* Date Picker & Price */}
          <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-200">
            <button className="flex items-center gap-2 text-[#1A1A1A] text-[14px] hover:text-[#2D7A5F] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[#1A1A1A] text-[20px] font-semibold">
                  {formatCurrency(room.price)}
                </div>
                <div className="text-[#6B7280] text-[12px]">/ night</div>
              </div>
              <a
                href="/contact"
                className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-lg text-[14px] font-medium hover:bg-[#2D7A5F] transition-colors whitespace-nowrap"
              >
                Select Bed
              </a>
            </div>
          </div>
        </div>
      </div>
      </article>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={allRoomTypes[activeRoomIndex]?.gallery || roomContent.gallery}
        roomTypes={allRoomTypes}
        activeRoomIndex={activeRoomIndex}
        onRoomChange={handleRoomChange}
      />
    </>
  )
}
