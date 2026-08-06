import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )
}

describe('App routing', () => {
  it('renders Home at /', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { name: /tecnologia que organiza/i })).toBeInTheDocument()
  })

  it('renders each product page at its route', () => {
    renderAt('/berion-igrejas')
    expect(screen.getByRole('heading', { name: 'Berion Igrejas' })).toBeInTheDocument()
  })

  it('renders NotFound for an unknown route', () => {
    renderAt('/rota-que-nao-existe')
    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
