'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Experience Modal — Compact, centered
 * Shows experience details, timeline, and booking
 */

export default function ExperienceModal({ experience, isOpen, onClose }) {
  const [isJoining, setIsJoining] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [isOpen, onClose])

  if (!isOpen || !experience) return null

  const exp = {
    spots: 20,
    spotsLeft: 10,
    location: 'Hidden Monkey',
    host: { name: 'Hidden Monkey Team', avatar: '🐒' },
    includes: ['Local guide', 'Snacks & refreshments', 'Photo ops'],
    timeline: [{ time: 'Start', activity: 'Meet at hostel' }],
    whatToBring: ['Comfortable clothes', 'Water bottle'],
    pastJoiners: ['🇦🇺', '🇩🇪', '🇺🇸'],
    ...experience,
  }

  const handleJoin = () => {
    setIsJoining(true)
    setTimeout(() => setIsJoining(false), 1500)
  }

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
              {/* ── HERO IMAGE ── */}
              <div className="relative h-[180px] md:h-[220px] shrink-0 overflow-hidden">
                <Image src={exp.image} alt={exp.title} fill className="object-cover" sizes="576px" priority unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Close */}
                <button onClick={onClose} className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#1E1F1C] text-[9px] font-bold uppercase tracking-widest rounded-md">
                    {exp.category}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h2 className="text-white text-[22px] md:text-[26px] font-bold leading-[1.1] tracking-[-0.01em] mb-0.5">{exp.title}</h2>
                  <p className="text-white/80 text-[12px] font-light">{exp.description}</p>
                </div>
              </div>

              {/* ── SCROLLABLE BODY ── */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="p-5">
                  {/* Quick info bar */}
                  <div className="flex flex-wrap gap-2 mb-5 pb-4 border-b border-[#E6E4DF]">
                    {[
                      { icon: '📅', text: exp.date },
                      { icon: '⏰', text: `${exp.time} · ${exp.duration}` },
                      { icon: '📍', text: exp.location },
                      { icon: '👥', text: `${exp.spotsLeft} spots left` },
                    ].map((item, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FBFBF9] border border-[#E6E4DF] rounded-lg text-[10px] font-medium text-[#1E1F1C]">
                        <span className="text-xs">{item.icon}</span> {item.text}
                      </span>
                    ))}
                  </div>

                  {/* Host */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-[#FBFBF9] border border-[#E6E4DF] rounded-full flex items-center justify-center text-lg">{exp.host?.avatar}</div>
                    <div>
                      <p className="text-[9px] text-[#9A948C] font-bold uppercase tracking-widest">Hosted by</p>
                      <p className="text-[13px] font-bold text-[#1E1F1C]">{exp.host?.name}</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-5">
                    <p className="text-[9px] font-bold text-[#128790] uppercase tracking-[0.18em] mb-3">How it goes</p>
                    <div className="relative pl-5 space-y-3">
                      <div className="absolute left-[5px] top-1 bottom-1 w-[2px] bg-gradient-to-b from-[#128790] to-[#FBB11A] rounded-full" />
                      {exp.timeline.map((item, i) => (
                        <div key={i} className="relative flex gap-3">
                          <div className="absolute -left-[14px] w-2.5 h-2.5 bg-[#128790] rounded-full border-2 border-white shadow-sm" />
                          <div>
                            <p className="text-[9px] font-bold text-[#128790] uppercase tracking-wider">{item.time}</p>
                            <p className="text-[12px] text-[#1E1F1C]">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes + What to bring */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <p className="text-[9px] font-bold text-[#FBB11A] uppercase tracking-[0.18em] mb-2">What&apos;s included</p>
                      <ul className="space-y-1.5">
                        {exp.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[11px] text-[#1E1F1C]">
                            <svg className="w-2.5 h-2.5 text-[#128790] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-[#9A948C] uppercase tracking-[0.18em] mb-2">Bring along</p>
                      <ul className="space-y-1.5">
                        {exp.whatToBring.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[11px] text-[#6B665E]">
                            <span className="w-1 h-1 rounded-full bg-[#E6E4DF] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Social proof */}
                  <div className="flex items-center gap-3 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[14px] p-3">
                    <div className="flex -space-x-2">
                      {exp.pastJoiners.slice(0, 4).map((flag, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-[#FBFBF9] border-2 border-white flex items-center justify-center text-sm shadow-sm">{flag}</div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#6B665E]"><span className="font-semibold text-[#1E1F1C]">200+ travelers</span> have joined this</p>
                  </div>
                </div>
              </div>

              {/* ── FOOTER ── */}
              <div className="shrink-0 border-t border-[#E6E4DF] bg-white px-5 py-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[9px] text-[#9A948C] font-bold uppercase tracking-widest">Price</p>
                  <p className="text-[18px] font-bold text-[#1E1F1C] leading-none">
                    {exp.price === 'Free' ? <span className="text-[#128790]">Free</span> : `₹${exp.price}`}
                    {exp.price !== 'Free' && <span className="text-[10px] font-normal text-[#9A948C]">/person</span>}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* Spots indicator */}
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-[#E6E4DF] rounded-full overflow-hidden">
                      <div className="h-full bg-[#128790] rounded-full" style={{ width: `${((exp.spots - exp.spotsLeft) / exp.spots) * 100}%` }} />
                    </div>
                    <span className="text-[9px] text-[#9A948C] font-medium whitespace-nowrap">{exp.spotsLeft} left</span>
                  </div>

                  <button
                    onClick={handleJoin}
                    disabled={isJoining || exp.spotsLeft === 0}
                    className="px-5 py-2 bg-[#128790] hover:bg-[#0e6e75] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    {isJoining ? (
                      <><svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Joining...</>
                    ) : (
                      'Join Experience'
                    )}
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
