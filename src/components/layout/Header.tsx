import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

//teste

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  const navLinkClass = (href: string) =>
    `text-sm font-medium transition ${
      pathname === href ? 'text-paper' : 'text-paper/65 hover:text-paper'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-paper shadow-lg shadow-ink/10 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-3">
        <Link to="/" className="flex items-center font-display text-lg font-semibold tracking-tight">
          <img
            src="/brand/datavix-logo-header.png"
            alt="DataVix"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-paper/80 hover:bg-white/10 hover:text-paper">
                Produtos
                <ChevronDown data-icon="inline-end" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {products.map((product) => (
                <DropdownMenuItem key={product.slug} asChild>
                  <Link to={`/${product.slug}`}>{product.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/sobre" className={navLinkClass('/sobre')}>
            Sobre
          </Link>
          <Link to="/blog" className={navLinkClass('/blog')}>
            Blog
          </Link>
          <Link to="/contato" className={navLinkClass('/contato')}>
            Contato
          </Link>
        </nav>

        <Button asChild className="hidden md:inline-flex">
          <a
            href={whatsappLink('Olá! Quero saber mais sobre os produtos da DataVix Tech.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle data-icon="inline-start" />
            Falar com o time
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-paper hover:bg-white/10 hover:text-paper md:hidden"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            <span className="text-xs font-semibold uppercase text-paper/45">Produtos</span>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={`/${product.slug}`}
                  className="rounded-md border border-white/10 px-3 py-2 text-sm font-medium text-paper/75 hover:bg-white/10 hover:text-paper"
                  onClick={() => setMobileOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <Link
              to="/sobre"
              className="text-sm font-medium text-paper/75 hover:text-paper"
              onClick={() => setMobileOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-paper/75 hover:text-paper"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contato"
              className="text-sm font-medium text-paper/75 hover:text-paper"
              onClick={() => setMobileOpen(false)}
            >
              Contato
            </Link>
            <Button asChild className="w-full">
              <a
                href={whatsappLink('Olá! Quero saber mais sobre os produtos da DataVix Tech.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                <MessageCircle data-icon="inline-start" />
                Falar com o time
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
