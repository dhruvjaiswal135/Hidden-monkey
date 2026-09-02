'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

import { GALLERY as IMAGES } from '@/content/images'

const FILTERS = [
  { id: 'all',    label: 'All' },
  { id: 'rooms',  label: 'Rooms' },
  { id: 'spaces', label: 'Spaces' },
  { id: 'events', label: 'Events' },
  { id: 'nature', label: 'Nature' },
]

const CAT_COLOR = {
  rooms:  'bg-teal text-white',
  spaces: 'bg-jungle text-white',
  events: 'bg-gold text-ink',
  nature: 'bg-teal-dark text-white',
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
    <div className="fixed inset-0 z-[80] bg-ink flex flex-col" onClick={onClose}>

      {/* ── Top bar ── */}
      <div
        className="shrink-0 flex items-center justify-between px-5 md:px-8 py-4 border-b border-white/[0.07]"
        onClick={e => e.stopPropagation()}
      >
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-[0.1em] ${CAT_COLOR[image.category]}`}>
          {image.category}
        </span>
        <span className="text-white/40 text-[13px] tabular-nums">
          {idx + 1}<span className="mx-1.5 text-white/20">/</span>{images.length}
        </span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="min-w-[44px] min-h-[44px] rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all"
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
          aria-label="Previous photo"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={e => { e.stopPropagation(); onNext() }}
          aria-label="Next photo"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
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
        <p className="text-white/50 text-[13px]">{image.alt}</p>
        <p className="text-white/25 text-[11px] mt-1 tracking-wide">← → to navigate · Esc to close</p>
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
      {/* Hero */}
      <section className="bg-white border-b border-line">
        <div className="container-site pt-9 md:pt-16 pb-7">
          <p className="kicker">Visual journal</p>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h1 className="display text-d-page">Inside the<br /><span className="text-teal">Monkey House.</span></h1>
            <div className="flex flex-col gap-3 max-w-[440px]">
              <p className="text-[16px] leading-relaxed text-ink-3">Real moments from our hostels — captured by travellers who stayed, connected, and left changed.</p>
              <div className="flex gap-8">
                {[[`${IMAGES.length}+`, 'Photos'], ['2', 'Destinations']].map(([n, label]) => (
                  <div key={label}>
                    <span className="block font-display font-extrabold text-[36px] leading-none">{n}</span>
                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-ink-4">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[68px] z-40 bg-surface/95 backdrop-blur-lg border-b border-line">
        <div className="container-site py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {FILTERS.map(f => {
            const count = f.id === 'all'
              ? IMAGES.length
              : IMAGES.filter(i => i.category === f.id).length
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`${filter === f.id ? 'pill-on' : 'pill-off'} inline-flex items-center gap-1.5 whitespace-nowrap`}
              >
                {f.label}
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full leading-none ${filter === f.id ? 'bg-white/20 text-white' : 'bg-surface text-ink-4'}`}>
                  {count}
                </span>
              </button>
            )
          })}
          <span className="ml-auto pl-3 text-[13px] text-ink-3 font-semibold whitespace-nowrap hidden sm:block">
            {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-8 md:py-14 min-h-[50vh]">
        <div className="container-site">
          {filtered.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  className="break-inside-avoid mb-4 group relative rounded-card overflow-hidden cursor-pointer bg-white border border-line"
                  onClick={() => openLightbox(img.id)}
                >
                  {/* Image */}
                  <div className={`relative w-full ${ASPECT[img.aspect]}`}>
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className={`w-fit text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-[0.1em] mb-2 ${CAT_COLOR[img.category]}`}>
                      {img.category}
                    </span>
                    <p className="text-white/90 text-[13px] font-medium leading-snug">{img.alt}</p>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-ink/40 border border-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card p-10 text-center">
              <p className="display font-bold text-[26px] mb-1">No photos found</p>
              <p className="text-[14px] text-ink-3 mb-4">Try selecting a different category.</p>
              <button onClick={() => setFilter('all')} className="btn-ghost">
                View all photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
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
