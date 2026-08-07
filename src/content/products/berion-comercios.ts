import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const berionComercios: ProductContent = {
  slug: 'berion-comercios',
  name: 'Berion Comércios',
  tag: 'ERP modular para comércio e serviços',
  tagline: 'O ERP que se adapta ao seu negócio, não o contrário',
  description:
    'Venda, estoque, financeiro, documentos fiscais, delivery, comandas, orçamento e ordem de serviço em uma plataforma modular para pequenos e médios negócios no Brasil.',
  accentColor: productAccent['berion-comercios'],
  ctaLabel: 'Conhecer o Berion',
  features: [
    {
      title: 'PDV por atacado e varejo',
      description: 'Venda de balcão com busca de produto, múltiplas formas de pagamento e preço automático por perfil.',
    },
    {
      title: 'Módulos por segmento',
      description: 'Padaria, mercado, depósito, construção, restaurante e pizzaria carregam apenas o que faz sentido.',
    },
    {
      title: 'Estoque por filial',
      description: 'Controle de entrada e saída por unidade, com rastreio para reduzir perda e sumiço de produto.',
    },
    {
      title: 'Cloud ou servidor local',
      description: 'Rode hospedado por nós ou instalado na máquina do cliente quando a operação exigir dados locais.',
    },
    {
      title: 'Documentos fiscais e financeiro',
      description: 'Documentos fiscais, contas a pagar e receber no mesmo fluxo operacional.',
    },
    {
      title: 'Usuários e integrações',
      description: 'Perfis de acesso por usuário e estrutura pronta para marketplaces como Mercado Livre, Shopee e Amazon.',
    },
  ],
}
