import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GalleryPage from '@/components/features/gallery/GalleryPage'

export const metadata = {
  title: 'Gallery',
  description: 'Inside the Monkey House — rooms, spaces, events and nature in Darjeeling and Varanasi, captured by the travellers who stayed.',
  alternates: { canonical: 'https://hiddenmonkey.in/gallery' },
  openGraph: {
    title: 'Gallery | Hidden Monkey',
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
