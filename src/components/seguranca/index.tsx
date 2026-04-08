import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaShieldAlt, 
  FaUserShield, 
  FaUsers, 
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaSave,
  FaPlus,
  FaTrash,
  FaSearch,
  FaHistory,
  FaDownload,
  FaBuilding,
  FaChurch,
  FaHandHoldingHeart,
  FaFileAlt,
  FaUserTie,
  FaUserCheck,
  FaUserTimes
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

// ============================================
// TIPOS
// ============================================

interface Usuario {
  id: number;
  nome: string;
  email: string;
  cargo: string;
  igrejaId: number;
  igrejaNome: string;
  perfis: string[];
  permissoes: string[];
  status: 'ativo' | 'inativo' | 'pendente';
  ultimoAcesso: string;
  criadoEm: string;
}

interface Perfil {
  id: string;
  nome: string;
  descricao: string;
  icone: React.ReactNode;
  permissoes: string[];
  usuariosCount: number;
}

interface AuditoriaLog {
  id: number;
  usuario: string;
  acao: string;
  detalhes: string;
  ip: string;
  data: string;
  status: 'sucesso' | 'falha';
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

const TabsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #E2E8F0;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.5s ease-out 0.05s both;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ active }) => active ? '#7C3AED' : '#64748B'};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #7C3AED;
    transform: ${({ active }) => active ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #7C3AED;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.5s ease-out 0.1s both;

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

const PerfisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.5s ease-out 0.15s both;
`;

const PerfilCard = styled.div`
  background: white;
  border-radius: 1rem;
  border: 1px solid #E2E8F0;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const PerfilHeader = styled.div<{ color?: string }>`
  padding: 1rem;
  background: linear-gradient(135deg, ${({ color }) => color || '#7C3AED'}20, transparent);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #E2E8F0;

  .icon {
    width: 50px;
    height: 50px;
    background: ${({ color }) => color || '#7C3AED'};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
  }

  .info {
    flex: 1;

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
`;

const PerfilBody = styled.div`
  padding: 1rem;
`;

const PermissaoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const PermissaoBadge = styled.span`
  padding: 0.25rem 0.5rem;
  background: #7C3AED10;
  border-radius: 4px;
  font-size: 0.7rem;
  color: #7C3AED;
`;

const PerfilFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #E2E8F0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UsuariosCount = styled.span`
  font-size: 0.75rem;
  color: #64748B;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: #64748B;
  transition: all 0.3s ease;

  &:hover {
    color: #7C3AED;
  }
`;

const TableSection = styled.div`
  background: white;
  border-radius: 1rem;
  border: 1px solid #E2E8F0;
  overflow-x: auto;
  animation: ${fadeInUp} 0.5s ease-out 0.2s both;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #E2E8F0;
  flex-wrap: wrap;
  gap: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #0F172A;
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #F8FAFC;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #E2E8F0;

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 0.85rem;
    width: 250px;

    &::placeholder {
      color: #94A3B8;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #E2E8F0;
  }

  th {
    background: #F8FAFC;
    font-weight: 600;
    color: #475569;
    font-size: 0.8rem;
  }

  td {
    font-size: 0.85rem;
    color: #0F172A;
  }
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;

  ${({ status }) => {
    switch (status) {
      case 'ativo':
        return `
          background: #10B98120;
          color: #10B981;
        `;
      case 'inativo':
        return `
          background: #EF444420;
          color: #EF4444;
        `;
      case 'pendente':
        return `
          background: #F59E0B20;
          color: #F59E0B;
        `;
      default:
        return `
          background: #64748B20;
          color: #64748B;
        `;
    }
  }}
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeInUp} 0.3s ease;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 1rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #E2E8F0;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0F172A;
  }

  button {
    background: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #64748B;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-weight: 600;
    font-size: 0.85rem;
    color: #0F172A;
    margin-bottom: 0.25rem;
  }

  input, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    font-size: 0.9rem;

    &:focus {
      outline: none;
      border-color: #7C3AED;
    }
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid #E2E8F0;
  margin-top: 1rem;
`;

const ModalButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant }) => variant === 'primary' ? `
    background: linear-gradient(135deg, #7C3AED, #C026D3);
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
    }
  ` : `
    background: transparent;
    color: #64748B;
    border: 1px solid #E2E8F0;
    
    &:hover {
      border-color: #7C3AED;
      color: #7C3AED;
    }
  `}
`;

// ============================================
// DADOS COMPLETAMENTE GENÉRICOS
// ============================================

const perfisMock: Perfil[] = [
  {
    id: 'admin_master',
    nome: 'Administrador Master',
    descricao: 'Acesso total ao sistema, pode configurar todas as permissões',
    icone: <FaUserShield />,
    permissoes: ['*'],
    usuariosCount: 1
  },
  {
    id: 'admin_regional',
    nome: 'Administrador Regional',
    descricao: 'Gerencia igrejas da região, aprova relatórios',
    icone: <FaBuilding />,
    permissoes: ['igrejas.visualizar', 'relatorios.aprovar', 'usuarios.gerenciar'],
    usuariosCount: 3
  },
  {
    id: 'lider_regional',
    nome: 'Líder Regional',
    descricao: 'Visão regional de múltiplas igrejas',
    icone: <FaUserTie />,
    permissoes: ['igrejas.visualizar_regional', 'relatorios.visualizar', 'membros.visualizar'],
    usuariosCount: 5
  },
  {
    id: 'lider_local',
    nome: 'Líder Local',
    descricao: 'Gerencia sua igreja local, aprova relatórios',
    icone: <FaChurch />,
    permissoes: ['membros.gerenciar', 'financeiro.visualizar', 'relatorios.criar', 'relatorios.aprovar'],
    usuariosCount: 12
  },
  {
    id: 'financeiro',
    nome: 'Gestor Financeiro',
    descricao: 'Gerencia finanças da igreja local',
    icone: <FaHandHoldingHeart />,
    permissoes: ['financeiro.gerenciar', 'relatorios.financeiros', 'relatorios.aprovar_financeiro'],
    usuariosCount: 8
  },
  {
    id: 'secretaria',
    nome: 'Secretaria',
    descricao: 'Cadastro de membros e documentos',
    icone: <FaFileAlt />,
    permissoes: ['membros.cadastrar', 'membros.editar', 'certificados.emitir'],
    usuariosCount: 15
  }
];

const usuariosMock: Usuario[] = [
  {
    id: 1,
    nome: 'CARLOS ALBERTO SILVA',
    email: 'carlos.silva@igreja.org',
    cargo: 'Líder Local',
    igrejaId: 1,
    igrejaNome: 'COMUNIDADE DA FÉ',
    perfis: ['lider_local'],
    permissoes: [],
    status: 'ativo',
    ultimoAcesso: '10/04/2026 09:30',
    criadoEm: '01/01/2025'
  },
  {
    id: 2,
    nome: 'MARIA FERNANDA COSTA',
    email: 'maria.costa@igreja.org',
    cargo: 'Gestora Financeira',
    igrejaId: 1,
    igrejaNome: 'COMUNIDADE DA FÉ',
    perfis: ['financeiro'],
    permissoes: [],
    status: 'ativo',
    ultimoAcesso: '10/04/2026 08:15',
    criadoEm: '01/01/2025'
  },
  {
    id: 3,
    nome: 'ROBERTO ALMEIDA',
    email: 'roberto.almeida@igreja.org',
    cargo: 'Líder Regional',
    igrejaId: 0,
    igrejaNome: 'REGIÃO SUL',
    perfis: ['lider_regional'],
    permissoes: [],
    status: 'ativo',
    ultimoAcesso: '09/04/2026 14:20',
    criadoEm: '15/01/2025'
  },
  {
    id: 4,
    nome: 'PATRICIA OLIVEIRA LIMA',
    email: 'patricia.lima@igreja.org',
    cargo: 'Secretária',
    igrejaId: 1,
    igrejaNome: 'COMUNIDADE DA FÉ',
    perfis: ['secretaria'],
    permissoes: [],
    status: 'pendente',
    ultimoAcesso: '05/04/2026 10:00',
    criadoEm: '20/02/2025'
  },
  {
    id: 5,
    nome: 'FERNANDO HENRIQUE SANTOS',
    email: 'fernando.santos@igreja.org',
    cargo: 'Administrador Regional',
    igrejaId: 0,
    igrejaNome: 'REGIÃO SUL',
    perfis: ['admin_regional'],
    permissoes: [],
    status: 'ativo',
    ultimoAcesso: '08/04/2026 11:45',
    criadoEm: '10/02/2025'
  },
  {
    id: 6,
    nome: 'ANA BEATRIZ FERREIRA',
    email: 'ana.ferreira@igreja.org',
    cargo: 'Membro',
    igrejaId: 1,
    igrejaNome: 'COMUNIDADE DA FÉ',
    perfis: ['membro'],
    permissoes: [],
    status: 'ativo',
    ultimoAcesso: '07/04/2026 16:30',
    criadoEm: '01/03/2025'
  }
];

const logsMock: AuditoriaLog[] = [
  {
    id: 1,
    usuario: 'CARLOS ALBERTO SILVA',
    acao: 'Aprovou relatório mensal',
    detalhes: 'Relatório #01 - Abril 2026',
    ip: '192.168.1.100',
    data: '10/04/2026 09:35',
    status: 'sucesso'
  },
  {
    id: 2,
    usuario: 'MARIA FERNANDA COSTA',
    acao: 'Registrou contribuição',
    detalhes: 'Valor R$ 1.000,00 - Membro: JOAO PEDRO',
    ip: '192.168.1.101',
    data: '10/04/2026 08:20',
    status: 'sucesso'
  },
  {
    id: 3,
    usuario: 'ROBERTO ALMEIDA',
    acao: 'Configurou repartição',
    detalhes: 'Igreja: COMUNIDADE DA FÉ - Percentual: 15%',
    ip: '192.168.1.102',
    data: '09/04/2026 14:30',
    status: 'sucesso'
  },
  {
    id: 4,
    usuario: 'PATRICIA OLIVEIRA LIMA',
    acao: 'Tentativa de acesso',
    detalhes: 'Credenciais inválidas',
    ip: '192.168.1.103',
    data: '08/04/2026 11:45',
    status: 'falha'
  },
  {
    id: 5,
    usuario: 'FERNANDO HENRIQUE SANTOS',
    acao: 'Cadastrou nova igreja',
    detalhes: 'Igreja: COMUNIDADE DA ESPERANÇA',
    ip: '192.168.1.104',
    data: '07/04/2026 15:20',
    status: 'sucesso'
  }
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const SegurancaRBAC: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'perfis' | 'usuarios' | 'auditoria'>('perfis');
  const [perfis, setPerfis] = useState<Perfil[]>(perfisMock);
  const [usuarios, setUsuarios] = useState<Usuario[]>(usuariosMock);
  const [logs, setLogs] = useState<AuditoriaLog[]>(logsMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);

  const stats = {
    totalUsuarios: usuarios.length,
    ativos: usuarios.filter(u => u.status === 'ativo').length,
    perfis: perfis.length,
    logsHoje: logs.filter(l => l.data.includes('10/04/2026')).length
  };

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.igrejaNome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditUsuario = (usuario: Usuario) => {
    setSelectedUsuario(usuario);
    setShowModal(true);
  };

  const handleSaveUsuario = () => {
    if (selectedUsuario) {
      setUsuarios(usuarios.map(u => u.id === selectedUsuario.id ? selectedUsuario : u));
    }
    setShowModal(false);
    setSelectedUsuario(null);
  };

  const toggleStatus = (usuario: Usuario) => {
    const newStatus = usuario.status === 'ativo' ? 'inativo' : 'ativo';
    setUsuarios(usuarios.map(u => u.id === usuario.id ? { ...u, status: newStatus } : u));
  };

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>
            <FaShieldAlt /> Segurança e Controle de Acesso
          </Title>
          <Subtitle>
            Controle de acesso baseado em perfis, gestão de usuários e auditoria completa
          </Subtitle>
        </Header>

        <StatsGrid>
          <StatCard color="#7C3AED">
            <div className="icon"><FaUsers /></div>
            <div className="info">
              <div className="value">{stats.totalUsuarios}</div>
              <div className="label">Total de Usuários</div>
            </div>
          </StatCard>
          <StatCard color="#10B981">
            <div className="icon"><FaUserCheck /></div>
            <div className="info">
              <div className="value">{stats.ativos}</div>
              <div className="label">Usuários Ativos</div>
            </div>
          </StatCard>
          <StatCard color="#F59E0B">
            <div className="icon"><FaUserShield /></div>
            <div className="info">
              <div className="value">{stats.perfis}</div>
              <div className="label">Perfis de Acesso</div>
            </div>
          </StatCard>
          <StatCard color="#EF4444">
            <div className="icon"><FaHistory /></div>
            <div className="info">
              <div className="value">{stats.logsHoje}</div>
              <div className="label">Ações Hoje</div>
            </div>
          </StatCard>
        </StatsGrid>

        <TabsContainer>
          <Tab active={activeTab === 'perfis'} onClick={() => setActiveTab('perfis')}>
            <FaUserShield /> Perfis de Acesso
          </Tab>
          <Tab active={activeTab === 'usuarios'} onClick={() => setActiveTab('usuarios')}>
            <FaUsers /> Usuários
          </Tab>
          <Tab active={activeTab === 'auditoria'} onClick={() => setActiveTab('auditoria')}>
            <FaHistory /> Auditoria
          </Tab>
        </TabsContainer>

        {activeTab === 'perfis' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
              <ActionButton style={{ background: '#7C3AED', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px' }}>
                <FaPlus /> Novo Perfil
              </ActionButton>
            </div>
            <PerfisGrid>
              {perfis.map(perfil => (
                <PerfilCard key={perfil.id}>
                  <PerfilHeader color="#7C3AED">
                    <div className="icon">{perfil.icone}</div>
                    <div className="info">
                      <h3>{perfil.nome}</h3>
                      <p>{perfil.descricao}</p>
                    </div>
                  </PerfilHeader>
                  <PerfilBody>
                    <PermissaoList>
                      {perfil.permissoes.slice(0, 5).map((perm, idx) => (
                        <PermissaoBadge key={idx}>{perm}</PermissaoBadge>
                      ))}
                      {perfil.permissoes.length > 5 && (
                        <PermissaoBadge>+{perfil.permissoes.length - 5}</PermissaoBadge>
                      )}
                    </PermissaoList>
                  </PerfilBody>
                  <PerfilFooter>
                    <UsuariosCount>{perfil.usuariosCount} usuários</UsuariosCount>
                    <div>
                      <ActionButton><FaEdit /></ActionButton>
                      <ActionButton><FaTrash /></ActionButton>
                    </div>
                  </PerfilFooter>
                </PerfilCard>
              ))}
            </PerfisGrid>
          </>
        )}

        {activeTab === 'usuarios' && (
          <TableSection>
            <TableHeader>
              <h3>Lista de Usuários</h3>
              <SearchInput>
                <FaSearch />
                <input 
                  type="text" 
                  placeholder="Buscar usuário..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </SearchInput>
            </TableHeader>
            <Table>
              <thead>
                <tr>
                  <th>Usuário</th>
                  <th>Cargo</th>
                  <th>Igreja/Região</th>
                  <th>Perfil</th>
                  <th>Status</th>
                  <th>Último Acesso</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsuarios.map(usuario => (
                  <tr key={usuario.id}>
                    <td>
                      <strong>{usuario.nome}</strong><br />
                      <span style={{ fontSize: '0.7rem', color: '#64748B' }}>{usuario.email}</span>
                    </td>
                    <td>{usuario.cargo}</td>
                    <td>{usuario.igrejaNome}</td>
                    <td>
                      {usuario.perfis.map(perfilId => {
                        const perfil = perfis.find(p => p.id === perfilId);
                        return (
                          <PermissaoBadge key={perfilId} style={{ display: 'inline-block', marginRight: '0.25rem' }}>
                            {perfil?.nome || perfilId}
                          </PermissaoBadge>
                        );
                      })}
                    </td>
                    <td>
                      <StatusBadge status={usuario.status}>
                        {usuario.status === 'ativo' && <FaCheckCircle size={10} />}
                        {usuario.status === 'inativo' && <FaTimesCircle size={10} />}
                        {usuario.status === 'pendente' && <FaUserTimes size={10} />}
                        {usuario.status === 'ativo' ? 'Ativo' : usuario.status === 'inativo' ? 'Inativo' : 'Pendente'}
                      </StatusBadge>
                    </td>
                    <td>{usuario.ultimoAcesso}</td>
                    <td>
                      <ActionButton onClick={() => handleEditUsuario(usuario)}><FaEdit /></ActionButton>
                      <ActionButton onClick={() => toggleStatus(usuario)}>
                        {usuario.status === 'ativo' ? <FaUserTimes /> : <FaUserCheck />}
                      </ActionButton>
                      <ActionButton><FaTrash /></ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableSection>
        )}

        {activeTab === 'auditoria' && (
          <TableSection>
            <TableHeader>
              <h3>Registro de Auditoria</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <SearchInput>
                  <FaSearch />
                  <input type="text" placeholder="Filtrar ações..." />
                </SearchInput>
                <ActionButton><FaDownload /> Exportar</ActionButton>
              </div>
            </TableHeader>
            <Table>
              <thead>
                <tr>
                  <th>Data/Hora</th>
                  <th>Usuário</th>
                  <th>Ação</th>
                  <th>Detalhes</th>
                  <th>Endereço IP</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                {logs.map(log => (
                  <tr key={log.id}>
                    <td>{log.data}</td>
                    <td><strong>{log.usuario}</strong></td>
                    <td>{log.acao}</td>
                    <td style={{ fontSize: '0.8rem', color: '#64748B' }}>{log.detalhes}</td>
                    <td>{log.ip}</td>
                    <td>
                      <StatusBadge status={log.status === 'sucesso' ? 'ativo' : 'inativo'}>
                        {log.status === 'sucesso' ? <FaCheckCircle size={10} /> : <FaTimesCircle size={10} />}
                        {log.status === 'sucesso' ? 'Sucesso' : 'Falha'}
                      </StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableSection>
        )}

        {showModal && selectedUsuario && (
          <ModalOverlay onClick={() => setShowModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <h2>Editar Usuário</h2>
                <button onClick={() => setShowModal(false)}>✕</button>
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <label>Nome Completo</label>
                  <input 
                    type="text" 
                    value={selectedUsuario.nome}
                    onChange={(e) => setSelectedUsuario({ ...selectedUsuario, nome: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <label>E-mail</label>
                  <input 
                    type="email" 
                    value={selectedUsuario.email}
                    onChange={(e) => setSelectedUsuario({ ...selectedUsuario, email: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Cargo</label>
                  <input 
                    type="text" 
                    value={selectedUsuario.cargo}
                    onChange={(e) => setSelectedUsuario({ ...selectedUsuario, cargo: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Perfis de Acesso</label>
                  <select 
                    multiple 
                    value={selectedUsuario.perfis}
                    onChange={(e) => {
                      const values = Array.from(e.target.selectedOptions, option => option.value);
                      setSelectedUsuario({ ...selectedUsuario, perfis: values });
                    }}
                  >
                    {perfis.map(perfil => (
                      <option key={perfil.id} value={perfil.id}>{perfil.nome}</option>
                    ))}
                  </select>
                  <small style={{ color: '#64748B', fontSize: '0.7rem' }}>Segure Ctrl para selecionar múltiplos perfis</small>
                </FormGroup>
                <FormGroup>
                  <label>Status</label>
                  <select 
                    value={selectedUsuario.status}
                    onChange={(e) => setSelectedUsuario({ ...selectedUsuario, status: e.target.value as any })}
                  >
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                    <option value="pendente">Pendente</option>
                  </select>
                </FormGroup>
                <ModalActions>
                  <ModalButton variant="secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                  </ModalButton>
                  <ModalButton variant="primary" onClick={handleSaveUsuario}>
                    <FaSave /> Salvar
                  </ModalButton>
                </ModalActions>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default SegurancaRBAC;