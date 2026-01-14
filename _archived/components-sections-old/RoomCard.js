'use client'

import { useState } from 'react'
import Image from 'next/image'
import RoomDetailModal from './RoomDetailModal'

/**
 * RoomCard Component (Community-First Redesign)
 * Experience-driven card that invites people to shared life
 * 
 * Philosophy:
 * "An invitation to a shared life, not a product listing"
 * 
 * Structure:
 * - Moment-based image (people first, beds secondary)
 * - Room name + vibe sentence (emotional language)
 * - Community signals (who stays here, how it feels)
 * - Minimal essential amenity icons
 * - Human-centered CTA ("See how it feels")
 * 
 * Feels like a place, not a transaction
 */

export default function RoomCard({ room }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!room) return null

  // Ensure data exists
  const communityTags = room.communityTags || []
  const amenities = room.amenities || []

  return (
    <>
      <article
        className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* ────────────────────────────────────────
            TOP SECTION: MOMENT IMAGE
            ──────────────────────────────────────── */}
        <div className="relative h-[320px] overflow-hidden bg-gray-200">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            unoptimized
          />

          {/* Soft gradient overlay (subtle) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Room Label Pill - Top Left (inviting, not corporate) */}
          <div className="absolute top-5 left-5">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-[11px] font-semibold px-3 py-2 rounded-full shadow-sm">
              {room.name}
            </span>
          </div>

          {/* Subtle affordance hint (fades in on hover) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/95 backdrop-blur-sm text-[#1A1A1A] text-[13px] font-medium px-4 py-2 rounded-full">
              See how it feels →
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────
            MIDDLE SECTION: ROOM STORY
            ──────────────────────────────────────── */}
        <div className="px-6 pt-5 pb-4">
          {/* Room Name */}
          <h3 className="text-[#1A1A1A] text-[20px] font-semibold leading-snug mb-2">
            {room.name}
          </h3>

          {/* Vibe Sentence (emotional, human language) */}
          <p className="text-[#5E625A] text-[15px] leading-relaxed mb-4 font-normal">
            {room.vibe}
          </p>

          {/* Soft divider */}
          <div className="h-0.5 w-12 bg-gradient-to-r from-[#2D7A5F] to-transparent mb-4" />

          {/* ────────────────────────────────────────
              COMMUNITY SIGNALS (UNIQUE ELEMENT)
              ──────────────────────────────────────── */}
          {communityTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {communityTags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gradient-to-r from-[#2D7A5F]/10 to-[#2D7A5F]/5 text-[#2D7A5F] text-[12px] font-medium px-3 py-1.5 rounded-full border border-[#2D7A5F]/20 group-hover:border-[#2D7A5F]/40 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ────────────────────────────────────────
            BOTTOM SECTION: AMENITIES & ACTION
            ──────────────────────────────────────── */}
       
      </article>

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={room}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
