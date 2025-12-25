/**
 * Application Constants
 */

export const SITE_CONFIG = {
  name: 'Hidden Monkey Hotel',
  tagline: 'Luxury Boutique Hotel & Accommodation',
  description: 'Experience unparalleled luxury at Hidden Monkey Hotel. Award-winning boutique accommodation featuring premium rooms, exceptional service, and unforgettable hospitality.',
  url: 'https://hiddenmonkeyhotel.com',
  email: 'info@hiddenmonkeyhotel.com',
  phone: '+1-555-MONKEY-1',
  address: {
    street: '123 Luxury Boulevard',
    city: 'Downtown',
    state: 'CA',
    zip: '90001',
    country: 'United States',
  },
  social: {
    twitter: '@hiddenmonkeyhotel',
    instagram: '@hiddenmonkeyhotel',
    facebook: 'hiddenmonkeyhotel',
  },
  checkIn: '3:00 PM',
  checkOut: '11:00 AM',
}

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export const ROOM_TYPES = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    slug: 'deluxe-room',
    description: 'Elegant and spacious room with modern amenities and city views',
    size: '350 sq ft',
    occupancy: 2,
    beds: '1 King or 2 Queen',
    price: 299,
    features: [
      'King or Queen Bed',
      'City View',
      'Free WiFi',
      'Smart TV',
      'Mini Bar',
      'Work Desk',
      'Premium Toiletries',
      'Rain Shower',
    ],
    image: '/images/rooms/deluxe.jpg',
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    slug: 'executive-suite',
    description: 'Luxurious suite with separate living area and premium amenities',
    size: '550 sq ft',
    occupancy: 3,
    beds: '1 King',
    price: 499,
    features: [
      'King Bed',
      'Separate Living Area',
      'Panoramic Views',
      'Free WiFi',
      'Smart TV',
      'Kitchenette',
      'Dining Area',
      'Jacuzzi Bath',
      'Premium Toiletries',
      'Complimentary Breakfast',
    ],
    image: '/images/rooms/executive.jpg',
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    slug: 'presidential-suite',
    description: 'Ultimate luxury with expansive space and exclusive amenities',
    size: '900 sq ft',
    occupancy: 4,
    beds: '1 King + 1 Queen',
    price: 899,
    features: [
      'Master Bedroom with King Bed',
      'Second Bedroom with Queen Bed',
      'Spacious Living Room',
      'Full Kitchen',
      'Dining Room',
      'Two Bathrooms',
      'Private Balcony',
      'Butler Service',
      'Premium Toiletries',
      'Complimentary Breakfast & Dinner',
    ],
    image: '/images/rooms/presidential.jpg',
  },
]

export const AMENITIES = [
  {
    name: 'Free WiFi',
    description: 'High-speed internet throughout the hotel',
    icon: 'wifi',
  },
  {
    name: 'Restaurant & Bar',
    description: 'Fine dining and craft cocktails',
    icon: 'restaurant',
  },
  {
    name: '24/7 Room Service',
    description: 'Available at your convenience',
    icon: 'service',
  },
  {
    name: 'Fitness Center',
    description: 'State-of-the-art equipment',
    icon: 'fitness',
  },
  {
    name: 'Spa & Wellness',
    description: 'Relaxation and rejuvenation',
    icon: 'spa',
  },
  {
    name: 'Valet Parking',
    description: 'Complimentary for guests',
    icon: 'parking',
  },
  {
    name: 'Concierge Service',
    description: 'Expert local recommendations',
    icon: 'concierge',
  },
  {
    name: 'Business Center',
    description: 'Meeting rooms and workspaces',
    icon: 'business',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, NY',
    rating: 5,
    text: 'An absolutely incredible experience! The attention to detail, from the elegant room design to the personalized service, exceeded all expectations. The staff went above and beyond to make our anniversary special.',
    date: '2024-11-15',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'Best hotel stay I\'ve ever had. The Presidential Suite was stunning, and the butler service was impeccable. Perfect for a luxury getaway or business trip.',
    date: '2024-10-28',
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'London, UK',
    rating: 5,
    text: 'Hidden Monkey Hotel is a true gem. From the moment we arrived, we were treated like royalty. The spa, restaurant, and rooms are all world-class. Can\'t wait to return!',
    date: '2024-10-12',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'What is the check-in and check-out time?',
    answer: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request and subject to availability.',
  },
  {
    question: 'Do you offer airport transportation?',
    answer: 'Yes, we offer complimentary airport shuttle service for all guests. Please contact our concierge at least 24 hours in advance to arrange pickup.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we offer complimentary valet parking for all hotel guests. Self-parking is also available.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Yes, we are a pet-friendly hotel. We welcome dogs and cats up to 50 lbs with a small additional fee. Please inform us during booking.',
  },
  {
    question: 'What amenities are included in the room?',
    answer: 'All rooms include free WiFi, smart TV, premium toiletries, mini bar, coffee maker, safe, and more. Suites include additional amenities such as kitchenettes and separate living areas.',
  },
  {
    question: 'Do you have a restaurant on-site?',
    answer: 'Yes, we have an award-winning restaurant serving breakfast, lunch, and dinner, as well as a cocktail bar open until late.',
  },
  {
    question: 'Is there a cancellation policy?',
    answer: 'Reservations can be cancelled up to 48 hours before arrival without penalty. Cancellations made within 48 hours will be charged one night\'s stay.',
  },
  {
    question: 'Do you offer spa services?',
    answer: 'Yes, our full-service spa offers massages, facials, body treatments, and wellness services. Advance booking is recommended.',
  },
]

export const CONTACT_INFO = {
  email: SITE_CONFIG.email,
  phone: SITE_CONFIG.phone,
  address: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}`,
  hours: {
    frontDesk: '24/7',
    restaurant: '7:00 AM - 11:00 PM',
    spa: '9:00 AM - 9:00 PM',
    fitness: '24/7',
  },
}
