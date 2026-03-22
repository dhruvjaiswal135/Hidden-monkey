'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

/* ─── Gallery data ────────────────────────────────────────── */
const IMAGES = [
  { id: 1,  url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&auto=format&fit=crop&q=80', alt: 'Dorm room with pod beds',        category: 'rooms',  aspect: 'wide'   },
  { id: 2,  url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=900&auto=format&fit=crop&q=80', alt: 'Modern lounge area',             category: 'spaces', aspect: 'tall'   },
  { id: 3,  url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format&fit=crop&q=80', alt: 'Hostel exterior and pool',     category: 'nature', aspect: 'wide'   },
  { id: 4,  url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format&fit=crop&q=80', alt: 'Rooftop infinity pool',        category: 'nature', aspect: 'square' },
  { id: 5,  url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&auto=format&fit=crop&q=80', alt: 'Bedroom with ocean views',     category: 'rooms',  aspect: 'tall'   },
  { id: 6,  url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&auto=format&fit=crop&q=80', alt: 'Resort terrace at dusk',       category: 'nature', aspect: 'wide'   },
  { id: 7,  url: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=900&auto=format&fit=crop&q=80', alt: 'Community night event',        category: 'events', aspect: 'square' },
  { id: 8,  url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=80', alt: 'Group gathering at hostel',    category: 'events', aspect: 'wide'   },
  { id: 9,  url: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=900&auto=format&fit=crop&q=80', alt: 'Private double room',          category: 'rooms',  aspect: 'square' },
  { id: 10, url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&auto=format&fit=crop&q=80', alt: 'Dining and social space',         category: 'spaces', aspect: 'tall'   },
  { id: 11, url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format&fit=crop&q=80', alt: 'Clean bunk bed area',          category: 'rooms',  aspect: 'square' },
  { id: 12, url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&auto=format&fit=crop&q=80', alt: 'Tropical beach and palms',     category: 'nature', aspect: 'wide'   },
  { id: 13, url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&auto=format&fit=crop&q=80', alt: 'Live music night',             category: 'events', aspect: 'tall'   },
  { id: 14, url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&auto=format&fit=crop&q=80', alt: 'Deluxe private suite',         category: 'rooms',  aspect: 'wide'   },
  { id: 15, url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&auto=format&fit=crop&q=80', alt: 'Hostel common lounge area',    category: 'spaces', aspect: 'square' },
  { id: 16, url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&auto=format&fit=crop&q=80', alt: 'Mountain sunrise vista',       category: 'nature', aspect: 'tall'   },
  { id: 17, url: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&auto=format&fit=crop&q=80', alt: 'Bonfire gathering',               category: 'events', aspect: 'square' },
  { id: 18, url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80', alt: 'Premium room interior',       category: 'rooms',  aspect: 'wide'   },
]

const FILTERS = [
  { id: 'all',    label: 'All' },
  { id: 'rooms',  label: 'Rooms' },
  { id: 'spaces', label: 'Spaces' },
  { id: 'events', label: 'Events' },
  { id: 'nature', label: 'Nature' },
]

const CAT_COLOR = {
  rooms:  'bg-sky-500',
  spaces: 'bg-violet-500',
  events: 'bg-rose-500',
  nature: 'bg-emerald-500',
}

const ASPECT = {
  tall:   'aspect-[2/3]',
  wide:   'aspect-[4/3]',
  square: 'aspect-square',
}

/* ─── Lightbox ────────────────────────────────────────────── */
function Lightbox({ images, imageId, onClose, onNext, onPrev }) {
  const idx = images.findIndex(i => i.id === imageId)
  const image = images[idx]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const fn = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', fn)
    return () => {
      window.removeEventListener('keydown', fn)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev])

  if (!image) return null

  return (
    <div className="fixed inset-0 z-[80] bg-black flex flex-col" onClick={onClose}>

      {/* ── Top bar ── */}
      <div
        className="shrink-0 flex items-center justify-between px-5 md:px-8 py-4 border-b border-white/[0.07]"
        onClick={e => e.stopPropagation()}
      >
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-widest ${CAT_COLOR[image.category]}`}>
          {image.category}
        </span>
        <span className="text-white/30 text-sm tabular-nums">
          {idx + 1}<span className="mx-1.5 text-white/15">/</span>{images.length}
        </span>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* ── Image ── */}
      <div
        className="flex-1 relative flex items-center justify-center min-h-0 px-14 md:px-20 py-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-contain"
            unoptimized
            priority
            sizes="100vw"
          />
        </div>

        {/* Prev */}
        <button
          onClick={e => { e.stopPropagation(); onPrev() }}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={e => { e.stopPropagation(); onNext() }}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* ── Caption ── */}
      <div
        className="shrink-0 px-6 pb-5 pt-3 text-center border-t border-white/[0.07]"
        onClick={e => e.stopPropagation()}
      >
        <p className="text-white/40 text-[13px]">{image.alt}</p>
        <p className="text-white/20 text-[11px] mt-1 tracking-wide">← → to navigate · Esc to close</p>
      </div>
    </div>
  )
}

/* ─── Main page ────────────────────────────────────────────── */
export default function GalleryPage() {
  const [filter, setFilter] = useState('all')
  const [lightboxId, setLightboxId] = useState(null)

  const filtered = filter === 'all' ? IMAGES : IMAGES.filter(i => i.category === filter)

  const openLightbox = (id) => setLightboxId(id)
  const closeLightbox = () => setLightboxId(null)

  const nextImage = useCallback(() => {
    setLightboxId(prev => {
      const idx = filtered.findIndex(i => i.id === prev)
      return filtered[(idx + 1) % filtered.length].id
    })
  }, [filtered])

  const prevImage = useCallback(() => {
    setLightboxId(prev => {
      const idx = filtered.findIndex(i => i.id === prev)
      return filtered[(idx - 1 + filtered.length) % filtered.length].id
    })
  }, [filtered])

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-charcoal -mt-20 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-44 pb-14">

          {/* Decorative background word */}
          <div className="absolute top-16 right-0 pointer-events-none select-none overflow-hidden hidden lg:block">
            <span className="text-[180px] font-bold leading-none tracking-tight text-white opacity-[0.025]">
              VISUAL
            </span>
          </div>

          {/* Title + stats */}
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 relative">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/15 text-white/60 text-[11px] tracking-[0.18em] uppercase rounded-full mb-6">
                Visual journal
              </span>
              <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-5">
                Inside the<br />
                <span className="text-sunset-gold">Monkey House</span>
              </h1>
              <p className="text-white/45 text-[17px] leading-relaxed max-w-md">
                Real moments from our hostels — captured by travellers who stayed, connected, and left changed.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 shrink-0 pb-1">
              {[
                { n: `${IMAGES.length}+`, label: 'Photos' },
                { n: '4',                  label: 'Destinations' },
                { n: '500+',               label: 'Guests featured' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div className="text-[2.2rem] font-bold text-white leading-none">{n}</div>
                  <div className="text-white/30 text-[11px] mt-1.5 uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter pills */}
          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {FILTERS.map(f => {
              const count = f.id === 'all'
                ? IMAGES.length
                : IMAGES.filter(i => i.category === f.id).length
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all duration-200 ${
                    filter === f.id
                      ? 'bg-white text-charcoal shadow-md'
                      : 'bg-white/10 text-white/55 border border-white/10 hover:bg-white/15 hover:text-white/80'
                  }`}
                >
                  {f.label}
                  <span className={`text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none ${
                    filter === f.id ? 'bg-charcoal/15 text-charcoal/60' : 'bg-white/10 text-white/35'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
            <span className="ml-auto text-white/25 text-[12px] font-medium hidden sm:block">
              {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* ─── MASONRY GRID ─── */}
      <section className="bg-[#F4EFEA] py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {filtered.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  className="break-inside-avoid mb-4 group relative rounded-[20px] overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(img.id)}
                >
                  {/* Image */}
                  <div className={`relative w-full ${ASPECT[img.aspect]}`}>
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className={`w-fit text-[9px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-widest mb-2 ${CAT_COLOR[img.category]}`}>
                      {img.category}
                    </span>
                    <p className="text-white/90 text-[13px] font-medium leading-snug">{img.alt}</p>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/30 border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-charcoal-muted text-sm">No photos in this category yet.</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 px-6 py-2.5 bg-charcoal text-white text-sm font-semibold rounded-full hover:bg-charcoal/85 transition-colors"
              >
                View all photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      {lightboxId !== null && (
        <Lightbox
          images={filtered}
          imageId={lightboxId}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  )
}
