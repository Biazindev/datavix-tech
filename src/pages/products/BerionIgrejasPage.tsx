import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpenText,
  Building2,
  CalendarDays,
  CheckCircle2,
  Church,
  ClipboardList,
  CreditCard,
  Database,
  FileText,
  HeartHandshake,
  History,
  KeyRound,
  LayoutDashboard,
  Lock,
  PlayCircle,
  Printer,
  ScrollText,
  Server,
  Settings2,
  ShieldCheck,
  Search,
  UserCheck,
  UserRound,
  Users,
  Wallet,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { DashboardMockup } from '@/components/mockups/DashboardMockup'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { TrustSection } from '@/components/sections/TrustSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { berionIgrejas } from '@/content/products'
import { accentHex } from '@/content/theme'
import { whatsappLink } from '@/lib/whatsapp'

const hex = accentHex[berionIgrejas.accentColor]
const cta = whatsappLink(`Olá! Quero saber mais sobre o ${berionIgrejas.name}.`)

const VALUE_PROPS = [
  { icon: Users, label: 'Cadastro de membros' },
  { icon: Wallet, label: 'Tesouraria organizada' },
  { icon: FileText, label: 'Relatórios mensais' },
]

const ADMIN_EXPERIENCE = [
  {
    icon: ClipboardList,
    eyebrow: 'Secretaria',
    title: 'Central de secretaria com tudo em andamento',
    description:
      'Mostre pendências, documentos, solicitações, transferências, aniversariantes e novos cadastros em uma visão única para a equipe administrativa.',
    metrics: ['12 solicitações abertas', '38 documentos emitidos', '7 aniversariantes'],
    rows: ['Maria Oliveira · cadastro atualizado', 'Transferência aprovada · Igreja Central', 'Carta convite emitida · Pr. Tiago Biazin'],
    tags: ['Filtros por período', 'Status por solicitação', 'Drawer de detalhes'],
  },
  {
    icon: Building2,
    eyebrow: 'Igrejas',
    title: 'Gestão de igrejas com ficha completa',
    description:
      'Cada igreja aparece com pastor responsável, cidade, status, quantidade de membros, última atividade e linha do tempo institucional.',
    metrics: ['42 igrejas', '4 em implantação', '24 no Paraná'],
    rows: ['Igreja Central · Maringá PR · ativa', 'Campo Nova Londrina · 248 membros', 'Igreja Jardim Alvorada · em implantação'],
    tags: ['Status operacional', 'Histórico por igreja', 'Visão regional'],
  },
  {
    icon: Users,
    eyebrow: 'Membros',
    title: 'Central completa de membros',
    description:
      'Perfil do membro com foto, igreja atual, função, contatos, endereço, informações eclesiásticas, movimentações e documentos.',
    metrics: ['12.864 membros', '312 novos no mês', '18 transferências'],
    rows: ['Lucas Biazin · Cooperador · Maringá', 'Ana Paula Santos · membro ativo', 'Carlos Oliveira · cadastro pendente'],
    tags: ['Busca instantânea', 'Avatares e badges', 'Timeline do membro'],
  },
  {
    icon: UserRound,
    eyebrow: 'Pastores',
    title: 'Gestão ministerial dos pastores',
    description:
      'Acompanhe igreja atual, cidade, status, início da atuação, nomeações, transferências e histórico ministerial completo.',
    metrics: ['118 pastores', '96 em exercício', '11 regiões'],
    rows: ['Pr. Tiago Biazin · Igreja Central', 'Pr. João da Silva · Londrina Norte', 'Pr. Carlos Oliveira · Nova Londrina'],
    tags: ['Linha do tempo ministerial', 'Igrejas anteriores', 'Período de atuação'],
  },
  {
    icon: History,
    eyebrow: 'Histórico da igreja',
    title: 'A história administrativa da igreja preservada',
    description:
      'Uma timeline mostra fundação, mudanças de status, liderança, documentos relacionados e responsáveis por cada evento.',
    metrics: ['18 eventos', '6 documentos', '100% rastreável'],
    rows: ['2026 · nova liderança assumiu', '2025 · atualização administrativa', '2024 · igreja cadastrada no sistema'],
    tags: ['Filtros por evento', 'Documentos relacionados', 'Responsável visível'],
    imageSrc: '/mockups/berion-igrejas-historico-igrejas.png',
  },
  {
    icon: BookOpenText,
    eyebrow: 'Histórico do pastor',
    title: 'Trajetória pastoral em ordem cronológica',
    description:
      'Veja igrejas onde atuou, períodos, cargos, nomeações, transferências e alterações administrativas em uma visualização elegante.',
    metrics: ['5 igrejas atendidas', '2 nomeações', '11 anos de histórico'],
    rows: ['2026 · Igreja Nova Londrina · Presidente', '2024 · Maringá · Pastor regional', '2021 · Nomeação ministerial'],
    tags: ['Períodos calculados', 'Cargos por fase', 'Histórico consolidado'],
    imageSrc: '/mockups/berion-igrejas-historico-pastor.png',
  },
  {
    icon: Activity,
    eyebrow: 'Pastor / igreja',
    title: 'Relação histórica entre pastor e igreja',
    description:
      'Responda rapidamente quem era o pastor de uma igreja em determinado período e por quais igrejas um pastor já passou.',
    metrics: ['2021 → atual', '3 funções', '4 registros vinculados'],
    rows: ['2021-2023 · Pastor responsável', '2023-2025 · Presidente', '2025-atual · Pastor presidente'],
    tags: ['Motivo da alteração', 'Documentos anexos', 'Vínculos relacionados'],
    imageSrc: '/mockups/berion-igrejas-historico-pastor-igreja.png',
  },
  {
    icon: Database,
    eyebrow: 'Auditoria',
    title: 'Log de tudo que acontece no sistema',
    description:
      'Central de auditoria com login, cadastro, edição, exclusão, transferência, alteração de pastor, permissões e documentos emitidos.',
    metrics: ['347 ações hoje', '22 módulos', 'Antes/depois'],
    rows: ['Pr. Tiago alterou pastor responsável', 'Secretaria emitiu documento', 'Sistema registrou login seguro'],
    tags: ['Usuário e IP', 'Registro afetado', 'Comparativo antes/depois'],
  },
  {
    icon: BarChart3,
    eyebrow: 'Dashboard',
    title: 'Dashboard completo para a sede',
    description:
      'Indicadores de igrejas, membros, pastores, atividades do dia, crescimento, distribuição regional e situação operacional.',
    metrics: ['+12,4% no mês', '347 atividades', '4 igrejas em implantação'],
    rows: ['Crescimento de membros · +312', 'Região PR lidera expansão', 'Atividade crítica auditada às 09:42'],
    tags: ['7/30/90 dias', 'Comparativos', 'Gráficos executivos'],
  },
  {
    icon: Settings2,
    eyebrow: 'Central administrativa',
    title: 'Centro de comando da operação inteira',
    description:
      'Uma visão executiva reúne igrejas, membros, pastores, solicitações, documentos, pendências, atividades e auditoria.',
    metrics: ['10 pendências', '186 documentos', '74 solicitações resolvidas'],
    rows: ['3 documentos aguardando aprovação', '2 transferências pendentes', '1 cadastro pastoral incompleto'],
    tags: ['Acessos rápidos', 'Resumo operacional', 'Pendências prioritárias'],
  },
]

const FEATURE_DEEP_DIVES = [
  {
    icon: Users,
    eyebrow: 'Secretaria',
    title: 'Gestão de membros',
    summary:
      'Centralize os dados dos membros, vínculos, informações pessoais e histórico de acompanhamento em uma rotina simples para a secretaria.',
    bullets: ['Cadastro completo de membros', 'Aniversariantes e dados ministeriais', 'Convite público para pré-cadastro'],
    result: 'A igreja deixa de depender de planilhas soltas e passa a ter uma base única, atualizada e fácil de consultar.',
  },
  {
    icon: Printer,
    eyebrow: 'Documentos',
    title: 'Carteirinhas e certificados',
    summary:
      'Gere documentos no padrão visual da sua igreja, com impressão rápida e sem precisar montar arte manualmente toda vez.',
    bullets: ['Carteirinhas frente e verso', 'Certificados impressos com um clique', 'Modelos padronizados por igreja'],
    result: 'A secretaria ganha velocidade e mantém todos os documentos com aparência consistente.',
  },
  {
    icon: FileText,
    eyebrow: 'Relatórios',
    title: 'Relatórios ajustados à política da igreja',
    summary:
      'O envio de relatórios segue o formato que a liderança precisa, com campos guiados para reduzir erro de preenchimento e retrabalho.',
    bullets: ['Relatório mensal', 'Relatório de culto', 'Comprovantes, aprovações e recusas'],
    result: 'A sede recebe dados mais claros e cada igreja sabe exatamente o que precisa preencher.',
  },
  {
    icon: LayoutDashboard,
    eyebrow: 'Sede',
    title: 'Painel inteligente da sede',
    summary:
      'A sede acompanha igrejas, pendências, finanças e indicadores em tempo real, sem depender de troca manual de mensagens.',
    bullets: ['Visão igreja por igreja', 'Relatórios pendentes e enviados', 'Indicadores para tomada de decisão'],
    result: 'A liderança enxerga a operação inteira em uma tela e identifica rapidamente onde precisa agir.',
  },
  {
    icon: Wallet,
    eyebrow: 'Tesouraria',
    title: 'Entradas e saídas diárias',
    summary:
      'Registre dízimos, ofertas, votos, despesas e saídas do dia a dia com organização para fechamento mensal.',
    bullets: ['Cadastro diário de entradas', 'Controle de saídas e despesas', 'Resumo financeiro por período'],
    result: 'A tesouraria fecha o mês com menos divergência e mais clareza sobre cada movimentação.',
  },
  {
    icon: ScrollText,
    eyebrow: 'Cartas e convites',
    title: 'Documentos administrativos padronizados',
    summary:
      'Cartas, convites e autorizações saem com informações da igreja, pastor e membro já organizadas no documento.',
    bullets: ['Cartas convite', 'Autorizações e contratos', 'Dados da igreja preenchidos automaticamente'],
    result: 'A equipe gera documentos oficiais mais rápido e reduz falhas de digitação.',
  },
  {
    icon: UserCheck,
    eyebrow: 'Liderança',
    title: 'Gestão de igrejas e pastores',
    summary:
      'Controle igrejas, pastores responsáveis, vínculos e mudanças de liderança com rastreabilidade administrativa.',
    bullets: ['Cadastro de igrejas', 'Cadastro e gestão de pastores', 'Vínculo pastor/igreja'],
    result: 'A sede mantém uma visão organizada de quem lidera cada igreja e como a estrutura está distribuída.',
  },
  {
    icon: BookOpenText,
    eyebrow: 'Histórico',
    title: 'Históricos completos',
    summary:
      'Acompanhe a história da igreja, do pastor e das passagens pastorais para preservar memória administrativa e ministerial.',
    bullets: ['Histórico da igreja', 'Histórico do pastor', 'Histórico pastor/igreja'],
    result: 'Decisões futuras ficam apoiadas por registros claros, não apenas por lembrança ou conversa informal.',
  },
  {
    icon: BarChart3,
    eyebrow: 'Controle',
    title: 'Dashboard, permissões e logs',
    summary:
      'A administração acompanha indicadores, controla acessos por perfil e mantém registro das ações realizadas no sistema.',
    bullets: ['Dashboard administrativo completo', 'Perfis e permissões por usuário', 'Log de tudo que acontece no sistema'],
    result: 'A gestão fica mais segura, auditável e transparente para igreja e sede.',
  },
]

export function BerionIgrejasPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div>
      <section className="bg-[#141527] px-4 py-20 text-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <span className="pill-badge bg-white/5" style={{ borderColor: `${hex[400]}66`, color: hex[400] }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: hex[400] }} />
              {berionIgrejas.tag}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Berion <span style={{ color: hex[400] }}>Igrejas</span>
            </h1>
            <p className="mt-4 text-lg text-paper/80">{berionIgrejas.tagline}</p>
            <p className="mt-3 max-w-xl text-sm text-paper/50">{berionIgrejas.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={cta} target="_blank" rel="noopener noreferrer">
                  {berionIgrejas.ctaLabel}
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-paper/20 bg-transparent text-paper hover:bg-paper/10 hover:text-paper"
              >
                <a href="#funcionalidades">
                  <PlayCircle className="mr-1.5 h-4 w-4" />
                  Ver funcionalidades
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {VALUE_PROPS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-paper/60">
                  <Icon className="h-4 w-4" style={{ color: hex[400] }} />
                  {label}
                </div>
              ))}
            </div>

            {berionIgrejas.stats && (
              <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {berionIgrejas.stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                    <p className="ledger-figure text-lg font-semibold">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-paper/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <DashboardMockup
            title={berionIgrejas.name}
            accent={hex[400]}
            sidebarItems={['Home', 'Secretaria', 'Tesouraria', 'Dashboard', 'Suporte']}
            sidebarIcons={[LayoutDashboard, Users, Wallet, BarChart3, HeartHandshake]}
            tiles={
              berionIgrejas.stats?.map((s) => ({ label: s.label, value: s.value })) ?? [
                { label: 'Membros', value: 'Ativo' },
                { label: 'Repasses', value: 'Automático' },
                { label: 'Relatórios', value: 'Em dia' },
              ]
            }
            barItems={berionIgrejas.features.slice(0, 4).map((f) => f.title)}
            imageSrc="/mockups/berion-igrejas-dashboard.png"
            className="lg:-mr-6"
          />
        </div>
      </section>

      <FeatureGrid
        eyebrow="Funcionalidades"
        heading="Muito além do cadastro: secretaria, sede, históricos e documentos"
        subheading="Do membro ao painel da sede, o Berion Igrejas organiza a rotina administrativa, documental e financeira da igreja."
        accentText={hex[600]}
        features={berionIgrejas.features}
        icons={[Users, Printer, FileText, LayoutDashboard, Wallet, ScrollText, UserCheck, BookOpenText, BarChart3]}
        iconBg={`${hex[500]}1A`}
        iconColor={hex[600]}
        withGrid={false}
      />

      <section className="bg-[#f6f7fb] px-4 py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="pill-badge" style={{ borderColor: `${hex[400]}55`, color: hex[600] }}>
              Resumo por funcionalidade
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              O que o Berion Igrejas resolve na rotina da igreja
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Cada módulo foi pensado para reduzir trabalho manual, organizar registros importantes e dar visão clara
              para secretaria, tesouraria, pastores e sede.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {FEATURE_DEEP_DIVES.map(({ icon: Icon, eyebrow, title, summary, bullets, result }) => (
              <article key={title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: hex[600] }}>
                      {eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{title}</h3>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${hex[500]}1A`, color: hex[600] }}>
                    <Icon className="size-5" />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{summary}</p>
                <div className="mt-5 space-y-2">
                  {bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0" style={{ color: hex[600] }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-md border border-border bg-background p-3 text-sm leading-6 text-muted-foreground">
                  <strong className="text-foreground">Na prática: </strong>
                  {result}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-4 py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <span className="pill-badge" style={{ borderColor: `${hex[400]}55`, color: hex[600] }}>
                Gestão administrativa
              </span>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Tudo registrado, organizado e pronto para acompanhar
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                Uma vitrine da operação administrativa: secretaria, igrejas, membros, pastores, históricos, dashboard
                e auditoria aparecem como módulos conectados, com dados realistas e leitura executiva.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Igrejas acompanhadas', value: '42', icon: Church },
                { label: 'Membros organizados', value: '12.864', icon: Users },
                { label: 'Ações auditadas hoje', value: '347', icon: ShieldCheck },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <Icon className="size-4" style={{ color: hex[600] }} />
                  <p className="ledger-figure mt-3 text-2xl font-semibold">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {ADMIN_EXPERIENCE.map(({ icon: Icon, eyebrow, title, description, metrics, rows, tags, imageSrc }, index) => (
              <motion.article
                key={title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.2), ease: 'easeOut' }}
                className="group overflow-hidden rounded-xl border border-border bg-[#fbfcff] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="border-b border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: hex[600] }}>
                        {eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight">{title}</h3>
                    </div>
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-lg shadow-sm"
                      style={{ backgroundColor: `${hex[500]}1A`, color: hex[600] }}
                    >
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
                </div>

                <div className={imageSrc ? 'p-5' : 'grid gap-4 p-5 xl:grid-cols-[0.78fr_1.22fr]'}>
                  {!imageSrc && (
                    <div className="space-y-3">
                      {metrics.map((metric) => (
                        <div key={metric} className="rounded-lg border border-border bg-white p-3">
                          <p className="font-semibold">{metric}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="overflow-hidden rounded-lg border border-border bg-white">
                    {imageSrc ? (
                      <div className="bg-slate-50 p-2">
                        <img
                          src={imageSrc}
                          alt={`Print do módulo ${eyebrow} no Berion Igrejas`}
                          className="h-[360px] w-full rounded-md object-contain object-top shadow-sm transition duration-300 group-hover:scale-[1.015] md:h-[440px]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between border-b border-border px-4 py-3">
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            <Search className="size-3.5" />
                            Demonstração
                          </div>
                          <div className="flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="h-2 w-2 rounded-full bg-sky-400" />
                            <span className="h-2 w-2 rounded-full bg-violet-400" />
                          </div>
                        </div>
                        <div className="divide-y divide-border">
                          {rows.map((row, rowIndex) => (
                            <div key={row} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 text-sm">
                              <span
                                className="flex size-7 items-center justify-center rounded-full text-xs font-bold"
                                style={{ backgroundColor: `${hex[500]}1A`, color: hex[700] }}
                              >
                                {rowIndex + 1}
                              </span>
                              <span className="min-w-0 truncate font-medium">{row}</span>
                              <CheckCircle2 className="size-4 shrink-0" style={{ color: hex[600] }} />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 px-5 pb-5">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: hex[600] }}>
                    Central de auditoria
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">Antes, depois, usuário, horário e registro afetado.</h3>
                </div>
                <span className="pill-badge" style={{ borderColor: `${hex[400]}55`, color: hex[600] }}>
                  Rastreabilidade total
                </span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Antes</p>
                  <p className="mt-3 font-semibold">Pastor responsável: João da Silva</p>
                  <p className="mt-1 text-sm text-muted-foreground">Status: aguardando atualização administrativa</p>
                </div>
                <div className="rounded-lg border border-border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Depois</p>
                  <p className="mt-3 font-semibold">Pastor responsável: Carlos Oliveira</p>
                  <p className="mt-1 text-sm text-muted-foreground">Alterado por Pr. Tiago Biazin em 07/08/2026 às 09:42</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-[#141527] p-6 text-paper shadow-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="size-4" style={{ color: hex[400] }} />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/60">Linha do tempo</p>
              </div>
              <div className="mt-5 space-y-4">
                {['2026 · nova liderança assumiu', '2025 · atualização administrativa', '2024 · igreja cadastrada'].map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: hex[400] }} />
                    <p className="text-sm font-medium text-paper/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection
        heading="Tecnologia segura. Missão protegida. Resultados que contam."
        accentText={hex[400]}
        dark
        badges={[
          { icon: Lock, label: 'Dados protegidos com criptografia' },
          { icon: CheckCircle2, label: 'Compromisso com a LGPD' },
          { icon: Server, label: 'Backups diários e redundância' },
          { icon: ShieldCheck, label: 'Isolamento multitenant por igreja' },
        ]}
      />

      <CtaBanner
        icon={Church}
        heading={`Pronto para conhecer o ${berionIgrejas.name}?`}
        subheading="Agende uma demonstração gratuita e descubra como simplificar a gestão da sua igreja."
        ctaLabel={berionIgrejas.ctaLabel}
        ctaHref={cta}
        secondaryLabel="Ver funcionalidades"
        secondaryHref="#funcionalidades"
        background={`linear-gradient(135deg, ${hex[900]}, ${hex[700]})`}
      />
    </div>
  )
}
