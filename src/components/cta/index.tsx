import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp, FaArrowRight, FaChurch, FaHandHoldingHeart, FaShieldAlt } from 'react-icons/fa';

// ============================================
// ANIMAÇÕES
// ============================================

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseRing = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(124, 58, 237, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0);
  }
`;

const shine = keyframes`
  0% {
    left: -100%;
  }
  20% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
`;

// ============================================
// STYLED COMPONENTS
// ============================================

const Section = styled.section`
  padding: 0 1.5rem;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 2.5rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="rgba(124,58,237,0.05)" d="M0 0h200v200H0z"/><path fill="rgba(124,58,237,0.1)" d="M0 0h200v200H0z" transform="rotate(45 100 100)"/></svg>');
    background-size: 30px 30px;
    opacity: 0.5;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 4rem 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Badge = styled.span`
  display: inline-block;
  background: rgba(168, 85, 247, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #A855F7;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(168, 85, 247, 0.3);
`;

const Titulo = styled.h2`
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.3;

  span {
    background: linear-gradient(135deg, #A855F7 0%, #F59E0B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitulo = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  max-width: 650px;
  margin: 0 auto 2rem;
  color: #94A3B8;
  line-height: 1.6;
`;

const FeaturesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`;

const FeatureChip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  color: #CBD5E1;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    color: #A855F7;
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(124, 58, 237, 0.4);

    &::before {
      left: 100%;
    }
  }
`;

const ButtonSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: #A855F7;
    background: rgba(124, 58, 237, 0.15);
    transform: translateY(-3px);

    svg {
      transform: translateX(5px);
    }
  }
`;

const GuaranteeText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #64748B;

  svg {
    color: #F59E0B;
  }

  a {
    color: #A855F7;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FloatingIcon = styled.div<{ top: string; left: string; delay: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  font-size: 3rem;
  opacity: 0.1;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay};
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const CTAFinal: React.FC = () => {
  const whatsappLink = `https://wa.me/5544991179564?text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o Berion Igrejas e começar agora mesmo.`
  )}`;

  const demoLink = `/demo`; // Altere para o link da demonstração

  return (
    <Section>
      <Container>
        {/* Ícones flutuantes decorativos */}
        <FloatingIcon top="10%" left="5%" delay="0s">
          <FaChurch />
        </FloatingIcon>
        <FloatingIcon top="70%" left="85%" delay="1s">
          <FaHandHoldingHeart />
        </FloatingIcon>
        <FloatingIcon top="80%" left="10%" delay="0.5s">
          <FaShieldAlt />
        </FloatingIcon>

        <ContentWrapper>
          <Badge>🚀 Comece Agora Mesmo</Badge>
          
          <Titulo>
            Pronto para transformar a <span>gestão da sua igreja</span>?
          </Titulo>
          
          <Subtitulo>
            Junte-se a mais de 500 igrejas que já simplificaram sua administração 
            com o Berion Igrejas. Comece com R$ 49,90 por mês.
          </Subtitulo>

          <FeaturesRow>
            <FeatureChip>
              <FaChurch /> +500 igrejas
            </FeatureChip>
            <FeatureChip>
              <FaHandHoldingHeart /> R$2M+ em repasses
            </FeatureChip>
            <FeatureChip>
              <FaShieldAlt /> Dados seguros
            </FeatureChip>
          </FeaturesRow>

          <ButtonGroup>
            <ButtonPrimary href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={18} /> Começar Agora
            </ButtonPrimary>
            <ButtonSecondary href={demoLink}>
              Ver Demonstração <FaArrowRight size={14} />
            </ButtonSecondary>
          </ButtonGroup>

          <GuaranteeText>
            <span>🔒</span> Teste grátis por 7 dias | 
            <span>💳</span> Sem fidelidade | 
            <span>✅</span> Suporte 24/7
          </GuaranteeText>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default CTAFinal;