'use client'

import Container from '@/components/ui/Container'

/**
 * Gallery Page Header Section
 * Signature moment: Editorial, restrained, memorable
 * 
 * Design feature: Repeated low-opacity background typography
 * creates a subtle "visual journal" texture without overpowering
 * the primary content. Staggered alignment creates intentional rhythm.
 */

export default function GalleryHeader() {
  // Words that repeat in background to create texture & reinforce gallery purpose
  const backgroundWords = ['moments', 'memories', 'stories', 'journeys', 'community', 'moments', 'memories', 'stories', 'journeys', 'community']

  return (
    <section className="relative py-4 md:py-4 bg-white overflow-hidden">
      {/* Background texture layer: Repeated typography at very low opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Scattered background words - organic, low-opacity texture */}
          <div className="absolute top-0 left-0 w-full h-full text-[#1E1F1C] opacity-[0.04] font-light text-[14px] md:text-[18px] select-none">
            <div className="absolute top-4 left-6 md:left-12 -rotate-12 md:-rotate-6">moments</div>
            <div className="absolute top-8 right-10 md:right-16 rotate-3">memories</div>
            <div className="absolute top-1/3 left-1/4 rotate-6 md:rotate-3">stories</div>
            <div className="absolute top-1/3 right-1/4 -rotate-3 md:rotate-2">journeys</div>
            <div className="absolute bottom-8 left-12 md:left-20 -rotate-2 md:rotate-1">community</div>
            <div className="absolute bottom-4 right-8 md:right-14 rotate-4 md:rotate-2">moments</div>
          </div>
        </div>
      </div>

      {/* Content layer */}
      <Container className="max-w-[1200px] relative z-10">
        <div className="flex flex-col gap-2 md:gap-8">
          {/* Main title - clean, strong, slightly less aggressive */}
          <div>
            <h1 className="text-[#1E1F1C] text-[28px] md:text-[56px] font-bold leading-tight tracking-tight">
              Inside the Monkey House
            </h1>
          </div>

          {/* Subtitle with intentional alignment shift */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-6 max-w-3xl">
            <p className="text-[#5E625A] text-[12px] md:text-[17px] font-light leading-relaxed flex-1">
              Moments from our hostels, shared by travellers like you.
            </p>

            {/* Accent marker - small, intentional, positioned distinctly */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#EEA727]" />
              <span className="text-[#EEA727] text-[12px] md:text-[13px] font-light uppercase tracking-widest">
                Curated
              </span>
            </div>
          </div>
        </div>

        {/* Subtle visual indicator at bottom - editorial touch */}
        <div className="hidden md:block absolute -bottom-4 left-0 w-24 h-0.5 bg-gradient-to-r from-[#EEA727] to-transparent opacity-30" />
      </Container>
    </section>
  )
}
