import { NextResponse } from 'next/server'
import { isValidEmail, isValidPhone } from '@/lib/utils'

/**
 * Contact Form API Route
 * Handles contact form submissions
 * 
 * POST /api/contact
 */
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    // Validate phone if provided
    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    }
    
    // In production, implement:
    // 1. Send email notification to hotel staff
    // 2. Store in database
    // 3. Send confirmation email to user
    // 4. Add to CRM system
    // 5. Log for analytics
    
    // Example email sending (use a service like SendGrid, Resend, or AWS SES)
    /*
    await sendEmail({
      to: 'info@hiddenmonkeyhotel.com',
      from: 'noreply@hiddenmonkeyhotel.com',
      subject: `New Contact Form: ${sanitizedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message}</p>
        <p><strong>Submitted:</strong> ${sanitizedData.timestamp}</p>
      `,
    })
    */
    
    // Log the submission (in production, use proper logging service)
    console.log('Contact form submission:', sanitizedData)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us. We will respond within 24 hours.' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * Handle unsupported methods
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
