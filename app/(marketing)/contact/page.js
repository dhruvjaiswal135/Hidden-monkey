import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Contact Us | Hidden Monkey Hostels',
  description: 'Get in touch with Hidden Monkey. Questions about bookings, partnerships, or just want to say hi — we\'d love to hear from you.',
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
        <section className="pt-12 pb-16 bg-[#FBFBF9] border-b border-[#E6E4DF]">
          <Container className="max-w-[900px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#128790]" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">Get In Touch</span>
            </div>
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.03em] mb-4">
              Say <span className="text-[#FBB11A]">hello.</span>
            </h1>
            <p className="text-[#6B665E] text-[15px] font-light max-w-lg">
              Whether you have a booking question, partnership inquiry, or just want to share a travel story — we&apos;re all ears.
            </p>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container className="max-w-[900px]">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <p className="text-[9px] font-bold text-[#128790] uppercase tracking-[0.18em] mb-4">Send us a message</p>
                <form className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold text-[#1E1F1C] uppercase tracking-widest block mb-1.5">Name</label>
                    <input type="text" className="w-full px-4 py-2.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[12px] text-[13px] text-[#1E1F1C] placeholder:text-[#9A948C] focus:outline-none focus:border-[#128790] transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#1E1F1C] uppercase tracking-widest block mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-2.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[12px] text-[13px] text-[#1E1F1C] placeholder:text-[#9A948C] focus:outline-none focus:border-[#128790] transition-colors" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#1E1F1C] uppercase tracking-widest block mb-1.5">Topic</label>
                    <select className="w-full px-4 py-2.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[12px] text-[13px] text-[#1E1F1C] focus:outline-none focus:border-[#128790] transition-colors">
                      <option>Booking Inquiry</option>
                      <option>Partnership</option>
                      <option>Group Booking</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#1E1F1C] uppercase tracking-widest block mb-1.5">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[12px] text-[13px] text-[#1E1F1C] placeholder:text-[#9A948C] focus:outline-none focus:border-[#128790] transition-colors resize-none" placeholder="Tell us what's on your mind..." />
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#128790] hover:bg-[#0e6e75] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-[9px] font-bold text-[#128790] uppercase tracking-[0.18em] mb-3">Quick Contact</p>
                  <div className="space-y-3">
                    <a href="mailto:hello@hiddenmonkey.in" className="flex items-center gap-3 p-3 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[14px] hover:border-[#128790]/30 transition-colors">
                      <span className="w-9 h-9 bg-[#128790]/10 rounded-lg flex items-center justify-center text-sm">📧</span>
                      <div>
                        <p className="text-[10px] text-[#9A948C] font-bold uppercase tracking-widest">Email</p>
                        <p className="text-[13px] text-[#1E1F1C] font-medium">hello@hiddenmonkey.in</p>
                      </div>
                    </a>
                    <a href="https://wa.me/919876543210" className="flex items-center gap-3 p-3 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[14px] hover:border-[#128790]/30 transition-colors">
                      <span className="w-9 h-9 bg-[#128790]/10 rounded-lg flex items-center justify-center text-sm">💬</span>
                      <div>
                        <p className="text-[10px] text-[#9A948C] font-bold uppercase tracking-widest">WhatsApp</p>
                        <p className="text-[13px] text-[#1E1F1C] font-medium">+91 98765 43210</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-bold text-[#FBB11A] uppercase tracking-[0.18em] mb-3">Our Locations</p>
                  <div className="space-y-3">
                    {LOCATIONS.map((loc, i) => (
                      <div key={i} className="p-3 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[14px]">
                        <p className="text-[13px] font-bold text-[#1E1F1C] mb-0.5">{loc.name}</p>
                        <p className="text-[11px] text-[#6B665E] mb-0.5">{loc.address}</p>
                        <p className="text-[11px] text-[#128790] font-medium">{loc.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#128790]/5 border border-[#128790]/10 rounded-[16px]">
                  <p className="text-[11px] text-[#128790] font-semibold mb-1">⚡ Quick response</p>
                  <p className="text-[11px] text-[#6B665E]">We typically respond within 2-4 hours during business hours (9 AM - 9 PM IST).</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
