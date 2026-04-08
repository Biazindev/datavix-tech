import React from 'react';
import styled from 'styled-components';
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChurch,
  FaHandHoldingHeart,
  FaFileAlt,
  FaQuestionCircle
} from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

// Tipagem dos ícones
const Whatsapp = FaWhatsapp as unknown as React.FC<IconBaseProps>;
const Linkedin = FaLinkedin as unknown as React.FC<IconBaseProps>;
const Instagram = FaInstagram as unknown as React.FC<IconBaseProps>;
const Youtube = FaYoutube as unknown as React.FC<IconBaseProps>;
const Envelope = FaEnvelope as unknown as React.FC<IconBaseProps>;
const MapMarkerAlt = FaMapMarkerAlt as unknown as React.FC<IconBaseProps>;
const Church = FaChurch as unknown as React.FC<IconBaseProps>;
const HandHeart = FaHandHoldingHeart as unknown as React.FC<IconBaseProps>;
const FileAlt = FaFileAlt as unknown as React.FC<IconBaseProps>;
const QuestionCircle = FaQuestionCircle as unknown as React.FC<IconBaseProps>;

// ============================================
// STYLED COMPONENTS
// ============================================

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  color: white;
  padding: 60px 5% 30px;
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
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;

    .logo-icon {
      width: 45px;
      height: 45px;
      background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 800;
      color: white;
    }

    .logo-text {
      font-size: 1.6rem;
      font-weight: 800;
      background: linear-gradient(135deg, #FFFFFF 0%, #A855F7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-tag {
      font-size: 0.7rem;
      color: #F59E0B;
      letter-spacing: 2px;
    }
  }

  p {
    color: #94A3B8;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  a {
    color: #94A3B8;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      color: #A855F7;
      transform: translateX(5px);
    }
  }

  h4 {
    margin-bottom: 15px;
    font-size: 1.1rem;
    color: #FFFFFF;
    position: relative;
    padding-bottom: 10px;
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background: linear-gradient(90deg, #A855F7, #F59E0B);
      border-radius: 2px;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;

  svg {
    color: #A855F7;
    font-size: 1rem;
    margin-top: 3px;
    flex-shrink: 0;
  }

  div {
    color: #94A3B8;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  a {
    display: inline;
    padding: 0;
    color: #94A3B8;
    
    &:hover {
      color: #F59E0B;
      transform: none;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;

  a {
    color: white;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.2);
    border: 1px solid rgba(124, 58, 237, 0.3);

    &:hover {
      color: white;
      background: linear-gradient(135deg, #7C3AED, #C026D3);
      transform: translateY(-3px);
      border-color: transparent;
    }
  }
`;

const NewsletterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Centraliza o grupo todo */
  gap: 20px;
  
  /* Largura automática baseada no conteúdo, não força 100% */
  width: fit-content; 
  margin: 40px auto;
  
  padding: 10px 30px; 
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 100px; /* Agora sim será uma pílula perfeita */

  h4 {
    margin: 0;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
  }

  p {
    margin: 0;
    color: #94A3B8;
    font-size: 0.85rem;
    white-space: nowrap; /* Trava em uma linha */
    padding: 0 10px;
  }

  form {
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      width: 220px;
      height: 38px; /* Altura reduzida para ficar elegante dentro da pílula */
      padding: 0 15px;
      border: 1px solid rgba(168, 85, 247, 0.3);
      border-radius: 50px;
      background: rgba(0, 0, 0, 0.2);
      color: white;
      font-size: 0.8rem;

      &:focus {
        outline: none;
        border-color: #A855F7;
      }
    }

    button {
      height: 38px;
      padding: 0 20px;
      border-radius: 50px;
      background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
      color: white;
      font-weight: 600;
      font-size: 0.8rem;
      border: none;
      cursor: pointer;
      white-space: nowrap;
    }
  }

  /* Se a tela for pequena, a pílula vira um card normal */
  @media (max-width: 900px) {
    flex-direction: column;
    border-radius: 20px;
    width: 90%;
    padding: 20px;
    
    p { white-space: normal; text-align: center; }
    form { 
      width: 100%; 
      flex-direction: column;
      input { width: 100%; }
      button { width: 100%; }
    }
  }
`;
const Copyright = styled.div`
  max-width: 1400px;
  margin: 50px auto 0;
  padding-top: 30px;
  border-top: 1px solid rgba(124, 58, 237, 0.2);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  font-size: 0.8rem;
  color: #64748B;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  a {
    color: #64748B;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #A855F7;
    }
  }

  .heart {
    color: #F59E0B;
  }
`;

const Badge = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  span {
    font-size: 0.7rem;
    padding: 4px 10px;
    background: rgba(124, 58, 237, 0.15);
    border-radius: 50px;
    color: #A855F7;
    border: 1px solid rgba(124, 58, 237, 0.3);
  }
`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo Section */}
        <LogoSection>
          <div className="logo">
            <div className="logo-icon" style={{ marginRight: '-8px' }}>B</div>
            <div>
              <div className="logo-text">erion</div>
              <div className="logo-tag">IGREJAS</div>
            </div>
          </div>
          <p>
            Plataforma completa para gestão eclesiástica com split automático de dízimos,
            relatórios inteligentes e suporte dedicado.
          </p>
          <SocialIcons>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="YouTube"><Youtube /></a>
            <a href="#" aria-label="WhatsApp"><Whatsapp /></a>
          </SocialIcons>
          <Badge>
            <span>✨ Multitenant</span>
            <span>🔒 SSL Security</span>
            <span>⚡ 24/7 Suporte</span>
          </Badge>
        </LogoSection>

        {/* Institucional */}
        <Column>
          <h4>Sobre Berion</h4>
          <a href="#"><Church /> Quem Somos</a>
          <a href="#"><HandHeart /> Nossa Missão</a>
          <a href="#"><FileAlt /> Blog e Novidades</a>
          <a href="#"><QuestionCircle /> Central de Ajuda</a>
          <a href="#">📢 Seja um Parceiro</a>
          <a href="#">💼 Trabalhe Conosco</a>
        </Column>

        {/* Soluções */}
        <Column>
          <h4>Soluções</h4>
          <a href="#">🏛️ Para Igrejas Locais</a>
          <a href="#">🌍 Para Sedes e Redes</a>
          <a href="#">💰 Split de Pagamentos</a>
          <a href="#">📊 Relatórios Automáticos</a>
          <a href="#">👥 Gestão de Membros</a>
          <a href="#">🎯 CRM com Fluxo Guiado</a>
        </Column>

        {/* Contato */}
        <Column>
          <h4>Contato</h4>
          <ContactItem>
            <MapMarkerAlt />
            <div>
              Av. Napoleão Moreira da Silva, 430<br />
              Centro - Terra Boa - PR<br />
              CEP: 87240-000
            </div>
          </ContactItem>

          <ContactItem>
            <Whatsapp />
            <div>
              <a href="https://wa.me/5544991179564" target="_blank" rel="noopener noreferrer">
                (44) 99117-9564
              </a><br />
              <a href="https://wa.me/5517981352391" target="_blank" rel="noopener noreferrer">
                (17) 98135-2391
              </a>
            </div>
          </ContactItem>

          <ContactItem>
            <Envelope />
            <div>
              <a href="mailto:help@biazinsistemas.com">
                help@biazinsistemas.com
              </a>
            </div>
          </ContactItem>
        </Column>

        {/* Newsletter */}
          <NewsletterRow>
            <h4>Newsletter</h4>

            <p>Receba novidades e conteúdos exclusivos sobre gestão.</p>

            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Seu melhor e-mail" />
              <button type="submit">Inscrever</button>
            </form>
          </NewsletterRow>
      </FooterContent>
      <Copyright>
        <div>
          © {new Date().getFullYear()} <strong style={{ color: '#A855F7' }}>Berion Igrejas</strong>.
          Todos os direitos reservados.
        </div>
        <div>
          <a href="#">Política de Privacidade</a> •
          <a href="#"> Termos de Uso</a> •
          <a href="#"> Cookies</a> •
          <a href="#"> LGPD</a>
        </div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;