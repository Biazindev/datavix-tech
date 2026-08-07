import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ConexaoJovemPage } from './ConexaoJovemPage'
import { conexaoJovem } from '@/content/products'

describe('ConexaoJovemPage', () => {
  it('renders the product name, features, and WhatsApp CTAs', () => {
    render(
      <MemoryRouter>
        <ConexaoJovemPage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: conexaoJovem.name })).toBeInTheDocument()
    conexaoJovem.features.forEach((feature) => {
      expect(screen.getAllByText(feature.title).length).toBeGreaterThan(0)
    })
    expect(screen.getByRole('heading', { name: /Desafios da Semana/i })).toBeInTheDocument()
    expect(screen.getByText(/Ranking por pontos/i)).toBeInTheDocument()
    expect(screen.getByText(/Prêmio para os melhores/i)).toBeInTheDocument()
    const ctas = screen.getAllByRole('link', { name: new RegExp(conexaoJovem.ctaLabel, 'i') })
    expect(ctas.length).toBeGreaterThan(0)
    ctas.forEach((cta) => expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564')))
  })
})
