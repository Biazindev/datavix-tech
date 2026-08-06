import { Link } from 'react-router-dom'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">DataVix Tech</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Plataformas de gestão para igrejas e comércios, com tecnologia de ponta.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Produtos</p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Empresa</p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Contato</p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={whatsappLink('Olá! Quero saber mais sobre a DataVix Tech.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                (44) 99117-9564
              </a>
            </li>
            <li>(17) 98135-2391</li>
            <li>help@biazinsistemas.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DataVix Tech. Todos os direitos reservados.
      </div>
    </footer>
  )
}
