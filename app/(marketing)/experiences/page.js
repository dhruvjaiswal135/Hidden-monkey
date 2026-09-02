import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ExperiencesPage from '@/components/features/experiences/ExperiencesPage'

export const metadata = {
  title: 'Experiences',
  description: 'Treks, sunrise yoga, cooking classes and street food trails in Darjeeling and Varanasi. Do them with fellow travelers and turn strangers into friends.',
  alternates: { canonical: 'https://hiddenmonkey.in/experiences' },
  openGraph: {
    title: 'Experiences | Hidden Monkey',
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
