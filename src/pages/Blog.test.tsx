import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders a coming-soon message', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByText(/em breve/i)).toBeInTheDocument()
  })
})
