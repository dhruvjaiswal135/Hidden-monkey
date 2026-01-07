/**
 * BLOG IMAGES - Centralized Image Configuration
 * 
 * Featured images for blog posts.
 * These are referenced by post slug for easy lookup.
 */

export const BLOG_IMAGES = {
  // Slug-based image mapping
  'first-time-hostel-stay-guide': {
    featured: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&auto=format&fit=crop&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80',
  },
  'rishikesh-beyond-yoga': {
    featured: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
  },
  'solo-travel-tips': {
    featured: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&auto=format&fit=crop&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80',
  },
  'backpacking-bir-paragliding': {
    featured: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&auto=format&fit=crop&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&auto=format&fit=crop&q=80',
  },
  'secret-trails-rishikesh': {
    featured: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
  },
  'eating-like-local': {
    featured: 'https://images.unsplash.com/photo-1504674900769-7a6f7e1b912e?w=1200&auto=format&fit=crop&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1504674900769-7a6f7e1b912e?w=600&auto=format&fit=crop&q=80',
  },
  'solo-travel-lessons': {
    featured: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80',
  },
}

/**
 * Get blog image by slug
 */
export function getBlogImage(slug, type = 'featured') {
  const images = BLOG_IMAGES[slug]
  if (!images) return null
  return images[type] || images.featured
}

/**
 * Get all blog images
 */
export function getAllBlogImages() {
  return BLOG_IMAGES
}
