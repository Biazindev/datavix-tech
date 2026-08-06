export type ProductSlug =
  | 'berion-igrejas'
  | 'app-membros'
  | 'conexao-jovem'
  | 'berion-comercios'

export const productAccent: Record<ProductSlug, string> = {
  'berion-igrejas': 'violet',
  'app-membros': 'sky',
  'conexao-jovem': 'amber',
  'berion-comercios': 'emerald',
}
