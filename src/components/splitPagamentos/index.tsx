import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
    FaCheck,
    FaArrowRight,
    FaPercentage,
    FaChurch,
    FaHandHoldingHeart,
    FaChartLine,
    FaCalculator,
    FaSlidersH,
    FaShieldAlt,
    FaWhatsapp,
    FaStar,
    FaRocket,
    FaWallet,
    FaExchangeAlt,
    FaCreditCard,
    FaBarcode,
    FaQrcode
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

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
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

// Calculator Section
const CalculatorSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const CalculatorContainer = styled.div`
  max-width: 1200px;
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

const CalculatorCard = styled.div`
  background: white;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
  border: 1px solid #E2E8F0;
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    color: #0F172A;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
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
      font-size: 1.2rem;
      outline: none;
    }
  }
`;

const SliderGroup = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    color: #0F172A;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 4px;
    -webkit-appearance: none;
    background: #E2E8F0;
    border-radius: 2px;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      background: #7C3AED;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(124, 58, 237, 0.3);
    }
  }

  .value {
    text-align: right;
    font-size: 0.85rem;
    color: #7C3AED;
    font-weight: 600;
    margin-top: 0.5rem;
  }
`;

const PercentuaisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PercentualItem = styled.div`
  background: #F8FAFC;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    color: #475569;
    font-size: 0.9rem;
  }

  .value {
    color: #7C3AED;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const ResultadosContainer = styled.div`
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const ResultadoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .label {
    color: #94A3B8;
  }

  .value {
    color: white;
    font-weight: 600;
  }
`;

const ResultadoTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-top: 0.5rem;
  background: rgba(124, 58, 237, 0.2);
  border-radius: 8px;
  padding: 1rem;
  font-weight: 700;

  .label {
    color: #F59E0B;
  }

  .value {
    color: #F59E0B;
    font-size: 1.2rem;
  }
`;

// How It Works Section
const HowItWorksSection = styled.section`
  padding: 5rem 2rem;
  background: #FFFFFF;
`;

const StepsGrid = styled.div`
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

const StepCard = styled.div`
  text-align: center;
  padding: 2rem;

  .step-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #7C3AED20, #C026D320);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-size: 1.5rem;
    font-weight: 800;
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

// Benefits Section
const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  color: white;
`;

const BenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const BenefitsTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
`;

const BenefitsSubtitle = styled.p`
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const BenefitsGrid = styled.div`
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

const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;

// Payment Methods Section
const PaymentSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentCard = styled.div`
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
    font-size: 1.2rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748B;
    font-size: 0.85rem;
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
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
    color: #94A3B8;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
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

const SplitPagamentos: React.FC = () => {
    const [valor, setValor] = React.useState<number>(1000);

    const percentuais = {
        sede: 15,
        fundoEspecial: 3,
        sedeRegional: 5,
        taxaSistema: 49.90
    };

        

        // Função para formatar o número como moeda brasileira (BRL)
        const formatarMoeda = (value: number) => {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(value);
        };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove tudo que não é dígito
    let value = e.target.value.replace(/\D/g, "");

    // Converte para número (considerando os últimos 2 dígitos como centavos)
    const numericValue = Number(value) / 100;

    setValor(numericValue);
  };

    const calcularRepasse = (tipo: keyof typeof percentuais) => {
        if (tipo === 'taxaSistema') return percentuais.taxaSistema;
        return (valor * percentuais[tipo]) / 100;
    };

    const totalRepasses = Object.keys(percentuais).reduce((acc, key) => {
        return acc + calcularRepasse(key as keyof typeof percentuais);
    }, 0);

    const saldoIgreja = valor - totalRepasses;

    const steps = [
        {
            number: "1",
            title: "Configure os percentuais",
            description: "Defina os percentuais de repasse para Sede, Regional, Fundo Especial e Pastor."
        },
        {
            number: "2",
            title: "Registre as contribuições",
            description: "Registre dízimos e ofertas normalmente. O sistema calcula automaticamente."
        },
        {
            number: "3",
            title: "Repasse automático",
            description: "Os valores são separados automaticamente e o repasse é gerado via PIX ou Boleto."
        }
    ];

    const benefits = [
        { icon: <FaShieldAlt />, title: "Transparência Total", description: "Todos os envolvidos veem exatamente para onde vai cada centavo." },
        { icon: <FaSlidersH />, title: "Configurável", description: "Percentuais ajustáveis por igreja ou globalmente." },
        { icon: <FaWallet />, title: "Economia de Tempo", description: "Elimine cálculos manuais e planilhas." }
    ];

    const paymentMethods = [
        { icon: <FaQrcode />, title: "PIX", description: "Pagamento instantâneo, 24/7" },
        { icon: <FaBarcode />, title: "Boleto", description: "Vencimento em 3 dias" },
        { icon: <FaCreditCard />, title: "Cartão", description: "Em breve" }
    ];

    return (
        <Container>
            {/* Hero Section */}
            <HeroSection>
                <HeroContent>
                    <HeroBadge>💰 Split Automático</HeroBadge>
                    <HeroTitle>
                        Divisão inteligente de <span>dízimos e ofertas</span>
                    </HeroTitle>
                    <HeroDescription>
                        Configure percentuais personalizados e tenha repasses automáticos e transparentes
                        entre sede, regionais, fundos e pastores.
                    </HeroDescription>
                </HeroContent>
            </HeroSection>

            {/* Calculator Section */}
            <CalculatorSection>
                <CalculatorContainer>
                    <SectionHeader>
                        <h2>Simule <span style={{ color: '#7C3AED' }}>seus repasses</span></h2>
                        <p>Calcule automaticamente como os valores são divididos</p>
                    </SectionHeader>
                    <CalculatorCard>
                        <InputGroup>
                            <label>💵 Valor total de dízimos/ofertas</label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    // Se o valor for 0, mostra vazio para o placeholder aparecer, 
                                    // caso contrário, exibe o valor formatado
                                    value={valor === 0 ? "" : formatarMoeda(valor)}
                                    onChange={handleChange}
                                    placeholder="R$ 0,00"
                                    // Dica de acessibilidade para abrir teclado numérico no celular
                                    inputMode="numeric"
                                />
                            </div>
                        </InputGroup>

                        <PercentuaisGrid>
                            <PercentualItem>
                                <span className="label">Sede Mundial</span>
                                <span className="value">{percentuais.sede}%</span>
                            </PercentualItem>
                            <PercentualItem>
                                <span className="label">Fundo Especial</span>
                                <span className="value">{percentuais.fundoEspecial}%</span>
                            </PercentualItem>
                            <PercentualItem>
                                <span className="label">Sede Regional</span>
                                <span className="value">{percentuais.sedeRegional}%</span>
                            </PercentualItem>
                        </PercentuaisGrid>

                        <ResultadosContainer>
                            <ResultadoItem>
                                <span className="label">Sede ({percentuais.sede}%)</span>
                                <span className="value">R$ {calcularRepasse('sede').toFixed(2)}</span>
                            </ResultadoItem>
                            <ResultadoItem>
                                <span className="label">Fundo Especial ({percentuais.fundoEspecial}%)</span>
                                <span className="value">R$ {calcularRepasse('fundoEspecial').toFixed(2)}</span>
                            </ResultadoItem>
                            <ResultadoItem>
                                <span className="label">Sede Regional ({percentuais.sedeRegional}%)</span>
                                <span className="value">R$ {calcularRepasse('sedeRegional').toFixed(2)}</span>
                            </ResultadoItem>
                            <ResultadoItem>
                                <span className="label">Taxa do Sistema</span>
                                <span className="value">R$ {calcularRepasse('taxaSistema').toFixed(2)}</span>
                            </ResultadoItem>
                            <ResultadoTotal>
                                <span className="label">Total de Repasses</span>
                                <span className="value">R$ {totalRepasses.toFixed(2)}</span>
                            </ResultadoTotal>
                            <ResultadoTotal style={{ background: 'rgba(245, 158, 11, 0.2)', marginTop: '0.5rem' }}>
                                <span className="label">🏛️ Saldo da Igreja Local</span>
                                <span className="value">R$ {saldoIgreja.toFixed(2)}</span>
                            </ResultadoTotal>
                        </ResultadosContainer>
                    </CalculatorCard>
                </CalculatorContainer>
            </CalculatorSection>

            {/* How It Works Section */}
            <HowItWorksSection>
                <SectionHeader>
                    <h2>Como funciona o <span style={{ color: '#7C3AED' }}>Split?</span></h2>
                    <p>Simples, automático e transparente</p>
                </SectionHeader>
                <StepsGrid>
                    {steps.map((step, index) => (
                        <StepCard key={index}>
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </StepCard>
                    ))}
                </StepsGrid>
            </HowItWorksSection>

            {/* Benefits Section */}
            <BenefitsSection>
                <BenefitsContainer>
                    <BenefitsTitle>Vantagens do <span style={{ color: '#F59E0B' }}>Split Automático</span></BenefitsTitle>
                    <BenefitsSubtitle>
                        Transparência e eficiência na gestão financeira da sua igreja
                    </BenefitsSubtitle>
                    <BenefitsGrid>
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index}>
                                {benefit.icon}
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </BenefitCard>
                        ))}
                    </BenefitsGrid>
                </BenefitsContainer>
            </BenefitsSection>

            {/* Payment Methods Section */}
            <PaymentSection>
                <SectionHeader>
                    <h2>Métodos de <span style={{ color: '#7C3AED' }}>Pagamento</span></h2>
                    <p>Repasses facilitados com as melhores opções</p>
                </SectionHeader>
                <PaymentGrid>
                    {paymentMethods.map((method, index) => (
                        <PaymentCard key={index}>
                            {method.icon}
                            <h3>{method.title}</h3>
                            <p>{method.description}</p>
                        </PaymentCard>
                    ))}
                </PaymentGrid>
            </PaymentSection>

            {/* CTA Section */}
            <CTASection>
                <CTAContent>
                    <h2>Pronto para ter transparência total?</h2>
                    <p>
                        Comece a usar o split automático do Berion Igrejas e tenha repasses
                        transparentes e automáticos para sua sede.
                    </p>
                    <CTAButton href="/comecar">
                        Começar Agora <FaArrowRight />
                    </CTAButton>
                </CTAContent>
            </CTASection>
        </Container>
    );
};

export default SplitPagamentos;