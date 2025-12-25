'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <h1 className="font-sans font-bold text-6xl md:text-8xl text-red-600 mb-4">Error</h1>
        <h2 className="font-sans font-bold text-2xl md:text-3xl mb-4">Something went wrong</h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          We're sorry, but something unexpected happened. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-neutral-200 text-neutral-900 rounded-lg font-medium hover:bg-neutral-300 transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  )
}
