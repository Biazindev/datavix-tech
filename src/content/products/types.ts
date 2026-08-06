import type { ProductSlug } from '../theme'

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
  tagline: string
  description: string
  accentColor: string
  features: ProductFeature[]
  stats?: ProductStat[]
  ctaLabel: string
}
