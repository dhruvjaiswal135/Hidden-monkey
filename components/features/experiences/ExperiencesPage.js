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
 */

const allExperiences = [
  // Adventure
  {
    id: 'hidden-trails-trek',
    title: 'Hidden Trails Trek',
    description: 'Discover secret viewpoints with our local nature guides.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80',
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
      className="group bg-white rounded-[20px] overflow-hidden border border-[#E6E4DF] hover:border-[#128790]/30 transition-all duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 cursor-pointer flex flex-col"
    >
      <div className="p-1.5 pb-0">
         <div className="relative h-[150px] overflow-hidden rounded-[14px]">
           <Image
             src={experience.image}
             alt={experience.title}
             fill
             className="object-cover group-hover:scale-105 transition-transform duration-500"
             unoptimized
           />
           
           {/* Date Badge */}
           <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm text-[#1E1F1C] px-2 py-1 rounded-lg text-center shadow-sm">
             <div className="text-[8px] font-bold uppercase tracking-widest text-[#128790]">
                {String(experience.date).split(' ')[0]}
             </div>
             <div className="text-[14px] font-black leading-none mt-[2px]">
                {String(experience.time).split(':')[0]}
             </div>
           </div>
           
           {/* Price Badge */}
           {experience.price !== 'Free' ? (
             <div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-md rounded-md text-[#1E1F1C] text-[10px] font-bold">
               ₹{experience.price}
             </div>
           ) : (
             <div className="absolute bottom-2 left-2 px-2 py-1 bg-[#128790] text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
               Free
             </div>
           )}
         </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        {/* Tiny Pill Badges */}
        <div className="mb-2 flex items-center gap-2">
           <span className="inline-block px-2 py-0.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-full text-[#128790] text-[9px] font-bold uppercase tracking-widest">
             {experience.category}
           </span>
           <span className="inline-block px-2 py-0.5 bg-white text-[#9A948C] text-[9px] font-semibold tracking-wider">
             📍 {experience.location}
           </span>
        </div>

        <h3 className="text-[16px] font-bold text-[#1E1F1C] mb-1.5 group-hover:text-[#128790] transition-colors leading-[1.2]">
          {experience.title}
        </h3>
        <p className="text-[#6B665E] text-[12px] font-light leading-relaxed mb-4 line-clamp-2 flex-1">
          {experience.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-[#E6E4DF] pt-3">
          <div className="flex items-center gap-2 text-[10px] text-[#9A948C] font-semibold">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-[#128790]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {experience.duration}
            </span>
          </div>
          
          <span className="text-[#1E1F1C] text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-[#FBB11A]">
            View
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  Culture & Community
                </span>
              </div>
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#1E1F1C] leading-[1] tracking-[-0.02em] mb-4">
                Adventures that become <span className="text-[#FBB11A]">memories.</span>
              </h1>
              <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light leading-relaxed max-w-xl">
                Treks, yoga sessions, cooking classes, and spontaneous adventures. 
                Do them with fellow travelers and turn strangers into lifelong friends.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Cute Filters Bar */}
      <section className="py-4 bg-white border-b border-[#E6E4DF] sticky top-[60px] z-40 shadow-sm">
        <Container className="max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                    selectedCategory === cat.id
                      ? 'bg-[#128790] text-white border-[#128790]'
                      : 'bg-white text-[#6B665E] border-[#E6E4DF] hover:border-[#128790]/50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A948C]">Where:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-3 py-1.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-lg text-[12px] font-semibold text-[#1E1F1C] focus:outline-none focus:border-[#128790] cursor-pointer"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>{loc.name}</option>
                ))}
              </select>
            </div>
          </div>
        </Container>
      </section>

      {/* Compact Grid */}
      <section className="py-10 bg-[#FBFBF9] min-h-[50vh]">
        <Container className="max-w-[1200px]">
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
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E6E4DF]">
              <p className="text-3xl mb-3">🧳</p>
              <h3 className="text-[18px] font-bold text-[#1E1F1C] mb-1">No adventures found here... yet.</h3>
              <p className="text-[#6B665E] text-[13px] mb-4">Try adjusting your filters to discover something new.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedLocation('all'); }}
                className="px-4 py-2 bg-[#FBFBF9] border border-[#E6E4DF] text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Cute Propose Experience CTA */}
      <section className="py-12 bg-white border-t border-[#E6E4DF]">
        <Container className="max-w-[800px]">
          <div className="bg-[#128790] rounded-[24px] p-8 md:p-10 text-center relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-[20px] transition-transform duration-700 group-hover:scale-150" />
            <div className="relative z-10">
               <span className="text-3xl mb-3 block">💡</span>
               <h2 className="text-[24px] md:text-[32px] font-bold text-[#FBB11A] mb-3 leading-[1]">
                 Host an experience?
               </h2>
               <p className="text-white/90 text-[13px] md:text-[14px] font-light mb-6">
                 Travelers often lead their own sessions — yoga, cooking, or jam nights. If you have a skill to share, let's make it happen.
               </p>
               <Link
                 href="/propose-experience"
                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#FBFBF9] transition-colors"
               >
                 Let's Talk
                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </Link>
            </div>
          </div>
        </Container>
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
