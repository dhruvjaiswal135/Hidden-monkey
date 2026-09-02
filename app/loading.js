export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-teal border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-ink-3 text-[14px] font-semibold">Loading…</p>
      </div>
    </div>
  )
}
