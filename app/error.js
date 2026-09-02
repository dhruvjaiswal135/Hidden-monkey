'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center px-6">
        <p className="kicker justify-center">Something broke</p>
        <h1 className="display text-[clamp(40px,6vw,72px)] leading-[.92] mb-4">
          That wasn&apos;t<br /><span className="text-teal">supposed to happen.</span>
        </h1>
        <p className="text-ink-3 text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
          Something unexpected went wrong on our side. Try again — if it keeps happening, WhatsApp us and we&apos;ll sort it out.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={reset} className="btn-gold min-h-[44px] px-6 text-[16px]">Try again</button>
          <a href="/" className="btn-ghost min-h-[44px] px-6 text-[16px]">Back to home</a>
        </div>
      </div>
    </div>
  )
}
