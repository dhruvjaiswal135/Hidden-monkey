'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

/**
 * Blog Detail Page
 * Single story reading experience - calm, personal, story-driven
 * Emphasizes traveler voice, community, and authenticity over metrics
 */
export default function BlogDetailPage({ params }) {
  const [hoveredId, setHoveredId] = useState(null)

  // Sample blog post data (would come from database/CMS)
  const post = {
    slug: params.slug,
    title: 'Morning Chai at 5000 Feet: A Darjeeling Sunrise Story',
    intro: 'How a simple cup of tea and misty mountains taught me the meaning of slow travel.',
    destination: 'Darjeeling',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&auto=format&fit=crop&q=80',
    content: [
      'I woke up to the sound of monsoon rain tapping against the dorm room windows. Outside, the Darjeeling hills were wrapped in clouds so thick you couldn\'t see ten meters ahead. Most travelers would have turned over and gone back to sleep. I grabbed my jacket.',
      'The manager at the front desk gave me a knowing smile when I asked for directions to the sunrise point. "You\'ll need this," he said, handing me a steaming cup of chai in a chipped ceramic mug. No sugar, no milk—just pure, strong Darjeeling tea. "The clouds might clear. They might not. Either way, you should be there."',
      'The climb took 40 minutes. My legs burned. The clouds never lifted. And yet—that moment, standing alone on a misty hillside with a cup of chai warming my hands, watching the sun glow somewhere beyond the clouds like it was happening in another dimension—that was the moment I understood why I travel.',
      'It wasn\'t about checking things off a list. It wasn\'t about Instagram stories or photos that prove I was somewhere. It was about being present for these small, perfect moments. The ones nobody else sees. The ones that change you quietly.',
      'I sat there for two hours. The clouds started to lift around 7 AM. First came patches of blue. Then a golden light broke through, and suddenly the tea gardens below appeared like they were emerging from water. The mist began to dance. Mountains I couldn\'t see before suddenly rose around me, layer upon layer, fading into the distance.',
      'When I finally walked back down the hill, my feet were soaked and my tea was cold. The manager was watering plants outside. "Good sunrise?" he asked. I just nodded. Some things don\'t need words.',
      'That afternoon, I met three other travelers in the common room. None of us knew each other\'s real names for the first hour. We just talked about sunrises and chai and whether mountains make you feel bigger or smaller. By evening, we had plans to hike to a tea garden together. By the end of the week, we had made plans to meet again next year.',
      'That\'s the thing about hostels in places like Darjeeling. Everyone arrives as a stranger. Everyone leaves as someone changed. And somewhere in between, over countless cups of chai and unexpected friendships, you discover that travel isn\'t about the destination—it\'s about the people you share it with.'
    ],
    relatedStories: [
      {
        id: 1,
        title: 'The Hidden Tea Gardens of Darjeeling: A Visitor\'s Guide',
        destination: 'Darjeeling',
        image: 'https://images.unsplash.com/photo-1576092160550-2173dba999ef?w=400&auto=format&fit=crop&q=80',
        slug: 'tea-gardens-guide'
      },
      {
        id: 2,
        title: 'Why Varanasi Changed Everything (And How It Might Change You Too)',
        destination: 'Varanasi',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=80',
        slug: 'varanasi-transformation'
      },
      {
        id: 3,
        title: '48 Hours in Darjeeling: A First-Timer\'s Journey',
        destination: 'Darjeeling',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&auto=format&fit=crop&q=80',
        slug: 'darjeeling-first-timer'
      }
    ]
  }

  return (
    <main className="bg-white">
      {/* Back Link & Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6E4DF]">
        <Container className="max-w-4xl py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#5E625A] hover:text-[#F05A28] text-sm transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to stories
          </Link>
        </Container>
      </div>

      {/* Header Section */}
      <section className="py-8 md:py-12 bg-white">
        <Container className="max-w-4xl">
          {/* Destination Tag */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-[#F05A28]/10 text-[#F05A28] font-medium">
              {post.destination}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1F1C] mb-5 leading-tight">
            {post.title}
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-[#5E625A] font-light leading-relaxed max-w-2xl">
            {post.intro}
          </p>
        </Container>
      </section>

      {/* Feature Image */}
      <section className="py-8 md:py-12">
        <Container className="max-w-4xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <article className="py-8 md:py-12">
        <Container className="max-w-3xl">
          {/* Main Content */}
          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-[#1E1F1C] leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#E6E4DF] to-transparent" />

          {/* End CTA - Share Your Story */}
          <div className="text-center py-8">
            <p className="text-sm text-[#5E625A] mb-4 uppercase tracking-wider font-medium">Have a story like this?</p>
            <h3 className="text-2xl md:text-3xl text-[#1E1F1C] font-semibold mb-6">Share Your Story</h3>
            <p className="text-[#5E625A] mb-8 max-w-md mx-auto">
              Every traveler has moments that change them. We'd love to hear yours.
            </p>
            <a
              href="mailto:stories@hiddenmonkey.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F05A28] hover:bg-[#E84D1B] text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send us your story
            </a>
          </div>
        </Container>
      </article>

      {/* Related Stories */}
      <section className="py-12 md:py-16 bg-[#FAFAF9] border-t border-[#E6E4DF]">
        <Container className="max-w-4xl">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1F1C] mb-2">More Stories</h2>
            <p className="text-[#5E625A] font-light">From travelers like you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {post.relatedStories.map((story) => (
              <Link
                key={story.id}
                href={`/blog/${story.slug}`}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(story.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-[#1E1F1C]/20 transition-opacity duration-300 ${hoveredId === story.id ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Content */}
                <div>
                  <span className="text-sm text-[#F05A28] font-medium uppercase tracking-wider">
                    {story.destination}
                  </span>
                  <h3 className={`text-lg font-semibold text-[#1E1F1C] mt-2 leading-tight group-hover:text-[#F05A28] transition-colors duration-300 ${hoveredId === story.id ? 'text-[#F05A28]' : ''}`}>
                    {story.title}
                  </h3>
                </div>

                {/* Read Hint */}
                {hoveredId === story.id && (
                  <div className="mt-3 flex items-center gap-1 text-[#F05A28] text-sm font-medium">
                    Read story <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
