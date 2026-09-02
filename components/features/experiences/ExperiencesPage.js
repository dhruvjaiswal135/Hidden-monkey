'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import SectionHead from '@/components/ui/SectionHead'
import ExperienceModal from '@/components/modals/ExperienceModal'
import { EXPERIENCES } from '@/content/images'

/**
 * Experiences Page
 * Full catalog of all Hidden Monkey experiences across destinations
 */

const allExperiences = [
  // Adventure
  {
    id: 'hidden-trails-trek',
    title: 'Hidden Trails Trek',
    description: 'Discover secret viewpoints with our local nature guides.',
    image: EXPERIENCES.mountainTreks,
    category: 'Adventure',
    date: 'Wednesday',
    time: '7:00 AM',
    duration: '5 hrs',
    spots: 8,
    spotsLeft: 3,
    price: '299',
    location: 'Darjeeling',
    host: { name: 'Rajan', avatar: '🏔️' },
    includes: ['Local guide', 'Packed lunch', 'Trail snacks', 'First aid kit'],
    timeline: [
      { time: '7:00 AM', activity: 'Breakfast & briefing' },
      { time: '10:30 AM', activity: 'Summit viewpoint' },
    ],
    whatToBring: ['Trekking shoes', 'Sunscreen', 'Water bottle', 'Camera'],
    pastJoiners: ['🇫🇷', '🇧🇪', '🇦🇺'],
  },
  {
    id: 'rafting-adventure',
    title: 'White Water Rafting',
    description: 'Conquer the rapids! Grade III-IV rapids for the brave-hearted.',
    image: EXPERIENCES.raftingAdventure,
    category: 'Adventure',
    date: 'Daily',
    time: '9:00 AM',
    duration: '4 hrs',
    spots: 12,
    spotsLeft: 7,
    price: '1499',
    location: 'Darjeeling',
    host: { name: 'Adventure Team', avatar: '🚣' },
    includes: ['All safety gear', 'Trained guides', 'Transport', 'Photos'],
    timeline: [
      { time: '9:00 AM', activity: 'Safety briefing' },
      { time: '12:00 PM', activity: 'Cliff jumping spot' },
    ],
    whatToBring: ['Swimwear', 'Change of clothes', 'Sandals'],
    pastJoiners: ['🇬🇧', '🇺🇸', '🇮🇳'],
  },
  // Wellness
  {
    id: 'sunrise-yoga',
    title: 'Sunrise Yoga Session',
    description: 'Start your day right with guided breathing overlooking the valley.',
    image: EXPERIENCES.yogaRetreat,
    category: 'Wellness',
    date: 'Daily',
    time: '6:30 AM',
    duration: '1 hr',
    spots: 12,
    spotsLeft: 5,
    price: 'Free',
    location: 'All locations',
    host: { name: 'Maya', avatar: '🧘' },
    includes: ['Yoga mats provided', 'Morning chai', 'Peaceful views'],
    timeline: [
      { time: '6:30 AM', activity: 'Arrive & set up' },
      { time: '7:00 AM', activity: 'Asana practice' },
    ],
    whatToBring: ['Comfortable clothes', 'Water bottle'],
    pastJoiners: ['🇮🇳', '🇬🇧', '🇨🇦'],
  },
  {
    id: 'meditation-circle',
    title: 'Evening Meditation',
    description: 'Unwind with a guided river meditation session. Find your inner peace.',
    image: EXPERIENCES.meditation,
    category: 'Wellness',
    date: 'Evening',
    time: '6:00 PM',
    duration: '45 mins',
    spots: 15,
    spotsLeft: 10,
    price: 'Free',
    location: 'Varanasi',
    host: { name: 'Swami Ji', avatar: '🕯️' },
    includes: ['Cushions provided', 'Incense', 'Tea afterwards'],
    timeline: [
      { time: '6:00 PM', activity: 'Gather & settle' },
      { time: '6:10 PM', activity: 'Guided meditation' },
    ],
    whatToBring: ['Open mind', 'Warm layer'],
    pastJoiners: ['🇺🇸', '🇬🇧', '🇯🇵'],
  },
  // Social
  {
    id: 'bonfire-stories',
    title: 'Bonfire & Stories Night',
    description: 'Share travel tales and roast marshmallows under the stars.',
    image: EXPERIENCES.culturalNights,
    category: 'Social',
    date: 'Saturday',
    time: '8:00 PM',
    duration: '3 hrs',
    spots: 20,
    spotsLeft: 20,
    price: 'Free',
    location: 'All locations',
    host: { name: 'Hidden Monkey Team', avatar: '🔥' },
    includes: ['Marshmallows', 'Bonfire setup', 'Chai & snacks'],
    timeline: [
      { time: '8:00 PM', activity: 'Gather around the fire' },
      { time: '9:00 PM', activity: 'Story sharing' },
    ],
    whatToBring: ['Warm clothes', 'Your best travel story'],
    pastJoiners: ['🇦🇺', '🇩🇪', '🇺🇸'],
  },
  {
    id: 'open-mic',
    title: 'Open Mic Night',
    description: 'Got a talent? Share it! Or just enjoy the jam session.',
    image: EXPERIENCES.liveMusic,
    category: 'Nightlife',
    date: 'Friday',
    time: '9:00 PM',
    duration: '2-3 hrs',
    spots: 30,
    spotsLeft: 30,
    price: 'Free',
    location: 'All locations',
    host: { name: 'Hidden Monkey Crew', avatar: '🎤' },
    includes: ['Sound system', 'Basic instruments', 'Drinks available'],
    timeline: [
      { time: '9:30 PM', activity: 'Performances' },
      { time: '10:30 PM', activity: 'Open jam' },
    ],
    whatToBring: ['Your talent (optional)', 'Good energy'],
    pastJoiners: ['🇪🇸', '🇦🇷', '🇿🇦'],
  },
  // Food
  {
    id: 'cooking-class',
    title: 'Local Cooking Class',
    description: 'Learn to make authentic Indian dishes with our local chef. Eat what you cook!',
    image: EXPERIENCES.cookingClass,
    category: 'Food',
    date: 'Tues & Thurs',
    time: '4:00 PM',
    duration: '3 hrs',
    spots: 8,
    spotsLeft: 4,
    price: '499',
    location: 'Varanasi',
    host: { name: 'Chef Auntie', avatar: '👩‍🍳' },
    includes: ['All ingredients', 'Recipe cards', 'Dinner', 'Chai'],
    timeline: [
      { time: '4:30 PM', activity: 'Prep & cooking' },
      { time: '6:30 PM', activity: 'Eat together!' },
    ],
    whatToBring: ['Empty stomach', 'Apron (provided if needed)'],
    pastJoiners: ['🇯🇵', '🇫🇷', '🇺🇸'],
  },
]

// Category filter options
const categories = [
  { id: 'all', name: 'All' },
  { id: 'Adventure', name: 'Adventure' },
  { id: 'Wellness', name: 'Wellness' },
  { id: 'Social', name: 'Social' },
  { id: 'Food', name: 'Food' },
]

// Location filter options
const locations = [
  { id: 'all', name: 'Everywhere' },
  { id: 'Darjeeling', name: 'Darjeeling' },
  { id: 'Varanasi', name: 'Varanasi' },
]

function CompactExperienceCard({ experience, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onClick(experience)}
      className="group card-hover cursor-pointer flex flex-col"
    >
      <div className="relative h-[170px] overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />

        {/* Date Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg text-center shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
            {String(experience.date).split(' ')[0]}
          </div>
          <div className="font-display font-extrabold text-[18px] leading-none mt-[2px] text-ink">
            {String(experience.time).split(':')[0]}
          </div>
        </div>

        {/* Price Badge */}
        {experience.price !== 'Free' ? (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-ink font-display font-extrabold text-[15px]">
            ₹{experience.price}
          </div>
        ) : (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-teal text-white text-[11px] font-bold rounded-lg uppercase tracking-[0.1em]">
            Free
          </div>
        )}
      </div>

      <div className="p-[18px] flex-1 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="chip text-teal font-bold uppercase tracking-[0.1em] text-[11px]">
            {experience.category}
          </span>
          <span className="text-[12px] text-ink-4 font-semibold">
            📍 {experience.location}
          </span>
        </div>

        <h3 className="display font-bold text-[24px] leading-none group-hover:text-teal transition-colors">
          {experience.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-ink-3 line-clamp-2 flex-1">
          {experience.description}
        </p>

        <div className="flex items-center justify-between border-t border-line pt-3">
          <span className="flex items-center gap-1 text-[13px] text-ink-4 font-semibold">
            <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {experience.duration}
          </span>

          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink flex items-center gap-1 group-hover:text-teal transition-colors">
            View
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const filteredExperiences = allExperiences.filter((exp) => {
    const categoryMatch = selectedCategory === 'all' || exp.category === selectedCategory
    const locationMatch = selectedLocation === 'all' || exp.location === selectedLocation
    return categoryMatch && locationMatch
  })

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
            <p className="kicker">Culture &amp; community</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">Adventures that<br /><span className="text-teal">become memories.</span></h1>
              <div className="flex flex-col gap-3 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-ink-3">Treks, yoga sessions, cooking classes, and spontaneous adventures. Do them with fellow travelers and turn strangers into lifelong friends.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters bar */}
      <section className="sticky top-[60px] z-40 bg-surface/95 backdrop-blur-lg border-b border-line">
        <div className="container-site py-3 flex flex-wrap gap-2.5 items-center">
          <div className="flex gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id ? 'pill-on' : 'pill-off'}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 shrink-0">
            <span className="field-label tracking-[0.14em]">Where</span>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="min-h-[44px] px-4 rounded-full border border-line bg-white text-[14px] font-semibold text-ink cursor-pointer outline-none focus:border-teal appearance-none"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
              ))}
            </select>
          </label>

          <span className="ml-auto text-[13px] text-ink-3 font-semibold">
            {filteredExperiences.length} experience{filteredExperiences.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* Experiences grid */}
      <section className="py-10 md:py-14 bg-surface min-h-[50vh]">
        <div className="container-site">
          {filteredExperiences.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {filteredExperiences.map((experience, index) => (
                <CompactExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                  onClick={setSelectedExperience}
                />
              ))}
            </div>
          ) : (
            <div className="card p-10 text-center">
              <p className="text-3xl mb-3" aria-hidden="true">🧳</p>
              <p className="display font-bold text-[26px] mb-1">No adventures found here... yet.</p>
              <p className="text-[14px] text-ink-3 mb-4">Try adjusting your filters to discover something new.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedLocation('all'); }}
                className="btn-ghost"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Propose experience CTA */}
      <section className="section bg-jungle text-white">
        <div className="container-site">
          <SectionHead
            light
            kicker="Hosted by travelers"
            title={<>Host an<br /><span className="text-gold">experience?</span></>}
            aside={
              <div className="flex flex-col gap-4 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-white/85">
                  Travelers often lead their own sessions — yoga, cooking, or jam nights. If you have a skill to share, let&apos;s make it happen.
                </p>
                <Link href="/propose-experience" className="btn-gold self-start hover:bg-white hover:text-ink">
                  Let&apos;s talk
                </Link>
              </div>
            }
            className="mb-0"
          />
        </div>
      </section>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  )
}
