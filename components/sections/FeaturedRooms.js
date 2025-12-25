'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

/**
 * Featured Experience Section
 * Promotional banner with circular property images
 */

export default function FeaturedRooms() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const experienceImages = [
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=400&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400&auto=format&fit=crop&q=80'
  ]

  return (
    <section className="relative py-12 md:py-16 bg-white" aria-label="Experience">
      <Container className="max-w-[1400px]">
        <div className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden">
          <div className="relative z-10 px-6 sm:px-8 md:px-10 py-10 md:py-14 lg:pr-[45%]">
            <div className="max-w-lg">
              {/* Heading */}
              <h2 className="font-sans text-white text-[26px] sm:text-[32px] md:text-[36px] font-normal mb-3 md:mb-4">
                More than just a bed
              </h2>

              {/* Description */}
              <p className="text-white/70 text-[13px] sm:text-[14px] leading-relaxed mb-6 md:mb-7">
                Community spaces, local experiences, and travelers from around the world. Your next adventure starts here.
              </p>

              {/* CTA Button */}
              <a 
                href="/hostels"
                className="inline-block bg-white text-[#1A1A1A] px-6 py-2.5 rounded-lg font-medium text-[13px] hover:bg-gray-100 transition-colors"
              >
                Explore Hostels
              </a>
            </div>
          </div>

          {/* Circular Images - Desktop Only */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none">
            <div className="absolute top-[12%] right-[18%] w-[110px] h-[110px]">
              {isClient && (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={experienceImages[0]}
                    alt="Hostel"
                    fill
                    className="object-cover"
                    sizes="110px"
                    quality={80}
                    unoptimized
                  />
                </div>
              )}
            </div>

            <div className="absolute top-[20%] right-[6%] w-[85px] h-[85px]">
              {isClient && (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={experienceImages[1]}
                    alt="Hostel"
                    fill
                    className="object-cover"
                    sizes="85px"
                    quality={80}
                    unoptimized
                  />
                </div>
              )}
            </div>

            <div className="absolute top-[48%] right-[24%] w-[105px] h-[105px]">
              {isClient && (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={experienceImages[2]}
                    alt="Hostel"
                    fill
                    className="object-cover"
                    sizes="105px"
                    quality={80}
                    unoptimized
                  />
                </div>
              )}
            </div>

            <div className="absolute bottom-[22%] right-[8%] w-[120px] h-[120px]">
              {isClient && (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={experienceImages[3]}
                    alt="Hostel"
                    fill
                    className="object-cover"
                    sizes="120px"
                    quality={80}
                    unoptimized
                  />
                </div>
              )}
            </div>
          </div>

          {/* Tablet Pattern */}
          <div className="hidden md:block lg:hidden absolute right-0 top-0 bottom-0 w-[38%] pointer-events-none">
            <div className="absolute top-[15%] right-[8%] w-[90px] h-[90px]">
              {isClient && (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={experienceImages[0]}
                    alt="Hostel"
                    fill
                    className="object-cover"
                    sizes="90px"
                    quality={80}
                    unoptimized
                  />
                </div>
              )}
            </div>

            <div className="absolute bottom-[20%] right-[12%] w-[100px] h-[100px]">
              {isClient && (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={experienceImages[2]}
                    alt="Hostel"
                    fill
                    className="object-cover"
                    sizes="100px"
                    quality={80}
                    unoptimized
                  />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Pattern */}
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-[32%] pointer-events-none">
            <div className="absolute top-[10%] right-[8%] w-[65px] h-[65px]">
              {isClient && (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={experienceImages[0]}
                    alt="Hostel"
                    fill
                    className="object-cover"
                    sizes="65px"
                    quality={80}
                    unoptimized
                  />
                </div>
              )}
            </div>

            <div className="absolute bottom-[15%] right-[6%] w-[70px] h-[70px]">
              {isClient && (
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={experienceImages[2]}
                    alt="Hostel"
                    fill
                    className="object-cover"
                    sizes="70px"
                    quality={80}
                    unoptimized
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
