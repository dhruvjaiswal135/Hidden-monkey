import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { AMENITIES } from '@/lib/constants'

/**
 * Amenities Section
 * Display hotel amenities
 */

export default function Amenities() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-sans font-bold mb-4">World-Class Amenities</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Enjoy a comprehensive range of premium facilities and services designed to enhance your stay
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AMENITIES.map((amenity, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <div className="w-8 h-8 text-primary-600">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{amenity.name}</h3>
              <p className="text-sm text-neutral-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
