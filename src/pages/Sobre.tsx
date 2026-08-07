import { CheckCircle2, Church, Code2, Headphones, ShieldCheck, Sparkles } from 'lucide-react'

const VALUES = [
  { icon: ShieldCheck, title: 'Transparência', description: 'Dados, repasses e relatórios claros para cada perfil.' },
  { icon: Sparkles, title: 'Automação útil', description: 'Menos tarefas manuais sem complicar a rotina da equipe.' },
  { icon: Headphones, title: 'Suporte próximo', description: 'Acompanhamento humano para implantação e evolução.' },
]

const FOUNDERS = [
  {
    name: 'Tiago Biazin',
    role: 'Pastor e Desenvolvedor Full Stack',
    description: 'Une a vivência ministerial com desenvolvimento de software e experiência em instituições financeiras para criar ferramentas que resolvem dores reais da igreja.',
  },
  {
    name: 'Lucas Biazin',
    role: 'Arquiteto de Software e Desenvolvedor Full Stack',
    description: 'Cuida da arquitetura e evolução técnica das plataformas para que elas sejam sólidas, escaláveis e simples de usar.',
  },
]

export function Sobre() {
  return (
    <div>
      <section className="bg-background py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="pill-badge border-primary/30 bg-white/70 text-primary">Quem somos</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              A DataVix Tech nasceu dentro da igreja
            </h1>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm leading-7 text-muted-foreground">
              A DataVix Tech nasceu dentro da igreja, criada por dois irmãos que conhecem de perto a rotina ministerial,
              administrativa e financeira de comunidades que precisam de tecnologia simples, confiável e feita para o dia a dia.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              O Tiago é pastor e Desenvolvedor Full Stack, com experiência em instituições financeiras. O Lucas é arquiteto de software e Desenvolvedor Full Stack.
              Juntos, eles constroem plataformas para igrejas e comércios que precisam organizar gestão, finanças,
              operação e comunidade sem perder proximidade humana.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="grid gap-4 md:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <div key={founder.name} className="rounded-lg border border-border bg-background p-5 shadow-sm">
                <Code2 className="size-5 text-primary" />
                <h2 className="mt-4 text-xl font-semibold">{founder.name}</h2>
                <p className="mt-1 text-sm font-medium text-primary">{founder.role}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{founder.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-lg border border-border bg-background p-5 shadow-sm">
                <Icon className="size-5 text-primary" />
                <h2 className="mt-4 font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Church className="size-5 text-primary" />
              <h2 className="text-2xl font-bold">Como pensamos produto</h2>
            </div>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                'Fluxos simples para quem usa todos os dias',
                'Segurança e privacidade como requisitos de base',
                'Indicadores claros para decisões rápidas',
                'Evolução contínua guiada por uso real',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
