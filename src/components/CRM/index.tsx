import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { 
  FaHeadset, 
  FaTicketAlt, 
  FaComments, 
  FaPaperclip, 
  FaPaperPlane,
  FaUserCircle,
  FaCheckCircle,
  FaClock,
  FaSpinner,
  FaSearch,
  FaFilter,
  FaPlus,
  FaEye,
  FaCheck,
  FaTimes,
  FaReply,
  FaArchive,
  FaTrash,
  FaChartLine,
  FaUserTie,
  FaChurch,
  FaBuilding,
  FaQuestionCircle,
  FaLightbulb,
  FaBug,
  FaDollarSign,
  FaDatabase,
  FaWrench,
  FaExclamationTriangle
} from 'react-icons/fa';

// ============================================
// ANIMAÇÕES
// ============================================

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const typingAnimation = keyframes`
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-5px); }
`;

// ============================================
// TIPOS
// ============================================

interface Ticket {
  id: number;
  titulo: string;
  descricao: string;
  status: 'aberto' | 'em_andamento' | 'aguardando' | 'resolvido' | 'fechado';
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente';
  categoria: 'duvida' | 'bug' | 'suporte' | 'financeiro' | 'relatorio' | 'outro';
  usuario: {
    id: number;
    nome: string;
    email: string;
    igreja: string;
    cargo: string;
  };
  mensagens: Mensagem[];
  dataCriacao: string;
  dataAtualizacao: string;
  anexos?: string[];
}

interface Mensagem {
  id: number;
  texto: string;
  autor: 'usuario' | 'atendente' | 'sistema';
  nomeAutor: string;
  data: string;
  anexos?: string[];
}

interface CategoriaFluxo {
  id: string;
  nome: string;
  icon: React.ReactNode;
  perguntas: PerguntaFluxo[];
}

interface PerguntaFluxo {
  id: string;
  texto: string;
  opcoes?: RespostaFluxo[];
  tipoResposta: 'opcoes' | 'texto' | 'sim_nao';
  proximoPasso?: string;
  acao?: string;
}

interface RespostaFluxo {
  texto: string;
  proximoPasso: string;
  acao?: string;
}

// ============================================
// STYLED COMPONENTS
// ============================================

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #F8FAFC;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// Header Section
const Header = styled.div`
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.5s ease-out;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #7C3AED;
  }
`;

const Subtitle = styled.p`
  color: #64748B;
  font-size: 0.95rem;
`;

// Stats Cards
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.5s ease-out 0.05s both;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div<{ color?: string }>`
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;

  .icon {
    width: 48px;
    height: 48px;
    background: ${({ color }) => color || '#7C3AED'}20;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${({ color }) => color || '#7C3AED'};
  }

  .info {
    flex: 1;
  }

  .value {
    font-size: 1.5rem;
    font-weight: 800;
    color: #0F172A;
  }

  .label {
    font-size: 0.75rem;
    color: #64748B;
  }
`;

// Main Layout
const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 1.5rem;
  animation: ${fadeInUp} 0.5s ease-out 0.1s both;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

// Sidebar (Lista de Tickets)
const Sidebar = styled.div`
  background: white;
  border-radius: 1rem;
  border: 1px solid #E2E8F0;
  overflow: hidden;
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #E2E8F0;
  background: #F8FAFC;

  h3 {
    font-size: 0.9rem;
    font-weight: 600;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #E2E8F0;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 0.8rem;
  }

  svg {
    color: #94A3B8;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const FilterChip = styled.button<{ active: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid ${({ active }) => active ? '#7C3AED' : '#E2E8F0'};
  background: ${({ active }) => active ? '#7C3AED20' : 'transparent'};
  color: ${({ active }) => active ? '#7C3AED' : '#64748B'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #7C3AED;
    color: #7C3AED;
  }
`;

const TicketList = styled.div`
  max-height: 600px;
  overflow-y: auto;
`;

const TicketItem = styled.div<{ active: boolean; status: string }>`
  padding: 1rem;
  border-bottom: 1px solid #E2E8F0;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active }) => active ? '#F8FAFC' : 'transparent'};
  border-left: 3px solid ${({ active, status }) => {
    if (!active) return 'transparent';
    switch(status) {
      case 'aberto': return '#EF4444';
      case 'em_andamento': return '#F59E0B';
      case 'resolvido': return '#10B981';
      default: return '#7C3AED';
    }
  }};

  &:hover {
    background: #F8FAFC;
  }

  .titulo {
    font-weight: 600;
    font-size: 0.85rem;
    color: #0F172A;
    margin-bottom: 0.25rem;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: #64748B;
    margin-bottom: 0.5rem;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.65rem;
    padding: 0.2rem 0.5rem;
    border-radius: 50px;
    background: ${({ status }) => {
      switch(status) {
        case 'aberto': return '#EF444420';
        case 'em_andamento': return '#F59E0B20';
        case 'aguardando': return '#3B82F620';
        case 'resolvido': return '#10B98120';
        default: return '#64748B20';
      }
    }};
    color: ${({ status }) => {
      switch(status) {
        case 'aberto': return '#EF4444';
        case 'em_andamento': return '#F59E0B';
        case 'aguardando': return '#3B82F6';
        case 'resolvido': return '#10B981';
        default: return '#64748B';
      }
    }};
  }
`;

// Chat Area
const ChatArea = styled.div`
  background: white;
  border-radius: 1rem;
  border: 1px solid #E2E8F0;
  display: flex;
  flex-direction: column;
  height: 700px;
`;

const ChatHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #E2E8F0;
  background: #F8FAFC;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #0F172A;
    }

    p {
      font-size: 0.75rem;
      color: #64748B;
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }
`;

const ActionIcon = styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: #64748B;
  transition: all 0.3s ease;

  &:hover {
    background: #7C3AED20;
    color: #7C3AED;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => isUser ? 'flex-end' : 'flex-start'};
  animation: ${fadeInUp} 0.3s ease;

  .message {
    max-width: 70%;
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    background: ${({ isUser }) => isUser ? '#7C3AED' : '#F1F5F9'};
    color: ${({ isUser }) => isUser ? 'white' : '#0F172A'};
    font-size: 0.85rem;
    line-height: 1.4;

    .autor {
      font-size: 0.7rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      opacity: 0.7;
    }

    .hora {
      font-size: 0.6rem;
      margin-top: 0.25rem;
      opacity: 0.6;
      text-align: right;
    }
  }
`;

const FluxoContainer = styled.div`
  background: #F8FAFC;
  border-radius: 0.75rem;
  padding: 1rem;
  margin: 0.5rem 0;
`;

const FluxoPergunta = styled.div`
  margin-bottom: 1rem;

  .pergunta-texto {
    font-weight: 600;
    color: #0F172A;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
  }
`;

const FluxoOpcoes = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FluxoOpcao = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: white;
  border: 1px solid #E2E8F0;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #7C3AED;
    background: #7C3AED10;
    color: #7C3AED;
  }
`;

const InputArea = styled.div`
  padding: 1rem;
  border-top: 1px solid #E2E8F0;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    font-size: 0.85rem;
    outline: none;

    &:focus {
      border-color: #7C3AED;
    }
  }

  button {
    background: #7C3AED;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #6D28D9;
      transform: scale(1.05);
    }
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #64748B;
  text-align: center;
  padding: 2rem;

  svg {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
`;

// ============================================
// DADOS MOCKADOS
// ============================================

const fluxoCategorias: CategoriaFluxo[] = [
  {
    id: 'duvida',
    nome: 'Dúvida sobre o sistema',
    icon: <FaQuestionCircle />,
    perguntas: [
      {
        id: '1',
        texto: 'Sobre qual módulo você tem dúvida?',
        tipoResposta: 'opcoes',
        opcoes: [
          { texto: 'Gestão de Membros', proximoPasso: 'membros' },
          { texto: 'Tesouraria e Split', proximoPasso: 'tesouraria' },
          { texto: 'Relatórios', proximoPasso: 'relatorios' },
          { texto: 'Certificados', proximoPasso: 'certificados' },
          { texto: 'Dashboard', proximoPasso: 'dashboard' }
        ]
      },
      {
        id: 'membros',
        texto: 'Qual sua dúvida sobre Gestão de Membros?',
        tipoResposta: 'opcoes',
        opcoes: [
          { texto: 'Como cadastrar um novo membro?', proximoPasso: 'video_tutorial', acao: 'enviar_tutorial' },
          { texto: 'Como gerar carteirinha?', proximoPasso: 'video_tutorial', acao: 'enviar_tutorial' },
          { texto: 'Como editar informações?', proximoPasso: 'video_tutorial', acao: 'enviar_tutorial' },
          { texto: 'Ajuda com aniversariantes', proximoPasso: 'video_tutorial', acao: 'enviar_tutorial' }
        ]
      }
    ]
  },
  {
    id: 'bug',
    nome: 'Reportar Bug/Erro',
    icon: <FaBug />,
    perguntas: [
      {
        id: '1',
        texto: 'Descreva o erro que está ocorrendo:',
        tipoResposta: 'texto',
        proximoPasso: 'encaminhar_suporte'
      }
    ]
  },
  {
    id: 'financeiro',
    nome: 'Questão Financeira',
    icon: <FaDollarSign />,
    perguntas: [
      {
        id: '1',
        texto: 'Qual o tipo de questão financeira?',
        tipoResposta: 'opcoes',
        opcoes: [
          { texto: 'Split de repasses', proximoPasso: 'split' },
          { texto: 'Dízimos e ofertas', proximoPasso: 'dizimos' },
          { texto: 'Relatórios financeiros', proximoPasso: 'relatorios_financeiros' },
          { texto: 'Nota fiscal', proximoPasso: 'nota_fiscal' }
        ]
      }
    ]
  },
  {
    id: 'relatorio',
    nome: 'Relatórios',
    icon: <FaChartLine />,
    perguntas: [
      {
        id: '1',
        texto: 'Sobre qual relatório você precisa de ajuda?',
        tipoResposta: 'opcoes',
        opcoes: [
          { texto: 'Relatório de dízimos', proximoPasso: 'enviar_relatorio' },
          { texto: 'Relatório patrimonial', proximoPasso: 'enviar_relatorio' },
          { texto: 'Relatório consolidado', proximoPasso: 'enviar_relatorio' }
        ]
      }
    ]
  },
  {
    id: 'suporte',
    nome: 'Suporte Técnico',
    icon: <FaWrench />,
    perguntas: [
      {
        id: '1',
        texto: 'Descreva o problema técnico:',
        tipoResposta: 'texto',
        proximoPasso: 'encaminhar_tecnico'
      }
    ]
  }
];

const mockTickets: Ticket[] = [
  {
    id: 1,
    titulo: 'Dúvida sobre split de dízimos',
    descricao: 'Como configurar o split para a sede regional?',
    status: 'em_andamento',
    prioridade: 'media',
    categoria: 'duvida',
    usuario: {
      id: 1,
      nome: 'Tiago Silva',
      email: 'tiago@igreja.org.br',
      igreja: 'IGREJA - Londrina',
      cargo: 'Pastor'
    },
    mensagens: [
      {
        id: 1,
        texto: 'Olá! Estou com dúvida sobre como configurar o split para a sede regional. Poderiam me ajudar?',
        autor: 'usuario',
        nomeAutor: 'Tiago Silva',
        data: '10/04/2026 09:30'
      },
      {
        id: 2,
        texto: 'Olá Tiago! Vou te ajudar com isso. Primeiro, acesse o módulo de Tesouraria > Configurações de Split. Lá você pode definir os percentuais para cada destino.',
        autor: 'atendente',
        nomeAutor: 'Ana Suporte',
        data: '10/04/2026 09:45'
      },
      {
        id: 3,
        texto: 'Encontrei! E para configurar apenas para uma igreja específica?',
        autor: 'usuario',
        nomeAutor: 'Tiago Silva',
        data: '10/04/2026 10:00'
      },
      {
        id: 4,
        texto: 'Sim! Na mesma tela, você pode selecionar "Configuração Personalizada" e escolher a igreja que deseja configurar separadamente.',
        autor: 'atendente',
        nomeAutor: 'Ana Suporte',
        data: '10/04/2026 10:15'
      }
    ],
    dataCriacao: '10/04/2026',
    dataAtualizacao: '10/04/2026 10:15'
  },
  {
    id: 2,
    titulo: 'Erro ao gerar certificado',
    descricao: 'Ao tentar gerar certificado de batismo, aparece erro',
    status: 'aberto',
    prioridade: 'alta',
    categoria: 'bug',
    usuario: {
      id: 2,
      nome: 'Luciana Santos',
      email: 'luciana@igreja.org.br',
      igreja: 'IGREJA - Londrina',
      cargo: 'Secretária'
    },
    mensagens: [
      {
        id: 1,
        texto: 'Olá! Estou tentando gerar um certificado de batismo, mas aparece a mensagem de erro "Falha ao gerar PDF".',
        autor: 'usuario',
        nomeAutor: 'Luciana Santos',
        data: '10/04/2026 14:00'
      }
    ],
    dataCriacao: '10/04/2026',
    dataAtualizacao: '10/04/2026 14:00'
  }
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const CRMFluxoGuiado: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [showFluxo, setShowFluxo] = useState(true);
  const [fluxoAtual, setFluxoAtual] = useState<CategoriaFluxo | null>(null);
  const [perguntaAtual, setPerguntaAtual] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Estatísticas
  const stats = {
    total: tickets.length,
    abertos: tickets.filter(t => t.status === 'aberto').length,
    emAndamento: tickets.filter(t => t.status === 'em_andamento').length,
    resolvidos: tickets.filter(t => t.status === 'resolvido').length
  };

  // Filtrar tickets
  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === 'todos' || ticket.status === filterStatus;
    const matchesSearch = ticket.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.usuario.nome.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Scroll para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedTicket?.mensagens]);

  // Iniciar fluxo de atendimento
  const iniciarFluxo = (categoria: string) => {
    const fluxo = fluxoCategorias.find(f => f.id === categoria);
    if (fluxo) {
      setFluxoAtual(fluxo);
      setPerguntaAtual(fluxo.perguntas[0]);
    }
  };

  // Processar resposta do fluxo
  const processarResposta = (resposta: string, opcao?: RespostaFluxo) => {
    if (opcao?.acao === 'enviar_tutorial') {
      // Enviar mensagem automática com tutorial
      const mensagemSistema: Mensagem = {
        id: Date.now(),
        texto: `📚 Tutorial enviado: ${opcao.texto}\n\nAcesse o link: https://berionigrejas.com.br/tutoriais`,
        autor: 'sistema',
        nomeAutor: 'Berion Bot',
        data: new Date().toLocaleString()
      };
      
      if (selectedTicket) {
        const updatedTicket = {
          ...selectedTicket,
          mensagens: [...selectedTicket.mensagens, mensagemSistema]
        };
        setSelectedTicket(updatedTicket);
        setTickets(tickets.map(t => t.id === updatedTicket.id ? updatedTicket : t));
      }
      setFluxoAtual(null);
      setPerguntaAtual(null);
    }
  };

  // Enviar mensagem
  const enviarMensagem = () => {
    if (!newMessage.trim() || !selectedTicket) return;

    const mensagem: Mensagem = {
      id: Date.now(),
      texto: newMessage,
      autor: 'usuario',
      nomeAutor: selectedTicket.usuario.nome,
      data: new Date().toLocaleString()
    };

    const updatedTicket = {
      ...selectedTicket,
      mensagens: [...selectedTicket.mensagens, mensagem],
      dataAtualizacao: new Date().toLocaleString()
    };

    setSelectedTicket(updatedTicket);
    setTickets(tickets.map(t => t.id === updatedTicket.id ? updatedTicket : t));
    setNewMessage('');
  };

  // Abrir novo ticket
  const novoTicket = () => {
    const novoTicket: Ticket = {
      id: Date.now(),
      titulo: 'Novo atendimento',
      descricao: '',
      status: 'aberto',
      prioridade: 'media',
      categoria: 'duvida',
      usuario: {
        id: 999,
        nome: 'Usuário Atual',
        email: 'usuario@email.com',
        igreja: 'Minha Igreja',
        cargo: 'Pastor'
      },
      mensagens: [],
      dataCriacao: new Date().toLocaleDateString(),
      dataAtualizacao: new Date().toLocaleString()
    };
    setTickets([novoTicket, ...tickets]);
    setSelectedTicket(novoTicket);
    setShowFluxo(true);
  };

  return (
    <Container>
      <ContentWrapper>
        {/* Header */}
        <Header>
          <Title>
            <FaHeadset /> CRM com Fluxo Guiado
          </Title>
          <Subtitle>
            Atendimento inteligente com triagem automática e fluxo de perguntas direcionadas
          </Subtitle>
        </Header>

        {/* Stats Cards */}
        <StatsGrid>
          <StatCard color="#7C3AED">
            <div className="icon"><FaTicketAlt /></div>
            <div className="info">
              <div className="value">{stats.total}</div>
              <div className="label">Total de Tickets</div>
            </div>
          </StatCard>
          <StatCard color="#EF4444">
            <div className="icon"><FaExclamationTriangle /></div>
            <div className="info">
              <div className="value">{stats.abertos}</div>
              <div className="label">Em Aberto</div>
            </div>
          </StatCard>
          <StatCard color="#F59E0B">
            <div className="icon"><FaSpinner /></div>
            <div className="info">
              <div className="value">{stats.emAndamento}</div>
              <div className="label">Em Andamento</div>
            </div>
          </StatCard>
          <StatCard color="#10B981">
            <div className="icon"><FaCheckCircle /></div>
            <div className="info">
              <div className="value">{stats.resolvidos}</div>
              <div className="label">Resolvidos</div>
            </div>
          </StatCard>
        </StatsGrid>

        {/* Main Layout */}
        <MainLayout>
          {/* Sidebar */}
          <Sidebar>
            <SidebarHeader>
              <h3>Tickets de Suporte</h3>
              <SearchInput>
                <FaSearch size={14} />
                <input 
                  type="text" 
                  placeholder="Buscar tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </SearchInput>
              <FilterButtons>
                <FilterChip active={filterStatus === 'todos'} onClick={() => setFilterStatus('todos')}>
                  Todos
                </FilterChip>
                <FilterChip active={filterStatus === 'aberto'} onClick={() => setFilterStatus('aberto')}>
                  Em Aberto
                </FilterChip>
                <FilterChip active={filterStatus === 'em_andamento'} onClick={() => setFilterStatus('em_andamento')}>
                  Em Andamento
                </FilterChip>
                <FilterChip active={filterStatus === 'resolvido'} onClick={() => setFilterStatus('resolvido')}>
                  Resolvidos
                </FilterChip>
              </FilterButtons>
            </SidebarHeader>
            <TicketList>
              {filteredTickets.map(ticket => (
                <TicketItem 
                  key={ticket.id}
                  active={selectedTicket?.id === ticket.id}
                  status={ticket.status}
                  onClick={() => setSelectedTicket(ticket)}
                >
                  <div className="titulo">{ticket.titulo}</div>
                  <div className="meta">
                    <span>{ticket.usuario.nome}</span>
                    <span>{ticket.dataCriacao}</span>
                  </div>
                  <div className="status-badge">
                    {ticket.status === 'aberto' && <FaExclamationTriangle size={10} />}
                    {ticket.status === 'em_andamento' && <FaSpinner size={10} />}
                    {ticket.status === 'resolvido' && <FaCheckCircle size={10} />}
                    {ticket.status === 'aberto' && 'Aberto'}
                    {ticket.status === 'em_andamento' && 'Em andamento'}
                    {ticket.status === 'resolvido' && 'Resolvido'}
                  </div>
                </TicketItem>
              ))}
            </TicketList>
            <div style={{ padding: '1rem' }}>
              <FilterChip active={false} onClick={novoTicket} style={{ width: '100%', textAlign: 'center' }}>
                <FaPlus /> Novo Ticket
              </FilterChip>
            </div>
          </Sidebar>

          {/* Chat Area */}
          <ChatArea>
            {selectedTicket ? (
              <>
                <ChatHeader>
                  <div className="info">
                    <h3>{selectedTicket.titulo}</h3>
                    <p>
                      {selectedTicket.usuario.nome} • {selectedTicket.usuario.igreja} • 
                      {selectedTicket.status === 'aberto' && ' Aguardando atendimento'}
                      {selectedTicket.status === 'em_andamento' && ' Em atendimento'}
                      {selectedTicket.status === 'resolvido' && ' Resolvido'}
                    </p>
                  </div>
                  <div className="actions">
                    <ActionIcon><FaArchive /></ActionIcon>
                    <ActionIcon><FaTrash /></ActionIcon>
                  </div>
                </ChatHeader>

                <MessagesContainer>
                  {selectedTicket.mensagens.map(msg => (
                    <MessageBubble key={msg.id} isUser={msg.autor === 'usuario'}>
                      <div className="message">
                        {msg.autor === 'sistema' && <div className="autor">🤖 Berion Bot</div>}
                        {msg.autor === 'atendente' && <div className="autor">👩‍💼 {msg.nomeAutor}</div>}
                        {msg.autor === 'usuario' && <div className="autor">👤 {msg.nomeAutor}</div>}
                        <div>{msg.texto}</div>
                        <div className="hora">{msg.data}</div>
                      </div>
                    </MessageBubble>
                  ))}
                  
                  {/* Fluxo Guiado */}
                  {showFluxo && selectedTicket.status === 'aberto' && (
                    <FluxoContainer>
                      <FluxoPergunta>
                        <div className="pergunta-texto">
                          🤖 Olá! Sou o assistente virtual do Berion Igrejas.
                          <br />Selecione uma categoria para direcionarmos seu atendimento:
                        </div>
                        <FluxoOpcoes>
                          {fluxoCategorias.map(cat => (
                            <FluxoOpcao key={cat.id} onClick={() => iniciarFluxo(cat.id)}>
                              {cat.icon} {cat.nome}
                            </FluxoOpcao>
                          ))}
                        </FluxoOpcoes>
                      </FluxoPergunta>
                    </FluxoContainer>
                  )}

                  {fluxoAtual && perguntaAtual && (
                    <FluxoContainer>
                      <FluxoPergunta>
                        <div className="pergunta-texto">
                          🤖 {perguntaAtual.texto}
                        </div>
                        {perguntaAtual.tipoResposta === 'opcoes' && (
                          <FluxoOpcoes>
                            {perguntaAtual.opcoes.map((opcao: RespostaFluxo) => (
                              <FluxoOpcao 
                                key={opcao.texto} 
                                onClick={() => processarResposta(opcao.texto, opcao)}
                              >
                                {opcao.texto}
                              </FluxoOpcao>
                            ))}
                          </FluxoOpcoes>
                        )}
                        {perguntaAtual.tipoResposta === 'texto' && (
                          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <input 
                              type="text" 
                              placeholder="Digite sua resposta..."
                              style={{ flex: 1, padding: '0.5rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}
                            />
                            <button style={{ padding: '0.5rem 1rem', background: '#7C3AED', color: 'white', border: 'none', borderRadius: '8px' }}>
                              Enviar
                            </button>
                          </div>
                        )}
                      </FluxoPergunta>
                    </FluxoContainer>
                  )}
                  
                  <div ref={messagesEndRef} />
                </MessagesContainer>

                <InputArea>
                  <input 
                    type="text" 
                    placeholder="Digite sua mensagem..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
                  />
                  <button onClick={enviarMensagem}>
                    <FaPaperPlane />
                  </button>
                </InputArea>
              </>
            ) : (
              <EmptyState>
                <FaComments />
                <h3>Nenhum ticket selecionado</h3>
                <p>Selecione um ticket na lista ou crie um novo atendimento</p>
                <FilterChip active={false} onClick={novoTicket} style={{ marginTop: '1rem' }}>
                  <FaPlus /> Novo Ticket
                </FilterChip>
              </EmptyState>
            )}
          </ChatArea>
        </MainLayout>
      </ContentWrapper>
    </Container>
  );
};

export default CRMFluxoGuiado;