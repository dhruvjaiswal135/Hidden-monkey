/**
 * ROOM IMAGES - Centralized Image Configuration
 * 
 * All room-related images organized by room type.
 * Referenced by room ID for consistency.
 */

export const ROOM_IMAGES = {
  'mixed-dorm': {
    hero: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585399171635-76e0f6c7ad4a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
    ]
  },
  'female-dorm': {
    hero: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1612277795784-0d822ed70d8f?w=800&auto=format&fit=crop&q=80',
    ]
  },
  'private-room': {
    hero: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1679922603955-8d9b650ef796?w=800&auto=format&fit=crop&q=80',
    ]
  }
}

/**
 * Get room images by room ID
 */
export function getRoomImages(roomId) {
  return ROOM_IMAGES[roomId] || null
}

/**
 * Get hero image for a room
 */
export function getRoomHeroImage(roomId) {
  const images = ROOM_IMAGES[roomId]
  return images ? images.hero : null
}

/**
 * Get gallery images for a room
 */
export function getRoomGalleryImages(roomId) {
  const images = ROOM_IMAGES[roomId]
  return images ? images.gallery : []
}
