/**
 * Content - Central Export
 * 
 * Import all content from here.
 * Example: import { getAllPosts, getAllRooms, getGalleryImages } from '@/content'
 */

// Blog content
export { 
  posts,
  getAllPosts, 
  getPostBySlug, 
  getFeaturedPosts, 
  getPostsByCategory,
  getRelatedPosts,
  getAllCategories,
  getRecentPosts,
  searchPosts 
} from './blog'

// Room content
export { 
  ROOMS, 
  getAllRooms, 
  getRoomById, 
  getRoomsPreview 
} from './rooms'

// Image content
export { 
  GALLERY_IMAGES, 
  GALLERY_ROTATIONS,
  getGalleryImages, 
  getGalleryPreview,
  BLOG_IMAGES, 
  getBlogImage, 
  getAllBlogImages,
  ROOM_IMAGES, 
  getRoomImages, 
  getRoomHeroImage, 
  getRoomGalleryImages
} from './images'
