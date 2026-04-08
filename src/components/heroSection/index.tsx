import React from 'react';
import styled from 'styled-components';
import { FaChartLine, FaHandHoldingHeart, FaUsers, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import churchImage from '../../assets/dev.jpg'; // Substitua pela imagem correta da sua igreja

const ChartIcon = FaChartLine as unknown as React.FC<IconBaseProps>;
const HandHeartIcon = FaHandHoldingHeart as unknown as React.FC<IconBaseProps>;
const UsersIcon = FaUsers as unknown as React.FC<IconBaseProps>;
const ShieldIcon = FaShieldAlt as unknown as React.FC<IconBaseProps>;
const ArrowIcon = FaArrowRight as unknown as React.FC<IconBaseProps>;

// ============================================
// STYLED COMPONENTS
// ============================================

const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7C3AED 0%, #F59E0B 50%, #C026D3 100%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
  }

  @media (min-width: 992px) {
    flex-direction: row;
    padding: 5rem 5%;
    min-height: 85vh;
    gap: 4rem;
  }

  @media (min-width: 1400px) {
    padding: 6rem 10%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 2rem;
  z-index: 2;

  @media (min-width: 992px) {
    text-align: left;
    margin-top: 0;
    max-width: 600px;
  }
`;

const Badge = styled.span`
  display: inline-block;
  background: rgba(124, 58, 237, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #7C3AED;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.2);

  @media (min-width: 992px) {
    font-size: 0.8rem;
  }
`;

const Heading = styled.h2`
  font-size: clamp(1.8rem, 5vw, 3.2rem);
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 1.2rem;
  line-height: 1.3;

  span {
    background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 992px) {
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #475569;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 992px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 2.5rem;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    margin-bottom: 2.5rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
  color: #334155;

  svg {
    color: #7C3AED;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  span {
    font-weight: 600;
    color: #0F172A;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

const ButtonPrimary = styled.a`
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  color: #fff;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
  position: relative;
  overflow: hidden;

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
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);

    &::before {
      left: 100%;
    }
  }

  @media (min-width: 992px) {
    font-size: 1rem;
    padding: 1rem 2.2rem;
  }
`;

const ButtonSecondary = styled.a`
  background: transparent;
  color: #7C3AED;
  padding: 0.9rem 2rem;
  border: 1.5px solid rgba(124, 58, 237, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: #7C3AED;
    background: rgba(124, 58, 237, 0.05);
    transform: translateY(-3px);

    svg {
      transform: translateX(5px);
    }
  }

  @media (min-width: 992px) {
    font-size: 1rem;
    padding: 1rem 2.2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 550px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(192, 38, 211, 0.05) 100%);
    z-index: 1;
    border-radius: 24px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(245, 158, 11, 0.05));
    border-radius: 30px;
    filter: blur(20px);
    z-index: -1;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 35px 55px -15px rgba(0, 0, 0, 0.3);

    img {
      transform: scale(1.02);
    }
  }

  @media (min-width: 992px) {
    max-width: 650px;
  }
`;

// ============================================
// CONSTANTES
// ============================================

const WhatsAppLink = `https://wa.me/5544991179564?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre o Berion Igrejas."
)}`;

const DemoLink = `/demo`; // Altere para o link da sua demonstração

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const BerionDestaque: React.FC = () => {
  return (
    <Section>
      <TextContainer>
        <Badge>✨ Porque igrejas escolhem a Berion</Badge>
        
        <Heading>
          Gestão eclesiástica com <span>tecnologia de ponta</span>
        </Heading>
        
        <Description>
          A Berion Igrejas é a plataforma completa para igrejas locais, sedes e redes. 
          Automatize processos, tenha transparência financeira e foque no que realmente importa: o ministério.
        </Description>

        <FeaturesList>
          <FeatureItem>
            <ChartIcon />
            <span>Dashboard em tempo real</span> - Acompanhe indicadores da sua igreja
          </FeatureItem>
          <FeatureItem>
            <HandHeartIcon />
            <span>Split automático de dízimos</span> - Repasses transparentes para sede e fundos
          </FeatureItem>
          <FeatureItem>
            <UsersIcon />
            <span>Gestão completa de membros</span> - Cadastro, certificados e carteirinhas
          </FeatureItem>
          <FeatureItem>
            <ShieldIcon />
            <span>Segurança total</span> - Dados protegidos com criptografia e multitenant
          </FeatureItem>
        </FeaturesList>

        <ButtonGroup>
          <ButtonPrimary href={WhatsAppLink} target="_blank" rel="noopener noreferrer">
            Começar Agora
          </ButtonPrimary>
          <ButtonSecondary href={DemoLink}>
            Ver Demonstração <ArrowIcon size={14} />
          </ButtonSecondary>
        </ButtonGroup>
      </TextContainer>

      <ImageContainer>
        <img src={churchImage} alt="Igreja usando o sistema Berion - Gestão moderna" />
      </ImageContainer>
    </Section>
  );
};

export default BerionDestaque;