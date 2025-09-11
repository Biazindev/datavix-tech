import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

const Whatsapp = FaWhatsapp as unknown as React.FC<IconBaseProps>;
const Linkedin = FaLinkedin as unknown as React.FC<IconBaseProps>;
const Instagram = FaInstagram as unknown as React.FC<IconBaseProps>;
const Youtube = FaYoutube as unknown as React.FC<IconBaseProps>;
const Envelope = FaEnvelope as unknown as React.FC<IconBaseProps>;
const MapMarkerAlt = FaMapMarkerAlt as unknown as React.FC<IconBaseProps>;






const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #012c3d 0%, #001a24 100%);
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
    background: linear-gradient(90deg, #00c3ff 0%, #009fe3 100%);
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

  img {
    width: 120px;
    height: auto;
    margin-bottom: 10px;
    filter: brightness(0) invert(1);
  }

  p {
    color: #cfd8dc;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  a {
    color: #cfd8dc;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      color: #00c3ff;
      transform: translateX(5px);
    }
  }

  h4 {
    margin-bottom: 15px;
    font-size: 1.1rem;
    color: #ffffff;
    position: relative;
    padding-bottom: 8px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: #00c3ff;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;

  svg {
    color: #00c3ff;
    font-size: 1rem;
    margin-top: 3px;
    flex-shrink: 0;
  }

  div {
    color: #cfd8dc;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: white;
    font-size: 1.3rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);

    &:hover {
      color: white;
      background: #00c3ff;
      transform: translateY(-3px);
    }
  }
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    color: #cfd8dc;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  form {
    display: flex;
    gap: 10px;

    input {
      flex: 1;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      font-size: 0.9rem;
      background: rgba(255, 255, 255, 0.9);
    }

    button {
      background: #00c3ff;
      color: white;
      border: none;
      padding: 0 20px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #009fe3;
      }
    }
  }
`;

const Copyright = styled.div`
  max-width: 1400px;
  margin: 40px auto 0;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  font-size: 0.8rem;
  color: #8a9ba8;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  a {
    color: #8a9ba8;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00c3ff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <img src="/logo.svg" alt="Logo DataVix" />
          <p>Soluções tecnológicas inovadoras para transformar seu negócio e impulsionar seus resultados.</p>
          
          <SocialIcons>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="YouTube"><Youtube /></a>
            <a href="#" aria-label="WhatsApp"><Whatsapp /></a>
          </SocialIcons>
        </LogoSection>

        <Column>
          <h4>Institucional</h4>
          <a href="#">Sobre Nós</a>
          <a href="#">Nossa História</a>
          <a href="#">Equipe</a>
          <a href="#">Cases de Sucesso</a>
          <a href="#">Certificações</a>
          <a href="#">Trabalhe Conosco</a>
        </Column>

        <Column>
          <h4>Produtos</h4>
          <a href="#">Berion Gestor</a>
          <a href="#">Garage360</a>
          <a href="#">DataVix ERP</a>
          <a href="#">Soluções em IA</a>
          <a href="#">Integrações</a>
          <a href="#">Planos e Preços</a>
        </Column>

        <Column>
          <h4>Contato</h4>
          <ContactItem>
            <MapMarkerAlt />
            <div>
              Maringá - PR<br />
              CEP 87013-230
            </div>
          </ContactItem>
          
          <ContactItem>
            <Whatsapp />
            <div>
              <a href="https://wa.me/5544991179564" target="_blank" rel="noopener noreferrer">
                (44) 99117-9564
              </a>
              <a href="https://wa.me/5517981352391" target="_blank" rel="noopener noreferrer">
                (17) 98135-2391
              </a>
            </div>
          </ContactItem>
          
          <ContactItem>
            <Envelope />
            <div>
              <a href="mailto:contato@datavix.com.br">
                contato@datavix.com.br
              </a>
            </div>
          </ContactItem>
        </Column>

        <Column>
          <h4>Newsletter</h4>
          <Newsletter>
            <p>Assine nossa newsletter e receba novidades e conteúdos exclusivos.</p>
            <form>
              <input type="email" placeholder="Seu e-mail" />
              <button type="submit">OK</button>
            </form>
          </Newsletter>
        </Column>
      </FooterContent>

      <Copyright>
        <div>© {new Date().getFullYear()} DataVix. Todos os direitos reservados.</div>
        <div>
          <a href="#">Política de Privacidade</a> | <a href="#">Termos de Uso</a> | <a href="#">Cookies</a>
        </div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;