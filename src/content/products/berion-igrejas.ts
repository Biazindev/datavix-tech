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
    { label: 'Secretaria', value: 'Organizada' },
    { label: 'Tesouraria', value: 'Em dia' },
    { label: 'Relatórios', value: 'Guiados' },
  ],
  features: [
    {
      title: 'Gestão de membros',
      description:
        'Cadastro completo de membros, aniversariantes, dados ministeriais e informações importantes da secretaria em um só lugar.',
    },
    {
      title: 'Carteirinhas e certificados',
      description:
        'Impressão de carteirinhas no padrão da sua igreja e certificados prontos com um clique.',
    },
    {
      title: 'Relatórios ajustados à política da igreja',
      description:
        'Envio de relatórios configurado conforme a política da igreja, com fluxo guiado para secretaria, tesouraria e liderança.',
    },
    {
      title: 'Painel inteligente da sede',
      description:
        'Acompanhamento igreja por igreja, 100% online e em tempo real, para sedes e redes acompanharem a operação.',
    },
    {
      title: 'Entradas e saídas diárias',
      description:
        'Cadastro diário de entradas e saídas para manter a tesouraria organizada e reduzir retrabalho no fechamento.',
    },
    {
      title: 'Cartas e convites padronizados',
      description:
        'Modelos de cartas, convites e documentos administrativos no padrão da sua igreja, prontos para gerar e imprimir.',
    },
    {
      title: 'Gestão de igrejas e pastores',
      description:
        'Controle administrativo de igrejas, pastores, vínculos pastor/igreja e informações históricas da liderança.',
    },
    {
      title: 'Logs e históricos completos',
      description:
        'Registro de tudo que acontece no sistema, com histórico da igreja, histórico do pastor e histórico pastor/igreja.',
    },
    {
      title: 'Dashboard administrativo completo',
      description:
        'Indicadores claros para acompanhar secretaria, tesouraria, relatórios, membros e gestão administrativa da igreja.',
    },
  ],
}
