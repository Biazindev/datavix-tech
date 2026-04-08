import React from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCheck, 
  FaArrowRight, 
  FaChurch, 
  FaUsers, 
  FaHandHoldingHeart,
  FaChartLine,
  FaFileAlt,
  FaUserCheck,
  FaShieldAlt,
  FaWhatsapp,
  FaStar,
  FaRocket,
  FaDatabase,
  FaMobile,
  FaHeadset,
  FaClock
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

// Features Section
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
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid #E2E8F0;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -12px rgba(124, 58, 237, 0.15);
    border-color: rgba(124, 58, 237, 0.2);
  }

  .icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #7C3AED20, #C026D320);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: #7C3AED;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 1rem;
  }

  p {
    color: #64748B;
    line-height: 1.5;
  }
`;

// Benefits Section
const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background: #FFFFFF;
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

  svg {
    font-size: 5rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    opacity: 0.8;
  }
`;

// Split Demo Section
const SplitSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  color: white;
`;

const SplitContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`;

const SplitTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
`;

const SplitSubtitle = styled.p`
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const SplitCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid rgba(124, 58, 237, 0.3);
`;

const SplitValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #F59E0B;
  margin-bottom: 1.5rem;
`;

const SplitItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SplitTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-top: 1rem;
  background: rgba(124, 58, 237, 0.2);
  border-radius: 12px;
  padding: 1rem;
  font-weight: 700;
  color: #F59E0B;
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;

  .quote {
    font-size: 3rem;
    color: #7C3AED;
    opacity: 0.3;
    margin-bottom: 0.5rem;
  }

  p {
    color: #475569;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1rem;

    .avatar {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #7C3AED, #C026D3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 1.2rem;
    }

    .info {
      h4 {
        font-weight: 700;
        color: #0F172A;
        margin-bottom: 0.25rem;
      }

      span {
        font-size: 0.85rem;
        color: #64748B;
      }
    }
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

const IgrejasLocais: React.FC = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: "Gestão de Membros",
      description: "Cadastro completo, aniversariantes, certificados e carteirinhas em um só lugar."
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Dízimos e Ofertas",
      description: "Registro de contribuições com recibos digitais e histórico completo."
    },
    {
      icon: <FaChartLine />,
      title: "Dashboard Financeiro",
      description: "Acompanhe entradas, saídas e saldo em tempo real."
    },
    {
      icon: <FaFileAlt />,
      title: "Relatórios Automáticos",
      description: "Fluxo guiado com dupla aprovação e envio automático."
    },
    {
      icon: <FaUserCheck />,
      title: "Controle de Acesso",
      description: "Perfis de Pastor, Tesoureiro e Secretaria com permissões específicas."
    },
    {
      icon: <FaShieldAlt />,
      title: "Segurança Total",
      description: "Dados protegidos com criptografia e backup automático."
    }
  ];

  const benefits = [
    "Redução de 70% no tempo administrativo",
    "Transparência total nas finanças",
    "Acesso de qualquer lugar (Web/Mobile)",
    "Suporte prioritário 24/7",
    "Treinamento incluso para equipe",
    "Migração de dados gratuita"
  ];

  const testimonials = [
    {
      name: "Pr. João Silva",
      church: "Igreja Nova Vida",
      text: "O Berion Igrejas transformou completamente nossa gestão. O split automático de dízimos trouxe transparência que nunca tivemos antes.",
      initial: "J"
    },
    {
      name: "Ana Cristina",
      church: "Comunidade da Fé",
      text: "A gestão de membros e os relatórios automáticos salvaram horas do nosso trabalho. Recomendo para toda igreja que quer crescer com organização.",
      initial: "A"
    }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroBadge>🏛️ Para Igrejas Locais</HeroBadge>
          <HeroTitle>
            Gestão completa para <span>sua igreja</span>
          </HeroTitle>
          <HeroDescription>
            Tudo que sua igreja precisa em um só lugar: membros, finanças, relatórios e muito mais.
            Comece com R$ 49,90 por mês.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <FeaturesContainer>
          <SectionHeader>
            <h2>Tudo que sua <span style={{ color: '#7C3AED' }}>igreja precisa</span></h2>
            <p>Funcionalidades poderosas para gestão completa</p>
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

      {/* Benefits Section */}
      <BenefitsSection>
        <BenefitsContainer>
          <BenefitsContent>
            <h2>Por que escolher <span style={{ color: '#7C3AED' }}>Berion Igrejas</span>?</h2>
            <p>
              Nossa plataforma foi desenvolvida especificamente para atender as necessidades 
              de igrejas locais, com foco em simplicidade, eficiência e transparência.
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
            <FaChurch />
            <h3>500+ Igrejas</h3>
            <p>Já confiam no Berion Igrejas</p>
          </BenefitsImage>
        </BenefitsContainer>
      </BenefitsSection>

      {/* Split Demo Section */}
      <SplitSection>
        <SplitContainer>
          <SplitTitle>Split automático de <span style={{ color: '#F59E0B' }}>dízimos</span></SplitTitle>
          <SplitSubtitle>
            Divisão transparente e automática entre sede, regional e fundos
          </SplitSubtitle>
          <SplitCard>
            <SplitValue>Entrada: R$ 1.000,00</SplitValue>
            <SplitItem>
              <span>Sede (15%)</span>
              <span>R$ 150,00</span>
            </SplitItem>
            <SplitItem>
              <span>Fundo Especial (3%)</span>
              <span>R$ 30,00</span>
            </SplitItem>
            <SplitItem>
              <span>Sede Regional (5%)</span>
              <span>R$ 50,00</span>
            </SplitItem>
            <SplitItem>
              <span>Taxa do Sistema</span>
              <span>R$ 49,90</span>
            </SplitItem>
            <SplitTotal>
              <span>Saldo da Igreja</span>
              <span>R$ 720,10</span>
            </SplitTotal>
          </SplitCard>
        </SplitContainer>
      </SplitSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <SectionHeader>
          <h2>O que dizem <span style={{ color: '#7C3AED' }}>nossos clientes</span></h2>
          <p>Igrejas que já transformaram sua gestão</p>
        </SectionHeader>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <div className="quote">"</div>
              <p>{testimonial.text}</p>
              <div className="author">
                <div className="avatar">{testimonial.initial}</div>
                <div className="info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.church}</span>
                </div>
              </div>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <h2>Pronto para transformar sua igreja?</h2>
          <p>
            Comece hoje mesmo com 30 dias grátis. Sem compromisso, cancele quando quiser.
          </p>
          <CTAButton href="/comecar">
            Começar Agora <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default IgrejasLocais;