# Hidden Monkey Hotel - Production Website

A production-ready luxury hotel website built with Next.js 14, featuring exceptional SEO optimization, fast performance, and scalable architecture.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (ES2023+)
- **Styling:** Tailwind CSS
- **Rendering:** Server Components (default)
- **Deployment:** Vercel

## Features

### SEO Optimization
- Next.js Metadata API with complete Open Graph and Twitter Card support
- Dynamic sitemap and robots.txt generation
- Schema.org JSON-LD structured data (Hotel, FAQ, Breadcrumb, Article)
- Semantic HTML5 with proper heading hierarchy
- Optimized images with next/image
- Self-hosted fonts with next/font

### Performance
- Server-side rendering for SEO-critical pages
- Optimized image loading with AVIF/WebP formats
- Minimal client-side JavaScript
- Clean, efficient code with no bloat
- Core Web Vitals optimized

### Pages
- Homepage with Hero, Rooms, Amenities, Gallery, Testimonials
- Rooms listing with detailed information
- About page with company story and team
- Blog with article listings and individual posts
- Contact page with form and information
- Dynamic blog post pages

### Features
- Responsive mobile-first design
- Accessible UI components
- Contact form with validation
- Booking request system
- Newsletter subscription
- FAQ section

## Project Structure

```
/app
  /layout.js               # Root layout with metadata
  /page.js                 # Homepage
  /robots.js               # SEO robots configuration
  /sitemap.js              # Dynamic sitemap
  /(marketing)
     /rooms/page.js        # Rooms listing
     /about/page.js        # About page
     /contact/page.js      # Contact page
     /blog/page.js         # Blog listing
     /blog/[slug]/page.js  # Blog post
  /api
     /contact/route.js     # Contact form API
     /booking/route.js     # Booking API

/components
  /ui                      # Reusable UI components
  /layout                  # Header, Footer
  /sections                # Page sections

/lib
  seo.js                   # SEO utilities
  constants.js             # App constants
  utils.js                 # Helper functions

/styles
  globals.css              # Global styles

/public
  /images                  # Static images
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://hiddenmonkeyhotel.com
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASSWORD=your-password
```

### Customization

1. Update site information in `/lib/constants.js`
2. Replace placeholder images in `/public/images/`
3. Configure email service in API routes
4. Update metadata in `/app/layout.js`
5. Add Google Analytics/tracking IDs

## SEO Checklist

- [x] Metadata API on all pages
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] Schema.org JSON-LD
- [x] Semantic HTML
- [x] Image alt text
- [x] Dynamic sitemap
- [x] Robots.txt
- [x] Mobile responsive
- [x] Fast loading times

## Performance Optimization

- Server Components for static content
- Image optimization with next/image
- Self-hosted fonts
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Proper caching strategies

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

Build the project and deploy the `.next` folder with a Node.js server.

## Future Enhancements

- [ ] Integrate payment gateway (Stripe)
- [ ] Connect to booking management system
- [ ] Add CMS integration (Contentful, Sanity)
- [ ] Implement email service (SendGrid, Resend)
- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Multi-language support (i18n)
- [ ] User authentication for bookings
- [ ] Admin dashboard
- [ ] Real-time availability checking
- [ ] Review system integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - All rights reserved

## Support

For support, email info@hiddenmonkeyhotel.com
