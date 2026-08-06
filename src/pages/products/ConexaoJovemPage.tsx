import {
  ArrowRight,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  Church,
  CreditCard,
  Heart,
  Home,
  LogIn,
  Lock,
  MessageCircle,
  PlayCircle,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { TrustSection } from '@/components/sections/TrustSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { conexaoJovem } from '@/content/products'
import { accentHex } from '@/content/theme'
import { whatsappLink } from '@/lib/whatsapp'

const hex = accentHex[conexaoJovem.accentColor]
const cta = whatsappLink(`Olá! Quero saber mais sobre o ${conexaoJovem.name}.`)

const VALUE_PROPS = [
  { icon: Church, label: 'Feito para igrejas' },
  { icon: Sparkles, label: 'Devocional novo todos os dias' },
  { icon: ShieldCheck, label: 'Login seguro com Google' },
]

export function ConexaoJovemPage() {
  return (
    <div>
      <section className="ink-glow ink-grid overflow-x-hidden bg-ink px-4 py-20 text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="pill-badge" style={{ borderColor: `${hex[400]}66`, color: hex[400] }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: hex[400] }} />
              {conexaoJovem.tag}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Conexão <span style={{ color: hex[400] }}>Jovem</span>
            </h1>
            <p className="mt-4 text-lg text-paper/80">{conexaoJovem.tagline}</p>
            <p className="mt-3 max-w-xl text-sm text-paper/50">{conexaoJovem.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={cta} target="_blank" rel="noopener noreferrer">
                  {conexaoJovem.ctaLabel}
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

          <div className="relative flex justify-center py-6">
            <PhoneMockup
              accent={hex[400]}
              title="Devocional do dia"
              cardHeading="Confiança que transforma"
              cardBody="Entrega o teu caminho ao Senhor, confia nele, e Ele fará. Salmos 37:5 — reflexão gerada por IA."
              ctaLabel="Ler devocional"
              tabIcons={[Home, BookOpen, Calendar, Bell]}
              className="-mr-10 rotate-[-6deg]"
            />
            <PhoneMockup
              accent={hex[400]}
              title="Feed da comunidade"
              cardHeading="Encontro de jovens"
              cardBody="Sábado, 19h — participe do próximo encontro e conecte-se com o seu departamento."
              ctaLabel="Ver agenda"
              tabIcons={[MessageCircle, Heart, LogIn, CreditCard]}
              className="mt-10 rotate-[4deg]"
            />
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Funcionalidades"
        heading="Tudo o que sua juventude precisa, em um só lugar"
        subheading="Um espaço digital para o departamento de jovens viver a fé em comunidade."
        accentText={hex[600]}
        features={conexaoJovem.features}
        icons={[BookOpen, Calendar, MessageCircle, LogIn, CreditCard]}
        iconBg={`${hex[500]}1A`}
        iconColor={hex[700]}
      />

      <TrustSection
        heading="Tecnologia segura para a sua comunidade crescer."
        accentText={hex[400]}
        dark
        badges={[
          { icon: Lock, label: 'Dados protegidos com criptografia' },
          { icon: CheckCircle2, label: 'Compromisso com a LGPD' },
          { icon: Server, label: 'Backups diários e redundância' },
          { icon: ShieldCheck, label: 'Login seguro com Google' },
        ]}
      />

      <CtaBanner
        icon={Sparkles}
        heading={`Pronto para transformar a vida da sua juventude?`}
        subheading="Conecte, edifique e inspire. Tudo começa com o Conexão Jovem."
        ctaLabel={conexaoJovem.ctaLabel}
        ctaHref={cta}
        secondaryLabel="Falar com um especialista"
        secondaryHref={cta}
        background={`linear-gradient(135deg, ${hex[900]}, ${hex[700]})`}
      />
    </div>
  )
}
