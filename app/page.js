import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Marquee from '@/components/sections/Marquee'
import TwoWaysToStay from '@/components/sections/TwoWaysToStay'
import Destinations from '@/components/sections/Destinations'
import WhyHiddenMonkey from '@/components/sections/WhyHiddenMonkey'
import RoomTypes from '@/components/sections/RoomTypes'
import LifeAtMonkey from '@/components/sections/LifeAtMonkey'
import CommunityEvents from '@/components/sections/CommunityEvents'
import WorkFromParadise from '@/components/sections/WorkFromParadise'
import MeetTheTribe from '@/components/sections/MeetTheTribe'
import MiniFAQ, { HOME_FAQ } from '@/components/sections/MiniFAQ'
import { JsonLd, generateHotelSchema, generateFAQSchema } from '@/lib/seo'

export const metadata = {
  alternates: { canonical: 'https://hiddenmonkey.in' },
}

/**
 * Homepage — "Beds from ₹499. Friends for life."
 * Order mirrors the approved design: Hero → trust → marquee → two ways to stay → destinations → why → stays → life → events → work → reviews → FAQ.
 */
export default function Home() {
  return (
    <>
      <JsonLd schema={generateHotelSchema()} />
      {typeof generateFAQSchema === 'function' && <JsonLd schema={generateFAQSchema(HOME_FAQ.map((f) => ({ question: f.q, answer: f.a })))} />}
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Marquee />
        <TwoWaysToStay />
        <Destinations />
        <WhyHiddenMonkey />
        <RoomTypes />
        <LifeAtMonkey />
        <CommunityEvents />
        <WorkFromParadise />
        <MeetTheTribe />
        <MiniFAQ />
      </main>
      <Footer />
    </>
  )
}
