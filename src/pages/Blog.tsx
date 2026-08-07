import { CalendarClock, FileText, Sparkles } from 'lucide-react'

export function Blog() {
  return (
    <div>
      <section className="surface-grid py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="pill-badge border-primary/30 bg-white/70 text-primary">Blog</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Blog: conte�do em breve</h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Estamos preparando materiais sobre gest�o, tecnologia, seguran�a e opera��o para
              igrejas, departamentos e com�rcios.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: FileText, title: 'Guias pr�ticos', description: 'Passo a passo para organizar processos.' },
              { icon: Sparkles, title: 'Novidades', description: 'Atualiza��es dos produtos DataVix.' },
              { icon: CalendarClock, title: 'Boas pr�ticas', description: 'Rotinas para gest�o mais previs�vel.' },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <Icon className="size-5 text-primary" />
                <h2 className="mt-4 font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
