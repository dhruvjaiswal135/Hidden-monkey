import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import SectionHead from '@/components/ui/SectionHead'
import { STAYS_COMMUNITY_IMAGE } from '@/content/images'

export const metadata = {
  title: 'About us',
  description: 'We started Hidden Monkey to create a home for travelers — not tourists. Learn our story, our values, and why community comes first.',
  alternates: { canonical: 'https://hiddenmonkey.in/about' },
}

const VALUES = [
  { icon: '🤝', title: 'Community First', desc: "We don't just give you a bed. We give you a tribe." },
  { icon: '🌍', title: 'Travel With Purpose', desc: 'Sustainable stays that give back to the places we love.' },
  { icon: '🔑', title: 'Accessible Adventure', desc: 'World-class experiences at backpacker-friendly prices.' },
  { icon: '💛', title: 'Authentic Spaces', desc: 'No cookie-cutter hostels. Every location has its own soul.' },
]

const STATS = [
  { value: '12k+', label: 'Happy Travelers' },
  { value: '50+', label: 'Countries' },
  { value: '2', label: 'Destinations' },
  { value: '4.9', label: 'Avg Rating' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="bg-white border-b border-line">
          <div className="container-site pt-9 md:pt-16 pb-7">
            <p className="kicker">Our story</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">A home for travelers,<br /><span className="text-teal">not tourists.</span></h1>
              <div className="flex flex-col gap-3 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-ink-3">
                  Hidden Monkey was born from a simple idea: the best travel memories aren&apos;t made in hotel rooms — they&apos;re made in common rooms, around bonfires, and over shared meals with strangers who become lifelong friends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-10 md:py-14">
          <div className="container-site">
            <div className="relative h-[280px] md:h-[440px] rounded-hero overflow-hidden">
              <Image
                src={STAYS_COMMUNITY_IMAGE}
                alt="Hidden Monkey community"
                fill
                sizes="(max-width: 768px) 100vw, 1400px"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-9 md:left-9">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold mb-1.5">Est. 2023</p>
                <p className="display text-white text-[clamp(26px,3.5vw,44px)] leading-[.95]">Where strangers become travel family</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-white border-t border-b border-line">
          <div className="container-site">
            <SectionHead kicker="What we believe" title={<>Our <span className="text-teal">values.</span></>} />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="card p-6 flex flex-col gap-2.5">
                  <span className="text-3xl" aria-hidden="true">{v.icon}</span>
                  <h3 className="display font-bold text-[24px] leading-none">{v.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-3">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission + stats (dark accent) */}
        <section className="section bg-jungle text-white">
          <div className="container-site">
            <p className="kicker text-gold">Our mission</p>
            <h2 className="display text-[clamp(34px,4.5vw,64px)] leading-[.95] max-w-[980px]">
              To build the most <span className="text-gold">welcoming community</span> of travelers in India — one hostel, one chai, one conversation at a time.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-12 pt-10 border-t border-white/15">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-extrabold text-[clamp(40px,5vw,64px)] leading-none text-gold mb-1.5">{s.value}</p>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/stays" className="btn-gold">Book your stay</Link>
              <span className="text-[14px] text-white/70">Darjeeling &amp; Varanasi</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
