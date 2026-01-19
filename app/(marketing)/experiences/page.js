import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ExperiencesPage from '@/components/features/experiences/ExperiencesPage'

export const metadata = {
  title: 'Experiences | Hidden Monkey Hostel',
  description: 'Discover unforgettable experiences at Hidden Monkey. From sunrise yoga to street food trails, find adventures that become memories.',
  openGraph: {
    title: 'Experiences | Hidden Monkey Hostel',
    description: 'Treks, yoga sessions, cooking classes, and spontaneous adventures. Do them with fellow travelers.',
    images: ['/images/og-experiences.jpg'],
  },
}

export default function ExperiencesRoute() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ExperiencesPage />
      </main>
      <Footer />
    </>
  )
}
