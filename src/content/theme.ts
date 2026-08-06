export type ProductSlug =
  | 'berion-igrejas'
  | 'app-membros'
  | 'conexao-jovem'
  | 'berion-comercios'

export const accentColors = ['violet', 'sky', 'amber', 'emerald'] as const
export type AccentColor = (typeof accentColors)[number]

export const productAccent: Record<ProductSlug, AccentColor> = {
  'berion-igrejas': 'violet',
  'app-membros': 'sky',
  'conexao-jovem': 'amber',
  'berion-comercios': 'emerald',
}

interface AccentShades {
  400: string
  500: string
  600: string
  700: string
  900: string
}

export const accentHex: Record<AccentColor, AccentShades> = {
  violet: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 900: '#4c1d95' },
  sky: { 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 900: '#0c4a6e' },
  amber: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 900: '#78350f' },
  emerald: { 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 900: '#064e3b' },
}
