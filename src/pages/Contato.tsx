import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/whatsapp'

export function Contato() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-bold">Fale com a gente</h1>
        <p className="mt-4 text-muted-foreground">
          A forma mais rápida de falar com o time da DataVix Tech é pelo WhatsApp.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a
            href={whatsappLink('Olá! Quero falar com o time da DataVix Tech.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </Button>
        <div className="mt-12 space-y-1 text-sm text-muted-foreground">
          <p>(44) 99117-9564</p>
          <p>(17) 98135-2391</p>
          <p>help@biazinsistemas.com</p>
          <p>Av. Napoleão Moreira da Silva, 430 — Centro, Terra Boa - PR, CEP 87240-000</p>
        </div>
      </div>
    </div>
  )
}
