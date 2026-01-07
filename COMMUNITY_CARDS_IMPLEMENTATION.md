# Community-First Cards: Implementation Guide

## Quick Start (Adding Your Rooms)

The redesigned room cards are **data-driven**. To customize:

### Step 1: Edit Room Data (RoomTypes.js)

Open [RoomTypes.js](RoomTypes.js) and locate the `stayOptions` array.

Each room needs these fields:

```javascript
{
  id: 'unique-room-id',                    // Unique identifier
  name: 'Room Name',                        // Display name
  vibe: 'One sentence describing the vibe', // Emotional vibe
  image: 'https://image-url.jpg',          // Hero image (moment-based)
  
  // NEW: Community signals (emotional, not features)
  communityTags: [
    'Tag 1 (who stays here)',
    'Tag 2 (how it feels)',
    'Tag 3 (the experience)'
  ],
  
  amenities: [                              // Minimal icons shown
    'locker', 'curtain', 'light',
    'charging', 'bathroom', 'wifi'
  ],
  
  // For detail modal
  images: [
    'https://image-1.jpg',
    'https://image-2.jpg',
    'https://image-3.jpg'
  ],
  detailedDescription: [
    'First paragraph about the experience...',
    'Second paragraph about what you get...',
    'Third paragraph about who this suits...'
  ],
  notes: [
    'Quick note about the space',
    'Another practical detail'
  ]
}
```

---

## Examples: Community Tags (NOT Amenities)

### Mixed Dorm Example
**What makes this unique?**
- Solo travelers connect
- Easy conversations
- Social energy

**Community Tags**:
```javascript
communityTags: [
  'Mostly solo travellers',
  'Easy to start conversations',
  'Social & vibrant'
]
```

### Female Dorm Example
**What makes this unique?**
- Safety and trust
- Women-focused community
- Supportive energy

**Community Tags**:
```javascript
communityTags: [
  'Women-focused community',
  'Safe & supportive space',
  'Friendly connections'
]
```

### Private Room Example
**What makes this unique?**
- Your own space
- Still part of community
- Best of both

**Community Tags**:
```javascript
communityTags: [
  'Peace with community',
  'Perfect for couples & groups',
  'Best of both worlds'
]
```

---

## Image Selection Guide

### Hero Image (card top, 320px)
**What to show:**
- ✅ People talking, reading, hanging out
- ✅ Group moments or solo comfort
- ✅ Natural lighting
- ✅ The *feeling* of the space

**What to avoid:**
- ❌ Empty rooms
- ❌ Corporate hotel aesthetics
- ❌ Overly staged shots
- ❌ Hard, cold lighting

**Where to find:**
- Internal: Guest photos, behind-the-scenes moments
- Unsplash: Search "hostel people", "shared living", "community spaces"
- Pexels: Search "travelers talking", "digital nomads", "coworking"

### Gallery Images (modal, 3 images)
Show:
1. The bed/sleeping area with people vibe
2. Common areas where community happens
3. Details (locker, curtain, light) or communal spaces

---

## Vibe Sentence Examples

The vibe sentence (15px, one line, conversational) should answer:
**"How will I *feel* staying here?"**

### Tone Guide

#### Welcoming & Warm
- ✅ "Where solo travellers stop being solo."
- ✅ "Comfort, privacy, and quiet confidence."
- ✅ "Your own corner, still part of the tribe."
- ✅ "Safe space designed for women travellers."
- ✅ "The best of both: solitude and community."

#### NOT Corporate/Transactional
- ❌ "Modern private rooms with en-suite facilities"
- ❌ "Female dorm featuring security and lockers"
- ❌ "Mixed accommodation for budget travelers"

#### Good Formula
**"[Emotional State], [How It Happens]"**

Examples:
- "Shared rooms, easy conversations, and people from everywhere."
- "Comfortable, secure, and designed for women travellers."
- "Your own space with all the community vibes of the Monkey House."

---

## Amenity Icons Reference

Only show **3-4 essential icons**. Display as emoji (scalable, accessible).

### Available Icons

```javascript
const amenityIcons = {
  locker: '🔒',      // Personal storage
  curtain: '🪟',     // Privacy curtain
  light: '💡',       // Reading light
  charging: '🔌',    // Power outlet
  bathroom: '🚽',    // Shower/toilet
  female: '👩',      // Women-only
  wifi: '📶',        // Internet
  social: '🤝',      // Social space
  quiet: '🤫',       // Quiet zones
  kitchen: '🍳'      // Cooking access
}
```

### Selection Guide

**For Mixed Dorm**: Show locker, curtain, light, charging, bathroom, wifi
- These say "I can sleep well and stay private"

**For Female Dorm**: Show locker, curtain, light, charging, bathroom, female, wifi
- The 👩 icon signals safety and women-first design

**For Private Room**: Show light, charging, bathroom, wifi, kitchen
- These say "I have everything I need"

**For adding new types**: Only add if it materially changes the experience
- 🤝 (Social) - if the room emphasizes community activities
- 🤫 (Quiet) - if the room is specifically quiet zones
- 🍳 (Kitchen) - if guests have cooking access

---

## Component Architecture

### Files & Responsibilities

```
components/sections/
├── RoomCard.js              ← Individual card (NEW, redesigned)
│   └── Shows: Image, Name, Vibe, Community tags, Icons, CTA
│   └── Opens: RoomDetailModal on click
│
├── RoomTypes.js             ← Container & data (UPDATED)
│   └── Owns: stayOptions array (room data)
│   └── Renders: Grid of RoomCard components
│
├── RoomDetailModal.js       ← Full room experience (existing)
│   └── Shows: Image gallery, Full description, All amenities
│   └── Layout: 2-column (desktop), bottom-sheet (mobile)
│
└── AmenitiesRow.js          ← Amenity icons (existing)
    └── Used by: RoomDetailModal (full list)
    └── NOT used: RoomCard (uses inline icons)
```

### Data Flow

```
RoomTypes.js (stayOptions array)
    ↓
RoomCard component (receives room object)
    ├── Displays: Community tags, Hero image, Vibe, CTA
    └── On click → Opens RoomDetailModal
            ↓
        RoomDetailModal
        ├── Displays: Image gallery, Full descriptions
        └── Uses: ImageGallery component internally
```

---

## Customization Examples

### Example 1: Changing a Community Tag

**Current:**
```javascript
communityTags: [
  'Mostly solo travellers',
  'Easy to start conversations',
  'Social & vibrant'
]
```

**New (if vibe changes):**
```javascript
communityTags: [
  'Perfect for meeting people',
  'Group-friendly energy',
  'Conversations all night'
]
```

Just update the array. No component changes needed.

---

### Example 2: Adding a New Room Type

```javascript
// Add to stayOptions array in RoomTypes.js

{
  id: 'couple-retreat',
  name: 'Couple Retreat',
  vibe: 'Intimate space for two, with access to our community.',
  image: 'https://...',
  communityTags: [
    'Romantic & cozy',
    'Privacy in community',
    'Perfect for couples'
  ],
  amenities: [
    'light',
    'charging',
    'bathroom',
    'wifi',
    'kitchen'
  ],
  images: [
    'https://...',
    'https://...',
    'https://...'
  ],
  detailedDescription: [
    'Share an intimate space with your travel companion...',
    'The room features...',
    'Perfect for...'
  ],
  notes: [
    'Double bed with premium linens',
    'Couples welcome in all common areas'
  ]
}
```

That's it. The card auto-renders with all three columns.

---

### Example 3: Adding a New Amenity Type

If you need to show a new amenity across multiple rooms:

**Step 1:** Add to amenityIcons in RoomCard.js

```javascript
const amenityIcons = {
  // ... existing icons ...
  parking: '🅿️',      // NEW
  balcony: '🌳'       // NEW
}
```

**Step 2:** Add to room amenities arrays

```javascript
amenities: [
  'locker',
  'parking',    // NEW
  'balcony',    // NEW
  'wifi'
]
```

**Step 3:** Done. No other changes needed.

---

## Design Decisions Explained

### Why Community Tags Instead of Amenities?

Amenities are about **reassurance** (yes, there's a locker).
Community tags answer the real question: **"Will I belong here?"**

Research shows backpackers care more about:
- Who else is staying (solo? couples? groups?)
- What the social vibe is
- How easy it is to make friends
- Whether they'll feel included

Not:
- Outlet specifications
- Locker dimensions
- WiFi speed

### Why 3-4 Amenity Icons Only?

Too many icons = clutter and confusion.
We want **reassurance**, not a feature list.

The 3-4 icons say: "You can sleep well, charge your devices, and shower."
Everything else (and more detail) is in the modal.

### Why Emoji for Icons?

✅ **Universally understood**
- No language barriers
- Cultural recognition
- Instant clarity

✅ **Scalable & accessible**
- Any new device renders perfectly
- Screen reader compatible
- No custom icon library needed

✅ **Feels human**
- Fits the warm, friendly tone
- Not corporate or sterile
- Matches the invitation vibe

### Why "See how it feels" Instead of "Learn more"?

- **"Learn more"** = transactional, features
- **"See how it feels"** = experiential, belonging
- Matches the entire philosophy: it's about experience, not booking

---

## Troubleshooting

### Community Tags Not Showing?

Check:
1. Ensure `communityTags` array exists in room object
2. Array has 1-3 items (max 3 shown)
3. Each tag is a non-empty string

### Amenities Icons Not Showing?

Check:
1. `amenities` array exists and has items
2. Each item matches a key in `amenityIcons` object
3. Only 3-4 icons typically shown (more are ignored)

### Modal Opens but Shows Old Content?

Make sure:
1. RoomCard is properly linked to RoomDetailModal
2. Room object has `images[]`, `detailedDescription[]`, `notes[]`
3. Clear browser cache and restart dev server

### Card Layout Looks Wrong?

Check:
1. `rounded-3xl` class is preserved (soft corners)
2. Image height is `h-[320px]`
3. Padding is consistent (`px-6 py-5`)

---

## Color Reference

All styling uses this palette:

```javascript
{
  accent: '#2D7A5F',       // Community tag borders, CTA text
  dark: '#1A1A1A',         // Headlines
  secondary: '#5E625A',    // Body text, descriptions
  border: '#E6E4DF',       // (old design, not used in new)
  white: '#FFFFFF',        // Card background
}
```

The new design uses these colors consistently across all new components.

---

## Mobile Responsiveness

**No special work needed.**

The card automatically:
- Stacks vertically on small screens
- Wraps community tags naturally
- Opens modal as bottom-sheet on mobile
- Touch-targets are large for easy tapping

Everything works without additional code.

---

## Performance Notes

- Images use Next.js `Image` component (automatic optimization)
- Quality set to 85 for card images (balance size/quality)
- No external dependencies (only React + Tailwind)
- Component renders efficiently with React hooks
- Modal manages focus for accessibility

---

## Final Summary

The redesigned cards are:
- ✅ Community-first (not transactional)
- ✅ Fully data-driven (no hardcoding)
- ✅ Highly scalable (add rooms as data only)
- ✅ Emotionally inviting (warm, human language)
- ✅ Accessible (keyboard nav, screen readers, emoji icons)
- ✅ Mobile-friendly (responsive, touch-optimized)
- ✅ Easy to customize (comments explain every section)

Add new rooms, update community tags, change images—all without touching components. That's scalability.
