'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import ExperienceModal from '@/components/modals/ExperienceModal'

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onEventClick(event)}
      className="group bg-white rounded-[24px] overflow-hidden border border-border hover:border-sunset-gold/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
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
          <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-center shadow-sm">
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
          <span className="text-sunset-gold text-sm font-semibold group-hover:text-sunset-orange transition-colors flex items-center gap-1">
            View details
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function CommunityEvents() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
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
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-sand-light overflow-hidden"
      aria-label="Community Events"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      </div>
      
      <Container className="max-w-[1400px] relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <motion.span 
                className="inline-block px-3 py-1 bg-sunset-gold/10 text-sunset-gold text-sm font-medium rounded-full mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                🎪 What's happening
              </motion.span>
              <h2 className="text-charcoal text-[28px] md:text-[40px] font-bold leading-tight">
                More than just a stay
              </h2>
              <p className="text-charcoal-muted text-base md:text-lg mt-2 max-w-xl">
                Join treks, bonfires, yoga sessions, and spontaneous adventures. The community makes the magic.
              </p>
            </div>
            
            {/* View All Link */}
            <a 
              href="/experiences"
              className="inline-flex items-center gap-2 text-charcoal-muted hover:text-sunset-gold transition-colors group"
            >
              <span className="text-sm font-medium group-hover:underline">See all experiences</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} onEventClick={handleEventClick} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-border shadow-soft">
            <div className="text-left">
              <p className="text-charcoal font-semibold">Want to host something?</p>
              <p className="text-charcoal-muted text-sm">Travelers often lead their own sessions — yoga, cooking, jam nights, you name it.</p>
            </div>
            <button className="shrink-0 px-5 py-2.5 bg-jungle-dark hover:bg-jungle-moss text-white text-sm font-medium rounded-full transition-colors">
              Propose an event
            </button>
          </div>
        </motion.div>
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
