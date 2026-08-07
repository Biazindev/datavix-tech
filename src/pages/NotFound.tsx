import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <div className="px-4 py-20 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-muted-foreground">Página não encontrada.</p>
      <Button asChild className="mt-8">
        <Link to="/">Voltar para a home</Link>
      </Button>
    </div>
  )
}
