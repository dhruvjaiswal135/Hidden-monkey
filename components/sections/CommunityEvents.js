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

const upcomingEvents = [
  {
    id: 1,
    title: 'Bonfire & Stories Night',
    description: 'Share travel tales and roast marshmallows under the stars.',
    date: 'Saturday',
    time: '8:00 PM',
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop&q=80',
    category: 'Vibes & Social',
    spotsLeft: 20,
    price: 'Free',
  },
  {
    id: 2,
    title: 'Sunrise Yoga Session',
    description: 'Guided breathing and asanas overlooking the valley views.',
    date: 'Daily',
    time: '6:30 AM',
    duration: '1 hour',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80',
    category: 'Wellness',
    spotsLeft: 5,
    price: 'Free',
  },
  {
    id: 3,
    title: 'Hidden Trails Trek',
    description: 'Discover secret viewpoints with our local nature guides.',
    date: 'Wednesday',
    time: '7:00 AM',
    duration: '5 hours',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80',
    category: 'Adventure',
    spotsLeft: 3,
    price: '299',
  },
  {
    id: 4,
    title: 'Open Mic Night',
    description: 'Got a talent? Share it! Or just enjoy the jam session.',
    date: 'Friday',
    time: '9:00 PM',
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80',
    category: 'Nightlife',
    spotsLeft: 30,
    price: 'Free',
  },
  {
    id: 5,
    title: 'Cooking Masterclass',
    description: 'Learn to cook traditional local dishes with our in-house chef.',
    date: 'Tuesday',
    time: '4:00 PM',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&auto=format&fit=crop&q=80',
    category: 'Culinary',
    spotsLeft: 8,
    price: '199',
  }
]

function CuteEventCard({ event, index, onEventClick }) {
  const [ref, visible] = useReveal(0.1)

  return (
    <div
      ref={ref}
      onClick={() => onEventClick(event)}
      className={`shrink-0 w-[260px] md:w-[280px] snap-start group relative bg-white overflow-hidden rounded-2xl cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#E6E4DF] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative h-[160px] w-full overflow-hidden p-2">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
           <Image
             src={event.image}
             alt={event.title}
             fill
             className="object-cover transition-transform duration-500 group-hover:scale-105"
             unoptimized
           />
           
           {/* Date Badge */}
           <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm text-[#1E1F1C] px-2 py-1 rounded-lg text-center shadow-sm">
             <div className="text-[8px] font-bold uppercase tracking-widest text-[#128790]">{String(event.date).split(' ')[0]}</div>
             <div className="text-[14px] font-black leading-none mt-[2px]">{String(event.time).split(':')[0]}</div>
           </div>
        </div>
      </div>

      <div className="p-4 pt-2">
         {/* Tiny Pill Badge */}
         <div className="mb-2">
           <span className="inline-block px-2 py-0.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-full text-[#128790] text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 w-max">
             <span className="w-1.5 h-1.5 rounded-full bg-[#FBB11A]"></span>
             {event.category}
           </span>
         </div>

         <h3 className="text-[#1E1F1C] font-bold text-[16px] leading-[1.2] mb-1.5 group-hover:text-[#128790] transition-colors">
           {event.title}
         </h3>
         <p className="text-[#6B665E] font-light text-[12px] leading-relaxed mb-4 line-clamp-2">
           {event.description}
         </p>

         <div className="flex items-center justify-between border-t border-[#E6E4DF] pt-3">
           <span className="text-[#9A948C] text-[11px] font-semibold flex items-center gap-1.5">
             <svg className="w-3.5 h-3.5 text-[#128790]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
             </svg>
             {event.spotsLeft} spots
           </span>
           <span className="text-[#1E1F1C] text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 duration-300 group-hover:text-[#FBB11A]">
             Join
             <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </span>
         </div>
      </div>
    </div>
  )
}

export default function CommunityEvents() {
  const [headerRef, headerVisible] = useReveal(0.1)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const scrollContainerRef = useRef(null)

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <section
      className="py-16 md:py-20 bg-[#FBFBF9] relative overflow-hidden"
      aria-label="Community Events"
    >
      <Container className="max-w-[1400px]">
        {/* Cute Header & Controls */}
        <div
          ref={headerRef}
          className={`mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#128790]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">
                Community Schedule
              </span>
            </div>
            <h2 className="text-[#1E1F1C] font-bold text-[32px] md:text-[40px] leading-[1] tracking-[-0.02em]">
              Stay & <span className="text-[#FBB11A]">Play.</span>
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-6">
            <a
              href="/experiences"
              className="group inline-flex items-center gap-2 text-[#6B665E] hover:text-[#1E1F1C] text-[12px] font-bold uppercase tracking-widest transition-all"
            >
              See all
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            {/* Scroll Controls */}
            <div className="hidden sm:flex gap-2">
              <button onClick={scrollLeft} className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#E6E4DF] text-[#1E1F1C] hover:bg-[#FBB11A] hover:border-[#FBB11A] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={scrollRight} className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-[#E6E4DF] text-[#1E1F1C] hover:bg-[#FBB11A] hover:border-[#FBB11A] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Horizontal Scroll Track */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
           <div 
             ref={scrollContainerRef}
             className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 hide-scrollbar w-full"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
           >
             {upcomingEvents.map((event, index) => (
               <CuteEventCard 
                 key={event.id} 
                 event={event} 
                 index={index} 
                 onEventClick={handleEventClick} 
               />
             ))}
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
