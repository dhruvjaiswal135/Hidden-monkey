import { getAllPosts } from '@/content/blog'

const SITE_URL = 'https://hiddenmonkey.in'

export default async function sitemap() {
  const staticPages = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/stays', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/destinations', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/experiences', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/gallery', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/cancellation', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  ].map(({ path, ...rest }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    ...rest,
  }))

  const posts = await getAllPosts()
  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
