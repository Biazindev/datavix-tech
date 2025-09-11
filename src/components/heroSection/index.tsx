import React from 'react';
import styled from 'styled-components';
import devImage from '../../assets/dev.jpg';

const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  background: linear-gradient(135deg, #f4f7fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(0, 195, 255, 0.3) 50%, transparent 100%);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 5rem 3rem;
    min-height: 80vh;
    max-height: 800px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 2rem;
  z-index: 2;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 0;
    padding-right: 3rem;
  }
`;

const Heading = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 1.2rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #00c3ff 0%, #0059ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  strong {
    display: block;
    background: linear-gradient(135deg, #0059ff 0%, #0033a0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const ButtonLink = styled.a`
  background: linear-gradient(135deg, #00c3ff 0%, #0059ff 100%);
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 195, 255, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0059ff 0%, #00c3ff 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 195, 255, 0.4);

    &::before {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 195, 255, 0.1) 0%, rgba(0, 89, 255, 0.05) 100%);
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

    img {
      transform: scale(1.03);
    }
  }

  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const WhatsAppLink = `https://wa.me/554499991803?text=${encodeURIComponent("Olá, gostaria de saber mais informações sobre os sistemas DataVix!")}`;

const HeroSection = () => {
  return (
    <Section>
      <TextContainer>
        <Heading>
          Soluções inteligentes com <strong>foco no crescimento</strong>
        </Heading>
        <Paragraph>
          Nossos especialistas desenvolvem tecnologias personalizadas que transformam
          operações e impulsionam resultados reais para o seu negócio.
        </Paragraph>
        <ButtonLink 
          href={WhatsAppLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          QUERO SABER MAIS
        </ButtonLink>
      </TextContainer>

      <ImageContainer>
        <img src={devImage} alt="Profissional feliz com notebook" />
      </ImageContainer>
    </Section>
  );
};

export default HeroSection;