/**
 * ═══════════════════════════════════════════════════════════════
 *  HIDDEN MONKEY — MASTER IMAGE CONFIGURATION
 * ═══════════════════════════════════════════════════════════════
 *
 *  SINGLE SOURCE OF TRUTH for every image on the website,
 *  organised PAGE BY PAGE, and inside each page SECTION BY SECTION.
 *
 *  🔧 HOW TO CHANGE AN IMAGE:
 *     1. Find the page + section below
 *     2. Replace the URL string with your new image URL
 *     3. Save — the website updates automatically
 *
 *  💡 TIPS:
 *     - Every URL in this file has been verified to load and to show
 *       the right subject. When you swap one in, open it in a browser
 *       first to check what it actually is.
 *     - Unsplash URLs: keep the ?w=…&auto=format&fit=crop&q=80 suffix
 *     - Keep alt text descriptive — it matters for accessibility & SEO
 *
 * ═══════════════════════════════════════════════════════════════
 */

const u = (id, w = 900) => `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`
const face = (id) => `https://images.unsplash.com/${id}?w=100&h=100&fit=crop&crop=face`

/* ─────────────────────────────────────────────────────────────
   GLOBAL — used across the whole site
   ───────────────────────────────────────────────────────────── */

// Header + Footer logo (local file in /public/images/)
export const LOGO = '/images/logo.png'

// Social-share (Open Graph) images per page — absolute URLs
export const OG_IMAGES = {
  default: u('photo-1549817997-f6958ecf47b9', 1200),        // Darjeeling hillside town
  stays: u('photo-1709805619372-40de3f158e83', 1200),        // wooden dorm room
  gallery: u('photo-1762513839526-c596f5e99a9a', 1200),      // Varanasi ghats panorama
  experiences: u('photo-1764173517657-0e7d94d94a4b', 1200),  // Ganga aarti close-up
}

// Fallbacks when a component can't find its expected image
export const FALLBACK = {
  room: u('photo-1555854877-bab0e564b8d5', 800),             // bunk-bed dorm
  destination: u('photo-1590256518627-c9f8a6855185', 800),   // Kanchenjunga at golden hour
  experience: u('photo-1551632811-561732d1e306', 800),       // trekkers with backpacks
}

/* ─────────────────────────────────────────────────────────────
   HOME PAGE
   ───────────────────────────────────────────────────────────── */

// — Hero section: crossfading slideshow (mountains → ghats → community)
export const HERO_SLIDES = [
  { url: u('photo-1549817997-f6958ecf47b9', 1200), alt: 'Darjeeling hillside town above green tea slopes' },
  { url: u('photo-1762513839526-c596f5e99a9a', 1200), alt: 'The ghats of Varanasi along the Ganges' },
  { url: u('photo-1758272960205-96258d60ac1f', 1200), alt: 'Friends singing around a bonfire at night' },
]

// — Hero section: social-proof avatar row
export const CTA_AVATARS = [
  face('photo-1494790108377-be9c29b29330'),
  face('photo-1507003211169-0a1dd7228f2d'),
  face('photo-1438761681033-6461ffad8d80'),
  face('photo-1534528741775-53994a69daeb'),
  face('photo-1506794778202-cad84cf45f1d'),
]

// — "Life at Monkey" section: six moment cards, in display order
//   (1 Chill Vibes · 2 Jam Nights · 3 Trek Squad · 4 Late Night Stories · 5 Common Room Chaos · 6 Cook Together)
export const LIFE_AT_MONKEY = [
  { image: u('photo-1493857671505-72967e2e2760', 600), alt: 'Laid-back cafe corner in the hostel' },
  { image: u('photo-1758272960128-33a80dca5799', 600), alt: 'Guitar jam session with friends' },
  { image: u('photo-1551632811-561732d1e306', 600), alt: 'Trek squad hiking a mountain trail' },
  { image: u('photo-1758272959969-1b36fcdd8b82', 600), alt: 'Late-night stories and marshmallows around the campfire' },
  { image: u('photo-1527529482837-4698179dc6ce', 600), alt: 'Family dinner toast in the common room' },
  { image: u('photo-1556910103-1c02745aae4d', 600), alt: 'Travellers cooking together in the kitchen' },
]

// — "Why Hidden Monkey" section (also reused by Two Ways to Stay & Work from Paradise)
export const WHY_HIDDEN_MONKEY = {
  realPeople: u('photo-1539635278303-d4002c07eae3', 800),        // friends together in the mountains
  designedForYou: u('photo-1709805619372-40de3f158e83', 800),    // warm wooden dorm with a view
  localExperiences: u('photo-1728272360172-53c6d5427b7f', 800),  // Ganga aarti crowd at night
  stunningLocations: u('photo-1590256518627-c9f8a6855185', 800), // Kanchenjunga at golden hour
  workFriendly: u('photo-1751199199992-b32cefa81c72', 800),      // people working on laptops in a cafe
  sustainableTravel: u('photo-1652722230750-b8b97e4829c1', 800), // tea garden rows
}

// — "Meet the Tribe" section: testimonial avatars
export const TRIBE_AVATARS = {
  sarah: face('photo-1494790108377-be9c29b29330'),
  marco: face('photo-1507003211169-0a1dd7228f2d'),
  aisha: face('photo-1438761681033-6461ffad8d80'),
}

// — "Work from Paradise" section: main image (workFriendly above is the second)
export const WORK_FROM_PARADISE = u('photo-1488751045188-3c55bbf9a3fa', 800) // working on a laptop by the window

/* ─────────────────────────────────────────────────────────────
   DESTINATIONS — homepage cards + /destinations page + modals
   ───────────────────────────────────────────────────────────── */

export const DESTINATIONS = {
  darjeeling: {
    // Card hero: the iconic blue toy train through town
    hero: u('photo-1754737524646-d5159e91cbe7', 1200),
    // Modal carousel
    gallery: [
      u('photo-1754737524646-d5159e91cbe7', 1200),  // toy train through hillside town
      u('photo-1590256518627-c9f8a6855185', 1200),  // Kanchenjunga at dawn
      u('photo-1652722230750-b8b97e4829c1', 1200),  // tea garden rows
    ],
    // Property cards inside the modal
    properties: {
      monkeyHouse: u('photo-1709805619372-40de3f158e83', 600), // wooden dorm with a view
      treehouse: u('photo-1596394516093-501ba68a0ba6', 600),   // open-air mountain bed deck
    },
  },

  varanasi: {
    // Card hero: boats on the Ganges in golden light
    hero: u('photo-1706186839147-0d708602587b', 1200),
    // Modal carousel
    gallery: [
      u('photo-1762513839526-c596f5e99a9a', 1200),  // ghats panorama
      u('photo-1764173517657-0e7d94d94a4b', 1200),  // aarti flames close-up
      u('photo-1741234241381-0772bdd7549a', 1200),  // wooden boats on the riverbank
    ],
    // Property cards inside the modal
    properties: {
      ghatView: u('photo-1582719478250-c89cae4dc85b', 600),  // warm wooden guest room
      oldCity: u('photo-1555854877-bab0e564b8d5', 600),      // bunk-bed dorm
    },
  },
}

/* ─────────────────────────────────────────────────────────────
   STAYS PAGE — room galleries (also on homepage Room Types)
   First 3 images of each room appear in the mosaic on /stays.
   ───────────────────────────────────────────────────────────── */

export const ROOM_IMAGES = {
  // Mixed Dorm · 6 Bed — the most popular room
  'mixed-dorm-6': [
    u('photo-1555854877-bab0e564b8d5'),   // bunk beds
    u('photo-1709805619372-40de3f158e83'), // wooden dorm with a view
    u('photo-1493857671505-72967e2e2760'), // hostel cafe corner
    u('photo-1527529482837-4698179dc6ce'), // family dinner
    u('photo-1556910103-1c02745aae4d'),    // shared kitchen
  ],

  // Female Only Dorm · 6 Bed — women-only space
  'female-dorm-6': [
    u('photo-1709805619372-40de3f158e83'), // wooden dorm with a view
    u('photo-1555854877-bab0e564b8d5'),    // bunk beds
    u('photo-1596394516093-501ba68a0ba6'), // quiet balcony corner
    u('photo-1493857671505-72967e2e2760'), // cafe corner
  ],

  // Mixed Dorm · 4 Bed — intimate dorm option
  'mixed-dorm-4': [
    u('photo-1555854877-bab0e564b8d5'),    // bunk beds
    u('photo-1709805619372-40de3f158e83'), // wooden dorm
    u('photo-1596394516093-501ba68a0ba6'), // balcony corner
  ],

  // Private Double Room — couples / small groups
  'private-double': [
    u('photo-1598928636135-d146006ff4be'), // bright double room
    u('photo-1582719478250-c89cae4dc85b'), // warm wooden room with garden windows
    u('photo-1505693416388-ac5ce068fe85'), // plush queen bed
    u('photo-1566665797739-1674de7a421a'), // modern dark-toned room
  ],

  // Deluxe Private Suite — premium king bed room (Darjeeling)
  'deluxe-suite': [
    u('photo-1590490360182-c33d57733427'), // classic suite with sofa
    u('photo-1631049307264-da0ec9d70304'), // clean premium bedroom
    u('photo-1616594039964-ae9021a400a0'), // bright glam suite
    u('photo-1596394516093-501ba68a0ba6'), // open-air mountain bed deck
    u('photo-1578683010236-d716f9a3f461'), // glass-walled villa bedroom
  ],
}

// — "Bring the whole crew" group banner on /stays (also on /about)
export const STAYS_COMMUNITY_IMAGE = u('photo-1529156069898-49953e39b3ac') // friends arm in arm

// — Homestays: host avatars + per-home photos (used by content/homestays)
export const HOMESTAY_HOSTS = {
  tamang: face('photo-1438761681033-6461ffad8d80'),
  pemba: face('photo-1507003211169-0a1dd7228f2d'),
  mishra: face('photo-1534528741775-53994a69daeb'),
  rekha: face('photo-1494790108377-be9c29b29330'),
}

export const HOMESTAY_IMAGES = {
  'tamang-lebong': [
    u('photo-1582719478250-c89cae4dc85b'),  // warm wooden guest room
    u('photo-1652722230750-b8b97e4829c1'),  // tea garden outside
  ],
  'pemba-view': [
    u('photo-1596394516093-501ba68a0ba6'),  // bed deck facing the mountains
    u('photo-1590256518627-c9f8a6855185'),  // Kanchenjunga from the window
  ],
  'mishra-haveli': [
    u('photo-1598928636135-d146006ff4be'),  // bright double room
    u('photo-1762513839526-c596f5e99a9a'),  // the ghats nearby
  ],
  'rekha-riverside': [
    u('photo-1631049307264-da0ec9d70304'),  // clean guest bedroom
    u('photo-1706186839147-0d708602587b'),  // boats on the river below
  ],
}

/* ─────────────────────────────────────────────────────────────
   EXPERIENCES PAGE — one cover image per experience
   (culturalNights also on homepage Community Events;
    cookingClass also on homepage Two Ways to Stay)
   ───────────────────────────────────────────────────────────── */

export const EXPERIENCES = {
  mountainTreks: u('photo-1551632811-561732d1e306', 800),      // trekkers with backpacks
  raftingAdventure: u('photo-1530866495561-507c9faab2ed', 800), // white-water rafting
  yogaRetreat: u('photo-1758797315487-b3b225dff7d8', 800),      // group yoga on the lawn
  meditation: u('photo-1506126613408-eca07ce68773', 800),       // seated meditation
  culturalNights: u('photo-1764173517657-0e7d94d94a4b', 800),   // Ganga aarti flames
  liveMusic: u('photo-1516450360452-9312f5e86fc7', 800),        // live music night
  cookingClass: u('photo-1742281257707-0c7f7e5ca9c6', 800),     // Indian thali spread
}

/* ─────────────────────────────────────────────────────────────
   GALLERY PAGE — photo grid
   categories: rooms · spaces · events · nature
   aspects: wide · tall · square (drives the masonry layout)
   ───────────────────────────────────────────────────────────── */

export const GALLERY = [
  // — Rooms
  { id: 1,  url: u('photo-1555854877-bab0e564b8d5'), alt: 'Bunk-bed dorm room',                 category: 'rooms',  aspect: 'wide' },
  { id: 2,  url: u('photo-1709805619372-40de3f158e83'), alt: 'Wooden dorm with a valley view',  category: 'rooms',  aspect: 'square' },
  { id: 3,  url: u('photo-1598928636135-d146006ff4be'), alt: 'Private double room',             category: 'rooms',  aspect: 'tall' },
  { id: 4,  url: u('photo-1590490360182-c33d57733427'), alt: 'Deluxe suite with sitting area',  category: 'rooms',  aspect: 'square' },
  { id: 5,  url: u('photo-1582719478250-c89cae4dc85b'), alt: 'Homestay guest room',             category: 'rooms',  aspect: 'wide' },
  // — Spaces
  { id: 6,  url: u('photo-1493857671505-72967e2e2760'), alt: 'The hostel cafe corner',          category: 'spaces', aspect: 'wide' },
  { id: 7,  url: u('photo-1751199199992-b32cefa81c72'), alt: 'The co-working room in action',   category: 'spaces', aspect: 'square' },
  { id: 8,  url: u('photo-1556910103-1c02745aae4d'), alt: 'Cooking together in the kitchen',    category: 'spaces', aspect: 'tall' },
  { id: 9,  url: u('photo-1596394516093-501ba68a0ba6'), alt: 'Balcony bed with mountain views', category: 'spaces', aspect: 'wide' },
  // — Events
  { id: 10, url: u('photo-1758272960128-33a80dca5799'), alt: 'Guitar jam by the fire',          category: 'events', aspect: 'wide' },
  { id: 11, url: u('photo-1758272960205-96258d60ac1f'), alt: 'Bonfire night',                   category: 'events', aspect: 'square' },
  { id: 12, url: u('photo-1764173517657-0e7d94d94a4b'), alt: 'Evening Ganga aarti',             category: 'events', aspect: 'tall' },
  { id: 13, url: u('photo-1527529482837-4698179dc6ce'), alt: 'Family dinner toast',             category: 'events', aspect: 'square' },
  { id: 14, url: u('photo-1516450360452-9312f5e86fc7'), alt: 'Live music night',                category: 'events', aspect: 'wide' },
  // — Nature & places
  { id: 15, url: u('photo-1590256518627-c9f8a6855185'), alt: 'Kanchenjunga at golden hour',     category: 'nature', aspect: 'wide' },
  { id: 16, url: u('photo-1754737524646-d5159e91cbe7'), alt: 'Darjeeling toy train',            category: 'nature', aspect: 'tall' },
  { id: 17, url: u('photo-1762513839526-c596f5e99a9a'), alt: 'The ghats of Varanasi',           category: 'nature', aspect: 'wide' },
  { id: 18, url: u('photo-1706186839147-0d708602587b'), alt: 'Boats on the Ganges at sunrise',  category: 'nature', aspect: 'square' },
]

/* ─────────────────────────────────────────────────────────────
   BLOG — cover image per post slug (listing cards + post header)
   ───────────────────────────────────────────────────────────── */

export const BLOG_IMAGES = {
  'first-hostel-stay': u('photo-1555854877-bab0e564b8d5', 1200),          // bunk-bed dorm
  'solo-travel-tips': u('photo-1501555088652-021faa106b9b', 1200),        // solo hiker in a valley
  'rishikesh-beyond-yoga': u('photo-1725083505564-4b47c37c6ded', 1200),   // yoga above the Ganges, Rishikesh
  'backpacking-bir-paragliding': u('photo-1497267049703-01d7eb538c99', 1200), // paraglider over Himalayan peaks
  'budget-backpacking-guide': u('photo-1539635278303-d4002c07eae3', 1200),    // backpacker friends in the mountains
}
