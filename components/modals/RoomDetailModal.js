'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useBooking } from '@/context/BookingContext'

/* ─── Amenity icons ──────────────────────────────────────────── */
const ICONS = {
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
const AMENITY_NAMES = {
  locker: 'Locker', curtain: 'Privacy Curtain', light: 'Reading Light',
  charging: 'Charging', bathroom: 'Bathroom', wifi: 'Fast WiFi',
  kitchen: 'Kitchen', female: 'Women Only', ac: 'AC', towel: 'Towels',
}

/* ─── Lightbox overlay ───────────────────────────────────────── */
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex)
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [next, prev, onClose])

  return (
    <div className="fixed inset-0 z-[80] bg-black flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 shrink-0">
        <span className="text-white/40 text-[12px] tabular-nums">{idx + 1} / {images.length}</span>
        <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div className="flex-1 relative flex items-center justify-center px-12 pb-4">
        <div className="relative w-full h-full"><Image key={idx} src={images[idx]} alt="" fill className="object-contain" sizes="100vw" priority unoptimized /></div>
        {images.length > 1 && (<>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>
        </>)}
      </div>
    </div>
  )
}

/* ─── Main modal ─────────────────────────────────────────────── */
export default function RoomDetailModal({ room, isOpen, onClose }) {
  const { openBooking } = useBooking()
  const [imgIdx, setImgIdx] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isOpen) { setImgIdx(0); requestAnimationFrame(() => setMounted(true)); document.body.style.overflow = 'hidden' }
    else { setMounted(false); document.body.style.overflow = '' }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || lightbox) return
    const fn = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setImgIdx(i => (i + 1) % (room?.images?.length || 1))
      if (e.key === 'ArrowLeft') setImgIdx(i => (i - 1 + (room?.images?.length || 1)) % (room?.images?.length || 1))
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [isOpen, lightbox, room, onClose])

  if (!isOpen && !mounted) return null
  if (!room) return null
  const images = room.images?.length ? room.images : [room.image]

  return (
    <>
      {/* Backdrop */}
      <div className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />

      {/* Centered modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-2xl bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col max-h-[85vh] transition-all duration-300 ${mounted ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.96] translate-y-4'}`}
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button onClick={onClose} className="absolute top-3 right-3 z-30 w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors" aria-label="Close">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            {/* ── Image ── */}
            <div className="relative h-[200px] md:h-[260px] cursor-pointer" onClick={() => setLightbox(true)}>
              <Image src={images[imgIdx]} alt={room.name} fill className="object-cover" sizes="672px" priority unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Nav arrows */}
              {images.length > 1 && (<>
                <button onClick={e => { e.stopPropagation(); setImgIdx(i => (i - 1 + images.length) % images.length) }} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow z-10">
                  <svg className="w-3.5 h-3.5 text-[#1E1F1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={e => { e.stopPropagation(); setImgIdx(i => (i + 1) % images.length) }} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow z-10">
                  <svg className="w-3.5 h-3.5 text-[#1E1F1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </button>
              </>)}

              {/* Bottom overlays */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 bg-white/90 text-[#1E1F1C] text-[10px] font-bold px-2.5 py-1 rounded-lg">
                  <span className={`w-1.5 h-1.5 rounded-full ${room.category === 'dorm' ? 'bg-[#128790]' : 'bg-[#FBB11A]'}`} />
                  {room.category === 'dorm' ? 'Dorm' : 'Private'}
                </span>
                <button onClick={e => { e.stopPropagation(); setLightbox(true) }} className="pointer-events-auto inline-flex items-center gap-1 bg-black/40 border border-white/15 text-white text-[9px] font-medium px-2.5 py-1 rounded-lg hover:bg-black/60 transition-colors">
                  📷 {images.length} photos
                </button>
              </div>

              {/* Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1 z-10 pointer-events-none">
                  {images.map((_, i) => <span key={i} className={`h-1 rounded-full transition-all ${i === imgIdx ? 'w-4 bg-white' : 'w-1 bg-white/40'}`} />)}
                </div>
              )}
            </div>

            {/* ── Content ── */}
            <div className="p-5 md:p-6">
              {/* Title + rating */}
              <div className="flex items-start justify-between gap-3 mb-1">
                <h2 className="text-[20px] md:text-[24px] font-bold text-[#1E1F1C] leading-tight tracking-[-0.01em]">{room.name}</h2>
                <div className="flex items-center gap-0.5 shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-[#FBB11A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span className="text-[12px] font-bold text-[#1E1F1C]">{room.rating}</span>
                  <span className="text-[10px] text-[#9A948C] ml-0.5">({room.reviews})</span>
                </div>
              </div>

              <p className="text-[12px] text-[#6B665E] font-light leading-relaxed mb-4">{room.tagline}</p>

              {/* Quick specs */}
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[#E6E4DF]">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FBFBF9] border border-[#E6E4DF] rounded-lg text-[10px] font-semibold text-[#1E1F1C]">
                  👤 {room.capacity}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FBFBF9] border border-[#E6E4DF] rounded-lg text-[10px] font-semibold text-[#1E1F1C]">
                  🛏️ {room.bedType}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FBFBF9] border border-[#E6E4DF] rounded-lg text-[10px] font-semibold text-[#1E1F1C]">
                  📐 {room.size}
                </span>
              </div>

              {/* About */}
              {room.detailedDescription?.length > 0 && (
                <div className="mb-5">
                  <p className="text-[9px] font-bold text-[#128790] uppercase tracking-[0.18em] mb-2">About this space</p>
                  {room.detailedDescription.map((p, i) => (
                    <p key={i} className="text-[12px] text-[#6B665E] leading-relaxed mb-2 last:mb-0">{p}</p>
                  ))}
                </div>
              )}

              {/* Amenities — compact grid */}
              {room.amenities?.length > 0 && (
                <div className="mb-5">
                  <p className="text-[9px] font-bold text-[#128790] uppercase tracking-[0.18em] mb-2">What&apos;s included</p>
                  <div className="flex flex-wrap gap-1.5">
                    {room.amenities.map((k, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-xl">
                        <svg className="w-3 h-3 text-[#128790]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{ICONS[k] || <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}/>}</svg>
                        <span className="text-[10px] font-medium text-[#1E1F1C]">{AMENITY_NAMES[k] || k}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights + Rules — compact */}
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-[#E6E4DF]">
                {room.highlights?.length > 0 && (
                  <div>
                    <p className="text-[9px] font-bold text-[#FBB11A] uppercase tracking-[0.18em] mb-2">Highlights</p>
                    <ul className="space-y-1.5">
                      {room.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-[11px] text-[#1E1F1C]">
                          <svg className="w-2.5 h-2.5 text-[#128790] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {room.houseRules?.length > 0 && (
                  <div>
                    <p className="text-[9px] font-bold text-[#9A948C] uppercase tracking-[0.18em] mb-2">House Rules</p>
                    <ul className="space-y-1.5">
                      {room.houseRules.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#6B665E]">
                          <span className="mt-[5px] w-1 h-1 rounded-full bg-[#E6E4DF] shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[14px] p-3">
                <div className="flex -space-x-2">
                  {['AU','DE','US','FR'].map((cc, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-[#1E1F1C] border-2 border-white flex items-center justify-center text-white text-[8px] font-bold" style={{ zIndex: 4 - i }}>{cc}</div>
                  ))}
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#1E1F1C]">Loved by 2,400+ travelers</p>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => <svg key={i} className="w-2.5 h-2.5 text-[#FBB11A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                    <span className="text-[9px] text-[#9A948C] ml-1">4.9 avg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── STICKY FOOTER ── */}
          <div className="shrink-0 border-t border-[#E6E4DF] bg-white px-5 py-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-[9px] text-[#9A948C] font-bold uppercase tracking-widest">Starting from</p>
              <div className="flex items-baseline gap-0.5">
                <span className="text-[20px] font-bold text-[#1E1F1C] leading-none">&#8377;{room.price}</span>
                <span className="text-[10px] text-[#9A948C]">/night</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-[#FBFBF9] border border-[#E6E4DF] text-[#6B665E] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                Ask a question
              </button>
              <button onClick={() => { onClose(); openBooking({ roomId: room.id, roomType: room.name, price: room.price }) }} className="px-5 py-2 bg-[#1E1F1C] hover:bg-[#128790] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && <Lightbox images={images} startIndex={imgIdx} onClose={() => setLightbox(false)} />}
    </>
  )
}
