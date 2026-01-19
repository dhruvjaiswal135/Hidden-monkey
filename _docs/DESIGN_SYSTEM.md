# 🎨 Hidden Monkey Design System
## "Where Strangers Become Travel Family"

---

## 1. BRAND PERSONALITY

### Core Values
- **Adventurous** - For those who seek, not just travel
- **Warm & Friendly** - Home away from home
- **Creative & Artsy** - Every corner tells a story
- **Nomad-Centric** - Built by travelers, for travelers
- **Community-First** - People before profits

### Brand Voice
- Conversational, not corporate
- Inviting, not selling
- Storytelling, not listing
- Inclusive, not exclusive
- Playful but genuine

---

## 2. COLOR PALETTE

### Primary Colors
```
Jungle Dark     #0F2F2A    - Primary backgrounds, depth
Jungle Moss     #2B463F    - Secondary backgrounds, cards
Jungle Light    #3D5A50    - Hover states, accents
```

### Accent Colors
```
Sunset Gold     #EEA727    - Primary CTA, highlights
Sunset Orange   #E84D1B    - Hover states, urgency
Coral Soft      #FF8770    - Badges, soft accents
```

### Neutral Palette
```
Sand Light      #F4EFEA    - Page backgrounds
Sand Cream      #FAF7F4    - Cards, surfaces
Charcoal        #1E1F1C    - Primary text
Charcoal Light  #5E625A    - Secondary text
Border          #E6E4DF    - Dividers, borders
```

### Semantic Colors
```
Success         #4CAF50    - Available, confirmed
Warning         #FF9800    - Low availability
Error           #F44336    - Sold out, errors
Info            #2196F3    - Tips, information
```

---

## 3. TYPOGRAPHY

### Font Stack
```css
/* Display - Adventurous, hand-drawn feel */
--font-display: 'Outfit', 'Plus Jakarta Sans', sans-serif;

/* Body - Clean, readable */
--font-body: 'Inter', -apple-system, sans-serif;

/* Accent - Travel journal feel */
--font-accent: 'Caveat', 'Indie Flower', cursive;
```

### Type Scale
```
Hero XL        clamp(2.5rem, 6vw, 4.5rem)    - Landing headlines
Hero           clamp(2rem, 5vw, 3.5rem)       - Section heroes
H1             clamp(1.75rem, 4vw, 2.5rem)    - Page titles
H2             clamp(1.5rem, 3vw, 2rem)       - Section headers
H3             clamp(1.25rem, 2.5vw, 1.5rem)  - Card titles
Body Large     1.125rem / 18px                 - Lead paragraphs
Body           1rem / 16px                     - Default text
Small          0.875rem / 14px                 - Secondary text
XSmall         0.75rem / 12px                  - Labels, meta
```

---

## 4. SPACING SYSTEM

### Base Unit: 4px
```
space-1:  4px     - Tight spacing
space-2:  8px     - Between elements
space-3:  12px    - Card padding
space-4:  16px    - Section padding
space-6:  24px    - Component gaps
space-8:  32px    - Section margins
space-12: 48px    - Large gaps
space-16: 64px    - Section spacing
space-24: 96px    - Hero spacing
```

---

## 5. COMPONENT STYLES

### Cards
```css
/* Polaroid Style */
.card-polaroid {
  background: white;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 4px 4px 12px rgba(0,0,0,0.15);
  transform: rotate(-1deg to 2deg);
}

/* Modern Card */
.card-modern {
  background: #FAF7F4;
  border: 1px solid #E6E4DF;
  border-radius: 20px;
  padding: 24px;
}

/* Glass Card */
.card-glass {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 24px;
}
```

### Buttons
```css
/* Primary CTA */
.btn-primary {
  background: linear-gradient(135deg, #EEA727 0%, #E84D1B 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(238,167,39,0.3);
}

/* Secondary */
.btn-secondary {
  background: #0F2F2A;
  color: white;
  border-radius: 50px;
}

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 2px solid #E6E4DF;
  color: #1E1F1C;
  border-radius: 50px;
}
```

### Tags & Badges
```css
/* Vibe Tag */
.tag-vibe {
  background: #F4EFEA;
  color: #5E625A;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 12px;
}

/* Country Flag Badge */
.badge-country {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: white;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
```

---

## 6. ICONOGRAPHY

### Style Guidelines
- **Line weight**: 1.5-2px stroke
- **Style**: Rounded corners, friendly
- **Size**: 20px (sm), 24px (md), 32px (lg)
- **Color**: Inherit from parent or #5E625A

### Icon Categories
- **Travel**: Passport, backpack, compass, map pin, plane
- **Community**: People, heart, chat, campfire, guitar
- **Amenities**: WiFi, bed, locker, shower, coffee
- **Nature**: Mountain, leaf, sun, moon, star

### Custom Illustrations
- Hand-drawn style stamps
- Passport-style visa marks
- Travel stickers (retro feel)
- Doodle decorations

---

## 7. ANIMATION PHILOSOPHY

### Core Principles
- **Subtle** - Enhance, don't distract
- **Purposeful** - Every motion has meaning
- **Fast** - 200-400ms for micro-interactions
- **Smooth** - Ease-out for natural feel

### Motion Tokens
```css
/* Timing */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 400ms;
--duration-slower: 600ms;

/* Easing */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Animation Patterns
```
Fade In Up      - Content reveal on scroll
Stagger         - Cards appearing sequentially
Hover Lift      - Cards raising on hover
Parallax        - Subtle depth on scroll
Float           - Gentle floating decorations
Pulse           - Availability indicators
```

---

## 8. IMAGERY GUIDELINES

### Photo Style
- **Authentic**: Real travelers, real moments
- **Warm tones**: Golden hour preferred
- **Action**: People interacting, not posing
- **Environmental**: Show the space in use

### Treatment
- Slight warmth filter
- Rounded corners (16-24px)
- Optional: Polaroid frame overlay
- Hover: Subtle zoom (1.02-1.05x)

### Aspect Ratios
```
Hero: 16:9 or 21:9
Cards: 4:3 or 3:4 (portrait)
Gallery: Mixed masonry
Avatars: 1:1 circle
```

---

## 9. LAYOUT PATTERNS

### Grid System
```
Mobile:  4 columns, 16px gutter
Tablet:  8 columns, 24px gutter
Desktop: 12 columns, 32px gutter
Max-width: 1400px centered
```

### Section Padding
```
Mobile:  py-12 (48px)
Tablet:  py-16 (64px)
Desktop: py-24 (96px)
```

### Container Widths
```
--container-sm: 640px   - Blog content
--container-md: 768px   - Forms
--container-lg: 1024px  - Standard
--container-xl: 1280px  - Wide
--container-2xl: 1400px - Full
```

---

## 10. SPECIAL ELEMENTS

### Travel Stickers (Floating)
- Passport stamps
- "Verified Backpacker" badges
- Country flag pins
- Hand-drawn arrows
- Sticky notes with quotes

### Paper Textures
- Subtle noise overlay (2-4% opacity)
- Torn paper edges for sections
- Notebook lines for quotes
- Vintage postcard borders

### Interactive Elements
- World map with pins
- Traveler wall with photos
- Live availability indicators
- Message board snippets
- Ambient sound toggle

---

## 11. RESPONSIVE BREAKPOINTS

```css
/* Mobile First */
sm:  640px   - Landscape phones
md:  768px   - Tablets
lg:  1024px  - Laptops
xl:  1280px  - Desktops
2xl: 1536px  - Large screens
```

---

## 12. ACCESSIBILITY

### Color Contrast
- All text meets WCAG AA (4.5:1 minimum)
- Interactive elements: 3:1 minimum
- Focus states always visible

### Motion
- Respect `prefers-reduced-motion`
- Pause animations on hover (where applicable)
- No auto-playing videos by default

### Typography
- Minimum 16px body text
- Line height 1.5-1.6 for readability
- Max line length: 70 characters

---

*Design System v2.0 - Hidden Monkey*
*"Community is the hero. Emotion is the design driver."*
