'use client'

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
          <div className="mb-10">
            <h2 className="text-[#1E1F1C] text-[28px] md:text-[36px] font-semibold mb-2">
              How you can stay
            </h2>
            <p className="text-[#5E625A] text-[14px] md:text-[15px]">
              Different spaces, same shared vibe.
            </p>
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
