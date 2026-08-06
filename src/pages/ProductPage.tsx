import { Button } from '@/components/ui/button'
import type { ProductContent } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function ProductPage({ product }: { product: ProductContent }) {
  const cta = whatsappLink(`Olá! Quero saber mais sobre o ${product.name}.`)

  return (
    <div>
      <section className={`bg-${product.accentColor}-50 px-4 py-20`}>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className={`mt-2 text-xl font-medium text-${product.accentColor}-600`}>{product.tagline}</p>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{product.description}</p>
          <Button asChild size="lg" className="mt-8">
            <a href={cta} target="_blank" rel="noopener noreferrer">
            {product.ctaLabel}
          </a>
          </Button>
        </div>
      </section>

      {product.stats && (
        <section className="border-y border-border bg-muted/30 px-4 py-10">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-center sm:grid-cols-3">
            {product.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">Funcionalidades</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-border p-6">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
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
