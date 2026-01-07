/**
 * Room Data Helper
 * 
 * Provides room data and utilities for the room feature.
 * This file bridges content data with UI components.
 */

import { getAllRooms, getRoomById, getRoomsPreview, ROOMS } from '@/content/rooms'

// Re-export all data functions
export { getAllRooms, getRoomById, getRoomsPreview, ROOMS }

/**
 * Get room with enriched data for display
 */
export function getRoomForDisplay(roomId) {
  const room = getRoomById(roomId)
  if (!room) return null
  
  return {
    ...room,
    // Add any computed/derived properties here
    hasGallery: room.images && room.images.length > 0,
    amenityCount: room.amenities?.length || 0,
  }
}

/**
 * Get all rooms formatted for cards
 */
export function getRoomsForCards() {
  return getAllRooms().map(room => ({
    ...room,
    hasGallery: room.images && room.images.length > 0,
  }))
}
