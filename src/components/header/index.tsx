import styled from 'styled-components';
import { FaSortDown, FaWhatsapp, FaUser, FaBars, FaTimes, FaChurch, FaHandHoldingHeart, FaChartLine, FaHeadset } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link, useNavigate } from 'react-router-dom';

const WhatsAppIcon = FaWhatsapp as unknown as React.FC<IconBaseProps>;
const SortDown = FaSortDown as unknown as React.FC<IconBaseProps>;
const UserIcon = FaUser as unknown as React.FC<IconBaseProps>;
const BarsIcon = FaBars as unknown as React.FC<IconBaseProps>;
const TimesIcon = FaTimes as unknown as React.FC<IconBaseProps>;
const ChurchIcon = FaChurch as unknown as React.FC<IconBaseProps>;
const HandHeartIcon = FaHandHoldingHeart as unknown as React.FC<IconBaseProps>;
const ChartIcon = FaChartLine as unknown as React.FC<IconBaseProps>;
const HeadsetIcon = FaHeadset as unknown as React.FC<IconBaseProps>;

// ============================================
// STYLED COMPONENTS
// ============================================

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ scrolled }) => 
    scrolled 
      ? 'rgba(15, 23, 42, 0.95)' 
      : 'rgba(15, 23, 42, 0.85)'
  };
  backdrop-filter: blur(12px);
  padding: ${({ scrolled }) => scrolled ? '12px 5%' : '16px 5%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(124, 58, 237, 0.2);

  @media (max-width: 768px) {
    padding: ${({ scrolled }) => scrolled ? '10px 5%' : '14px 5%'};
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 4px;
  flex-shrink: 0;
  cursor: pointer;
  text-decoration: none;

  .logo-icon {
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #A855F7 0%, #F59E0B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .logo-text {
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
  }

  .logo-badge {
    font-size: 0.7rem;
    font-weight: 600;
    color: #F59E0B;
    letter-spacing: 1px;
    margin-left: 4px;
  }

  @media (max-width: 768px) {
    .logo-text {
      font-size: 1.2rem;
    }
    .logo-icon {
      font-size: 1.5rem;
    }
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 992px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    gap: 0;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(12px);
    padding: 20px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 999;
    border-top: 1px solid rgba(124, 58, 237, 0.3);
    border-bottom: 1px solid rgba(124, 58, 237, 0.3);
  }
`;

const NavItem = styled(Link)`
  position: relative;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #E2E8F0;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  padding: 8px 0;
  text-decoration: none;

  svg {
    font-size: 0.75rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #A855F7;
    
    svg {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    padding: 14px 24px;
    border-bottom: 1px solid rgba(124, 58, 237, 0.1);
    
    &:hover {
      background: rgba(124, 58, 237, 0.1);
    }
  }
`;

const NavItemDropdown = styled.div`
  position: relative;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #E2E8F0;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  padding: 8px 0;

  svg {
    font-size: 0.75rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #A855F7;
    
    svg {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    padding: 14px 24px;
    border-bottom: 1px solid rgba(124, 58, 237, 0.1);
    
    &:hover {
      background: rgba(124, 58, 237, 0.1);
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background: #1E293B;
  border-radius: 12px;
  padding: 8px 0;
  box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.3);
  display: none;
  min-width: 240px;
  z-index: 1000;
  overflow: hidden;
  animation: fadeInDown 0.25s ease;
  border: 1px solid rgba(124, 58, 237, 0.3);

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & > a, & > div {
    padding: 12px 20px;
    transition: all 0.2s ease;
    color: #CBD5E1;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;

    svg {
      color: #A855F7;
      font-size: 1rem;
    }
  }

  & > a:hover, & > div:hover {
    background: rgba(124, 58, 237, 0.15);
    color: #A855F7;
    padding-left: 26px;
  }

  ${NavItemDropdown}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    box-shadow: none;
    display: none;
    background: rgba(30, 41, 59, 0.8);
    margin-top: 8px;
    border: none;

    ${NavItemDropdown}.active & {
      display: block;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
    padding: 16px 24px 24px;
  }
`;

const ButtonPrimary = styled(Link)`
  background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 12px 22px;
  }
`;

const ButtonSecondary = styled(Link)`
  background: transparent;
  color: #E2E8F0;
  border: 1px solid rgba(124, 58, 237, 0.5);
  padding: 10px 22px;
  border-radius: 40px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    border-color: #A855F7;
    color: #A855F7;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const WhatsAppButton = styled.a`
  background-color: #25D366;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.2);

  &:hover {
    background-color: #128C7E;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(37, 211, 102, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ToggleMenu = styled.button`
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(124, 58, 237, 0.3);
  font-size: 1.3rem;
  cursor: pointer;
  display: none;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.3);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// ============================================
// CONSTANTES
// ============================================

const WhatsAppLink = `https://wa.me/5544991179564?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre o Berion Igrejas."
)}`;

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    closeMenu();
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo to="/" onClick={closeMenu}>
        <span className="logo-icon">B</span>
        <span className="logo-text">erion</span>
        <span className="logo-badge">IGREJAS</span>
      </Logo>

      <ToggleMenu onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <TimesIcon /> : <BarsIcon />}
      </ToggleMenu>

      <Nav isOpen={menuOpen}>
        {/* Soluções Dropdown */}
        <NavItemDropdown 
          onClick={() => toggleDropdown('solucoes')}
          className={activeDropdown === 'solucoes' ? 'active' : ''}
        >
          <span>Soluções</span>
          <SortDown />
          <Dropdown>
            <div onClick={() => handleNavigate('/solucoes/igrejas-locais')}>
              <ChurchIcon /> Para Igrejas Locais
            </div>
            <div onClick={() => handleNavigate('/solucoes/sedes-redes')}>
              <HandHeartIcon /> Para Sedes e Redes
            </div>
            <div onClick={() => handleNavigate('/solucoes/split')}>
              <ChartIcon /> Split de Pagamentos
            </div>
            <div onClick={() => handleNavigate('/solucoes/relatorios')}>
              📊 Relatórios Automáticos
            </div>
            <div onClick={() => handleNavigate('/solucoes/membros')}>
              👥 Gestão de Membros
            </div>
          </Dropdown>
        </NavItemDropdown>

        {/* Funcionalidades Dropdown */}
        <NavItemDropdown 
          onClick={() => toggleDropdown('funcionalidades')}
          className={activeDropdown === 'funcionalidades' ? 'active' : ''}
        >
          <span>Funcionalidades</span>
          <SortDown />
          <Dropdown>
            <div onClick={() => handleNavigate('/funcionalidades/tesouraria')}>
              💰 Tesouraria e Split
            </div>
            <div onClick={() => handleNavigate('/funcionalidades/dashboard')}>
              📈 Dashboard Multi-Igrejas
            </div>
            <div onClick={() => handleNavigate('/funcionalidades/certificados')}>
              🪪 Certificados e Carteirinhas
            </div>
            <div onClick={() => handleNavigate('/funcionalidades/crm')}>
              🤖 CRM com Fluxo Guiado
            </div>
            <div onClick={() => handleNavigate('/funcionalidades/seguranca')}>
              🔐 Segurança e RBAC
            </div>
          </Dropdown>
        </NavItemDropdown>

        {/* Planos */}
        <NavItem to="/planos" onClick={closeMenu}>
          <span>Planos</span>
        </NavItem>

        {/* Sobre */}
        <NavItem to="/sobre" onClick={closeMenu}>
          <span>Sobre</span>
        </NavItem>

        {/* Blog */}
        <NavItem to="/blog" onClick={closeMenu}>
          <span>Blog</span>
        </NavItem>

        {/* Ações */}
        <Actions>
          <ButtonSecondary to="/login" onClick={closeMenu}>
            <UserIcon size={14} />
            Área do Cliente
          </ButtonSecondary>
          
          <ButtonPrimary to="/comecar" onClick={closeMenu}>
            Começar Agora
          </ButtonPrimary>

          <WhatsAppButton 
            href={WhatsAppLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </WhatsAppButton>
        </Actions>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;