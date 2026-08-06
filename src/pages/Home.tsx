import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

const HOME_STATS = [
  { label: 'Igrejas e comércios atendidos', value: '500+' },
  { label: 'Em repasses processados', value: 'R$ 2M+' },
  { label: 'Plataformas em operação', value: '4' },
]

export function Home() {
  return (
    <div>
      <section className="bg-ink px-4 py-24 text-center text-paper">
        <span className="stamp border-brass text-brass-light">DataVix Tech</span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Tecnologia que organiza a gestão de igrejas e comércios
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-paper/70">
          Desenvolvemos plataformas completas para quem precisa de gestão financeira, de membros e
          de vendas com transparência e automação.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/produtos">Conhecer os produtos</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-paper/30 bg-transparent text-paper hover:bg-paper/10 hover:text-paper"
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

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 divide-y divide-white/10 border-t border-white/10 pt-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-t-0">
          {HOME_STATS.map((stat) => (
            <div key={stat.label} className="px-4 py-4 sm:py-0">
              <p className="ledger-figure text-2xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-paper/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">Nossos produtos</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Quatro plataformas, uma identidade própria para cada uma.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/${product.slug}`}
                className={`group relative overflow-hidden rounded-lg border border-border p-6 transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <span className={`absolute inset-x-0 top-0 h-1 bg-${product.accentColor}-600`} />
                <span className={`stamp border-${product.accentColor}-600 text-${product.accentColor}-700 text-[10px]`}>
                  {product.tag}
                </span>
                <h3 className="mt-4 font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
