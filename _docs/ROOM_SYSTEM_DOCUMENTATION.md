# Hidden Monkey Room System Documentation

## Overview

A complete, scalable room/stay options system for the Hidden Monkey hostel website featuring:

1. **Interactive Amenities Icon System** - Compact, visual amenity indicators with tooltips
2. **Room-Specific Detail Modals** - Full-featured modals with image galleries and expanded information
3. **Redesigned Room Cards** - Visually dense, modern cards with 3-layer structure
4. **Fully Data-Driven Architecture** - Easy to extend with new room types and amenities

---

## Architecture

### Core Components

#### 1. **AmenitiesRow.js**
Displays a compact row of amenity icons with hover/tap tooltips.

**Features:**
- 6 icons max (displays "+X more" if additional amenities exist)
- Icon library includes: locker, curtain, light, charging, bathroom, female, wifi, social, quiet, kitchen
- Desktop hover → tooltip appears
- Mobile long-press → tooltip appears
- Smooth animations and focus states
- Fully accessible with ARIA labels

**Usage:**
```jsx
<AmenitiesRow amenities={['locker', 'curtain', 'wifi']} />
```

**Amenity Keys Available:**
- `locker` - Personal locker
- `curtain` - Privacy curtain
- `light` - Reading light
- `charging` - USB charging point
- `bathroom` - Clean shared bathroom
- `female` - Women-only space
- `wifi` - Fast WiFi
- `social` - Social atmosphere
- `quiet` - Quiet zones available
- `kitchen` - Shared kitchen

---

#### 2. **ImageGallery.js**
Carousel/grid gallery with swipe support for mobile.

**Features:**
- Main image display with counter (e.g., "1 / 5")
- Thumbnail grid for quick navigation
- Swipe support on mobile (left/right)
- Arrow navigation buttons on hover
- Auto-selected thumbnails
- Responsive sizing
- Optimized image loading

**Usage:**
```jsx
<ImageGallery images={[
  'https://example.com/room-1.jpg',
  'https://example.com/room-2.jpg'
]} />
```

---

#### 3. **RoomDetailModal.js**
Room-specific modal with full details, images, and amenities list.

**Features:**
- Centered overlay with backdrop
- Smooth fade + scale animations
- Scrollable content
- Close via: close button, backdrop click, ESC key
- Focus management & keyboard navigation
- Full accessibility support

**Content Sections:**
1. Header (room name + vibe description)
2. Image Gallery
3. Detailed Description (3 paragraphs)
4. Full Amenities List (with checkmarks)
5. CTA Button ("Check availability & book")

**Usage:**
```jsx
<RoomDetailModal
  room={selectedRoom}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>
```

---

#### 4. **RoomCard.js (Redesigned)**
Modern, visually dense card with 3-layer structure.

**Structure:**

**Layer 1 — Image + Overlay (45-50% of card)**
- Room image with gradient overlay
- Room type label (top-left)
- "View details →" hint (bottom-right, appears on hover)

**Layer 2 — Core Info (Dense & Clean)**
- Room name (bold, 18px)
- 1-line vibe description (clamped)
- Thin gradient divider

**Layer 3 — Amenities & Notes**
- Amenities icon row (AmenitiesRow component)
- Quick notes (2 bullet points max)
- Spacer to push action to bottom

**Action Zone**
- "Learn more →" text link (right-aligned)
- Hover: gap increases, arrow translates
- Click: opens RoomDetailModal

**Usage:**
```jsx
<RoomCard room={roomData} />
```

---

#### 5. **RoomTypes.js**
Stay Options section displaying room cards in a 3-column grid.

**Features:**
- Scalable card grid (1 col mobile, 3 cols desktop)
- Room-specific modal integration
- Clean section header
- Reassurance message

---

## Data Structure

### Complete Room Object Schema

```javascript
{
  id: 'mixed-dorm',                    // Unique identifier
  name: 'Mixed Dorm',                  // Room type name
  vibe: 'Shared rooms, easy...',       // 1-line vibe description
  image: 'https://...',                // Card hero image
  highlights: [                         // Old system (optional)
    'Lockers available',
    'Privacy curtains'
  ],
  amenities: [                          // Amenity icon keys
    'locker',
    'curtain',
    'light',
    'charging',
    'bathroom',
    'wifi'
  ],
  notes: [                              // Quick notes for card
    'Great for meeting people',
    'Social & friendly vibe'
  ],
  images: [                             // Gallery images for modal
    'https://...',
    'https://...',
    'https://...'
  ],
  detailedDescription: [                // Full description for modal
    'Paragraph 1...',
    'Paragraph 2...',
    'Paragraph 3...'
  ]
}
```

---

## Adding a New Room Type

Adding a new room is completely scalable. Follow these steps:

### Step 1: Add to `stayOptions` array in RoomTypes.js

```javascript
const stayOptions = [
  // ... existing rooms
  {
    id: 'luxury-private',
    name: 'Luxury Private Suite',
    vibe: 'Premium private suite with hostel vibes.',
    image: 'https://images.unsplash.com/...',
    amenities: [
      'locker',
      'light',
      'charging',
      'bathroom',
      'wifi',
      'kitchen'
    ],
    notes: [
      'Premium comfort',
      'With community access'
    ],
    images: [
      'https://images.unsplash.com/...',
      'https://images.unsplash.com/...'
    ],
    detailedDescription: [
      'Description paragraph 1...',
      'Description paragraph 2...',
      'Description paragraph 3...'
    ]
  }
]
```

### Step 2: Grid automatically updates
No layout changes needed. The 3-column grid will scale responsively.

---

## Adding New Amenities

### Step 1: Add icon definition to AmenitiesRow.js

In the `amenityIcons` object:

```javascript
const amenityIcons = {
  // ... existing amenities
  dryer: {
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M..." />
      </svg>
    ),
    label: 'In-room dryer',
    color: '#6B7280'
  }
}
```

### Step 2: Use in room data

```javascript
amenities: ['locker', 'wifi', 'dryer']
```

---

## Interactions & Animations

### Card Hover States
- Card lifts: `hover:-translate-y-1`
- Shadow enhances: `hover:shadow-lg`
- Image zooms: `group-hover:scale-[1.03]`
- "View details" fades in: `opacity-0 group-hover:opacity-100`

### Modal Animations
- Backdrop fade-in: 300ms
- Content scale + translate: 300ms
- Smooth all timing for calm feel

### Amenity Icons
- Lift on hover: `group-hover:scale-110 group-hover:-translate-y-1`
- Color change on hover: `hover:text-[#2D7A5F]`
- Tooltip fade-in: `animate-fadeIn`

### "Learn more" Button
- Arrow translates on hover: `group-hover:translate-x-0.5`
- Gap increases: `group-hover:gap-2`
- Smooth 300ms transitions

---

## Accessibility Features

✅ **Keyboard Navigation**
- Tab through all interactive elements
- Enter/Space to activate buttons
- ESC to close modal
- Focus ring visible on all focusable elements

✅ **Screen Reader Support**
- Semantic HTML (article, button, dialog)
- ARIA labels for icons
- `aria-modal="true"` on modal
- `role="dialog"` on modal
- `role="tooltip"` on amenity tooltips

✅ **Focus Management**
- Focus trapped inside modal
- Focus restored to trigger element on close
- Focus ring styling consistent

✅ **Color Contrast**
- All text meets WCAG AA standards
- Icon colors sufficient contrast
- Tooltip sufficient contrast

---

## Responsive Design

### Mobile (< 640px)
- Room cards: 1 column
- Image gallery: Swipe-first with visual hint
- Modal: Full-height bottom sheet
- Amenity row: Wraps on long-press
- Quick notes: Stack cleanly

### Tablet (640px - 1024px)
- Room cards: 1-2 columns
- Modal: Centered overlay
- Touch targets: Large (48px minimum)

### Desktop (> 1024px)
- Room cards: 3 columns (or more)
- Hover effects fully enabled
- Tooltip on hover (not tap)
- Smooth animations

---

## Performance Optimizations

- **Image optimization:** `quality={85}` for cards, `quality={80}` for gallery thumbnails
- **Priority loading:** Main modal image uses `priority`
- **Lazy rendering:** Modal only renders when open
- **Next.js Image:** All images use `next/image` for optimization
- **CSS-in-JS:** Minimal inline styles, Tailwind-based

---

## Customization Guide

### Change Accent Color
All accent colors use `#2D7A5F` (green). To change:
1. Find all instances of `#2D7A5F` in component files
2. Replace with your brand color
3. Also update `bg-[#2D7A5F]` and `text-[#2D7A5F]`

### Change Secondary Accent
`#EEA727` (orange) used in RoomTypes.js highlights. Update similarly.

### Change Icon Colors
Update in `AmenitiesRow.js`:
```javascript
color: '#6B7280'  // Current gray
```

### Adjust Card Heights
- Image height: `h-[280px]` in RoomCard.js
- Adjust value as needed

### Adjust Modal Size
- Max width: `sm:max-w-2xl` in RoomDetailModal.js
- Max height: `max-h-[85vh] sm:max-h-[90vh]`

---

## Troubleshooting

### Icons not displaying
- Check amenity keys match defined keys in `amenityIcons` object
- Verify SVG paths are valid
- Check color values are valid hex codes

### Modal not opening
- Verify `isOpen` prop is boolean
- Check `onClose` callback is defined
- Ensure room data has all required fields

### Images not loading
- Use absolute URLs (http/https)
- Check image URLs are accessible
- Verify image dimensions are reasonable

### Tooltips not appearing
- Check z-index: tooltip uses `z-50`
- Verify parent elements don't have overflow hidden
- Test on different browsers

---

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (not supported - uses modern CSS)

---

## Future Enhancements

Potential additions without breaking existing code:

1. **Booking integration** - Direct booking from modal
2. **Reviews** - Star ratings in modal
3. **Video gallery** - YouTube/Vimeo embeds
4. **Availability** - Real-time bed availability
5. **Pricing tiers** - Different prices per room
6. **Photo filters** - More complex image galleries
7. **Comparison mode** - Side-by-side room comparison
8. **Favorites** - Save rooms to wishlist
9. **Internationalization** - Multi-language support
10. **Analytics** - Track modal opens, clicks, etc.

---

## File Structure

```
components/
├── sections/
│   ├── RoomTypes.js              (Stay Options section)
│   ├── RoomCard.js               (Individual room card - redesigned)
│   ├── AmenitiesRow.js           (Amenity icons row)
│   ├── ImageGallery.js           (Image carousel)
│   └── RoomDetailModal.js        (Room detail modal)
└── ui/
    └── Container.js              (Layout wrapper)
```

---

## Component Dependencies

```
RoomTypes.js
├── RoomCard.js
│   ├── AmenitiesRow.js
│   └── RoomDetailModal.js
│       ├── ImageGallery.js
│       └── AmenitiesRow.js
```

---

## Version History

- **v1.0** (Jan 7, 2026) - Initial launch
  - Amenities icon system
  - Room detail modals
  - Redesigned room cards
  - Full scalability support

---

## Questions?

Refer to component JSDoc comments for detailed prop explanations and examples.
