import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DestinationsPage from '@/components/features/destination/DestinationsPage'

export const metadata = {
  title: 'Destinations',
  description: 'Two houses, two vibes: the spiritual ghats of Varanasi and the misty tea mountains of Darjeeling. Explore Hidden Monkey hostels and find your perfect escape.',
  alternates: { canonical: 'https://hiddenmonkey.in/destinations' },
}

export default function Destinations() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <DestinationsPage />
      </main>
      <Footer />
    </>
  )
}
