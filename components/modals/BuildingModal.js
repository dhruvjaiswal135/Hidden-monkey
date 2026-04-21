'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useBooking } from '@/context/BookingContext'

/**
 * Building Detail Modal — Compact, centered
 * Shows detailed info about a specific hostel property
 */

const DEFAULT_FEATURES = [
  { icon: '🏠', title: 'Cozy Space', desc: 'Designed for travelers' },
  { icon: '👥', title: 'Community', desc: 'Meet fellow travelers' },
  { icon: '📶', title: 'Fast WiFi', desc: '100+ Mbps' },
  { icon: '🍳', title: 'Kitchen', desc: 'Cook anytime' },
]

const DEFAULT_AMENITIES = ['Free WiFi', '24/7 Hot Water', 'Common Kitchen', 'AC/Fans', 'Lockers', 'Tour Desk']

export default function BuildingModal({ building, isOpen, onClose }) {
  const { openBooking } = useBooking()
  const [imgIdx, setImgIdx] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen || !building?.images?.length) return
    const iv = setInterval(() => setImgIdx(p => (p + 1) % building.images.length), 4500)
    return () => clearInterval(iv)
  }, [isOpen, building])

  if (!building) return null

  const images = building.images?.length ? building.images : (building.image ? [building.image] : ['https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'])
  const features = building.features || DEFAULT_FEATURES
  const amenities = building.amenities || DEFAULT_AMENITIES
  const rating = building.rating || 4.8
  const reviews = building.reviews || 100
  const price = building.priceFrom || 499

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'amenities', label: 'Amenities' },
  ]

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
              className="pointer-events-auto w-full max-w-xl bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── IMAGE ── */}
              <div className="relative h-[180px] md:h-[220px] shrink-0 overflow-hidden">
                <Image src={images[imgIdx]} alt={building.name || 'Building'} fill className="object-cover" sizes="576px" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Close */}
                <button onClick={onClose} className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Dots */}
                {images.length > 1 && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {images.map((_, i) => <button key={i} onClick={() => setImgIdx(i)} className={`h-1 rounded-full transition-all ${i === imgIdx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`} />)}
                  </div>
                )}

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h2 className="text-white text-[20px] md:text-[24px] font-bold leading-tight mb-0.5">{building.name}</h2>
                  {building.vibe && <p className="text-white/70 text-[11px] font-light">{building.vibe}</p>}
                </div>
              </div>

              {/* ── TABS ── */}
              <div className="shrink-0 border-b border-[#E6E4DF] bg-white flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-[#128790] text-[#128790]'
                        : 'border-transparent text-[#9A948C] hover:text-[#1E1F1C]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* ── SCROLLABLE BODY ── */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="p-5">
                  {activeTab === 'overview' && (
                    <div className="space-y-5">
                      {/* Quick stats */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FBB11A]/10 rounded-lg">
                          <svg className="w-3 h-3 text-[#FBB11A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          <span className="text-[11px] font-bold text-[#1E1F1C]">{rating}</span>
                          <span className="text-[10px] text-[#9A948C]">({reviews})</span>
                        </span>
                        {building.address && (
                          <span className="px-2.5 py-1 bg-[#FBFBF9] border border-[#E6E4DF] rounded-lg text-[10px] text-[#6B665E]">
                            📍 {building.address?.split(',').slice(-2).join(',').trim()}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      {building.description && <p className="text-[12px] text-[#6B665E] leading-relaxed">{building.description}</p>}

                      {/* Features grid */}
                      <div>
                        <p className="text-[9px] font-bold text-[#128790] uppercase tracking-[0.18em] mb-2.5">What makes us special</p>
                        <div className="grid grid-cols-2 gap-2">
                          {features.map((f, i) => (
                            <div key={i} className="flex items-center gap-2.5 p-2.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[12px]">
                              <span className="text-lg">{f.icon}</span>
                              <div>
                                <p className="text-[11px] font-semibold text-[#1E1F1C]">{f.title}</p>
                                <p className="text-[9px] text-[#9A948C]">{f.desc || f.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'amenities' && (
                    <div>
                      <p className="text-[9px] font-bold text-[#128790] uppercase tracking-[0.18em] mb-3">What we offer</p>
                      <div className="flex flex-wrap gap-2">
                        {amenities.map((a, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-xl text-[11px] font-medium text-[#1E1F1C]">
                            <svg className="w-3 h-3 text-[#128790]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ── FOOTER ── */}
              <div className="shrink-0 border-t border-[#E6E4DF] bg-white px-5 py-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[9px] text-[#9A948C] font-bold uppercase tracking-widest">From</p>
                  <p className="text-[18px] font-bold text-[#1E1F1C] leading-none">₹{price}<span className="text-[10px] font-normal text-[#9A948C]">/nt</span></p>
                </div>
                <button onClick={() => { onClose(); openBooking({ destination: building?.location || '' }) }} className="px-5 py-2 bg-[#128790] hover:bg-[#0e6e75] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
