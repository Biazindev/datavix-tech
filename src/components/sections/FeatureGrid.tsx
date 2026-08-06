import type { LucideIcon } from 'lucide-react'

interface FeatureGridProps {
  eyebrow: string
  heading: string
  subheading?: string
  accentText: string
  features: { title: string; description: string }[]
  icons: LucideIcon[]
  iconBg: string
  iconColor: string
}

export function FeatureGrid({
  eyebrow,
  heading,
  subheading,
  accentText,
  features,
  icons,
  iconBg,
  iconColor,
}: FeatureGridProps) {
  return (
    <section id="funcionalidades" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="pill-badge" style={{ borderColor: `${accentText}55`, color: accentText }}>
              {eyebrow}
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{heading}</h2>
          </div>
          {subheading && <p className="text-sm text-muted-foreground">{subheading}</p>}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: iconBg, color: iconColor }}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
