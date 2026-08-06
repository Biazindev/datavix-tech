import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Home } from './Home'
import { products } from '@/content/products'

describe('Home', () => {
  it('introduces DataVix Tech and links to all 4 products', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: /tecnologia que organiza/i })).toBeInTheDocument()
    products.forEach((product) => {
      expect(screen.getByRole('link', { name: new RegExp(product.name, 'i') })).toHaveAttribute(
        'href',
        `/${product.slug}`
      )
    })
  })
})
