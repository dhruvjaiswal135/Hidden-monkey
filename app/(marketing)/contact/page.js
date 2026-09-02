import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Hidden Monkey. Questions about bookings, partnerships, or just want to say hi — we\'d love to hear from you.',
  alternates: { canonical: 'https://hiddenmonkey.in/contact' },
}

const LOCATIONS = [
  { name: 'Darjeeling', address: 'Batasia Loop Road, Darjeeling, WB 734101', phone: '+91 98765 43210' },
  { name: 'Varanasi', address: 'Meer Ghat, Varanasi, UP 221001', phone: '+91 98765 43211' },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="bg-white border-b border-line">
          <div className="container-site pt-9 md:pt-16 pb-7">
            <p className="kicker">Get in touch</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">Say <span className="text-teal">hello.</span></h1>
              <div className="flex flex-col gap-3 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-ink-3">
                  Whether you have a booking question, partnership inquiry, or just want to share a travel story — we&apos;re all ears.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container-site grid md:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* Contact form */}
            <div className="card p-6 md:p-8">
              <p className="kicker">Message us</p>
              <h2 className="display text-d-h3 mb-6">Send us a message.</h2>
              <form className="flex flex-col gap-3">
                <label className="field">
                  <span className="field-label">Name</span>
                  <input type="text" placeholder="Your name" className="field-input cursor-text placeholder:text-ink-4 placeholder:font-normal" />
                </label>
                <label className="field">
                  <span className="field-label">Email</span>
                  <input type="email" placeholder="you@email.com" className="field-input cursor-text placeholder:text-ink-4 placeholder:font-normal" />
                </label>
                <label className="field">
                  <span className="field-label">Topic</span>
                  <select className="field-input">
                    <option>Booking Inquiry</option>
                    <option>Partnership</option>
                    <option>Group Booking</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="field">
                  <span className="field-label">Message</span>
                  <textarea rows={4} placeholder="Tell us what's on your mind..." className="field-input cursor-text resize-none placeholder:text-ink-4 placeholder:font-normal" />
                </label>
                <button type="submit" className="btn-gold w-full mt-1">Send Message</button>
              </form>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="kicker">Quick contact</p>
                <h2 className="display text-d-h3 mb-5">Reach us directly.</h2>
                <div className="flex flex-col gap-3">
                  <a href="mailto:hello@hiddenmonkey.in" className="card-hover flex items-center gap-4 p-4">
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-teal/10 flex items-center justify-center text-lg" aria-hidden="true">📧</span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-4">Email</span>
                      <span className="block text-[16px] font-semibold text-ink">hello@hiddenmonkey.in</span>
                    </span>
                  </a>
                  <a href="https://wa.me/919876543210" className="card-hover flex items-center gap-4 p-4">
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-teal/10 flex items-center justify-center text-lg" aria-hidden="true">💬</span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-4">WhatsApp</span>
                      <span className="block text-[16px] font-semibold text-ink">+91 98765 43210</span>
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <p className="kicker">Our locations</p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.name} className="card-hover p-5 flex flex-col gap-1.5">
                      <h3 className="display font-bold text-[24px] leading-none">{loc.name}</h3>
                      <p className="text-[14px] leading-relaxed text-ink-3">{loc.address}</p>
                      <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="inline-flex items-center min-h-[44px] text-[15px] font-semibold text-teal">{loc.phone}</a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card bg-surface p-5">
                <p className="text-[14px] font-semibold text-teal mb-1">⚡ Quick response</p>
                <p className="text-[14px] leading-relaxed text-ink-3">We typically respond within 2-4 hours during business hours (9 AM - 9 PM IST).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
