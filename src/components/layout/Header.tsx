import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brass text-sm font-bold text-ink">
            D
          </span>
          DataVix Tech
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-paper hover:bg-white/10 hover:text-paper">
                Produtos
                <ChevronDown className="h-3.5 w-3.5" />
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
          <Link to="/sobre" className="text-sm font-medium text-paper/60 hover:text-paper">
            Sobre
          </Link>
          <Link to="/blog" className="text-sm font-medium text-paper/60 hover:text-paper">
            Blog
          </Link>
          <Link to="/contato" className="text-sm font-medium text-paper/60 hover:text-paper">
            Contato
          </Link>
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <a
            href={whatsappLink('Olá! Quero saber mais sobre os produtos da DataVix Tech.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com o time
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
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <span className="text-sm font-semibold text-paper/40">Produtos</span>
          <div className="flex flex-col gap-3 pl-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/${product.slug}`}
                className="text-sm font-medium text-paper/70 hover:text-paper"
                onClick={() => setMobileOpen(false)}
              >
                {product.name}
              </Link>
            ))}
          </div>
          <Link
            to="/sobre"
            className="text-sm font-medium text-paper/70 hover:text-paper"
            onClick={() => setMobileOpen(false)}
          >
            Sobre
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-paper/70 hover:text-paper"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contato"
            className="text-sm font-medium text-paper/70 hover:text-paper"
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
              Falar com o time
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}
