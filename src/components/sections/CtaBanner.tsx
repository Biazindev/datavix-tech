import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CtaBannerProps {
  icon: LucideIcon
  heading: string
  subheading: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel?: string
  secondaryHref?: string
  background: string
}

export function CtaBanner({
  icon: Icon,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  background,
}: CtaBannerProps) {
  return (
    <section className="px-4 py-16" style={{ background }}>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center text-white sm:flex-row sm:text-left">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 sm:flex">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="mt-2 text-sm text-white/70">{subheading}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href={secondaryHref}>{secondaryLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
