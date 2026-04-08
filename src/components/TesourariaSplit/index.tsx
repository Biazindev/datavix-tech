import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
    FaCheck,
    FaArrowRight,
    FaMoneyBillWave,
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
    FaQrcode,
    FaFileInvoice,
    FaHistory,
    FaDownload,
    FaEye,
    FaBell,
    FaChurch,
    FaUserFriends
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

// Entries Section
const EntriesSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const EntriesContainer = styled.div`
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

const EntriesGrid = styled.div`
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

const EntryCard = styled.div`
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
    margin-bottom: 0.75rem;
  }

  p {
    color: #64748B;
    line-height: 1.5;
    font-size: 0.9rem;
  }
`;

// Calculator Section
const CalculatorSection = styled.section`
  padding: 5rem 2rem;
  background: #FFFFFF;
`;

const CalculatorContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CalculatorCard = styled.div`
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    color: #94A3B8;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 12px;
    transition: all 0.3s ease;

    &:focus-within {
      border-color: #7C3AED;
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
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
      font-size: 1.2rem;
      color: white;
      outline: none;

      &::placeholder {
        color: #475569;
      }
    }
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ToggleButton = styled.button<{ active: boolean }>`
  flex: 1;
  background: ${({ active }) => active ? 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${({ active }) => active ? 'white' : '#94A3B8'};
  border: 1px solid ${({ active }) => active ? 'transparent' : 'rgba(124, 58, 237, 0.3)'};
  padding: 0.75rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) => !active && 'rgba(124, 58, 237, 0.1)'};
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
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    color: #94A3B8;
    font-size: 0.9rem;
  }

  .value {
    color: #A855F7;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const ResultadosContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
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

// Expenses Section
const ExpensesSection = styled.section`
  padding: 5rem 2rem;
  background: #F8FAFC;
`;

const ExpensesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExpenseCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #E2E8F0;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 1.8rem;
    color: #7C3AED;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 600;
    color: #0F172A;
  }
`;

// Reports Section
const ReportsSection = styled.section`
  padding: 5rem 2rem;
  background: #FFFFFF;
`;

const ReportsGrid = styled.div`
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

const ReportCard = styled.div`
  background: #F8FAFC;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  border: 1px solid #E2E8F0;

  &:hover {
    transform: translateX(5px);
    border-color: rgba(124, 58, 237, 0.2);
  }

  svg {
    font-size: 2rem;
    color: #7C3AED;
  }

  .info {
    flex: 1;

    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.8rem;
      color: #64748B;
    }
  }

  button {
    background: transparent;
    border: none;
    color: #7C3AED;
    cursor: pointer;
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

const TesourariaSplit: React.FC = () => {
    const [valor, setValor] = useState<number>(3000);
    const [tipoContribuicao, setTipoContribuicao] = useState<'membros' | 'naoMembros'>('membros');

    // Função para formatar o número como moeda brasileira (BRL)
    const formatarMoeda = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    const percentuais = {
        sede: 15,
        fundoEspecial: 3,
        sedeRegional: 5,
        taxaSistema: 49.90
    };

    const calcularRepasse = (tipo: keyof typeof percentuais) => {
        if (tipo === 'taxaSistema') return percentuais.taxaSistema;
        return (valor * percentuais[tipo]) / 100;
    };

    const totalRepasses = Object.keys(percentuais).reduce((acc, key) => {
        return acc + calcularRepasse(key as keyof typeof percentuais);
    }, 0);

    const saldoIgreja = valor - totalRepasses;

    const entries = [
        {
            icon: <FaHandHoldingHeart />,
            title: "Dízimos",
            description: "Registro de dízimos de membros e não membros"
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Ofertas",
            description: "Ofertas com suporte a múltiplos pagamentos"
        },
        {
            icon: <FaStar />,
            title: "Votos",
            description: "Votos com nome opcional do contribuinte"
        }
    ];

    const expenses = [
        "Aluguel", "Água/Energia", "Telefone", "Programa de Rádio",
        "Eventos", "Santa Ceia", "Manutenção", "Viagens",
        "Equipamentos", "Materiais", "Salários", "Outros"
    ];

    const reports = [
        { icon: <FaChartLine />, title: "Dashboard Financeiro", description: "Visão completa das finanças" },
        { icon: <FaFileInvoice />, title: "Extrato por Período", description: "Detalhamento diário/mensal/anual" },
        { icon: <FaDownload />, title: "Exportar Relatórios", description: "PDF, Excel e CSV" },
        { icon: <FaHistory />, title: "Histórico de Transações", description: "Todas as movimentações" }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Remove tudo que não é dígito
        let value = e.target.value.replace(/\D/g, "");

        // Converte para número (considerando os últimos 2 dígitos como centavos)
        const numericValue = Number(value) / 100;

        setValor(numericValue);
    };

    return (
        <Container>
            {/* Hero Section */}
            <HeroSection>
                <HeroContent>
                    <HeroBadge>💰 Tesouraria e Split</HeroBadge>
                    <HeroTitle>
                        Gestão financeira completa com <span>split automático</span>
                    </HeroTitle>
                    <HeroDescription>
                        Registre dízimos, ofertas e votos. O sistema calcula automaticamente os repasses
                        para sede, regional, fundos e pastor. Transparência total.
                    </HeroDescription>
                </HeroContent>
            </HeroSection>

            {/* Entries Section */}
            <EntriesSection>
                <EntriesContainer>
                    <SectionHeader>
                        <h2>Registro de <span style={{ color: '#7C3AED' }}>Entradas</span></h2>
                        <p>Registre todas as contribuições da sua igreja</p>
                    </SectionHeader>
                    <EntriesGrid>
                        {entries.map((entry, index) => (
                            <EntryCard key={index}>
                                <div className="icon">{entry.icon}</div>
                                <h3>{entry.title}</h3>
                                <p>{entry.description}</p>
                            </EntryCard>
                        ))}
                    </EntriesGrid>
                </EntriesContainer>
            </EntriesSection>

            {/* Calculator Section */}
            <CalculatorSection>
                <CalculatorContainer>
                    <SectionHeader>
                        <h2>Simule os <span style={{ color: '#7C3AED' }}>Repasses</span></h2>
                        <p>Calcule automaticamente como os valores são divididos</p>
                    </SectionHeader>
                    <CalculatorCard>
                        <InputGroup>
                            <label>💵 Valor total de dízimos/ofertas</label>
                            <div className="input-wrapper">
                                <span>R$</span>
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

                        <ToggleGroup>
                            <ToggleButton
                                active={tipoContribuicao === 'membros'}
                                onClick={() => setTipoContribuicao('membros')}
                            >
                                <FaUserFriends /> Membros
                            </ToggleButton>
                            <ToggleButton
                                active={tipoContribuicao === 'naoMembros'}
                                onClick={() => setTipoContribuicao('naoMembros')}
                            >
                                <FaChurch /> Não Membros
                            </ToggleButton>
                        </ToggleGroup>

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
                                <span className="label">💰 Total de Repasses</span>
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

            {/* Expenses Section */}
            <ExpensesSection>
                <SectionHeader>
                    <h2>Controle de <span style={{ color: '#7C3AED' }}>Saídas</span></h2>
                    <p>Registre todas as despesas da igreja</p>
                </SectionHeader>
                <ExpensesGrid>
                    {expenses.map((expense, index) => (
                        <ExpenseCard key={index}>
                            <FaMoneyBillWave />
                            <h3>{expense}</h3>
                        </ExpenseCard>
                    ))}
                </ExpensesGrid>
            </ExpensesSection>

            {/* Reports Section */}
            <ReportsSection>
                <SectionHeader>
                    <h2>Relatórios <span style={{ color: '#7C3AED' }}>Financeiros</span></h2>
                    <p>Acompanhe todas as movimentações da sua igreja</p>
                </SectionHeader>
                <ReportsGrid>
                    {reports.map((report, index) => (
                        <ReportCard key={index}>
                            {report.icon}
                            <div className="info">
                                <h3>{report.title}</h3>
                                <p>{report.description}</p>
                            </div>
                            <button><FaEye /></button>
                        </ReportCard>
                    ))}
                </ReportsGrid>
            </ReportsSection>

            {/* CTA Section */}
            <CTASection>
                <CTAContent>
                    <h2>Pronto para ter controle financeiro total?</h2>
                    <p>
                        Registre entradas e saídas, calcule repasses automaticamente e tenha
                        transparência total nas finanças da sua igreja.
                    </p>
                    <CTAButton href="/comecar">
                        Começar Agora <FaArrowRight />
                    </CTAButton>
                </CTAContent>
            </CTASection>
        </Container>
    );
};

export default TesourariaSplit;