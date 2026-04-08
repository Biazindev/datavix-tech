import React from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCheck, 
  FaArrowRight, 
  FaGlobe, 
  FaChartLine, 
  FaUsers,
  FaHandHoldingHeart,
  FaFileAlt,
  FaUserTie,
  FaShieldAlt,
  FaWhatsapp,
  FaStar,
  FaRocket,
  FaDatabase,
  FaNetworkWired,
  FaChurch,
  FaHeadset,
  FaCrown,
  FaEye,
  FaBell
} from 'react-icons/fa';

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

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
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

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, #F8FAFC, transparent);
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

// Stats Section
const StatsSection = styled.section`
  padding: 3rem 2rem;
  background: #F8FAFC;
  margin-top: -2rem;
  position: relative;
  z-index: 10;
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;

  @media (max-width: 992px) {
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;

  .number {
    font-size: 2rem;
    font-weight: 800;
    color: #7C3AED;
  }

  .label {
    color: #64748B;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
`;

// Features Section
const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: #FFFFFF;
`;

const FeaturesContainer = styled.div`
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: #F8FAFC;
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid #E2E8F0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -12px rgba(124, 58, 237, 0.15);
    border-color: rgba(124, 58, 237, 0.2);
  }

  .icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #7C3AED20, #C026D320);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    color: #7C3AED;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.75rem;
  }

  p {
    color: #64748B;
    line-height: 1.5;
    font-size: 0.9rem;
  }
`;

// Dashboard Preview
const DashboardSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
`;

const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`;

const DashboardTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`;

const DashboardSubtitle = styled.p`
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const DashboardPreview = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid rgba(124, 58, 237, 0.3);
  max-width: 1000px;
  margin: 0 auto;
`;

const DashboardStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DashboardStat = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;

  .value {
    font-size: 1.5rem;
    font-weight: 800;
    color: #F59E0B;
  }

  .label {
    font-size: 0.8rem;
    color: #94A3B8;
  }
`;

const DashboardIgrejas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const IgrejaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  font-size: 0.85rem;

  .nome {
    color: white;
    font-weight: 500;
  }

  .valor {
    color: #F59E0B;
    font-weight: 600;
  }

  .status {
    color: #10B981;
    font-size: 0.7rem;
  }
`;

// Benefits Section
const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const BenefitsContainer = styled.div`
  max-width: 1400px;
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

const BenefitsContent = styled.div`
  h2 {
    font-size: clamp(1.8rem, 3vw, 2.2rem);
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 1rem;
  }

  p {
    color: #64748B;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #475569;

  svg {
    color: #7C3AED;
    font-size: 1.2rem;
  }
`;

const BenefitsImage = styled.div`
  background: linear-gradient(135deg, #7C3AED, #C026D3);
  border-radius: 2rem;
  padding: 3rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: ${pulse} 3s ease-in-out infinite;
  }

  svg {
    font-size: 4rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
  }

  p {
    opacity: 0.9;
    position: relative;
    z-index: 1;
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

const SedesRedes: React.FC = () => {
  const features = [
    {
      icon: <FaGlobe />,
      title: "Dashboard Multi-Igrejas",
      description: "Visão consolidada de todas as igrejas do seu ministério em tempo real."
    },
    {
      icon: <FaChartLine />,
      title: "Indicadores Financeiros",
      description: "Acompanhe receitas, despesas e repasses de cada igreja individualmente."
    },
    {
      icon: <FaNetworkWired />,
      title: "Gestão de Repasses",
      description: "Configure percentuais de split global ou por igreja."
    },
    {
      icon: <FaUsers />,
      title: "Gestão de Pastores",
      description: "Atribua e troque pastores entre igrejas com facilidade."
    },
    {
      icon: <FaFileAlt />,
      title: "Relatórios Consolidados",
      description: "Relatórios financeiros e de crescimento do ministério."
    },
    {
      icon: <FaEye />,
      title: "Auditoria Completa",
      description: "Histórico de todas as ações e aprovações das igrejas."
    }
  ];

  const benefits = [
    "Visão 360° do seu ministério",
    "Configuração de splits personalizados",
    "Gestão centralizada de usuários",
    "Aprovação de relatórios em lote",
    "Alertas automáticos de pendências",
    "Suporte prioritário para sedes"
  ];

  const igrejas = [
    { nome: "Sua IGREJA em - Curitiba - PR", valor: "R$ 2.450,00", status: "OK" },
    { nome: "Sua IGREJA em - Florianópolis - SC", valor: "R$ 1.890,00", status: "OK" },
    { nome: "Sua IGREJA em - São Paulo - SP", valor: "R$ 3.200,00", status: "Pendente" },
    { nome: "Sua IGREJA em - Rio de Janeiro - RJ", valor: "R$ 4.120,00", status: "OK" }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroBadge>🌍 Para Sedes e Redes</HeroBadge>
          <HeroTitle>
            Gestão centralizada do <span>seu ministério</span>
          </HeroTitle>
          <HeroDescription>
            Controle todas as igrejas da sua rede em um só lugar. Dashboard consolidado, 
            gestão de repasses e relatórios automatizados para sedes mundiais e regionais.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Stats Section */}
      <StatsSection>
        <StatsContainer>
          <StatCard>
            <div className="number">500+</div>
            <div className="label">Igrejas Atendidas</div>
          </StatCard>
          <StatCard>
            <div className="number">50k+</div>
            <div className="label">Membros</div>
          </StatCard>
          <StatCard>
            <div className="number">R$2M+</div>
            <div className="label">Repasses</div>
          </StatCard>
          <StatCard>
            <div className="number">100%</div>
            <div className="label">Transparência</div>
          </StatCard>
        </StatsContainer>
      </StatsSection>

      {/* Features Section */}
      <FeaturesSection>
        <FeaturesContainer>
          <SectionHeader>
            <h2>Controle total do <span style={{ color: '#7C3AED' }}>seu ministério</span></h2>
            <p>Ferramentas poderosas para gestão de redes de igrejas</p>
          </SectionHeader>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesSection>

      {/* Dashboard Preview */}
      <DashboardSection>
        <DashboardContainer>
          <DashboardTitle>Dashboard <span style={{ color: '#F59E0B' }}>Multi-Igrejas</span></DashboardTitle>
          <DashboardSubtitle>
            Acompanhe todas as igrejas da sua rede em tempo real
          </DashboardSubtitle>
          <DashboardPreview>
            <DashboardStats>
              <DashboardStat>
                <div className="value">R$ 11.660,00</div>
                <div className="label">Total de Entradas</div>
              </DashboardStat>
              <DashboardStat>
                <div className="value">R$ 3.500,00</div>
                <div className="label">Total de Repasses</div>
              </DashboardStat>
              <DashboardStat>
                <div className="value">4</div>
                <div className="label">Igrejas Ativas</div>
              </DashboardStat>
            </DashboardStats>
            <DashboardIgrejas>
              {igrejas.map((igreja, index) => (
                <IgrejaRow key={index}>
                  <span className="nome">{igreja.nome}</span>
                  <span className="valor">{igreja.valor}</span>
                  <span className="status">
                    {igreja.status === "OK" ? "✅ Relatório enviado" : "⏳ Pendente"}
                  </span>
                </IgrejaRow>
              ))}
            </DashboardIgrejas>
          </DashboardPreview>
        </DashboardContainer>
      </DashboardSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <BenefitsContainer>
          <BenefitsContent>
            <h2>Por que sua sede precisa do <span style={{ color: '#7C3AED' }}>Berion Igrejas</span>?</h2>
            <p>
              Tenha visibilidade completa de todas as igrejas do seu ministério, 
              controle financeiro transparente e relatórios automatizados para tomada de decisão.
            </p>
            <BenefitsList>
              {benefits.map((benefit, index) => (
                <BenefitItem key={index}>
                  <FaCheck /> {benefit}
                </BenefitItem>
              ))}
            </BenefitsList>
          </BenefitsContent>
          <BenefitsImage>
            <FaCrown />
            <h3>Administração Centralizada</h3>
            <p>Controle total da sua rede de igrejas</p>
          </BenefitsImage>
        </BenefitsContainer>
      </BenefitsSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <h2>Pronto para centralizar a gestão da sua rede?</h2>
          <p>
            Agende uma demonstração personalizada para sedes e conheça todas as funcionalidades.
          </p>
          <CTAButton href="/comecar">
            Falar com Especialista <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default SedesRedes;