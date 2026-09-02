import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center bg-surface">
        <div className="text-center px-6 py-20">
          <span className="text-6xl md:text-7xl block mb-6">🐒</span>

          <p className="kicker justify-center">404 — page not found</p>

          <h1 className="display text-[clamp(40px,6vw,72px)] leading-[.92] mb-4">
            This trail<br />
            <span className="text-teal">goes nowhere.</span>
          </h1>

          <p className="text-ink-3 text-[15px] max-w-md mx-auto mb-8 leading-relaxed">
            The page you&apos;re after has moved, never existed, or wandered off with a backpack. The good stuff is one tap away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="btn-gold min-h-[44px] px-6 text-[16px]">Back to home</Link>
            <Link href="/stays" className="btn-ghost min-h-[44px] px-6 text-[16px]">Book a stay</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
