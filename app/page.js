import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhyHiddenMonkey from '@/components/sections/WhyHiddenMonkey'
import Gallery from '@/components/sections/Gallery'
import RoomTypes from '@/components/sections/RoomTypes'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Blog from '@/components/sections/Blog'
import { JsonLd, generateHotelSchema } from '@/lib/seo'
import Destinations from '@/components/sections/Destinations'
import DayLookLike from '@/components/sections/DayLookLike'
/**
 * Homepage
 * Main landing page with all key sections
 */

export default function Home() {
  const hotelSchema = generateHotelSchema()
  
  return (
    <>
      <JsonLd schema={hotelSchema} />
     
      <Header />
      <main>
        <Hero />
        <WhyHiddenMonkey/>
        <section id="experience">
          <DayLookLike/>
        </section>
        <section id="destinations">
          <Destinations/>
        </section>
        <section id="gallery">
          <Gallery />

          
        </section>
        <section id="stays">
          <RoomTypes />
        </section>
        {/* <section id="stories">
          <Blog />
        </section> */}
        <section id="community">
          <Testimonials />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  )
}
