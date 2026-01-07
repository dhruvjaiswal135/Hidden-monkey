/**
 * Gallery Data Helper
 * 
 * Bridges content data with UI components.
 * Re-exports from content/images for convenience.
 */

import { 
  GALLERY_IMAGES, 
  GALLERY_ROTATIONS, 
  getGalleryImages, 
  getGalleryPreview 
} from '@/content/images'

// Re-export all content functions
export { 
  GALLERY_IMAGES, 
  GALLERY_ROTATIONS, 
  getGalleryImages, 
  getGalleryPreview 
}

/**
 * Get images formatted for grid display
 */
export function getImagesForGrid(limit = null) {
  const images = getGalleryImages()
  return limit ? images.slice(0, limit) : images
}

/**
 * Get images with rotation values for polaroid style
 */
export function getImagesWithRotations() {
  const images = getGalleryImages()
  return images.map((image, idx) => ({
    ...image,
    rotation: GALLERY_ROTATIONS[idx % GALLERY_ROTATIONS.length]
  }))
}
