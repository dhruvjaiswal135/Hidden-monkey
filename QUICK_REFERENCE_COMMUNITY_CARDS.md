# Community-First Cards: Quick Reference

## At a Glance

**What:** Room cards redesigned with community-first, experience-driven approach
**Why:** Stop feeling like a transaction, start feeling like belonging
**Where:** `/components/sections/RoomCard.js` and `RoomTypes.js`
**Status:** ✅ Production-ready

---

## Card Anatomy (Visual)

```
┌─────────────────────────────┐
│ 🏷️  Room Label              │ ← Room name as soft pill
├─────────────────────────────┤
│  📸 MOMENT IMAGE            │ ← People, not empty beds
│     (320px height)          │ ← Shows real hostel life
├─────────────────────────────┤
│ Room Name (20px bold)       │
│ One vibe sentence here...   │ ← Emotional, warm
│ ─────────────               │ ← Soft green divider
├─────────────────────────────┤
│ 🏝️  Community signal 1      │
│ 🤝 Community signal 2       │ ← Who & how, not features
│ ✨ Community signal 3       │
├─────────────────────────────┤
│ 🔒 🪟 💡 🔌 🚽 📶          │ ← Minimal icons (reassurance)
│                             │
│ See how it feels →          │ ← Experiential CTA
└─────────────────────────────┘
```

---

## Core Difference: Community Tags vs Features

| Old | New |
|-----|-----|
| ❌ "Lockers • WiFi • Curtains" | ✅ "Mostly solo travellers" |
| ❌ Feature list | ✅ Emotional signal |
| ❌ "What's included?" | ✅ "Who am I with?" |
| ❌ Transactional | ✅ Invitational |

---

## Adding a New Room (3 Steps)

### Step 1: Open RoomTypes.js
Go to `components/sections/RoomTypes.js`

### Step 2: Add Room Object to `stayOptions` Array

```javascript
{
  id: 'new-room-id',
  name: 'New Room Name',
  vibe: 'One emotional sentence here...',
  image: 'https://image-url.jpg',
  
  communityTags: [
    'Tag 1 (who or how)',
    'Tag 2 (who or how)',
    'Tag 3 (the experience)'
  ],
  
  amenities: ['locker', 'wifi', 'light', 'charging'],
  
  // For modal
  images: ['url1', 'url2', 'url3'],
  detailedDescription: ['para1', 'para2', 'para3'],
  notes: ['note1', 'note2']
}
```

### Step 3: Done!
Card renders automatically with new data.

---

## Community Tags: 3-Part Formula

### Part 1: **Who** (Identity)
- "Mostly solo travellers"
- "Women-focused community"
- "Perfect for couples & groups"

### Part 2: **How** (Experience)
- "Easy to start conversations"
- "Safe & supportive space"
- "Peace with community"

### Part 3: **Result** (Feeling)
- "Social & vibrant"
- "Friendly connections"
- "Best of both worlds"

**Example (Mixed Dorm):**
```javascript
communityTags: [
  'Mostly solo travellers',        // Who
  'Easy to start conversations',   // How
  'Social & vibrant'               // Result
]
```

---

## Vibe Sentence: 2-Part Formula

**[Emotional State], [Why/How]**

### Good Examples ✅
- "Shared rooms, easy conversations, and people from everywhere."
- "Comfortable, secure, and designed for women travellers."
- "Your own space with all the community vibes of the Monkey House."

### Bad Examples ❌
- "Modern dorm with lockers and WiFi"
- "Female accommodation with security features"
- "Private room with en-suite bathroom"

---

## Image Selection Guide

### Hero Image (Top of Card, 320px)

**DO:**
- ✅ Show people talking, laughing, hanging out
- ✅ Show the community/vibe
- ✅ Use natural soft lighting
- ✅ Show real hostel moments

**DON'T:**
- ❌ Show empty rooms
- ❌ Show corporate hotel aesthetics
- ❌ Show hard, cold lighting
- ❌ Show overly staged shots

### Where to Find Images
- Internal: Guest photos, behind-the-scenes moments
- Unsplash: "hostel people", "travelers talking", "shared living"
- Pexels: "digital nomads", "coworking", "community spaces"

---

## Emoji Icons Reference

Used for reassurance (3-4 max):

```
🔒 Locker        (personal storage)
🪟 Curtain       (privacy)
💡 Light         (reading light)
🔌 Charging      (power outlet)
🚽 Bathroom      (shower/toilet)
👩 Female        (women-only)
📶 WiFi          (internet)
🤝 Social        (community space)
🤫 Quiet         (quiet zones)
🍳 Kitchen       (cooking access)
```

### Selection Tips
- Show **essential** amenities only
- These should say "I can sleep well and shower"
- Detailed amenities are in the modal
- Max 4-6 icons (space-dependent)

---

## Component Files

| File | Status | What It Does |
|------|--------|--------------|
| [RoomCard.js](../components/sections/RoomCard.js) | ✅ NEW | Individual card with community-first design |
| [RoomTypes.js](../components/sections/RoomTypes.js) | ✅ UPDATED | Container, data, grid (uses RoomCard) |
| [RoomDetailModal.js](../components/sections/RoomDetailModal.js) | ✅ Existing | Full room experience (2-col desktop) |
| [ImageGallery.js](../components/sections/ImageGallery.js) | ✅ Existing | Carousel with swipe support |

---

## Key Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Accent Green | #2D7A5F | CTA, divider, focus ring, tag border |
| Dark | #1A1A1A | Headlines |
| Secondary | #5E625A | Body text, descriptions |
| White | #FFFFFF | Card background |

---

## Responsive Behavior

- **Mobile:** Single column, cards stack vertically
- **Tablet:** 2-3 columns (natural wrap)
- **Desktop:** 3 columns, fixed layout
- **Modal:** Full-screen on mobile (bottom-sheet), 2-column on desktop

No code changes needed—all responsive built-in.

---

## Customization Quick Links

| Need | See |
|------|-----|
| Add new room | Step 2 above ⬆️ |
| Update community tags | Step 2: `communityTags` array |
| Change image | Step 2: `image` field |
| Add new amenity type | See IMPLEMENTATION guide |
| Troubleshoot | See IMPLEMENTATION guide |
| Full details | See `COMMUNITY_CARDS_IMPLEMENTATION.md` |
| Design specs | See `VISUAL_REFERENCE_COMMUNITY_CARDS.md` |
| Philosophy | See `COMMUNITY_FIRST_DESIGN.md` |

---

## Common Tasks

### Update One Community Tag
```javascript
// Old
communityTags: [
  'Easy to start conversations',  // ← Change this
  'Social & vibrant'
]

// New
communityTags: [
  'Meet lifelong friends',        // ← Updated
  'Social & vibrant'
]
```

### Change Room Image
```javascript
// Just update the URL
image: 'https://new-image-url.jpg'
```

### Add New Amenity
```javascript
// 1. Add to amenities array
amenities: ['locker', 'parking']  // ← Added 'parking'

// 2. Emoji already mapped in RoomCard.js
// Nothing else needed—auto-renders
```

---

## Interaction Behavior

| Action | Result |
|--------|--------|
| Hover card | Shadow grows, image zooms 1.05x, CTA arrow slides right |
| Click card | Opens RoomDetailModal (room-specific) |
| Click CTA | Opens RoomDetailModal (same as click card) |
| On mobile | Tap to open, bottom-sheet modal |
| Press ESC | Closes modal |
| Tab through | Keyboard navigation, proper focus rings |

---

## Testing Checklist

### Before Deploy
- [ ] All 3 rooms have `communityTags`
- [ ] All images load without breaking layout
- [ ] Vibe sentences are warm, not transactional
- [ ] Community tags are emotional, not features
- [ ] Modal opens and closes properly
- [ ] Card looks good mobile to desktop
- [ ] Accessibility: Tab navigation works, ESC closes modal

---

## Support

### Documentation
- **Design Philosophy:** `COMMUNITY_FIRST_DESIGN.md`
- **Implementation Guide:** `COMMUNITY_CARDS_IMPLEMENTATION.md`
- **Visual Specs:** `VISUAL_REFERENCE_COMMUNITY_CARDS.md`
- **Full Summary:** `REDESIGN_SUMMARY.md`

### Need Help?
1. Check documentation (above)
2. Review examples in `COMMUNITY_CARDS_IMPLEMENTATION.md`
3. Look at existing rooms in `RoomTypes.js` (they're working examples)

---

## Key Takeaway

Every word, every image, every element answers one question:

> **"Will I belong here?"**

✅ Community tags: "Yes, look who stays here"
✅ Vibe sentence: "Yes, it feels like this"
✅ Image: "Yes, see the community"
✅ CTA: "Yes, come experience it"

This isn't about booking. This is about **invitation to belonging**.

---

## Status: Production Ready ✨

All components built, tested, documented, and ready to customize.

Add your rooms, update your images, invite people home.
