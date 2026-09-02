import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Terms of service',
  description: 'Terms and conditions for using Hidden Monkey Hostels services and website.',
  alternates: { canonical: 'https://hiddenmonkey.in/terms' },
}

const SECTIONS = [
  { title: '1. Acceptance of Terms', content: 'By accessing our website or booking a stay, you agree to be bound by these terms. If you do not agree, please do not use our services.' },
  { title: '2. Booking & Payments', content: 'All bookings are subject to availability. Prices listed are per person per night unless otherwise stated. We accept UPI, debit/credit cards, and cash at check-in. A valid government-issued photo ID is required at check-in.' },
  { title: '3. Guest Responsibilities', content: 'Guests must respect fellow travelers, staff, and the property. Any damage to property will be charged to the guest. Illegal activities, harassment, or disturbances will result in immediate eviction without refund.' },
  { title: '4. House Rules', content: 'Quiet hours are observed from 11 PM to 7 AM. Smoking is prohibited inside all properties. Guests of visitors must be registered at the front desk. Management reserves the right to refuse service to anyone whose conduct is deemed inappropriate.' },
  { title: '5. Liability', content: 'Hidden Monkey Hostels is not liable for loss, theft, or damage to personal belongings. We provide lockers for valuables — please use them. We are not responsible for injuries resulting from participation in activities or experiences.' },
  { title: '6. Intellectual Property', content: 'All content on our website — including text, images, logos, and designs — is owned by Hidden Monkey Hostels Pvt. Ltd. and may not be reproduced without written permission.' },
  { title: '7. Third-Party Services', content: 'Our website may contain links to third-party services (payment processors, booking platforms). We are not responsible for the content or practices of these external services.' },
  { title: '8. Modifications', content: 'We reserve the right to update these terms at any time. Changes will be posted on this page. Continued use of our services constitutes acceptance of the modified terms.' },
  { title: '9. Governing Law', content: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Varanasi/applicable jurisdiction].' },
]

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-white border-b border-line">
          <div className="container-site pt-9 md:pt-16 pb-7">
            <p className="kicker">Legal</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">Terms of<br /><span className="text-teal">service.</span></h1>
              <div className="flex flex-col gap-3 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-ink-3">
                  By using the Hidden Monkey Hostels website and services, you agree to the following terms and conditions. Please read them carefully.
                </p>
                <p className="text-[13px] text-ink-4">Last updated: April 2026</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="space-y-10">
              {SECTIONS.map((section) => (
                <div key={section.title}>
                  <h2 className="display text-[24px] leading-[.95] mb-3">{section.title}</h2>
                  <p className="text-[15px] leading-relaxed text-ink-2">{section.content}</p>
                </div>
              ))}

              <div className="card p-5">
                <p className="text-[14px] leading-relaxed text-ink-3">
                  <span className="font-semibold text-ink">Questions about these terms?</span> Contact us at{' '}
                  <a href="mailto:hello@hiddenmonkey.in" className="text-teal font-medium">hello@hiddenmonkey.in</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
