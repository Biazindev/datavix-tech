import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function Home() {
  return (
    <div>
      <section className="px-4 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">DataVix Tech</p>
        <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Tecnologia que organiza a gestão de igrejas e comércios
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Desenvolvemos plataformas completas para quem precisa de gestão financeira, de membros e
          de vendas com transparência e automação.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/produtos">Conhecer os produtos</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href={whatsappLink('Olá! Quero saber mais sobre a DataVix Tech.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com o time
            </a>
          </Button>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">Nossos produtos</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/${product.slug}`}
                className="rounded-lg border border-border p-6 transition hover:border-primary"
              >
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
