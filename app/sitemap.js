/**
 * Sitemap Route
 * Dynamic sitemap generation for SEO
 * 
 * GET /sitemap.xml
 */

const SITE_URL = 'https://hiddenmonkeyhotel.com'

/**
 * Blog posts for sitemap
 * In production, fetch from database or CMS
 */
const BLOG_POSTS = [
  {
    slug: '10-hidden-gems-in-downtown',
    lastModified: '2024-12-15',
  },
]

export default function sitemap() {
  // Static pages
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/rooms`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]
  
  // Blog post pages
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))
  
  return [...staticPages, ...blogPages]
}
