import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import Image from 'next/image'

export const metadata = {
  title: 'About Us | Hidden Monkey Hostels',
  description: 'We started Hidden Monkey to create a home for travelers — not tourists. Learn our story, our values, and why community comes first.',
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
        <section className="pt-12 pb-16 bg-[#FBFBF9] border-b border-[#E6E4DF]">
          <Container className="max-w-[1000px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#128790]" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">Our Story</span>
            </div>
            <h1 className="text-[36px] md:text-[52px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.03em] mb-5">
              A home for travelers,<br />
              <span className="text-[#FBB11A]">not tourists.</span>
            </h1>
            <p className="text-[#6B665E] text-[15px] md:text-[17px] font-light leading-relaxed max-w-2xl">
              Hidden Monkey was born from a simple idea: the best travel memories aren&apos;t made in hotel rooms — they&apos;re made in common rooms, around bonfires, and over shared meals with strangers who become lifelong friends.
            </p>
          </Container>
        </section>

        {/* Image */}
        <section className="py-12 bg-white">
          <Container className="max-w-[1000px]">
            <div className="relative h-[280px] md:h-[400px] rounded-[28px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=85"
                alt="Hidden Monkey community"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white/70 text-[11px] font-bold uppercase tracking-widest">Est. 2023</p>
                <p className="text-white text-[20px] font-bold">Where strangers become travel family</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-16 bg-[#FBFBF9] border-t border-[#E6E4DF]">
          <Container className="max-w-[1000px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#FBB11A]" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#FBB11A]">What We Believe</span>
            </div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1E1F1C] leading-[1.1] tracking-[-0.02em] mb-8">
              Our <span className="text-[#128790]">values.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((v, i) => (
                <div key={i} className="p-5 bg-white rounded-[20px] border border-[#E6E4DF]">
                  <span className="text-2xl mb-3 block">{v.icon}</span>
                  <h3 className="text-[16px] font-bold text-[#1E1F1C] mb-1">{v.title}</h3>
                  <p className="text-[13px] text-[#6B665E] font-light leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-14 bg-[#1E1F1C]">
          <Container className="max-w-[1000px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {STATS.map((s, i) => (
                <div key={i}>
                  <p className="text-[32px] md:text-[40px] font-bold text-[#FBB11A] leading-none mb-1">{s.value}</p>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-16 bg-white">
          <Container className="max-w-[700px] text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790] mb-4">Our Mission</p>
            <p className="text-[20px] md:text-[26px] font-bold text-[#1E1F1C] leading-[1.3] tracking-[-0.01em]">
              To build the most <span className="text-[#128790]">welcoming community</span> of travelers in India — one hostel, one chai, one conversation at a time.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
