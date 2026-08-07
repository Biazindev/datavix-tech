import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/whatsapp'

const CONTACT_ITEMS = [
  { icon: Phone, label: 'Telefones', value: '(44) 99117-9564 / (17) 98135-2391' },
  { icon: Mail, label: 'E-mail', value: 'contato@datavixtech.com' },
  { icon: MapPin, label: 'Endere�o', value: 'Av. Napole�o Moreira da Silva, 430 - Centro, Terra Boa - PR' },
]

export function Contato() {
  return (
    <div>
      <section className="surface-grid py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="pill-badge border-primary/30 bg-white/70 text-primary">Contato</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Fale com a gente</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              A forma mais r�pida de falar com o time da DataVix Tech � pelo WhatsApp. Conte o seu
              cen�rio e a gente te ajuda a escolher o produto ideal.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href={whatsappLink('Ol�! Quero falar com o time da DataVix Tech.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle data-icon="inline-start" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 rounded-lg bg-background p-4">
                  <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
