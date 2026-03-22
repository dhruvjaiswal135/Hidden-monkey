'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

/**
 * Destinations Section
 * Clean, premium editorial layout — no scroll-linked JS, no framer-motion
 */

const destinations = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    tagline: 'Where Souls Find Peace',
    description: 'Ancient ghats, spiritual awakenings, and unforgettable sunrise boat rides along the Ganges.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
    travelers: 28,
    experiences: ['Sunrise Boat Ride', 'Ghat Walk', 'Temple Tour'],
    vibe: 'Spiritual · Historic · Mystical',
    price: '₹899',
    rating: 4.9,
    reviews: 234,
    highlight: 'Watch the legendary Ganga Aarti ceremony',
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Adventure Meets Serenity',
    description: 'Yoga capital of the world meets adrenaline paradise. Raft by day, meditate by sunset.',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=800&q=80',
    travelers: 34,
    experiences: ['White Water Rafting', 'Yoga Sessions', 'Beatles Ashram'],
    vibe: 'Adventure · Wellness · Peaceful',
    price: '₹799',
    rating: 4.8,
    reviews: 189,
    highlight: 'Camp under stars by the Ganges',
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'Where Mountains Touch Clouds',
    description: 'Tea gardens, toy trains, and the majestic Kanchenjunga views that steal your breath.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    travelers: 19,
    experiences: ['Toy Train Ride', 'Tea Tasting', 'Tiger Hill Sunrise'],
    vibe: 'Scenic · Cozy · Colonial',
    price: '₹999',
    rating: 4.9,
    reviews: 156,
    highlight: 'Witness sunrise over Himalayan peaks',
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Where The Party Never Ends',
    description: 'Beach vibes, golden sunsets, and that perfect blend of Portuguese charm and Indian soul.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    travelers: 45,
    experiences: ['Beach Hopping', 'Night Markets', 'Spice Tours'],
    vibe: 'Beachy · Vibrant · Chill',
    price: '₹699',
    rating: 4.7,
    reviews: 312,
    highlight: 'Dance barefoot on the beach at sunset',
  },
]

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

function StarIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function DestinationCard({ destination, index }) {
  const [ref, visible] = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* Live travelers badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          <span className="text-charcoal text-xs font-medium">{destination.travelers} here now</span>
        </div>

        {/* Rating badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 bg-white/95 rounded-full">
          <StarIcon className="w-3 h-3 text-sunset-gold" />
          <span className="text-charcoal text-xs font-semibold">{destination.rating}</span>
        </div>

        {/* Destination name */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-2xl leading-tight">{destination.name}</h3>
          <p className="text-white/75 text-sm mt-0.5">{destination.tagline}</p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <p className="text-charcoal-muted text-[11px] tracking-[0.15em] uppercase mb-2">{destination.vibe}</p>
        <p className="text-charcoal text-sm leading-relaxed mb-4">{destination.description}</p>

        {/* Experience pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {destination.experiences.map((exp) => (
            <span key={exp} className="px-2.5 py-1 bg-neutral-100 text-charcoal text-xs rounded-full">
              {exp}
            </span>
          ))}
        </div>

        {/* Highlight */}
        <div className="flex items-start gap-2 text-xs text-charcoal-muted pb-4 mb-4 border-b border-neutral-100">
          <StarIcon className="w-3.5 h-3.5 text-sunset-gold mt-0.5 shrink-0" />
          <span>{destination.highlight}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-charcoal-muted">from </span>
            <span className="text-lg font-bold text-charcoal">{destination.price}</span>
            <span className="text-xs text-charcoal-muted">/night</span>
          </div>
          <Link href={`/destinations?location=${destination.id}`}>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-charcoal hover:bg-neutral-700 text-white text-xs font-semibold rounded-full transition-colors cursor-pointer">
              Explore
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Destinations() {
  const [headerRef, headerVisible] = useReveal(0.2)
  const [statsRef, statsVisible] = useReveal(0.3)
  const [ctaRef, ctaVisible] = useReveal(0.3)

  return (
    <section className="py-20 md:py-28 bg-[#F4EFEA]" aria-label="Destinations">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block px-3 py-1 bg-neutral-200 text-neutral-500 text-[11px] tracking-[0.2em] uppercase rounded-full mb-5">
            4 Destinations
          </span>
          <h2 className="text-charcoal font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Where will your story begin?
          </h2>
          <p className="text-charcoal-muted text-base md:text-lg leading-relaxed">
            Each Hidden Monkey outpost has its own character. Choose your adventure and become part of a community that spans the globe.
          </p>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className={`flex gap-10 md:gap-16 mb-14 pb-14 border-b border-charcoal/10 transition-all duration-700 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {[
            { value: '126', label: 'travelers this month' },
            { value: '12', label: 'countries represented' },
            { value: '4.8★', label: 'average rating' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-charcoal font-bold text-2xl md:text-3xl">{stat.value}</p>
              <p className="text-charcoal-muted text-sm mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`mt-14 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link href="/destinations">
            <span className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal hover:bg-neutral-800 text-white font-semibold rounded-full transition-colors cursor-pointer">
              View all destinations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
