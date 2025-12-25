/**
 * SEO Utilities and Metadata Helpers
 * Provides reusable functions for generating SEO-optimized metadata
 */

/**
 * Generate metadata for a page
 * @param {Object} options - Metadata options
 * @returns {Object} Next.js metadata object
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image = '/images/og-image.jpg',
  keywords = [],
  noindex = false,
}) {
  const baseUrl = 'https://hiddenmonkeyhotel.com'
  const url = `${baseUrl}${path}`

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
      siteName: 'Hidden Monkey Hotel',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@hiddenmonkeyhotel',
    },
    robots: noindex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Generate JSON-LD structured data for Hotel
 * @param {Object} hotelData - Hotel information
 * @returns {Object} JSON-LD schema
 */
export function generateHotelSchema(hotelData = {}) {
  const defaultData = {
    name: 'Hidden Monkey Hotel',
    description: 'Experience unparalleled luxury at Hidden Monkey Hotel. Award-winning boutique accommodation featuring premium rooms, exceptional service, and unforgettable hospitality.',
    url: 'https://hiddenmonkeyhotel.com',
    telephone: '+1-555-MONKEY-1',
    email: 'info@hiddenmonkeyhotel.com',
    address: {
      streetAddress: '123 Luxury Boulevard',
      addressLocality: 'Downtown',
      addressRegion: 'CA',
      postalCode: '90001',
      addressCountry: 'US',
    },
    priceRange: '$$$',
    starRating: 5,
    checkInTime: '15:00',
    checkOutTime: '11:00',
    ...hotelData,
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': defaultData.url,
    name: defaultData.name,
    description: defaultData.description,
    url: defaultData.url,
    telephone: defaultData.telephone,
    email: defaultData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: defaultData.address.streetAddress,
      addressLocality: defaultData.address.addressLocality,
      addressRegion: defaultData.address.addressRegion,
      postalCode: defaultData.address.postalCode,
      addressCountry: defaultData.address.addressCountry,
    },
    priceRange: defaultData.priceRange,
    starRating: {
      '@type': 'Rating',
      ratingValue: defaultData.starRating,
    },
    checkinTime: defaultData.checkInTime,
    checkoutTime: defaultData.checkOutTime,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Fitness Center', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    ],
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
 * @param {Array} faqs - FAQ items array
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
      name: 'Hidden Monkey Hotel',
      url: 'https://hiddenmonkeyhotel.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hidden Monkey Hotel',
      url: 'https://hiddenmonkeyhotel.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hiddenmonkeyhotel.com/images/logo.png',
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
