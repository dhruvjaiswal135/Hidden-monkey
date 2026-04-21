'use client'

import { useState, useEffect } from 'react'
import { useBooking } from '@/context/BookingContext'

/* ─── SVG Icons ─────────────────────────────────────────── */
const Icons = {
  mountain: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m3 21 6.172-6.172a2 2 0 0 1 2.828 0L21 21M3 21h18M9 9l.463-.536a1.75 1.75 0 0 1 2.574-.1L15 11" /><circle cx="16.5" cy="6.5" r="2" /></svg>,
  temple: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 12h3v8h14v-8h3L12 3z M9 21v-5a3 3 0 016 0v5" /></svg>,
  calendar: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
  users: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  bed: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" /></svg>,
  check: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>,
  chevLeft: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>,
  close: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
  arrow: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>,
  minus: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>,
  plus: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
  location: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  moon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>,
  shield: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
}

const DESTINATIONS = [
  { id: 'Darjeeling', label: 'Darjeeling', sub: 'Mountains · Tea Gardens · Mist', icon: Icons.mountain },
  { id: 'Varanasi', label: 'Varanasi', sub: 'Ghats · Culture · Spirituality', icon: Icons.temple },
]

const STEP_LABELS = ['Destination', 'Dates & Guests', 'Summary']

export default function BookingModal() {
  const { booking, isOpen, closeBooking, updateBooking } = useBooking()
  const [step, setStep] = useState(0)
  const [animDir, setAnimDir] = useState('forward')

  // Determine correct starting step — ONLY on open
  useEffect(() => {
    if (!isOpen) return
    // If room is pre-selected (from RoomDetailModal), skip to dates step
    if (booking.roomType && booking.price) {
      setStep(booking.destination ? 1 : 0)
    } else if (booking.destination) {
      setStep(1)
    } else {
      setStep(0)
    }
  }, [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!isOpen) return null

  const today = new Date().toISOString().split('T')[0]
  const hasRoom = !!(booking.roomType && booking.price)

  // Calculate nights
  const nights = booking.checkIn && booking.checkOut
    ? Math.max(1, Math.ceil((new Date(booking.checkOut) - new Date(booking.checkIn)) / 86400000))
    : 0

  // Determine total steps (skip room step if pre-selected)
  const totalSteps = hasRoom ? 3 : 3
  const stepLabels = hasRoom
    ? ['Destination', 'Dates & Guests', 'Summary']
    : ['Destination', 'Dates & Guests', 'Summary']

  // For dorms price is per bed, for private rooms price is per room
  const isDorm = (booking.roomId || '').includes('dorm')
  const unitPrice = booking.price || 0
  const totalPrice = isDorm
    ? unitPrice * nights * (booking.guests || 1)
    : unitPrice * nights

  const goNext = () => {
    setAnimDir('forward')
    setStep(s => Math.min(s + 1, totalSteps - 1))
  }

  const goBack = () => {
    setAnimDir('back')
    setStep(s => Math.max(s - 1, 0))
  }

  const canProceed = () => {
    if (step === 0) return !!booking.destination
    if (step === 1) return !!(booking.checkIn && booking.checkOut && (booking.guests || 1) >= 1)
    return true
  }

  const handleConfirm = () => {
    const params = new URLSearchParams({
      destination: booking.destination,
      checkin: booking.checkIn,
      checkout: booking.checkOut,
      guests: String(booking.guests || 1),
    })
    if (booking.roomId) params.set('room', booking.roomId)
    window.open(`https://bookings.hiddenmonkey.in?${params.toString()}`, '_blank')
    closeBooking()
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return '—'
    return new Date(dateStr).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={closeBooking}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-[20px] w-full max-w-[420px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <div className="flex items-center gap-3">
            {step > 0 && (
              <button onClick={goBack} className="w-7 h-7 flex items-center justify-center rounded-full border border-[#E6E4DF] bg-white hover:bg-[#FBFBF9] transition-colors text-[#6B665E]">
                {Icons.chevLeft}
              </button>
            )}
            <div>
              <p className="text-[9px] font-bold text-[#128790] uppercase tracking-[0.15em]">Step {step + 1} of {totalSteps}</p>
              <p className="text-[15px] font-bold text-[#1E1F1C] leading-tight">{stepLabels[step]}</p>
            </div>
          </div>
          <button onClick={closeBooking} className="w-7 h-7 flex items-center justify-center rounded-full border border-[#E6E4DF] bg-white hover:bg-[#FBFBF9] transition-colors text-[#6B665E]">
            {Icons.close}
          </button>
        </div>

        {/* ── Progress ── */}
        <div className="h-[2px] bg-[#F0EDE8] mx-5 rounded-full overflow-hidden">
          <div className="h-full bg-[#128790] rounded-full transition-all duration-400 ease-out" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
        </div>

        {/* ── Pre-selected room banner ── */}
        {hasRoom && (
          <div className="mx-5 mt-3 px-3 py-2 bg-[#128790]/5 border border-[#128790]/10 rounded-xl flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#128790]/10 flex items-center justify-center text-[#128790]">{Icons.bed}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-[#1E1F1C] truncate">{booking.roomType}</p>
              <p className="text-[10px] text-[#128790] font-semibold">₹{booking.price}/night {isDorm ? '· per bed' : '· per room'}</p>
            </div>
            <div className="w-5 h-5 rounded-full bg-[#128790] flex items-center justify-center text-white">{Icons.check}</div>
          </div>
        )}

        {/* ── Content ── */}
        <div className="p-5 pt-4 min-h-[220px]">

          {/* ─── Step 0: Destination ─── */}
          {step === 0 && (
            <div className="space-y-2.5">
              <p className="text-[11px] text-[#9A948C] mb-3">Where would you like to stay?</p>
              {DESTINATIONS.map(d => (
                <button
                  key={d.id}
                  onClick={() => updateBooking({ destination: d.id })}
                  className={`w-full flex items-center gap-3.5 p-3.5 rounded-[14px] border-[1.5px] transition-all text-left ${
                    booking.destination === d.id
                      ? 'border-[#128790] bg-[#128790]/[0.03] shadow-[0_0_0_3px_rgba(18,135,144,0.06)]'
                      : 'border-[#E6E4DF] bg-white hover:border-[#128790]/40'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    booking.destination === d.id ? 'bg-[#128790]/10 text-[#128790]' : 'bg-[#FBFBF9] text-[#9A948C]'
                  }`}>
                    {d.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-[#1E1F1C]">{d.label}</p>
                    <p className="text-[10px] text-[#9A948C] mt-0.5">{d.sub}</p>
                  </div>
                  {booking.destination === d.id && (
                    <div className="w-5 h-5 rounded-full bg-[#128790] flex items-center justify-center text-white shrink-0">
                      {Icons.check}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* ─── Step 1: Dates & Guests ─── */}
          {step === 1 && (
            <div className="space-y-5">
              <p className="text-[11px] text-[#9A948C]">
                When are you visiting <span className="text-[#128790] font-bold">{booking.destination}</span>?
              </p>

              {/* Date inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1.5 text-[9px] font-bold text-[#9A948C] uppercase tracking-[0.12em] mb-1.5">
                    <span className="text-[#128790]">{Icons.calendar}</span> Check-in
                  </label>
                  <input
                    type="date"
                    value={booking.checkIn}
                    min={today}
                    onChange={e => updateBooking({ checkIn: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-xl text-[12px] font-semibold text-[#1E1F1C] outline-none focus:border-[#128790] focus:ring-2 focus:ring-[#128790]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-[9px] font-bold text-[#9A948C] uppercase tracking-[0.12em] mb-1.5">
                    <span className="text-[#128790]">{Icons.calendar}</span> Check-out
                  </label>
                  <input
                    type="date"
                    value={booking.checkOut}
                    min={booking.checkIn || today}
                    onChange={e => updateBooking({ checkOut: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-xl text-[12px] font-semibold text-[#1E1F1C] outline-none focus:border-[#128790] focus:ring-2 focus:ring-[#128790]/10 transition-all"
                  />
                </div>
              </div>

              {/* Guests counter */}
              <div>
                <label className="flex items-center gap-1.5 text-[9px] font-bold text-[#9A948C] uppercase tracking-[0.12em] mb-2">
                  <span className="text-[#128790]">{Icons.users}</span> Number of Guests
                </label>
                <div className="flex items-center gap-4 px-4 py-2.5 bg-[#FBFBF9] border border-[#E6E4DF] rounded-xl">
                  <button
                    onClick={() => updateBooking({ guests: Math.max(1, (booking.guests || 1) - 1) })}
                    disabled={(booking.guests || 1) <= 1}
                    className="w-8 h-8 rounded-full border border-[#E6E4DF] bg-white flex items-center justify-center text-[#6B665E] hover:border-[#128790] hover:text-[#128790] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {Icons.minus}
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-[20px] font-bold text-[#1E1F1C]">{booking.guests || 1}</span>
                    <span className="text-[10px] text-[#9A948C] ml-1.5">guest{(booking.guests || 1) > 1 ? 's' : ''}</span>
                  </div>
                  <button
                    onClick={() => updateBooking({ guests: Math.min(12, (booking.guests || 1) + 1) })}
                    disabled={(booking.guests || 1) >= 12}
                    className="w-8 h-8 rounded-full border border-[#E6E4DF] bg-white flex items-center justify-center text-[#6B665E] hover:border-[#128790] hover:text-[#128790] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {Icons.plus}
                  </button>
                </div>
              </div>

              {/* Night count indicator */}
              {nights > 0 && (
                <div className="flex items-center gap-2 px-3 py-2 bg-[#128790]/5 border border-[#128790]/10 rounded-xl">
                  <span className="text-[#128790]">{Icons.moon}</span>
                  <span className="text-[11px] font-semibold text-[#128790]">
                    {nights} night{nights > 1 ? 's' : ''} · {booking.guests || 1} guest{(booking.guests || 1) > 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* ─── Step 2: Summary ─── */}
          {step === 2 && (
            <div>
              <div className="bg-[#FBFBF9] rounded-[16px] border border-[#E6E4DF] overflow-hidden">
                {/* Summary rows */}
                <div className="p-4 space-y-3">
                  <SummaryRow icon={Icons.location} label="Destination" value={booking.destination} />
                  <SummaryRow icon={Icons.calendar} label="Check-in" value={formatDate(booking.checkIn)} />
                  <SummaryRow icon={Icons.calendar} label="Check-out" value={formatDate(booking.checkOut)} />
                  <SummaryRow icon={Icons.users} label="Guests" value={`${booking.guests || 1} guest${(booking.guests || 1) > 1 ? 's' : ''}`} />
                  {hasRoom && <SummaryRow icon={Icons.bed} label="Room" value={booking.roomType} />}
                  {nights > 0 && <SummaryRow icon={Icons.moon} label="Duration" value={`${nights} night${nights > 1 ? 's' : ''}`} />}
                </div>

                {/* Price breakdown — only if room is pre-selected */}
                {hasRoom && nights > 0 && (
                  <div className="border-t border-[#E6E4DF] px-4 py-3">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-[#9A948C]">
                          ₹{unitPrice} × {nights} night{nights > 1 ? 's' : ''}
                          {isDorm ? ` × ${booking.guests || 1} bed${(booking.guests || 1) > 1 ? 's' : ''}` : ''}
                        </p>
                        <p className="text-[22px] font-bold text-[#1E1F1C] leading-tight mt-0.5">
                          ₹{totalPrice.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <span className="text-[8px] font-bold text-[#128790] uppercase tracking-widest bg-[#128790]/5 px-2 py-0.5 rounded">
                        Estimated
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-3 mt-3 justify-center">
                <span className="flex items-center gap-1 text-[9px] text-[#9A948C]">
                  <span className="text-[#128790]">{Icons.shield}</span> Secure Booking
                </span>
                <span className="w-0.5 h-0.5 rounded-full bg-[#E6E4DF]" />
                <span className="text-[9px] text-[#9A948C]">Free Cancellation (48h)</span>
              </div>

              <p className="text-[9px] text-[#9A948C] mt-2 text-center leading-relaxed">
                You&apos;ll be redirected to our secure booking partner to complete your reservation.
              </p>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="px-5 pb-5">
          {step === totalSteps - 1 ? (
            <button
              onClick={handleConfirm}
              className="w-full py-3.5 bg-[#FBB11A] hover:bg-[#e5a218] text-[#1E1F1C] text-[11px] font-bold uppercase tracking-[0.15em] rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(251,177,26,0.3)]"
            >
              Confirm & Book
              {Icons.arrow}
            </button>
          ) : (
            <button
              onClick={goNext}
              disabled={!canProceed()}
              className={`w-full py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] rounded-xl transition-all flex items-center justify-center gap-2 ${
                canProceed()
                  ? 'bg-[#128790] hover:bg-[#0e6e75] text-white shadow-[0_2px_8px_rgba(18,135,144,0.25)]'
                  : 'bg-[#E6E4DF] text-[#9A948C] cursor-not-allowed'
              }`}
            >
              Continue
              {Icons.arrow}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Summary Row Component ── */
function SummaryRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-[11px] text-[#9A948C] font-medium flex items-center gap-2">
        <span className="text-[#128790]">{icon}</span>
        {label}
      </span>
      <span className="text-[12px] font-bold text-[#1E1F1C]">{value}</span>
    </div>
  )
}
