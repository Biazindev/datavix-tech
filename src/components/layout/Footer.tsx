import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react'
import { products } from '@/content/products'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold">
            <img
              src="/brand/datavix-logo.png"
              alt="DataVix Tech"
              className="h-12 w-auto"
            />
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-paper/62">
            Plataformas de gestão para igrejas e comércios que precisam organizar operação,
            finanças e comunidade sem perder proximidade.
          </p>
          <Button asChild className="mt-6">
            <a
              href={whatsappLink('Olá! Quero saber mais sobre a DataVix Tech.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle data-icon="inline-start" />
              Falar no WhatsApp
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-paper/45">Produtos</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-paper/68">
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
          <p className="text-xs font-semibold uppercase text-paper/45">Empresa</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-paper/68">
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
          <p className="text-xs font-semibold uppercase text-paper/45">Contato</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-paper/68">
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-brass-light" />
              <span>(44) 99117-9564 / (17) 98135-2391</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-brass-light" />
              <span>contato@datavixtech.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass-light" />
              <span>Terra Boa - PR</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-paper/45">
        © {new Date().getFullYear()} DataVix Tech. Todos os direitos reservados.
      </div>
    </footer>
  )
}
