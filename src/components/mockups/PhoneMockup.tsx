import type { LucideIcon } from 'lucide-react'

interface PhoneMockupProps {
  accent: string
  title: string
  cardHeading: string
  cardBody: string
  ctaLabel: string
  tabIcons: LucideIcon[]
  imageSrc?: string
  className?: string
}

export function PhoneMockup({
  accent,
  title,
  cardHeading,
  cardBody,
  ctaLabel,
  tabIcons,
  imageSrc,
  className = '',
}: PhoneMockupProps) {
  const alt = `${title}: ${cardHeading}. ${cardBody}`

  if (imageSrc) {
    return (
      <div
        className={`relative aspect-[591/1280] w-[min(43vw,15rem)] shrink-0 overflow-hidden rounded-[1.5rem] border-2 bg-[#080d1f] p-1 shadow-2xl shadow-black/30 sm:w-56 lg:w-64 ${className}`}
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <span className="absolute -left-0.5 top-24 h-14 w-0.5 rounded-l-full bg-white/10" />
        <span className="absolute -right-0.5 top-32 h-20 w-0.5 rounded-r-full bg-white/10" />
        <img
          src={imageSrc}
          alt={alt}
          className="size-full rounded-[1.25rem] object-contain"
        />
      </div>
    )
  }

  return (
    <div
      className={`w-64 shrink-0 rounded-[1.75rem] border-4 p-2 shadow-2xl shadow-black/25 sm:w-72 ${className}`}
      style={{ backgroundColor: '#0E1226', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="rounded-[1.2rem] p-2" style={{ backgroundColor: '#171B33' }}>
        <div className="mx-auto mb-2 h-4 w-20 rounded-full" style={{ backgroundColor: '#0E1226' }} />
        <div className="overflow-hidden rounded-lg border border-white/10 bg-ink">
            <div className="aspect-[9/16] p-3" style={{ backgroundColor: `${accent}1F` }}>
              <p className="text-xs font-semibold text-paper/80">{title}</p>
              <div className="mt-3 rounded-lg border border-white/10 p-3">
                <p className="text-[11px] font-semibold" style={{ color: accent }}>
                  {cardHeading}
                </p>
                <p className="mt-1.5 text-[10px] leading-relaxed text-paper/60">{cardBody}</p>
                <span
                  className="mt-2 inline-block rounded-full px-2.5 py-1 text-[9px] font-semibold text-ink"
                  style={{ backgroundColor: accent }}
                >
                  {ctaLabel}
                </span>
              </div>
            </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 px-3 py-2.5">
          {tabIcons.map((Icon, index) => (
            <Icon
              key={index}
              className="size-4"
              style={{ color: index === 0 ? accent : 'rgba(250,248,243,0.35)' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
