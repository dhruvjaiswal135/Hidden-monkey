'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import ExperienceModal from '@/components/modals/ExperienceModal'

/**
 * Experiences Page
 * Full catalog of all Hidden Monkey experiences across destinations
 * 
 * Design Philosophy:
 * "Adventures that make strangers into friends"
 */

// Full experiences data by category
const allExperiences = [
  // Adventure
  {
    id: 'hidden-trails-trek',
    title: 'Hidden Trails Trek',
    description: 'Discover secret viewpoints with our local guides. Moderate difficulty, epic views.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80',
    category: 'adventure',
    date: 'Every Wednesday',
    time: '7:00 AM',
    duration: '5 hours',
    spots: 8,
    spotsLeft: 3,
    price: '299',
    location: 'Darjeeling',
    host: { name: 'Rajan', avatar: '🏔️' },
    includes: ['Local guide', 'Packed lunch', 'Trail snacks', 'First aid kit'],
    timeline: [
      { time: '7:00 AM', activity: 'Breakfast & briefing' },
      { time: '8:00 AM', activity: 'Trek begins' },
      { time: '10:30 AM', activity: 'Summit viewpoint' },
      { time: '12:00 PM', activity: 'Return trek' },
    ],
    whatToBring: ['Trekking shoes', 'Sunscreen', 'Water bottle', 'Camera'],
    pastJoiners: ['🇫🇷', '🇧🇪', '🇦🇺', '🇰🇷', '🇲🇽'],
  },
  {
    id: 'rafting-adventure',
    title: 'White Water Rafting',
    description: 'Conquer the rapids of the Ganges! Grade III-IV rapids for the brave-hearted.',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&auto=format&fit=crop&q=80',
    category: 'adventure',
    date: 'Daily (Sep-May)',
    time: '9:00 AM',
    duration: '4 hours',
    spots: 12,
    spotsLeft: 7,
    price: '1499',
    location: 'Rishikesh',
    host: { name: 'Adventure Team', avatar: '🚣' },
    includes: ['All safety gear', 'Trained guides', 'Transport', 'Photos'],
    timeline: [
      { time: '9:00 AM', activity: 'Safety briefing' },
      { time: '10:00 AM', activity: 'Hit the rapids' },
      { time: '12:00 PM', activity: 'Cliff jumping spot' },
      { time: '1:00 PM', activity: 'Return to base' },
    ],
    whatToBring: ['Swimwear', 'Change of clothes', 'Sandals'],
    pastJoiners: ['🇬🇧', '🇺🇸', '🇮🇳', '🇦🇺', '🇩🇪'],
  },
  // Wellness
  {
    id: 'sunrise-yoga',
    title: 'Sunrise Yoga Session',
    description: 'Start your day right with guided yoga overlooking the valley. All levels welcome.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80',
    category: 'wellness',
    date: 'Daily',
    time: '6:30 AM',
    duration: '1 hour',
    spots: 12,
    spotsLeft: 5,
    price: 'Free',
    location: 'All locations',
    host: { name: 'Maya', avatar: '🧘' },
    includes: ['Yoga mats provided', 'Morning chai', 'Peaceful views'],
    timeline: [
      { time: '6:30 AM', activity: 'Arrive & set up' },
      { time: '6:40 AM', activity: 'Breathing exercises' },
      { time: '7:00 AM', activity: 'Asana practice' },
      { time: '7:25 AM', activity: 'Meditation' },
    ],
    whatToBring: ['Comfortable clothes', 'Water bottle'],
    pastJoiners: ['🇮🇳', '🇬🇧', '🇨🇦', '🇳🇱', '🇮🇹'],
  },
  {
    id: 'meditation-circle',
    title: 'Evening Meditation Circle',
    description: 'Unwind with a guided meditation session by the river. Find your inner peace.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    category: 'wellness',
    date: 'Every evening',
    time: '6:00 PM',
    duration: '45 mins',
    spots: 15,
    spotsLeft: 10,
    price: 'Free',
    location: 'Rishikesh',
    host: { name: 'Swami Ji', avatar: '🕯️' },
    includes: ['Cushions provided', 'Incense', 'Tea afterwards'],
    timeline: [
      { time: '6:00 PM', activity: 'Gather & settle' },
      { time: '6:10 PM', activity: 'Guided meditation' },
      { time: '6:45 PM', activity: 'Closing & chai' },
    ],
    whatToBring: ['Open mind', 'Warm layer'],
    pastJoiners: ['🇺🇸', '🇬🇧', '🇯🇵', '🇧🇷'],
  },
  // Social
  {
    id: 'bonfire-stories',
    title: 'Bonfire & Stories Night',
    description: 'Share travel tales, roast marshmallows, and make new friends under the stars.',
    image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=800&auto=format&fit=crop&q=80',
    category: 'social',
    date: 'Every Saturday',
    time: '8:00 PM',
    duration: '3 hours',
    spots: 20,
    spotsLeft: 20,
    price: 'Free',
    location: 'All locations',
    host: { name: 'Hidden Monkey Team', avatar: '🔥' },
    includes: ['Marshmallows', 'Bonfire setup', 'Chai & snacks'],
    timeline: [
      { time: '8:00 PM', activity: 'Gather around the fire' },
      { time: '8:30 PM', activity: 'Ice breakers' },
      { time: '9:00 PM', activity: 'Story sharing' },
      { time: '10:30 PM', activity: 'Music & chill' },
    ],
    whatToBring: ['Warm clothes', 'Your best travel story'],
    pastJoiners: ['🇦🇺', '🇩🇪', '🇺🇸', '🇯🇵', '🇧🇷', '🇫🇷'],
  },
  {
    id: 'open-mic',
    title: 'Open Mic Night',
    description: 'Got a song, poem, or story? Share it! Or just come to listen and vibe.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80',
    category: 'nightlife',
    date: 'Every Friday',
    time: '9:00 PM',
    duration: '2-3 hours',
    spots: 30,
    spotsLeft: 30,
    price: 'Free',
    location: 'All locations',
    host: { name: 'Hidden Monkey Crew', avatar: '🎤' },
    includes: ['Sound system', 'Basic instruments', 'Drinks available'],
    timeline: [
      { time: '9:00 PM', activity: 'Sign-up sheet' },
      { time: '9:30 PM', activity: 'First performances' },
      { time: '10:30 PM', activity: 'Open jam' },
    ],
    whatToBring: ['Your talent (optional)', 'Good energy'],
    pastJoiners: ['🇪🇸', '🇦🇷', '🇿🇦', '🇺🇸', '🇮🇳'],
  },
  // Food
  {
    id: 'cooking-class',
    title: 'Local Cooking Class',
    description: 'Learn to make authentic Indian dishes with our local chef. Eat what you cook!',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80',
    category: 'food',
    date: 'Every Tuesday & Thursday',
    time: '4:00 PM',
    duration: '3 hours',
    spots: 8,
    spotsLeft: 4,
    price: '499',
    location: 'Varanasi',
    host: { name: 'Chef Auntie', avatar: '👩‍🍳' },
    includes: ['All ingredients', 'Recipe cards', 'Dinner', 'Chai'],
    timeline: [
      { time: '4:00 PM', activity: 'Market visit (optional)' },
      { time: '4:30 PM', activity: 'Prep & cooking' },
      { time: '6:30 PM', activity: 'Eat together!' },
    ],
    whatToBring: ['Empty stomach', 'Apron (provided if needed)'],
    pastJoiners: ['🇯🇵', '🇫🇷', '🇺🇸', '🇧🇷'],
  },
  {
    id: 'street-food-trail',
    title: 'Street Food Trail',
    description: 'Explore the best street food spots with a local foodie. Discover hidden gems!',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&auto=format&fit=crop&q=80',
    category: 'food',
    date: 'Every Monday & Friday',
    time: '5:00 PM',
    duration: '2.5 hours',
    spots: 10,
    spotsLeft: 6,
    price: '349',
    location: 'Varanasi',
    host: { name: 'Foodie Rahul', avatar: '🍜' },
    includes: ['6-8 food stops', 'Water', 'Food story guide'],
    timeline: [
      { time: '5:00 PM', activity: 'Meet at hostel' },
      { time: '5:15 PM', activity: 'First stop - chaat' },
      { time: '6:00 PM', activity: 'Sweet shops' },
      { time: '7:00 PM', activity: 'Main course spots' },
    ],
    whatToBring: ['Empty stomach', 'Comfortable shoes'],
    pastJoiners: ['🇬🇧', '🇩🇪', '🇦🇺', '🇨🇦'],
  },
  // Culture
  {
    id: 'ganga-aarti',
    title: 'Ganga Aarti Experience',
    description: 'Witness the magical evening ceremony on the ghats. A spiritual awakening.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop&q=80',
    category: 'culture',
    date: 'Every evening',
    time: '6:30 PM',
    duration: '1.5 hours',
    spots: 15,
    spotsLeft: 8,
    price: 'Free',
    location: 'Varanasi',
    host: { name: 'Local Guide', avatar: '🛕' },
    includes: ['Best viewing spots', 'Cultural context', 'Flower offerings'],
    timeline: [
      { time: '6:30 PM', activity: 'Meet at hostel' },
      { time: '6:45 PM', activity: 'Walk to ghats' },
      { time: '7:00 PM', activity: 'Aarti ceremony' },
      { time: '8:00 PM', activity: 'Boat ride (optional)' },
    ],
    whatToBring: ['Camera', 'Respectful clothing'],
    pastJoiners: ['🇫🇷', '🇮🇹', '🇯🇵', '🇺🇸', '🇧🇷'],
  },
  {
    id: 'tea-garden-tour',
    title: 'Tea Garden Walk',
    description: 'Explore the famous tea estates of Darjeeling. Learn about tea and taste the best.',
    image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=800&auto=format&fit=crop&q=80',
    category: 'culture',
    date: 'Every Monday & Wednesday',
    time: '9:00 AM',
    duration: '4 hours',
    spots: 10,
    spotsLeft: 5,
    price: '599',
    location: 'Darjeeling',
    host: { name: 'Tea Master', avatar: '🍵' },
    includes: ['Transport', 'Tea tasting session', 'Snacks', 'Tea to take home'],
    timeline: [
      { time: '9:00 AM', activity: 'Depart from hostel' },
      { time: '9:45 AM', activity: 'Arrive at estate' },
      { time: '10:00 AM', activity: 'Garden walk & learning' },
      { time: '11:30 AM', activity: 'Tea tasting' },
    ],
    whatToBring: ['Hat', 'Camera', 'Comfortable shoes'],
    pastJoiners: ['🇯🇵', '🇬🇧', '🇨🇳', '🇺🇸'],
  },
]

// Category filter options
const categories = [
  { id: 'all', name: 'All Experiences', icon: '✨' },
  { id: 'adventure', name: 'Adventure', icon: '🏔️' },
  { id: 'wellness', name: 'Wellness', icon: '🧘' },
  { id: 'social', name: 'Social', icon: '🎉' },
  { id: 'food', name: 'Food & Drink', icon: '🍜' },
  { id: 'culture', name: 'Culture', icon: '🎭' },
  { id: 'nightlife', name: 'Nightlife', icon: '🌙' },
]

// Location filter options
const locations = [
  { id: 'all', name: 'All Locations' },
  { id: 'Varanasi', name: 'Varanasi' },
  { id: 'Darjeeling', name: 'Darjeeling' },
  { id: 'Rishikesh', name: 'Rishikesh' },
  { id: 'Goa', name: 'Goa' },
]

function ExperienceCard({ experience, index, onClick }) {
  const categoryColors = {
    adventure: 'bg-blue-500',
    wellness: 'bg-green-500',
    social: 'bg-orange-500',
    food: 'bg-yellow-500',
    culture: 'bg-purple-500',
    nightlife: 'bg-indigo-500',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => onClick(experience)}
      className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-sunset-gold/30 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 ${categoryColors[experience.category] || 'bg-gray-500'} text-white text-xs font-bold rounded-full uppercase tracking-wide`}>
            {experience.category}
          </span>
        </div>
        
        {/* Location Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium rounded-full">
            📍 {experience.location}
          </span>
        </div>
        
        {/* Price Badge */}
        {experience.price !== 'Free' && (
          <div className="absolute bottom-3 right-3">
            <span className="px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
              ₹{experience.price}
            </span>
          </div>
        )}
        {experience.price === 'Free' && (
          <div className="absolute bottom-3 right-3">
            <span className="px-3 py-1.5 bg-green-500 text-white text-sm font-semibold rounded-full">
              Free
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-sunset-gold transition-colors">
          {experience.title}
        </h3>
        <p className="text-charcoal-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {experience.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-charcoal-muted">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {experience.date}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {experience.duration}
            </span>
          </div>
          
          <span className="text-sunset-gold text-sm font-medium flex items-center gap-1">
            View
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
  const isHeroInView = useInView(heroRef, { once: true })

  // Filter experiences
  const filteredExperiences = allExperiences.filter((exp) => {
    const categoryMatch = selectedCategory === 'all' || exp.category === selectedCategory
    const locationMatch = selectedLocation === 'all' || exp.location === selectedLocation
    return categoryMatch && locationMatch
  })

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedExperience(null)
  }

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 md:py-24 bg-gradient-to-b from-sunset-gold/5 to-white overflow-hidden">
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
              🎪 Hidden Monkey Experiences
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Adventures that become <span className="text-sunset-gold">memories</span>
            </h1>
            
            <p className="text-charcoal-muted text-lg md:text-xl leading-relaxed mb-8">
              Treks, yoga sessions, cooking classes, and spontaneous adventures. 
              The best part? You'll do them with fellow travelers.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-charcoal">{allExperiences.length}+</p>
                <p className="text-sm text-charcoal-muted">Experiences</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-charcoal">4</p>
                <p className="text-sm text-charcoal-muted">Locations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-charcoal">5,000+</p>
                <p className="text-sm text-charcoal-muted">Happy participants</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-border sticky top-16 z-40">
        <Container className="max-w-[1400px]">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-sunset-gold text-white'
                      : 'bg-sand-cream text-charcoal hover:bg-sand-light'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>
            
            {/* Location Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-charcoal-muted">Location:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 bg-sand-cream border border-border rounded-full text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sunset-gold"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>{loc.name}</option>
                ))}
              </select>
            </div>
          </div>
        </Container>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 md:py-20 bg-sand-light">
        <Container className="max-w-[1400px]">
          {filteredExperiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                  onClick={handleExperienceClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🔍</p>
              <h3 className="text-2xl font-bold text-charcoal mb-2">No experiences found</h3>
              <p className="text-charcoal-muted">
                Try adjusting your filters to find more adventures.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedLocation('all'); }}
                className="mt-4 px-6 py-2 bg-sunset-gold text-white rounded-full font-medium hover:bg-sunset-orange transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Propose Experience CTA */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-5xl mb-4 block">💡</span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Got an idea for an experience?
            </h2>
            <p className="text-charcoal-muted text-lg mb-8">
              Our best experiences come from travelers like you. Propose a yoga class, 
              cooking workshop, or adventure trek!
            </p>
            <Link
              href="/propose-experience"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jungle-dark hover:bg-jungle-moss text-white font-semibold rounded-full transition-colors"
            >
              Propose an experience
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Experience Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
