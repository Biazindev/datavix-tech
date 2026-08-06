import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const berionComercios: ProductContent = {
  slug: 'berion-comercios',
  name: 'Berion Comércios',
  tag: 'ERP comércio & serviços',
  tagline: 'ERP completo para comércio e serviços',
  description:
    'Gestão de vendas, estoque, financeiro e múltiplas filiais em uma plataforma só, para comércios e prestadores de serviço.',
  accentColor: productAccent['berion-comercios'],
  ctaLabel: 'Conhecer o ERP',
  features: [
    {
      title: 'PDV e vendas',
      description: 'Frente de caixa completa para registrar vendas rapidamente.',
    },
    {
      title: 'Comandas e delivery',
      description: 'Controle de comandas e pedidos de delivery integrados ao mesmo sistema.',
    },
    {
      title: 'Estoque e financeiro',
      description: 'Controle de estoque em tempo real e visão financeira do negócio.',
    },
    {
      title: 'Multi-filiais',
      description: 'Gerencie várias filiais a partir de um único painel.',
    },
    {
      title: 'Orçamentos e ordens de serviço',
      description: 'Monte orçamentos e acompanhe ordens de serviço do início ao fim.',
    },
    {
      title: 'Clientes e usuários',
      description: 'Cadastro de clientes e controle de acesso por usuário.',
    },
  ],
}
