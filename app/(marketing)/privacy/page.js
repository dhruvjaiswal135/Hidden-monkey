import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Privacy Policy | Hidden Monkey Hostels',
  description: 'How Hidden Monkey Hostels collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
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
              Privacy <span className="text-[#FBB11A]">Policy</span>
            </h1>
            <p className="text-[10px] text-[#9A948C] mt-3">Last updated: April 2026</p>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container className="max-w-[800px]">
            <div className="space-y-8">
              <p className="text-[14px] text-[#6B665E] font-light leading-relaxed">
                At Hidden Monkey Hostels Pvt. Ltd. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
              </p>

              {[
                { title: '1. Information We Collect', content: 'We collect personal information you provide when booking (name, email, phone number, ID proof), payment details processed through secure third-party gateways, and website usage data through cookies and analytics tools.' },
                { title: '2. How We Use Your Information', content: 'Your data is used to process and manage bookings, communicate about your stay and experiences, improve our services and website, send promotional communications (only with your consent), and comply with legal requirements.' },
                { title: '3. Data Sharing', content: 'We do not sell your personal information. We may share data with payment processors for transactions, government authorities when legally required, and service partners who help us operate (analytics, email services) under strict data protection agreements.' },
                { title: '4. Data Security', content: 'We use industry-standard encryption (SSL/TLS) and secure storage practices to protect your data. Access to personal information is restricted to authorized personnel only.' },
                { title: '5. Cookies', content: 'Our website uses essential cookies for functionality and analytics cookies (Google Analytics) to understand usage patterns. You can manage cookie preferences through your browser settings.' },
                { title: '6. Your Rights', content: 'You have the right to access, correct, or delete your personal data. You can opt out of marketing communications at any time. To exercise these rights, contact us at hello@hiddenmonkey.in.' },
                { title: '7. Data Retention', content: 'We retain booking data for up to 3 years for business and legal purposes. Upon request, we will delete your data within 30 days, unless retention is required by law.' },
                { title: '8. Changes to This Policy', content: 'We may update this policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the updated policy.' },
              ].map((section, i) => (
                <div key={i}>
                  <h2 className="text-[16px] font-bold text-[#1E1F1C] mb-2">{section.title}</h2>
                  <p className="text-[13px] text-[#6B665E] font-light leading-relaxed">{section.content}</p>
                </div>
              ))}

              <div className="p-4 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[16px]">
                <p className="text-[12px] text-[#6B665E]">
                  <span className="font-semibold text-[#1E1F1C]">Questions?</span> Contact our Data Protection Officer at{' '}
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
