import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contato } from './Contato'

describe('Contato', () => {
  it('renders a primary WhatsApp CTA and both phone numbers', () => {
    render(<Contato />)
    const cta = screen.getByRole('link', { name: /whatsapp/i })
    expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564'))
    expect(screen.getByText(/\(44\) 99117-9564/)).toBeInTheDocument()
    expect(screen.getByText(/\(17\) 98135-2391/)).toBeInTheDocument()
  })
})
