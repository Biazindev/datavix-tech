import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCheck, 
  FaArrowRight, 
  FaFileAlt, 
  FaChartLine,
  FaUserCheck,
  FaUserTimes,
  FaHandHoldingHeart,
  FaBuilding,
  FaClipboardList,
  FaEnvelope,
  FaBell,
  FaShieldAlt,
  FaWhatsapp,
  FaStar,
  FaRocket,
  FaClock,
  FaHistory,
  FaDownload,
  FaEye,
  FaCheckDouble
} from 'react-icons/fa';

interface FlowStepProps {
  delay?: number;
  children?: React.ReactNode;
}

// ============================================
// ANIMAÇÕES
// ============================================

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
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
// STYLED COMPONENTS
// ============================================

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// Hero Section
const HeroSection = styled.section`
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  padding: 8rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="rgba(124,58,237,0.05)" d="M0 0h200v200H0z"/><path fill="rgba(124,58,237,0.08)" d="M0 0h200v200H0z" transform="rotate(45 100 100)"/></svg>');
    background-size: 40px 40px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const HeroBadge = styled.span`
  display: inline-block;
  background: rgba(124, 58, 237, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #A855F7;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.3);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.2;

  span {
    background: linear-gradient(135deg, #A855F7 0%, #F59E0B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroDescription = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

// Flow Section
const FlowSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const FlowContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 1rem;
  }

  p {
    color: #64748B;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FlowSteps = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 3rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, #7C3AED, #F59E0B);
    z-index: 0;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;

    &::before {
      display: none;
    }
  }
`;

const FlowStep = styled.div<FlowStepProps>`
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${slideIn} 0.5s ease-out forwards;
  animation-delay: ${({ delay }: { delay?: number }) => delay || 0}s;
  opacity: 0;

  .step-number {
    width: 80px;
    height: 80px;
    background: white;
    border: 2px solid #7C3AED;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-size: 2rem;
    font-weight: 800;
    color: #7C3AED;
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748B;
    font-size: 0.85rem;
    line-height: 1.5;
    max-width: 200px;
    margin: 0 auto;
  }

  @media (max-width: 992px) {
    .step-number {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
    }
  }
`;

// Approval Section
const ApprovalSection = styled.section`
  padding: 5rem 2rem;
  background: #FFFFFF;
`;

const ApprovalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ApprovalCard = styled.div`
  background: #F8FAFC;
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #E2E8F0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -12px rgba(124, 58, 237, 0.15);
  }

  svg {
    font-size: 3rem;
    color: #7C3AED;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }

  .role {
    color: #7C3AED;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: #64748B;
    line-height: 1.5;
  }

  .status {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.25rem 0.75rem;
    background: rgba(124, 58, 237, 0.1);
    border-radius: 50px;
    font-size: 0.75rem;
    color: #7C3AED;
  }
`;

// Report Types Section
const ReportTypesSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  color: white;
`;

const ReportTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReportCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(124, 58, 237, 0.6);
  }

  svg {
    font-size: 2rem;
    color: #A855F7;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    color: #94A3B8;
    line-height: 1.5;
  }
`;

// Patrimonial Section
const PatrimonialSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const PatrimonialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PatrimonialContent = styled.div`
  h2 {
    font-size: clamp(1.8rem, 3vw, 2.2rem);
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 1rem;
  }

  p {
    color: #64748B;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const PatrimonialList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: #475569;

    svg {
      color: #7C3AED;
      font-size: 0.8rem;
    }
  }
`;

const PatrimonialImage = styled.div`
  background: linear-gradient(135deg, #7C3AED, #C026D3);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  color: white;

  .number {
    font-size: 3rem;
    font-weight: 800;
    color: #F59E0B;
  }

  .label {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

// Benefits Section
const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background: #FFFFFF;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 1.5rem;

  svg {
    font-size: 2rem;
    color: #7C3AED;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    color: #64748B;
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;

  h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
    font-weight: 800;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: white;
  color: #7C3AED;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const RelatoriosAutomaticos: React.FC = () => {
  const flowSteps = [
    {
      number: "1",
      title: "Registro Diário",
      description: "Registre dízimos, ofertas e votos diariamente"
    },
    {
      number: "2",
      title: "Fluxo Guiado",
      description: "Sistema guia o preenchimento em 3 etapas"
    },
    {
      number: "3",
      title: "Dupla Aprovação",
      description: "Pastor e Tesoureiro aprovam"
    },
    {
      number: "4",
      title: "Envio Automático",
      description: "Relatório vai para a sede automaticamente"
    }
  ];

  const reportTypes = [
    { icon: <FaChartLine />, title: "Relatório Financeiro", description: "Entradas, saídas e saldo do período" },
    { icon: <FaHandHoldingHeart />, title: "Relatório de Dízimos", description: "Lista de dizimistas e valores" },
    { icon: <FaBuilding />, title: "Relatório Patrimonial", description: "33 itens de bens da igreja" },
    { icon: <FaUserCheck />, title: "Relatório de Membros", description: "Cadastro e aniversariantes" },
    { icon: <FaClipboardList />, title: "Relatório de Atividades", description: "Eventos e atividades ministeriais" },
    { icon: <FaFileAlt />, title: "Relatório Consolidado", description: "Visão completa do ministério" }
  ];

  const benefits = [
    { icon: <FaClock />, title: "Economia de Tempo", description: "Reduza horas de trabalho manual" },
    { icon: <FaHistory />, title: "Histórico Completo", description: "Acesso a todos os relatórios antigos" },
    { icon: <FaDownload />, title: "Exportação Fácil", description: "PDF, Excel e CSV" },
    { icon: <FaBell />, title: "Notificações", description: "Alertas de pendências e aprovações" }
  ];

  const patrimonialItems = [
    "Imóveis e Terrenos", "Veículos", "Equipamentos de Som", "Instrumentos Musicais",
    "Móveis e Bancos", "Computadores", "Projetores", "Livros e Bíblias"
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroBadge>📊 Relatórios Automáticos</HeroBadge>
          <HeroTitle>
            Relatórios inteligentes com <span>envio automático</span>
          </HeroTitle>
          <HeroDescription>
            Fluxo guiado, dupla aprovação e envio automático para sede. 
            Elimine planilhas e tenha total transparência.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Flow Section */}
      <FlowSection>
        <FlowContainer>
          <SectionHeader>
            <h2>Como funciona o <span style={{ color: '#7C3AED' }}>fluxo de relatórios</span></h2>
            <p>Processo simples, seguro e automatizado</p>
          </SectionHeader>
          <FlowSteps>
            {flowSteps.map((step, index) => (
              <FlowStep key={index} delay={index * 0.15}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </FlowStep>
            ))}
          </FlowSteps>
        </FlowContainer>
      </FlowSection>

      {/* Approval Section */}
      <ApprovalSection>
        <SectionHeader>
          <h2>Dupla <span style={{ color: '#7C3AED' }}>Aprovação</span></h2>
          <p>Segurança e conformidade no envio de relatórios</p>
        </SectionHeader>
        <ApprovalGrid>
          <ApprovalCard>
            <FaUserCheck />
            <h3>Pastor</h3>
            <div className="role">Aprovação Inicial</div>
            <p>O pastor revisa as informações e realiza a primeira aprovação do relatório mensal.</p>
            <div className="status">✓ Aguardando Tesoureiro</div>
          </ApprovalCard>
          <ApprovalCard>
            <FaCheckDouble />
            <h3>Tesoureiro</h3>
            <div className="role">Aprovação Final</div>
            <p>O tesoureiro valida os dados financeiros e confirma o relatório para envio.</p>
            <div className="status">✓ Enviado para Sede</div>
          </ApprovalCard>
        </ApprovalGrid>
      </ApprovalSection>

      {/* Report Types Section */}
      <ReportTypesSection>
        <SectionHeader style={{ color: 'white' }}>
          <h2 style={{ color: 'white' }}>Tipos de <span style={{ color: '#F59E0B' }}>Relatórios</span></h2>
          <p style={{ color: '#94A3B8' }}>Relatórios completos para todas as necessidades</p>
        </SectionHeader>
        <ReportTypesGrid>
          {reportTypes.map((report, index) => (
            <ReportCard key={index}>
              {report.icon}
              <h3>{report.title}</h3>
              <p>{report.description}</p>
            </ReportCard>
          ))}
        </ReportTypesGrid>
      </ReportTypesSection>

      {/* Patrimonial Section */}
      <PatrimonialSection>
        <PatrimonialContainer>
          <PatrimonialContent>
            <h2>Relatório <span style={{ color: '#7C3AED' }}>Patrimonial</span></h2>
            <p>
              Inventário completo com 33 itens de bens da igreja. Registre imóveis, veículos, 
              equipamentos de som, instrumentos musicais, móveis e muito mais.
            </p>
            <PatrimonialList>
              {patrimonialItems.map((item, index) => (
                <span key={index}><FaCheck /> {item}</span>
              ))}
            </PatrimonialList>
          </PatrimonialContent>
          <PatrimonialImage>
            <div className="number">33</div>
            <div className="label">Itens Patrimoniais</div>
            <FaBuilding size={40} style={{ marginTop: '1rem', opacity: 0.8 }} />
          </PatrimonialImage>
        </PatrimonialContainer>
      </PatrimonialSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionHeader>
          <h2>Vantagens dos <span style={{ color: '#7C3AED' }}>Relatórios Automáticos</span></h2>
          <p>Mais eficiência e transparência para sua igreja</p>
        </SectionHeader>
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              {benefit.icon}
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <h2>Pronto para automatizar seus relatórios?</h2>
          <p>
            Elimine planilhas, ganhe tempo e tenha total transparência com os relatórios 
            automáticos do Berion Igrejas.
          </p>
          <CTAButton href="/comecar">
            Começar Agora <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default RelatoriosAutomaticos;