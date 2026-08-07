import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const conexaoJovem: ProductContent = {
  slug: 'conexao-jovem',
  name: 'Conexão Jovem',
  tag: 'Comunidade jovem',
  tagline: 'Comunidade para o departamento de jovens',
  description:
    'App de comunidade feito para o departamento de jovens: devocional diário, eventos e feed, com assinatura acessível a partir de R$ 4,99.',
  accentColor: productAccent['conexao-jovem'],
  ctaLabel: 'Conhecer o Conexão Jovem',
  features: [
    {
      title: 'Devocional diário com reflexão gerada por IA',
      description: 'Um devocional novo todos os dias, com reflexão e versículo do dia.',
    },
    {
      title: 'Agenda de eventos do departamento',
      description: 'Todos os encontros e eventos de jovens organizados em um só lugar.',
    },
    {
      title: 'Feed de comunidade',
      description: 'Espaço para os jovens interagirem e acompanharem a vida do departamento.',
    },
    {
      title: 'Desafios semanais com ranking',
      description: 'Missões, quizzes e ações valem pontos para um ranking que premia os melhores no final.',
    },
    {
      title: 'Login com Google',
      description: 'Entrada rápida e segura usando a conta Google do jovem.',
    },
    {
      title: 'Planos de assinatura acessíveis',
      description: 'Mensal (R$ 4,99), semestral (R$ 29,90) ou anual (R$ 49,90).',
    },
  ],
}
