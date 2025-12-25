'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Testimonials Section
 * Display guest reviews with creative floating card layout
 */

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'Melbourne, Australia',
      role: 'Solo Traveler',
      rating: 5,
      text: 'Hidden Monkey completely changed my perspective on hostels. The community here is incredible — I made lifelong friends. The staff organized treks and yoga sessions that felt authentic, not touristy. Clean beds, great vibes, and a kitchen where we cooked together every night.',
      date: 'November 2024',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
      highlight: 'Made lifelong friends'
    },
    {
      id: 2,
      name: 'Marco Rossi',
      location: 'Rome, Italy',
      role: 'Digital Nomad',
      rating: 5,
      text: 'Best hostel experience in India, hands down. Fast WiFi, comfortable workspaces, and a community that respects both work and play. The location in Rishikesh was perfect — close to cafes, the Ganga, and hiking trails.',
      date: 'October 2024',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      highlight: 'Perfect for remote work'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      location: 'Delhi, India',
      role: 'Weekend Explorer',
      rating: 5,
      text: 'As a female solo traveler, I felt completely safe and welcome. The female dorm had privacy curtains and the staff was incredibly helpful. Loved the community kitchen and the rooftop where we watched sunsets together.',
      date: 'December 2024',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      highlight: 'Safe & welcoming'
    },
    {
      id: 4,
      name: 'Jake Thompson',
      location: 'Portland, USA',
      role: 'Adventure Seeker',
      rating: 5,
      text: 'The staff here are actual travelers, not just employees. They took us on hidden trails, local food spots, and even joined our bonfire nights. This place isn\'t just accommodation — it\'s an experience.',
      date: 'September 2024',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
      highlight: 'Staff are travelers too'
    },
    {
      id: 5,
      name: 'Elena Volkova',
      location: 'Moscow, Russia',
      role: 'Yoga Enthusiast',
      rating: 5,
      text: 'Came for a week-long yoga retreat and stayed for three. The peaceful environment, morning meditation sessions, and the incredible community made it impossible to leave. Already planning my return trip.',
      date: 'November 2024',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
      highlight: 'Extended my stay'
    },
    {
      id: 6,
      name: 'Rajesh Kumar',
      location: 'Bangalore, India',
      role: 'Group Traveler',
      rating: 5,
      text: 'Brought my college friends here for a reunion trip. The family suite was spacious, the common areas were perfect for hanging out, and the location gave us easy access to everything. Value for money is unbeatable.',
      date: 'October 2024',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
      highlight: 'Perfect for groups'
    }
  ]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const featured = testimonials[activeIndex]
  const supporting = testimonials.filter((_, idx) => idx !== activeIndex).slice(0, 2)

  return (
    <section className="relative py-12 md:py-16 bg-[#FAF8F5]" aria-label="Guest Testimonials">
      <Container className="max-w-[1400px]">
        {/* Compact Header with Stats */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 md:mb-10">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#2D7A5F]/10 text-[#2D7A5F] px-3 py-1.5 rounded-full text-xs font-medium mb-3">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Traveler Stories</span>
            </div>
            <h2 className="font-sans text-[#1A1A1A] text-[28px] sm:text-[36px] md:text-[42px] font-normal mb-2 leading-tight">
              Voices From Our Community
            </h2>
          </div>
          <div className="flex gap-6 shrink-0">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">500+</div>
              <div className="text-xs text-[#6B7280]">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">4.9</div>
              <div className="text-xs text-[#6B7280]">Avg Rating</div>
            </div>
          </div>
        </div>

        {/* Compact Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Featured - Larger Card */}
          <div className="lg:col-span-2 bg-white rounded-[24px] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute top-6 right-6 w-12 h-12 bg-[#2D7A5F]/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-[#2D7A5F]" />
            </div>
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(featured.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-[#1A1A1A] text-[15px] md:text-[17px] leading-relaxed mb-4 line-clamp-4">
              "{featured.text}"
            </blockquote>
            
            <div className="inline-flex items-center gap-1.5 bg-[#F4EFEA] px-3 py-1.5 rounded-full text-[#2D7A5F] text-xs font-medium mb-4">
              <Star className="w-3 h-3 fill-current" />
              <span>{featured.highlight}</span>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#2D7A5F]/20">
                  <img src={featured.avatar} alt={featured.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-[#1A1A1A] font-semibold text-sm">{featured.name}</h4>
                  <p className="text-[#6B7280] text-xs">{featured.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={handlePrev} className="w-8 h-8 bg-[#F4EFEA] hover:bg-[#2D7A5F] hover:text-white text-[#1A1A1A] rounded-full flex items-center justify-center transition-all" aria-label="Previous">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={handleNext} className="w-8 h-8 bg-[#2D7A5F] hover:bg-[#0a1f1a] text-white rounded-full flex items-center justify-center transition-all" aria-label="Next">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Compact Side Cards */}
          <div className="flex flex-col gap-4">
            {supporting.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-[20px] p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveIndex(testimonials.findIndex(t => t.id === testimonial.id))}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#2D7A5F]/20 transition-all shrink-0">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#1A1A1A] font-semibold text-sm truncate">{testimonial.name}</h4>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-3">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div className="flex justify-center gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-6 bg-[#2D7A5F]' : 'w-1.5 bg-gray-300'
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <a href="/reviews" className="inline-flex items-center gap-2 text-[#2D7A5F] font-semibold text-xs hover:gap-3 transition-all duration-300">
            <span>Read All Reviews</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}
