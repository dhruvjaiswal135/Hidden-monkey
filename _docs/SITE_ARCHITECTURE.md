# 🗺️ Hidden Monkey - Site Architecture & Component Inventory

---

## SITEMAP

```
/                           → Home (Landing Page)
├── /stays                  → Rooms & Accommodation
│   └── /stays/[room-slug]  → Individual Room Detail
├── /community              → The Tribe (Core USP)
│   ├── /community/wall     → Traveler Wall
│   └── /community/events   → Upcoming Events
├── /experiences            → Activities & Adventures
│   └── /experiences/[slug] → Experience Detail
├── /work                   → Digital Nomad Section
├── /destinations           → All Locations
│   └── /destinations/[city]→ City-specific Hostel
├── /about                  → Our Story
├── /blog                   → Travel Stories
│   └── /blog/[slug]        → Blog Post
├── /gallery                → Full Photo Gallery
├── /contact                → Get in Touch
└── /book                   → Booking Flow
```

---

## PAGE COMPONENTS BREAKDOWN

### 🏠 HOME PAGE (`/`)

#### Hero Section
```
components/sections/Hero.js (Enhanced)
├── HeroBackground (Video/Image Slider)
├── HeroContent
│   ├── MicroLabel ("it's time to travel differently")
│   ├── MainHeadline ("Don't just stay. Live with the tribe.")
│   ├── SubText
│   ├── CTAGroup (Explore Stays, Join Tribe)
│   └── SocialProof (Avatars + Count)
├── FloatingSearchCard (Desktop)
├── FloatingStickers (Decorative)
└── MobileBookingBar (Sticky bottom)
```

#### Why Hidden Monkey Section
```
components/sections/WhyHiddenMonkey.js (Enhanced)
├── SectionHeader
├── FeatureCardsScroll
│   └── FeatureCard (x6)
│       ├── Image
│       ├── Title
│       └── Description
└── FloatingDecorations
```

#### Life at Hidden Monkey (NEW)
```
components/sections/LifeAtMonkey.js
├── SectionHeader
├── InstagramGrid
│   └── MomentCard (x8-12)
│       ├── Image
│       ├── HoverOverlay
│       │   ├── Caption
│       │   └── Tags
│       └── LikeCount
└── ViewMoreCTA
```

#### What a Day Looks Like
```
components/sections/DayLookLike.js (Enhanced)
├── SectionHeader
├── TimelineGrid
│   └── MomentCard (Morning, Afternoon, Evening, Night)
│       ├── TimeLabel
│       ├── Image
│       └── Description
└── ConnectingLine (Decorative)
```

#### Meet the Tribe (Testimonials Enhanced)
```
components/sections/MeetTheTribe.js
├── SectionHeader
├── TestimonialScroll
│   └── TestimonialCard
│       ├── QuoteMark
│       ├── Quote
│       ├── Avatar
│       ├── Name
│       ├── CountryFlag
│       └── TravelDates
└── WorldMapPreview (Interactive)
```

#### Upcoming Community Events (NEW)
```
components/sections/CommunityEvents.js
├── SectionHeader
├── EventsGrid
│   └── EventCard
│       ├── Image
│       ├── DateBadge
│       ├── Title
│       ├── Description
│       └── JoinButton
└── ViewAllCTA
```

#### Work from Paradise (NEW)
```
components/sections/WorkFromParadise.js
├── SectionHeader
├── FeatureGrid
│   ├── WiFiSpeedBadge
│   ├── CoworkingPhotos
│   └── TestimonialMini
├── NomadAvatars ("Nomads currently here")
└── LearnMoreCTA
```

#### Destinations Section
```
components/sections/Destinations.js (Enhanced)
├── SectionHeader
├── DestinationCards
│   └── DestinationCard
│       ├── Image
│       ├── Name
│       ├── Vibe
│       ├── Tags
│       └── BuildingsPreview
└── ViewAllCTA
```

#### Gallery Teaser
```
components/sections/Gallery.js (Enhanced)
├── SectionHeader
├── MasonryGrid (6-8 images)
│   └── GalleryImage
│       ├── Image
│       └── HoverZoom
├── Lightbox (Modal)
└── ViewAllCTA
```

#### Stay Options
```
components/sections/RoomTypes.js (Enhanced)
├── SectionHeader
├── RoomCardsGrid
│   └── RoomCard
│       ├── ImageCarousel
│       ├── Name
│       ├── Vibe
│       ├── AmenityIcons
│       ├── PriceTag
│       └── ViewDetails
├── RoomDetailModal
└── Reassurance
```

#### Final CTA
```
components/sections/CTA.js (Enhanced)
├── Background (Gradient/Image)
├── Headline
├── CTAs (Primary + Secondary)
└── SocialProof
```

---

### 👥 COMMUNITY PAGE (`/community`)

```
pages/community/page.js
├── CommunityHero
│   ├── Title ("The Heart of Hidden Monkey")
│   ├── Subtitle
│   └── Stats (Countries, Travelers, Stories)
│
├── TravelerWall
│   ├── MasonryGrid
│   │   └── TravelerCard
│   │       ├── Photo
│   │       ├── Name
│   │       ├── Country
│   │       ├── TravelQuote
│   │       └── StayDates
│   └── LoadMoreButton
│
├── WorldMap (Interactive)
│   ├── MapCanvas
│   ├── CountryPins
│   └── HoverTooltips
│
├── CommunityTimeline
│   ├── TimelineItem
│   │   ├── Date
│   │   ├── EventType (Bonfire, Trek, Music)
│   │   ├── Photo
│   │   └── Description
│   └── LoadMore
│
├── FindYourTribe
│   ├── TribeCard (Solo Travelers)
│   ├── TribeCard (Digital Nomads)
│   └── TribeCard (Backpacker Groups)
│
├── MessageBoard
│   ├── MessageCard
│   │   ├── Avatar
│   │   ├── Message
│   │   ├── Timestamp
│   │   └── ReplyButton
│   └── PostMessageCTA
│
└── JoinTheTribeCTA
```

---

### 🛏️ ROOMS PAGE (`/stays`)

```
pages/stays/page.js
├── StaysHero
│   ├── Title ("Choose Your Vibe")
│   └── FilterBar (Room Type, Price, Amenities)
│
├── RoomGrid
│   └── RoomCard (Enhanced)
│       ├── ImageCarousel
│       ├── AvailabilityBadge
│       ├── Name
│       ├── VibeTags
│       ├── AmenityIcons
│       ├── PricePerNight
│       ├── WhoStaysHere (Traveler Avatars)
│       └── BookNowButton
│
├── ComparisonTable (Optional)
│
└── FAQAccordion
```

#### Room Detail Page (`/stays/[slug]`)
```
├── RoomHero
│   └── ImmersiveGallery
│
├── RoomInfo
│   ├── Name
│   ├── Vibe
│   ├── DetailedDescription
│   ├── AmenitiesGrid (Animated Icons)
│   └── WhoStaysHereBadges
│
├── StickyBookingWidget (Sidebar)
│   ├── DatePicker
│   ├── GuestCount
│   ├── PriceBreakdown
│   └── BookButton
│
├── GuestReviews
│
└── SimilarRooms
```

---

### 🎒 EXPERIENCES PAGE (`/experiences`)

```
pages/experiences/page.js
├── ExperiencesHero
│   ├── Title ("More Than Just a Stay")
│   └── CategoryTabs
│
├── ExperienceGrid
│   └── ExperienceCard
│       ├── Image
│       ├── Category (Trek, Yoga, Café Night)
│       ├── Title
│       ├── Duration
│       ├── Description
│       └── JoinButton
│
└── CustomExperienceCTA
```

---

### 💻 WORK PAGE (`/work`)

```
pages/work/page.js
├── WorkHero
│   ├── Title ("Nomad Paradise")
│   └── WiFiSpeedBadge (Live)
│
├── CoworkingFeatures
│   ├── FeatureCard (High-Speed WiFi)
│   ├── FeatureCard (Quiet Zones)
│   ├── FeatureCard (Power Outlets)
│   └── FeatureCard (Community)
│
├── CoworkingGallery
│
├── NomadTestimonials
│
├── NomadsHereNow
│   └── AnonymizedAvatars
│
├── WeeklyCalendar
│   └── EventSlot
│
└── BookCoworkingSpot
```

---

### 📖 ABOUT PAGE (`/about`)

```
pages/about/page.js
├── AboutHero
│   ├── Title ("The Story of Hidden Monkey")
│   └── FounderImage
│
├── FounderStory
│   ├── TextBlock
│   └── Quote
│
├── WhyHiddenMonkey
│   ├── NameOrigin
│   └── Mission
│
├── Timeline
│   └── YearMilestone
│       ├── Year
│       ├── Title
│       └── Description
│
├── TeamSection
│   └── TeamMember
│
└── JoinUsMessage
```

---

## REUSABLE UI COMPONENTS

### Atoms (Base)
```
components/ui/
├── Badge.js          - Status/category badges
├── Button.js         - Primary, Secondary, Ghost, Icon
├── Card.js           - Base card wrapper
├── Container.js      - Max-width wrapper
├── Icon.js           - Icon wrapper with sizing
├── Input.js          - Form inputs
├── Modal.js          - Base modal
├── Section.js        - Section wrapper with spacing
├── Skeleton.js       - Loading states
├── Textarea.js       - Multi-line input
└── Tooltip.js        - Hover tooltips
```

### Molecules (Composed)
```
components/features/
├── AmenityIcon.js        - Animated amenity icons
├── AvatarStack.js        - Overlapping avatars
├── CountryFlag.js        - Flag with country name
├── DatePicker.js         - Calendar picker
├── EventCard.js          - Community event card
├── ExperienceCard.js     - Activity card
├── GuestCounter.js       - +/- guest selector
├── ImageCarousel.js      - Swipeable images
├── MessageCard.js        - Message board item
├── PriceTag.js           - Price display
├── RoomCard.js           - Room preview card
├── SearchBar.js          - Location/date search
├── SocialProof.js        - Avatar + stats
├── TestimonialCard.js    - Review card
├── TravelerCard.js       - Community wall card
├── VibeTag.js            - Mood/vibe badge
└── WorldMapPin.js        - Map marker
```

### Organisms (Complex)
```
components/sections/
├── Hero.js
├── WhyHiddenMonkey.js
├── LifeAtMonkey.js       (NEW)
├── DayLookLike.js
├── MeetTheTribe.js       (NEW)
├── CommunityEvents.js    (NEW)
├── WorkFromParadise.js   (NEW)
├── Destinations.js
├── Gallery.js
├── RoomTypes.js
├── CTA.js
└── Blog.js
```

### Layout
```
components/layout/
├── Header.js         - Floating nav
├── Footer.js         - Site footer
├── MobileNav.js      - Mobile menu
├── PageWrapper.js    - Page transition wrapper
└── Sidebar.js        - Booking sidebar
```

### Modals
```
components/modals/
├── BookingModal.js
├── GalleryLightbox.js
├── LoginModal.js
├── MessageModal.js
├── RoomDetailModal.js
└── SearchModal.js
```

---

## ANIMATION COMPONENTS

```
components/animations/
├── FadeInUp.js       - Scroll reveal
├── FloatingSticker.js - Decorative float
├── Parallax.js       - Parallax wrapper
├── SlideIn.js        - Horizontal slide
├── Stagger.js        - Staggered children
└── PageTransition.js - Route transitions
```

---

## HOOKS

```
lib/hooks/
├── useIntersectionObserver.js
├── useMediaQuery.js
├── useScrollPosition.js
├── useLocalStorage.js
└── useAnimationFrame.js
```

---

## DATA STRUCTURE

```
content/
├── rooms/
│   ├── index.js
│   └── rooms.js
├── destinations/
│   ├── index.js
│   └── destinations.js
├── experiences/
│   ├── index.js
│   └── experiences.js
├── testimonials/
│   ├── index.js
│   └── testimonials.js
├── events/
│   ├── index.js
│   └── events.js
├── team/
│   ├── index.js
│   └── team.js
└── images/
    ├── gallery.js
    ├── rooms.js
    └── index.js
```

---

## PRIORITY IMPLEMENTATION ORDER

### Phase 1: Foundation ✅
1. Design system setup (tailwind.config.js)
2. Global styles (globals.css)
3. Base UI components
4. Layout components (Header, Footer)

### Phase 2: Home Page (Current)
1. Enhanced Hero with floating stickers
2. Why Hidden Monkey with animations
3. Life at Monkey (Instagram grid)
4. Day Look Like timeline
5. Meet the Tribe testimonials
6. Community Events preview
7. Work from Paradise teaser
8. Enhanced Gallery
9. Room Types with modals
10. Final CTA

### Phase 3: Core Pages
1. Community Page (The Tribe)
2. Stays Page + Room Detail
3. Experiences Page
4. Work Page (Digital Nomads)

### Phase 4: Secondary Pages
1. About Page
2. Destinations with cities
3. Blog system
4. Contact Page

### Phase 5: Advanced Features
1. Booking system (Backend)
2. User profiles
3. Interactive world map
4. Message board
5. Admin panel

---

*Architecture v2.0 - Hidden Monkey*
