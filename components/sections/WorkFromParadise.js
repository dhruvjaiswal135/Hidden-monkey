'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

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

export default function WorkFromParadise() {
  const [bentoRef, bentoVisible] = useReveal(0.1)

  return (
    <section
      className="py-8 md:py-12 bg-[#FBFBF9]"
      aria-label="Work from Paradise"
    >
      <Container className="max-w-[1400px]">
        
        <div 
          ref={bentoRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            bentoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
           
           {/* Main Anchor Card */}
           <div className="lg:col-span-8 bg-white rounded-[24px] border border-[#E6E4DF] p-6 md:p-8 lg:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform duration-500 hover:-translate-y-1">
              <div className="mb-6 md:mb-8">
                 <div className="flex items-center gap-2 mb-4">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#128790]" />
                   <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#9A948C]">
                     Nomad Ready
                   </span>
                 </div>
                 
                 <h2 className="text-[#1E1F1C] text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[0.95] tracking-[-0.03em] mb-4">
                   Your desk.<br/>
                   <span className="text-[#128790]">Our view.</span>
                 </h2>

                 <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light leading-relaxed max-w-sm">
                   We designed dedicated workspaces so you never have to choose between good WiFi and great vibes.
                 </p>
              </div>

              {/* Minimalist Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {[
                   { title: "Ergonomic Setup", desc: "No more back pain." },
                   { title: "Bottomless Coffee", desc: "Fuel your focus." },
                   { title: "24/7 Power", desc: "Never lose a draft." },
                 ].map((feature, i) => (
                    <div key={i} className="flex flex-col border-l-2 border-[#E6E4DF] pl-3 transition-colors duration-300 hover:border-[#FBB11A]">
                       <span className="text-[#1E1F1C] font-semibold text-[13px] mb-0.5">{feature.title}</span>
                       <span className="text-[#9A948C] font-light text-[11px]">{feature.desc}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Right Column Stack */}
           <div className="lg:col-span-4 flex flex-col gap-4 md:gap-5">
              
              {/* Atmosphere Image Card */}
              <div className="h-[120px] md:h-[160px] relative rounded-[24px] overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#E6E4DF]">
                 <Image
                    src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&auto=format&fit=crop&q=80"
                    alt="Working at Hidden Monkey"
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    unoptimized
                 />
              </div>

              {/* Performance Block Card */}
              <div className="flex-1 rounded-[24px] bg-[#128790] p-6 md:p-8 flex flex-col justify-center shadow-lg transition-transform duration-500 hover:-translate-y-1 relative overflow-hidden group">
                 {/* Decorative subtle element */}
                 <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-[20px] transition-transform duration-700 group-hover:scale-150" />
                 
                 <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                       <h3 className="text-[#FBB11A] text-[40px] md:text-[48px] font-bold leading-[0.8] tracking-tighter mb-2">
                          100<span className="text-[24px] align-top">+</span>
                       </h3>
                       <p className="text-white text-[15px] font-semibold tracking-tight">
                          Mbps Stable Fiber
                       </p>
                    </div>

                    <a href="/work" className="mt-6 inline-flex items-center justify-between w-full border border-[#FBFBF9]/20 rounded-full px-4 py-2.5 text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#128790] transition-colors duration-300">
                      <span className="text-[11px] font-bold uppercase tracking-widest">Explore Passes</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                 </div>
              </div>

           </div>
        </div>

      </Container>
    </section>
  )
}
