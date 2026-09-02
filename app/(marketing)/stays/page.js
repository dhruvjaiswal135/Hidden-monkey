import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StaysPage from '@/components/features/stays/StaysPage'
import { OG_IMAGES } from '@/content/images'

export const metadata = {
  title: 'Stays & prices — hostel beds and homestays',
  description: 'Hostel beds from ₹499 and family homestays from ₹1,299 in Darjeeling and Varanasi. Pod dorms, private rooms and suites — taxes included, free cancellation to 48 hrs.',
  alternates: { canonical: 'https://hiddenmonkey.in/stays' },
  openGraph: {
    title: 'Stays & prices — hostel beds and homestays',
    description: 'Dorms, private rooms, and vetted family homestays in Darjeeling and Varanasi.',
    images: [OG_IMAGES.stays],
  },
}

export default function StaysRoute() {
  return (
    <>
      <Header />
      <main>
        <StaysPage />
      </main>
      <Footer />
    </>
  )
}
