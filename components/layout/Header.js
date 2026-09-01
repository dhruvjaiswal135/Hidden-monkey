'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LOGO } from '@/content/images'

const NAV = [
  { href: '/stays#book', label: 'Hostels', key: '/stays' },
  { href: '/stays#homestays', label: 'Homestays', key: '/stays#homestays' },
  { href: '/destinations', label: 'Destinations', key: '/destinations' },
  { href: '/experiences', label: 'Experiences', key: '/experiences' },
  { href: '/stays#nomad', label: 'Work & stay', key: '/stays#nomad' },
  { href: '/blog', label: 'Stories', key: '/blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (item) => item.key.split('#')[0] === pathname && !item.key.includes('#')

  return (
    <>
      <div className="h-[68px]" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-[60] bg-white/[0.92] backdrop-blur-xl border-b border-line">
        <div className="container-site h-[68px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src={LOGO} alt="Hidden Monkey" width={34} height={34} className="rounded-lg object-contain" priority />
            <span className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-[22px] uppercase tracking-[0.01em] text-ink">Hidden<span className="text-teal">Monkey</span></span>
              <span className="text-[9px] tracking-[0.18em] uppercase text-ink-4 font-semibold mt-[3px]">Community hostels · India</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`text-[14px] font-semibold px-3 py-2 rounded-full hover:text-teal ${isActive(n) ? 'text-teal bg-teal/[0.08]' : 'text-ink'}`}>{n.label}</Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <Link href="/gallery" className="text-[13px] font-semibold text-ink-3 hover:text-ink px-3 py-2">Gallery</Link>
            <Link href="/stays#book" className="btn-gold min-h-[44px] px-5 text-[16px]">Book a bed <span className="text-[14px]">→</span></Link>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px]">
            <span className="block w-[22px] h-[2px] bg-ink rounded" />
            <span className="block w-[22px] h-[2px] bg-ink rounded" />
            <span className="block w-[14px] h-[2px] bg-teal rounded self-start ml-[11px]" />
          </button>
        </div>
      </header>

      {/* Drawer */}
      <div className={`fixed inset-0 z-[70] lg:hidden ${open ? '' : 'pointer-events-none'}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/35 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute top-0 right-0 h-full w-[min(320px,88vw)] bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-out-expo ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-5 py-4 border-b border-line">
            <span className="font-display font-extrabold text-[20px] uppercase">Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close" className="w-11 h-11 rounded-full bg-surface text-[18px]">✕</button>
          </div>
          <nav className="flex-1 px-5 py-2 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 border-b border-line-light font-display font-bold text-[24px] uppercase tracking-[0.02em] text-ink">{n.label}<span className="text-ink-4 text-[18px]">→</span></Link>
            ))}
            <Link href="/gallery" onClick={() => setOpen(false)} className="py-4 text-[15px] font-semibold text-ink-3">Gallery</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-4 text-[15px] font-semibold text-ink-3">Talk to us</Link>
          </nav>
          <div className="p-5 border-t border-line">
            <Link href="/stays#book" onClick={() => setOpen(false)} className="btn-gold w-full min-h-[52px]">Book a bed →</Link>
          </div>
        </div>
      </div>

      {/* Mobile sticky booking bar */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-[55] bg-white/95 backdrop-blur-xl border-t border-line px-4 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] flex items-center justify-between gap-3">
        <div>
          <span className="block text-[10px] tracking-[0.14em] uppercase text-ink-4 font-semibold">Beds from</span>
          <span className="font-display font-extrabold text-[22px] leading-none">₹499<span className="text-[13px] text-ink-3 font-semibold">/night</span></span>
        </div>
        <Link href="/stays#book" className="btn-teal min-h-[44px] px-5 text-[17px]">Check availability</Link>
      </div>
    </>
  )
}
