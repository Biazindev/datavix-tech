import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'

//teste

describe('Footer', () => {
  it('shows both phone numbers, with only the primary as a WhatsApp link', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(screen.getByText(/\(44\) 99117-9564/)).toBeInTheDocument()
    expect(screen.getByText(/\(17\) 98135-2391/)).toBeInTheDocument()
    const links = screen.getAllByRole('link').filter((a) => a.getAttribute('href')?.includes('wa.me'))
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => expect(link).toHaveAttribute('href', expect.stringContaining('5544991179564')))
  })

  it('links to all 4 product pages', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: /berion igrejas/i })).toHaveAttribute('href', '/berion-igrejas')
    expect(screen.getByRole('link', { name: /app membros berion/i })).toHaveAttribute('href', '/app-membros')
    expect(screen.getByRole('link', { name: /conexão jovem/i })).toHaveAttribute('href', '/conexao-jovem')
    expect(screen.getByRole('link', { name: /berion comércios/i })).toHaveAttribute('href', '/berion-comercios')
  })
})
