/**
 * Blog Post Schema
 * 
 * Defines the structure and contract for all blog posts.
 * Every post file must conform to this schema.
 */

export const postSchema = {
  // Required: Unique slug (derived from filename, no .js extension)
  slug: String, // e.g., "first-hostel-stay"

  // Required: Post title (appears in listings and detail page)
  title: String, // e.g., "Your First Hostel Stay"

  // Required: Short excerpt for listings and previews
  excerpt: String, // 150-200 characters, appears in blog cards

  // Required: Main post content (JSX/HTML markup as string)
  content: String, // Can contain HTML tags for rich formatting

  // Required: Publication date (ISO string format)
  publishedAt: String, // e.g., "2024-01-15"

  // Optional: Author name
  author: String, // e.g., "Hidden Monkey Team"

  // Optional: Reading time in minutes
  readingTime: Number, // e.g., 5

  // Optional: Featured image filename (stored in content/images/blog/{slug}/)
  image: String, // e.g., "cover.jpg"

  // Optional: SEO description (if not provided, uses excerpt)
  seoDescription: String,

  // Optional: Category for filtering
  category: String, // e.g., "travel-tips", "destination", "experiences"

  // Optional: Tags for additional categorization
  tags: Array, // e.g., ["hostel", "travel", "backpacking"]

  // Optional: Mark as featured for homepage display
  featured: Boolean, // Shows on homepage blog section
}

/**
 * Example Post Structure:
 * 
 * export default {
 *   slug: 'first-hostel-stay',
 *   title: 'Your First Hostel Stay',
 *   excerpt: 'Nervous about staying in a hostel? Here's everything...',
 *   content: '<p>Hostels are an amazing way to travel...</p>',
 *   publishedAt: '2024-01-15',
 *   author: 'Hidden Monkey Team',
 *   readingTime: 5,
 *   image: 'cover.jpg',
 *   category: 'travel-tips',
 *   featured: true,
 * }
 */
