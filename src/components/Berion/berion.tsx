import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import styled, { keyframes } from 'styled-components';


// Imagens do Berion Igrejas (substitua pelas suas)
import igrejaDashboard from '../../assets/dash.jpeg';
import relatorioFinanceiro from '../../assets/contas receber.jpeg';
import splitPagamento from '../../assets/contasPagar.jpeg';
import gestaoMembros from '../../assets/home.jpeg';

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
  0% {
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(124, 58, 237, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0);
  }
`;

// ============================================
// STYLED COMPONENTS
// ============================================

const HeroSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 4rem 1.5rem;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const HeroBadge = styled.span`
  display: inline-block;
  background: rgba(124, 58, 237, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #A855F7;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.3);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #FFFFFF;

  span {
    background: linear-gradient(135deg, #A855F7 0%, #F59E0B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroDescription = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const ButtonPrimary = styled.button`
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
  }
`;

const ButtonSecondary = styled.button`
  background: transparent;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #A855F7;
    background: rgba(124, 58, 237, 0.1);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const StatItem = styled.div`
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #F59E0B;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(245, 158, 11, 0.1));
    border-radius: 30px;
    filter: blur(40px);
    z-index: 0;
  }
`;

const DashboardMockup = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// ============================================
// COMPONENTE DE FUNCIONALIDADES
// ============================================

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const FeaturesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #64748B;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: #A855F7;
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
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.75rem;
  }

  p {
    color: #64748B;
    line-height: 1.5;
  }
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const BerionIgrejas: React.FC = () => {
  const features = [
    { icon: "👥", title: "Gestão de Membros", description: "Cadastro completo, aniversariantes, certificados e carteirinhas em um só lugar." },
    { icon: "💰", title: "Split Automático", description: "Divisão inteligente de dízimos e ofertas entre sede, regional e fundos." },
    { icon: "📊", title: "Relatórios Automáticos", description: "Fluxo guiado com dupla aprovação e envio automático para sede." },
    { icon: "🎯", title: "CRM Inteligente", description: "Suporte com fluxo guiado que direciona automaticamente as demandas." },
    { icon: "🔐", title: "Segurança Total", description: "RBAC granular, JWT e isolamento multitenant para cada igreja." },
    { icon: "💳", title: "PIX e Boleto", description: "Repasses integrados com gateway de pagamentos e split configurável." },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <HeroSectionWrapper>
        <HeroContainer>
          <HeroContent>
            <HeroBadge>✨ Plataforma Eclesiástica Completa</HeroBadge>
            <HeroTitle>
              Gerencie sua igreja com <span>tecnologia de ponta</span>
            </HeroTitle>
            <HeroDescription>
              Berion Igrejas é a plataforma que integra gestão de membros, finanças com split automático e relatórios inteligentes. Perfeito para igrejas locais e sedes mundiais.
            </HeroDescription>
            <ButtonGroup>
              <ButtonPrimary>🎯 Começar Agora</ButtonPrimary>
              <ButtonSecondary>📹 Ver Demonstração</ButtonSecondary>
            </ButtonGroup>
            <StatsContainer>
              <StatItem>
                <h3>500+</h3>
                <p>IGREJAS</p>
              </StatItem>
              <StatItem>
                <h3>R$ 2M+</h3>
                <p>EM REPASSES</p>
              </StatItem>
              <StatItem>
                <h3>24/7</h3>
                <p>SUPORTE</p>
              </StatItem>
            </StatsContainer>
          </HeroContent>

          <HeroImageWrapper>
            <DashboardMockup>
              <img src={igrejaDashboard} alt="Berion Igrejas Dashboard" />
            </DashboardMockup>
          </HeroImageWrapper>
        </HeroContainer>
      </HeroSectionWrapper>

      {/* FEATURES SECTION */}
      <FeaturesSection>
        <FeaturesContainer>
          <SectionHeader>
            <h2>Tudo que sua igreja precisa em <span style={{ color: '#7C3AED' }}>um só lugar</span></h2>
            <p>Funcionalidades poderosas para gestão completa da sua igreja</p>
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
    </>
  );
};

export default BerionIgrejas;