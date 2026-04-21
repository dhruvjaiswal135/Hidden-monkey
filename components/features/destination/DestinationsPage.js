'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import DestinationModal from '@/components/modals/DestinationModal'

/**
 * Destinations Page Component
 * Full-page view of all Hidden Monkey locations
 * 
 * Design Philosophy:
 * "Let travelers find their perfect vibe destination"
 */

// Full destinations data
const destinations = [
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'Where clouds become friends',
    vibe: 'Mist, mountains, quiet conversations.',
    description: 'Tea gardens, toy trains, and the majestic Kanchenjunga. Perfect for those who want to slow down and breathe.',
    tags: ['Mountains', 'Calm', 'Nature', 'Tea Gardens'],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=85',
    coverImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&auto=format&fit=crop&q=85',
    ],
    highlights: [
      { icon: '🏔️', text: 'Kanchenjunga views' },
      { icon: '🍵', text: 'Tea garden walks' },
      { icon: '🚂', text: 'Toy train rides' },
      { icon: '🌅', text: 'Tiger Hill sunrise' },
    ],
    weather: { temp: '10-20°C', best: 'Mar - May, Sep - Nov' },
    travelTip: 'Pack layers! Mornings are cold, afternoons are pleasant.',
    buildings: [
      {
        id: 'darjeeling-batasia-loop',
        name: 'Batasia Loop Lodge',
        vibe: 'Mountain views. Tea, books, and endless conversations.',
        address: '789 Batasia Loop Road, Darjeeling, West Bengal 734101, India',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=85',
        priceFrom: 699,
        rating: 4.9,
        reviews: 287,
      },
      {
        id: 'darjeeling-ching-monastery',
        name: 'Ching Monastery House',
        vibe: 'Peaceful retreat. Morning meditation and mountain silence.',
        address: '321 Ching Monastery Road, Darjeeling, West Bengal 734101, India',
        image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&auto=format&fit=crop&q=85',
        priceFrom: 749,
        rating: 4.7,
        reviews: 156,
      }
    ],
    experiences: [
      'Tiger Hill Sunrise Trip',
      'Tea Garden Tour',
      'Monastery Meditation',
      'Local Market Walk',
    ],
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'Where time stands still',
    vibe: 'Slow mornings. Old souls. Spiritual awakening.',
    description: 'The oldest living city in the world. Experience the ghats, the Ganga aarti, and conversations that change your perspective on life.',
    tags: ['Spiritual', 'Cultural', 'Riverside', 'Heritage'],
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=85',
    coverImages: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1537457984863-1fc67de99f5e?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1549887534-f2c03c1b5eec?w=1200&auto=format&fit=crop&q=85',
    ],
    highlights: [
      { icon: '🛕', text: 'Walk the ancient ghats' },
      { icon: '🕯️', text: 'Evening Ganga Aarti' },
      { icon: '🚣', text: 'Sunrise boat rides' },
      { icon: '🍛', text: 'Street food trails' },
    ],
    weather: { temp: '25-35°C', best: 'Oct - Mar' },
    travelTip: 'Best explored on foot. Wake early for the most magical light.',
    buildings: [
      {
        id: 'varanasi-assi-ghat',
        name: 'Assi Ghat House',
        vibe: 'Riverside house for slow mornings and sunrise rituals.',
        address: '123 Assi Ghat Road, Varanasi, Uttar Pradesh 221001, India',
        image: 'https://images.unsplash.com/photo-1537457984863-1fc67de99f5e?w=600&auto=format&fit=crop&q=85',
        priceFrom: 599,
        rating: 4.9,
        reviews: 342,
      },
    ],
    experiences: [
      'Ganga Aarti Experience',
      'Old City Walking Tour',
      'Cooking Class',
      'Meditation Sessions',
    ],
  },
]

// Destination Card
function DestinationCard({ destination, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onClick(destination)}
      className="group relative rounded-[20px] overflow-hidden cursor-pointer bg-white border border-[#E6E4DF] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
    >
      {/* Image Container */}
      <div className="p-1.5 pb-0">
         <div className="relative h-[220px] overflow-hidden rounded-[14px]">
           <Image
             src={destination.image}
             alt={destination.name}
             fill
             className="object-cover group-hover:scale-105 transition-transform duration-700"
             sizes="(max-width: 768px) 100vw, 50vw"
             unoptimized
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F1C]/80 via-transparent to-transparent" />
           <div className="absolute inset-0 bg-[#128790]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           
           {/* Floating Tags */}
           <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
             {destination.tags.slice(0, 2).map((tag, idx) => (
               <span
                 key={idx}
                 className="px-2 py-0.5 bg-white/95 backdrop-blur-md text-[#1E1F1C] text-[9px] font-bold tracking-widest uppercase rounded-md shadow-sm"
               >
                 {tag}
               </span>
             ))}
           </div>
           
           {/* Overlaid Title */}
           <div className="absolute bottom-3 left-3 right-3">
             <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-tight group-hover:text-[#FBB11A] transition-colors duration-300 drop-shadow-md">
               {destination.name}
             </h3>
           </div>

           {/* Location Count Badge */}
           <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-2 py-1 flex items-center gap-1 shadow-sm">
             <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
             </svg>
             <span className="text-white text-[10px] font-bold">
               {destination.buildings.length} Properties
             </span>
           </div>
         </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-[#6B665E] text-[13px] font-light italic mb-3 flex-1 line-clamp-2">
          "{destination.tagline}"
        </p>
        <div className="flex items-center justify-between border-t border-[#E6E4DF] pt-3">
          <span className="text-[#9A948C] text-[10px] font-semibold uppercase tracking-widest">
             From ₹{Math.min(...destination.buildings.map(b => b.priceFrom))}/night
          </span>
          <span className="text-[#1E1F1C] text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-[#128790] transition-colors">
            Explore 
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedDestination(null)
  }

  return (
    <>
      {/* Cute Responsive Header */}
      <section ref={heroRef} className="pt-12 pb-8 bg-[#FBFBF9] border-b border-[#E6E4DF]">
        <Container className="max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-[2px] bg-[#128790]"></span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">
                  Map & Locations
                </span>
              </div>
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.02em] mb-4">
                Find your <span className="text-[#FBB11A]">perfect escape.</span>
              </h1>
              <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light leading-relaxed max-w-xl">
                From spiritual rivers to misty mountains, each destination has its own vibe. 
                Where will your journey take you?
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Destinations Grid */}
      <section className="py-10 min-h-[50vh] bg-[#FBFBF9]">
        <Container className="max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
                onClick={handleDestinationClick}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Cute Propose/Quiz CTA */}
      <section className="py-12 bg-white border-t border-[#E6E4DF]">
        <Container className="max-w-[800px]">
          <div className="bg-[#128790] rounded-[24px] p-8 md:p-10 text-center relative overflow-hidden group">
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#FBB11A]/20 rounded-full blur-[30px] transition-transform duration-700 group-hover:scale-150" />
            <div className="relative z-10">
               <span className="text-3xl mb-3 block">🎒</span>
               <h2 className="text-[24px] md:text-[32px] font-bold text-[#FBB11A] mb-3 leading-[1]">
                 Can't decide?
               </h2>
               <p className="text-white/90 text-[13px] md:text-[14px] font-light mb-6">
                 We've all been there. Choose a vibe or take our quick travel quiz to find the perfect destination for your next trip.
               </p>
               <div className="flex flex-col sm:flex-row gap-3 justify-center">
                 <Link
                   href="/quiz"
                   className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#FBFBF9] transition-colors shadow-sm"
                 >
                   Take the Quiz
                 </Link>
                 <Link
                   href="/contact"
                   className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border border-white text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors"
                 >
                   Chat with us
                 </Link>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
