import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Cancellation policy',
  description: 'Understand our cancellation and refund policy for bookings at Hidden Monkey Hostels.',
  alternates: { canonical: 'https://hiddenmonkey.in/cancellation' },
}

const TIERS = [
  ['Free Cancellation', 'Cancel up to 48 hours before check-in', 'Full refund of any advance payment, processed within 5-7 business days.'],
  ['Late Cancellation', 'Cancel within 48 hours of check-in', 'First night’s charge applies. Remaining amount will be refunded within 5-7 business days.'],
  ['No-Show', 'No cancellation or no-show', 'Full booking amount will be charged. No refund applicable.'],
]

export default function CancellationPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-white border-b border-line">
          <div className="container-site pt-9 md:pt-16 pb-7">
            <p className="kicker">Policy</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">Cancellation<br /><span className="text-teal">policy.</span></h1>
              <p className="max-w-[440px] text-[16px] leading-relaxed text-ink-3">
                We understand that plans change. Our cancellation policy is designed to be fair to both our guests and our operations. Please read the following carefully before making a booking.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="space-y-10">
              <div className="card">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-[14px]">
                    <thead>
                      <tr className="text-left">
                        {['Policy', 'When you cancel', 'Refund'].map((h) => (
                          <th key={h} className="px-5 py-3.5 border-b-2 border-ink text-[11px] tracking-[0.14em] uppercase text-ink-4 font-bold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TIERS.map((row, ri) => (
                        <tr key={row[0]}>
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className={`px-5 py-3.5 align-top ${ri < TIERS.length - 1 ? 'border-b border-line' : ''} ${i === 0 ? 'font-display font-extrabold uppercase text-[17px] whitespace-nowrap' : 'text-ink-3'}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="display text-[26px] leading-[.95] mb-3">Group Bookings</h2>
                <p className="text-[15px] leading-relaxed text-ink-2">
                  For group bookings (5+ guests), cancellation must be made at least 7 days before check-in for a full refund. Late cancellations for group bookings will incur a 50% charge.
                </p>
              </div>

              <div>
                <h2 className="display text-[26px] leading-[.95] mb-3">Modifications</h2>
                <p className="text-[15px] leading-relaxed text-ink-2">
                  Date changes and room upgrades are subject to availability and can be requested free of charge up to 24 hours before check-in. Contact us at <a href="mailto:hello@hiddenmonkey.in" className="text-teal font-medium">hello@hiddenmonkey.in</a> for modifications.
                </p>
              </div>

              <div>
                <h2 className="display text-[26px] leading-[.95] mb-3">Refund Process</h2>
                <p className="text-[15px] leading-relaxed text-ink-2">
                  All refunds are processed within 5-7 business days to your original payment method. If you haven&apos;t received your refund within 10 business days, please contact us.
                </p>
              </div>

              <div className="card p-5">
                <p className="text-[14px] leading-relaxed text-ink-3">
                  <span className="font-semibold text-ink">Need help?</span> Reach out at{' '}
                  <a href="mailto:hello@hiddenmonkey.in" className="text-teal font-medium">hello@hiddenmonkey.in</a> or call us at{' '}
                  <a href="tel:+919876543210" className="text-teal font-medium">+91 98765 43210</a>.
                </p>
              </div>

              <p className="text-[13px] text-ink-4">Last updated: April 2026</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
