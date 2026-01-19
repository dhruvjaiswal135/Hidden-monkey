'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RoomDetailModal from '@/components/modals/RoomDetailModal'

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

// Amenity icons for quick visual reference
const AMENITY_ICONS = {
  locker: '🔐',
  curtain: '🪟',
  light: '💡',
  charging: '🔌',
  bathroom: '🚿',
  wifi: '📶',
  kitchen: '🍳',
  female: '👩',
  ac: '❄️',
  towel: '🛁',
}

export default function RoomCard({ room }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!room) return null

  // Ensure data exists
  const communityTags = room.communityTags || []
  const amenities = room.amenities || []

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* ────────────────────────────────────────
            TOP SECTION: MOMENT IMAGE
            ──────────────────────────────────────── */}
        <div className="relative h-[280px] md:h-[320px] overflow-hidden bg-sand-cream">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            unoptimized
          />

          {/* Soft gradient overlay (subtle) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Room Label Pill - Top Left */}
          <div className="absolute top-5 left-5">
            <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-2 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              {room.name}
            </span>
          </div>

          {/* Price Badge - Top Right */}
          <div className="absolute top-5 right-5">
            <span className="inline-block bg-charcoal/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-full">
              From ₹599/night
            </span>
          </div>

          {/* Hover CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div 
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              className="bg-white text-charcoal text-sm font-medium px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
            >
              See how it feels
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* ────────────────────────────────────────
            MIDDLE SECTION: ROOM STORY
            ──────────────────────────────────────── */}
        <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
          {/* Room Name */}
          <h3 className="text-charcoal text-xl font-semibold leading-snug mb-2 group-hover:text-sunset-gold transition-colors">
            {room.name}
          </h3>

          {/* Vibe Sentence (emotional, human language) */}
          <p className="text-charcoal-muted text-sm leading-relaxed mb-4 flex-1">
            {room.vibe}
          </p>

          {/* ────────────────────────────────────────
              COMMUNITY SIGNALS (UNIQUE ELEMENT)
              ──────────────────────────────────────── */}
          {communityTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {communityTags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-jungle-light/10 text-jungle-dark text-xs font-medium px-3 py-1.5 rounded-full border border-jungle-light/20 group-hover:border-jungle-light/40 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Amenity Icons Row */}
          {amenities.length > 0 && (
            <div className="flex items-center gap-1 pt-4 border-t border-border">
              <div className="flex gap-2">
                {amenities.slice(0, 5).map((amenity, idx) => (
                  <span 
                    key={idx} 
                    className="text-base opacity-70 group-hover:opacity-100 transition-opacity"
                    title={amenity}
                  >
                    {AMENITY_ICONS[amenity] || '✓'}
                  </span>
                ))}
              </div>
              {amenities.length > 5 && (
                <span className="text-xs text-charcoal-muted ml-1">
                  +{amenities.length - 5} more
                </span>
              )}
            </div>
          )}
        </div>
      </motion.article>

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={room}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
