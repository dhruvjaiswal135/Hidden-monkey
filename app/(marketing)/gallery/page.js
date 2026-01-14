'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GalleryHeader from '@/components/features/gallery/GalleryHeader'
import GalleryGrid from '@/components/features/gallery/GalleryGrid'
import GalleryModal from '@/components/features/gallery/GalleryModal'
import { getGalleryImages } from '@/content/images'

/**
 * Full Gallery Page
 * 
 * Dedicated page for browsing all hostel gallery images
 * Includes masonry grid, modal lightbox, and keyboard navigation
 */

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const images = getGalleryImages()

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImageIndex(null)
  }

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        <GalleryHeader />
        <GalleryGrid onImageClick={handleImageClick} />
      </main>
      <Footer />

      {/* Modal - only render if an image is selected */}
      {selectedImageIndex !== null && (
        <GalleryModal
          image={images[selectedImageIndex]}
          currentIndex={selectedImageIndex}
          totalImages={images.length}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </>
  )
}
