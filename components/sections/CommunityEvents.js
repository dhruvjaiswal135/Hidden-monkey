'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import ExperienceModal from '@/components/modals/ExperienceModal'

function useReveal(threshold = 0.15) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

/**
 * Community Events Section
 * Showcases upcoming activities at Hidden Monkey
 * Core USP - community is the hero
 */

// Upcoming events data with full details
const upcomingEvents = [
  {
    id: 1,
    title: 'Bonfire & Stories Night',
    description: 'Share travel tales, roast marshmallows, and make new friends under the stars.',
    date: 'Every Saturday',
    time: '8:00 PM',
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&auto=format&fit=crop&q=80',
    category: 'social',
    categoryColor: 'bg-orange-500',
    spots: 20,
    spotsLeft: 20,
    price: 'Free',
    host: { name: 'Hidden Monkey Team', avatar: '🔥' },
    includes: ['Marshmallows & snacks', 'Bonfire setup', 'Chai & hot drinks', 'Blankets available'],
    timeline: [
      { time: '8:00 PM', activity: 'Gather around the fire' },
      { time: '8:30 PM', activity: 'Ice breakers & introductions' },
      { time: '9:00 PM', activity: 'Story sharing begins' },
      { time: '10:30 PM', activity: 'Music & marshmallows' },
      { time: '11:00 PM', activity: 'Wind down' },
    ],
    whatToBring: ['Warm clothes', 'Your best travel story', 'An instrument (optional)'],
    pastJoiners: ['🇦🇺', '🇩🇪', '🇺🇸', '🇯🇵', '🇧🇷', '🇫🇷'],
  },
  {
    id: 2,
    title: 'Sunrise Yoga Session',
    description: 'Start your day right with guided yoga overlooking the valley. All levels welcome.',
    date: 'Daily',
    time: '6:30 AM',
    duration: '1 hour',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&auto=format&fit=crop&q=80',
    category: 'wellness',
    categoryColor: 'bg-green-500',
    spots: 12,
    spotsLeft: 5,
    price: 'Free',
    host: { name: 'Maya', avatar: '🧘' },
    includes: ['Yoga mats provided', 'Morning chai', 'Peaceful valley views', 'Beginner-friendly guidance'],
    timeline: [
      { time: '6:30 AM', activity: 'Arrive & set up' },
      { time: '6:40 AM', activity: 'Breathing exercises' },
      { time: '7:00 AM', activity: 'Asana practice' },
      { time: '7:25 AM', activity: 'Relaxation & meditation' },
    ],
    whatToBring: ['Comfortable clothes', 'Water bottle', 'Open mind'],
    pastJoiners: ['🇮🇳', '🇬🇧', '🇨🇦', '🇳🇱', '🇮🇹'],
  },
  {
    id: 3,
    title: 'Hidden Trails Trek',
    description: 'Discover secret viewpoints with our local guides. Moderate difficulty, epic views.',
    date: 'Every Wednesday',
    time: '7:00 AM',
    duration: '5 hours',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&auto=format&fit=crop&q=80',
    category: 'adventure',
    categoryColor: 'bg-blue-500',
    spots: 8,
    spotsLeft: 3,
    price: '299',
    host: { name: 'Rajan', avatar: '🏔️' },
    includes: ['Local guide', 'Packed lunch', 'Trail snacks', 'First aid kit', 'Transport to trailhead'],
    timeline: [
      { time: '7:00 AM', activity: 'Breakfast & briefing' },
      { time: '7:30 AM', activity: 'Depart for trailhead' },
      { time: '8:00 AM', activity: 'Trek begins' },
      { time: '10:30 AM', activity: 'Summit viewpoint' },
      { time: '11:00 AM', activity: 'Lunch with a view' },
      { time: '12:00 PM', activity: 'Return trek' },
    ],
    whatToBring: ['Trekking shoes', 'Sunscreen', 'Water bottle', 'Camera', 'Light rain jacket'],
    pastJoiners: ['🇫🇷', '🇧🇪', '🇦🇺', '🇰🇷', '🇲🇽'],
  },
  {
    id: 4,
    title: 'Open Mic Night',
    description: 'Got a song, poem, or story? Share it! Or just come to listen and vibe.',
    date: 'Every Friday',
    time: '9:00 PM',
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=80',
    category: 'nightlife',
    categoryColor: 'bg-purple-500',
    spots: 30,
    spotsLeft: 30,
    price: 'Free',
    host: { name: 'Hidden Monkey Crew', avatar: '🎤' },
    includes: ['Sound system', 'Basic instruments', 'Drinks available', 'Good vibes guaranteed'],
    timeline: [
      { time: '9:00 PM', activity: 'Doors open, sign-up sheet' },
      { time: '9:30 PM', activity: 'First performances' },
      { time: '10:30 PM', activity: 'Open jam session' },
      { time: '11:30 PM', activity: 'Closing acts' },
    ],
    whatToBring: ['Your talent (optional)', 'Your own instrument (optional)', 'Good energy'],
    pastJoiners: ['🇪🇸', '🇦🇷', '🇿🇦', '🇺🇸', '🇮🇳', '🇦🇺'],
  },
]

// Single event card
function EventCard({ event, index, onEventClick }) {
  const [ref, visible] = useReveal(0.1)

  return (
    <div
      ref={ref}
      onClick={() => onEventClick(event)}
      className={`group bg-white rounded-[24px] overflow-hidden border border-neutral-100 hover:border-sunset-gold/30 transition-all duration-400 hover:shadow-xl cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 ${event.categoryColor} text-white text-xs font-bold rounded-full uppercase tracking-wide`}>
            {event.category}
          </span>
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1.5 bg-white/95 rounded-lg text-center">
            <p className="text-charcoal text-xs font-bold">{event.date}</p>
            <p className="text-charcoal-muted text-[10px]">{event.time}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-charcoal text-lg font-bold mb-2 group-hover:text-sunset-gold transition-colors">
          {event.title}
        </h3>
        <p className="text-charcoal-muted text-sm leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-charcoal-muted flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {typeof event.spotsLeft === 'number' ? `${event.spotsLeft} spots left` : 'Open to all'}
          </span>
          <span className="text-sunset-gold text-sm font-semibold flex items-center gap-1">
            View details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default function CommunityEvents() {
  const [headerRef, headerVisible] = useReveal(0.2)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  return (
    <section
      className="py-20 md:py-28 bg-[#F4EFEA]"
      aria-label="Community Events"
    >
      <Container className="max-w-[1440px]">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-10 md:mb-14 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-neutral-200 text-neutral-500 text-[11px] tracking-[0.2em] uppercase rounded-full mb-5">
                What's happening
              </span>
              <h2 className="text-charcoal font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight">
                More than just a stay
              </h2>
              <p className="text-charcoal-muted text-base md:text-lg mt-2 max-w-xl">
                Join treks, bonfires, yoga sessions, and spontaneous adventures. The community makes the magic.
              </p>
            </div>

            {/* View All Link */}
            <a
              href="/experiences"
              className="inline-flex items-center gap-2 text-charcoal-muted hover:text-charcoal transition-colors group"
            >
              <span className="text-sm font-medium group-hover:underline">See all experiences</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} onEventClick={handleEventClick} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-neutral-100">
            <div className="text-left">
              <p className="text-charcoal font-semibold">Want to host something?</p>
              <p className="text-charcoal-muted text-sm">Travelers often lead their own sessions — yoga, cooking, jam nights, you name it.</p>
            </div>
            <button className="shrink-0 px-5 py-2.5 bg-charcoal hover:bg-neutral-800 text-white text-sm font-medium rounded-full transition-colors">
              Propose an event
            </button>
          </div>
        </div>
      </Container>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
