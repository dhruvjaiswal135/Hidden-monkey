'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'

function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

export default function CTA() {
  const [sectionRef, isInView] = useReveal(0.1)

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
      aria-label="Call to Action"
    >
      <Container className="max-w-[1000px]">
        <div 
          className={`relative bg-[#128790] rounded-[40px] p-8 md:p-16 overflow-hidden transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FBB11A]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-[#FBB11A] animate-pulse" />
               <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">Join the tribe</span>
            </div>

            <h2 className="text-white font-bold leading-[1.1] tracking-[-0.03em] mb-6 text-[32px] md:text-[48px] lg:text-[56px] max-w-2xl mx-auto">
              Ready for your next <span className="text-[#FBB11A]">adventure?</span>
            </h2>

            <p className="text-white/70 text-[15px] md:text-[17px] font-light leading-relaxed max-w-lg mx-auto mb-10">
              Thousands of travelers have called Hidden Monkey home. It's time to start your story.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/stays"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#128790] text-[12px] font-bold uppercase tracking-widest rounded-full hover:bg-[#FBB11A] hover:text-white transition-all shadow-xl shadow-black/10"
              >
                Check availability
              </Link>
              <Link
                href="/destinations"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#128790] text-white text-[12px] font-bold uppercase tracking-widest rounded-full border border-white/20 hover:bg-white/10 transition-all"
              >
                Explore Destinations
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-col items-center gap-3">
               <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#128790] overflow-hidden bg-[#FBFBF9]">
                       <Image 
                         src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                         alt="Traveler" 
                         width={40} 
                         height={40} 
                         className="object-cover"
                         unoptimized
                       />
                    </div>
                  ))}
               </div>
               <p className="text-white/60 text-[11px] font-medium tracking-wide uppercase">
                  Join 12,000+ happy travelers from <span className="text-white font-bold">50+ countries.</span>
               </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
