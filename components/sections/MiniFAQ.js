import Link from 'next/link'

export const HOME_FAQ = [
  { q: 'Is a hostel dorm actually comfortable?', a: 'Ours are pod-style: a proper mattress, blackout curtain, reading light, charging point and a locker your backpack fits in. Quiet hours run 11 pm to 7 am and we enforce them.' },
  { q: "What's the difference between the hostel and a homestay?", a: "The hostel is our own house: dorms, private rooms, shared kitchen and the evening schedule. A homestay is a private room in a local family's home that we have visited and vetted — breakfast and dinner are cooked by your host, and you can still join every hostel event." },
  { q: 'What does the ₹499 include?', a: 'Your bed, fresh linen, locker, WiFi, hot showers and all taxes. Towels come with private rooms and rent for ₹50 in dorms. Most community events are free.' },
  { q: 'How does payment and cancellation work?', a: 'A 20% advance confirms the booking; pay the rest at check-in by UPI, card or cash. Cancel free up to 48 hours before arrival. Inside 48 hours the first night is non-refundable.' },
  { q: "I'm travelling alone. Will I meet people?", a: 'Almost certainly. Around 80% of guests arrive solo. Family dinner, the kitchen table and the evening schedule do the introductions for you.' },
]

export function FAQList({ items, size = 'text-[24px]' }) {
  return (
    <div className="flex flex-col border-t border-line">
      {items.map((q) => (
        <details key={q.q} className="group border-b border-line">
          <summary className={`cursor-pointer flex items-center justify-between gap-4 py-[18px] min-h-[44px] display font-bold leading-[1.1] ${size}`}>{q.q}<span className="shrink-0 w-8 h-8 rounded-full border border-line inline-flex items-center justify-center text-[18px] text-teal font-sans group-open:rotate-45 transition-transform">+</span></summary>
          <p className="pr-12 pb-[18px] text-[15px] leading-relaxed text-ink-3">{q.a}</p>
        </details>
      ))}
    </div>
  )
}

export default function MiniFAQ() {
  return (
    <section className="section bg-white border-t border-line">
      <div className="container-site flex flex-wrap gap-7 lg:gap-16 items-start">
        <div className="flex-[1_1_300px] min-w-0">
          <h2 className="display text-[clamp(40px,5vw,64px)] leading-[.92] mb-3.5">Before you book</h2>
          <p className="text-[16px] text-ink-3 leading-relaxed mb-5">The questions every first-timer asks. The rest are on the <Link href="/faq">FAQ page</Link>, or just WhatsApp us.</p>
          <a href="https://wa.me/919876543210" className="btn-ink font-sans font-semibold normal-case tracking-normal text-[15px]">WhatsApp +91 98765 43210</a>
        </div>
        <div className="flex-[2_1_480px] min-w-0"><FAQList items={HOME_FAQ} /></div>
      </div>
    </section>
  )
}
