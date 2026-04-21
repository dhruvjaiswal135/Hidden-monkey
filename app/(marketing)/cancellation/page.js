import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Cancellation Policy | Hidden Monkey Hostels',
  description: 'Understand our cancellation and refund policy for bookings at Hidden Monkey Hostels.',
}

export default function CancellationPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="pt-12 pb-8 bg-[#FBFBF9] border-b border-[#E6E4DF]">
          <Container className="max-w-[800px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#128790]" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">Policy</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.02em]">
              Cancellation <span className="text-[#FBB11A]">Policy</span>
            </h1>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container className="max-w-[800px]">
            <div className="prose-editorial space-y-8">
              <p className="text-[14px] text-[#6B665E] font-light leading-relaxed">
                We understand that plans change. Our cancellation policy is designed to be fair to both our guests and our operations. Please read the following carefully before making a booking.
              </p>

              <div>
                <h2 className="text-[18px] font-bold text-[#1E1F1C] mb-3">Free Cancellation</h2>
                <div className="p-4 bg-[#128790]/5 border border-[#128790]/10 rounded-[16px]">
                  <p className="text-[13px] text-[#1E1F1C] font-semibold mb-1">✅ Cancel up to 48 hours before check-in</p>
                  <p className="text-[12px] text-[#6B665E]">Full refund of any advance payment, processed within 5-7 business days.</p>
                </div>
              </div>

              <div>
                <h2 className="text-[18px] font-bold text-[#1E1F1C] mb-3">Late Cancellation</h2>
                <div className="p-4 bg-[#FBB11A]/5 border border-[#FBB11A]/10 rounded-[16px]">
                  <p className="text-[13px] text-[#1E1F1C] font-semibold mb-1">⚠️ Cancel within 48 hours of check-in</p>
                  <p className="text-[12px] text-[#6B665E]">First night&apos;s charge applies. Remaining amount will be refunded within 5-7 business days.</p>
                </div>
              </div>

              <div>
                <h2 className="text-[18px] font-bold text-[#1E1F1C] mb-3">No-Show</h2>
                <div className="p-4 bg-red-50 border border-red-100 rounded-[16px]">
                  <p className="text-[13px] text-[#1E1F1C] font-semibold mb-1">❌ No cancellation or no-show</p>
                  <p className="text-[12px] text-[#6B665E]">Full booking amount will be charged. No refund applicable.</p>
                </div>
              </div>

              <div>
                <h2 className="text-[18px] font-bold text-[#1E1F1C] mb-3">Group Bookings</h2>
                <p className="text-[13px] text-[#6B665E] font-light leading-relaxed">
                  For group bookings (5+ guests), cancellation must be made at least 7 days before check-in for a full refund. Late cancellations for group bookings will incur a 50% charge.
                </p>
              </div>

              <div>
                <h2 className="text-[18px] font-bold text-[#1E1F1C] mb-3">Modifications</h2>
                <p className="text-[13px] text-[#6B665E] font-light leading-relaxed">
                  Date changes and room upgrades are subject to availability and can be requested free of charge up to 24 hours before check-in. Contact us at <a href="mailto:hello@hiddenmonkey.in" className="text-[#128790] font-medium">hello@hiddenmonkey.in</a> for modifications.
                </p>
              </div>

              <div>
                <h2 className="text-[18px] font-bold text-[#1E1F1C] mb-3">Refund Process</h2>
                <p className="text-[13px] text-[#6B665E] font-light leading-relaxed">
                  All refunds are processed within 5-7 business days to your original payment method. If you haven&apos;t received your refund within 10 business days, please contact us.
                </p>
              </div>

              <div className="mt-8 p-4 bg-[#FBFBF9] border border-[#E6E4DF] rounded-[16px]">
                <p className="text-[12px] text-[#6B665E]">
                  <span className="font-semibold text-[#1E1F1C]">Need help?</span> Reach out at{' '}
                  <a href="mailto:hello@hiddenmonkey.in" className="text-[#128790] font-medium">hello@hiddenmonkey.in</a> or call us at{' '}
                  <a href="tel:+919876543210" className="text-[#128790] font-medium">+91 98765 43210</a>.
                </p>
              </div>

              <p className="text-[10px] text-[#9A948C]">Last updated: April 2026</p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
