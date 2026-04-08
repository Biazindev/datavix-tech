import React from 'react';
import styled from 'styled-components';
import {
  FaChurch,
  FaHandHoldingHeart,
  FaChartLine,
  FaFileAlt,
  FaUsers,
  FaUserCheck,
  FaMoneyBillWave,
  FaCreditCard,
  FaRobot,
  FaShieldAlt,
  FaGlobe,
  FaHeadset,
} from 'react-icons/fa';

// Tipagem
type IconComponent = React.ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
}>;

interface FuncionalidadeItem {
  titulo: string;
  descricao: string;
  icone: IconComponent;
  cor?: string;
}

// ============================================
// STYLED COMPONENTS
// ============================================

const Secao = styled.section`
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.2), transparent);
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Badge = styled.span`
  display: inline-block;
  background: rgba(124, 58, 237, 0.1);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #7C3AED;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.2);
`;

const Titulo = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 1rem;
  
  span {
    background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitulo = styled.p`
  font-size: clamp(0.95rem, 3vw, 1.1rem);
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #475569;
  line-height: 1.6;
`;

const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Cartao = styled.div<{ cor?: string }>`
  background: #FFFFFF;
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.03);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7C3AED 0%, #C026D3 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 35px -10px rgba(124, 58, 237, 0.15);
    border-color: rgba(124, 58, 237, 0.1);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const WrapperIcone = styled.div<{ cor?: string }>`
  font-size: 2.2rem;
  color: #7C3AED;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(192, 38, 211, 0.05) 100%);

  ${Cartao}:hover & {
    transform: scale(1.05);
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(192, 38, 211, 0.1) 100%);
  }
`;

const TituloCartao = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 0.75rem;
`;

const DescricaoCartao = styled.p`
  font-size: 0.9rem;
  color: #64748B;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const LinkSaibaMais = styled.a`
  background: transparent;
  color: #7C3AED;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: auto;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #C026D3;
    gap: 10px;

    svg {
      transform: translateX(4px);
    }
  }
`;

// Ícone de seta para o link
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ============================================
// DADOS DAS FUNCIONALIDADES
// ============================================

const dadosFuncionalidades: FuncionalidadeItem[] = [
  {
    titulo: "Gestão de Membros",
    descricao: "Cadastro completo, aniversariantes, certificados, carteirinhas e histórico de membros.",
    icone: FaUsers as any,
  },
  {
    titulo: "Dízimos e Ofertas",
    descricao: "Registro de contribuições com suporte a múltiplos pagamentos e recibos digitais.",
    icone: FaHandHoldingHeart as any,
  },
  {
    titulo: "Split Automático",
    descricao: "Divisão automática de valores entre sede, regional, fundos e pastor.",
    icone: FaMoneyBillWave as any,
  },
  {
    titulo: "Relatórios Financeiros",
    descricao: "Dashboards completos com entradas, saídas, saldo e análises por período.",
    icone: FaChartLine as any,
  },
  {
    titulo: "Relatório Patrimonial",
    descricao: "Inventário completo com 33 itens de bens da igreja (imóveis, veículos, equipamentos).",
    icone: FaFileAlt as any,
  },
  {
    titulo: "Envio Automático",
    descricao: "Relatórios enviados automaticamente para a sede após dupla aprovação.",
    icone: FaGlobe as any,
  },
  {
    titulo: "CRM Inteligente",
    descricao: "Fluxo guiado que direciona dúvidas para suporte técnico ou sede.",
    icone: FaRobot as any,
  },
  {
    titulo: "Gestão de Usuários",
    descricao: "RBAC granular com perfis: Pastor, Tesoureiro, Secretaria, Admin.",
    icone: FaUserCheck as any,
  },
  {
    titulo: "PIX e Boleto",
    descricao: "Integração com gateway de pagamentos para repasses e contribuições.",
    icone: FaCreditCard as any,
  },
  {
    titulo: "Segurança Total",
    descricao: "Dados protegidos com criptografia, JWT e isolamento multitenant.",
    icone: FaShieldAlt as any,
  },
  {
    titulo: "Dashboard Multi-Igrejas",
    descricao: "Visão consolidada para sedes acompanharem todas as igrejas em tempo real.",
    icone: FaChurch as any,
  },
  {
    titulo: "Suporte Dedicado",
    descricao: "Atendimento especializado para igrejas e sedes com fluxo guiado.",
    icone: FaHeadset as any,
  },
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Funcionalidades: React.FC = () => {
  return (
    <Secao id="funcionalidades">
      <Container>
        <Badge>⚡ Funcionalidades Poderosas</Badge>
        <Titulo>
          Tudo que sua igreja precisa em <span>um só lugar</span>
        </Titulo>
        <Subtitulo>
          Gerencie membros, finanças, relatórios e muito mais com a plataforma mais completa 
          para igrejas e sedes mundiais.
        </Subtitulo>

        <Grade>
          {dadosFuncionalidades.map(({ titulo, descricao, icone: Icone }) => (
            <Cartao key={titulo}>
              <WrapperIcone>
                <Icone size="1.6rem" />
              </WrapperIcone>
              <TituloCartao>{titulo}</TituloCartao>
              <DescricaoCartao>{descricao}</DescricaoCartao>
              <LinkSaibaMais href="#">
                Saiba mais <ArrowIcon />
              </LinkSaibaMais>
            </Cartao>
          ))}
        </Grade>
      </Container>
    </Secao>
  );
};

export default Funcionalidades;