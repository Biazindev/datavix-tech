import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Sobre } from './Sobre'

describe('Sobre', () => {
  it('renders the company mission heading', () => {
    render(<Sobre />)
    expect(screen.getByRole('heading', { name: /quem somos/i })).toBeInTheDocument()
  })
})
