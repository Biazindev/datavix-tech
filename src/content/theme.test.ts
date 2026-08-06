import { describe, it, expect } from 'vitest'
import { productAccent } from './theme'

describe('productAccent', () => {
  it('defines a distinct accent color for each of the 4 products', () => {
    const slugs = ['berion-igrejas', 'app-membros', 'conexao-jovem', 'berion-comercios'] as const
    const colors = slugs.map((slug) => productAccent[slug])
    expect(colors).toHaveLength(4)
    expect(new Set(colors).size).toBe(4)
    colors.forEach((color) => expect(typeof color).toBe('string'))
  })
})
