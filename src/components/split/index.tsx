import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPercentage, FaChurch, FaHandHoldingHeart, FaChartLine, FaCalculator } from 'react-icons/fa';

// ============================================
// STYLED COMPONENTS
// ============================================

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #7C3AED, #F59E0B, #7C3AED, transparent);
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Badge = styled.span`
  display: inline-block;
  background: rgba(124, 58, 237, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #A855F7;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(124, 58, 237, 0.3);
`;

const Titulo = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 1rem;
  
  span {
    background: linear-gradient(135deg, #A855F7 0%, #F59E0B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitulo = styled.p`
  font-size: clamp(0.95rem, 3vw, 1.1rem);
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #94A3B8;
  line-height: 1.6;
  text-align: center;
`;

const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CalculadoraCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: #CBD5E1;
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    border: 1px solid rgba(124, 58, 237, 0.3);
    transition: all 0.3s ease;

    &:focus-within {
      border-color: #A855F7;
      box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.2);
    }

    span {
      padding: 0 1rem;
      color: #A855F7;
      font-weight: 600;
    }

    input {
      width: 100%;
      padding: 1rem;
      background: transparent;
      border: none;
      color: white;
      font-size: 1rem;
      outline: none;

      &::placeholder {
        color: #475569;
      }
    }
  }
`;

const ResultadosContainer = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ResultadoItem = styled.div<{ highlight?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  .label {
    color: ${({ highlight }) => highlight ? '#F59E0B' : '#94A3B8'};
    font-weight: ${({ highlight }) => highlight ? '600' : '400'};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .value {
    color: ${({ highlight }) => highlight ? '#F59E0B' : '#FFFFFF'};
    font-weight: ${({ highlight }) => highlight ? '700' : '600'};
    font-size: ${({ highlight }) => highlight ? '1.2rem' : '1rem'};
  }
`;

const TotalResultado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(192, 38, 211, 0.1));
  border-radius: 12px;
  padding: 1rem;

  .label {
    color: #A855F7;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .value {
    color: #F59E0B;
    font-weight: 800;
    font-size: 1.3rem;
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1.5rem;
  padding: 2rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoText = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PercentuaisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
`;

const PercentualItem = styled.div`
  background: rgba(124, 58, 237, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;

  .percent {
    font-size: 1.5rem;
    font-weight: 800;
    color: #A855F7;
  }

  .label {
    font-size: 0.8rem;
    color: #94A3B8;
    margin-top: 0.25rem;
  }
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const SplitDemonstrativo: React.FC = () => {
  const [valor, setValor] = useState<number>(1000);

  const percentuais = {
    sede: 15,
    fundoEspecial: 3,
    sedeRegional: 5,
    pastor: 10,
    taxaSistema: 39.90
  };

  const calcularRepasse = (tipo: keyof typeof percentuais) => {
    if (tipo === 'taxaSistema') return percentuais.taxaSistema;
    return (valor * percentuais[tipo]) / 100;
  };

  const totalRepasses = Object.keys(percentuais).reduce((acc, key) => {
    return acc + calcularRepasse(key as keyof typeof percentuais);
  }, 0);

  const saldoIgreja = valor - totalRepasses;

  return (
    <Section>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <Badge>💰 Split Automático de Repasses</Badge>
          <Titulo>
            Transparência total com <span>divisão automática</span>
          </Titulo>
          <Subtitulo>
            Configure percentuais personalizados e tenha repasses automáticos para sede, 
            regionais, fundos e pastores.
          </Subtitulo>
        </div>

        <SplitContainer>
          {/* Calculadora */}
          <CalculadoraCard>
            <InputGroup>
              <label>💵 Valor total de dízimos/ofertas (R$)</label>
              <div className="input-wrapper">
                <span>R$</span>
                <input
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(Number(e.target.value))}
                  placeholder="0,00"
                />
              </div>
            </InputGroup>

            <ResultadosContainer>
              <ResultadoItem>
                <span className="label">
                  <FaChurch size={12} /> Sede Mundial (15%)
                </span>
                <span className="value">R$ {calcularRepasse('sede').toFixed(2)}</span>
              </ResultadoItem>
              <ResultadoItem>
                <span className="label">
                  <FaHandHoldingHeart size={12} /> Fundo Especial (3%)
                </span>
                <span className="value">R$ {calcularRepasse('fundoEspecial').toFixed(2)}</span>
              </ResultadoItem>
              <ResultadoItem>
                <span className="label">
                  <FaChartLine size={12} /> Sede Regional (5%)
                </span>
                <span className="value">R$ {calcularRepasse('sedeRegional').toFixed(2)}</span>
              </ResultadoItem>
              <ResultadoItem>
                <span className="label">🙏 Dízimo do Pastor (10%)</span>
                <span className="value">R$ {calcularRepasse('pastor').toFixed(2)}</span>
              </ResultadoItem>
              <ResultadoItem>
                <span className="label">⚙️ Taxa do Sistema</span>
                <span className="value">R$ {calcularRepasse('taxaSistema').toFixed(2)}</span>
              </ResultadoItem>
              
              <TotalResultado>
                <span className="label">💰 Total de Repasses</span>
                <span className="value">R$ {totalRepasses.toFixed(2)}</span>
              </TotalResultado>
              
              <ResultadoItem highlight>
                <span className="label">🏛️ Saldo da Igreja Local</span>
                <span className="value">R$ {saldoIgreja.toFixed(2)}</span>
              </ResultadoItem>
            </ResultadosContainer>
          </CalculadoraCard>

          {/* Informações */}
          <InfoCard>
            <InfoTitle>
              <FaCalculator /> Como funciona?
            </InfoTitle>
            <InfoText>
              O Berion Igrejas calcula automaticamente os repasses baseado nos percentuais 
              configurados pela sede. Tudo é transparente e auditável.
            </InfoText>

            <PercentuaisGrid>
              <PercentualItem>
                <div className="percent">15%</div>
                <div className="label">Sede Mundial</div>
              </PercentualItem>
              <PercentualItem>
                <div className="percent">3%</div>
                <div className="label">Fundo Especial</div>
              </PercentualItem>
              <PercentualItem>
                <div className="percent">5%</div>
                <div className="label">Sede Regional</div>
              </PercentualItem>
              <PercentualItem>
                <div className="percent">10%</div>
                <div className="label">Dízimo do Pastor</div>
              </PercentualItem>
            </PercentuaisGrid>

            <InfoText style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
              🔧 Percentuais 100% configuráveis por igreja ou globalmente pelo Admin Master.
            </InfoText>
          </InfoCard>
        </SplitContainer>
      </Container>
    </Section>
  );
};

export default SplitDemonstrativo;