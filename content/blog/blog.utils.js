/**
 * Blog Utilities
 * 
 * Helper functions for blog operations: loading posts, filtering, sorting, etc.
 */

/**
 * Generate a valid slug from text
 * Converts "Your Title Here" -> "your-title-here"
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
}

/**
 * Get all blog posts from content/blog/posts/
 * Dynamically imports all post files
 */
export async function getAllPosts() {
  try {
    const posts = []

    // Manually import each post file
    // This is necessary because import.meta.glob has limited support in some setups
    const postModules = [
      import('./posts/first-hostel-stay'),
      import('./posts/rishikesh-beyond-yoga'),
      import('./posts/solo-travel-tips'),
      import('./posts/backpacking-bir-paragliding'),
      import('./posts/budget-backpacking-guide'),
    ]

    const results = await Promise.allSettled(postModules)

    results.forEach((result) => {
      if (result.status === 'fulfilled' && result.value.default) {
        posts.push(result.value.default)
      }
    })

    // Filter valid posts and sort by date (newest first)
    const validPosts = posts.filter((post) => post && post.slug)
    return validPosts.sort((a, b) => {
      const dateA = new Date(a.publishedAt)
      const dateB = new Date(b.publishedAt)
      return dateB - dateA
    })
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug) {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug)
}

/**
 * Get featured posts only
 */
export async function getFeaturedPosts() {
  const posts = await getAllPosts()
  return posts.filter((post) => post.featured === true)
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category) {
  const posts = await getAllPosts()
  return posts.filter((post) => post.category === category)
}

/**
 * Get all unique categories
 */
export async function getAllCategories() {
  const posts = await getAllPosts()
  const categories = new Set(posts.map((post) => post.category).filter(Boolean))
  return Array.from(categories).sort()
}

/**
 * Get most recent posts (for "Latest Posts" sections)
 */
export async function getRecentPosts(limit = 6) {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}

/**
 * Search posts by title or excerpt
 */
export async function searchPosts(query) {
  const posts = await getAllPosts()
  const lowerQuery = query.toLowerCase()

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Get related posts (same category, exclude current)
 */
export async function getRelatedPosts(currentSlug, limit = 3) {
  const currentPost = await getPostBySlug(currentSlug)
  if (!currentPost) return []

  const posts = await getAllPosts()
  return posts
    .filter(
      (post) =>
        post.category === currentPost.category && post.slug !== currentSlug
    )
    .slice(0, limit)
}

/**
 * Format date for display
 * "2024-01-15" -> "January 15, 2024"
 */
export function formatDate(isoString) {
  try {
    const date = new Date(isoString + 'T00:00:00Z')
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return isoString
  }
}

/**
 * Estimate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function estimateReadingTime(content) {
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / 200)
}
