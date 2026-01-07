/**
 * Blog Feature - Public API
 * 
 * All blog-related components and data helpers.
 * Import from here for clean access to blog functionality.
 */

// UI Components
export { default as BlogCard } from './BlogCard'
export { default as BlogGrid } from './BlogGrid'
export { default as BlogHeader } from './BlogHeader'
export { default as BlogContent } from './BlogContent'

// Data helpers
export { 
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
} from './blog.data'
