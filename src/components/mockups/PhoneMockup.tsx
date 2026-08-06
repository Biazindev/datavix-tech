import type { LucideIcon } from 'lucide-react'

interface PhoneMockupProps {
  accent: string
  title: string
  cardHeading: string
  cardBody: string
  ctaLabel: string
  tabIcons: LucideIcon[]
  className?: string
}

export function PhoneMockup({
  accent,
  title,
  cardHeading,
  cardBody,
  ctaLabel,
  tabIcons,
  className = '',
}: PhoneMockupProps) {
  return (
    <div
      className={`w-56 shrink-0 rounded-[2rem] border-4 p-2 shadow-2xl ${className}`}
      style={{ backgroundColor: '#0E1226', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="rounded-[1.4rem] px-3 pb-3 pt-2" style={{ backgroundColor: '#171B33' }}>
        <div className="mx-auto mb-2 h-4 w-20 rounded-full" style={{ backgroundColor: '#0E1226' }} />
        <p className="text-xs font-semibold text-paper/80">{title}</p>

        <div className="mt-3 rounded-xl border border-white/10 p-3" style={{ backgroundColor: `${accent}1F` }}>
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

        <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-3 py-2.5">
          {tabIcons.map((Icon, index) => (
            <Icon
              key={index}
              className="h-4 w-4"
              style={{ color: index === 0 ? accent : 'rgba(250,248,243,0.35)' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
