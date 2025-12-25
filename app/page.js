import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Community from '@/components/sections/Community'
import FeaturedRooms from '@/components/sections/FeaturedRooms'
import RoomTypes from '@/components/sections/RoomTypes'
import Amenities from '@/components/sections/Amenities'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import { JsonLd, generateHotelSchema } from '@/lib/seo'
import Destinations from '@/components/sections/Destinations'

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
        <Community />
        <Destinations/>
        <FeaturedRooms />
        <RoomTypes />
        {/* <Amenities />
        <Gallery /> */}
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
