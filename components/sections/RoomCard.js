'use client'

import { useState } from 'react'
import Image from 'next/image'
import RoomDetailModal from '@/components/modals/RoomDetailModal'

const PRICE_MAP = {
  'mixed-dorm': 499,
  'female-dorm': 549,
  'private-room': 1499,
}

export default function RoomCard({ room }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  if (!room) return null

  const price = PRICE_MAP[room.id] || 599

  return (
    <>
      <article
        className="group cursor-pointer bg-white rounded-[28px] overflow-hidden border border-[#E6E4DF] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full bg-[#FBFBF9]/30"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Container - Compact & Cute */}
        <div className="p-2 pb-0">
          <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-[#FBFBF9]">
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
            {/* Price Badge Overlay */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm border border-[#E6E4DF]/50">
               <span className="text-[9px] text-[#9A948C] font-bold uppercase tracking-widest block leading-none mb-0.5">Starting</span>
               <span className="text-[#1E1F1C] font-bold text-[14px] leading-none">&#8377;{price}<span className="text-[10px] font-normal text-[#6B665E]">/night</span></span>
            </div>

            {/* Availability Pill */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-[#E6E4DF]/50 shadow-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-[#128790] animate-pulse" />
               <span className="text-[9px] font-bold text-[#128790] uppercase tracking-wider">Available</span>
            </div>
          </div>
        </div>

        {/* Content - Refined Typography */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-2">
             <div className="flex items-center gap-1">
                <span className="text-[#FBB11A] text-xs">★</span>
                <span className="text-[11px] font-bold text-[#1E1F1C]">4.9</span>
             </div>
             <span className="text-[9px] font-bold text-[#9A948C] uppercase tracking-widest">
               {room.id.includes('dorm') ? 'Dormitory' : 'Private'}
             </span>
          </div>

          <h3 className="text-[#1E1F1C] font-bold text-[20px] leading-[1.2] mb-2 group-hover:text-[#128790] transition-colors">
            {room.name}
          </h3>
          
          <p className="text-[#6B665E] text-[13px] font-light leading-relaxed mb-4 line-clamp-2 flex-1">
            {room.vibe}
          </p>

          {/* Footer - Mini Amenities */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#E6E4DF]">
             <div className="flex -space-x-1.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-white border border-[#E6E4DF] flex items-center justify-center shadow-sm">
                     <span className="text-[10px] scale-90">{i === 1 ? '📶' : i === 2 ? '🚿' : '❄️'}</span>
                  </div>
                ))}
             </div>
             <span className="text-[10px] font-bold text-[#9A948C] uppercase tracking-widest">+ All Essentials</span>
          </div>
        </div>
      </article>

      <RoomDetailModal
        room={room}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
