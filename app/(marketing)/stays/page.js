import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StaysPage from '@/components/features/stays/StaysPage'

export const metadata = {
  title: 'Book Your Stay | Hidden Monkey Hostel',
  description: 'Book your perfect room at Hidden Monkey. From social dorms to private suites, find the space that fits your travel style.',
  openGraph: {
    title: 'Book Your Stay | Hidden Monkey Hostel',
    description: 'Dorms, private rooms, and suites designed for comfort and connection.',
    images: ['/images/og-stays.jpg'],
  },
}

export default function StaysRoute() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <StaysPage />
      </main>
      <Footer />
    </>
  )
}
