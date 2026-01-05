'use client'

import { useRef } from 'react'
import Container from '@/components/ui/Container'

/**
 * Reviews Section
 * Horizontal scroll of authentic traveller voices
 * Focuses on real emotions and moments, not ratings
 */

export default function Reviews() {
  const scrollContainerRef = useRef(null)

  const reviews = [
    {
      id: 1,
      name: 'Sarah',
      location: 'Melbourne, Australia',
      quote: 'I came for a week and stayed for three. Made best friends, went on the most amazing treks, and learned more about myself than in years at home.'
    },
    {
      id: 2,
      name: 'Marco',
      location: 'Rome, Italy',
      quote: 'Finally found a place where remote work meets real community. The WiFi actually works, and the people here become your friends, not just housemates.'
    },
    {
      id: 3,
      name: 'Priya',
      location: 'Delhi, India',
      quote: 'As a solo female traveler, I felt safer here than anywhere else I\'ve stayed. The whole vibe just says "we\'ve got you."'
    },
    {
      id: 4,
      name: 'Jake',
      location: 'Portland, USA',
      quote: 'The staff are actual travelers, not just people working a job. They actually care about the experience, not just bookings.'
    },
    {
      id: 5,
      name: 'Elena',
      location: 'Moscow, Russia',
      quote: 'The morning yoga on the rooftop watching the sun rise over the river is something I\'ll never forget. Pure magic.'
    },
    {
      id: 6,
      name: 'Rajesh',
      location: 'Bangalore, India',
      quote: 'Brought my friends here for a reunion and we didn\'t want to leave. This place just has that special something that makes you feel like home.'
    }
  ]

  return (
    <section className="relative py-8 md:py-12 bg-white" aria-label="Guest Reviews">
      <Container className="max-w-[1400px]">
        {/* Compact Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-[#1E1F1C] text-[28px] md:text-[36px] font-semibold mb-2">
            What travellers say
          </h2>
          <p className="text-[#5E625A] text-[14px] md:text-[15px]">
            Real words from people who shared the space.
          </p>
        </div>

        {/* Horizontal Scroll Reviews */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-8 md:px-8"
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[340px]"
            >
              <div
                className="group h-full bg-[#FAFAF9] border border-[#E6E4DF] rounded-[20px] p-6 cursor-grab active:cursor-grabbing transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col"
                style={{
                  transform: `rotate(${-1.5 + (idx % 3)}deg)`
                }}
              >
                {/* Quotation Mark Icon */}
                <div className="mb-3 opacity-30">
                  <svg className="w-5 h-5 text-[#EEA727]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.063-2-6-2h-.5c-1.5 0-3 .5-3 2.5V10c0 2 .75 4 3 4.5c-1 .5-2 1.5-2 3s.5 3 3 3c4.5 0 5.5-2.75 5.5-5.5V5c0-1.25-4.063-2-6-2" />
                  </svg>
                </div>

                {/* Review Quote */}
                <p className="text-[#1E1F1C] text-[15px] md:text-[16px] leading-relaxed mb-4 font-light flex-grow">
                  {review.quote}
                </p>

                {/* Divider */}
                <div className="h-px bg-[#E6E4DF] mb-4" />

                {/* Author */}
                <div>
                  <p className="text-[#1E1F1C] text-[13px] md:text-[14px] font-medium">
                    {review.name}
                  </p>
                  <p className="text-[#5E625A] text-[12px] md:text-[13px]">
                    {review.location}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 md:mt-10 pt-6 md:pt-8 border-t border-[#E6E4DF]">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 text-[#EEA727] text-[13px] md:text-[14px] font-medium hover:gap-3 transition-all duration-300"
          >
            Read all stories
            <span className="text-[12px]">→</span>
          </a>
        </div>

      </Container>
    </section>
  )
}
