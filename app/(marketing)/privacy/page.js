import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Privacy policy',
  description: 'How Hidden Monkey Hostels collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://hiddenmonkey.in/privacy' },
}

const SECTIONS = [
  { title: '1. Information We Collect', content: 'We collect personal information you provide when booking (name, email, phone number, ID proof), payment details processed through secure third-party gateways, and website usage data through cookies and analytics tools.' },
  { title: '2. How We Use Your Information', content: 'Your data is used to process and manage bookings, communicate about your stay and experiences, improve our services and website, send promotional communications (only with your consent), and comply with legal requirements.' },
  { title: '3. Data Sharing', content: 'We do not sell your personal information. We may share data with payment processors for transactions, government authorities when legally required, and service partners who help us operate (analytics, email services) under strict data protection agreements.' },
  { title: '4. Data Security', content: 'We use industry-standard encryption (SSL/TLS) and secure storage practices to protect your data. Access to personal information is restricted to authorized personnel only.' },
  { title: '5. Cookies', content: 'Our website uses essential cookies for functionality and analytics cookies (Google Analytics) to understand usage patterns. You can manage cookie preferences through your browser settings.' },
  { title: '6. Your Rights', content: 'You have the right to access, correct, or delete your personal data. You can opt out of marketing communications at any time. To exercise these rights, contact us at hello@hiddenmonkey.in.' },
  { title: '7. Data Retention', content: 'We retain booking data for up to 3 years for business and legal purposes. Upon request, we will delete your data within 30 days, unless retention is required by law.' },
  { title: '8. Changes to This Policy', content: 'We may update this policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the updated policy.' },
]

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-white border-b border-line">
          <div className="container-site pt-9 md:pt-16 pb-7">
            <p className="kicker">Legal</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">Privacy<br /><span className="text-teal">policy.</span></h1>
              <div className="flex flex-col gap-3 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-ink-3">
                  At Hidden Monkey Hostels Pvt. Ltd. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
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
                  <span className="font-semibold text-ink">Questions?</span> Contact our Data Protection Officer at{' '}
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
