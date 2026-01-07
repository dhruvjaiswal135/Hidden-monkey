/**
 * Blog Data Helper
 * 
 * Bridges content data with UI components.
 * Re-exports from content/blog for convenience.
 */

import { 
  getAllPosts, 
  getPostBySlug, 
  getFeaturedPosts, 
  getPostsByCategory,
  getRelatedPosts,
  getAllCategories,
  getRecentPosts,
  searchPosts
} from '@/content/blog'

// Re-export all content functions
export { 
  getAllPosts, 
  getPostBySlug, 
  getFeaturedPosts, 
  getPostsByCategory,
  getRelatedPosts,
  getAllCategories,
  getRecentPosts,
  searchPosts
}

/**
 * Get posts formatted for cards display
 */
export function getPostsForCards(limit = null) {
  const posts = getAllPosts()
  const limited = limit ? posts.slice(0, limit) : posts
  
  return limited.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    category: post.category,
    readTime: post.readTime,
    date: post.date,
    author: post.author,
  }))
}

/**
 * Get posts for homepage preview
 */
export function getPostsForHomepage(limit = 3) {
  return getFeaturedPosts(limit).map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    category: post.category,
    image: post.image,
  }))
}
