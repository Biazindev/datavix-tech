import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Header', () => {
  it('lists all 4 products in the Produtos dropdown', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    await userEvent.click(screen.getByRole('button', { name: /produtos/i }))
    expect(await screen.findByRole('link', { name: /berion igrejas/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /app membros berion/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /conexão jovem/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /berion comércios/i })).toBeInTheDocument()
  })

  it('has a CTA linking to WhatsApp', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const cta = screen.getByRole('link', { name: /falar com o time/i })
    expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564'))
  })
})
