import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Produtos } from './Produtos'
import { products } from '@/content/products'

describe('Produtos', () => {
  it('lists all 4 products with a link to each product page', () => {
    render(
      <MemoryRouter>
        <Produtos />
      </MemoryRouter>
    )
    products.forEach((product) => {
      expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: new RegExp(product.ctaLabel, 'i') })).toHaveAttribute(
        'href',
        `/${product.slug}`
      )
    })
  })
})
