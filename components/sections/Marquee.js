const TEXT = "Bonfire tonight, 8 pm ✦ Sunrise yoga daily ✦ Tiger Hill trip Wednesday ✦ Open mic Friday ✦ Chef Auntie's cooking class Tues & Thurs ✦ Ganga aarti walk every evening ✦ Homestay dinners at eight ✦"

export default function Marquee() {
  return (
    <div className="bg-gold text-ink overflow-hidden py-3" aria-hidden="true">
      <div className="flex w-max animate-marquee font-display font-bold text-[18px] tracking-[0.06em] uppercase whitespace-nowrap">
        <span className="px-6">{TEXT}</span><span className="px-6">{TEXT}</span>
      </div>
    </div>
  )
}
