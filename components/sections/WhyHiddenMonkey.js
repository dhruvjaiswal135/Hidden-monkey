import Link from 'next/link'

const REASONS = [
  { stat: '80%', title: 'Arrive solo, leave in a group', text: 'Four in five guests check in alone. Our common rooms, family dinners and shared kitchen make sure that lasts about an hour.' },
  { stat: '₹499', title: 'Honest prices, no surprise fees', text: 'Taxes included. Linen, locker, WiFi and hot showers included. Pay a small advance, settle the rest at check-in by UPI, card or cash.' },
  { stat: '4.9★', title: 'Safe by design, not by accident', text: "Women-only dorms with keycard access, CCTV in common areas, staff awake 24 hours, and homestay hosts we've met in person." },
  { stat: '80+', title: 'Experiences run by locals', text: 'Tiger Hill sunrise, tea garden walks, aarti boat rides, cooking with Chef Auntie. Hosted by people who grew up here.' },
]

export default function WhyHiddenMonkey() {
  return (
    <section id="why" className="section bg-surface border-t border-line">
      <div className="container-site flex flex-wrap gap-8 lg:gap-20 items-start">
        <div className="flex-[1_1_380px] min-w-0 lg:sticky lg:top-24">
          <p className="kicker">Why a hostel, why this one</p>
          <h2 className="h2 mb-[18px]">A hotel gives you a room.<br /><span className="text-gold">We give you a table to sit at.</span></h2>
          <p className="text-[17px] leading-relaxed text-ink-3 max-w-[480px] mb-6 [text-wrap:pretty]">Most of our guests arrive alone. Almost none of them eat alone. Everything here — the long kitchen table, the evening schedule, the rooftop — is built to make the first hello easy.</p>
          <Link href="/about" className="inline-flex items-center gap-2 min-h-[44px] font-semibold text-[15px]">Read how we started <span>→</span></Link>
        </div>
        <div className="flex-[1.3_1_420px] min-w-0 grid gap-3.5">
          {REASONS.map((r) => (
            <div key={r.title} className="grid grid-cols-[auto_1fr] gap-5 p-6 card hover:border-teal transition-colors">
              <span className="font-display font-extrabold text-[clamp(40px,4vw,56px)] leading-none text-teal min-w-[88px]">{r.stat}</span>
              <div><h3 className="display font-bold text-[26px] leading-none tracking-[0.01em] mb-1.5">{r.title}</h3><p className="text-[15px] leading-relaxed text-ink-3 [text-wrap:pretty]">{r.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
