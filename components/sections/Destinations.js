import Image from 'next/image'
import Link from 'next/link'
import SectionHead from '@/components/ui/SectionHead'
import { DESTINATIONS } from '@/content/images'

const LIST = [
  { id: 'darjeeling', name: 'Darjeeling', tagline: 'Where clouds become friends', description: 'Tea gardens, the toy train, and Kanchenjunga turning pink at 5 am. Two hostels above the Batasia Loop and family homestays in Lebong.', image: DESTINATIONS.darjeeling.hero, temp: '10–20°C', best: 'Mar–May, Sep–Nov', hostels: 2, homestays: 2, exps: 12, price: 499 },
  { id: 'varanasi', name: 'Varanasi', tagline: 'Where time stands still', description: 'Sunrise boat rides, the evening aarti, and a riverside house at Assi Ghat. Homestays in old-city havelis a lane away.', image: DESTINATIONS.varanasi.hero, temp: '25–35°C', best: 'Oct–Mar', hostels: 1, homestays: 2, exps: 9, price: 499 },
]

export default function Destinations() {
  return (
    <section id="destinations" className="section bg-white border-t border-line">
      <div className="container-site">
        <SectionHead kicker="Two towns, two moods" title={<>Mountains or <span className="text-teal">the river?</span></>}
          aside={<Link href="/destinations" className="font-semibold text-[15px] inline-flex items-center gap-2 min-h-[44px]">Compare both destinations <span>→</span></Link>} />
        <div className="flex flex-wrap gap-5">
          {LIST.map((d) => (
            <Link key={d.id} href={`/destinations#${d.id}`} className="group flex-[1_1_420px] min-w-0 relative block rounded-hero overflow-hidden min-h-[520px] bg-jungle text-white hover:text-white isolate">
              <Image src={d.image} alt={d.name} fill unoptimized sizes="(max-width:900px) 100vw, 50vw" className="object-cover transition-transform duration-[800ms] ease-out-expo group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,47,42,0)_30%,rgba(15,47,42,.92)_100%)]" />
              <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                {[d.temp, `Best: ${d.best}`].map((t) => <span key={t} className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-[12px] font-semibold">{t}</span>)}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col gap-3.5">
                <div><p className="text-[13px] tracking-[0.14em] uppercase font-bold text-gold mb-1">{d.tagline}</p><h3 className="display text-[clamp(48px,6vw,88px)] leading-[.9]">{d.name}</h3></div>
                <p className="text-[16px] leading-relaxed text-white/85 max-w-[460px] [text-wrap:pretty]">{d.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-white/20">
                  <div className="flex gap-[18px] text-[13px] text-white/80"><span><strong className="text-white">{d.hostels}</strong> hostels</span><span><strong className="text-white">{d.homestays}</strong> homestays</span><span><strong className="text-white">{d.exps}</strong> experiences</span></div>
                  <span className="font-display font-bold text-[22px] uppercase tracking-[0.02em]">From ₹{d.price}<span className="font-sans text-[14px] text-white/70 font-medium normal-case tracking-normal">/night</span></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
