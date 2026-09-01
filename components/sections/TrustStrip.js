const ITEMS = ['Free cancellation up to 48 hrs', 'Pay 20% now, the rest at check-in', 'Women-only dorms · keycard floors', '100 Mbps fibre in every house', 'Locally run since 2023']

export default function TrustStrip() {
  return (
    <div className="bg-white border-b border-line pt-16 pb-[18px]">
      <div className="container-site flex flex-wrap justify-between gap-y-2.5 gap-x-6 text-[14px] text-ink-2 font-medium">
        {ITEMS.map((t) => <span key={t} className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-teal" />{t}</span>)}
      </div>
    </div>
  )
}
