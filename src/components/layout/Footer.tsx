import { Link } from 'react-router-dom'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brass text-sm font-bold text-ink">
              D
            </span>
            DataVix Tech
          </p>
          <p className="mt-3 text-sm text-paper/60">
            Plataformas de gestão para igrejas e comércios, com tecnologia de ponta.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-paper/40">Produtos</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/${product.slug}`} className="hover:text-paper">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-paper/40">Empresa</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li>
              <Link to="/sobre" className="hover:text-paper">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-paper">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-paper">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-paper/40">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li>
              <a
                href={whatsappLink('Olá! Quero saber mais sobre a DataVix Tech.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                (44) 99117-9564
              </a>
            </li>
            <li>(17) 98135-2391</li>
            <li>contato@datavixtech.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-paper/40">
        © {new Date().getFullYear()} DataVix Tech. Todos os direitos reservados.
      </div>
    </footer>
  )
}
