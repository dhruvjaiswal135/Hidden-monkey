'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useBooking } from '@/context/BookingContext'

/**
 * Destination Modal — Compact, centered
 * Shows destination overview, properties, and quick actions
 */

export default function DestinationModal({ destination, isOpen, onClose }) {
  const { openBooking } = useBooking()
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen || !destination?.coverImages?.length) return
    const iv = setInterval(() => setImgIdx(p => (p + 1) % destination.coverImages.length), 4500)
    return () => clearInterval(iv)
  }, [isOpen, destination])

  if (!isOpen || !destination) return null
  const lowestPrice = Math.min(...(destination.buildings?.map(b => b.priceFrom) || [599]))

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50" onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto w-full max-w-2xl bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ─── HERO IMAGE ─── */}
              <div className="relative h-[220px] md:h-[260px] shrink-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={imgIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                    <Image src={destination.coverImages?.[imgIdx] || destination.image} alt={destination.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 672px" priority unoptimized />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Close */}
                <button onClick={onClose} className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors" aria-label="Close">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1 z-10">
                  {destination.tags?.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[#1E1F1C] text-[8px] font-bold uppercase tracking-widest rounded-md">{tag}</span>
                  ))}
                </div>

                {/* Dots */}
                {destination.coverImages?.length > 1 && (
                  <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {destination.coverImages.map((_, i) => (
                      <button key={i} onClick={() => setImgIdx(i)} className={`h-1 rounded-full transition-all duration-400 ${i === imgIdx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`} />
                    ))}
                  </div>
                )}

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mb-1">{destination.tagline}</p>
                  <h2 className="text-white text-[28px] md:text-[32px] font-bold leading-[1] tracking-[-0.02em]">{destination.name}</h2>
                </div>
              </div>

              {/* ─── SCROLLABLE BODY ─── */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="p-5 md:p-6">
                  {/* Description */}
                  <p className="text-[13px] text-[#6B665E] font-light leading-relaxed mb-5">{destination.description}</p>

                  {/* Highlights — compact row */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {destination.highlights?.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-xl text-[11px] font-medium text-[#1E1F1C]">
                        <span className="text-sm">{h.icon}</span> {h.text}
                      </span>
                    ))}
                  </div>

                  {/* Weather + Tip — inline */}
                  <div className="flex gap-3 mb-6">
                    {destination.weather && (
                      <div className="flex-1 p-3 bg-[#128790]/5 border border-[#128790]/10 rounded-[14px]">
                        <p className="text-[9px] font-bold text-[#128790] uppercase tracking-widest mb-1.5">🌤️ Weather</p>
                        <p className="text-[11px] text-[#1E1F1C] font-semibold">{destination.weather.temp}</p>
                        <p className="text-[10px] text-[#6B665E]">Best: {destination.weather.best}</p>
                      </div>
                    )}
                    {destination.travelTip && (
                      <div className="flex-1 p-3 bg-[#FBB11A]/5 border border-[#FBB11A]/10 rounded-[14px]">
                        <p className="text-[9px] font-bold text-[#FBB11A] uppercase tracking-widest mb-1.5">💡 Pro Tip</p>
                        <p className="text-[11px] text-[#6B665E] leading-relaxed">{destination.travelTip}</p>
                      </div>
                    )}
                  </div>

                  {/* ── Properties ── */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-[2px] bg-[#128790]" />
                      <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#128790]">Properties</span>
                    </div>

                    <div className={`grid gap-3 ${destination.buildings?.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                      {destination.buildings?.map((b) => (
                        <div key={b.id} className="group flex gap-3 p-2 bg-white rounded-[16px] border border-[#E6E4DF] hover:border-[#128790]/20 hover:shadow-sm transition-all">
                          <div className="relative w-[90px] h-[72px] rounded-[12px] overflow-hidden shrink-0">
                            <Image src={b.image} alt={b.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                          </div>
                          <div className="flex-1 min-w-0 py-0.5">
                            <h4 className="text-[13px] font-bold text-[#1E1F1C] leading-tight mb-0.5 group-hover:text-[#128790] transition-colors truncate">{b.name}</h4>
                            <p className="text-[10px] text-[#9A948C] leading-snug line-clamp-1 mb-1.5">{b.vibe}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-0.5">
                                <svg className="w-2.5 h-2.5 text-[#FBB11A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <span className="text-[10px] font-bold text-[#1E1F1C]">{b.rating}</span>
                              </div>
                              <span className="text-[9px] text-[#9A948C]">({b.reviews})</span>
                              <span className="ml-auto text-[11px] font-bold text-[#128790]">₹{b.priceFrom}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Experiences pills ── */}
                  {destination.experiences?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-3 h-[2px] bg-[#FBB11A]" />
                        <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#FBB11A]">Things to Do</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {destination.experiences.map((exp, i) => (
                          <span key={i} className="px-2.5 py-1 bg-[#FBFBF9] border border-[#E6E4DF] text-[10px] font-medium text-[#6B665E] rounded-full">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ─── FOOTER ─── */}
              <div className="shrink-0 border-t border-[#E6E4DF] bg-white px-5 py-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[9px] text-[#9A948C] font-bold uppercase tracking-widest">From</p>
                  <p className="text-[18px] font-bold text-[#1E1F1C] leading-none">₹{lowestPrice}<span className="text-[10px] font-normal text-[#9A948C]">/nt</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={onClose} className="px-4 py-2 bg-[#FBFBF9] border border-[#E6E4DF] text-[#6B665E] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                    Close
                  </button>
                  <button onClick={() => { onClose(); openBooking({ destination: destination.name }) }} className="px-5 py-2 bg-[#128790] hover:bg-[#0e6e75] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
