import Image from 'next/image'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

/**
 * Gallery Section
 * Image gallery showcase
 */

export default function Gallery() {
  const images = [
    { src: '/images/gallery/lobby.jpg', alt: 'Elegant hotel lobby' },
    { src: '/images/gallery/restaurant.jpg', alt: 'Fine dining restaurant' },
    { src: '/images/gallery/pool.jpg', alt: 'Rooftop pool area' },
    { src: '/images/gallery/spa.jpg', alt: 'Luxurious spa' },
    { src: '/images/gallery/bar.jpg', alt: 'Cocktail bar' },
    { src: '/images/gallery/suite.jpg', alt: 'Presidential suite' },
  ]
  
  return (
    <Section background="primary">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-sans font-bold mb-4">Explore Our Hotel</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Take a visual tour of our stunning facilities and luxurious spaces
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
