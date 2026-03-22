'use client'

import { useState } from 'react'
import Image from 'next/image'
import RoomDetailModal from '@/components/modals/RoomDetailModal'

const AMENITY_LABELS = {
  locker: 'Locker',
  curtain: 'Privacy curtain',
  light: 'Reading light',
  charging: 'Charging',
  bathroom: 'Bathroom',
  wifi: 'WiFi',
  kitchen: 'Kitchen',
  female: 'Women only',
  ac: 'A/C',
  towel: 'Towels',
}

const PRICE_MAP = {
  'mixed-dorm': 499,
  'female-dorm': 549,
  'private-room': 1499,
}

export default function RoomCard({ room, index = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  if (!room) return null

  const price = PRICE_MAP[room.id] || 599
  const displayAmenities = (room.amenities || []).slice(0, 3)
  const extra = (room.amenities || []).length - 3

  return (
    <>
      <article
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* ── IMAGE ── */}
        <div className="relative rounded-[20px] overflow-hidden aspect-[3/2] mb-5">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />

          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Photo count pill — top right */}
          {(room.images || []).length > 1 && (
            <div className="absolute top-3.5 right-3.5 flex items-center gap-1 bg-black/40 border border-white/15 backdrop-blur-sm rounded-full px-2.5 py-1">
              <svg className="w-3 h-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-white text-[10px] font-medium">{room.images.length} photos</span>
            </div>
          )}

          {/* Bottom row: price left, availability right */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex items-end justify-between">
            <div>
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-widest mb-0.5">From</p>
              <p className="text-white font-bold text-xl leading-none">
                &#8377;{price}<span className="text-white/50 text-xs font-normal ml-0.5">/night</span>
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-black/30 border border-white/15 rounded-full px-2.5 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-white text-[10px] font-medium">Available</span>
            </div>
          </div>
        </div>

        {/* ── INFO ── */}
        <div>
          {/* Name + stars */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-charcoal font-bold text-[17px] leading-tight group-hover:text-sunset-gold transition-colors duration-200">
              {room.name}
            </h3>
            <div className="flex items-center gap-0.5 shrink-0 pt-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3 h-3 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="text-[11px] text-charcoal-muted font-medium ml-1">4.9</span>
            </div>
          </div>

          <p className="text-charcoal-muted text-[13.5px] leading-relaxed mb-3.5 line-clamp-2">
            {room.vibe}
          </p>

          {/* Amenity chips */}
          <div className="flex items-center flex-wrap gap-1.5">
            {displayAmenities.map((key, i) => (
              <span key={i} className="text-[11px] text-charcoal-muted bg-white border border-neutral-200 px-2.5 py-0.5 rounded-full">
                {AMENITY_LABELS[key] || key}
              </span>
            ))}
            {extra > 0 && (
              <span className="text-[11px] text-charcoal-muted/60">+{extra} more</span>
            )}
          </div>
        </div>
      </article>

      <RoomDetailModal
        room={room}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
