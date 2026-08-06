import {
  ArrowRight,
  BarChart3,
  Bike,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileBarChart,
  Lock,
  Package,
  PlayCircle,
  Server,
  ShoppingCart,
  Store,
  UtensilsCrossed,
  Wallet,
  Warehouse,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DashboardMockup } from '@/components/mockups/DashboardMockup'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { TrustSection } from '@/components/sections/TrustSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { berionComercios } from '@/content/products'
import { accentHex } from '@/content/theme'
import { whatsappLink } from '@/lib/whatsapp'

const hex = accentHex[berionComercios.accentColor]
const cta = whatsappLink(`Olá! Quero saber mais sobre o ${berionComercios.name}.`)

const VALUE_PROPS = [
  { icon: ShoppingCart, label: 'PDV rápido' },
  { icon: Warehouse, label: 'Estoque em tempo real' },
  { icon: Building2, label: 'Multi-filiais' },
]

export function BerionComerciosPage() {
  return (
    <div>
      <section className="ink-glow bg-ink px-4 py-20 text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="pill-badge" style={{ borderColor: `${hex[400]}66`, color: hex[400] }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: hex[400] }} />
              {berionComercios.tag}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Berion <span style={{ color: hex[400] }}>Comércios</span>
            </h1>
            <p className="mt-4 text-lg text-paper/80">{berionComercios.tagline}</p>
            <p className="mt-3 max-w-xl text-sm text-paper/50">{berionComercios.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={cta} target="_blank" rel="noopener noreferrer">
                  {berionComercios.ctaLabel}
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

            <div className="mt-10 flex flex-wrap gap-6">
              {VALUE_PROPS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-paper/60">
                  <Icon className="h-4 w-4" style={{ color: hex[400] }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <DashboardMockup
            title={berionComercios.name}
            accent={hex[400]}
            sidebarItems={['Visão geral', 'PDV e vendas', 'Estoque', 'Financeiro', 'Clientes']}
            sidebarIcons={[Store, ShoppingCart, Warehouse, Wallet, Users]}
            tiles={[
              { label: 'PDV', value: 'Online' },
              { label: 'Estoque', value: 'Sincronizado' },
              { label: 'Filiais', value: 'Centralizado' },
            ]}
            quickActions={[
              { label: 'Abrir PDV', icon: ShoppingCart },
              { label: 'Comanda', icon: UtensilsCrossed },
              { label: 'Delivery', icon: Bike },
              { label: 'Produtos', icon: Package },
              { label: 'Clientes', icon: Users },
              { label: 'Relatórios', icon: FileBarChart },
            ]}
            barItems={berionComercios.features.slice(0, 4).map((f) => f.title)}
          />
        </div>
      </section>

      <FeatureGrid
        eyebrow="Funcionalidades"
        heading="Tudo o que o seu negócio precisa, em uma plataforma completa"
        subheading="Soluções integradas para tornar a gestão do seu negócio mais simples, segura e eficiente."
        accentText={hex[600]}
        features={berionComercios.features}
        icons={[ShoppingCart, UtensilsCrossed, Warehouse, Building2, ClipboardList, Users]}
        iconBg={`${hex[500]}1A`}
        iconColor={hex[600]}
      />

      <TrustSection
        heading="Tecnologia segura. Operação protegida. Resultados que contam."
        accentText={hex[400]}
        dark
        badges={[
          { icon: Lock, label: 'Dados protegidos com criptografia' },
          { icon: CheckCircle2, label: 'Compromisso com a LGPD' },
          { icon: Server, label: 'Backups diários e redundância' },
          { icon: BarChart3, label: 'Relatórios financeiros completos' },
        ]}
      />

      <CtaBanner
        icon={ShoppingCart}
        heading={`Pronto para conhecer o ${berionComercios.name}?`}
        subheading="Agende uma demonstração gratuita e descubra como simplificar a gestão do seu negócio."
        ctaLabel={berionComercios.ctaLabel}
        ctaHref={cta}
        secondaryLabel="Ver funcionalidades"
        secondaryHref="#funcionalidades"
        background={`linear-gradient(135deg, ${hex[900]}, ${hex[700]})`}
      />
    </div>
  )
}
