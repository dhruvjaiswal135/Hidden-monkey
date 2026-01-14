// import { NextResponse } from 'next/server'
// import { isValidEmail, isValidPhone } from '@/lib/utils'

// /**
//  * Booking API Route
//  * Handles booking requests
//  * 
//  * POST /api/booking
//  */
// export async function POST(request) {
//   try {
//     const body = await request.json()
//     const { 
//       name, 
//       email, 
//       phone, 
//       roomType, 
//       checkIn, 
//       checkOut, 
//       guests, 
//       specialRequests 
//     } = body
    
//     // Validate required fields
//     if (!name || !email || !phone || !roomType || !checkIn || !checkOut || !guests) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       )
//     }
    
//     // Validate email format
//     if (!isValidEmail(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email address' },
//         { status: 400 }
//       )
//     }
    
//     // Validate phone format
//     if (!isValidPhone(phone)) {
//       return NextResponse.json(
//         { error: 'Invalid phone number' },
//         { status: 400 }
//       )
//     }
    
//     // Validate dates
//     const checkInDate = new Date(checkIn)
//     const checkOutDate = new Date(checkOut)
//     const today = new Date()
//     today.setHours(0, 0, 0, 0)
    
//     if (checkInDate < today) {
//       return NextResponse.json(
//         { error: 'Check-in date cannot be in the past' },
//         { status: 400 }
//       )
//     }
    
//     if (checkOutDate <= checkInDate) {
//       return NextResponse.json(
//         { error: 'Check-out date must be after check-in date' },
//         { status: 400 }
//       )
//     }
    
//     // Validate guest count
//     const guestCount = parseInt(guests)
//     if (isNaN(guestCount) || guestCount < 1 || guestCount > 10) {
//       return NextResponse.json(
//         { error: 'Invalid number of guests' },
//         { status: 400 }
//       )
//     }
    
//     // Sanitize inputs
//     const sanitizedData = {
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//       phone: phone.trim(),
//       roomType: roomType.trim(),
//       checkIn: checkInDate.toISOString(),
//       checkOut: checkOutDate.toISOString(),
//       guests: guestCount,
//       specialRequests: specialRequests ? specialRequests.trim() : null,
//       timestamp: new Date().toISOString(),
//       ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
//       status: 'pending',
//     }
    
//     // Calculate number of nights
//     const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
//     sanitizedData.nights = nights
    
//     // In production, implement:
//     // 1. Check room availability
//     // 2. Calculate total price
//     // 3. Create booking record in database
//     // 4. Send confirmation email to guest
//     // 5. Send notification to hotel staff
//     // 6. Integrate with booking/PMS system
//     // 7. Process payment (if required)
    
//     // Example email sending
//     /*
//     await sendEmail({
//       to: sanitizedData.email,
//       from: 'bookings@hiddenmonkeyhotel.com',
//       subject: 'Booking Request Received - Hidden Monkey Hotel',
//       html: `
//         <h2>Thank you for your booking request!</h2>
//         <p>Dear ${sanitizedData.name},</p>
//         <p>We have received your booking request and will confirm availability within 2 hours.</p>
//         <h3>Booking Details:</h3>
//         <ul>
//           <li><strong>Room Type:</strong> ${sanitizedData.roomType}</li>
//           <li><strong>Check-in:</strong> ${new Date(sanitizedData.checkIn).toLocaleDateString()}</li>
//           <li><strong>Check-out:</strong> ${new Date(sanitizedData.checkOut).toLocaleDateString()}</li>
//           <li><strong>Nights:</strong> ${sanitizedData.nights}</li>
//           <li><strong>Guests:</strong> ${sanitizedData.guests}</li>
//         </ul>
//         <p>We look forward to welcoming you!</p>
//       `,
//     })
//     */
    
//     // Log the booking (in production, use proper logging service)
//     console.log('Booking request:', sanitizedData)
    
//     return NextResponse.json(
//       { 
//         success: true, 
//         message: 'Booking request received. We will confirm availability within 2 hours.',
//         bookingId: `BK${Date.now()}`, // Generate proper booking ID in production
//       },
//       { status: 200 }
//     )
    
//   } catch (error) {
//     console.error('Booking error:', error)
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }

// /**
//  * Handle unsupported methods
//  */
// export async function GET() {
//   return NextResponse.json(
//     { error: 'Method not allowed' },
//     { status: 405 }
//   )
// }
