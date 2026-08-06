import type { AccentColor, ProductSlug } from '../theme'

export interface ProductFeature {
  title: string
  description: string
}

export interface ProductStat {
  label: string
  value: string
}

export interface ProductContent {
  slug: ProductSlug
  name: string
  tag: string
  tagline: string
  description: string
  accentColor: AccentColor
  features: ProductFeature[]
  stats?: ProductStat[]
  ctaLabel: string
}
