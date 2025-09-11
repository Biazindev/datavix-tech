import React from 'react';
import styled from 'styled-components';
import {
  FaTractor,
  FaHardHat,
  FaGraduationCap,
  FaMoneyCheckAlt,
  FaConciergeBell,
  FaBalanceScale,
  FaShippingFast,
  FaIndustry,
  FaTools,
  FaHeartbeat,
  FaShoppingCart,
  FaTruckMoving,
} from 'react-icons/fa';

// Tipagem
type IconComponent = React.ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
}>;

interface SolucaoItem {
  titulo: string;
  icone: IconComponent;
  cor?: string;
}

// Estilização Moderna
const Secao = styled.section`
  padding: 4rem 1.5rem;
  background: linear-gradient(to bottom, #f7f8fa 0%, #ffffff 100%);
  text-align: center;
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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Titulo = styled.h2`
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 800;
  color: #102a43;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00c3ff 0%, #009fe3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const Subtitulo = styled.p`
  font-size: clamp(0.95rem, 3vw, 1.1rem);
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #486581;
  line-height: 1.6;
`;

const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }
`;

const Cartao = styled.div<{ cor?: string }>`
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.75rem 1.25rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
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
    background: ${({ cor }) => cor || '#7c5dfa'};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

const WrapperIcone = styled.div<{ cor?: string }>`
  font-size: 2.5rem;
  color: ${({ cor }) => cor || '#7c5dfa'};
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(124, 93, 250, 0.1);

  ${Cartao}:hover & {
    transform: scale(1.1);
    background-color: rgba(124, 93, 250, 0.15);
  }
`;

const TituloCartao = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #102a43;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: rgba(0, 195, 255, 0.5);
  }
`;

const Botao = styled.button<{ cor?: string }>`
  background: linear-gradient(135deg, ${({ cor }) => cor || '#7c5dfa'} 0%, ${({ cor }) => cor ? '#5a3bdc' : '#5a3bdc'} 100%);
  border: none;
  border-radius: 1.5rem;
  color: white;
  padding: 0.6rem 1.5rem;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  box-shadow: 0 4px 12px rgba(124, 93, 250, 0.25);
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
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(124, 93, 250, 0.35);

    &::before {
      left: 100%;
    }
  }
`;

// Dados com cores personalizadas
const dadosSolucoes: SolucaoItem[] = [
  { titulo: 'Agro', icone: FaTractor as any, cor: '#4CAF50' },
  { titulo: 'Construção', icone: FaHardHat as any, cor: '#FF9800' },
  { titulo: 'Educacional', icone: FaGraduationCap as any, cor: '#2196F3' },
  { titulo: 'Serviços Financeiros', icone: FaMoneyCheckAlt as any, cor: '#9C27B0' },
  { titulo: 'Hotelaria', icone: FaConciergeBell as any, cor: '#E91E63' },
  { titulo: 'Jurídico', icone: FaBalanceScale as any, cor: '#607D8B' },
  { titulo: 'Logística', icone: FaShippingFast as any, cor: '#3F51B5' },
  { titulo: 'Manufatura', icone: FaIndustry as any, cor: '#795548' },
  { titulo: 'Prestadores de Serviços', icone: FaTools as any, cor: '#009688' },
  { titulo: 'Saúde', icone: FaHeartbeat as any, cor: '#F44336' },
  { titulo: 'Varejo', icone: FaShoppingCart as any, cor: '#FF5722' },
  { titulo: 'Distribuição', icone: FaTruckMoving as any, cor: '#673AB7' },
];


const Solucoes: React.FC = () => {
  return (
    <Secao id="solucoes">
      <Container>
        <Titulo>Entendemos o seu segmento</Titulo>
        <Subtitulo>
          Nossos especialistas desenvolvem soluções personalizadas que evoluem junto
          com sua empresa, utilizando tecnologia de ponta para cada mercado específico.
        </Subtitulo>

        <Grade>
          {dadosSolucoes.map(({ titulo, icone: Icone, cor }) => (
            <Cartao key={titulo} cor={cor}>
              <WrapperIcone cor={cor}>
                <Icone size="1.5em" />
              </WrapperIcone>
              <TituloCartao>{titulo}</TituloCartao>
              <Botao cor={cor}>Saiba Mais</Botao>
            </Cartao>
          ))}
        </Grade>
      </Container>
    </Secao>
  );
};

export default Solucoes;