import type { LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface FeatureGridProps {
  eyebrow: string
  heading: string
  subheading?: string
  accentText: string
  features: { title: string; description: string }[]
  icons: LucideIcon[]
  iconBg: string
  iconColor: string
  withGrid?: boolean
  sectionClassName?: string
  eyebrowClassName?: string
  cardClassName?: string
  subheadingClassName?: string
  descriptionClassName?: string
}

export function FeatureGrid({
  eyebrow,
  heading,
  subheading,
  accentText,
  features,
  icons,
  iconBg,
  iconColor,
  withGrid = true,
  sectionClassName,
  eyebrowClassName,
  cardClassName,
  subheadingClassName,
  descriptionClassName,
}: FeatureGridProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="funcionalidades"
      className={cn(withGrid && 'surface-grid', 'py-20', sectionClassName)}
    >
      <div className="section-shell">
        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <div>
            <motion.span
              className={cn('pill-badge', eyebrowClassName)}
              style={{ borderColor: `${accentText}55`, color: accentText }}
              variants={{
                hidden: { y: 10 },
                show: { y: 0 },
              }}
            >
              {eyebrow}
            </motion.span>
            <motion.h2
              className="mt-4 text-2xl font-bold sm:text-3xl"
              variants={{
                hidden: { y: 14 },
                show: { y: 0 },
              }}
            >
              {heading}
            </motion.h2>
          </div>
          {subheading && (
            <motion.p
              className={cn('text-sm text-muted-foreground', subheadingClassName)}
              variants={{
                hidden: { y: 14 },
                show: { y: 0 },
              }}
            >
              {subheading}
            </motion.p>
          )}
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={feature.title}
                className={cn(
                  'group rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10',
                  cardClassName,
                )}
                initial={shouldReduceMotion ? false : { y: 26, scale: 0.98 }}
                whileInView={shouldReduceMotion ? undefined : { y: 0, scale: 1 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.015 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : index * 0.045, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="inline-flex size-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: iconBg, color: iconColor }}
                  whileHover={shouldReduceMotion ? undefined : { rotate: -6, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                >
                  <Icon className="size-5" strokeWidth={2} />
                </motion.div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className={cn('mt-2 text-sm leading-6 text-muted-foreground', descriptionClassName)}>{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
