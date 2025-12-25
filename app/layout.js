import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://hiddenmonkeyhotel.com'),
  title: {
    default: 'Hidden Monkey Hotel | Luxury Boutique Hotel & Accommodation',
    template: '%s | Hidden Monkey Hotel'
  },
  description: 'Experience unparalleled luxury at Hidden Monkey Hotel. Award-winning boutique accommodation featuring premium rooms, exceptional service, and unforgettable hospitality in the heart of the city.',
  keywords: ['luxury hotel', 'boutique hotel', 'accommodation', 'premium rooms', 'hotel booking', 'city hotel', 'travel', 'hospitality'],
  authors: [{ name: 'Hidden Monkey Hotel' }],
  creator: 'Hidden Monkey Hotel',
  publisher: 'Hidden Monkey Hotel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hiddenmonkeyhotel.com',
    siteName: 'Hidden Monkey Hotel',
    title: 'Hidden Monkey Hotel | Luxury Boutique Hotel & Accommodation',
    description: 'Experience unparalleled luxury at Hidden Monkey Hotel. Award-winning boutique accommodation featuring premium rooms, exceptional service, and unforgettable hospitality.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hidden Monkey Hotel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hidden Monkey Hotel | Luxury Boutique Hotel & Accommodation',
    description: 'Experience unparalleled luxury at Hidden Monkey Hotel. Award-winning boutique accommodation featuring premium rooms, exceptional service, and unforgettable hospitality.',
    images: ['/images/twitter-image.jpg'],
    creator: '@hiddenmonkeyhotel',
  },
  robots: {
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#c77244',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans text-neutral-900 bg-white">
        {children}
      </body>
    </html>
  )
}
