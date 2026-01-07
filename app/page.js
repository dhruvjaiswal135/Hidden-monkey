import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhyHiddenMonkey from '@/components/sections/WhyHiddenMonkey'
import Gallery from '@/components/sections/Gallery'
import RoomTypes from '@/components/sections/RoomTypes'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import { JsonLd, generateHotelSchema } from '@/lib/seo'
import Destinations from '@/components/sections/Destinations'
import Blog from '@/components/sections/Blog'
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
        <DayLookLike/>
        <Destinations/>
        <Gallery />
        <RoomTypes />
        
        <Blog/>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
