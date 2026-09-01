import Image from 'next/image'
import Link from 'next/link'
import SectionHead from '@/components/ui/SectionHead'
import { ROOM_IMAGES } from '@/content/images'
import { HOMESTAYS } from '@/content/homestays'

const hs = HOMESTAYS[0]
const CARDS = [
  { name: 'Mixed dorm · 6 bed', kind: 'Dorm', badge: 'bg-teal text-white', popular: true, tagline: 'Pod beds with curtains. The social heart of the house.', facts: ['Locker', 'Curtain', 'Shared bath'], was: 799, price: 499, href: '/stays#book', image: ROOM_IMAGES['mixed-dorm-6'][0] },
  { name: 'Female dorm · 6 bed', kind: 'Women only', badge: 'bg-gold text-ink', tagline: 'Keycard access, vanity corner, and a quieter floor.', facts: ['Keycard', 'Vanity', 'Blackout curtain'], was: 849, price: 549, href: '/stays#book', image: ROOM_IMAGES['female-dorm-6'][0] },
  { name: 'Mixed dorm · 4 bed', kind: 'Dorm', badge: 'bg-teal text-white', tagline: 'Just four beds, bigger lockers, your own bathroom.', facts: ['En-suite', 'Large locker', 'Quieter'], was: 899, price: 649, href: '/stays#book', image: ROOM_IMAGES['mixed-dorm-4'][0] },
  { name: 'Private double', kind: 'Private', badge: 'bg-ink text-white', tagline: 'Queen bed and a door that locks. Still part of the house.', facts: ['Private bath', 'AC', 'Work desk'], was: 2199, price: 1499, href: '/stays#book', image: ROOM_IMAGES['private-double'][0] },
  { name: 'Family homestay room', kind: 'Homestay', badge: 'bg-gold text-ink', tagline: 'Your own room in a vetted local home. Breakfast and dinner at the family table.', facts: ['2 meals', 'Private room', 'Local host'], was: hs.originalPrice, price: hs.price, href: '/stays#homestays', image: hs.images[0] },
  { name: 'Deluxe suite', kind: 'Private', badge: 'bg-ink text-white', tagline: 'King bed, balcony, Kanchenjunga. Darjeeling only.', facts: ['Balcony', 'King bed', 'Mini bar'], was: 3499, price: 2499, href: '/stays#book', image: ROOM_IMAGES['deluxe-suite'][0] },
]

export default function RoomTypes() {
  return (
    <section id="stays" className="section bg-white border-t border-line">
      <div className="container-site">
        <SectionHead kicker="Pick your bed" title={<>Sleep well. <span className="text-teal">Spend less.</span></>}
          aside={<p className="text-[15px] text-ink-3 max-w-[380px]">Every hostel bed gets fresh linen, a locker, a reading light, a charging point and a curtain. Homestays include breakfast and dinner. Taxes in the price.</p>} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
          {CARDS.map((r) => (
            <article key={r.name} className="card-hover bg-surface flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={r.image} alt={r.name} fill unoptimized sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                <span className={`absolute top-3 left-3 px-2.5 py-[5px] rounded-lg text-[11px] font-bold tracking-[0.1em] uppercase ${r.badge}`}>{r.kind}</span>
                {r.popular && <span className="absolute top-3 right-3 px-2.5 py-[5px] rounded-lg bg-ink text-gold text-[11px] font-bold tracking-[0.1em] uppercase">Most booked</span>}
              </div>
              <div className="p-[18px] flex flex-col gap-2.5 flex-1">
                <h3 className="display font-bold text-[26px] leading-none">{r.name}</h3>
                <p className="text-[14px] leading-relaxed text-ink-3 flex-1">{r.tagline}</p>
                <div className="flex flex-wrap gap-1.5">{r.facts.map((f) => <span key={f} className="chip bg-white">{f}</span>)}</div>
                <div className="flex items-end justify-between gap-2.5 pt-3 border-t border-line">
                  <div><s className="block text-[12px] text-ink-4">₹{r.was}</s><span className="font-display font-extrabold text-[30px] leading-none whitespace-nowrap">₹{r.price}<span className="font-sans text-[13px] font-medium text-ink-3">/night</span></span></div>
                  <Link href={r.href} className="btn-ink min-h-[40px] px-4 text-[16px]">Book</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
