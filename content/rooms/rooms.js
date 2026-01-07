/**
 * ROOM DATA - Single Source of Truth
 * 
 * All room configurations live here.
 * To add a new room type:
 * 1. Add a new object to the ROOMS array below
 * 2. Images are referenced from content/images/rooms.js
 * 3. That's it! The room will appear throughout the site.
 */

export const ROOMS = [
  {
    id: 'mixed-dorm',
    name: 'Mixed Dorm',
    vibe: 'Shared rooms, easy conversations, and people from everywhere.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80',
    highlights: [
      'Lockers available',
      'Privacy curtains'
    ],
    // Community signals for emotional connection
    communityTags: [
      'Mostly solo travellers',
      'Easy to start conversations',
      'Social & vibrant'
    ],
    // Inline amenities for quick visual reference
    amenities: [
      'locker',
      'curtain',
      'light',
      'charging',
      'bathroom',
      'wifi'
    ],
    // Quick notes for card display
    notes: [
      'Great for meeting people',
      'Social & friendly vibe'
    ],
    // Multiple room images for gallery
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585399171635-76e0f6c7ad4a?w=800&auto=format&fit=crop&q=80'
    ],
    // Detailed description for modal
    detailedDescription: [
      'Our Mixed Dorm is the heart of the Monkey House community. Share a space with travelers from around the world and make lasting friendships while keeping your own privacy.',
      'Each bed comes equipped with a personal locker, privacy curtain, and reading light. The shared bathrooms are cleaned throughout the day, and the common areas are perfect for socializing or working.',
      'Perfect for solo travelers, backpackers, and anyone who wants to meet other adventurers. The vibe here is relaxed, friendly, and welcoming.'
    ]
  },
  {
    id: 'female-dorm',
    name: 'Female Dorm',
    vibe: 'Comfortable, secure, and designed for women travellers.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=80',
    highlights: [
      'Women only space',
      'Safe and supportive'
    ],
    // Community signals for emotional connection
    communityTags: [
      'Women-focused community',
      'Safe & supportive space',
      'Friendly connections'
    ],
    amenities: [
      'locker',
      'curtain',
      'light',
      'charging',
      'bathroom',
      'female',
      'wifi'
    ],
    // Quick notes for card display
    notes: [
      'Safe & women-focused',
      'Supportive community'
    ],
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1612277795784-0d822ed70d8f?w=800&auto=format&fit=crop&q=80'
    ],
    detailedDescription: [
      'Our Female Dorm is a dedicated space designed with women travelers in mind. We focus on creating an environment where you feel safe, respected, and part of a supportive community.',
      'All rooms feature personal lockers, blackout privacy curtains, and individual reading lights. The shared facilities are maintained to the highest standards, and our female-friendly common areas provide excellent spaces for both socializing and quiet time.',
      'Whether you\'re a solo adventurer, on a girls\' trip, or just prefer a women-only space, you\'ll find genuine connections and peace of mind here.'
    ]
  },
  {
    id: 'private-room',
    name: 'Private Room',
    vibe: 'Your own space with all the community vibes of the Monkey House.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=80',
    highlights: [
      'Personal space',
      'Still connected'
    ],
    // Community signals for emotional connection
    communityTags: [
      'Peace with community',
      'Perfect for couples & groups',
      'Best of both worlds'
    ],
    amenities: [
      'locker',
      'light',
      'charging',
      'bathroom',
      'wifi',
      'kitchen'
    ],
    // Quick notes for card display
    notes: [
      'Your own space',
      'Still part of the community'
    ],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1679922603955-8d9b650ef796?w=800&auto=format&fit=crop&q=80'
    ],
    detailedDescription: [
      'Sometimes you need your own space. Our Private Rooms offer comfort and privacy without isolating you from the vibrant community downstairs. Wake up refreshed and join us for breakfast, drinks, or spontaneous adventures.',
      'Each room includes premium bedding, fast WiFi, a personal locker, and access to our shared kitchen. The space is thoughtfully designed to be both functional and cozy—your home away from home.',
      'Ideal for couples, small groups, or anyone wanting privacy with the option to be as social as you want. You get the best of both worlds: solitude and community.'
    ]
  }
]

// ─────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────

/**
 * Get all rooms
 */
export function getAllRooms() {
  return ROOMS
}

/**
 * Get a single room by ID
 */
export function getRoomById(id) {
  return ROOMS.find(room => room.id === id)
}

/**
 * Get rooms for homepage preview (limit)
 */
export function getRoomsPreview(limit = 3) {
  return ROOMS.slice(0, limit)
}
