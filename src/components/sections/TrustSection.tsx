import { CheckCircle2, type LucideIcon } from 'lucide-react'

const TRUST_POINTS = [
  'Plataforma 100% em nuvem, segura e escalável',
  'Compromisso com a LGPD e boas práticas de segurança',
  'Suporte humano especializado',
  'Atualizações constantes e melhorias contínuas',
]

const TRUST_BADGES: { icon: LucideIcon; label: string }[] = []

interface TrustSectionProps {
  heading: string
  accentText: string
  badges: { icon: LucideIcon; label: string }[]
  dark?: boolean
}

export function TrustSection({ heading, accentText, badges = TRUST_BADGES, dark = false }: TrustSectionProps) {
  return (
    <section className={dark ? 'bg-ink px-4 py-16 text-paper' : 'border-y border-border bg-muted/30 px-4 py-16'}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <span className="pill-badge" style={{ borderColor: `${accentText}55`, color: accentText }}>
            Segurança e confiança
          </span>
          <h2 className="mt-4 text-2xl font-bold">{heading}</h2>
          <ul className="mt-6 space-y-3">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accentText }} />
                <span className={dark ? 'text-paper/60' : 'text-muted-foreground'}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className={
                dark
                  ? 'flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium'
                  : 'flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm'
              }
            >
              <Icon className="h-4 w-4 shrink-0" style={{ color: accentText }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
