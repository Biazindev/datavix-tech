import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { accentHex } from '@/content/theme'

export function Produtos() {
  return (
    <div>
      <section className="surface-grid py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="pill-badge border-primary/30 bg-white/70 text-primary">Cat�logo</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Nossos produtos</h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Quatro plataformas, um s� objetivo: simplificar a gest�o de quem confia na DataVix
              Tech para cuidar de pessoas, finan�as e opera��o.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {products.map((product) => {
              const hex = accentHex[product.accentColor]
              return (
                <article
                  key={product.slug}
                  className="relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: hex[600] }} />
                  <span
                    className="pill-badge text-[10px]"
                    style={{ borderColor: `${hex[600]}55`, color: hex[700] }}
                  >
                    {product.tag}
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold">{product.name}</h2>
                  <p className="mt-2 text-sm font-medium" style={{ color: hex[700] }}>
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.description}</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature.title} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0" style={{ color: hex[600] }} />
                        <span>{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6">
                    <Link to={`/${product.slug}`}>
                      {product.ctaLabel}
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
