/**
 * BLOG HELPER FUNCTIONS
 * 
 * These functions handle all blog data operations.
 * You don't need to modify this file - just use these functions in your pages.
 */

import { posts } from './posts'

// Get all blog posts, sorted by date (newest first)
export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get a single post by its slug
export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug)
}

// Get featured posts (for homepage)
export function getFeaturedPosts(limit = 3) {
  return posts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

// Get posts by category
export function getPostsByCategory(category) {
  if (!category) return getAllPosts()
  
  return posts
    .filter(post => post.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(currentSlug, limit = 3) {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []
  
  return posts
    .filter(post => 
      post.slug !== currentSlug && 
      post.category === currentPost.category
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

// Get all unique categories
export function getAllCategories() {
  const categories = posts.map(post => post.category)
  return [...new Set(categories)].sort()
}

// Get recent posts
export function getRecentPosts(limit = 6) {
  return getAllPosts().slice(0, limit)
}

// Search posts by title or excerpt
export function searchPosts(query) {
  if (!query) return getAllPosts()
  
  const searchQuery = query.toLowerCase()
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery) ||
    post.excerpt.toLowerCase().includes(searchQuery) ||
    post.category.toLowerCase().includes(searchQuery)
  )
}
