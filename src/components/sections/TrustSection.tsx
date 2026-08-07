import { CheckCircle2, type LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

const TRUST_POINTS = [
  'Plataforma 100% em nuvem, segura e escalável',
  'Compromisso com a LGPD e boas práticas de segurança',
  'Suporte humano especializado',
  'Atualizações constantes e melhorias contínuas',
]

const TRUST_BADGES: { icon: LucideIcon; label: string }[] = []

interface TrustSectionProps {
  heading: string
  accentText: string
  badges: { icon: LucideIcon; label: string }[]
  dark?: boolean
  sectionClassName?: string
  eyebrowClassName?: string
  pointClassName?: string
  badgeClassName?: string
  points?: string[]
}

export function TrustSection({
  heading,
  accentText,
  badges = TRUST_BADGES,
  dark = false,
  sectionClassName,
  eyebrowClassName,
  pointClassName,
  badgeClassName,
  points = TRUST_POINTS,
}: TrustSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className={cn(dark ? 'bg-ink py-16 text-paper' : 'border-y border-border bg-white py-16', sectionClassName)}
    >
      <div className="section-shell grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.span
            className={cn('pill-badge', eyebrowClassName)}
            style={{ borderColor: `${accentText}55`, color: accentText }}
            variants={{
              hidden: { y: 10 },
              show: { y: 0 },
            }}
          >
            Segurança e confiança
          </motion.span>
          <motion.h2
            className="mt-4 text-2xl font-bold"
            variants={{
              hidden: { y: 14 },
              show: { y: 0 },
            }}
          >
            {heading}
          </motion.h2>
          <ul className="mt-6 flex flex-col gap-3">
            {points.map((point, index) => (
              <motion.li
                key={point}
                className="flex items-start gap-2.5 text-sm"
                variants={{
                  hidden: { x: -10 },
                  show: { x: 0 },
                }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.035 }}
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0" style={{ color: accentText }} />
                <span className={cn(dark ? 'text-paper/60' : 'text-muted-foreground', pointClassName)}>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {badges.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              className={cn(
                dark
                  ? 'flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium'
                  : 'flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm',
                badgeClassName,
              )}
              initial={shouldReduceMotion ? false : { y: 22, scale: 0.98 }}
              whileInView={shouldReduceMotion ? undefined : { y: 0, scale: 1 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.015 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.055, ease: [0.22, 1, 0.36, 1] }}
            >
              <Icon className="size-4 shrink-0" style={{ color: accentText }} />
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
