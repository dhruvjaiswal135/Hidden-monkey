import Link from 'next/link'
import Image from 'next/image'
import { LOGO } from '@/content/images'

const COLS = [
  { title: 'Explore', links: [['/stays', 'Stays & prices'], ['/destinations', 'Destinations'], ['/experiences', 'Experiences'], ['/gallery', 'Gallery']] },
  { title: 'Company', links: [['/about', 'About us'], ['/blog', 'Stories'], ['/contact', 'Contact'], ['/contact', 'Group bookings']] },
  { title: 'Support', links: [['/faq', 'FAQ'], ['/cancellation', 'Cancellation policy'], ['/privacy', 'Privacy'], ['/terms', 'Terms']] },
]

const SOCIAL = [
  ['Instagram', 'https://instagram.com/hiddenmonkey.in', 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'],
  ['YouTube', 'https://youtube.com/@hiddenmonkey', 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'],
  ['Facebook', 'https://facebook.com/hiddenmonkey.in', 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'],
  ['X', 'https://twitter.com/hiddenmonkeyin', 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'],
]

export default function Footer() {
  return (
    <footer className="bg-jungle text-white pb-[72px] lg:pb-0">
      <div className="container-site pt-12 md:pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-end pb-12 border-b border-white/10">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-2">Still scrolling?</p>
            <h2 className="display text-[clamp(40px,6vw,84px)] leading-[.92]">Come find<br />your <span className="text-gold">people.</span></h2>
          </div>
          <div className="flex flex-col gap-3.5 max-w-[420px]">
            <p className="text-white/70 text-[16px] leading-relaxed">Beds from ₹499, homestays from ₹1,299. Free cancellation up to 48 hours before check-in. Chai on arrival, always.</p>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/stays#book" className="btn-gold hover:bg-white hover:text-ink">Check availability</Link>
              <a href="https://wa.me/919876543210" className="btn border border-white/25 text-white font-sans font-semibold normal-case tracking-normal text-[15px] hover:border-white">WhatsApp us</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          <div className="col-span-2 md:col-span-1 min-w-[220px]">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-3.5">
              <Image src={LOGO} alt="" width={30} height={30} className="rounded-lg object-contain" />
              <span className="font-display font-extrabold text-[22px] uppercase text-white">Hidden<span className="text-gold">Monkey</span></span>
            </Link>
            <p className="text-white/55 text-[14px] leading-relaxed max-w-[260px]">Community hostels and family homestays in Darjeeling and Varanasi. Where strangers become travel family.</p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3.5">{c.title}</p>
              <ul className="flex flex-col gap-2.5">
                {c.links.map(([href, label]) => <li key={label}><Link href={href} className="text-white/80 text-[15px] hover:text-gold">{label}</Link></li>)}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3.5">Get in touch</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@hiddenmonkey.in" className="text-white/80 text-[15px] hover:text-gold">hello@hiddenmonkey.in</a>
              <a href="tel:+919876543210" className="text-white/80 text-[15px] hover:text-gold">+91 98765 43210</a>
              <span className="text-white/50 text-[13px]">Replies within 2–4 hrs, 9am–9pm IST</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-5 pb-8 border-t border-white/10">
          <p className="text-white/40 text-[13px]">© {new Date().getFullYear()} Hidden Monkey Hostels Pvt. Ltd.</p>
          <div className="flex gap-2">
            {SOCIAL.map(([label, href, d]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center text-white/70 hover:bg-gold hover:text-ink transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
