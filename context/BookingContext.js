'use client'

import { createContext, useContext, useState, useCallback } from 'react'

const BookingContext = createContext(null)

/**
 * booking.stayType: 'hostel' | 'homestay' — drives hero copy, Stays filters and the booking modal.
 */
const INITIAL = { stayType: 'hostel', destination: '', checkIn: '', checkOut: '', guests: 1, roomType: '', roomId: '', price: 0 }

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(INITIAL)
  const [isOpen, setIsOpen] = useState(false)

  const openBooking = useCallback((prefill = {}) => { setBooking((p) => ({ ...p, ...prefill })); setIsOpen(true) }, [])
  const closeBooking = useCallback(() => setIsOpen(false), [])
  const updateBooking = useCallback((u) => setBooking((p) => ({ ...p, ...u })), [])
  const setStayType = useCallback((stayType) => setBooking((p) => ({ ...p, stayType, roomType: '', roomId: '', price: 0 })), [])
  const resetBooking = useCallback(() => { setBooking(INITIAL); setIsOpen(false) }, [])

  return (
    <BookingContext.Provider value={{ booking, isOpen, openBooking, closeBooking, updateBooking, setStayType, resetBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}

/** Shared helper: nights between two ISO dates (0 if incomplete) */
export const nightsBetween = (a, b) => (a && b ? Math.max(0, Math.round((new Date(b) - new Date(a)) / 864e5)) : 0)
