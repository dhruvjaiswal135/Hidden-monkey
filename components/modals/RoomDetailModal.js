'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ─── Amenity SVG icons ────────────────────────────────────── */
const AmenityIcon = ({ k }) => {
  const icons = {
    locker: <path d="M5 11V7a7 7 0 0114 0v4M3 11h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V11zm9 4v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}/>,
    curtain: <><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.8}/><path d="M12 3v18" strokeWidth={1.8} strokeLinecap="round"/></>,
    light: <path d="M9 21h6M12 3a6 6 0 016 6c0 2.5-1.4 4.7-3.5 5.8V16h-5v-1.2A6 6 0 0112 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}/>,
    charging: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}/>,
    bathroom: <><path d="M4 12h16" strokeWidth={1.8} strokeLinecap="round"/><path d="M4 12v4a6 6 0 0012 0v-4" strokeWidth={1.8} strokeLinecap="round"/><path d="M7 12V5a2 2 0 012-2h1" strokeWidth={1.8} strokeLinecap="round"/></>,
    wifi: <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}/>,
    kitchen: <><path d="M3 3h18v18H3z" strokeWidth={1.8} strokeLinecap="round"/><path d="M3 9h18M9 9v12" strokeWidth={1.8} strokeLinecap="round"/></>,
    female: <><circle cx="12" cy="8" r="4" strokeWidth={1.8}/><path d="M12 12v8M9 17h6" strokeLinecap="round" strokeWidth={1.8}/></>,
    ac: <><path d="M12 2v20M2 12h20" strokeLinecap="round" strokeWidth={1.8}/><path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" strokeLinecap="round" strokeWidth={1.8}/></>,
    towel: <><rect x="3" y="3" width="18" height="4" rx="1" strokeWidth={1.8}/><path d="M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" strokeLinecap="round" strokeWidth={1.8}/></>,
  }
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[k] || <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}/>}
    </svg>
  )
}

/* ─── Static data ──────────────────────────────────────────── */
const AMENITY_DETAILS = {
  locker:   { name: 'Personal Locker',  desc: 'Secure storage for valuables' },
  curtain:  { name: 'Privacy Curtain',  desc: 'Your own pod privacy' },
  light:    { name: 'Reading Light',    desc: 'Individual bedside light' },
  charging: { name: 'Charging Points',  desc: 'USB & power at every bed' },
  bathroom: { name: 'Clean Bathrooms',  desc: 'Cleaned multiple times daily' },
  wifi:     { name: 'Fast WiFi',        desc: '100+ Mbps everywhere' },
  kitchen:  { name: 'Shared Kitchen',   desc: 'Cook your own meals anytime' },
  female:   { name: 'Women Only',       desc: 'Safe, women-focused space' },
  ac:       { name: 'Air Conditioning', desc: 'Climate-controlled comfort' },
  towel:    { name: 'Towels',           desc: 'Fresh towels included' },
}

const EXPECTATIONS = {
  'mixed-dorm':   ['Meet travelers from 20+ countries', 'Easy conversations start naturally', 'Quiet hours after 11 PM', 'Complimentary breakfast included'],
  'female-dorm':  ['Keycard access for added security', 'Supportive women-only community', 'Extra vanity area with good lighting', 'Complimentary breakfast included'],
  'private-room': ['Queen-size bed with premium bedding', 'Private attached bathroom', 'Access to all community spaces', 'Complimentary breakfast included'],
}

const HOUSE_RULES = [
  'Check-in from 2 PM · Check-out by 11 AM',
  'Quiet hours 11 PM – 7 AM',
  'No smoking inside the property',
  'ID required at check-in',
  'Guests must be registered at front desk',
]

const SOCIAL = ['AU', 'DE', 'US', 'FR', 'BR']

const PRICE_MAP = {
  'mixed-dorm': 499,
  'female-dorm': 549,
  'private-room': 1499,
}

/* ─── Full-screen photo gallery overlay ─────────────────────── */
function PhotoGallery({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex)
  const total = images.length
  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIdx(i => (i + 1) % total), [total])

  useEffect(() => {
    const fn = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [next, prev, onClose])

  return (
    <div className="fixed inset-0 z-[70] bg-black flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 shrink-0">
        <span className="text-white/60 text-sm tabular-nums">{idx + 1} / {total}</span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close gallery"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* Main viewer */}
      <div className="flex-1 relative flex items-center justify-center px-14 pb-4">
        <div className="relative w-full h-full">
          <Image
            key={idx}
            src={images[idx]}
            alt={`Photo ${idx + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
            unoptimized
          />
        </div>

        {/* Nav arrows */}
        {total > 1 && (
          <>
            <button onClick={prev} aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button onClick={next} aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip — all images */}
      {total > 1 && (
        <div className="shrink-0 px-6 pb-5">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide justify-center">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-200 ${
                  i === idx
                    ? 'w-20 h-14 ring-2 ring-sunset-gold ring-offset-2 ring-offset-black'
                    : 'w-16 h-12 opacity-50 hover:opacity-80'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" unoptimized />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Main modal ─────────────────────────────────────────────── */
export default function RoomDetailModal({ room, isOpen, onClose }) {
  const [imgIdx, setImgIdx] = useState(0)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryStart, setGalleryStart] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setImgIdx(0)
      requestAnimationFrame(() => setMounted(true))
      document.body.style.overflow = 'hidden'
    } else {
      setMounted(false)
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const fn = e => {
      if (galleryOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setImgIdx(i => (i + 1) % (room?.images?.length || 1))
      if (e.key === 'ArrowLeft') setImgIdx(i => (i - 1 + (room?.images?.length || 1)) % (room?.images?.length || 1))
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [isOpen, galleryOpen, room, onClose])

  const openGallery = (i = imgIdx) => {
    setGalleryStart(i)
    setGalleryOpen(true)
  }

  if (!isOpen && !mounted) return null
  if (!room) return null

  const images = room.images?.length ? room.images : [room.image]
  const price = PRICE_MAP[room.id] || 599
  const expectations = EXPECTATIONS[room.id] || EXPECTATIONS['mixed-dorm']

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-[2px] transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* ── Modal shell ── */}
      <div
        className={`fixed inset-3 md:inset-6 lg:inset-10 z-50 bg-white rounded-[28px] overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${mounted ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.96] translate-y-5'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">

          {/* ─── HERO GALLERY ─── */}
          <div className="relative h-[280px] md:h-[400px] lg:h-[460px] cursor-pointer" onClick={() => openGallery(imgIdx)}>
            <Image
              src={images[imgIdx]}
              alt={room.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              unoptimized
            />
            {/* Gradient bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Nav arrows on desktop */}
            {images.length > 1 && (
              <>
                <button
                  onClick={e => { e.stopPropagation(); setImgIdx(i => (i - 1 + images.length) % images.length) }}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow transition-colors z-10"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button
                  onClick={e => { e.stopPropagation(); setImgIdx(i => (i + 1) % images.length) }}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full items-center justify-center shadow transition-colors z-10"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </>
            )}

            {/* Bottom overlays */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 flex items-end justify-between z-10 pointer-events-none">
              {/* Room name badge */}
              <span className="inline-flex items-center gap-2 bg-white/95 text-charcoal text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                {room.name}
              </span>

              {/* Photo count + "View all" */}
              <button
                onClick={e => { e.stopPropagation(); openGallery(imgIdx) }}
                className="pointer-events-auto inline-flex items-center gap-1.5 bg-black/40 border border-white/20 hover:bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
                {images.length} photos
              </button>
            </div>

            {/* Dot indicator */}
            {images.length > 1 && (
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
                {images.map((_, i) => (
                  <span key={i} className={`h-1 rounded-full transition-all duration-300 ${i === imgIdx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`} />
                ))}
              </div>
            )}
          </div>

          {/* ─── THUMBNAIL STRIP ─── */}
          {images.length > 1 && (
            <div className="px-5 md:px-8 pt-4 pb-1">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-200 ${
                      i === imgIdx
                        ? 'w-20 h-[52px] ring-2 ring-sunset-gold ring-offset-1'
                        : 'w-16 h-[42px] opacity-55 hover:opacity-85'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" unoptimized />
                  </button>
                ))}
                {/* "See all" button */}
                <button
                  onClick={() => openGallery(0)}
                  className="flex-shrink-0 w-16 h-[42px] rounded-xl bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center gap-0.5 hover:bg-neutral-200 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-charcoal-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                  </svg>
                  <span className="text-[9px] text-charcoal-muted font-medium">All</span>
                </button>
              </div>
            </div>
          )}

          {/* ─── CONTENT ─── */}
          <div className="px-5 md:px-8 lg:px-12 pt-7 pb-10">

            {/* Title row */}
            <div className="flex items-start justify-between gap-4 mb-1">
              <h2 className="text-[28px] md:text-[34px] font-bold text-charcoal leading-tight tracking-tight">{room.name}</h2>
              <div className="flex items-center gap-0.5 shrink-0 mt-1.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="text-sm text-charcoal-muted ml-1">4.9</span>
              </div>
            </div>

            <p className="text-charcoal-muted text-[15px] leading-relaxed mb-8 border-b border-neutral-100 pb-8">{room.vibe}</p>

            {/* About */}
            {room.detailedDescription?.length > 0 && (
              <div className="mb-8">
                <p className="text-[10px] font-bold text-charcoal uppercase tracking-[0.18em] mb-4">About this space</p>
                <div className="space-y-3">
                  {room.detailedDescription.map((p, i) => (
                    <p key={i} className="text-[14.5px] text-charcoal-muted leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            {room.amenities?.length > 0 && (
              <div className="mb-8">
                <p className="text-[10px] font-bold text-charcoal uppercase tracking-[0.18em] mb-4">What&apos;s included</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {room.amenities.map((k, i) => {
                    const a = AMENITY_DETAILS[k]
                    if (!a) return null
                    return (
                      <div key={i} className="flex items-center gap-3 bg-[#F4EFEA] rounded-2xl px-4 py-3.5">
                        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shrink-0 text-charcoal shadow-sm">
                          <AmenityIcon k={k} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[12.5px] font-semibold text-charcoal leading-none mb-0.5 truncate">{a.name}</p>
                          <p className="text-[11px] text-charcoal-muted leading-snug">{a.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Expect + Rules side by side */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-neutral-100">
              <div>
                <p className="text-[10px] font-bold text-charcoal uppercase tracking-[0.18em] mb-4">What to expect</p>
                <ul className="space-y-3">
                  {expectations.map((txt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-charcoal flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      </span>
                      <span className="text-[13.5px] text-charcoal leading-snug">{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold text-charcoal uppercase tracking-[0.18em] mb-4">House rules</p>
                <ul className="space-y-3">
                  {HOUSE_RULES.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13.5px] text-charcoal-muted">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-neutral-300 shrink-0"/>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 bg-neutral-50 border border-neutral-150 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {SOCIAL.map((cc, i) => (
                    <div key={i} style={{ zIndex: SOCIAL.length - i }} className="relative w-9 h-9 rounded-full bg-charcoal border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">
                      {cc}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-charcoal">Loved by 2,400+ travelers</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3 h-3 text-sunset-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="text-[11px] text-charcoal-muted ml-1">4.9 avg</span>
                  </div>
                </div>
              </div>
              <Link href="#reviews" className="text-sm font-semibold text-sunset-gold hover:text-sunset-orange transition-colors sm:ml-auto">
                Read all reviews →
              </Link>
            </div>
          </div>
        </div>

        {/* ─── STICKY BOOKING BAR ─── */}
        <div className="shrink-0 border-t border-neutral-100 bg-white px-5 md:px-8 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-charcoal-muted font-medium uppercase tracking-wider mb-0.5">Starting from</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[26px] font-bold text-charcoal leading-none">&#8377;{price}</span>
              <span className="text-sm text-charcoal-muted">/ night</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-charcoal text-sm font-medium rounded-full transition-colors border border-neutral-200">
              Ask a question
            </button>
            <Link
              href="/stays"
              className="px-7 py-2.5 bg-charcoal hover:bg-charcoal/85 text-white text-sm font-semibold rounded-full transition-colors"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>

      {/* ─── FULL-SCREEN GALLERY OVERLAY ─── */}
      {galleryOpen && (
        <PhotoGallery
          images={images}
          startIndex={galleryStart}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  )
}

