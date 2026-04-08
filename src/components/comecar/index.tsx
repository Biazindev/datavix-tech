import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCheck, 
  FaArrowRight, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone,
  FaUser,
  FaChurch,
  FaUsers,
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaHeadset
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

// Steps Section
const StepsSection = styled.section`
  padding: 4rem 2rem;
  background: #F8FAFC;
`;

const StepsContainer = styled.div`
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

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #E2E8F0;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -12px rgba(124, 58, 237, 0.15);
    border-color: rgba(124, 58, 237, 0.2);
  }

  .step-number {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 1rem;
  }

  p {
    color: #64748B;
    line-height: 1.6;
  }
`;

// Form Section
const FormSection = styled.section`
  padding: 4rem 2rem;
  background: #FFFFFF;
`;

const FormContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormInfo = styled.div`
  h2 {
    font-size: 1.8rem;
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
  margin-top: 2rem;
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

const FormCard = styled.div`
  background: #F8FAFC;
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid #E2E8F0;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #0F172A;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #7C3AED;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #7C3AED;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #7C3AED;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  color: white;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
  }
`;

const SuccessMessage = styled.div`
  background: #10B98120;
  border: 1px solid #10B981;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  color: #10B981;
  font-weight: 600;
  margin-bottom: 1rem;
`;

// Pricing Preview
const PricingSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  text-align: center;
`;

const PricingContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const PricingTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`;

const PricingSubtitle = styled.p`
  color: #94A3B8;
  margin-bottom: 2rem;
`;

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid rgba(124, 58, 237, 0.3);
`;

const PriceValue = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #F59E0B;
  margin-bottom: 0.5rem;

  small {
    font-size: 1rem;
    color: #94A3B8;
  }
`;

const PriceFeatures = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 2rem 0;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #CBD5E1;
    font-size: 0.9rem;

    svg {
      color: #10B981;
    }
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 4rem 2rem;
  background: #F8FAFC;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;

  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 1rem;
  }

  p {
    color: #64748B;
    margin-bottom: 2rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const WhatsAppButton = styled.a`
  background: #25D366;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
  }
`;

const PhoneButton = styled.a`
  background: transparent;
  color: #7C3AED;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1.5px solid #7C3AED;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.1);
    transform: translateY(-2px);
  }
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Comecar: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    igreja: '',
    cargo: '',
    membros: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com API de envio de formulário
    console.log('Formulário enviado:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const steps = [
    {
      number: "1",
      title: "Preencha o formulário",
      description: "Conte-nos sobre sua igreja e suas necessidades. Nosso time analisará seu caso."
    },
    {
      number: "2",
      title: "Agende uma demonstração",
      description: "Mostraremos todas as funcionalidades do Berion Igrejas em uma reunião personalizada."
    },
    {
      number: "3",
      title: "Comece a usar",
      description: "Ativamos sua conta e fornecemos treinamento para sua equipe começar imediatamente."
    }
  ];

  const benefits = [
    { text: "Suporte prioritário 24/7", icon: <FaHeadset /> },
    { text: "Treinamento incluso", icon: <FaStar /> },
    { text: "Migração de dados gratuita", icon: <FaRocket /> },
    { text: "Primeiros 30 dias grátis", icon: <FaCalendarAlt /> }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroBadge>🚀 Comece Agora</HeroBadge>
          <HeroTitle>
            Comece sua jornada com <span>Berion Igrejas</span>
          </HeroTitle>
          <HeroDescription>
            Junte-se a centenas de igrejas que já transformaram sua gestão com nossa plataforma.
            Preencha o formulário e nosso time entrará em contato.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Steps Section */}
      <StepsSection>
        <StepsContainer>
          <SectionHeader>
            <h2>Como <span style={{ color: '#7C3AED' }}>começar</span></h2>
            <p>Três passos simples para transformar sua gestão</p>
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
        </StepsContainer>
      </StepsSection>

      {/* Form Section */}
      <FormSection>
        <FormContainer>
          <FormInfo>
            <h2>Queremos conhecer <span style={{ color: '#7C3AED' }}>sua igreja</span></h2>
            <p>
              Preencha o formulário ao lado e nosso time de especialistas entrará em contato 
              para entender suas necessidades e oferecer a melhor solução para sua igreja.
            </p>
            <BenefitsList>
              {benefits.map((benefit, index) => (
                <BenefitItem key={index}>
                  {benefit.icon} {benefit.text}
                </BenefitItem>
              ))}
            </BenefitsList>
          </FormInfo>

          <FormCard>
            {submitted && (
              <SuccessMessage>
                ✅ Formulário enviado com sucesso! Entraremos em contato em breve.
              </SuccessMessage>
            )}
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Nome completo *</Label>
                <Input 
                  type="text" 
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>E-mail *</Label>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Telefone/WhatsApp *</Label>
                <Input 
                  type="tel" 
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Nome da igreja *</Label>
                <Input 
                  type="text" 
                  name="igreja"
                  placeholder="Nome da sua igreja"
                  value={formData.igreja}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Seu cargo na igreja</Label>
                <Select name="cargo" value={formData.cargo} onChange={handleChange}>
                  <option value="">Selecione seu cargo</option>
                  <option value="pastor">Pastor/Pastora</option>
                  <option value="tesoureiro">Tesoureiro(a)</option>
                  <option value="secretario">Secretário(a)</option>
                  <option value="presidente">Presidente</option>
                  <option value="outro">Outro</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Quantos membros ativos?</Label>
                <Select name="membros" value={formData.membros} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="0-50">Até 50 membros</option>
                  <option value="51-200">51 - 200 membros</option>
                  <option value="201-500">201 - 500 membros</option>
                  <option value="501-1000">501 - 1000 membros</option>
                  <option value="1000+">Mais de 1000 membros</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Mensagem (opcional)</Label>
                <TextArea 
                  name="mensagem"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                  value={formData.mensagem}
                  onChange={handleChange}
                />
              </FormGroup>

              <SubmitButton type="submit">
                Solicitar Demonstração <FaArrowRight />
              </SubmitButton>
            </form>
          </FormCard>
        </FormContainer>
      </FormSection>

      {/* Pricing Preview */}
      <PricingSection>
        <PricingContainer>
          <PricingTitle>Planos a partir de <span style={{ color: '#F59E0B' }}>R$ 49,90</span></PricingTitle>
          <PricingSubtitle>por igreja/mês, com mínimo de 2 usuários</PricingSubtitle>
          <PricingCard>
            <PriceValue>
              R$ 49,90 <small>/mês por igreja</small>
            </PriceValue>
            <PriceFeatures>
              <span><FaCheck /> Gestão de membros</span>
              <span><FaCheck /> Split automático</span>
              <span><FaCheck /> Relatórios completos</span>
              <span><FaCheck /> Suporte 24/7</span>
            </PriceFeatures>
          </PricingCard>
        </PricingContainer>
      </PricingSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <h2>Prefere falar com um especialista?</h2>
          <p>
            Nosso time está pronto para tirar suas dúvidas e ajudar sua igreja a começar.
          </p>
          <CTAButtons>
            <WhatsAppButton href="https://wa.me/5544991179564" target="_blank">
              <FaWhatsapp /> Falar no WhatsApp
            </WhatsAppButton>
            <PhoneButton href="tel:44991179564">
              <FaPhone /> Ligar agora
            </PhoneButton>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default Comecar;