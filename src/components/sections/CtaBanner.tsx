import { ArrowRight, type LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CtaBannerProps {
  icon: LucideIcon
  heading: string
  subheading: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel?: string
  secondaryHref?: string
  background: string
  primaryButtonClassName?: string
  secondaryButtonClassName?: string
  iconClassName?: string
}

export function CtaBanner({
  icon: Icon,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  background,
  primaryButtonClassName,
  secondaryButtonClassName,
  iconClassName,
}: CtaBannerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className="px-4 py-16"
      style={{ background }}
    >
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-white sm:flex-row sm:items-center"
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <div className="flex max-w-3xl items-start gap-4">
          <motion.span
            className={cn('hidden size-12 shrink-0 items-center justify-center rounded-lg bg-white/10 sm:flex', iconClassName)}
            variants={{
              hidden: { scale: 0.88, rotate: -8 },
              show: { scale: 1, rotate: 0 },
            }}
            animate={shouldReduceMotion ? undefined : { boxShadow: ['0 0 0 rgba(107,255,31,0)', '0 0 26px rgba(107,255,31,0.22)', '0 0 0 rgba(107,255,31,0)'] }}
            transition={{ duration: 2.6, repeat: shouldReduceMotion ? 0 : Infinity, repeatDelay: 1.2 }}
          >
            <Icon className="size-6" />
          </motion.span>
          <div>
            <motion.h2
              className="text-2xl font-bold"
              variants={{
                hidden: { y: 14 },
                show: { y: 0 },
              }}
            >
              {heading}
            </motion.h2>
            <motion.p
              className="mt-2 text-sm leading-6 text-white/72"
              variants={{
                hidden: { y: 12 },
                show: { y: 0 },
              }}
            >
              {subheading}
            </motion.p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" variant="secondary" className={primaryButtonClassName}>
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              <motion.span
                className="inline-flex items-center"
                whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              >
              {ctaLabel}
              <ArrowRight data-icon="inline-end" />
              </motion.span>
            </a>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn('border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white', secondaryButtonClassName)}
            >
              <a href={secondaryHref}>
                <motion.span
                  className="inline-flex items-center"
                  whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                >
                  {secondaryLabel}
                </motion.span>
              </a>
            </Button>
          )}
        </div>
      </motion.div>
    </motion.section>
  )
}
