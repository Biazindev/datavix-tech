import { ArrowRight, Building2, Layers, Wallet } from 'lucide-react'
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

export function Home() {
  return (
    <div>
      <section className="ink-glow bg-ink px-4 py-24 text-center text-paper">
        <span className="pill-badge border-brass/40 text-brass-light">DataVix Tech</span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Tecnologia que organiza a gestão de <span className="text-brass-light">igrejas</span> e{' '}
          <span className="text-brass-light">comércios</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-paper/70">
          Desenvolvemos plataformas completas para quem precisa de gestão financeira, de membros e
          de vendas com transparência e automação.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/produtos">
              Conhecer os produtos
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-paper/20 bg-transparent text-paper hover:bg-paper/10 hover:text-paper"
          >
            <a
              href={whatsappLink('Olá! Quero saber mais sobre a DataVix Tech.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com o time
            </a>
          </Button>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-wrap justify-center gap-x-10 gap-y-6">
          {HOME_STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-brass-light">
                <stat.icon className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="ledger-figure text-lg font-semibold leading-none">{stat.value}</p>
                <p className="mt-1 text-xs text-paper/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <span className="pill-badge border-primary/30 text-primary">Catálogo</span>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Nossos produtos</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Quatro plataformas, uma identidade própria para cada uma.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => {
              const hex = accentHex[product.accentColor]
              return (
                <Link
                  key={product.slug}
                  to={`/${product.slug}`}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: hex[600] }}
                  />
                  <span className="pill-badge text-[10px]" style={{ borderColor: `${hex[600]}55`, color: hex[700] }}>
                    {product.tag}
                  </span>
                  <h3 className="mt-4 font-semibold">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: hex[700] }}>
                    Conhecer
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
