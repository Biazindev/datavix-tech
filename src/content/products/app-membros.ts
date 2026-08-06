import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const appMembros: ProductContent = {
  slug: 'app-membros',
  name: 'App Membros Berion',
  tag: 'App do membro',
  tagline: 'Sua igreja no bolso, todos os dias',
  description:
    'App para o membro acompanhar a vida da igreja: feed da comunidade, agenda, Bíblia, departamentos, lives e ofertas, direto do celular.',
  accentColor: productAccent['app-membros'],
  ctaLabel: 'Conhecer o app',
  features: [
    {
      title: 'Feed da comunidade',
      description: 'Acompanhe avisos, novidades e a vida da igreja em um feed único.',
    },
    {
      title: 'Agenda de reuniões e eventos',
      description: 'Todos os compromissos da igreja e dos departamentos organizados em um calendário.',
    },
    {
      title: 'Bíblia integrada',
      description: 'Leitura da Bíblia direto no app, sem precisar trocar de aplicativo.',
    },
    {
      title: 'Departamentos e ministérios',
      description: 'Cada departamento com sua própria página, avisos e reuniões.',
    },
    {
      title: 'Lives e transmissões',
      description: 'Acesso às transmissões ao vivo da igreja direto pelo app.',
    },
    {
      title: 'Ofertas pelo app e múltiplas igrejas',
      description:
        'Contribua direto pelo app e, se participar de mais de uma igreja, alterne entre elas com um toque.',
    },
  ],
}
