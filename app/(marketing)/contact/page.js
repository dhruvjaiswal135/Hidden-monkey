'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { CONTACT_INFO, FAQ_ITEMS } from '@/lib/constants'
import { isValidEmail, isValidPhone } from '@/lib/utils'

/**
 * Contact Page
 * Contact form and information
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = 'Invalid phone number'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="gray">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-sans font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-neutral-600">
                Get in touch with our team. We're here to help with reservations, inquiries, and any questions you may have.
              </p>
            </div>
          </Container>
        </Section>
        
        {/* Contact Section */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-sans font-bold text-3xl mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Full Name"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  
                  <Input
                    label="Email Address"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                  
                  <Input
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                  
                  <Input
                    label="Subject"
                    id="subject"
                    type="text"
                    placeholder="Booking inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    required
                  />
                  
                  <Textarea
                    label="Message"
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                  />
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="font-sans font-bold text-3xl mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-neutral-600 hover:text-primary-600">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-neutral-600 hover:text-primary-600">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <address className="text-neutral-600 not-italic">
                        {CONTACT_INFO.address}
                      </address>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-neutral-200">
                    <h3 className="font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2 text-neutral-600">
                      <div className="flex justify-between">
                        <span>Front Desk:</span>
                        <span className="font-medium">{CONTACT_INFO.hours.frontDesk}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Restaurant:</span>
                        <span className="font-medium">{CONTACT_INFO.hours.restaurant}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Spa:</span>
                        <span className="font-medium">{CONTACT_INFO.hours.spa}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fitness Center:</span>
                        <span className="font-medium">{CONTACT_INFO.hours.fitness}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* FAQ Section */}
        <Section background="gray">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sans font-bold text-3xl mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {FAQ_ITEMS.slice(0, 5).map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <summary className="font-semibold text-lg cursor-pointer hover:text-primary-600 transition-colors">
                      {faq.question}
                    </summary>
                    <p className="mt-4 text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
