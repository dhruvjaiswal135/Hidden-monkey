/** Kicker + display heading + optional aside. Used by every homepage section. */
export default function SectionHead({ kicker, title, aside, light = false, className = '' }) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-5 mb-9 ${className}`}>
      <div>
        {kicker && <p className={`kicker ${light ? 'text-gold' : ''}`}>{kicker}</p>}
        <h2 className="h2">{title}</h2>
      </div>
      {aside}
    </div>
  )
}
