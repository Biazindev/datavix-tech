import React from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaChurch, 
  FaHandHoldingHeart, 
  FaUsers, 
  FaGlobe, 
  FaStar, 
  FaRocket,
  FaShieldAlt,
  FaHeart,
  FaAward,
  FaChartLine,
  FaUserTie,
  FaLightbulb
} from 'react-icons/fa';

import igreja from '../../assets/igreja.png'

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
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// ============================================
// STYLED COMPONENTS
// ============================================

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  padding: 8rem 2rem 5rem;
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
  max-width: 900px;
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
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

// Seção de Valores
const ValoresSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const ContainerInner = styled.div`
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
    font-size: 1rem;
    color: #64748B;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ValoresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValorCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
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

// Seção de História
const HistoriaSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%);
`;

const HistoriaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HistoriaContent = styled.div`
  h2 {
    font-size: clamp(1.8rem, 3vw, 2.2rem);
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #7C3AED;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  p {
    color: #475569;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  .number {
    font-size: 2rem;
    font-weight: 800;
    color: #7C3AED;
  }

  .label {
    font-size: 0.85rem;
    color: #64748B;
    margin-top: 0.5rem;
  }
`;

const HistoriaImage = styled.div`
  background: linear-gradient(135deg, #7C3AED, #C026D3);
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(192, 38, 211, 0.1));
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// Seção de Time
const TimeSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TimeCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.15);
  }

  .avatar {
    width: 100%;
    height: 250px;
    background: linear-gradient(135deg, #7C3AED, #C026D3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
  }

  .info {
    padding: 1.5rem;

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 0.25rem;
    }

    .cargo {
      color: #7C3AED;
      font-weight: 600;
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }

    .descricao {
      color: #64748B;
      font-size: 0.85rem;
      line-height: 1.5;
    }
  }
`;

// Seção CTA
const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
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
    background: radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.15), transparent);
  }
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
    font-weight: 800;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: #94A3B8;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(124, 58, 237, 0.4);
  }
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Sobre: React.FC = () => {
  const valores = [
    {
      icon: <FaHeart />,
      title: "Amor ao Próximo",
      description: "Acreditamos que a tecnologia deve servir às pessoas e fortalecer comunidades de fé."
    },
    {
      icon: <FaLightbulb />,
      title: "Inovação Constante",
      description: "Buscamos sempre as melhores soluções tecnológicas para atender sua igreja."
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparência Total",
      description: "Compromisso com a clareza nas informações financeiras e administrativas."
    },
    {
      icon: <FaUsers />,
      title: "Foco no Usuário",
      description: "Cada funcionalidade é pensada para facilitar o dia a dia da sua igreja."
    }
  ];

  const equipe = [
    {
      nome: "Tiago Biazin",
      cargo: "CEO & Fundador",
      descricao: "Especialista em gestão eclesiástica e tecnologia",
      icon: <FaUserTie />
    },
    {
      nome: "Lucas Biazin",
      cargo: "CTO & Fundador",
      descricao: "Arquiteto de soluções e inovação",
      icon: <FaRocket />
    }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroBadge>✨ Nossa História</HeroBadge>
          <HeroTitle>
            Transformando a gestão de <span>igrejas no Brasil</span>
          </HeroTitle>
          <HeroDescription>
            O Berion Igrejas nasceu da necessidade de oferecer uma plataforma completa, 
            transparente e acessível para igrejas de todos os portes.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Valores Section */}
      <ValoresSection>
        <ContainerInner>
          <SectionHeader>
            <h2>Nossos <span style={{ color: '#7C3AED' }}>Valores</span></h2>
            <p>Princípios que guiam nossa missão</p>
          </SectionHeader>
          <ValoresGrid>
            {valores.map((valor, index) => (
              <ValorCard key={index}>
                <div className="icon">{valor.icon}</div>
                <h3>{valor.title}</h3>
                <p>{valor.description}</p>
              </ValorCard>
            ))}
          </ValoresGrid>
        </ContainerInner>
      </ValoresSection>

      {/* História Section */}
      <HistoriaSection>
        <ContainerInner>
          <HistoriaGrid>
            <HistoriaContent>
              <h2>Nossa <span style={{ color: '#7C3AED' }}>Jornada</span></h2>
              <div className="subtitle">De um sonho a uma plataforma que transforma</div>
              <p>
                O Berion Igrejas surgiu em 2026 com a missão de revolucionar a gestão eclesiástica 
                no Brasil. Percebemos que muitas igrejas enfrentavam dificuldades com processos 
                manuais, falta de transparência e ferramentas inadequadas.
              </p>
              <p>
                Com mais de 500 igrejas atendidas e mais de R$ 2 milhões em repasses gerenciados, 
                hoje somos referência em gestão de igrejas, oferecendo uma plataforma completa 
                que integra finanças, membros e relatórios em um só lugar.
              </p>
              
              <StatsGrid>
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
                  <div className="number">24/7</div>
                  <div className="label">Suporte</div>
                </StatCard>
              </StatsGrid>
            </HistoriaContent>

            <HistoriaImage>
              <img 
                src={igreja}
                alt="Berion Igrejas - Nossa História"
              />
            </HistoriaImage>
          </HistoriaGrid>
        </ContainerInner>
      </HistoriaSection>

      {/* Time Section */}
      <TimeSection>
        <ContainerInner>
          <SectionHeader>
            <h2>Nosso <span style={{ color: '#7C3AED' }}>Time</span></h2>
            <p>Pessoas apaixonadas por tecnologia e igrejas</p>
          </SectionHeader>
          <TimeGrid>
            {equipe.map((membro, index) => (
              <TimeCard key={index}>
                <div className="avatar">{membro.icon}</div>
                <div className="info">
                  <h3>{membro.nome}</h3>
                  <div className="cargo">{membro.cargo}</div>
                  <div className="descricao">{membro.descricao}</div>
                </div>
              </TimeCard>
            ))}
          </TimeGrid>
        </ContainerInner>
      </TimeSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <h2>Faça parte da <span style={{ color: '#F59E0B' }}>nossa história</span></h2>
          <p>
            Junte-se a centenas de igrejas que já transformaram sua gestão com o Berion Igrejas.
          </p>
          <CTAButton onClick={() => window.location.href = '/comecar'}>Começar Agora</CTAButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default Sobre;