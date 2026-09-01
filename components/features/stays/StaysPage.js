'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RoomDetailModal from '@/components/modals/RoomDetailModal'
import { FAQList } from '@/components/sections/MiniFAQ'
import { useBooking, nightsBetween } from '@/context/BookingContext'
import { STAYS_COMMUNITY_IMAGE } from '@/content/images'
import { HOMESTAYS } from '@/content/homestays'
import { ALL_ROOMS } from '@/content/rooms'


const FILTERS = [['all', 'All rooms'], ['dorm', 'Dorms'], ['private', 'Private']]

const COMPARE = [
  ['Price per night', '₹499–549', '₹649', '₹1,499', '₹2,499'], ['Bathroom', 'Shared, cleaned 3×/day', 'En-suite, shared by 4', 'Private', 'Private'], ['Locker & curtain', 'Yes', 'Large locker', 'Wardrobe', 'Wardrobe + safe'], ['Air conditioning', 'Fans (Darjeeling: heater)', 'Fans', 'Yes', 'Yes'], ['Towel', '₹50 rental', '₹50 rental', 'Included', 'Included'], ['Work desk', 'Work room', 'Work room', 'In-room + work room', 'In-room + work room'], ['Breakfast', '₹149 add-on', '₹149 add-on', '₹149 add-on', 'Included'], ['Cancellation', 'Free to 48 hrs', 'Free to 48 hrs', 'Free to 48 hrs', 'Free to 72 hrs'],
]

const PASSES = [
  { label: 'Weekly', price: '3,149', per: '/ 7 nights', desc: 'Dorm bed, reserved desk, one load of laundry. 10% off the nightly rate.', featured: false },
  { label: 'Monthly · most popular', price: '11,999', per: '/ 30 nights', desc: 'Dorm bed, reserved desk, weekly laundry, locker upgrade, priority on all experiences. 25% off.', featured: true },
  { label: 'Monthly private', price: '29,999', per: '/ 30 nights', desc: 'Private double with desk and AC, weekly housekeeping, laundry, and the same community access.', featured: false },
]

const FAQ = [
  { q: 'What time is check-in and check-out?', a: 'Check-in from 2 pm, check-out by 11 am. Arriving early? Drop your bag in secure storage and hit the kitchen — free for all guests.' },
  { q: 'Are towels and linen provided?', a: 'Fresh linen for everyone. Towels are included in private rooms and rent for ₹50 in dorms.' },
  { q: 'Can I book a whole dorm for my group?', a: 'Yes — the 4-bed is perfect for that. Groups of five or more get up to 20% off; message us for a quote.' },
  { q: 'Is there a kitchen?', a: 'Open 24/7 with fridge, stove, microwave and utensils. Please clean up after yourself; the house runs on trust.' },
  { q: "What's your cancellation policy?", a: 'Free cancellation up to 48 hours before check-in (72 for the suite). Inside that window the first night is non-refundable.' },
]

const inr = (n) => n.toLocaleString('en-IN')

/* ─── Room row ─── */
function RoomRow({ room, nights, guests, onOpen, onReserve }) {
  const save = Math.round((1 - room.price / room.originalPrice) * 100)
  const perNight = room.category === 'dorm' ? room.price * guests : room.price * Math.ceil(guests / 2)
  return (
    <article className="card rounded-[22px] flex flex-wrap hover:shadow-lift transition-shadow">
      <button onClick={() => onOpen(room)} className="relative flex-[1_1_320px] min-h-[260px] grid grid-cols-[2fr_1fr] grid-rows-2 gap-1 p-1 text-left">
        <Image src={room.images[0]} alt={room.name} fill unoptimized sizes="50vw" className="!static row-span-2 w-full h-full object-cover rounded-[18px_4px_4px_18px]" />
        <Image src={room.images[1]} alt="" fill unoptimized sizes="25vw" className="!static w-full h-full object-cover rounded-[4px_18px_4px_4px]" />
        <Image src={room.images[2]} alt="" fill unoptimized sizes="25vw" className="!static w-full h-full object-cover rounded-[4px_4px_18px_4px]" />
        <span className={`absolute top-4 left-4 px-2.5 py-1.5 rounded-lg text-[11px] font-bold tracking-[0.1em] uppercase ${room.badge}`}>{room.kind}</span>
        {room.popular && <span className="absolute top-4 right-4 px-2.5 py-1.5 rounded-lg bg-ink text-gold text-[11px] font-bold tracking-[0.1em] uppercase">Most booked</span>}
      </button>
      <div className="flex-[1_1_320px] p-5 md:p-8 grid grid-cols-[1fr_auto] gap-5 content-between">
        <div className="col-span-2">
          <div className="flex flex-col gap-1.5 mb-2.5">
            <h2 className="display text-d-h3">{room.name}</h2>
            <span className="text-[13px] text-ink-3 flex flex-wrap gap-x-2 gap-y-1"><span><span className="text-gold">★</span> <strong>{room.rating}</strong> · {room.reviews} reviews</span><span>· {room.locations.join(' & ')}</span></span>
          </div>
          <p className="text-[16px] leading-relaxed text-ink-2 max-w-[600px] mb-3.5 [text-wrap:pretty]">{room.description}</p>
          <div className="flex flex-wrap gap-1.5">{room.facts.map((f) => <span key={f} className="chip text-[13px]">{f}</span>)}</div>
        </div>
        <div className="flex flex-col gap-0.5 self-end">
          <span className="text-[12px] text-ink-4">Was <s>₹{inr(room.originalPrice)}</s> · save {save}%</span>
          <span className="font-display font-extrabold text-[44px] leading-none whitespace-nowrap">₹{inr(room.price)}<span className="font-sans text-[14px] font-medium text-ink-3">&nbsp;/night</span></span>
          <span className="text-[13px] text-teal font-semibold">{nights > 0 ? `₹${inr(perNight * nights)} for ${nights} night${nights > 1 ? 's' : ''}, ${guests} guest${guests > 1 ? 's' : ''}` : 'Pick dates to see your total'}</span>
        </div>
        <div className="flex flex-col gap-2 self-end justify-self-end">
          <button onClick={() => onReserve(room)} className="btn-gold text-[19px] whitespace-nowrap">Reserve · pay ₹{inr(Math.round(room.price * 0.2))}&nbsp;now</button>
          <span className="text-[12px] text-ink-4 text-center">Free cancellation to 48 hrs</span>
        </div>
      </div>
    </article>
  )
}

/* ─── Homestay card ─── */
function HomestayCard({ h, onReserve }) {
  return (
    <article className="card-hover bg-surface flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={h.images[0]} alt={h.name} fill unoptimized sizes="(max-width:768px) 100vw, 25vw" className="object-cover" />
        <span className="absolute top-3 left-3 px-2.5 py-[5px] rounded-lg bg-gold text-ink text-[11px] font-bold tracking-[0.1em] uppercase">{h.town} · {h.destination}</span>
        <div className="absolute left-3 bottom-3 flex items-center gap-2 py-1.5 pl-1.5 pr-2.5 rounded-full bg-white/95"><Image src={h.avatar} alt={h.host} width={26} height={26} unoptimized className="w-[26px] h-[26px] rounded-full object-cover" /><span className="text-[12px] font-bold">Hosted by {h.host}</span></div>
      </div>
      <div className="p-[18px] flex flex-col gap-2.5 flex-1">
        <div className="flex justify-between gap-2 items-baseline"><h3 className="display font-bold text-[26px] leading-none">{h.name}</h3><span className="text-[13px] text-ink-3 whitespace-nowrap"><span className="text-gold">★</span> <strong>{h.rating}</strong></span></div>
        <p className="text-[14px] leading-relaxed text-ink-3 flex-1">{h.description}</p>
        <div className="flex flex-wrap gap-1.5">{h.facts.map((f) => <span key={f} className="chip bg-white">{f}</span>)}</div>
        <div className="flex items-end justify-between gap-2.5 pt-3 border-t border-line">
          <div><span className="block text-[12px] text-ink-4">Room for 2 · 2 meals · taxes in</span><span className="font-display font-extrabold text-[30px] leading-none whitespace-nowrap">₹{inr(h.price)}<span className="font-sans text-[13px] font-medium text-ink-3">/night</span></span></div>
          <button onClick={() => onReserve(h)} className="btn-ink min-h-[40px] px-4 text-[16px]">Reserve</button>
        </div>
      </div>
    </article>
  )
}

/* ─── Page ─── */
export default function StaysPage() {
  const { booking, updateBooking, openBooking } = useBooking()
  const { destination, checkIn, checkOut, guests } = booking
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const today = new Date().toISOString().split('T')[0]
  const nights = nightsBetween(checkIn, checkOut)

  const rooms = ALL_ROOMS.filter((r) => (filter === 'all' || r.category === filter) && (!destination || r.locations.includes(destination)))
  const homestays = HOMESTAYS.filter((h) => !destination || h.destination === destination)

  const reserve = (item, stayType = 'hostel') => openBooking({ stayType, roomType: item.name, roomId: item.id, price: item.price, destination: destination || item.locations?.[0] || item.destination })

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-line">
        <div className="container-site pt-9 md:pt-16 pb-7">
          <p className="kicker">Stays &amp; prices</p>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h1 className="display text-d-page">Hostel beds.<br /><span className="text-teal">Family homestays.</span></h1>
            <div className="flex flex-col gap-3 max-w-[440px]">
              <p className="text-[16px] leading-relaxed text-ink-3">Prices per night, taxes included. Hostel beds come with fresh linen, a locker, WiFi and hot water; homestays include breakfast and dinner. Weekly stays get 10% off, monthly 25%.</p>
              <div className="flex flex-wrap gap-2"><a href="#book" className="btn-ink min-h-[44px] px-[18px] text-[16px]">Hostel rooms ↓</a><a href="#homestays" className="btn-ghost min-h-[44px] px-[18px] text-[16px]">Homestays ↓</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky booking bar */}
      <section id="book" className="sticky top-[68px] z-40 bg-surface/95 backdrop-blur-lg border-b border-line">
        <div className="container-site py-3 flex flex-wrap gap-2.5 items-center">
          <div className="flex flex-wrap gap-1.5 flex-[1_1_420px] bg-white border border-line rounded-[14px] p-1.5">
            <label className="flex-[1_1_130px] flex flex-col gap-0.5 px-3 py-2"><span className="field-label tracking-[0.14em]">Where</span><select value={destination} onChange={(e) => updateBooking({ destination: e.target.value })} className="field-input text-[15px]"><option value="">Both houses</option><option value="Darjeeling">Darjeeling</option><option value="Varanasi">Varanasi</option></select></label>
            <label className="flex-[1_1_130px] flex flex-col gap-0.5 px-3 py-2 border-l border-line-light"><span className="field-label tracking-[0.14em]">Check-in</span><input type="date" min={today} value={checkIn} onChange={(e) => updateBooking({ checkIn: e.target.value })} className="field-input text-[15px]" /></label>
            <label className="flex-[1_1_130px] flex flex-col gap-0.5 px-3 py-2 border-l border-line-light"><span className="field-label tracking-[0.14em]">Check-out</span><input type="date" min={checkIn || today} value={checkOut} onChange={(e) => updateBooking({ checkOut: e.target.value })} className="field-input text-[15px]" /></label>
            <label className="flex-[1_1_110px] flex flex-col gap-0.5 px-3 py-2 border-l border-line-light"><span className="field-label tracking-[0.14em]">Guests</span><select value={guests} onChange={(e) => updateBooking({ guests: Number(e.target.value) })} className="field-input text-[15px]">{[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n === 5 ? '5+' : n}</option>)}</select></label>
          </div>
          <div className="flex gap-1.5 flex-wrap">{FILTERS.map(([id, label]) => <button key={id} onClick={() => setFilter(id)} className={filter === id ? 'pill-on' : 'pill-off'}>{label}</button>)}</div>
          <span className="ml-auto text-[13px] text-ink-3 font-semibold">{rooms.length} room type{rooms.length !== 1 ? 's' : ''} available</span>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-8 md:py-14">
        <div className="container-site flex flex-col gap-4">
          {rooms.map((r) => <RoomRow key={r.id} room={r} nights={nights} guests={guests} onOpen={setSelected} onReserve={(room) => reserve(room, 'hostel')} />)}
          {rooms.length === 0 && <div className="card p-10 text-center"><p className="display font-bold text-[26px] mb-1">No rooms match</p><p className="text-[14px] text-ink-3 mb-4">Try a different location or room type.</p><button onClick={() => { setFilter('all'); updateBooking({ destination: '' }) }} className="btn-ghost">Reset filters</button></div>}
        </div>
      </section>

      {/* Homestays */}
      <section id="homestays" className="section bg-white border-t border-line">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8">
            <div><p className="kicker text-gold">Homestays · new</p><h2 className="h2">Or stay with a family<br /><span className="text-teal">we'd stay with ourselves.</span></h2></div>
            <p className="max-w-[440px] text-[16px] leading-relaxed text-ink-3">Private rooms in local homes we have visited, eaten in and slept in. Breakfast and dinner are cooked by your host. You're still on the guest list for every hostel event — the house is a short walk away.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
            {homestays.map((h) => <HomestayCard key={h.id} h={h} onReserve={(x) => reserve(x, 'homestay')} />)}
          </div>
          <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3">
            {[['How we vet hosts', "We've slept in every room, eaten every dinner, checked locks, water and WiFi, and we re-visit each quarter."], ['Mix & match', 'Three nights in the dorm, three with a family. One booking, one WhatsApp thread, we move your bag.'], ['Same rules', '20% advance, free cancellation to 48 hours, taxes in the price. Hosts are paid the full room rate.']].map(([t, d]) => (
              <div key={t} className="p-[18px] rounded-2xl bg-surface border border-line"><p className="display font-bold text-[20px] mb-1">{t}</p><p className="text-[14px] leading-relaxed text-ink-3">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-10 md:py-[72px] bg-white border-t border-b border-line">
        <div className="container-site">
          <h2 className="display text-[clamp(34px,4.5vw,56px)] leading-[.92] mb-5">What's included, honestly</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-[14px]">
              <thead><tr className="text-left">{['Included', 'Dorms', '4-bed dorm', 'Private', 'Suite'].map((h, i) => <th key={h} className={`px-2.5 py-3 border-b-2 border-ink ${i ? 'font-display text-[18px] uppercase' : 'text-[11px] tracking-[0.14em] uppercase text-ink-4 font-bold'}`}>{h}</th>)}</tr></thead>
              <tbody>{COMPARE.map((row) => <tr key={row[0]}>{row.map((c, i) => <td key={i} className={`px-2.5 py-3 border-b border-line ${i ? 'text-ink-3' : 'font-semibold'}`}>{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Nomad passes */}
      <section id="nomad" className="section bg-teal text-white">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8">
            <div><p className="kicker text-gold">Work &amp; stay passes</p><h2 className="h2">Stay longer.<br />Pay less. Work better.</h2></div>
            <p className="max-w-[400px] text-[16px] leading-relaxed text-white/85">Bed + reserved desk in the work room + 100 Mbps fibre with 4G backup + laundry once a week. Quiet hours 10 am–12 pm for calls.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3.5">
            {PASSES.map((p) => (
              <div key={p.label} className={`p-6 rounded-card border border-white/20 flex flex-col gap-3 ${p.featured ? 'bg-gold text-ink' : 'bg-white/10 text-white'}`}>
                <span className="text-[12px] tracking-[0.16em] uppercase font-bold opacity-80">{p.label}</span>
                <span className="font-display font-extrabold text-[52px] leading-none">₹{p.price}<span className="font-sans text-[14px] font-medium opacity-80"> {p.per}</span></span>
                <p className="text-[15px] leading-relaxed opacity-90 flex-1">{p.desc}</p>
                <a href="https://wa.me/919876543210" className={`btn min-h-[44px] text-[17px] ${p.featured ? 'bg-ink text-white' : 'bg-white text-teal'}`}>Ask about dates</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group */}
      <section className="section bg-surface">
        <div className="container-site">
          <div className="grid md:grid-cols-2 rounded-hero overflow-hidden bg-ink text-white">
            <div className="p-7 md:p-14 flex flex-col gap-4 justify-center">
              <p className="text-[12px] tracking-[0.2em] uppercase font-bold text-gold">Groups of 5+</p>
              <h2 className="display text-[clamp(40px,5vw,72px)] leading-[.92]">Bring the whole crew.<br />Take the whole floor.</h2>
              <p className="text-[16px] leading-relaxed text-white/80 max-w-[480px]">Up to 20% off for five or more. Mix dorms and privates, book out a 4-bed for your own gang, and we'll set up a private bonfire night on request.</p>
              <div className="flex flex-wrap gap-3 items-center"><Link href="/contact" className="btn-gold hover:bg-white hover:text-ink">Get a group quote</Link><span className="text-[14px] text-white/70">Reply within 2–4 hrs</span></div>
            </div>
            <div className="relative min-h-[320px]"><Image src={STAYS_COMMUNITY_IMAGE} alt="Group at the hostel" fill unoptimized sizes="50vw" className="object-cover" /></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-14 md:pb-24 bg-surface">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="display text-[clamp(34px,4.5vw,56px)] leading-[.92] mb-5">Room questions</h2>
          <FAQList items={FAQ} size="text-[22px]" />
        </div>
      </section>

      <RoomDetailModal room={selected} isOpen={!!selected} onClose={() => setSelected(null)} />
    </>
  )
}
