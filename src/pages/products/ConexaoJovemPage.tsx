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
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { TrustSection } from '@/components/sections/TrustSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { conexaoJovem } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

const hex = {
  50: '#F0FFE8',
  400: '#83FF38',
  500: '#6BFF1F',
  600: '#23D95C',
  700: '#11A94B',
  900: '#03180B',
}
const cta = whatsappLink(`Olá! Quero saber mais sobre o ${conexaoJovem.name}.`)

const VALUE_PROPS = [
  { icon: Church, label: 'Feito para igrejas' },
  { icon: Sparkles, label: 'Devocional novo todos os dias' },
  { icon: ShieldCheck, label: 'Login seguro com Google' },
]

export function ConexaoJovemPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div>
      <section
        className="relative overflow-x-hidden bg-ink px-4 py-20 text-paper"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 18%, rgba(107, 255, 31, 0.22), transparent 30%), linear-gradient(135deg, rgba(0, 0, 0, 0.98), rgba(3, 24, 11, 0.96)), linear-gradient(120deg, rgba(107, 255, 31, 0.07) 1px, transparent 1px), linear-gradient(0deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)',
          backgroundSize: 'auto, auto, 86px 86px, 86px 86px',
        }}
      >
        {!shouldReduceMotion && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-20 h-px w-96 rotate-[-28deg] bg-gradient-to-r from-transparent via-[#6bff1f]/45 to-transparent"
            animate={{ x: ['-12%', '112%'], opacity: [0, 0.8, 0] }}
            transition={{ duration: 7, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
          />
        )}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'show'}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09 } },
            }}
          >
            <motion.span
              className="pill-badge bg-black/30 shadow-lg shadow-[#6bff1f]/15"
              style={{ borderColor: `${hex[400]}66`, color: hex[400] }}
              variants={{
                hidden: { y: 14 },
                show: { y: 0 },
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full shadow-[0_0_14px_rgba(107,255,31,0.9)]" style={{ backgroundColor: hex[400] }} />
              {conexaoJovem.tag}
            </motion.span>
            <motion.h1
              className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl"
              variants={{
                hidden: { y: 18 },
                show: { y: 0 },
              }}
            >
              Conexão <span style={{ color: hex[400] }}>Jovem</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-paper/80"
              variants={{
                hidden: { y: 16 },
                show: { y: 0 },
              }}
            >
              {conexaoJovem.tagline}
            </motion.p>
            <motion.p
              className="mt-3 max-w-xl text-sm text-paper/50"
              variants={{
                hidden: { y: 16 },
                show: { y: 0 },
              }}
            >
              {conexaoJovem.description}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={{
                hidden: { y: 16 },
                show: { y: 0 },
              }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#6bff1f] text-ink shadow-lg shadow-[#6bff1f]/25 hover:bg-[#83ff38]"
              >
                <a href={cta} target="_blank" rel="noopener noreferrer">
                  {conexaoJovem.ctaLabel}
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#6bff1f]/35 bg-black/20 text-paper hover:bg-[#6bff1f]/10 hover:text-paper"
              >
                <a href="#funcionalidades">
                  <PlayCircle className="mr-1.5 h-4 w-4" />
                  Ver funcionalidades
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-6"
              variants={{
                hidden: { y: 16 },
                show: { y: 0 },
              }}
            >
              {VALUE_PROPS.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-2 text-sm text-paper/60"
                  whileHover={shouldReduceMotion ? undefined : { x: 4, color: 'rgba(250,248,243,0.82)' }}
                >
                  <Icon className="h-4 w-4" style={{ color: hex[400] }} />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative flex items-start justify-center py-6">
            <motion.div
              initial={shouldReduceMotion ? false : { y: 28, rotate: -3 }}
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: -2 }}
              whileHover={shouldReduceMotion ? undefined : { y: -12, rotate: -3, scale: 1.015 }}
              transition={{
                y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 0.6 },
              }}
            >
              <PhoneMockup
                accent={hex[400]}
                title="Devocional do dia"
                cardHeading="Confiança que transforma"
                cardBody="Entrega o teu caminho ao Senhor, confia nele, e Ele fará. Salmos 37:5 — reflexão gerada por IA."
                ctaLabel="Ler devocional"
                tabIcons={[Home, BookOpen, Calendar, Bell]}
                imageSrc="/mockups/conexao-jovem-devocional.jpg"
                className="-mr-1"
              />
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? false : { y: 32, rotate: 3 }}
              animate={shouldReduceMotion ? undefined : { y: [0, 7, 0], rotate: 2 }}
              whileHover={shouldReduceMotion ? undefined : { y: -10, rotate: 3, scale: 1.015 }}
              transition={{
                y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 0.6 },
              }}
            >
              <PhoneMockup
                accent={hex[400]}
                title="Feed da comunidade"
                cardHeading="Encontro de jovens"
                cardBody="Sábado, 19h — participe do próximo encontro e conecte-se com o seu departamento."
                ctaLabel="Ver agenda"
                tabIcons={[MessageCircle, Heart, LogIn, CreditCard]}
                imageSrc="/mockups/conexao-jovem-feed.jpg"
                className="ml-4 mt-5"
              />
            </motion.div>
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
        withGrid={false}
        sectionClassName="bg-[#000602] text-paper"
        eyebrowClassName="bg-black/25 shadow-lg shadow-[#6bff1f]/10"
        subheadingClassName="text-paper/55"
        cardClassName="border-[#6bff1f]/15 bg-white/[0.035] text-paper shadow-none hover:border-[#6bff1f]/35 hover:shadow-[#6bff1f]/10"
        descriptionClassName="text-paper/58"
      />

      <TrustSection
        heading="Tecnologia segura para a sua comunidade crescer."
        accentText={hex[400]}
        dark
        sectionClassName="bg-[#000602] text-paper"
        eyebrowClassName="bg-black/25 shadow-lg shadow-[#6bff1f]/10"
        pointClassName="text-paper/58"
        badgeClassName="border-[#6bff1f]/15 bg-white/[0.035] hover:border-[#6bff1f]/30"
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
        background="radial-gradient(circle at 20% 20%, rgba(107, 255, 31, 0.18), transparent 34%), radial-gradient(circle at 82% 60%, rgba(35, 217, 92, 0.16), transparent 28%), linear-gradient(135deg, #000602, #03180b 52%, #020b06)"
        iconClassName="bg-[#6bff1f]/10 text-[#83ff38] shadow-lg shadow-[#6bff1f]/10"
        primaryButtonClassName="bg-[#6bff1f] text-ink shadow-lg shadow-[#6bff1f]/20 hover:bg-[#83ff38]"
        secondaryButtonClassName="border-[#6bff1f]/35 bg-black/10 text-white hover:bg-[#6bff1f]/10 hover:text-white"
      />
    </div>
  )
}
