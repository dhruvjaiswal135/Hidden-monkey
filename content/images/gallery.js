/**
 * GALLERY IMAGES - Centralized Image Configuration
 * 
 * All gallery images are defined here.
 * To add new images to the gallery:
 * 1. Add a new object to the GALLERY_IMAGES array
 * 2. Include url, alt, and aspect (tall/wide/square)
 * 3. That's it!
 */

export const GALLERY_IMAGES = [
  { 
    id: 1,
    url: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=500&auto=format&fit=crop&q=80', 
    alt: 'Hostel common area',
    aspect: 'tall' 
  },
  { 
    id: 2,
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=80', 
    alt: 'Hostel exterior view',
    aspect: 'wide' 
  },
  { 
    id: 3,
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=80', 
    alt: 'Guest room interior',
    aspect: 'square' 
  },
  { 
    id: 4,
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=80', 
    alt: 'Social area',
    aspect: 'square' 
  },
  { 
    id: 5,
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=80', 
    alt: 'Rooftop terrace',
    aspect: 'wide' 
  },
  { 
    id: 6,
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=80', 
    alt: 'Dining area',
    aspect: 'square' 
  }
]

// Default rotation values for polaroid-style display
export const GALLERY_ROTATIONS = [-3, 2, -1, 3, -2, 1]

/**
 * Get all gallery images
 */
export function getGalleryImages() {
  return GALLERY_IMAGES
}

/**
 * Get gallery images for homepage preview
 */
export function getGalleryPreview(limit = 6) {
  return GALLERY_IMAGES.slice(0, limit)
}
