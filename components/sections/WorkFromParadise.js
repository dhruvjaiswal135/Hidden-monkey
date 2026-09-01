import Image from 'next/image'
import Link from 'next/link'
import { WORK_FROM_PARADISE, WHY_HIDDEN_MONKEY } from '@/content/images'

const STATS = [['100', 'Mbps', 'Fibre, tested daily'], ['24', '/7', 'Work room & power backup'], ['2', 'hrs', 'Call-friendly quiet hours']]

export default function WorkFromParadise() {
  return (
    <section id="work" className="section bg-teal text-white">
      <div className="container-site flex flex-wrap gap-7 lg:gap-16 items-center">
        <div className="flex-[1_1_380px] min-w-0">
          <p className="kicker text-gold">Work &amp; stay</p>
          <h2 className="h2 mb-[18px]">Your 9-to-5 with a<br /><span className="text-gold">Kanchenjunga view.</span></h2>
          <p className="text-[17px] leading-relaxed text-white/[0.88] max-w-[480px] mb-7 [text-wrap:pretty]">Dedicated work room, 100 Mbps fibre with 4G backup, power that stays on, and a rule: no calls in the dorm. Stay a week or a month and the rate drops.</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 mb-7">
            {STATS.map(([n, u, l]) => <div key={l} className="p-4 rounded-[14px] bg-white/10 border border-white/20"><span className="block font-display font-extrabold text-[40px] leading-none">{n}<span className="text-[20px]">{u}</span></span><span className="text-[13px] text-white/80">{l}</span></div>)}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/stays#nomad" className="btn-gold hover:bg-white hover:text-ink">See weekly &amp; monthly rates</Link>
            <span className="text-[14px] text-white/85">Monthly from ₹11,999 · dorm bed + desk</span>
          </div>
        </div>
        <div className="flex-[1_1_380px] min-w-0 grid grid-cols-2 gap-3">
          <div className="relative col-span-2 rounded-card overflow-hidden aspect-video"><Image src={WORK_FROM_PARADISE} alt="Working at Hidden Monkey" fill unoptimized sizes="50vw" className="object-cover" /></div>
          <div className="relative rounded-card overflow-hidden aspect-square"><Image src={WHY_HIDDEN_MONKEY.workFriendly} alt="Work-friendly space" fill unoptimized sizes="25vw" className="object-cover" /></div>
          <div className="rounded-card p-5 bg-jungle flex flex-col justify-between"><p className="text-[15px] leading-relaxed text-white/[0.88]">"Finally a place where remote work meets real community. The WiFi actually works."</p><p className="mt-3 text-[13px] text-gold font-semibold">Marco · Italy · stayed 5 weeks</p></div>
        </div>
      </div>
    </section>
  )
}
