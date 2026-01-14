/**
 * Content - Central Export
 * 
 * Import all content from here.
 * Example: import { getAllRooms, getGalleryImages } from '@/content'
 */

// Room content
export { 
  ROOMS, 
  getAllRooms, 
  getRoomById, 
  getRoomsPreview 
} from './rooms'
// Blog content
export {
  getAllPosts,
  getPostBySlug,
  getFeaturedPosts,
  getPostsByCategory,
  getAllCategories,
  getRecentPosts,
  searchPosts,
  getRelatedPosts,
  formatDate,
  estimateReadingTime,
  generateSlug,
} from './blog'
// Image content
export { 
  GALLERY_IMAGES, 
  GALLERY_ROTATIONS,
  getGalleryImages, 
  getGalleryPreview,
  ROOM_IMAGES, 
  getRoomImages, 
  getRoomHeroImage, 
  getRoomGalleryImages
} from './images'
