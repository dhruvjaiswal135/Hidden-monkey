/**
 * Images Content - Public API
 * 
 * Centralized image exports for the entire application.
 * Import from here to access any image configuration.
 */

// Gallery images
export { 
  GALLERY_IMAGES, 
  GALLERY_ROTATIONS,
  getGalleryImages, 
  getGalleryPreview 
} from './gallery'

// Blog images
export { 
  BLOG_IMAGES, 
  getBlogImage, 
  getAllBlogImages 
} from './blog'

// Room images
export { 
  ROOM_IMAGES, 
  getRoomImages, 
  getRoomHeroImage, 
  getRoomGalleryImages 
} from './rooms'
