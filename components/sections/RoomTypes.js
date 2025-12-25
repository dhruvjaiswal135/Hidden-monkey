'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

/**
 * Room Types Section
 * Showcases different accommodation options with featured card layout
 */

export default function RoomTypes() {
  const [activeRoom, setActiveRoom] = useState(0)

  const roomTypes = [
    {
      id: 'mixed-dorm',
      name: 'Mixed Dormitory Experience',
      location: 'Rishikesh, Uttarakhand',
      description: 'Whether you\'re seeking adventure, social connections, or a budget escape, our dorm offers cozy beds, secure lockers, and vibrant community spaces.',
      mainImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=80'
      ],
      tags: ['Budget-Friendly', 'Social', 'Adventure', 'Cozy', 'Backpackers', 'Secure'],
      rating: '4.8'
    },
    {
      id: 'female-dorm',
      name: 'Female Dormitory Haven',
      location: 'Bir, Himachal Pradesh',
      description: 'Exclusively for female travelers seeking a safe and welcoming retreat. Privacy curtains, secure access, and a supportive community await you.',
      mainImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=600&auto=format&fit=crop&q=80'
      ],
      tags: ['Women Only', 'Safe Space', 'Wellness', 'Peaceful', 'Secure', 'Community'],
      rating: '5.0'
    },
    {
      id: 'private-room',
      name: 'Private Room Sanctuary',
      location: 'Goa, India',
      description: 'Your personal space with all the hostel vibes. Perfect for couples or friends who want privacy while staying connected to the community.',
      mainImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80'
      ],
      tags: ['Beachfront', 'Romantic', 'Exclusive', 'Private', 'Comfort', 'Peaceful'],
      rating: '4.9'
    },
    {
      id: 'family-suite',
      name: 'Family Suite Paradise',
      location: 'Manali, Himachal Pradesh',
      description: 'Spacious and comfortable accommodation designed for families and groups. Multiple beds, private facilities, and stunning mountain views.',
      mainImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=80'
      ],
      tags: ['Mountain View', 'Family-Friendly', 'Spacious', 'Adventure', 'Nature', 'Scenic'],
      rating: '4.7'
    }
  ]

  const handleNext = () => {
    setActiveRoom((prev) => (prev + 1) % roomTypes.length)
  }

  const handlePrev = () => {
    setActiveRoom((prev) => (prev - 1 + roomTypes.length) % roomTypes.length)
  }

  const currentRoom = roomTypes[activeRoom]

  return (
    <section className="relative py-12 md:py-16 bg-white" aria-label="Room Types">
      <Container className="max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="font-sans text-[#1A1A1A] text-[32px] md:text-[40px] font-normal mb-1">
            Our Spaces
          </h2>
          <p className="text-[#6B7280] text-[14px]">
            Choose what fits your vibe
          </p>
        </div>

        {/* Featured Room Card */}
        <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,0.7fr] gap-0">
            {/* Left - Main Image */}
            <div className="relative h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
              <Image
                src={currentRoom.mainImage}
                alt={currentRoom.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
                quality={85}
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
                <div className="inline-block bg-black/30 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] mb-2">
                  {currentRoom.location}
                </div>
                <h3 className="font-sans text-white text-[22px] sm:text-[28px] lg:text-[32px] font-normal mb-2">
                  {currentRoom.name}
                </h3>
                <p className="text-white/85 text-[12px] sm:text-[13px] leading-relaxed max-w-lg">
                  {currentRoom.description}
                </p>
              </div>
            </div>

            {/* Right - Details */}
            <div className="relative p-5 sm:p-6 lg:p-7 flex flex-col">
              {/* Gallery */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {currentRoom.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="120px"
                      quality={80}
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              {/* Info Row */}
              <div className="flex items-center justify-between py-3 mb-4 border-y border-gray-200">
                <div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-0.5">Rating</div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#2D7A5F] fill-[#2D7A5F]" />
                    <span className="text-[#1A1A1A] text-lg">{currentRoom.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-0.5">From</div>
                  <div className="text-[#1A1A1A] text-lg">
                    ₹399<span className="text-xs text-gray-400">/night</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-4">
                <h4 className="text-[#1A1A1A] text-[10px] uppercase tracking-wider mb-2">What's included</h4>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  <div className="flex items-center gap-1.5 text-[12px] text-gray-600">
                    <span className="w-1 h-1 bg-[#2D7A5F] rounded-full" />
                    WiFi & Lockers
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-gray-600">
                    <span className="w-1 h-1 bg-[#2D7A5F] rounded-full" />
                    Fresh linens
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-gray-600">
                    <span className="w-1 h-1 bg-[#2D7A5F] rounded-full" />
                    24/7 support
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-gray-600">
                    <span className="w-1 h-1 bg-[#2D7A5F] rounded-full" />
                    Kitchen access
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {currentRoom.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-[11px] rounded-md border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-[#1A1A1A] text-white px-4 py-2.5 rounded-lg text-[13px] hover:bg-[#2D2D2D] transition-colors">
                  Book Now
                </button>
                <button className="flex-1 bg-white text-[#1A1A1A] px-4 py-2.5 rounded-lg text-[13px] border border-gray-300 hover:border-gray-400 transition-colors">
                  Details
                </button>
              </div>

              {/* Navigation */}
              <div className="hidden lg:flex absolute top-6 right-6 gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 bg-[#1A1A1A] text-white rounded-lg flex items-center justify-center hover:bg-[#2D2D2D] transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex justify-center gap-2 p-4 border-t border-gray-200">
            <button onClick={handlePrev} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={handleNext} className="w-10 h-10 bg-[#1A1A1A] text-white rounded-lg flex items-center justify-center" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 mt-5">
          {roomTypes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveRoom(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeRoom ? 'w-6 bg-[#1A1A1A]' : 'w-1.5 bg-gray-300'
              }`}
              aria-label={`Room ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
