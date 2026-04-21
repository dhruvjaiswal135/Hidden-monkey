import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Terms of Service | Hidden Monkey Hostels',
  description: 'Terms and conditions for using Hidden Monkey Hostels services and website.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="pt-12 pb-8 bg-[#FBFBF9] border-b border-[#E6E4DF]">
          <Container className="max-w-[800px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#128790]" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">Legal</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.02em]">
              Terms of <span className="text-[#FBB11A]">Service</span>
            </h1>
            <p className="text-[10px] text-[#9A948C] mt-3">Last updated: April 2026</p>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container className="max-w-[800px]">
            <div className="space-y-8">
              <p className="text-[14px] text-[#6B665E] font-light leading-relaxed">
                By using the Hidden Monkey Hostels website and services, you agree to the following terms and conditions. Please read them carefully.
              </p>

              {[
                { title: '1. Acceptance of Terms', content: 'By accessing our website or booking a stay, you agree to be bound by these terms. If you do not agree, please do not use our services.' },
                { title: '2. Booking & Payments', content: 'All bookings are subject to availability. Prices listed are per person per night unless otherwise stated. We accept UPI, debit/credit cards, and cash at check-in. A valid government-issued photo ID is required at check-in.' },
                { title: '3. Guest Responsibilities', content: 'Guests must respect fellow travelers, staff, and the property. Any damage to property will be charged to the guest. Illegal activities, harassment, or disturbances will result in immediate eviction without refund.' },
                { title: '4. House Rules', content: 'Quiet hours are observed from 11 PM to 7 AM. Smoking is prohibited inside all properties. Guests of visitors must be registered at the front desk. Management reserves the right to refuse service to anyone whose conduct is deemed inappropriate.' },
                { title: '5. Liability', content: 'Hidden Monkey Hostels is not liable for loss, theft, or damage to personal belongings. We provide lockers for valuables — please use them. We are not responsible for injuries resulting from participation in activities or experiences.' },
                { title: '6. Intellectual Property', content: 'All content on our website — including text, images, logos, and designs — is owned by Hidden Monkey Hostels Pvt. Ltd. and may not be reproduced without written permission.' },
                { title: '7. Third-Party Services', content: 'Our website may contain links to third-party services (payment processors, booking platforms). We are not responsible for the content or practices of these external services.' },
                { title: '8. Modifications', content: 'We reserve the right to update these terms at any time. Changes will be posted on this page. Continued use of our services constitutes acceptance of the modified terms.' },
                { title: '9. Governing Law', content: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Varanasi/applicable jurisdiction].' },
              ].map((section, i) => (
                <div key={i}>
                  <h2 className="text-[16px] font-bold text-[#1E1F1C] mb-2">{section.title}</h2>
                  <p className="text-[13px] text-[#6B665E] font-light leading-relaxed">{section.content}</p>
                </div>
              ))}

              <div className="p-4 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[16px]">
                <p className="text-[12px] text-[#6B665E]">
                  <span className="font-semibold text-[#1E1F1C]">Questions about these terms?</span> Contact us at{' '}
                  <a href="mailto:hello@hiddenmonkey.in" className="text-[#128790] font-medium">hello@hiddenmonkey.in</a>.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
