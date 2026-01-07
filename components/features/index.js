/**
 * Features - Public API
 * 
 * Central export point for all feature modules.
 * Import from here for clean access to any feature.
 * 
 * Example:
 * import { RoomCard, BlogGrid, ImageModal } from '@/components/features'
 */

// Room Feature
export { 
  RoomCard, 
  RoomDetailModal, 
  ImageGallery,
  getAllRooms, 
  getRoomById, 
  getRoomsPreview,
  getRoomForDisplay,
  getRoomsForCards,
  ROOMS 
} from './room'

// Blog Feature  
export { 
  BlogCard, 
  BlogGrid, 
  BlogHeader, 
  BlogContent,
  getAllPosts, 
  getPostBySlug, 
  getFeaturedPosts, 
  getPostsByCategory,
  getRelatedPosts,
  getAllCategories,
  getRecentPosts,
  searchPosts,
  getPostsForCards,
  getPostsForHomepage
} from './blog'

// Gallery Feature
export { 
  ImageGrid, 
  ImageModal,
  GALLERY_IMAGES, 
  GALLERY_ROTATIONS, 
  getGalleryImages, 
  getGalleryPreview,
  getImagesForGrid,
  getImagesWithRotations
} from './gallery'
