// 'use client'

// import { useState } from 'react'

// /**
//  * AmenitiesRow Component
//  * Displays a compact, interactive row of amenity icons with tooltips
//  * Icons lift on hover with smooth animations
//  */

// const amenityIcons = {
//   locker: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     label: 'Personal locker',
//     color: '#6B7280'
//   },
//   curtain: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6" />
//       </svg>
//     ),
//     label: 'Privacy curtain',
//     color: '#6B7280'
//   },
//   light: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
//       </svg>
//     ),
//     label: 'Reading light',
//     color: '#6B7280'
//   },
//   charging: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     label: 'USB charging point',
//     color: '#6B7280'
//   },
//   bathroom: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h12M6 10h12M6 14h12M6 18h12" />
//       </svg>
//     ),
//     label: 'Clean shared bathroom',
//     color: '#6B7280'
//   },
//   female: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//     ),
//     label: 'Women-only space',
//     color: '#6B7280'
//   },
//   wifi: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
//       </svg>
//     ),
//     label: 'Fast WiFi',
//     color: '#6B7280'
//   },
//   social: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     label: 'Social atmosphere',
//     color: '#6B7280'
//   },
//   quiet: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     label: 'Quiet zones available',
//     color: '#6B7280'
//   },
//   kitchen: {
//     icon: (
//       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//       </svg>
//     ),
//     label: 'Shared kitchen',
//     color: '#6B7280'
//   }
// }

// export default function AmenitiesRow({ amenities }) {
//   const [activeTooltip, setActiveTooltip] = useState(null)
//   const [touchStart, setTouchStart] = useState(null)

//   const handleTouchStart = (id) => {
//     setTouchStart(id)
//     setActiveTooltip(id)
//   }

//   const handleTouchEnd = () => {
//     setTouchStart(null)
//   }

//   // Limit to 6 icons to prevent layout overflow
//   const displayAmenities = amenities.slice(0, 6)

//   return (
//     <div className="relative">
//       <div className="flex items-center gap-2 flex-wrap">
//         {displayAmenities.map((amenityKey) => {
//           const amenity = amenityIcons[amenityKey]
//           if (!amenity) return null

//           const isActive = activeTooltip === amenityKey

//           return (
//             <div key={amenityKey} className="relative group">
//               {/* Amenity Icon Button */}
//               <button
//                 className="relative w-6 h-6 text-gray-400 hover:text-[#2D7A5F] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#2D7A5F] focus:ring-offset-2 rounded-md p-0.5"
//                 onMouseEnter={() => setActiveTooltip(amenityKey)}
//                 onMouseLeave={() => setActiveTooltip(null)}
//                 onTouchStart={() => handleTouchStart(amenityKey)}
//                 onTouchEnd={handleTouchEnd}
//                 aria-label={amenity.label}
//                 title={amenity.label}
//               >
//                 {amenity.icon}
//               </button>

//               {/* Tooltip - Desktop Hover & Mobile Touch */}
//               {isActive && (
//                 <div
//                   className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1A1A1A] text-white text-[12px] rounded-md whitespace-nowrap pointer-events-none animate-fadeIn z-50"
//                   role="tooltip"
//                 >
//                   {amenity.label}
//                   {/* Tooltip arrow */}
//                   <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1A1A1A]" />
//                 </div>
//               )}
//             </div>
//           )
//         })}
//       </div>

//       {/* Visual hint for more amenities if available */}
//       {amenities.length > 6 && (
//         <div className="text-[12px] text-gray-400 mt-2">
//           +{amenities.length - 6} more amenities
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translate(-50%, 2px);
//           }
//           to {
//             opacity: 1;
//             transform: translate(-50%, 0);
//           }
//         }

//         @media (hover: none) and (pointer: coarse) {
//           /* Mobile: remove hover effects, rely on touch */
//           button:hover {
//             transform: none;
//             color: inherit;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }
