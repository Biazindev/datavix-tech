import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { BerionIgrejasPage } from './BerionIgrejasPage'
import { berionIgrejas } from '@/content/products'

describe('BerionIgrejasPage', () => {
  it('renders the product name, features, and WhatsApp CTAs', () => {
    render(
      <MemoryRouter>
        <BerionIgrejasPage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: berionIgrejas.name })).toBeInTheDocument()
    berionIgrejas.features.forEach((feature) => {
      expect(screen.getAllByText(feature.title).length).toBeGreaterThan(0)
    })
    expect(screen.getByRole('heading', { name: /O que o Berion Igrejas resolve/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Na prática:/i).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: /Tudo registrado, organizado/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Central de auditoria/i).length).toBeGreaterThan(0)
    const ctas = screen.getAllByRole('link', { name: new RegExp(berionIgrejas.ctaLabel, 'i') })
    expect(ctas.length).toBeGreaterThan(0)
    ctas.forEach((cta) => expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564')))
  })
})
