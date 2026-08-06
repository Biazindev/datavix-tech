import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { BerionComerciosPage } from './BerionComerciosPage'
import { berionComercios } from '@/content/products'

describe('BerionComerciosPage', () => {
  it('renders the product name, features, and WhatsApp CTAs', () => {
    render(
      <MemoryRouter>
        <BerionComerciosPage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: berionComercios.name })).toBeInTheDocument()
    berionComercios.features.forEach((feature) => {
      expect(screen.getAllByText(feature.title).length).toBeGreaterThan(0)
    })
    const ctas = screen.getAllByRole('link', { name: new RegExp(berionComercios.ctaLabel, 'i') })
    expect(ctas.length).toBeGreaterThan(0)
    ctas.forEach((cta) => expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564')))
  })
})
