import Image from 'next/image'
import Link from 'next/link'
import { EXPERIENCES } from '@/content/images'

const EVENTS = [
  { day: 'Daily', time: '6:30 am', title: 'Sunrise yoga', meta: 'Rooftop · 1 hr · mats provided', price: 'Free' },
  { day: 'Tue & Thu', time: '4 pm', title: "Chef Auntie's cooking class", meta: 'Varanasi · 3 hrs · eat what you cook', price: '₹499' },
  { day: 'Wednesday', time: '7 am', title: 'Hidden trails trek', meta: 'Darjeeling · 5 hrs · 3 spots left', price: '₹299' },
  { day: 'Friday', time: '9 pm', title: 'Open mic night', meta: 'Common room · bring a talent or just a chair', price: 'Free' },
  { day: 'Saturday', time: '8 pm', title: 'Bonfire & stories', meta: 'Garden · marshmallows, chai, 20 spots', price: 'Free' },
  { day: 'Evenings', time: '6 pm', title: 'Ganga aarti walk', meta: 'Varanasi · 45 min · meet at reception', price: 'Free' },
]

export default function CommunityEvents() {
  return (
    <section id="events" className="section bg-white border-b border-line">
      <div className="container-site flex flex-wrap gap-8 lg:gap-20 items-stretch">
        <div className="flex-[1_1_380px] min-w-0 flex flex-col">
          <p className="kicker">This week at the house</p>
          <h2 className="h2 mb-[18px]">Show up.<br /><span className="text-teal">That's the whole plan.</span></h2>
          <p className="text-[17px] leading-relaxed text-ink-3 max-w-[440px] mb-6 [text-wrap:pretty]">Most of it is free. Sign up on the board by the kitchen, or just wander in. Homestay guests are invited to everything — the hostel is a two-minute walk.</p>
          <div className="relative flex-1 min-h-[240px] rounded-card overflow-hidden">
            <Image src={EXPERIENCES.culturalNights} alt="Bonfire night" fill unoptimized sizes="50vw" className="object-cover" />
            <span className="absolute left-4 bottom-4 px-3 py-1.5 rounded-full bg-ink/70 text-white text-[13px] font-semibold">Saturday bonfire, Batasia Loop</span>
          </div>
        </div>
        <div className="flex-[1.3_1_420px] min-w-0">
          <ol className="flex flex-col border-t border-line">
            {EVENTS.map((e) => (
              <li key={e.title} className="grid grid-cols-[96px_1fr_auto] gap-4 items-center py-[18px] border-b border-line">
                <div><span className="block text-[11px] tracking-[0.14em] uppercase font-bold text-teal">{e.day}</span><span className="font-display font-extrabold text-[26px] leading-none">{e.time}</span></div>
                <div><h3 className="display font-bold text-[24px] leading-none mb-[3px]">{e.title}</h3><p className="text-[14px] text-ink-3">{e.meta}</p></div>
                <span className={`px-3 py-1.5 rounded-full text-[13px] font-bold whitespace-nowrap ${e.price === 'Free' ? 'bg-teal/10 text-teal' : 'bg-surface text-ink'}`}>{e.price}</span>
              </li>
            ))}
          </ol>
          <Link href="/experiences" className="inline-flex items-center gap-2 min-h-[44px] mt-5 font-semibold text-[15px]">Full schedule &amp; paid trips <span>→</span></Link>
        </div>
      </div>
    </section>
  )
}
