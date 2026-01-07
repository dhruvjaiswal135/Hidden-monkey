# Room Detail Modal Design Guide

## Overview

The RoomDetailModal is an **immersive, two-column experience** designed to help users explore room types in depth without feeling pressured to book.

**Key Philosophy:** The modal should feel like stepping inside the room, not stepping into a sales funnel.

---

## Layout Architecture

### Desktop (lg breakpoint and above)
**Two-Column Layout**
```
┌─────────────────────────────────────────────────┐
│  IMAGE (50%)        │  DETAILS (50%)            │
│  ───────────────────┼──────────────────────────│
│                     │  Room Name               │
│  [Main Image]       │  Vibe Description        │
│  [Thumbnails]       │  ─────────────────────   │
│                     │  Detailed Description    │
│                     │  ─────────────────────   │
│                     │  What you get            │
│                     │  • Amenity 1             │
│                     │  • Amenity 2             │
│                     │  ─────────────────────   │
│                     │  Good to know            │
│                     │  • Note 1                │
│                     │  • Note 2                │
│                     │  ─────────────────────   │
│                     │  [Check availability]    │
│                     │  [Close]                 │
└─────────────────────────────────────────────────┘
```

- **Max width:** 5xl (64rem)
- **Modal sizing:** Full height viewport, max 85vh
- **Centered:** Uses lg:items-center
- **Spacing:** Generous lg:p-7 (28px padding)

### Mobile (< lg breakpoint)
**Single Column Stack**
```
┌─────────────────────┐
│  Room Name          │ [x]
│  Vibe Description   │
├─────────────────────┤
│  [Image Gallery]    │
│  [Thumbnails]       │
├─────────────────────┤
│  Detailed Desc...   │
│  What you get       │
│  • Amenity 1        │
│  ─────────────────  │
│  Good to know       │
│  • Note 1           │
├─────────────────────┤
│ [Check availability]│
│ [Close]             │
└─────────────────────┘
```

- **Full height:** bottom sheet behavior
- **Rounded top:** rounded-t-3xl
- **Rounded bottom:** Visible on desktop (rounded-2xl)
- **Header sticky:** Visible at top when scrolling
- **Swipe affordance:** Visual drag handle indicator on mobile

---

## Structure & Sections

### 1. Header Section (Fixed/Sticky)
**Elements:**
- Room name (24px desktop, 28px on larger displays)
- Vibe description (1-line, color: gray-700)
- Close button (X icon, top-right)

**Styling:**
- Border bottom: gray-200
- Padding: p-5 mobile, lg:p-7 desktop
- Background: white (sticky)
- No shadow (clean, minimal)

### 2. Image Section (Desktop Left, Mobile Top)
**Elements:**
- Full image gallery with carousel
- Swipe support on mobile
- Thumbnail navigation on desktop
- Image counter (e.g., "1 / 5")

**Styling:**
- Background: gray-100
- Rounded corners on desktop only
- Full height on desktop
- Responsive heights on mobile (300px, 400px)

### 3. Divider
- Thin gradient line from gray-200 to transparent
- Provides visual breathing room
- h-px, subtle visual hierarchy

### 4. Detailed Description Section
**Content:**
- 2-3 paragraphs explaining:
  - Who this room is for
  - What it feels like
  - Important context or notes

**Styling:**
- Text: 15px, line-height relaxed
- Color: gray-600 (#5E625A)
- Space between paragraphs: 3 (12px)
- Responsive: Same on mobile and desktop

### 5. "What you get" Section
**Elements:**
- Section title (17px, bold)
- Amenity list (single column)
- Each amenity:
  - Green checkmark icon
  - Amenity label
  - Full width row

**Styling:**
- Grid: single column (always stacks)
- Gap: 2.5 (10px)
- Icons: text-[#2D7A5F] (brand green)
- Labels: gray-600, 15px

### 6. "Good to know" Section (Optional)
**Elements:**
- Section title (17px, bold)
- Notes list (if provided in room data)
- Each note:
  - Green bullet point
  - Note text

**Styling:**
- Border top: gray-200 (separates from amenities)
- Space from amenities: pt-2 (8px)
- Gap between notes: 2.5 (10px)
- Bullet color: text-[#2D7A5F]

### 7. Footer CTA Section (Fixed)
**Elements:**
- Primary CTA: "Check availability & book" (button)
- Secondary action: "Close" (text button)

**Styling:**
- Primary button:
  - Background: #1A1A1A (black)
  - Hover: #2D7A5F (green)
  - Padding: py-3.5 (14px)
  - Full width
- Secondary button:
  - Text color: gray-500
  - Hover: gray-900 + bg-gray-50
  - Padding: py-2.5
  - Full width
- Spacing between: gap-3
- Border top: gray-200

---

## Responsive Behavior

### Mobile (< 1024px)
- Single column layout
- Full-height bottom sheet
- Header: sticky at top
- Images: span full width
- Padding: p-5 throughout
- Rounded: top-3xl
- Swipe affordance bar visible

### Tablet (1024px - 1400px)
- Two-column layout
- Centered modal
- Max width: 5xl
- Header: sticky on right column
- Padding: lg:p-7

### Desktop (> 1400px)
- Two-column layout
- Same as tablet
- Generous whitespace
- Optimal reading width

---

## Animation Details

### Modal Entrance
- **Backdrop:** opacity fade, 300ms
- **Content:** scale (95% → 100%) + translateY (32px → 0), 300ms
- **Easing:** Default (ease-out)
- **Stagger:** None (simultaneous)

### Smooth Scrolling
- Scrollbar: thin, custom styled
- Color: gray-300 (light gray)
- Hover color: gray-400 (darker gray)
- Border radius: 3px (subtle rounding)

### Button Interactions
- Hover: color transition 300ms
- Click: no scale (avoid flash)
- Focus: ring-2, ring-[#2D7A5F], ring-offset-2

---

## Accessibility Features

✅ **Focus Management**
- Modal receives focus when opened
- Focus trap: keyboard nav stays within modal
- Focus restored to trigger element on close
- Visible focus ring on all focusable elements

✅ **Keyboard Navigation**
- Tab: cycles through focusable elements
- Shift+Tab: reverse cycle
- Enter/Space: activate buttons
- Escape: close modal
- No keyboard traps

✅ **ARIA Labels**
- `role="dialog"` on modal container
- `aria-modal="true"` when open
- `aria-labelledby` pointing to room name
- `aria-hidden="true"` on backdrop
- All buttons have descriptive text

✅ **Screen Reader Support**
- Semantic HTML (no divs pretending to be buttons)
- Headings for sections (h3)
- Text alternatives for icons
- Clear section hierarchy

✅ **Visual Accessibility**
- Sufficient color contrast (WCAG AA)
- Large touch targets (44x44px minimum)
- Clear focus indicators
- Readable font sizes (15px minimum body text)

---

## Data Structure

**Room Object Properties:**

```javascript
{
  id: 'mixed-dorm',                    // Unique identifier
  name: 'Mixed Dorm',                  // Room name (displays in header)
  vibe: 'Shared rooms, easy...',       // 1-line vibe (displays under name)
  
  // Modal-specific properties:
  images: [                             // Array of image URLs
    'https://...',
    'https://...'
  ],
  
  detailedDescription: [                // Array of paragraphs
    'Paragraph 1 explaining who it\'s for and what it feels like...',
    'Paragraph 2 with more details...',
    'Paragraph 3 with important notes...'
  ],
  
  amenities: [                          // Array of amenity keys
    'locker',
    'curtain',
    'light',
    'charging',
    'bathroom',
    'wifi'
  ],
  
  notes: [                              // Optional array of house notes
    'Social & friendly vibe',
    'Great for meeting people',
    'Common areas available 24/7'
  ]
}
```

---

## Amenity Keys Reference

| Key | Label | Icon |
|-----|-------|------|
| `locker` | Personal locker | ✓ |
| `curtain` | Privacy curtain | ✓ |
| `light` | Reading light | ✓ |
| `charging` | USB charging point | ✓ |
| `bathroom` | Clean shared bathroom | ✓ |
| `female` | Women-only space | ✓ |
| `wifi` | Fast WiFi | ✓ |
| `social` | Social atmosphere | ✓ |
| `quiet` | Quiet zones available | ✓ |
| `kitchen` | Shared kitchen | ✓ |

---

## Design System Integration

### Colors Used
- **Accent (Primary):** #2D7A5F (green)
- **Text (Primary):** #1A1A1A (dark)
- **Text (Secondary):** #6B7280 (gray)
- **Text (Tertiary):** #5E625A (muted gray)
- **Borders:** #E5E7EB (light gray)
- **Background (Hover):** #F9FAFB (very light gray)

### Typography
- **Header:** Font-semibold, 24px (mobile), 28px (desktop)
- **Section titles:** Font-semibold, 17px
- **Body text:** 15px (mobile), 16px (desktop)
- **Fine print:** 14px
- **Line height:** relaxed (1.625) for readability

### Spacing Scale
- **Padding (small):** p-2.5 (10px)
- **Padding (medium):** p-5 (20px)
- **Padding (large):** p-7 (28px)
- **Gap (small):** gap-2 (8px)
- **Gap (medium):** gap-3 (12px)
- **Gap (large):** gap-4 (16px)

### Shadows
- **Light:** shadow-sm (subtle, for cards)
- **Heavy:** shadow-2xl (for modal, prominent)

---

## Interaction States

### Close Button
- **Default:** gray-400, p-2, rounded-lg
- **Hover:** text-[#1A1A1A], bg-gray-100
- **Focus:** ring-2, ring-[#2D7A5F]

### Primary CTA
- **Default:** bg-[#1A1A1A], text-white
- **Hover:** bg-[#2D7A5F]
- **Focus:** ring-2, ring-[#2D7A5F], ring-offset-2

### Secondary Button (Close)
- **Default:** text-gray-500
- **Hover:** text-[#1A1A1A], bg-gray-50
- **Focus:** ring-2, ring-[#2D7A5F]

---

## Performance Considerations

- **Image Optimization:** Next.js Image component with quality=85
- **Lazy Rendering:** Modal only renders when isOpen
- **Focus Management:** Minimal DOM updates
- **Scrolling:** Smooth behavior with custom scrollbar
- **Animations:** GPU-accelerated (transform, opacity)

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ iOS Safari
- ✅ Chrome Mobile
- ⚠️ IE11 (not supported)

---

## Mobile Swipe Affordance

**Visual Indicator:**
- Top border: 4px solid #f3f4f6 (light gray)
- Background gradient: from light gray to white
- Suggests draggable interface

**Behavior:**
- Visible on mobile only (< 1024px)
- Pseudo-affordance (doesn't require swipe to close)
- ESC, click outside, or close button work on all devices

---

## Future Enhancement Ideas

1. **Share functionality** - Share room link
2. **360° tour** - Immersive room view
3. **Related rooms** - Suggestions carousel
4. **Reviews section** - Guest testimonials
5. **Availability calendar** - Real-time bookings
6. **Rating display** - Star ratings
7. **Video embeds** - Room walkthrough videos
8. **Save to wishlist** - Favorites button
9. **Chat integration** - Ask hostel questions
10. **Dynamic pricing** - Live price updates

---

## Customization Guide

### Change Modal Max Width
Find: `lg:max-w-5xl`
Recommended alternatives:
- `lg:max-w-4xl` = smaller
- `lg:max-w-6xl` = larger

### Change Image Column Width
Current: 50/50 split
To change: Update `lg:w-1/2` in image section
- `lg:w-2/5` = smaller images
- `lg:w-3/5` = larger images

### Change Header Height
Adjust: `p-5 lg:p-7`
- Less padding: `p-4 lg:p-6`
- More padding: `p-6 lg:p-8`

### Change Animation Speed
Find: `duration-300`
Replace with:
- `duration-200` = faster
- `duration-500` = slower

---

## Troubleshooting

### Modal not closing on ESC
- Check: `handleKeyDown` listener is attached
- Verify: `isOpen` state is being passed correctly

### Images not displaying
- Check: Image URLs are absolute (http/https)
- Verify: Images exist and are accessible
- Ensure: ImageGallery component is imported

### Scrolling jumps on mobile
- Issue: Body overflow might not be resetting
- Fix: Check cleanup in useEffect

### Header overlaps content
- Solution: Ensure `sticky top-0` is working
- Verify: No parent `overflow: hidden` on details section

---

## Code Example

```jsx
// Using the modal in RoomCard
const [isModalOpen, setIsModalOpen] = useState(false)

// Pass room data object
<RoomDetailModal
  room={roomData}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>

// Room data example:
const room = {
  id: 'mixed-dorm',
  name: 'Mixed Dorm',
  vibe: 'Shared rooms, easy conversations, people from everywhere',
  image: 'https://...',
  images: ['https://...', 'https://...'],
  amenities: ['locker', 'curtain', 'light', 'charging', 'bathroom', 'wifi'],
  notes: ['Social atmosphere', 'Great for meeting people'],
  detailedDescription: [
    'Our Mixed Dorm is the heart...',
    'Each bed comes equipped...',
    'Perfect for solo travelers...'
  ]
}
```

---

**Version:** 1.0  
**Last Updated:** January 7, 2026  
**Status:** Production Ready
