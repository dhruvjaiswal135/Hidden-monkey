import { HOMESTAY_HOSTS, HOMESTAY_IMAGES } from '@/content/images'

/** Homestay inventory — vetted family homes near each hostel. Same shape as rooms for the booking flow. */
export const HOMESTAYS = [
  { id: 'tamang-lebong', name: 'The Tamang home', town: 'Lebong', destination: 'Darjeeling', host: 'Aama Tamang', avatar: HOMESTAY_HOSTS.tamang, rating: 4.9, reviews: 48, price: 1299, originalPrice: 1799, description: "Two guest rooms above a tea-picker's family kitchen. Sel roti at breakfast, the best thukpa in Lebong at dinner.", facts: ['Private room', 'Shared family bath', 'Garden view', '12 min to hostel'], images: HOMESTAY_IMAGES['tamang-lebong'] },
  { id: 'pemba-view', name: "Pemba's view house", town: 'Lebong', destination: 'Darjeeling', host: 'Pemba', avatar: HOMESTAY_HOSTS.pemba, rating: 4.8, reviews: 31, price: 1499, originalPrice: 1999, description: "A retired guide's home with Kanchenjunga from the guest room window. He still leads the Tiger Hill run for guests.", facts: ['Private room & bath', 'Mountain view', 'Heater', '15 min to hostel'], images: HOMESTAY_IMAGES['pemba-view'] },
  { id: 'mishra-haveli', name: 'Mishra haveli room', town: 'Old city', destination: 'Varanasi', host: 'Mishra family', avatar: HOMESTAY_HOSTS.mishra, rating: 4.9, reviews: 57, price: 1399, originalPrice: 1899, description: 'A courtyard house three lanes from Assi Ghat. Puri-sabzi breakfast on the roof, thali dinners with the family.', facts: ['Private room & bath', 'Courtyard', 'AC', '5 min to hostel'], images: HOMESTAY_IMAGES['mishra-haveli'] },
  { id: 'rekha-riverside', name: 'Riverside with Rekha', town: 'Assi Ghat', destination: 'Varanasi', host: 'Rekha', avatar: HOMESTAY_HOSTS.rekha, rating: 4.8, reviews: 22, price: 1299, originalPrice: 1699, description: "Music teacher's home with a rooftop facing the river. Evening riyaaz drifts up; you're welcome to sit in.", facts: ['Private room', 'River rooftop', 'Vegetarian', '3 min to hostel'], images: HOMESTAY_IMAGES['rekha-riverside'] },
]

export const getAllHomestays = () => HOMESTAYS
export const getHomestaysByDestination = (d) => HOMESTAYS.filter((h) => h.destination === d)
export const HOMESTAY_FROM_PRICE = Math.min(...HOMESTAYS.map((h) => h.price))
