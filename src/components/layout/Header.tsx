import { Link } from 'react-router-dom'
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
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight">
          DataVix Tech
        </Link>
        <nav className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Produtos</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {products.map((product) => (
                <DropdownMenuItem key={product.slug} asChild>
                  <Link to={`/${product.slug}`}>{product.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Sobre
          </Link>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Blog
          </Link>
          <Link to="/contato" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Contato
          </Link>
        </nav>
        <Button asChild>
          <a href={whatsappLink('Olá! Quero saber mais sobre os produtos da DataVix Tech.')}>
            Falar com o time
          </a>
        </Button>
      </div>
    </header>
  )
}
