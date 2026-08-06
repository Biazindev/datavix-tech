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
