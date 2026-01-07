/**
 * Gallery Feature - Public API
 * 
 * All gallery-related components and data helpers.
 * Import from here for clean access to gallery functionality.
 */

// UI Components
export { default as ImageGrid } from './ImageGrid'
export { default as ImageModal } from './ImageModal'

// Data helpers
export { 
  GALLERY_IMAGES, 
  GALLERY_ROTATIONS, 
  getGalleryImages, 
  getGalleryPreview,
  getImagesForGrid,
  getImagesWithRotations
} from './gallery.data'
