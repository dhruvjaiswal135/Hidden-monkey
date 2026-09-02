import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GalleryPage from '@/components/features/gallery/GalleryPage'
import { OG_IMAGES } from '@/content/images'

export const metadata = {
  title: 'Gallery',
  description: 'Inside the Monkey House — rooms, spaces, events and nature in Darjeeling and Varanasi, captured by the travellers who stayed.',
  alternates: { canonical: 'https://hiddenmonkey.in/gallery' },
  openGraph: {
    title: 'Gallery | Hidden Monkey',
    description: 'Inside the Monkey House — rooms, spaces, events and nature captured by real guests.',
    images: [OG_IMAGES.gallery],
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
