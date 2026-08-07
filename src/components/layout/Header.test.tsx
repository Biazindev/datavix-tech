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
    expect(await screen.findByRole('menuitem', { name: /berion igrejas/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /app membros berion/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /conexão jovem/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /berion comércios/i })).toBeInTheDocument()
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

  it('reveals nav links in a mobile menu when the toggle button is clicked', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    // Before opening, only the always-present desktop nav renders "Sobre".
    expect(screen.getAllByRole('link', { name: /^sobre$/i })).toHaveLength(1)

    await userEvent.click(screen.getByRole('button', { name: /abrir menu/i }))

    // After opening, the mobile menu adds a second copy of each link.
    expect(screen.getAllByRole('link', { name: /^sobre$/i })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /^blog$/i })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /^contato$/i })).toHaveLength(2)
  })
})
