import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Church,
  CreditCard,
  FileText,
  KeyRound,
  LayoutDashboard,
  Lock,
  PlayCircle,
  Server,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DashboardMockup } from '@/components/mockups/DashboardMockup'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { TrustSection } from '@/components/sections/TrustSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { berionIgrejas } from '@/content/products'
import { accentHex } from '@/content/theme'
import { whatsappLink } from '@/lib/whatsapp'

const hex = accentHex[berionIgrejas.accentColor]
const cta = whatsappLink(`Olá! Quero saber mais sobre o ${berionIgrejas.name}.`)

export function BerionIgrejasPage() {
  return (
    <div>
      <section className="ink-glow ink-grid bg-ink px-4 py-20 text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="pill-badge" style={{ borderColor: `${hex[400]}66`, color: hex[400] }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: hex[400] }} />
              {berionIgrejas.tag}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Berion <span style={{ color: hex[400] }}>Igrejas</span>
            </h1>
            <p className="mt-4 text-lg text-paper/80">{berionIgrejas.tagline}</p>
            <p className="mt-3 max-w-xl text-sm text-paper/50">{berionIgrejas.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={cta} target="_blank" rel="noopener noreferrer">
                  {berionIgrejas.ctaLabel}
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-paper/20 bg-transparent text-paper hover:bg-paper/10 hover:text-paper"
              >
                <a href="#funcionalidades">
                  <PlayCircle className="mr-1.5 h-4 w-4" />
                  Ver funcionalidades
                </a>
              </Button>
            </div>

            {berionIgrejas.stats && (
              <div className="mt-10 flex flex-wrap gap-8">
                {berionIgrejas.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="ledger-figure text-xl font-semibold">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-paper/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <DashboardMockup
            title={berionIgrejas.name}
            accent={hex[400]}
            sidebarItems={['Visão geral', 'Membros', 'Contribuições', 'Repasses', 'Relatórios']}
            sidebarIcons={[LayoutDashboard, Users, Wallet, BarChart3, FileText]}
            tiles={
              berionIgrejas.stats?.map((s) => ({ label: s.label, value: s.value })) ?? [
                { label: 'Membros', value: 'Ativo' },
                { label: 'Repasses', value: 'Automático' },
                { label: 'Relatórios', value: 'Em dia' },
              ]
            }
            barItems={berionIgrejas.features.slice(0, 4).map((f) => f.title)}
          />
        </div>
      </section>

      <FeatureGrid
        eyebrow="Funcionalidades"
        heading="Tudo o que sua igreja precisa, em uma plataforma completa"
        subheading="Soluções integradas para tornar a gestão da sua igreja mais simples, segura e eficiente."
        accentText={hex[600]}
        features={berionIgrejas.features}
        icons={[Wallet, ShieldCheck, BarChart3, Users, KeyRound, CreditCard]}
        iconBg={`${hex[500]}1A`}
        iconColor={hex[600]}
      />

      <TrustSection
        heading="Tecnologia segura. Missão protegida. Resultados que contam."
        accentText={hex[400]}
        dark
        badges={[
          { icon: Lock, label: 'Dados protegidos com criptografia' },
          { icon: CheckCircle2, label: 'Compromisso com a LGPD' },
          { icon: Server, label: 'Backups diários e redundância' },
          { icon: ShieldCheck, label: 'Isolamento multitenant por igreja' },
        ]}
      />

      <CtaBanner
        icon={Church}
        heading={`Pronto para conhecer o ${berionIgrejas.name}?`}
        subheading="Agende uma demonstração gratuita e descubra como simplificar a gestão da sua igreja."
        ctaLabel={berionIgrejas.ctaLabel}
        ctaHref={cta}
        secondaryLabel="Ver funcionalidades"
        secondaryHref="#funcionalidades"
        background={`linear-gradient(135deg, ${hex[900]}, ${hex[700]})`}
      />
    </div>
  )
}
