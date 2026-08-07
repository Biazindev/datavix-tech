import {
  Bell,
  BookOpen,
  Calendar,
  CircleDot,
  Cloud,
  CreditCard,
  Home,
  MessageCircle,
  Radio,
  Smartphone,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { appMembros } from '@/content/products'
import { accentHex } from '@/content/theme'
import { whatsappLink } from '@/lib/whatsapp'

const hex = accentHex[appMembros.accentColor]
const cta = whatsappLink(`Olá! Quero saber mais sobre o ${appMembros.name}.`)

const VALUE_PROPS = [
  { icon: Smartphone, label: 'App Android nativo' },
  { icon: Users, label: 'Suporte a múltiplas igrejas' },
  { icon: Cloud, label: 'Tudo sincronizado na nuvem' },
]

export function AppMembrosPage() {
  return (
    <div>
      <section
        className="overflow-x-hidden px-4 py-20"
        style={{ background: `linear-gradient(135deg, ${hex[400]}14, transparent 60%)` }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="pill-badge" style={{ borderColor: `${hex[600]}55`, color: hex[700] }}>
              {appMembros.tag}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{appMembros.name}</h1>
            <p className="mt-3 text-lg font-medium" style={{ color: hex[700] }}>
              {appMembros.tagline}
            </p>
            <p className="mt-4 max-w-md text-muted-foreground">{appMembros.description}</p>

            <div className="mt-2 flex items-center gap-2 pt-6">
              <span className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-white">
                <Smartphone className="h-5 w-5" />
                <span className="text-left leading-tight">
                  <span className="block text-[9px] uppercase tracking-wide text-paper/50">Disponível no</span>
                  <span className="block text-sm font-semibold">Google Play</span>
                </span>
              </span>
            </div>

            <Button asChild size="lg" className="mt-6">
              <a href={cta} target="_blank" rel="noopener noreferrer">
                {appMembros.ctaLabel}
              </a>
            </Button>

            <div className="mt-10 flex flex-wrap gap-6">
              {VALUE_PROPS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <Icon className="h-4 w-4" style={{ color: hex[600] }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-start justify-center py-6">
            <PhoneMockup
              accent={hex[400]}
              title="Feed da comunidade"
              cardHeading="Próximo evento"
              cardBody="Culto de celebração — domingo, às 18h30, no templo sede."
              ctaLabel="Ver detalhes"
              tabIcons={[Home, Calendar, BookOpen, Bell]}
              imageSrc="/mockups/app-membros-feed.jpg"
              className="-mr-8"
            />
            <PhoneMockup
              accent={hex[400]}
              title="Lives e transmissões"
              cardHeading="Ao vivo agora"
              cardBody="Acompanhe a transmissão da sua igreja direto do app, sem sair do WiFi de casa."
              ctaLabel="Assistir"
              tabIcons={[Radio, Users, MessageCircle, CreditCard]}
              imageSrc="/mockups/app-membros-live.jpg"
              className="mt-8"
            />
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Funcionalidades"
        heading="O que vem incluído"
        accentText={hex[700]}
        features={appMembros.features}
        icons={[MessageCircle, Calendar, BookOpen, Users, Radio, CreditCard]}
        iconBg={`${hex[500]}1F`}
        iconColor={hex[700]}
      />

      <CtaBanner
        icon={CircleDot}
        heading={`Pronto para conhecer o ${appMembros.name}?`}
        subheading="Baixe agora e tenha sua igreja sempre com você."
        ctaLabel={appMembros.ctaLabel}
        ctaHref={cta}
        background={`linear-gradient(135deg, ${hex[700]}, ${hex[900]})`}
      />
    </div>
  )
}
