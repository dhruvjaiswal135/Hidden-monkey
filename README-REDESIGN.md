# Hidden Monkey redesign — code drop

Copy the `code/` tree over your repo root (paths mirror the project). Files here **replace** the originals.

## What changed
- **Fonts**: Inter → Barlow (body) + Barlow Condensed (display) via `next/font` in `app/layout.js`. Tailwind exposes `font-sans` / `font-display`.
- **Tokens** (`tailwind.config.js`): `teal`, `gold`, `jungle`, `ink`, `surface`, `line` + display sizes `text-d-hero|d-page|d-h2|d-h3`. Legacy names (sunset, sand, charcoal, border) are aliased so untouched components still compile.
- **Utilities** (`app/globals.css`): `.container-site .section .kicker .h2 .display .btn-gold|ink|teal|ghost .card .card-hover .chip .pill-on|off .field*`.
- **Header/Footer**: fixed header + 68px spacer, gold "Book a bed", mobile drawer, mobile sticky "Check availability" bar. Nav: Hostels · Homestays · Destinations · Experiences · Work & stay · Stories.
- **BookingContext**: new `stayType: 'hostel'|'homestay'` + `setStayType()`; exports `nightsBetween()`.
- **Content**: `content/homestays/index.js` (4 vetted homes — replace with real data).
- **Homepage** (`app/page.js`): Hero (stay-type switch, crossfade slides, live card, booking bar) → TrustStrip → Marquee → TwoWaysToStay → Destinations → WhyHiddenMonkey → RoomTypes → LifeAtMonkey → CommunityEvents → WorkFromParadise → MeetTheTribe → MiniFAQ.
- **Stays** (`components/features/stays/StaysPage.js`): sticky booking bar under header, room rows with 3-image mosaic + live totals + 20% deposit CTA, Homestays grid, comparison table, nomad passes, group banner, FAQ. Still uses your `RoomDetailModal`.

## Notes
- `generateFAQSchema` in `app/page.js` is guarded — add it to `lib/seo.js` if you want FAQ rich results.
- `BookingModal` should read `booking.stayType` to pick between `ALL_ROOMS` and `HOMESTAYS` in its room step.
- Remaining pages (Destinations, Experiences, Gallery, Blog, About, Contact, FAQ) follow the same utilities — ask and I'll generate them too.
