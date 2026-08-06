import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  KeyRound,
  Layers,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductMockup } from '@/components/ProductMockup'
import type { ProductContent } from '@/content/products'
import { accentHex } from '@/content/theme'
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

const TRUST_POINTS = [
  'Plataforma 100% em nuvem, segura e escalável',
  'Conformidade com a LGPD e boas práticas de segurança',
  'Suporte humano especializado',
  'Atualizações constantes e melhorias contínuas',
]

export function ProductPage({ product }: { product: ProductContent }) {
  const cta = whatsappLink(`Olá! Quero saber mais sobre o ${product.name}.`)
  const hex = accentHex[product.accentColor]

  const nameWords = product.name.split(' ')
  const nameLead = nameWords.slice(0, -1).join(' ')
  const nameAccent = nameWords[nameWords.length - 1]

  return (
    <div>
      <section className="ink-glow ink-grid bg-ink px-4 py-20 text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              className="pill-badge"
              style={{ borderColor: `${hex[400]}66`, color: hex[400] }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: hex[400] }} />
              {product.tag}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {nameLead ? `${nameLead} ` : ''}
              <span style={{ color: hex[400] }}>{nameAccent}</span>
            </h1>
            <p className="mt-4 text-lg text-paper/80">{product.tagline}</p>
            <p className="mt-3 max-w-xl text-sm text-paper/50">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={cta} target="_blank" rel="noopener noreferrer">
                  {product.ctaLabel}
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-paper/20 bg-transparent text-paper hover:bg-paper/10 hover:text-paper"
              >
                <a href="#funcionalidades">
                  <PlayCircle className="mr-1.5 h-4 w-4" />
                  Ver funcionalidades
                </a>
              </Button>
            </div>

            {product.stats && (
              <div className="mt-10 flex flex-wrap gap-8">
                {product.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="ledger-figure text-xl font-semibold">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-paper/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <ProductMockup product={product} />
        </div>
      </section>

      <section id="funcionalidades" className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="pill-badge border-primary/30 text-primary">Funcionalidades</span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Tudo o que {product.name.split(' ')[0]} precisa, em uma plataforma completa
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Soluções integradas para tornar a gestão mais simples, segura e eficiente.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length]
              return (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${hex[500]}1A`, color: hex[600] }}
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

      <section className="border-y border-border bg-muted/30 px-4 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <span className="pill-badge border-primary/30 text-primary">Por que a DataVix Tech</span>
            <h2 className="mt-4 text-2xl font-bold">
              Tecnologia segura. Gestão protegida. Resultados que contam.
            </h2>
            <ul className="mt-6 space-y-3">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: ShieldCheck, label: 'Dados protegidos com criptografia' },
              { icon: CheckCircle2, label: 'Conformidade com a LGPD' },
              { icon: Layers, label: 'Backups diários e redundância' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16"
        style={{ background: `linear-gradient(135deg, ${hex[900]}, ${hex[700]})` }}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold">Pronto para conhecer o {product.name}?</h2>
            <p className="mt-2 text-sm text-white/70">
              Agende uma demonstração gratuita e descubra como simplificar sua gestão.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <Button asChild size="lg" variant="secondary">
              <a href={cta} target="_blank" rel="noopener noreferrer">
                {product.ctaLabel}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <a href={cta} target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 underline underline-offset-2 hover:text-white">
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
