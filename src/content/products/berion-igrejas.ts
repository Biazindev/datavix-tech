import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const berionIgrejas: ProductContent = {
  slug: 'berion-igrejas',
  name: 'Berion Igrejas',
  tag: 'Gestão eclesiástica',
  tagline: 'Gestão completa para sua igreja',
  description:
    'Plataforma eclesiástica completa: controle de membros, dízimos, ofertas e votos em um só lugar, com split automático de repasses e relatórios inteligentes.',
  accentColor: productAccent['berion-igrejas'],
  ctaLabel: 'Começar agora',
  stats: [
    { label: 'Igrejas atendidas', value: '500+' },
    { label: 'Em repasses processados', value: 'R$ 2M+' },
    { label: 'Suporte', value: '24/7' },
  ],
  features: [
    {
      title: 'Split automático de repasses',
      description:
        'Divisão automática de dízimos e ofertas entre sede mundial, regional, fundos e pastor, com percentuais configuráveis por igreja.',
    },
    {
      title: 'Relatórios com dupla aprovação',
      description:
        'Fluxo guiado em que pastor e tesoureiro aprovam, e o sistema envia o relatório financeiro automaticamente para a sede.',
    },
    {
      title: 'Dashboard multi-igrejas',
      description:
        'Visão em tempo real para sedes e redes acompanharem indicadores financeiros e de crescimento de todas as igrejas.',
    },
    {
      title: 'Gestão completa de membros',
      description: 'Cadastro, aniversariantes, certificados e carteirinhas em um só lugar.',
    },
    {
      title: 'RBAC granular',
      description: 'Perfis de acesso para Pastor, Tesoureiro, Secretaria e Admin.',
    },
    {
      title: 'PIX e boleto',
      description: 'Integração com gateway de pagamentos para repasses e contribuições.',
    },
  ],
}
