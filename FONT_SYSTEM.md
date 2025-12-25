# Hidden Monkey Hostel - Font System

## Typography Strategy
A clean, minimal, and authentic design system for backpacker travelers using a single font family for maximum consistency and simplicity.

---

## Font Family

### **Inter** (Sans-serif)
- **Usage**: Everything - headings, body text, UI elements, navigation, forms
- **Character**: Clean, modern, highly readable, approachable
- **Class**: `font-sans` (or no class as it's the default)
- **Why Inter only**: 
  - Consistent brand voice across all content
  - Faster load times with single font family
  - Modern, honest aesthetic that fits backpacker culture
  - Excellent readability at all sizes
  - Supports wide range of weights (100-900)

---

## Font Weight System

| Weight | Class | Usage |
|--------|-------|-------|
| 300 | `font-light` | Body text, descriptions, secondary info, amenity lists |
| 400 | `font-normal` | Headings, navigation links, default text |
| 500 | `font-medium` | Buttons, input fields, labels, badges |
| 600 | `font-semibold` | CTAs, important links, sub-headings |
| 700 | `font-bold` | Stats, numbers, brand name, emphasis |

---

## Component-Specific Guidelines

### 1. **Headings**
```jsx
// H1 - Hero / Main Page Title
<h1 className="font-sans font-normal text-[48-72px]">

// H2 - Section Headers
<h2 className="font-sans font-normal text-[36-56px]">

// H3 - Card Titles / Feature Names
<h3 className="font-sans font-normal text-[24-40px]">

// H4 - Small Headings / Labels
<h4 className="font-light uppercase tracking-wider text-[11-13px]">
```

### 2. **Body Text**
```jsx
// Primary descriptions
<p className="font-light text-[14-16px]">

// Secondary text
<p className="font-light text-[13-14px] text-gray-600">

// Captions / Meta info
<span className="font-light text-[11-12px]">
```

### 3. **Navigation**
```jsx
// Main nav links
<a className="font-normal text-[15px]">

// Mobile nav
<a className="font-normal text-[16px]">
```

### 4. **Buttons**
```jsx
// Primary CTA
<button className="font-semibold text-[14-15px]">

// Secondary button
<button className="font-medium text-[13-14px]">

// Text-only button
<button className="font-light text-[13-14px]">
```

### 5. **Forms**
```jsx
// Input fields
<input className="font-medium text-[14px]">

// Placeholders (keep font-medium for inputs)
placeholder="..." // Inherits input font

// Labels
<label className="font-medium text-[12-13px] uppercase">
```

### 6. **Cards & Features**
```jsx
// Feature title
<h3 className="font-sans font-normal text-[24-32px]">

// Feature description
<p className="font-light text-[13-15px]">

// Tags / Badges
<span className="font-medium text-[11-12px]">
```

### 7. **Stats & Numbers**
```jsx
// Large numbers
<span className="font-bold text-[32-48px]">

// Number labels
<span className="font-light text-[11-12px]">
```

### 8. **Footer**
```jsx
// Section headings
<h4 className="font-semibold text-[12px] uppercase">

// Links
<a className="font-light text-[13px]">

// Copyright
<p className="font-light text-[13px]">
```

---

## Key Principles

### ✅ **DO:**
- Use `font-sans` or no font class for all headings (Inter is default)
- Use `font-light` for most body text (minimal feel)
- Use `font-normal` for headings
- Use `font-semibold` or `font-bold` for CTAs and emphasis
- Keep consistent weights across similar components
- Use Inter for everything to maintain brand consistency

### ❌ **DON'T:**
- Use `font-serif` (removed from project - only Inter now)
- Mix font families
- Use different weights for same purpose
- Use font-regular (doesn't exist in Tailwind)
- Add additional font families without discussion

---

## Current Status

**Single Font Family Implementation:**
- ✅ Removed Playfair Display from project
- ✅ All components use Inter (font-sans)
- ✅ Updated layout.js to only import Inter
- ✅ Updated tailwind.config.js to remove serif definitions
- ✅ Replaced all font-serif instances with font-sans
- ✅ Consistent typography across entire site

---

## Examples

### Perfect Section Header
```jsx
<h2 className="font-sans text-[#1A1A1A] text-[48px] font-normal mb-3 leading-tight">
  Explore Our Spaces
</h2>
<p className="text-[#6B7280] text-[16px] font-light leading-relaxed">
  From vibrant dorms to peaceful private rooms
</p>
```

### Perfect Button
```jsx
<button className="bg-[#2D7A5F] text-white px-6 py-3 rounded-full font-semibold text-[14px]">
  Reserve This Space
</button>
```

### Perfect Card
```jsx
<div>
  <h3 className="font-sans text-[32px] font-normal mb-2">
    Mixed Dormitory
  </h3>
  <p className="text-[14px] font-light text-gray-600 mb-4">
    Budget-friendly comfort with shared spaces
  </p>
  <span className="font-medium text-[11px] uppercase tracking-wide">
    From ₹399/night
  </span>
</div>
```

---

## Migration Notes

**What Changed:**
- All `font-serif` replaced with `font-sans` across the project
- Removed Playfair Display font import from layout.js
- Removed serif and heading font families from tailwind.config.js
- Updated all component files and page files
- Maintained same font sizes and weights for consistency

**Why Single Font:**
- Authentic backpacker aesthetic - honest and approachable
- Faster performance - single font family to load
- Consistent brand voice across all touchpoints
- Simplified developer decisions - no serif vs sans choices
- Inter handles both headings and body text beautifully

