import { describe, it, expect } from 'vitest'
import { products } from './index'

describe('products', () => {
  it('has exactly 4 products with unique slugs and at least 3 features each', () => {
    expect(products).toHaveLength(4)
    const slugs = products.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(4)
    products.forEach((p) => {
      expect(p.features.length).toBeGreaterThanOrEqual(3)
      expect(p.name.length).toBeGreaterThan(0)
      expect(p.tagline.length).toBeGreaterThan(0)
      expect(p.ctaLabel.length).toBeGreaterThan(0)
    })
  })
})
