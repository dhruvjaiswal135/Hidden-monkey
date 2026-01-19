import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DestinationsPage from '@/components/features/destination/DestinationsPage'

export const metadata = {
  title: 'Destinations | Hidden Monkey - Find Your Vibe',
  description: 'Explore Hidden Monkey hostels across India. From the spiritual ghats of Varanasi to the misty mountains of Darjeeling, find your perfect escape.',
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
