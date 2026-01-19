'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import RoomCard from './RoomCard'
import { getAllRooms } from '@/content/rooms'

/**
 * Stay Options Section
 * Introduces different accommodation types focused on vibe and community
 * NOT transactional - about how it feels to stay
 * 
 * Features:
 * - Interactive amenities icon system with tooltips
 * - Room-specific detail modals with image galleries
 * - Fully scalable data structure for easy room additions
 * 
 * Data is now centralized in content/rooms/rooms.js
 */

export default function StayOptions() {
  // Get room data from centralized content
  const stayOptions = getAllRooms()

  return (
    <>
      <section className="relative py-8 md:py-12 bg-white" aria-label="Stay Options">
        <Container className="max-w-[1400px]">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-[#1E1F1C] text-[28px] md:text-[36px] font-semibold mb-2">
                How you can stay
              </h2>
              <p className="text-[#5E625A] text-[14px] md:text-[15px]">
                Different spaces, same shared vibe.
              </p>
            </div>
            
            <Link 
              href="/stays"
              className="inline-flex items-center gap-2 text-charcoal-muted hover:text-sunset-gold transition-colors group"
            >
              <span className="text-sm font-medium group-hover:underline">View all rooms</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stay Options Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stayOptions.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Reassurance Message */}
          <div className="mt-12 pt-8 border-t border-[#E6E4DF] text-center">
            <p className="text-[#5E625A] text-[13px] md:text-[14px]">
              Whichever you choose, you're part of the same community. <br className="hidden md:inline" />
              We've got you covered.
            </p>
          </div>

        </Container>
      </section>
    </>
  )
}
