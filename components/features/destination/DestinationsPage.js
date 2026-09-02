'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import DestinationModal from '@/components/modals/DestinationModal'
import { DESTINATIONS } from '@/content/images'

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
    image: DESTINATIONS.darjeeling.hero,
    coverImages: DESTINATIONS.darjeeling.gallery,
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
        image: DESTINATIONS.darjeeling.properties.monkeyHouse,
        priceFrom: 699,
        rating: 4.9,
        reviews: 287,
      },
      {
        id: 'darjeeling-ching-monastery',
        name: 'Ching Monastery House',
        vibe: 'Peaceful retreat. Morning meditation and mountain silence.',
        address: '321 Ching Monastery Road, Darjeeling, West Bengal 734101, India',
        image: DESTINATIONS.darjeeling.properties.treehouse,
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
    image: DESTINATIONS.varanasi.hero,
    coverImages: DESTINATIONS.varanasi.gallery,
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
        image: DESTINATIONS.varanasi.properties.ghatView,
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

const inr = (n) => n.toLocaleString('en-IN')

// Destination Card
function DestinationCard({ destination, index, onClick }) {
  return (
    <motion.article
      id={destination.id}
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onClick(destination)}
      className="group card-hover cursor-pointer flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

        {/* Floating Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {destination.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="chip bg-white/95 backdrop-blur-md border-transparent font-bold uppercase tracking-[0.1em] text-[11px] text-ink">
              {tag}
            </span>
          ))}
        </div>

        {/* Overlaid Title */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <h3 className="display text-d-h3 text-white group-hover:text-gold transition-colors duration-300 drop-shadow-md">
            {destination.name}
          </h3>
          <span className="chip bg-white/20 backdrop-blur-md border-white/20 text-white font-bold whitespace-nowrap">
            {destination.buildings.length} {destination.buildings.length === 1 ? 'property' : 'properties'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-[18px] flex-1 flex flex-col gap-2.5">
        <p className="text-[16px] leading-relaxed text-ink-3 italic flex-1">
          &ldquo;{destination.tagline}&rdquo;
        </p>
        <p className="text-[14px] leading-relaxed text-ink-3 line-clamp-2">{destination.description}</p>
        <div className="flex items-end justify-between gap-2.5 pt-3 border-t border-line">
          <div>
            <span className="block text-[12px] text-ink-4">Beds from</span>
            <span className="font-display font-extrabold text-[30px] leading-none whitespace-nowrap">
              ₹{inr(Math.min(...destination.buildings.map(b => b.priceFrom)))}
              <span className="font-sans text-[13px] font-medium text-ink-3">/night</span>
            </span>
          </div>
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink flex items-center gap-1 group-hover:text-teal transition-colors">
            Explore
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
      {/* Page hero */}
      <section ref={heroRef} className="bg-white border-b border-line">
        <div className="container-site pt-9 md:pt-16 pb-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="kicker">Map &amp; locations</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">Find your<br /><span className="text-teal">perfect escape.</span></h1>
              <div className="flex flex-col gap-3 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-ink-3">From spiritual rivers to misty mountains, each destination has its own vibe. Where will your journey take you?</p>
                <div className="flex flex-wrap gap-2">
                  <a href="#darjeeling" className="btn-ink min-h-[44px] px-[18px] text-[16px]">Darjeeling ↓</a>
                  <a href="#varanasi" className="btn-ghost min-h-[44px] px-[18px] text-[16px]">Varanasi ↓</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-10 md:py-14 min-h-[50vh] bg-surface">
        <div className="container-site">
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
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="section bg-white border-t border-line">
        <div className="container-site">
          <div className="rounded-hero overflow-hidden bg-teal text-white p-8 md:p-14 text-center relative group">
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gold/20 rounded-full blur-[30px] transition-transform duration-700 group-hover:scale-150" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="text-3xl block" aria-hidden="true">🎒</span>
              <h2 className="display text-[clamp(36px,5vw,64px)] leading-[.92] text-gold">Can&apos;t decide?</h2>
              <p className="text-[16px] leading-relaxed text-white/85 max-w-[560px]">
                We&apos;ve all been there. Choose a vibe or take our quick travel quiz to find the perfect destination for your next trip.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/quiz" className="btn-gold hover:bg-white hover:text-ink">Take the quiz</Link>
                <Link href="/contact" className="btn bg-white/10 text-white border border-white/40 hover:bg-white hover:text-teal">Chat with us</Link>
              </div>
            </div>
          </div>
        </div>
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
