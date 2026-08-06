import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ProductPage } from './ProductPage'
import { berionComercios } from '@/content/products'

describe('ProductPage', () => {
  it('renders the product name, tagline, all features, and a WhatsApp CTA', () => {
    render(
      <MemoryRouter>
        <ProductPage product={berionComercios} />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: berionComercios.name })).toBeInTheDocument()
    expect(screen.getByText(berionComercios.tagline)).toBeInTheDocument()
    berionComercios.features.forEach((feature) => {
      expect(screen.getAllByText(feature.title).length).toBeGreaterThan(0)
    })
    const ctas = screen.getAllByRole('link', { name: berionComercios.ctaLabel })
    expect(ctas.length).toBeGreaterThan(0)
    ctas.forEach((cta) => expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564')))
  })
})
