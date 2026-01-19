import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhyHiddenMonkey from '@/components/sections/WhyHiddenMonkey'
import LifeAtMonkey from '@/components/sections/LifeAtMonkey'
import DayLookLike from '@/components/sections/DayLookLike'
import CommunityEvents from '@/components/sections/CommunityEvents'
import WorkFromParadise from '@/components/sections/WorkFromParadise'
import Destinations from '@/components/sections/Destinations'
import Gallery from '@/components/sections/Gallery'
import RoomTypes from '@/components/sections/RoomTypes'
import MeetTheTribe from '@/components/sections/MeetTheTribe'
import CTA from '@/components/sections/CTA'
import { JsonLd, generateHotelSchema } from '@/lib/seo'

/**
 * Homepage - Hidden Monkey
 * "Where Strangers Become Travel Family"
 * 
 * A community-first, emotion-driven landing page for backpackers,
 * digital nomads, and adventure seekers.
 */

export default function Home() {
  const hotelSchema = generateHotelSchema()
  
  return (
    <>
      <JsonLd schema={hotelSchema} />
     
      <Header />
      <main className="pb-20 lg:pb-0">
        {/* Hero - First impression with tribe messaging */}
        <Hero />
        
        {/* Why Hidden Monkey - Storytelling cards */}
        <WhyHiddenMonkey />
        
        {/* Life at Monkey - Instagram-style moments */}
        <section id="life">
          <LifeAtMonkey />
        </section>
        
        {/* What a day looks like - Timeline experience */}
        <section id="experience">
          <DayLookLike />
        </section>
        
        {/* Community Events - Activities & gatherings */}
        <section id="events">
          <CommunityEvents />
        </section>
        
        {/* Work from Paradise - Digital nomad section */}
        <section id="work">
          <WorkFromParadise />
        </section>
        
        {/* Destinations - Where we are */}
        <section id="destinations">
          <Destinations />
        </section>
        
        {/* Gallery - Visual tour */}
        <section id="gallery">
          {/* <Gallery /> */}
        </section>
        
        {/* Stay Options - Room types */}
        <section id="stays">
          <RoomTypes />
        </section>
        
        {/* Meet the Tribe - Testimonials with world map */}
        <section id="community">
          <MeetTheTribe />
        </section>
        
        {/* Final CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  )
}
