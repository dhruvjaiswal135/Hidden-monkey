/**
 * Robots.txt Route
 * SEO robots configuration
 * 
 * GET /robots.txt
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://hiddenmonkeyhotel.com/sitemap.xml',
  }
}
