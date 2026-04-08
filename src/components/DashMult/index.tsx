import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaChurch, 
  FaUsers, 
  FaHandHoldingHeart, 
  FaChartLine, 
  FaMoneyBillWave,
  FaEye,
  FaDownload,
  FaFilter,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowUp,
  FaArrowDown,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaBuilding,
  FaUserTie,
  FaGlobe
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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ============================================
// TIPOS
// ============================================

interface Igreja {
  id: number;
  nome: string;
  cidade: string;
  estado: string;
  pastor: string;
  membrosAtivos: number;
  dizimosMes: number;
  ofertasMes: number;
  totalEntradas: number;
  totalSaidas: number;
  saldo: number;
  relatorioStatus: 'enviado' | 'pendente' | 'atrasado';
  ultimoRelatorio: string;
  repassePendente: boolean;
  percentualSede: number;
  percentualRegional: number;
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

// Filters Section
const FiltersBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 0.5s ease-out 0.1s both;
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background: white;
  color: #475569;
  font-size: 0.85rem;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #7C3AED;
  }
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #F8FAFC;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;

  input {
    padding: 0.5rem;
    border: 1px solid #E2E8F0;
    border-radius: 6px;
    font-size: 0.85rem;
  }
`;

const ExportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #7C3AED;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6D28D9;
    transform: translateY(-2px);
  }
`;

// Stats Cards
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.5s ease-out 0.2s both;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #7C3AED20, #C026D320);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #7C3AED;
  }

  .value {
    font-size: 1.8rem;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 0.25rem;
  }

  .label {
    color: #64748B;
    font-size: 0.85rem;
  }

  .trend {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: #10B981;
  }
`;

// Charts Section
const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.5s ease-out 0.3s both;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #0F172A;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ChartBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ChartBarItem = styled.div`
  .label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
    font-size: 0.8rem;
    color: #64748B;
  }

  .bar {
    height: 8px;
    background: #E2E8F0;
    border-radius: 4px;
    overflow: hidden;
  }

  .fill {
    height: 100%;
    background: linear-gradient(90deg, #7C3AED, #C026D3);
    border-radius: 4px;
    transition: width 0.5s ease;
  }
`;

// Igrejas Table
const TableSection = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;
  overflow-x: auto;
  animation: ${fadeInUp} 0.5s ease-out 0.4s both;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #E2E8F0;
  flex-wrap: wrap;
  gap: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #0F172A;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  width: 250px;
  font-size: 0.85rem;

  &:focus {
    outline: none;
    border-color: #7C3AED;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem 1.5rem;
    text-align: left;
    border-bottom: 1px solid #E2E8F0;
  }

  th {
    background: #F8FAFC;
    font-weight: 600;
    color: #475569;
    font-size: 0.85rem;
    cursor: pointer;
    user-select: none;

    &:hover {
      color: #7C3AED;
    }
  }

  td {
    font-size: 0.85rem;
    color: #0F172A;
  }

  tr:hover {
    background: #F8FAFC;
  }
`;

const StatusBadge = styled.span<{ status: 'enviado' | 'pendente' | 'atrasado' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;

  ${({ status }) => {
    switch (status) {
      case 'enviado':
        return `
          background: #10B98120;
          color: #10B981;
        `;
      case 'pendente':
        return `
          background: #F59E0B20;
          color: #F59E0B;
        `;
      case 'atrasado':
        return `
          background: #EF444420;
          color: #EF4444;
        `;
    }
  }}
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #7C3AED;
  cursor: pointer;
  padding: 0.25rem;
  margin: 0 0.25rem;
  transition: all 0.3s ease;

  &:hover {
    color: #C026D3;
    transform: scale(1.1);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid #E2E8F0;
`;

const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ active }) => active ? '#7C3AED' : '#E2E8F0'};
  background: ${({ active }) => active ? '#7C3AED' : 'white'};
  color: ${({ active }) => active ? 'white' : '#475569'};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #7C3AED;
    color: ${({ active }) => active ? 'white' : '#7C3AED'};
  }
`;

// ============================================
// DADOS MOCKADOS
// ============================================

const mockIgrejas: Igreja[] = [
  {
    id: 1,
    nome: 'IGREJA - Londrina - PR',
    cidade: 'Londrina',
    estado: 'PR',
    pastor: 'João Silva',
    membrosAtivos: 147,
    dizimosMes: 12500,
    ofertasMes: 3400,
    totalEntradas: 15900,
    totalSaidas: 12450,
    saldo: 3450,
    relatorioStatus: 'enviado',
    ultimoRelatorio: '2026-03-31',
    repassePendente: false,
    percentualSede: 15,
    percentualRegional: 5
  },
  {
    id: 2,
    nome: 'IGREJA - Florianópolis - SC',
    cidade: 'Florianópolis',
    estado: 'SC',
    pastor: 'Geraldo Gomes',
    membrosAtivos: 89,
    dizimosMes: 7800,
    ofertasMes: 2100,
    totalEntradas: 9900,
    totalSaidas: 8900,
    saldo: 1000,
    relatorioStatus: 'pendente',
    ultimoRelatorio: '2026-02-28',
    repassePendente: true,
    percentualSede: 25,
    percentualRegional: 5
  },
  {
    id: 3,
    nome: 'IGREJA - MANAUS - AM',
    cidade: 'MANAUS',
    estado: 'AM',
    pastor: 'Carlos Alberto',
    membrosAtivos: 234,
    dizimosMes: 18900,
    ofertasMes: 5600,
    totalEntradas: 24500,
    totalSaidas: 19800,
    saldo: 4700,
    relatorioStatus: 'enviado',
    ultimoRelatorio: '2026-03-30',
    repassePendente: false,
    percentualSede: 15,
    percentualRegional: 5
  },
  {
    id: 4,
    nome: 'IGREJA - SÃO PAULO - SP',
    cidade: 'São Paulo',
    estado: 'SP',
    pastor: 'Ricardo Santos',
    membrosAtivos: 312,
    dizimosMes: 25600,
    ofertasMes: 7200,
    totalEntradas: 32800,
    totalSaidas: 28900,
    saldo: 3900,
    relatorioStatus: 'atrasado',
    ultimoRelatorio: '2026-01-15',
    repassePendente: true,
    percentualSede: 15,
    percentualRegional: 5
  },
  {
    id: 5,
    nome: 'IGREJA - RECIFE - PE',
    cidade: 'Recife',
    estado: 'PE',
    pastor: 'André Oliveira',
    membrosAtivos: 178,
    dizimosMes: 14300,
    ofertasMes: 3800,
    totalEntradas: 18100,
    totalSaidas: 16500,
    saldo: 1600,
    relatorioStatus: 'enviado',
    ultimoRelatorio: '2026-03-28',
    repassePendente: false,
    percentualSede: 15,
    percentualRegional: 5
  }
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const DashboardMulti: React.FC = () => {
  const [igrejas, setIgrejas] = useState<Igreja[]>(mockIgrejas);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('todos');
  const [sortBy, setSortBy] = useState<keyof Igreja>('nome');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState({ start: '2026-04-01', end: '2026-04-30' });

  const itemsPerPage = 10;

  // Estatísticas consolidadas
  const stats = {
    totalIgrejas: igrejas.length,
    totalMembros: igrejas.reduce((acc, i) => acc + i.membrosAtivos, 0),
    totalEntradas: igrejas.reduce((acc, i) => acc + i.totalEntradas, 0),
    totalRepassesPendentes: igrejas.filter(i => i.repassePendente).length,
    mediaDizimos: igrejas.reduce((acc, i) => acc + i.dizimosMes, 0) / igrejas.length,
    totalOfertas: igrejas.reduce((acc, i) => acc + i.ofertasMes, 0),
  };

  // Estados disponíveis
  const estados = ['todos', ...new Set(igrejas.map(i => i.estado))];

  // Filtragem
  const filteredIgrejas = igrejas.filter(igreja => {
    const matchesSearch = igreja.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          igreja.pastor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          igreja.cidade.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEstado = filterEstado === 'todos' || igreja.estado === filterEstado;
    return matchesSearch && matchesEstado;
  });

  // Ordenação
  const sortedIgrejas = [...filteredIgrejas].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();
    return sortOrder === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
  });

  // Paginação
  const totalPages = Math.ceil(sortedIgrejas.length / itemsPerPage);
  const paginatedIgrejas = sortedIgrejas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Função para ordenar
  const handleSort = (column: keyof Igreja) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  // Top igrejas por dízimos
  const topIgrejas = [...igrejas].sort((a, b) => b.dizimosMes - a.dizimosMes).slice(0, 5);

  return (
    <Container>
      <ContentWrapper>
        {/* Header */}
        <Header>
          <Title>
            <FaGlobe /> Dashboard Multi-Igrejas
          </Title>
          <Subtitle>
            Visão consolidada de todas as igrejas do seu ministério em tempo real
          </Subtitle>
        </Header>

        {/* Filters */}
        <FiltersBar>
          <FilterGroup>
            <FilterSelect 
              value={filterEstado} 
              onChange={(e) => setFilterEstado(e.target.value)}
            >
              {estados.map(estado => (
                <option key={estado} value={estado}>
                  {estado === 'todos' ? 'Todos os Estados' : estado}
                </option>
              ))}
            </FilterSelect>
            <DateRange>
              <input 
                type="date" 
                value={dateRange.start} 
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              />
              <span>até</span>
              <input 
                type="date" 
                value={dateRange.end} 
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              />
            </DateRange>
          </FilterGroup>
          <ExportButton>
            <FaDownload /> Exportar Relatório
          </ExportButton>
        </FiltersBar>

        {/* Stats Cards */}
        <StatsGrid>
          <StatCard>
            <div className="icon"><FaChurch /></div>
            <div className="value">{stats.totalIgrejas}</div>
            <div className="label">Igrejas Cadastradas</div>
          </StatCard>
          <StatCard>
            <div className="icon"><FaUsers /></div>
            <div className="value">{stats.totalMembros.toLocaleString()}</div>
            <div className="label">Membros Ativos</div>
            <div className="trend"><FaArrowUp size={12} /> +12% este mês</div>
          </StatCard>
          <StatCard>
            <div className="icon"><FaHandHoldingHeart /></div>
            <div className="value">R$ {stats.totalEntradas.toLocaleString()}</div>
            <div className="label">Total de Entradas</div>
            <div className="trend"><FaArrowUp size={12} /> +8% este mês</div>
          </StatCard>
          <StatCard>
            <div className="icon"><FaExclamationTriangle /></div>
            <div className="value">{stats.totalRepassesPendentes}</div>
            <div className="label">Repasses Pendentes</div>
          </StatCard>
        </StatsGrid>

        {/* Charts */}
        <ChartsGrid>
          <ChartCard>
            <h3><FaChartLine /> Igrejas entradas mensal</h3>
            <ChartBarContainer>
              {topIgrejas.map((igreja, index) => (
                <ChartBarItem key={index}>
                  <div className="label">
                    <span>{igreja.nome}</span>
                    <span>R$ {igreja.dizimosMes.toLocaleString()}</span>
                  </div>
                  <div className="bar">
                    <div 
                      className="fill" 
                      style={{ width: `${(igreja.dizimosMes / topIgrejas[0].dizimosMes) * 100}%` }}
                    />
                  </div>
                </ChartBarItem>
              ))}
            </ChartBarContainer>
          </ChartCard>

          <ChartCard>
            <h3><FaMoneyBillWave /> Status dos Relatórios</h3>
            <ChartBarContainer>
              <ChartBarItem>
                <div className="label">
                  <span><FaCheckCircle style={{ color: '#10B981' }} /> Enviados</span>
                  <span>{igrejas.filter(i => i.relatorioStatus === 'enviado').length}</span>
                </div>
                <div className="bar">
                  <div 
                    className="fill" 
                    style={{ 
                      width: `${(igrejas.filter(i => i.relatorioStatus === 'enviado').length / igrejas.length) * 100}%`,
                      background: '#10B981'
                    }}
                  />
                </div>
              </ChartBarItem>
              <ChartBarItem>
                <div className="label">
                  <span><FaClock style={{ color: '#F59E0B' }} /> Pendentes</span>
                  <span>{igrejas.filter(i => i.relatorioStatus === 'pendente').length}</span>
                </div>
                <div className="bar">
                  <div 
                    className="fill" 
                    style={{ 
                      width: `${(igrejas.filter(i => i.relatorioStatus === 'pendente').length / igrejas.length) * 100}%`,
                      background: '#F59E0B'
                    }}
                  />
                </div>
              </ChartBarItem>
              <ChartBarItem>
                <div className="label">
                  <span><FaExclamationTriangle style={{ color: '#EF4444' }} /> Atrasados</span>
                  <span>{igrejas.filter(i => i.relatorioStatus === 'atrasado').length}</span>
                </div>
                <div className="bar">
                  <div 
                    className="fill" 
                    style={{ 
                      width: `${(igrejas.filter(i => i.relatorioStatus === 'atrasado').length / igrejas.length) * 100}%`,
                      background: '#EF4444'
                    }}
                  />
                </div>
              </ChartBarItem>
            </ChartBarContainer>
          </ChartCard>
        </ChartsGrid>

        {/* Igrejas Table */}
        <TableSection>
          <TableHeader>
            <h3>Lista de Igrejas</h3>
            <SearchInput 
              type="text" 
              placeholder="Buscar por igreja, pastor ou cidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </TableHeader>

          <Table>
            <thead>
              <tr>
                <th onClick={() => handleSort('nome')}>Igreja {sortBy === 'nome' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th onClick={() => handleSort('cidade')}>Localização {sortBy === 'cidade' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th onClick={() => handleSort('pastor')}>Pastor {sortBy === 'pastor' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th onClick={() => handleSort('membrosAtivos')}>Membros {sortBy === 'membrosAtivos' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th onClick={() => handleSort('totalEntradas')}>Entradas {sortBy === 'totalEntradas' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th onClick={() => handleSort('saldo')}>Saldo {sortBy === 'saldo' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {paginatedIgrejas.map((igreja) => (
                <tr key={igreja.id}>
                  <td><strong>{igreja.nome}</strong></td>
                  <td>{igreja.cidade} - {igreja.estado}</td>
                  <td>{igreja.pastor}</td>
                  <td>{igreja.membrosAtivos}</td>
                  <td>R$ {igreja.totalEntradas.toLocaleString()}</td>
                  <td style={{ color: igreja.saldo >= 0 ? '#10B981' : '#EF4444' }}>
                    R$ {igreja.saldo.toLocaleString()}
                  </td>
                  <td>
                    <StatusBadge status={igreja.relatorioStatus}>
                      {igreja.relatorioStatus === 'enviado' && <FaCheckCircle size={10} />}
                      {igreja.relatorioStatus === 'pendente' && <FaClock size={10} />}
                      {igreja.relatorioStatus === 'atrasado' && <FaExclamationTriangle size={10} />}
                      {igreja.relatorioStatus === 'enviado' ? 'Enviado' : 
                       igreja.relatorioStatus === 'pendente' ? 'Pendente' : 'Atrasado'}
                    </StatusBadge>
                  </td>
                  <td>
                    <ActionButton title="Ver Detalhes">
                      <FaEye />
                    </ActionButton>
                    <ActionButton title="Download Relatório">
                      <FaDownload />
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination>
            <PageButton 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <FaChevronLeft size={12} />
            </PageButton>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum = currentPage;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              return (
                <PageButton 
                  key={pageNum} 
                  active={currentPage === pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </PageButton>
              );
            })}
            <PageButton 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight size={12} />
            </PageButton>
          </Pagination>
        </TableSection>
      </ContentWrapper>
    </Container>
  );
};

export default DashboardMulti;