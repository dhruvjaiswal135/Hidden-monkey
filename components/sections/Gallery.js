'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { getGalleryImages } from '@/content/images'

function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [headerRef, headerVisible] = useReveal(0.1)
  
  const galleryImages = getGalleryImages().slice(0, 6)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const closeLightbox = () => setSelectedImage(null)

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % galleryImages.length
    setLightboxIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
    setLightboxIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#E6E4DF]" id="gallery">
      <Container className="max-w-[1200px]">
        {/* Compact Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#128790]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#128790]">Captured Moments</span>
            </div>
            <h2 className="text-[#1E1F1C] font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em]">
              Inside the <span className="text-[#FBB11A]">Monkey House.</span>
            </h2>
          </div>
          
          <Link href="/gallery" className="group hidden md:flex items-center gap-2 text-[#128790] text-[12px] font-bold uppercase tracking-widest hover:gap-3 transition-all">
            View full gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Grid - Compact Mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
           {galleryImages.map((image, idx) => (
             <div 
               key={idx}
               onClick={() => openLightbox(idx)}
               className={`relative h-[200px] rounded-[20px] overflow-hidden cursor-pointer group bg-[#FBFBF9] border border-[#E6E4DF] p-1.5 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                 idx === 0 ? 'col-span-2' : idx === 3 ? 'col-span-2' : 'col-span-1'
               }`}
             >
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                  <Image
                    src={image.url}
                    alt="Gallery"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="300px"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
             </div>
           ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#E6E4DF] text-[#128790] text-[11px] font-bold uppercase tracking-widest rounded-full shadow-sm">
            Open Gallery
          </Link>
        </div>
      </Container>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-[#1E1F1C]/95 z-[100] flex items-center justify-center p-6 backdrop-blur-sm" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-4xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
             <Image src={selectedImage.url} alt="Gallery" width={1200} height={800} className="rounded-[32px] shadow-2xl border border-white/10" unoptimized />
             
             <button onClick={prevImage} className="absolute -left-12 md:-left-20 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={2} /></svg>
             </button>
             <button onClick={nextImage} className="absolute -right-12 md:-right-20 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} /></svg>
             </button>
          </div>
        </div>
      )}
    </section>
  )
}
