import Image from 'next/image'
import { TRIBE_AVATARS } from '@/content/images'

const REVIEWS = [
  { name: 'Marco', country: 'Italy', meta: 'Digital nomad · 5 weeks', quote: 'Finally found a place where remote work meets real community. The WiFi actually works, and the people here become your friends.', tag: 'Work & stay', avatar: TRIBE_AVATARS.marco },
  { name: 'Priya', country: 'India', meta: 'Solo traveller · Female dorm', quote: "As a solo female traveller, I felt safer here than anywhere else I've stayed. The whole vibe just says 'we've got you.'", tag: 'Safe & welcoming', avatar: TRIBE_AVATARS.aisha },
  { name: 'Aisha', country: 'UK', meta: 'Homestay · Lebong · 6 nights', quote: 'Three nights in the dorm, then three with the Tamang family. Aama taught me to make sel roti and I cried when I left.', tag: 'Homestay', avatar: TRIBE_AVATARS.sarah },
]
const CODES = ['AU', 'IT', 'US', 'DE', 'BR', 'FR', 'GB', 'JP', 'CA', 'NL', 'ES', 'IN']

export default function MeetTheTribe() {
  return (
    <section id="community" className="section bg-surface">
      <div className="container-site">
        <div className="text-center max-w-[860px] mx-auto mb-11">
          <p className="text-[12px] tracking-[0.2em] uppercase font-bold text-teal mb-3.5">4.8 average · 2,100+ reviews</p>
          <blockquote className="display font-bold text-[clamp(30px,4.5vw,56px)] leading-none [text-wrap:balance]">"I came for a week and stayed for three. <span className="text-gold">Made best friends</span>, went on the most amazing treks, and learned more about myself than in years at home."</blockquote>
          <p className="mt-[18px] text-[15px] text-ink-3 font-semibold">Sarah · Australia · Darjeeling, Nov 2025</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
          {REVIEWS.map((t) => (
            <div key={t.name} className="card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3"><Image src={t.avatar} alt={t.name} width={44} height={44} unoptimized className="w-11 h-11 rounded-full object-cover" /><div><p className="font-bold text-[15px]">{t.name} <span className="text-ink-4 font-medium">· {t.country}</span></p><p className="text-[12px] text-ink-4">{t.meta}</p></div><span className="ml-auto text-gold text-[14px] tracking-[1px]">★★★★★</span></div>
              <p className="text-[15px] leading-relaxed text-ink-2 flex-1">{t.quote}</p>
              <span className="self-start px-2.5 py-[5px] rounded-full bg-teal/[0.08] text-teal text-[12px] font-bold">{t.tag}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-2.5 mt-8 text-[13px] text-ink-3">
          <span className="font-bold text-ink">Guests from</span>
          {CODES.map((c) => <span key={c} className="px-2 py-1 rounded-md bg-white border border-line font-semibold">{c}</span>)}
          <span>and 38 more countries</span>
        </div>
      </div>
    </section>
  )
}
