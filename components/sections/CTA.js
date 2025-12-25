'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { ArrowRight, Facebook, Twitter, Instagram, Mail, Send } from 'lucide-react'

/**
 * CTA Section
 * Newsletter signup and social media links
 */

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Thanks for subscribing! 🎉')
      setEmail('')
      setIsSubmitting(false)
      setTimeout(() => setMessage(''), 3000)
    }, 1000)
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/hiddenmonkey', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: Twitter, href: 'https://twitter.com/hiddenmonkey', label: 'Twitter', color: 'hover:bg-[#1DA1F2]' },
    { icon: Instagram, href: 'https://instagram.com/hiddenmonkey', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]' },
    { icon: Send, href: 'https://t.me/hiddenmonkey', label: 'Telegram', color: 'hover:bg-[#0088cc]' }
  ]

  return (
    <section className="relative py-12 md:py-16 bg-white" aria-label="Stay Connected">
      <Container className="max-w-[1400px]">
        <div className="bg-[#FAFAFA] rounded-2xl px-6 md:px-10 py-10 md:py-12 border border-gray-200">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="font-sans text-[#1A1A1A] text-[28px] md:text-[36px] font-normal mb-1">
              Stay in the Loop
            </h2>
            <p className="text-[#6B7280] text-[13px] md:text-[14px]">
              Tips, stories, and hostel updates
            </p>
          </div>

          {/* Email & Social */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            {/* Email Subscription */}
            <div className="flex-1 max-w-md">
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative flex items-center bg-white rounded-lg border border-gray-300 overflow-hidden focus-within:border-[#2D7A5F] transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-2.5 text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none text-[14px]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 bg-[#2D7A5F] hover:bg-[#246B51] text-white text-[13px] font-medium transition-colors disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
                {message && (
                  <p className="mt-2 text-[#2D7A5F] text-xs">
                    {message}
                  </p>
                )}
              </form>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white border border-gray-300 text-[#1A1A1A] hover:border-[#2D7A5F] hover:text-[#2D7A5F] rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
