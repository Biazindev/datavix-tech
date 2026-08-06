import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  KeyRound,
  Layers,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ProductContent } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

const FEATURE_ICONS = [
  Wallet,
  ShieldCheck,
  BarChart3,
  Users,
  KeyRound,
  CreditCard,
  Smartphone,
  CalendarClock,
  Layers,
  MessageCircle,
  Zap,
  CheckCircle2,
]

export function ProductPage({ product }: { product: ProductContent }) {
  const cta = whatsappLink(`Olá! Quero saber mais sobre o ${product.name}.`)

  return (
    <div>
      <section className={`bg-${product.accentColor}-50 px-4 py-20`}>
        <div className="mx-auto max-w-4xl text-center">
          <span className={`stamp border-${product.accentColor}-600 text-${product.accentColor}-700`}>
            {product.tag}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className={`mt-2 text-xl font-medium text-${product.accentColor}-700`}>{product.tagline}</p>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{product.description}</p>
          <Button asChild size="lg" className="mt-8">
            <a href={cta} target="_blank" rel="noopener noreferrer">
              {product.ctaLabel}
            </a>
          </Button>
        </div>
      </section>

      {product.stats && (
        <section className="border-y border-border bg-ink px-4 py-10 text-paper">
          <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-white/10 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {product.stats.map((stat) => (
              <div key={stat.label} className="px-4 py-4 sm:py-0">
                <p className="ledger-figure text-3xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-paper/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">Funcionalidades</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length]
              return (
                <div
                  key={feature.title}
                  className={`group rounded-lg border border-border p-6 transition hover:-translate-y-0.5 hover:border-${product.accentColor}-300 hover:shadow-md`}
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-md bg-${product.accentColor}-50 text-${product.accentColor}-700 transition group-hover:bg-${product.accentColor}-100`}
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

      <section className={`bg-${product.accentColor}-700 px-4 py-16 text-center text-white`}>
        <h2 className="text-2xl font-bold">Pronto para conhecer o {product.name}?</h2>
        <Button asChild size="lg" variant="secondary" className="mt-6">
          <a href={cta} target="_blank" rel="noopener noreferrer">
            {product.ctaLabel}
          </a>
        </Button>
      </section>
    </div>
  )
}
