import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCheck, 
  FaArrowRight, 
  FaUsers, 
  FaUserPlus,
  FaUserEdit,
  FaSearch,
  FaBirthdayCake,
  FaIdCard,
  FaFileAlt,
  FaCertificate,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWhatsapp,
  FaStar,
  FaRocket,
  FaShieldAlt,
  FaDownload,
  FaPrint,
  FaFilter
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

// Member Card Demo
const MemberDemoSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
`;

const MemberDemoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const MemberDemoTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`;

const MemberDemoSubtitle = styled.p`
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const MemberCardDemo = styled.div`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
  animation: ${pulse} 3s ease-in-out infinite;

  .header {
    background: linear-gradient(135deg, #7C3AED, #C026D3);
    padding: 2rem;
    text-align: center;
    color: white;

    .avatar {
      width: 80px;
      height: 80px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-size: 2.5rem;
      color: #7C3AED;
    }

    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.25rem;
    }

    .role {
      font-size: 0.85rem;
      opacity: 0.9;
    }
  }

  .body {
    padding: 1.5rem;
  }

  .info-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid #E2E8F0;
    font-size: 0.9rem;
    color: #475569;

    svg {
      color: #7C3AED;
      width: 18px;
    }
  }
`;

// Certificates Section
const CertificatesSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const CertificatesGrid = styled.div`
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

const CertificateCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #E2E8F0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -12px rgba(124, 58, 237, 0.15);
    border-color: rgba(124, 58, 237, 0.2);
  }

  svg {
    font-size: 2.5rem;
    color: #7C3AED;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    color: #64748B;
    margin-bottom: 1rem;
  }

  button {
    background: transparent;
    border: 1px solid #7C3AED;
    color: #7C3AED;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #7C3AED;
      color: white;
    }
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

const GestaoMembros: React.FC = () => {
  const features = [
    {
      icon: <FaUserPlus />,
      title: "Cadastro Completo",
      description: "Registre nome, email, telefone, CPF, cargo e muito mais."
    },
    {
      icon: <FaBirthdayCake />,
      title: "Aniversariantes",
      description: "Acompanhe aniversariantes do dia, mês e envie lembretes."
    },
    {
      icon: <FaSearch />,
      title: "Busca Avançada",
      description: "Encontre membros por nome, CPF, email ou cargo rapidamente."
    },
    {
      icon: <FaIdCard />,
      title: "Carteirinha de Membro",
      description: "Gere carteirinhas personalizadas com QR Code e validade."
    },
    {
      icon: <FaCertificate />,
      title: "Certificados",
      description: "Certificado de Batismo, Apresentação e participação."
    },
    {
      icon: <FaFileAlt />,
      title: "Histórico Completo",
      description: "Acompanhe toda trajetória do membro na igreja."
    }
  ];

  const certificates = [
    { icon: <FaIdCard />, title: "Carteirinha de Membro", description: "Identificação oficial com dados e foto" },
    { icon: <FaCertificate />, title: "Certificado de Batismo", description: "Registro oficial de batismo" },
    { icon: <FaStar />, title: "Certificado de Apresentação", description: "Para crianças apresentadas ao Senhor" }
  ];

  const benefits = [
    { icon: <FaEnvelope />, title: "Comunicação Facilitada", description: "Envie mensagens em lote" },
    { icon: <FaDownload />, title: "Exportação de Dados", description: "Exporte listas em PDF/Excel" },
    { icon: <FaPrint />, title: "Impressão Rápida", description: "Imprima certificados e relatórios" },
    { icon: <FaFilter />, title: "Filtros Avançados", description: "Filtre por cargo, status, aniversário" }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroBadge>👥 Gestão de Membros</HeroBadge>
          <HeroTitle>
            Gerencie sua congregação com <span>facilidade</span>
          </HeroTitle>
          <HeroDescription>
            Cadastro completo, aniversariantes, certificados e carteirinhas em um só lugar. 
            Tudo o que sua igreja precisa para uma gestão eficiente de membros.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Stats Section */}
      <StatsSection>
        <StatsContainer>
          <StatCard>
            <div className="number">10k+</div>
            <div className="label">Membros Cadastrados</div>
          </StatCard>
          <StatCard>
            <div className="number">500+</div>
            <div className="label">Igrejas</div>
          </StatCard>
          <StatCard>
            <div className="number">50+</div>
            <div className="label">Certificados/ Mês</div>
          </StatCard>
          <StatCard>
            <div className="number">100%</div>
            <div className="label">Organização</div>
          </StatCard>
        </StatsContainer>
      </StatsSection>

      {/* Features Section */}
      <FeaturesSection>
        <FeaturesContainer>
          <SectionHeader>
            <h2>Funcionalidades para <span style={{ color: '#7C3AED' }}>gestão de membros</span></h2>
            <p>Tudo que você precisa para organizar sua congregação</p>
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

      {/* Member Demo Section */}
      <MemberDemoSection>
        <MemberDemoContainer>
          <MemberDemoTitle>impressões de <span style={{ color: '#F59E0B' }}>Carteirinhas</span> personalizaveis</MemberDemoTitle>
          <MemberDemoSubtitle>
            Carteirinha digital personalizada com todas as informações do membro
          </MemberDemoSubtitle>
          <MemberCardDemo>
            <div className="header">
              <div className="avatar">
                <FaUsers />
              </div>
              <h3>Lorenzo Gabriel</h3>
              <div className="role">Membro Ativo</div>
            </div>
            <div className="body">
              <div className="info-row">
                <FaEnvelope /> lorenzogabriel@email.com
              </div>
              <div className="info-row">
                <FaPhone /> (11) 11111-1111
              </div>
              <div className="info-row">
                <FaCalendarAlt /> Nasc: 07/05/2018
              </div>
              <div className="info-row">
                <FaMapMarkerAlt /> Londrina - PR
              </div>
            </div>
          </MemberCardDemo>
        </MemberDemoContainer>
      </MemberDemoSection>

      {/* Certificates Section */}
      <CertificatesSection>
        <SectionHeader>
          <h2>Certificados e <span style={{ color: '#7C3AED' }}>Documentos</span></h2>
          <p>Documentação completa para sua igreja</p>
        </SectionHeader>
        <CertificatesGrid>
          {certificates.map((cert, index) => (
            <CertificateCard key={index}>
              {cert.icon}
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <button>Visualizar Modelo</button>
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </CertificatesSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionHeader>
          <h2>Vantagens da <span style={{ color: '#7C3AED' }}>gestão digital</span></h2>
          <p>Organização e eficiência para sua igreja</p>
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
          <h2>Pronto para organizar sua congregação?</h2>
          <p>
            Cadastre seus membros, gere certificados e mantenha tudo organizado 
            com a gestão de membros do Berion Igrejas.
          </p>
          <CTAButton href="/comecar">
            Começar Agora <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default GestaoMembros;