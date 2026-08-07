import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Layers,
  LineChart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { accentHex } from '@/content/theme'
import { whatsappLink } from '@/lib/whatsapp'

const HOME_STATS = [
  { icon: Building2, label: 'Igrejas e comércios atendidos', value: '500+' },
  { icon: Wallet, label: 'Em repasses processados', value: 'R$ 2M+' },
  { icon: Layers, label: 'Plataformas em operação', value: '4' },
]

const OUTCOMES = [
  'Gestão financeira centralizada',
  'Jornadas digitais para membros e clientes',
  'Relatórios prontos para decisão',
]

const PROCESS_STEPS = [
  {
    title: 'Mapeamos o fluxo',
    description: 'Entendemos operação, papéis, repasses e rotinas antes de sugerir produto.',
  },
  {
    title: 'Implantamos com clareza',
    description: 'Organizamos acessos, dados iniciais e treinamento para a equipe começar bem.',
  },
  {
    title: 'Evoluímos junto',
    description: 'Acompanhamos uso real, suporte e melhorias para manter a plataforma útil.',
  },
]

export function Home() {
  return (
    <div>
      <section className="ink-glow overflow-hidden bg-ink py-20 text-paper lg:py-24">
        <div className="section-shell grid min-w-0 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <span className="pill-badge border-teal-300/35 bg-white/5 text-teal-100">
              DataVix Tech
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Tecnologia que organiza gestão, finanças e comunidade
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-paper/72 sm:text-lg">
              Plataformas completas para igrejas, departamentos e comércios que precisam operar
              com transparência, automação e uma experiência simples para quem usa todos os dias.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/produtos">
                  Conhecer os produtos
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-paper/20 bg-transparent text-paper hover:bg-paper/10 hover:text-paper sm:w-auto"
              >
                <a
                  href={whatsappLink('Olá! Quero saber mais sobre a DataVix Tech.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle data-icon="inline-start" />
                  Falar com o time
                </a>
              </Button>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {OUTCOMES.map((outcome) => (
                <span key={outcome} className="inline-flex items-center gap-2 text-sm text-paper/68">
                  <CheckCircle2 className="size-4 text-teal-200" />
                  {outcome}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/25">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase text-paper/40">Central DataVix</p>
                  <p className="mt-1 font-display text-lg font-semibold">Operação em tempo real</p>
                </div>
                <span className="rounded-full bg-teal-300/15 px-3 py-1 text-xs font-semibold text-teal-100">
                  Online
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {HOME_STATS.map((stat) => (
                  <div key={stat.label} className="min-w-0 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                    <stat.icon className="size-5 text-brass-light" />
                    <p className="ledger-figure mt-4 text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-xs leading-4 text-paper/50">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase text-paper/40">Produtos conectados</p>
                  <LineChart className="size-4 text-teal-200" />
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {products.map((product, index) => {
                    const hex = accentHex[product.accentColor]
                    return (
                      <div
                        key={product.slug}
                        className="group flex items-center gap-3 rounded-md px-2 py-2 transition hover:bg-white/5"
                      >
                        <span className="size-2 rounded-full" style={{ backgroundColor: hex[500] }} />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium">{product.name}</span>
                          <span className="block truncate text-xs text-paper/45">{product.tagline}</span>
                        </span>
                        <span className="ledger-figure text-xs text-paper/42">{index + 1}/4</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-grid py-20">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="pill-badge border-primary/30 bg-white/70 text-primary">Catálogo</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Produtos para cada rotina</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground lg:justify-self-end">
              Cada solução tem uma identidade própria, mas todas seguem a mesma base: operação
              clara, segurança, suporte próximo e telas feitas para uso recorrente.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {products.map((product) => {
              const hex = accentHex[product.accentColor]
              return (
                <Link
                  key={product.slug}
                  to={`/${product.slug}`}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
                >
                  <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: hex[600] }} />
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="pill-badge text-[10px]"
                      style={{ borderColor: `${hex[600]}55`, color: hex[700] }}
                    >
                      {product.tag}
                    </span>
                    <ArrowRight className="size-5 text-muted-foreground transition group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm font-medium" style={{ color: hex[700] }}>
                    {product.tagline}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="pill-badge border-brass/35 bg-brass/10 text-brass-dark">Implantação</span>
            <h2 className="mt-4 text-3xl font-bold">Do diagnóstico ao uso diário</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              A experiência não termina na venda. O site agora deixa mais claro como a DataVix
              ajuda a escolher, implantar e evoluir cada solução.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-border bg-background p-5 shadow-sm">
                <span className="ledger-figure text-sm font-semibold text-primary">0{index + 1}</span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <span className="pill-badge border-teal-300/35 bg-white/5 text-teal-100">
              Próximo passo
            </span>
            <h2 className="mt-4 text-3xl font-bold">Vamos encontrar a plataforma certa?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/62">
              Conte o cenário da sua igreja, comércio ou departamento e o time indica o melhor
              caminho para começar.
            </p>
          </div>
          <Button asChild size="lg">
            <a
              href={whatsappLink('Olá! Quero entender qual produto DataVix combina com meu cenário.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles data-icon="inline-start" />
              Conversar agora
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
