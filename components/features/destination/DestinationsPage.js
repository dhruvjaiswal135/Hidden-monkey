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
      {
        id: 'varanasi-manikarnika',
        name: 'Manikarnika Steps',
        vibe: 'Cultural heart. Conversations with travellers from everywhere.',
        address: '456 Manikarnika Ghat Road, Varanasi, Uttar Pradesh 221001, India',
        image: 'https://images.unsplash.com/photo-1549887534-f2c03c1b5eec?w=600&auto=format&fit=crop&q=85',
        priceFrom: 649,
        rating: 4.8,
        reviews: 218,
      }
    ],
    experiences: [
      'Ganga Aarti Experience',
      'Old City Walking Tour',
      'Cooking Class',
      'Meditation Sessions',
    ],
  },
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
    id: 'goa',
    name: 'Goa',
    tagline: 'Sun, sand, and soul',
    vibe: 'Beach vibes. Sunset sessions. Barefoot living.',
    description: 'More than just beaches. A melting pot of cultures, cuisines, and characters. Perfect for those who want to feel alive.',
    tags: ['Beach', 'Nightlife', 'Chill', 'Community'],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=85',
    coverImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&auto=format&fit=crop&q=85',
    ],
    highlights: [
      { icon: '🏖️', text: 'Hidden beaches' },
      { icon: '🌅', text: 'Sunset sessions' },
      { icon: '🍹', text: 'Beach shack life' },
      { icon: '🛵', text: 'Scooter adventures' },
    ],
    weather: { temp: '25-33°C', best: 'Nov - Feb' },
    travelTip: 'Rent a scooter. The best spots are off the main roads.',
    buildings: [
      {
        id: 'goa-vagator',
        name: 'Vagator Cliff House',
        vibe: 'Cliffside vibes. Watch the sunset with new friends every evening.',
        address: 'Ozran Beach Road, Vagator, Goa 403509, India',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=85',
        priceFrom: 799,
        rating: 4.8,
        reviews: 412,
      },
    ],
    experiences: [
      'Sunset Yoga on the Beach',
      'Spice Plantation Tour',
      'Local Food Trail',
      'Full Moon Party',
    ],
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Where adventure meets peace',
    vibe: 'Rapids by day. Reflection by night.',
    description: 'The yoga capital of the world meets white-water rafting. For those who want both adrenaline and inner calm.',
    tags: ['Adventure', 'Yoga', 'Spiritual', 'River'],
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200&auto=format&fit=crop&q=85',
    coverImages: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&auto=format&fit=crop&q=85',
    ],
    highlights: [
      { icon: '🚣', text: 'White-water rafting' },
      { icon: '🧘', text: 'Yoga ashrams' },
      { icon: '🌉', text: 'Ram Jhula walks' },
      { icon: '🎸', text: 'Beatles Ashram' },
    ],
    weather: { temp: '15-35°C', best: 'Sep - Nov, Mar - May' },
    travelTip: 'Stay on the Tapovan side for better cafes and views.',
    buildings: [
      {
        id: 'rishikesh-tapovan',
        name: 'Tapovan Terrace',
        vibe: 'River views. Perfect for digital nomads and yogis alike.',
        address: 'Tapovan Main Road, Rishikesh, Uttarakhand 249192, India',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&auto=format&fit=crop&q=85',
        priceFrom: 649,
        rating: 4.9,
        reviews: 523,
      },
    ],
    experiences: [
      'Morning Yoga Session',
      'Rafting Adventure',
      'Waterfall Trek',
      'Sound Healing Circle',
    ],
  },
]

// Destination Card
function DestinationCard({ destination, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(destination)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white shadow-soft hover:shadow-elevated transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-[300px] md:h-[350px] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {destination.tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
            {destination.name}
          </h3>
          <p className="text-white/80 text-sm mb-3">
            {destination.tagline}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/70 text-xs flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {destination.buildings.length} location{destination.buildings.length > 1 ? 's' : ''}
            </span>
            <span className="text-white/70 text-xs">
              From ₹{Math.min(...destination.buildings.map(b => b.priceFrom))}/night
            </span>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-sunset-gold/0 group-hover:bg-sunset-gold/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white text-charcoal px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Explore {destination.name}
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
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 md:py-24 bg-gradient-to-b from-sand-cream to-white overflow-hidden">
        <Container className="max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-block px-4 py-2 bg-sunset-gold/10 text-sunset-gold text-sm font-medium rounded-full mb-6"
            >
              🗺️ Hidden Monkey Locations
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Find your <span className="text-sunset-gold">perfect escape</span>
            </h1>
            
            <p className="text-charcoal-muted text-lg md:text-xl leading-relaxed mb-8">
              From spiritual rivers to misty mountains, each Hidden Monkey location has its own vibe. 
              Where will your journey take you?
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-charcoal">{destinations.length}</p>
                <p className="text-sm text-charcoal-muted">Destinations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-charcoal">
                  {destinations.reduce((acc, d) => acc + d.buildings.length, 0)}
                </p>
                <p className="text-sm text-charcoal-muted">Properties</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-charcoal">12,000+</p>
                <p className="text-sm text-charcoal-muted">Happy travelers</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 md:py-20 bg-white">
        <Container className="max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-jungle-dark to-jungle-moss text-white">
        <Container className="max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't decide?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Take our quick quiz to find the destination that matches your travel style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz"
                className="px-8 py-4 bg-white text-jungle-dark font-semibold rounded-full hover:bg-sand-cream transition-colors shadow-lg"
              >
                Take the vibe quiz
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
              >
                Chat with us
              </Link>
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
