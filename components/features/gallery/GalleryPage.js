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
      {/* ─── CUTE COMPACT HERO ─── */}
      <section className="pt-12 pb-8 bg-[#FBFBF9] border-b border-[#E6E4DF]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-[2px] bg-[#128790]"></span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">
                  Visual Journal
                </span>
              </div>
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.02em] mb-4">
                Inside the <span className="text-[#FBB11A]">Monkey House.</span>
              </h1>
              <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light leading-relaxed max-w-xl">
                Real moments from our hostels — captured by travellers who stayed, connected, and left changed.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 shrink-0 md:pb-2">
              {[
                { n: `${IMAGES.length}+`, label: 'Photos' },
                { n: '2',                  label: 'Destinations' },
              ].map(({ n, label }) => (
                <div key={label} className="text-center md:text-left">
                  <div className="text-[24px] font-bold text-[#1E1F1C] leading-none mb-1">{n}</div>
                  <div className="text-[#9A948C] text-[9px] uppercase tracking-widest font-bold">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cute Filter Bar */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
            {FILTERS.map(f => {
              const count = f.id === 'all'
                ? IMAGES.length
                : IMAGES.filter(i => i.category === f.id).length
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                    filter === f.id
                      ? 'bg-[#128790] text-white border-[#128790]'
                      : 'bg-white text-[#6B665E] border-[#E6E4DF] hover:border-[#128790]/50'
                  }`}
                >
                  {f.label}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-md flex items-center justify-center leading-none ${
                    filter === f.id ? 'bg-white/20 text-white' : 'bg-[#FBFBF9] text-[#9A948C]'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
            <span className="ml-auto text-[#9A948C] text-[11px] font-bold uppercase tracking-widest hidden sm:block">
              {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* ─── MASONRY GRID ─── */}
      <section className="bg-[#FBFBF9] py-10 min-h-[50vh]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {filtered.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  className="break-inside-avoid mb-4 group relative rounded-[16px] overflow-hidden cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#E6E4DF]"
                  onClick={() => openLightbox(img.id)}
                >
                  {/* Image */}
                  <div className={`relative w-full ${ASPECT[img.aspect]}`}>
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className={`w-fit text-[9px] font-bold px-2 py-0.5 rounded-md text-white uppercase tracking-widest mb-2 ${CAT_COLOR[img.category]}`}>
                      {img.category}
                    </span>
                    <p className="text-white/90 text-[12px] font-medium leading-snug">{img.alt}</p>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-black/40 border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E6E4DF]">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="text-[18px] font-bold text-[#1E1F1C] mb-1">No photos found</h3>
              <p className="text-[#6B665E] text-[13px] mb-4">Try selecting a different category.</p>
              <button
                onClick={() => setFilter('all')}
                className="px-4 py-2 bg-[#FBFBF9] border border-[#E6E4DF] text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
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
