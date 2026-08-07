import {
  ArrowRight,
  BarChart3,
  Bike,
  Building2,
  CheckCircle2,
  Cloud,
  ClipboardList,
  FileText,
  HardDrive,
  Lock,
  Package,
  PlayCircle,
  ReceiptText,
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
  { icon: Store, label: 'Módulos por segmento' },
  { icon: HardDrive, label: 'Cloud ou servidor local' },
  { icon: Building2, label: 'Multi-filial nativo' },
]

const SEGMENTS = [
  { icon: Package, label: 'Padaria' },
  { icon: Store, label: 'Mercado' },
  { icon: Warehouse, label: 'Depósito / Atacado' },
  { icon: Building2, label: 'Construção' },
  { icon: UtensilsCrossed, label: 'Lanchonete' },
  { icon: ReceiptText, label: 'Restaurante / Pizzaria' },
]

const DIFFERENTIALS = [
  {
    icon: Store,
    title: 'Modular de verdade',
    description: 'Cada empresa ativa só os módulos que fazem sentido para o ramo dela.',
  },
  {
    icon: Server,
    title: 'Nuvem ou instalação local',
    description: 'Ideal para negócios que precisam operar sem depender totalmente da internet.',
  },
  {
    icon: Building2,
    title: 'Multi-filial nativo',
    description: 'Cada filial tem seu estoque e operação, sem perder a visão central da empresa.',
  },
  {
    icon: ReceiptText,
    title: 'Visual de operação',
    description: 'Interface inspirada em recibo e livro-caixa, com números alinhados e legíveis.',
  },
]

export function BerionComerciosPage() {
  return (
    <div>
      <section className="bg-[#102f24] px-4 py-20 text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="pill-badge bg-white/5" style={{ borderColor: `${hex[400]}66`, color: hex[400] }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: hex[400] }} />
              {berionComercios.tag}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Berion Comércios
            </h1>
            <p className="mt-4 text-lg text-paper/80">
              ERP modular para comércio e prestação de serviço
            </p>
            <p className="mt-3 max-w-xl text-sm text-paper/50">{berionComercios.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={cta} target="_blank" rel="noopener noreferrer">
                  Quero ver o Berion
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
            sidebarItems={['Painel', 'Ponto de venda', 'Orçamentos', 'Estoque', 'Financeiro']}
            sidebarIcons={[Store, ShoppingCart, ClipboardList, Warehouse, Wallet]}
            tiles={[
              { label: 'Produtos cadastrados', value: '1' },
              { label: 'Módulos ativos', value: '6' },
              { label: 'Implantação', value: 'Local' },
            ]}
            quickActions={[
              { label: 'Abrir PDV', icon: ShoppingCart },
              { label: 'Orçamentos', icon: ClipboardList },
              { label: 'Produtos', icon: Package },
              { label: 'Financeiro', icon: Wallet },
              { label: 'Clientes', icon: Users },
              { label: 'Integrações', icon: Cloud },
            ]}
            barItems={berionComercios.features.slice(0, 4).map((f) => f.title)}
            imageSrc="/mockups/berion-comercios-dashboard.png"
          />
        </div>
      </section>

      <section className="bg-[#f4f1ec] px-4 py-16 text-[#05130e]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="pill-badge border-[#1f6f50]/25 text-[#1f6f50]">Segmentos</span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Um ERP que muda conforme o ramo do cliente</h2>
            </div>
            <p className="text-sm leading-6 text-[#3f5149]">
              Uma padaria não precisa carregar Ordem de Serviço. Uma construtora não precisa carregar Mesas/Comanda.
              O Berion ativa os módulos certos para cada tipo de operação.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {SEGMENTS.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-lg border border-[#1f6f50]/15 bg-white p-4 shadow-sm">
                <Icon className="size-5 text-[#1f6f50]" />
                <p className="mt-3 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Módulos ativos"
        heading="Venda, estoque, financeiro e operação no mesmo sistema"
        subheading="A base do Berion já cobre o dia a dia comercial e de serviço: balcão, clientes, filiais, comandas, delivery, orçamento, documentos fiscais e financeiro."
        accentText={hex[600]}
        features={berionComercios.features}
        icons={[ShoppingCart, Store, Warehouse, HardDrive, ClipboardList, Users]}
        iconBg={`${hex[500]}1A`}
        iconColor={hex[600]}
        withGrid={false}
      />

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-4">
          {DIFFERENTIALS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <Icon className="size-5" style={{ color: hex[600] }} />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustSection
        heading="Operação completa, com fiscal, financeiro e controle por filial."
        accentText={hex[400]}
        dark
        points={[
          'Implantação em nuvem ou on-premise/local',
          'Controle por filial, usuário e perfil de acesso',
          'Documentos fiscais integrados à operação',
          'Suporte humano para implantação e evolução',
        ]}
        badges={[
          { icon: CheckCircle2, label: 'PDV, estoque e financeiro estruturados' },
          { icon: BarChart3, label: 'Mercado Livre, Shopee e Amazon' },
          { icon: FileText, label: 'Documentos fiscais no sistema' },
          { icon: Lock, label: 'Perfis de acesso por usuário' },
        ]}
      />

      <CtaBanner
        icon={ShoppingCart}
        heading="Quer validar o Berion para um segmento específico?"
        subheading="A gente monta a conversa em cima do ramo do cliente: padaria, mercado, depósito, construção, restaurante, pizzaria ou serviço."
        ctaLabel={berionComercios.ctaLabel}
        ctaHref={cta}
        secondaryLabel="Ver módulos"
        secondaryHref="#funcionalidades"
        background={`linear-gradient(135deg, ${hex[900]}, ${hex[700]})`}
      />
    </div>
  )
}
