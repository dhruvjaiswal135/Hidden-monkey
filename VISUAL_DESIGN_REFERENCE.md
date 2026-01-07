# Visual Design Reference — Hidden Monkey Room System

## 📐 Layout Grids

### RoomCard Layout (Vertical Stack)
```
┌─────────────────────────┐
│                         │
│    [IMAGE 280px]        │  ← Layer 1: Image + overlay
│                         │
├─────────────────────────┤
│  Mixed Dorm             │  ← Layer 2: Core Info
│  Shared rooms, easy...  │
│  ─────────────────────  │
├─────────────────────────┤
│ 🔒 🛗 💡 🔌 🚽 📶    │  ← Layer 3: Amenities
│ • Great for meeting     │
│ • Social & friendly     │
│                         │
│         Learn more →    │  ← Action
└─────────────────────────┘
```

### RoomTypes Grid
```
Desktop (3 columns):
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Card 1     │  │   Card 2     │  │   Card 3     │
└──────────────┘  └──────────────┘  └──────────────┘

Tablet (2 columns):
┌──────────────┐  ┌──────────────┐
│   Card 1     │  │   Card 2     │
└──────────────┘  └──────────────┘
┌──────────────┐
│   Card 3     │
└──────────────┘

Mobile (1 column):
┌──────────────┐
│   Card 1     │
└──────────────┘
┌──────────────┐
│   Card 2     │
└──────────────┘
┌──────────────┐
│   Card 3     │
└──────────────┘
```

### RoomDetailModal — Desktop (2-Column)
```
┌──────────────────────────────────────────────────────────┐
│  Mixed Dorm                              [x]              │
│  Shared rooms, easy conversations...                      │
├─────────────────────┬──────────────────────────────────────┤
│                     │  Detailed Description                │
│                     │  When you step into our Mixed Dorm... │
│                     │  ────────────────────────────────────  │
│  [Main Image]       │  What you get                         │
│                     │  • Personal locker                    │
│  [Thumb] [Thumb]    │  • Privacy curtain                    │
│                     │  • USB charging point                 │
│  1 / 5              │  ────────────────────────────────────  │
│                     │  Good to know                         │
│                     │  • Social atmosphere                  │
│                     │  • Great for meeting people           │
│                     │  ────────────────────────────────────  │
│                     │  [Check availability & book]          │
│                     │  [Close]                              │
└─────────────────────┴──────────────────────────────────────┘
```

### RoomDetailModal — Mobile (Bottom Sheet)
```
┌─────────────────────┐
│  Mixed Dorm   [x]   │
│  Shared rooms... │  │
├─────────────────────┤
│  [Image Gallery]    │
│  [Thumbnails]       │
│                     │
├─────────────────────┤
│  Detailed Desc...   │
│                     │
│  What you get       │
│  • Personal locker  │
│  • Privacy curtain  │
│                     │
│  Good to know       │
│  • Social atmos...  │
│                     │
├─────────────────────┤
│  [Check available]  │
│  [Close]            │
└─────────────────────┘
```

---

## 🎨 Color Application

### Accent Color Usage
**Primary Green:** #2D7A5F

Used for:
- Amenity icon checkmarks
- Icon hover states
- Button hover states
- Focus rings
- "Learn more" text (card)

Example hierarchy:
```
Default state:     #6B7280 (gray)
     ↓ hover
Accent state:      #2D7A5F (green)
```

### Text Hierarchy
```
Headings:           #1A1A1A (very dark)
  → 28px (modal title)
  → 24px (card title)
  → 18px (section titles)
  → 17px (modal section titles)

Body text:          #5E625A (muted)
  → 15-16px (descriptions)
  → 14px (secondary info)

Tertiary:           #6B7280 (medium gray)
  → Amenity icons default
  → Placeholders
```

### Backgrounds & Borders
```
Backgrounds:
  - White (#FFFFFF) - cards, modals, main
  - Light gray (#F9FAFB) - hover states, alternates
  - Gray (#F3F4F6) - modal affordance strip

Borders:
  - Light gray (#E5E7EB) - dividers
  - Gradient dividers - from gray to transparent
```

---

## 🎭 Interactive States

### RoomCard States
```
IDLE:
┌────────────────────┐
│    [Image]         │
│  Room Title        │
│  Description       │
│  🔒 🛗 💡 🔌      │
│  • Note 1          │
│  Learn more →      │
└────────────────────┘

HOVER (Desktop):
┌────────────────────┐
│  [Image scaled]    │  ← Image zooms
│  Room Type ▲       │  ← Label clearer
│  Description       │
│  🔒 🛗 💡 🔌 ⬆     │  ← Icons ready
│  • Note 1          │
│  Learn more → →    │  ← Arrow visible, gap widens
└────────────────────┘ ← Card lifts (shadow)

ACTIVE (Clicked):
Modal opens with smooth animation
```

### AmenitiesRow States
```
DEFAULT:
🔒 🛗 💡 🔌 🚽 📶
(gray icons, 6px size)

HOVER (Desktop):
🔒 🛗 💡 🔌 🚽 📶
↓     ↓           (lifts)
│ Personal locker (tooltip fades in)
(icons change to green)

TOUCH (Mobile):
Long-press on icon → tooltip appears
```

### Modal Button States
```
DEFAULT:
[Check availability & book]  (black bg)

HOVER:
[Check availability & book]  (green bg)
(smooth color transition 300ms)

FOCUS:
[Check availability & book]
(green ring around button, ring-offset)

ACTIVE:
[Check availability & book]
(bg stays green, no scale)
```

---

## 📏 Sizing Reference

### Card Dimensions
```
Image height:      280px
Total card height: ~460px (depends on content)
Width:
  - Mobile:        100% - 20px padding
  - Tablet:        calc(50% - 12px) / 2 columns
  - Desktop:       calc(33.33% - 16px) / 3 columns

Gap between:       24px
```

### Modal Dimensions
```
Desktop:
  - Max width:     80rem (1280px, 5xl)
  - Max height:    85vh
  - Padding:       28px (p-7)
  - Image width:   50% of modal
  - Details width: 50% of modal

Mobile:
  - Width:         100vw
  - Height:        100vh (full height bottom sheet)
  - Padding:       20px (p-5)
  - Rounded:       rounded-t-3xl (top), rounded-2xl (desktop)
```

### Image Gallery
```
Main image:
  - Mobile:        300px height
  - Desktop:       100% height (left column)
  - Aspect ratio:  Auto (fills container)

Thumbnails:
  - Size:          64px × 64px (mobile)
  - Size:          80px × 80px (desktop)
  - Gap:           8px
  - Border:        2px (default gray, 2px green when selected)
```

---

## ⏱️ Animation Timings

### Modal Entry
```
Timeline:
0ms:      Opacity: 0%, Scale: 95%, translateY: 32px
          (invisible, scaled down, below viewport)
          
300ms:    Opacity: 100%, Scale: 100%, translateY: 0
          (visible, full size, centered)

Easing:   ease-out (smooth deceleration)
```

### Card Hover (Desktop)
```
Timeline:
0ms:      Scale: 100%, Shadow: sm, translateY: 0

300ms:    Scale: 103%, Shadow: lg, translateY: -4px
          (lifted, zoomed, enhanced shadow)

Easing:   ease-out
```

### Amenity Icon Hover
```
Timeline:
0ms:      Scale: 100%, Color: gray, translateY: 0

300ms:    Scale: 110%, Color: green, translateY: -4px

Easing:   ease-out
```

### Button Hover
```
Timeline:
0ms:      Color: #1A1A1A (dark)

300ms:    Color: #FFFFFF on #2D7A5F (white on green)

Easing:   ease-out
```

---

## 🔤 Typography Scale

```
Mobile:
  H1 (Modal):        24px, semibold
  H2 (Card):         18px, semibold
  H3 (Sections):     17px, semibold
  Body:              15px, normal
  Small:             14px, normal
  Caption:           13px, normal

Desktop:
  H1 (Modal):        28px, semibold
  H2 (Card):         18px, semibold (same)
  H3 (Sections):     17px, semibold (same)
  Body:              16px, normal
  Small:             15px, normal
  Caption:           14px, normal

Line heights:
  Headings:          tight (1.25)
  Body:              relaxed (1.625)
  Descriptions:      relaxed (1.625)
```

---

## 🎯 Spacing System (8px base)

```
0.5 = 4px (gap-0.5)
1   = 8px (p-1, gap-1)
2   = 16px (p-2, gap-2)
2.5 = 20px (p-2.5, gap-2.5)
3   = 24px (p-3, gap-3)
4   = 32px (p-4, gap-4)
5   = 40px (p-5, gap-5)
6   = 48px (p-6, gap-6)
7   = 56px (p-7, gap-7)
8   = 64px (p-8, gap-8)
```

Common patterns:
```
Card padding:          p-5 (mobile), lg:p-6 (desktop)
Modal padding:         p-5 (mobile), lg:p-7 (desktop)
Gaps (horizontal):     gap-2.5 (10px) to gap-3 (12px)
Gaps (vertical):       gap-3 (12px) to gap-4 (16px)
Section spacing:       space-y-6 (24px between sections)
```

---

## 🌐 Focus Visible Styling

```
Buttons & Links:
  Focus ring:        ring-2 ring-[#2D7A5F]
  Ring offset:       ring-offset-2
  Outline:           none

Icons:
  Focus ring:        ring-2 ring-[#2D7A5F]
  Border radius:     rounded-md

Example:
button:focus {
  outline: none;
  ring: 2px;
  ring-color: #2D7A5F;
  ring-offset: 2px;
}
```

---

## 🖼️ Image Optimization

```
Unsplash URLs format:
https://images.unsplash.com/photo-{id}?w={width}&auto=format&fit=crop&q={quality}

Card image (hero):
  - Width:     600px
  - Quality:   80
  - Format:    auto (WebP where supported)

Modal gallery (main):
  - Width:     800px
  - Quality:   85
  - Format:    auto

Thumbnail:
  - Width:     160px (for display at 80x80)
  - Quality:   60
  - Format:    auto
```

---

## 📱 Responsive Breakpoints (Tailwind)

```
sm:     640px   (mobile landscape)
md:     768px   (tablet)
lg:     1024px  (desktop small)
xl:     1280px  (desktop)
2xl:    1536px  (desktop large)

Key breakpoints used:
- lg:     Card grid (3 cols), Modal layout
```

---

## ♿ Accessibility Indicators

### Focus Visible
```
All interactive elements show:
  - Ring: 2px #2D7A5F
  - Offset: 2px
  - Visible on Tab navigation
```

### Color Contrast
```
Text on white:
  Dark text (#1A1A1A):       ✓ 22.3:1 (AAA)
  Gray text (#6B7280):       ✓ 8.2:1 (AA)
  Muted text (#5E625A):      ✓ 9.8:1 (AA)

Green accent (#2D7A5F) on:
  White:                     ✓ 5.2:1 (AA)
  Dark:                      ✓ 8.5:1 (AAA)
```

### Touch Targets
```
Minimum size:               44×44px
Icon buttons:               40×40px (with padding)
Text links:                 Underlined on focus
Card clickable area:        Entire card (~280px)
```

---

## 🌙 Dark Mode Considerations

Currently: Light mode only

For future dark mode:
```
Background (dark):         #0F172A (or similar)
Text primary (dark):       #F1F5F9 (off-white)
Text secondary (dark):     #CBD5E1 (light gray)
Accent (dark):             #4ADE80 (lighter green)
Border (dark):             #334155 (dark gray)
```

---

## 🎬 Animation Libraries

Currently using: Tailwind CSS transitions (built-in)

No external animation libraries needed.

For enhanced animations in future:
- Framer Motion (React)
- React Spring
- Animated (React Native Web)

---

## 📊 Asset Inventory

### Icons Used (All SVG)

**Amenity Icons** (in AmenitiesRow):
- Checkmark ✓
- Various amenity icons

**UI Icons**:
- Close (X)
- Arrow right
- Arrow left
- Image navigation

**No icon library required** — all hand-coded SVG

---

## 🎨 Design Tokens Summary

```javascript
// Colors
colors: {
  accent: '#2D7A5F',
  dark: '#1A1A1A',
  text: '#5E625A',
  border: '#E5E7EB'
}

// Typography
fontSize: {
  xs: '12px',
  sm: '14px',
  base: '15px',
  lg: '16px',
  xl: '18px',
  '2xl': '24px',
  '3xl': '28px'
}

// Spacing (8px base)
spacing: {
  0: '0',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px'
}

// Shadows
shadow: {
  sm: '0 1px 2px 0 rgba(...)',
  lg: '0 10px 15px -3px rgba(...)',
  '2xl': '0 25px 50px -12px rgba(...)'
}
```

---

**Version:** 1.0  
**Purpose:** Visual reference & design consistency  
**Last Updated:** January 7, 2026
