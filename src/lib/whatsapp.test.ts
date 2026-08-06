import { describe, it, expect } from 'vitest'
import { whatsappLink } from './whatsapp'

describe('whatsappLink', () => {
  it('builds a wa.me link with the primary number', () => {
    expect(whatsappLink()).toBe('https://wa.me/5544991179564')
  })

  it('appends an url-encoded message when provided', () => {
    expect(whatsappLink('Quero saber mais')).toBe(
      'https://wa.me/5544991179564?text=Quero%20saber%20mais'
    )
  })
})
