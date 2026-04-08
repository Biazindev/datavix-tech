import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck, FaChurch, FaUsers, FaCrown, FaCalculator, FaWhatsapp } from 'react-icons/fa';

// ============================================
// STYLED COMPONENTS
// ============================================

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Badge = styled.span`
  display: inline-block;
  background: rgba(124, 58, 237, 0.1);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #7C3AED;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.2);
`;

const Titulo = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 1rem;
  text-align: center;
  
  span {
    background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitulo = styled.p`
  font-size: clamp(0.95rem, 3vw, 1.1rem);
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #475569;
  line-height: 1.6;
  text-align: center;
`;

// Calculadora
const CalculadoraContainer = styled.div`
  background: linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%);
  border-radius: 2rem;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.15);
`;

const CalculadoraTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

const CalculadoraGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const InputGroup = styled.div`
  label {
    display: block;
    color: #475569;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    background: white;
    border-radius: 12px;
    border: 1px solid #E2E8F0;
    transition: all 0.3s ease;

    &:focus-within {
      border-color: #7C3AED;
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
    }

    span {
      padding: 0 1rem;
      color: #7C3AED;
      font-weight: 600;
    }

    input {
      width: 100%;
      padding: 1rem;
      background: transparent;
      border: none;
      font-size: 1rem;
      outline: none;

      &::placeholder {
        color: #94A3B8;
      }
    }
  }
`;

const CalculadoraResultado = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  color: white;

  .label {
    font-size: 0.8rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 2.5rem;
    font-weight: 800;
  }

  .sub {
    font-size: 0.7rem;
    opacity: 0.7;
    margin-top: 0.5rem;
  }
`;

const IgualIcon = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #7C3AED;
  text-align: center;

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

// Cards de Planos
const PlanosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlanoCard = styled.div<{ popular?: boolean }>`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ popular }) => popular ? '#7C3AED' : '#E2E8F0'};
  position: relative;
  transform: ${({ popular }) => popular ? 'scale(1.02)' : 'scale(1)'};

  &:hover {
    transform: translateY(-8px) ${({ popular }) => popular ? 'scale(1.02)' : 'scale(1)'};
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.7rem;
  font-weight: 600;
  border-bottom-left-radius: 1rem;
`;

const PlanoHeader = styled.div<{ popular?: boolean }>`
  background: ${({ popular }) => popular ? 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)' : '#F8FAFC'};
  padding: 2rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid #E2E8F0;

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ popular }) => popular ? 'white' : '#0F172A'};
    margin-bottom: 0.5rem;
  }

  .price {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${({ popular }) => popular ? 'white' : '#7C3AED'};
    
    small {
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  .period {
    font-size: 0.8rem;
    color: ${({ popular }) => popular ? 'rgba(255,255,255,0.7)' : '#64748B'};
    margin-top: 0.5rem;
  }
`;

const PlanoBody = styled.div`
  padding: 2rem 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  color: #334155;
  font-size: 0.9rem;

  svg {
    color: #7C3AED;
    font-size: 0.9rem;
    flex-shrink: 0;
  }
`;

const ButtonPlan = styled.a<{ popular?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background: ${({ popular }) => popular ? 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)' : '#F1F5F9'};
  color: ${({ popular }) => popular ? 'white' : '#7C3AED'};
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ popular }) => popular ? '0 10px 25px -5px rgba(124, 58, 237, 0.4)' : 'none'};
  }
`;

const ObsText = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.8rem;
  color: #64748B;
  
  a {
    color: #7C3AED;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const PlanosPrecos: React.FC = () => {
  const [igrejas, setIgrejas] = useState<number>(1);
  const [usuariosPorIgreja, setUsuariosPorIgreja] = useState<number>(2);

  const precoBasePorIgreja = 49.90;
  const precoTotal = igrejas * precoBasePorIgreja;

  const planos = [
    {
      nome: "Básico",
      preco: 49.90,
      descricao: "Para igrejas locais em início",
      features: [
        "Até 200 membros",
        "1 usuário (Pastor)",
        "Gestão de dízimos e ofertas",
        "Relatórios básicos",
        "Suporte por e-mail",
        "Certificados simples"
      ],
      buttonText: "Começar Agora",
      popular: false
    },
    {
      nome: "Profissional",
      preco: 99.90,
      descricao: "Para igrejas em crescimento",
      features: [
        "Membros ilimitados",
        "2+ usuários (Pastor + Tesoureiro)",
        "Split automático de repasses",
        "Relatórios completos + Sede",
        "Suporte prioritário 24/7",
        "Certificados personalizados",
        "Dashboard multi-igrejas"
      ],
      buttonText: "Mais Escolhido",
      popular: true
    },
    {
      nome: "Corporativo",
      preco: "Sob consulta",
      descricao: "Para sedes e redes de igrejas",
      features: [
        "Igrejas ilimitadas",
        "Usuários ilimitados",
        "Split configurável por igreja",
        "Dashboard consolidado em tempo real",
        "CRM com fluxo guiado",
        "Suporte dedicado 24/7",
        "API para integrações",
        "Treinamento incluso"
      ],
      buttonText: "Falar com Consultor",
      popular: false
    }
  ];

  const whatsappLink = `https://wa.me/5544991179564?text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o plano Corporativo do Berion Igrejas.`
  )}`;

  return (
    <Section>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <Badge>💰 Planos Transparentes</Badge>
          <Titulo>
            Escolha o plano ideal para <span>sua igreja</span>
          </Titulo>
          <Subtitulo>
            Comece com R$ 49,90 por igreja. Sem taxas escondidas. Cancele quando quiser.
          </Subtitulo>
        </div>

        {/* Calculadora */}
        <CalculadoraContainer>
          <CalculadoraTitle>
            <FaCalculator /> Calculadora de Preço
          </CalculadoraTitle>
          <CalculadoraGrid>
            <InputGroup>
              <label>🏛️ Número de igrejas</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  min="1"
                  value={igrejas}
                  onChange={(e) => setIgrejas(Math.max(1, Number(e.target.value)))}
                />
              </div>
            </InputGroup>

            <IgualIcon>=</IgualIcon>

            <CalculadoraResultado>
              <div className="label">Valor total mensal</div>
              <div className="value">R$ {precoTotal.toFixed(2)}</div>
              <div className="sub">por igreja: R$ {precoBasePorIgreja.toFixed(2)}/mês</div>
            </CalculadoraResultado>
          </CalculadoraGrid>
        </CalculadoraContainer>

        {/* Cards de Planos */}
        <PlanosGrid>
          {planos.map((plano, index) => (
            <PlanoCard key={index} popular={plano.popular}>
              {plano.popular && <PopularBadge>🔥 Mais Popular</PopularBadge>}
              <PlanoHeader popular={plano.popular}>
                <h3>{plano.nome}</h3>
                <div className="price">
                  {typeof plano.preco === 'number' ? (
                    <>R$ {plano.preco.toFixed(2)}</>
                  ) : (
                    plano.preco
                  )}
                  {typeof plano.preco === 'number' && <small>/mês</small>}
                </div>
                <div className="period">{plano.descricao}</div>
              </PlanoHeader>
              <PlanoBody>
                <FeatureList>
                  {plano.features.map((feature, idx) => (
                    <FeatureItem key={idx}>
                      <FaCheck /> {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
                {plano.nome === "Corporativo" ? (
                  <ButtonPlan href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={16} /> {plano.buttonText}
                  </ButtonPlan>
                ) : (
                  <ButtonPlan popular={plano.popular} href="#">
                    {plano.buttonText}
                  </ButtonPlan>
                )}
              </PlanoBody>
            </PlanoCard>
          ))}
        </PlanosGrid>

        <ObsText>
          🚀 Preços para ministérios com +100 igrejas? <a href="#">Fale com nosso time comercial</a>
          <br />
          * Mínimo de 2 usuários por igreja (Pastor + Tesoureiro)
        </ObsText>
      </Container>
    </Section>
  );
};

export default PlanosPrecos;