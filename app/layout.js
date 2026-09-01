import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { BookingProvider } from '@/context/BookingContext'
import BookingModal from '@/components/modals/BookingModal'

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-body' })
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap', variable: '--font-display' })

export const metadata = {
  metadataBase: new URL('https://hiddenmonkey.in'),
  title: { default: 'Hidden Monkey | Community Hostels & Homestays in Darjeeling and Varanasi', template: '%s | Hidden Monkey' },
  description: 'Beds from ₹499 and family homestays from ₹1,299 in Darjeeling and Varanasi. Pod dorms, private rooms, 100 Mbps fibre, free cancellation to 48 hrs, and a bonfire most nights.',
  keywords: ['hostel darjeeling', 'hostel varanasi', 'homestay darjeeling', 'homestay varanasi', 'backpacker hostel india', 'digital nomad hostel india'],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'Hidden Monkey', title: 'Hidden Monkey | Beds from ₹499. Friends for life.', description: 'Community hostels and vetted homestays in Darjeeling and Varanasi.', images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Hidden Monkey' }] },
  twitter: { card: 'summary_large_image', creator: '@hiddenmonkeyin' },
  robots: { index: true, follow: true },
}

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#128790' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased font-sans text-ink bg-surface">
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  )
}
