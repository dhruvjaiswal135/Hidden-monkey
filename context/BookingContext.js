'use client'

import { createContext, useContext, useState, useCallback } from 'react'

const BookingContext = createContext(null)

/**
 * Booking state shape:
 * {
 *   destination: 'Darjeeling' | 'Varanasi' | '',
 *   checkIn: '2024-01-01' | '',
 *   checkOut: '2024-01-02' | '',
 *   guests: 1,
 *   roomType: 'Mixed Dorm · 6 Bed' | '',
 *   roomId: 'mixed-dorm-6' | '',
 *   price: 499,
 * }
 */

const INITIAL = {
  destination: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  roomType: '',
  roomId: '',
  price: 0,
}

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(INITIAL)
  const [isOpen, setIsOpen] = useState(false)

  // Open booking modal with optional pre-filled data
  const openBooking = useCallback((prefill = {}) => {
    setBooking(prev => ({ ...prev, ...prefill }))
    setIsOpen(true)
  }, [])

  const closeBooking = useCallback(() => {
    setIsOpen(false)
  }, [])

  const updateBooking = useCallback((updates) => {
    setBooking(prev => ({ ...prev, ...updates }))
  }, [])

  const resetBooking = useCallback(() => {
    setBooking(INITIAL)
    setIsOpen(false)
  }, [])

  return (
    <BookingContext.Provider value={{
      booking,
      isOpen,
      openBooking,
      closeBooking,
      updateBooking,
      resetBooking,
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}
