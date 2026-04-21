'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

const FAQS = [
  {
    category: 'Booking',
    items: [
      { q: 'How do I book a stay?', a: 'You can book directly through our website by clicking "Book Your Stay" and selecting your destination, dates, and room type. We also accept bookings via WhatsApp and email.' },
      { q: 'What is the check-in and check-out time?', a: 'Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be available on request, subject to availability.' },
      { q: 'Do I need to pay in advance?', a: 'We require a small advance to confirm your booking. The remaining amount can be paid at check-in. We accept UPI, cards, and cash.' },
      { q: 'Can I modify or cancel my booking?', a: 'Yes! Free cancellation is available up to 48 hours before check-in. See our cancellation policy for full details.' },
    ],
  },
  {
    category: 'Stays',
    items: [
      { q: 'What types of rooms do you offer?', a: 'We offer Mixed Dorms (6-bed), Female-Only Dorms (6-bed), and Private Rooms. All rooms include fresh linens, personal lockers, and free WiFi.' },
      { q: 'Is it safe for solo female travelers?', a: 'Absolutely. We have female-only dorms with keycard access, and our staff is trained to ensure a safe, welcoming environment for all guests.' },
      { q: 'Do you provide towels and toiletries?', a: 'Yes! Fresh towels are provided. We also have basic toiletries available. Bring your own if you have specific preferences.' },
      { q: 'Is there WiFi?', a: 'Yes, we have 100+ Mbps fiber internet across all our properties. Perfect for digital nomads and remote workers.' },
    ],
  },
  {
    category: 'Experiences',
    items: [
      { q: 'Are experiences included in the room price?', a: 'Many of our community events (bonfire nights, yoga sessions, game nights) are free. Some curated experiences like treks and workshops have a small fee.' },
      { q: 'Can non-guests join experiences?', a: 'Some experiences are open to non-guests on a limited basis. Guests always get priority booking.' },
      { q: 'How do I sign up for an experience?', a: 'You can sign up through the experiences page on our website, or ask at the front desk when you check in.' },
    ],
  },
  {
    category: 'General',
    items: [
      { q: 'What is the minimum age requirement?', a: 'Guests must be at least 18 years old. Guests under 18 must be accompanied by a parent or guardian.' },
      { q: 'Do you have kitchen facilities?', a: 'Yes! All our properties have a shared kitchen where guests can cook their own meals.' },
      { q: 'Is there parking available?', a: 'Limited parking may be available depending on the location. Please contact us in advance to check availability.' },
    ],
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#E6E4DF] last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left group">
        <span className="text-[14px] font-semibold text-[#1E1F1C] pr-4 group-hover:text-[#128790] transition-colors">{item.q}</span>
        <span className={`w-6 h-6 flex items-center justify-center rounded-full bg-[#FBFBF9] border border-[#E6E4DF] shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>
          <svg className="w-3 h-3 text-[#128790]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </span>
      </button>
      {open && (
        <div className="pb-4 pr-8">
          <p className="text-[13px] text-[#6B665E] font-light leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="pt-12 pb-8 bg-[#FBFBF9] border-b border-[#E6E4DF]">
          <Container className="max-w-[800px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#128790]" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">Help Center</span>
            </div>
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.03em] mb-4">
              Frequently asked <span className="text-[#FBB11A]">questions.</span>
            </h1>
            <p className="text-[#6B665E] text-[15px] font-light">Everything you need to know about staying with us.</p>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container className="max-w-[800px]">
            <div className="space-y-10">
              {FAQS.map((group, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-[2px] bg-[#FBB11A]" />
                    <span className="text-[9px] font-bold text-[#FBB11A] uppercase tracking-[0.2em]">{group.category}</span>
                  </div>
                  <div className="bg-[#FBFBF9] border border-[#E6E4DF] rounded-[20px] px-5">
                    {group.items.map((item, j) => <FAQItem key={j} item={item} />)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-6 bg-[#128790]/5 border border-[#128790]/10 rounded-[20px]">
              <p className="text-[14px] font-semibold text-[#1E1F1C] mb-1">Still have questions?</p>
              <p className="text-[12px] text-[#6B665E] mb-4">We&apos;re happy to help anytime.</p>
              <a href="/contact" className="inline-flex px-6 py-2 bg-[#128790] hover:bg-[#0e6e75] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors">
                Contact Us
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
