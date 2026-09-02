/**
 * SEO utilities — metadata helpers and JSON-LD schemas.
 * Site-wide facts (domain, contacts, addresses) live here; keep them in sync with Footer/contact page.
 */

import { OG_IMAGES } from '@/content/images'

const SITE_URL = 'https://hiddenmonkey.in'
const SITE_NAME = 'Hidden Monkey'
const EMAIL = 'hello@hiddenmonkey.in'

const LOCATIONS = [
  {
    id: 'darjeeling',
    name: 'Hidden Monkey Darjeeling',
    telephone: '+91-98765-43210',
    address: { streetAddress: 'Batasia Loop Road', addressLocality: 'Darjeeling', addressRegion: 'West Bengal', postalCode: '734101', addressCountry: 'IN' },
  },
  {
    id: 'varanasi',
    name: 'Hidden Monkey Varanasi',
    telephone: '+91-98765-43211',
    address: { streetAddress: 'Meer Ghat', addressLocality: 'Varanasi', addressRegion: 'Uttar Pradesh', postalCode: '221001', addressCountry: 'IN' },
  },
]

const AMENITIES = ['Free WiFi', 'Shared kitchen', 'Lockers', 'Hot showers', 'Co-working room', 'Community events', 'Luggage storage']

/**
 * Generate metadata for a page
 * @param {Object} options - Metadata options
 * @returns {Object} Next.js metadata object
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image = OG_IMAGES.default,
  keywords = [],
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@hiddenmonkeyin',
    },
    robots: noindex ? { index: false, follow: false } : undefined,
  }
}

/**
 * JSON-LD for the hostel brand — one Hostel entity per location.
 * @returns {Object} JSON-LD schema
 */
export function generateHotelSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': LOCATIONS.map((loc) => ({
      '@type': 'Hostel',
      '@id': `${SITE_URL}/#${loc.id}`,
      name: loc.name,
      brand: SITE_NAME,
      description: 'Community hostel with pod dorms, private rooms and vetted family homestays. Beds from ₹499 a night, taxes included.',
      url: SITE_URL,
      telephone: loc.telephone,
      email: EMAIL,
      address: { '@type': 'PostalAddress', ...loc.address },
      priceRange: '₹499–₹2,499',
      checkinTime: '14:00',
      checkoutTime: '11:00',
      amenityFeature: AMENITIES.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    })),
  }
}

/**
 * Generate JSON-LD structured data for Breadcrumb
 * @param {Array} items - Breadcrumb items array
 * @returns {Object} JSON-LD schema
 */
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate JSON-LD structured data for FAQ
 * @param {Array} faqs - FAQ items array of {question, answer}
 * @returns {Object} JSON-LD schema
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate JSON-LD structured data for Article/BlogPosting
 * @param {Object} article - Article data
 * @returns {Object} JSON-LD schema
 */
export function generateArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

/**
 * Render JSON-LD script tag
 * @param {Object} schema - Schema object
 * @returns {JSX.Element} Script element
 */
export function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
