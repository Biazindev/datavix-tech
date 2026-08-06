import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { accentHex } from '@/content/theme'

export function Produtos() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <span className="pill-badge border-primary/30 text-primary">Catálogo</span>
        <h1 className="mt-4 text-3xl font-bold">Nossos produtos</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Quatro plataformas, um só objetivo: simplificar a gestão de quem confia na DataVix Tech.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {products.map((product) => {
            const hex = accentHex[product.accentColor]
            return (
              <div
                key={product.slug}
                className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: hex[600] }} />
                <span className="pill-badge text-[10px]" style={{ borderColor: `${hex[600]}55`, color: hex[700] }}>
                  {product.tag}
                </span>
                <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{product.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>
                <Button asChild className="mt-6">
                  <Link to={`/${product.slug}`}>{product.ctaLabel}</Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
