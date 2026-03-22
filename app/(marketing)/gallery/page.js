import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GalleryPage from '@/components/features/gallery/GalleryPage'

export const metadata = {
  title: 'Gallery | Hidden Monkey Hostel',
  description: 'Explore our visual journal — real moments from Hidden Monkey hostels captured by the travellers who stayed.',
  openGraph: {
    title: 'Gallery | Hidden Monkey Hostel',
    description: 'Inside the Monkey House — rooms, spaces, events and nature captured by real guests.',
    images: ['/images/og-gallery.jpg'],
  },
}

export default function GalleryRoute() {
  return (
    <>
      <Header />
      <main>
        <GalleryPage />
      </main>
      <Footer />
    </>
  )
}
