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
  Medal,
  MessageCircle,
  PlayCircle,
  Server,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
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

const CHALLENGES = [
  { title: 'Convide um amigo para o culto', type: 'Ação', points: '+200pt', done: false },
  { title: 'Perguntas Bíblicas', type: 'Quiz', points: '+150pt', done: true },
  { title: 'Compartilhe o app com a galera', type: 'Ação', points: '+550pt', done: false },
]

const LIVE_RANKING_ROUNDS = [
  [
    { name: 'Lucas', points: 2840 },
    { name: 'Ana', points: 2825 },
    { name: 'Pedro', points: 2790 },
  ],
  [
    { name: 'Ana', points: 3010 },
    { name: 'Lucas', points: 2960 },
    { name: 'Pedro', points: 2895 },
  ],
  [
    { name: 'Pedro', points: 3190 },
    { name: 'Ana', points: 3125 },
    { name: 'Lucas', points: 3070 },
  ],
  [
    { name: 'Lucas', points: 3380 },
    { name: 'Pedro', points: 3345 },
    { name: 'Ana', points: 3290 },
  ],
]

export function ConexaoJovemPage() {
  const shouldReduceMotion = useReducedMotion()
  const [rankingRound, setRankingRound] = useState(0)

  useEffect(() => {
    if (shouldReduceMotion) return undefined

    const interval = window.setInterval(() => {
      setRankingRound((current) => {
        const next = Math.floor(Math.random() * LIVE_RANKING_ROUNDS.length)
        return next === current ? (current + 1) % LIVE_RANKING_ROUNDS.length : next
      })
    }, 2600)

    return () => window.clearInterval(interval)
  }, [shouldReduceMotion])

  const liveRanking = LIVE_RANKING_ROUNDS[rankingRound]

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

      <section id="desafios" className="overflow-hidden bg-[#000602] px-4 py-20 text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div>
            <span
              className="pill-badge bg-black/25 shadow-lg shadow-[#6bff1f]/10"
              style={{ borderColor: `${hex[400]}55`, color: hex[400] }}
            >
              <Trophy className="h-3.5 w-3.5" />
              Desafios com premiação
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Transforme participação em pontos, ranking e prêmio final.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-paper/62">
              A liderança cria desafios semanais, quizzes bíblicos e ações práticas. Cada jovem soma pontos,
              sobe no ranking e os melhores colocados podem receber uma premiação no encerramento da campanha.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Zap, label: 'Missões semanais' },
                { icon: Medal, label: 'Ranking por pontos' },
                { icon: Trophy, label: 'Prêmio para os melhores' },
              ].map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  className="rounded-md border border-[#6bff1f]/15 bg-white/[0.035] p-4"
                  whileHover={shouldReduceMotion ? undefined : { y: -4, borderColor: 'rgba(107,255,31,0.42)' }}
                >
                  <Icon className="h-5 w-5 text-[#83ff38]" />
                  <p className="mt-3 text-sm font-semibold text-paper">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#6bff1f]/15 blur-3xl"
              animate={shouldReduceMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
              transition={shouldReduceMotion ? undefined : { duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative overflow-hidden rounded-[28px] border border-[#6bff1f]/20 bg-gradient-to-br from-[#061407] via-[#020803] to-black p-5 shadow-2xl shadow-[#6bff1f]/10">
              {!shouldReduceMotion && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#6bff1f]/10 to-transparent"
                  animate={{ y: ['-120%', '720%'], opacity: [0, 0.75, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
                />
              )}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#6bff1f]/15 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#83ff38]">Semana ativa</p>
                  <h3 className="mt-1 text-2xl font-bold">Desafios da Semana</h3>
                </div>
                <motion.span
                  className="rounded-full bg-[#6bff1f] px-3 py-1 text-xs font-bold text-ink"
                  animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1], boxShadow: ['0 0 0 rgba(107,255,31,0)', '0 0 22px rgba(107,255,31,0.38)', '0 0 0 rgba(107,255,31,0)'] }}
                  transition={shouldReduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Ranking ao vivo
                </motion.span>
              </div>

              <div className="mt-5 grid gap-3">
                {CHALLENGES.map((challenge, index) => (
                  <motion.div
                    key={challenge.title}
                    className={`flex items-center gap-4 rounded-2xl border p-4 ${
                      challenge.done
                        ? 'border-[#6bff1f]/45 bg-[#6bff1f]/10'
                        : 'border-[#6bff1f]/14 bg-black/28'
                    }`}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : challenge.done
                          ? {
                              scale: [1, 1.015, 1],
                              boxShadow: ['0 0 0 rgba(107,255,31,0)', '0 0 28px rgba(107,255,31,0.16)', '0 0 0 rgba(107,255,31,0)'],
                            }
                          : { x: [0, 3, 0] }
                    }
                    transition={{ duration: challenge.done ? 2.8 : 4.2, repeat: Infinity, delay: index * 0.35, ease: 'easeInOut' }}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        challenge.done ? 'bg-[#6bff1f] text-ink' : 'bg-[#ff6565]/15 text-[#ff7676]'
                      }`}
                    >
                      {challenge.done ? <CheckCircle2 className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-paper sm:text-base">{challenge.title}</p>
                      <p className="text-xs text-paper/48">
                        {challenge.type} · jovens pontuando agora
                      </p>
                    </div>
                    <motion.strong
                      className="text-sm text-[#ffe36d] sm:text-base"
                      animate={shouldReduceMotion ? undefined : { scale: [1, 1.16, 1], color: ['#ffe36d', '#ffffff', '#ffe36d'] }}
                      transition={shouldReduceMotion ? undefined : { duration: 1.8, repeat: Infinity, delay: index * 0.45, ease: 'easeInOut' }}
                    >
                      {challenge.points}
                    </motion.strong>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <Users className="h-4 w-4 text-[#83ff38]" />
                    Top ranking
                  </p>
                  <p className="text-xs font-semibold text-paper/42">campanha atual</p>
                </div>
                <div className="space-y-2">
                  {liveRanking.map((member, index) => (
                    <motion.div
                      key={member.name}
                      layout
                      className="flex items-center justify-between rounded-xl bg-black/22 px-3 py-2"
                      animate={shouldReduceMotion ? undefined : { x: [0, index === 0 ? 6 : 2, 0], backgroundColor: ['rgba(0,0,0,0.22)', 'rgba(107,255,31,0.08)', 'rgba(0,0,0,0.22)'] }}
                      transition={{
                        layout: { duration: 0.5, type: 'spring', bounce: 0.22 },
                        ...(shouldReduceMotion
                          ? {}
                          : { duration: 3.2, repeat: Infinity, delay: index * 0.45 + 0.6, ease: 'easeInOut' }),
                      }}
                    >
                      <span className="flex items-center gap-2 text-sm font-semibold">
                        <motion.span
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6bff1f]/15 text-xs text-[#83ff38]"
                          animate={shouldReduceMotion ? undefined : { scale: [1, 1.18, 1] }}
                          transition={shouldReduceMotion ? undefined : { duration: 2.4, repeat: Infinity, delay: index * 0.35, ease: 'easeInOut' }}
                        >
                          {index + 1}
                        </motion.span>
                        {member.name}
                      </span>
                      <motion.span
                        key={`${member.name}-${member.points}`}
                        className="text-xs font-bold text-paper/70"
                        initial={shouldReduceMotion ? false : { scale: 0.92, color: '#83ff38' }}
                        animate={shouldReduceMotion ? undefined : { scale: 1, color: 'rgba(250,248,243,0.7)' }}
                        transition={shouldReduceMotion ? undefined : { duration: 0.35 }}
                      >
                        {member.points.toLocaleString('pt-BR')} pts
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
