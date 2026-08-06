import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { AppMembrosPage } from './AppMembrosPage'
import { appMembros } from '@/content/products'

describe('AppMembrosPage', () => {
  it('renders the product name, features, and WhatsApp CTAs', () => {
    render(
      <MemoryRouter>
        <AppMembrosPage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: appMembros.name })).toBeInTheDocument()
    appMembros.features.forEach((feature) => {
      expect(screen.getAllByText(feature.title).length).toBeGreaterThan(0)
    })
    const ctas = screen.getAllByRole('link', { name: new RegExp(appMembros.ctaLabel, 'i') })
    expect(ctas.length).toBeGreaterThan(0)
    ctas.forEach((cta) => expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564')))
  })
})
