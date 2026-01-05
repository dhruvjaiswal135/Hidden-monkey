'use client'

import Container from '@/components/ui/Container'

/**
 * Final CTA Section
 * Compact closing section with primary and secondary CTAs
 */

export default function CTA() {
  return (
    <section className="relative py-6 md:py-8 bg-white" aria-label="Call to Action">
      <Container className="max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
          
          {/* Left: Headline + Subtext */}
          <div className="flex-1">
            <h2 className="text-[#1E1F1C] text-[24px] md:text-[28px] font-semibold mb-1.5">
              Ready to join the Monkey House?
            </h2>
            <p className="text-[#5E625A] text-[13px] md:text-[14px]">
              Your next adventure is just one click away.
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-3 shrink-0">
            <button className="px-6 md:px-7 py-2.5 md:py-3 bg-[#EEA727] hover:bg-[#E84D1B] text-white text-[13px] md:text-[14px] font-medium rounded-[12px] transition-colors duration-300">
              Check availability
            </button>
            <button className="px-6 md:px-7 py-2.5 md:py-3 bg-white hover:bg-[#FAFAF9] text-[#1E1F1C] text-[13px] md:text-[14px] font-medium border border-[#E6E4DF] rounded-[12px] transition-colors duration-300">
              See stay options
            </button>
          </div>

        </div>
      </Container>
    </section>
  )
}
