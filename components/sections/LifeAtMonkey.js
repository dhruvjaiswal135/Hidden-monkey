import Image from 'next/image'
import Link from 'next/link'
import { LIFE_AT_MONKEY } from '@/content/images'

const MOMENTS = [
  { image: LIFE_AT_MONKEY[3].image, caption: 'Bonfire, second night running', place: 'Darjeeling', ratio: 'aspect-[4/5]' },
  { image: LIFE_AT_MONKEY[2].image, caption: 'Trek squad, 5:40 am', place: 'Tiger Hill', ratio: 'aspect-[4/3]' },
  { image: LIFE_AT_MONKEY[5].image, caption: 'Homestay kitchen, dinner prep', place: 'Lebong', ratio: 'aspect-[4/5]' },
  { image: LIFE_AT_MONKEY[1].image, caption: 'Somebody always has a guitar', place: 'Varanasi', ratio: 'aspect-[4/3]' },
  { image: LIFE_AT_MONKEY[0].image, caption: 'Doing nothing, together', place: 'Darjeeling', ratio: 'aspect-[4/5]' },
  { image: LIFE_AT_MONKEY[4].image, caption: 'Deadline day, rooftop edition', place: 'Work room', ratio: 'aspect-[4/3]' },
]

export default function LifeAtMonkey() {
  return (
    <section id="life" className="section bg-ink text-white overflow-hidden">
      <div className="container-site flex flex-wrap items-end justify-between gap-5 mb-9">
        <div><p className="kicker text-gold">Life at the house</p><h2 className="h2">Unfiltered.<br />Mostly unplanned.</h2></div>
        <Link href="/gallery" className="btn border border-white/30 text-white font-sans font-semibold normal-case tracking-normal text-[15px] min-h-[44px] px-5 hover:bg-white hover:text-ink">See the full gallery →</Link>
      </div>
      <div className="flex gap-3.5 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-6 lg:px-10 lg:pl-[max(40px,calc((100vw-1400px)/2+40px))]">
        {MOMENTS.map((m) => (
          <figure key={m.caption} className="m-0 shrink-0 snap-start flex flex-col gap-3">
            <div className={`relative h-[clamp(280px,36vw,440px)] ${m.ratio} rounded-[18px] overflow-hidden bg-jungle-moss`}><Image src={m.image} alt={m.caption} fill unoptimized sizes="50vw" className="object-cover" /></div>
            <figcaption className="flex justify-between gap-3 text-[14px] text-white/75"><span>{m.caption}</span><span className="text-gold font-semibold whitespace-nowrap">{m.place}</span></figcaption>
          </figure>
        ))}
        <span className="shrink-0 w-[clamp(2px,3vw,26px)]" />
      </div>
    </section>
  )
}
