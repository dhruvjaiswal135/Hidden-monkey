/**
 * ═══════════════════════════════════════════════════════════════
 *  HIDDEN MONKEY — MASTER IMAGE CONFIGURATION
 * ═══════════════════════════════════════════════════════════════
 *
 *  This file is the SINGLE SOURCE OF TRUTH for every image
 *  used across the entire website.
 *
 *  🔧 HOW TO CHANGE AN IMAGE:
 *     1. Find the section below (e.g., "HERO SLIDESHOW")
 *     2. Replace the URL string with your new image URL
 *     3. Save the file — the website updates automatically
 *
 *  💡 TIPS:
 *     - Use high-quality images (min 800px wide)
 *     - Unsplash URLs work great: https://unsplash.com
 *     - For Unsplash, append ?w=800&auto=format&fit=crop&q=80
 *     - Keep alt text descriptive for accessibility & SEO
 *
 * ═══════════════════════════════════════════════════════════════
 */


// ─────────────────────────────────────────────────────────────
// 1. HERO SLIDESHOW
//    Displayed on: Homepage → top hero section (full-width carousel)
//    Recommended size: 1200×800px or larger
// ─────────────────────────────────────────────────────────────

export const HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=90',
    alt: 'View from a camping tent at golden hour',
  },
  {
    url: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&q=90',
    alt: 'Hiker with open arms on mountain overlook',
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90',
    alt: 'Mountain peaks in warm golden light',
  },
]


// ─────────────────────────────────────────────────────────────
// 2. LIFE AT MONKEY — Homepage scroll section
//    Displayed on: Homepage → "Life at Monkey" horizontal cards
//    Shows lifestyle/vibe photos of hostel life
//    Recommended size: 600×400px
// ─────────────────────────────────────────────────────────────

export const LIFE_AT_MONKEY = [
  {
    // Card 1 — Chill Vibes
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop&q=80',
    alt: 'Relaxed beach setting',
  },
  {
    // Card 2 — Jam Nights
    image: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=600&auto=format&fit=crop&q=80',
    alt: 'Acoustic guitar jam session',
  },
  {
    // Card 3 — Trek Squad
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80',
    alt: 'Group of friends trekking mountains',
  },
  {
    // Card 4 — Late Night Stories
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&auto=format&fit=crop&q=80',
    alt: 'Friends sharing stories around bonfire',
  },
  {
    // Card 5 — Common Room Chaos
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop&q=80',
    alt: 'Lively hostel common room',
  },
  {
    // Card 6 — Cook Together
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80',
    alt: 'Travelers cooking together in kitchen',
  },
]


// ─────────────────────────────────────────────────────────────
// 3. WHY HIDDEN MONKEY — Homepage feature section
//    Displayed on: Homepage → "Why Hidden Monkey" grid
//    Each image represents a reason to stay
//    Recommended size: 800×600px
// ─────────────────────────────────────────────────────────────

export const WHY_HIDDEN_MONKEY = {
  realPeople: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=800&auto=format&fit=crop&q=80',
  designedForYou: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
  localExperiences: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&auto=format&fit=crop&q=80',
  stunningLocations: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80',
  workFriendly: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=80',
  sustainableTravel: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80',
}


// ─────────────────────────────────────────────────────────────
// 4. MEET THE TRIBE — Homepage testimonials
//    Displayed on: Homepage → testimonial slider
//    These are avatar photos of travelers / reviewers
//    Recommended size: 100×100px (square, face crop)
// ─────────────────────────────────────────────────────────────

export const TRIBE_AVATARS = {
  // Sarah — first testimonial card
  sarah: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  // Marco — second testimonial card
  marco: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  // Aisha — third testimonial card
  aisha: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
}

// Avatars for the CTA section social proof
export const CTA_AVATARS = [
  TRIBE_AVATARS.sarah,
  TRIBE_AVATARS.marco,
  TRIBE_AVATARS.aisha,
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
]


// ─────────────────────────────────────────────────────────────
// 5. DESTINATIONS PAGE
//    Displayed on: /destinations page
//    Hero images for each destination + property photos
//    Recommended: Hero 1200px wide, Properties 600px wide
// ─────────────────────────────────────────────────────────────

export const DESTINATIONS = {

  darjeeling: {
    // Main hero image for Darjeeling card
    hero: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=85',
    // Gallery images shown in destination modal carousel
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&auto=format&fit=crop&q=85',
    ],
    // Property cards shown inside the destination modal
    properties: {
      monkeyHouse: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=85',
      treehouse: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&auto=format&fit=crop&q=85',
    },
  },

  varanasi: {
    // Main hero image for Varanasi card
    hero: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=85',
    // Gallery images shown in destination modal carousel
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1537457984863-1fc67de99f5e?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1549887534-f2c03c1b5eec?w=1200&auto=format&fit=crop&q=85',
    ],
    // Property cards shown inside the destination modal
    properties: {
      ghatView: 'https://images.unsplash.com/photo-1537457984863-1fc67de99f5e?w=600&auto=format&fit=crop&q=85',
      oldCity: 'https://images.unsplash.com/photo-1549887534-f2c03c1b5eec?w=600&auto=format&fit=crop&q=85',
    },
  },
}


// ─────────────────────────────────────────────────────────────
// 6. STAYS / ROOMS PAGE
//    Displayed on: /stays page → room cards & room detail modal
//    Each room type has a list of gallery images
//    Recommended size: 900×600px
// ─────────────────────────────────────────────────────────────

export const ROOM_IMAGES = {

  // Mixed Dorm · 6 Bed — the most popular room
  'mixed-dorm-6': [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1585399171635-76e0f6c7ad4a?w=900&auto=format&fit=crop&q=80',
  ],

  // Female Only Dorm · 6 Bed — women-only space
  'female-dorm-6': [
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1612277795784-0d822ed70d8f?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80',
  ],

  // Mixed Dorm · 4 Bed — intimate dorm option
  'mixed-dorm-4': [
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80',
  ],

  // Private Double Room — couples / small groups
  'private-double': [
    'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560185127-6a8a6dfd7b7b?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&auto=format&fit=crop&q=80',
  ],

  // Deluxe Private Suite — premium king bed room
  'deluxe-suite': [
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1679922603955-8d9b650ef796?w=900&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80',
  ],
}

// Community image shown at bottom of /stays page ("Join the Tribe" banner)
export const STAYS_COMMUNITY_IMAGE = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80'


// ─────────────────────────────────────────────────────────────
// 7. EXPERIENCES PAGE
//    Displayed on: /experiences page → experience cards
//    Each experience has one cover image
//    Recommended size: 800×600px
// ─────────────────────────────────────────────────────────────

export const EXPERIENCES = {
  mountainTreks: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80',
  raftingAdventure: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&auto=format&fit=crop&q=80',
  yogaRetreat: 'https://images.unsplash.com/photo-1545205597-3d9d02c929597?w=800&auto=format&fit=crop&q=80',
  meditation: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
  culturalNights: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop&q=80',
  liveMusic: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80',
  cookingClass: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80',
}


// ─────────────────────────────────────────────────────────────
// 8. GALLERY PAGE
//    Displayed on: /gallery page → photo grid
//    Recommended size: 500×500px minimum
// ─────────────────────────────────────────────────────────────

export const GALLERY = [
  { id: 1,  url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80', alt: 'Dorm room with pod beds',        category: 'rooms',  aspect: 'wide'   },
  { id: 2,  url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=900&auto=format&fit=crop&q=80', alt: 'Modern lounge area',             category: 'spaces', aspect: 'tall'   },
  { id: 3,  url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format&fit=crop&q=80', alt: 'Hostel exterior and pool',     category: 'nature', aspect: 'wide'   },
  { id: 4,  url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format&fit=crop&q=80', alt: 'Rooftop infinity pool',        category: 'nature', aspect: 'square' },
  { id: 5,  url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&auto=format&fit=crop&q=80', alt: 'Bedroom with ocean views',     category: 'rooms',  aspect: 'tall'   },
  { id: 6,  url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&auto=format&fit=crop&q=80', alt: 'Resort terrace at dusk',       category: 'nature', aspect: 'wide'   },
  { id: 7,  url: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=900&auto=format&fit=crop&q=80', alt: 'Community night event',        category: 'events', aspect: 'square' },
  { id: 8,  url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80', alt: 'Group gathering at hostel',    category: 'events', aspect: 'wide'   },
  { id: 9,  url: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=900&auto=format&fit=crop&q=80', alt: 'Private double room',          category: 'rooms',  aspect: 'square' },
  { id: 10, url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&auto=format&fit=crop&q=80', alt: 'Dining and social space',         category: 'spaces', aspect: 'tall'   },
  { id: 11, url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=80', alt: 'Clean bunk bed area',          category: 'rooms',  aspect: 'square' },
  { id: 12, url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&auto=format&fit=crop&q=80', alt: 'Tropical beach and palms',     category: 'nature', aspect: 'wide'   },
  { id: 13, url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&auto=format&fit=crop&q=80', alt: 'Live music night',             category: 'events', aspect: 'tall'   },
  { id: 14, url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&auto=format&fit=crop&q=80', alt: 'Deluxe private suite',         category: 'rooms',  aspect: 'wide'   },
  { id: 15, url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&auto=format&fit=crop&q=80', alt: 'Hostel common lounge area',    category: 'spaces', aspect: 'square' },
  { id: 16, url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&auto=format&fit=crop&q=80', alt: 'Mountain sunrise vista',       category: 'nature', aspect: 'tall'   },
  { id: 17, url: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&auto=format&fit=crop&q=80', alt: 'Bonfire gathering',               category: 'events', aspect: 'square' },
  { id: 18, url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80', alt: 'Premium room interior',       category: 'rooms',  aspect: 'wide'   },
]


// ─────────────────────────────────────────────────────────────
// 9. FALLBACK / DEFAULT IMAGES
//    Used when a component can't find its expected image
// ─────────────────────────────────────────────────────────────

export const FALLBACK = {
  room: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
  destination: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  experience: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
}

// ─────────────────────────────────────────────────────────────
// 10. GLOBAL LOGO
//    Displayed on: Header, Footer (if any)
// ─────────────────────────────────────────────────────────────

export const LOGO = '/images/logo.png'

// ─────────────────────────────────────────────────────────────
// 11. WORK FROM PARADISE
//    Displayed on: Homepage → Work From Paradise Section
// ─────────────────────────────────────────────────────────────

export const WORK_FROM_PARADISE = 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&auto=format&fit=crop&q=80'

// ─────────────────────────────────────────────────────────────
// 12. BLOG IMAGES
//    Displayed on: Blog Post Lists (/blog) and Blog Headers
// ─────────────────────────────────────────────────────────────

export const BLOG_IMAGES = {
  'first-hostel-stay': 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&auto=format&fit=crop&q=80',
  'solo-travel-tips': 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&auto=format&fit=crop&q=80',
  'rishikesh-beyond-yoga': 'https://images.unsplash.com/photo-1549887534-f2c03c1b5eec?w=1200&auto=format&fit=crop&q=80',
  'backpacking-bir-paragliding': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop&q=80',
  'budget-backpacking-guide': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&auto=format&fit=crop&q=80',
}

// ─────────────────────────────────────────────────────────────
// 13. A DAY AT MONKEY
//    Displayed on: Homepage → "A day at Monkey House" Section
// ─────────────────────────────────────────────────────────────

export const DAY_MOMENTS = [
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&auto=format&fit=crop&q=80',
]
