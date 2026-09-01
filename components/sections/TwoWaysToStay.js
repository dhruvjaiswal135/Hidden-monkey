import Image from 'next/image'
import Link from 'next/link'
import SectionHead from '@/components/ui/SectionHead'
import { WHY_HIDDEN_MONKEY, EXPERIENCES } from '@/content/images'
import { HOMESTAY_FROM_PRICE } from '@/content/homestays'

const WAYS = [
  { kicker: 'Hostel', badge: 'bg-teal text-white', title: 'The Monkey House', desc: 'Pod dorms and private rooms around one long table. Shared kitchen, work room, rooftop, and something happening every evening.', points: ['Mixed & women-only dorms, privates, one suite', 'Shared kitchen open 24/7', 'Work room, 100 Mbps fibre', 'Bonfire, yoga, open mic, treks'], note: 'Dorm bed · taxes in', price: 499, cta: 'See hostel rooms', href: '/stays#book', image: WHY_HIDDEN_MONKEY.realPeople },
  { kicker: 'Homestay · new', badge: 'bg-gold text-ink', title: 'Stay with a family', desc: "A private room in a local home we've vetted and visited. Home-cooked breakfast and dinner, a host who knows the town, and the hostel's events whenever you want them.", points: ['Private room, private or family bathroom', 'Breakfast & dinner cooked at home', 'Hosts vetted, visited, and on WhatsApp', 'Walk-in access to all hostel events'], note: 'Room for 2 · meals & taxes in', price: HOMESTAY_FROM_PRICE, cta: 'See homestays', href: '/stays#homestays', image: EXPERIENCES.cookingClass },
]

export default function TwoWaysToStay() {
  return (
    <section id="ways" className="section bg-surface">
      <div className="container-site">
        <SectionHead kicker="Two ways to stay" title={<>Bunk with travellers,<br /><span className="text-teal">or live with a family.</span></>}
          aside={<p className="max-w-[420px] text-[16px] leading-relaxed text-ink-3">Same towns, same team, same evening schedule. Pick the hostel for the buzz, the homestay for home-cooked dinners and a door that closes. Switch between them mid-trip if you like.</p>} />
        <div className="flex flex-wrap gap-4">
          {WAYS.map((w) => (
            <article key={w.title} className="flex-[1_1_440px] min-w-0 card rounded-hero flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image src={w.image} alt={w.title} fill unoptimized className="object-cover" sizes="(max-width:900px) 100vw, 50vw" />
                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-[0.12em] uppercase ${w.badge}`}>{w.kicker}</span>
              </div>
              <div className="p-5 md:p-8 flex flex-col gap-4 flex-1">
                <div><h3 className="display text-[clamp(32px,3.5vw,48px)] leading-[.95] mb-2">{w.title}</h3><p className="text-[16px] leading-relaxed text-ink-2 [text-wrap:pretty]">{w.desc}</p></div>
                <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">{w.points.map((p) => <li key={p} className="flex gap-2 text-[14px] leading-snug text-ink-2"><span className="text-teal font-extrabold">✓</span>{p}</li>)}</ul>
                <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-line">
                  <div><span className="block text-[12px] text-ink-4 font-semibold">{w.note}</span><span className="font-display font-extrabold text-[36px] leading-none">From ₹{w.price.toLocaleString('en-IN')}<span className="font-sans text-[13px] font-medium text-ink-3">/night</span></span></div>
                  <Link href={w.href} className="btn-ink">{w.cta}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 px-6 py-[18px] card rounded-2xl flex flex-wrap items-center gap-y-2.5 gap-x-7 text-[14px] text-ink-2">
          <strong className="font-display text-[18px] uppercase tracking-[0.04em]">Both include</strong>
          {['Every community event', '100 Mbps WiFi', 'Free cancellation to 48 hrs', 'A local team on WhatsApp 9–9', 'Taxes in the price'].map((t, i) => <span key={t} className="contents">{i > 0 && <span>·</span>}<span>{t}</span></span>)}
        </div>
      </div>
    </section>
  )
}
