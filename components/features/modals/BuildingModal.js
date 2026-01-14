'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * Building Selection Modal
 * 
 * Minimal, editorial modal for selecting a hostel building within a destination.
 * Fully data-driven, supports unlimited buildings.
 * 
 * Design principles:
 * - Premium but quiet
 * - Typography-first
 * - Progressive disclosure (addresses)
 * - Minimal actions
 */

export default function BuildingModal({
  isOpen,
  onClose,
  destination,
  buildings,
}) {
  const [expandedBuildingId, setExpandedBuildingId] = useState(null)

  if (!isOpen || !destination || !buildings) return null

  const toggleAddressExpand = (buildingId) => {
    setExpandedBuildingId(
      expandedBuildingId === buildingId ? null : buildingId
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        onClick={onClose}
        role="presentation"
      />

      {/* Modal Container */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0"
        role="dialog"
        aria-modal="true"
        aria-label={`Select building in ${destination.name}`}
      >
        {/* Desktop: Centered Modal | Mobile: Bottom Sheet */}
        <div className="w-full md:w-full md:max-w-5xl max-h-[90vh] md:max-h-[85vh] bg-white rounded-2xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col transform transition-all duration-300">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 md:px-8 py-6 md:py-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-[#1E1F1C] text-[28px] md:text-[36px] font-bold mb-1">
                  {destination.name}
                </h2>
                {destination.vibe && (
                  <p className="text-[#5E625A] text-[14px] md:text-[15px] font-light">
                    {destination.vibe}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 text-[#5E625A] hover:text-[#1E1F1C] transition-colors p-1.5 hover:bg-gray-100 rounded-lg"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Building Cards - Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 md:px-8 py-6 md:py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {buildings.map((building) => {
                  const isExpanded = expandedBuildingId === building.id
                  return (
                    <div
                      key={building.id}
                      className="group rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 overflow-hidden"
                    >
                      {/* Building Image */}
                      {building.image && (
                        <div className="relative h-32 md:h-40 bg-gray-100 overflow-hidden">
                          <Image
                            src={building.image}
                            alt={building.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 45vw"
                            quality={75}
                            unoptimized
                          />
                        </div>
                      )}

                      {/* Building Content */}
                      <div className="p-5 md:p-6">
                        {/* Name */}
                        <h3 className="text-[#1E1F1C] text-[18px] md:text-[20px] font-bold mb-2 leading-tight">
                          {building.name}
                        </h3>

                        {/* Vibe Description */}
                        {building.vibe && (
                          <p className="text-[#5E625A] text-[13px] md:text-[14px] font-light leading-relaxed mb-3.5">
                            {building.vibe}
                          </p>
                        )}

                        {/* Address - Progressive Disclosure */}
                        {building.address && (
                          <div className="mb-3.5">
                            <button
                              onClick={() => toggleAddressExpand(building.id)}
                              className="text-[#EEA727] hover:text-[#D4921F] text-[12px] md:text-[13px] font-light transition-colors duration-200 flex items-center gap-1.5 group/addr"
                            >
                              <span>
                                {isExpanded ? 'Hide' : 'Show'} address
                              </span>
                              <svg
                                className={`w-3 h-3 transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                              </svg>
                            </button>

                            {/* Expanded Address */}
                            {isExpanded && (
                              <div className="mt-2.5 pt-2.5 border-t border-gray-100">
                                <p className="text-[#5E625A] text-[12px] md:text-[13px] font-light leading-relaxed">
                                  {building.address}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-100">
                          {building.mapLink && (
                            <a
                              href={building.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[12px] md:text-[13px] text-[#1E1F1C] font-light hover:text-[#EEA727] transition-colors duration-200 flex items-center gap-1"
                            >
                              <span>View on map</span>
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          )}

                          {building.exploreLink && (
                            <a
                              href={building.exploreLink}
                              className="text-[12px] md:text-[13px] text-[#1E1F1C] font-light hover:text-[#EEA727] transition-colors duration-200 flex items-center gap-1"
                            >
                              <span>Explore rooms</span>
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
