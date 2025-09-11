import styled from 'styled-components';
import { FaSortDown, FaWhatsapp } from 'react-icons/fa';
import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons';

const WhatsAppIcon = FaWhatsapp as unknown as React.FC<IconBaseProps>;
const SortDown = FaSortDown as unknown as React.FC<IconBaseProps>;

// Container fixo e transparente
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 12px 5%;
    align-items: center;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #009fe3;
  flex-shrink: 0;
  background: linear-gradient(135deg, #00c3ff 0%, #009fe3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    background-color: rgba(255, 255, 255, 0.98);
    padding: 20px 5%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    z-index: 999;
    transition: all 0.3s ease;
  }
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #333;
  transition: all 0.2s ease;

  span {
    background-color: #00c3ff;
    padding: 8px 16px;
    border-radius: 24px;
    color: #fff;
    transition: all 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    
    span {
      background-color: #009fe3;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 10px 0;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: white;
  border-radius: 12px;
  padding: 10px 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  display: none;
  min-width: 200px;
  z-index: 1000;
  overflow: hidden;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  & > div {
    padding: 12px 20px;
    transition: all 0.2s ease;
    color: #555;
    font-weight: 500;
  }

  & > div:hover {
    background-color: #f0f8ff;
    color: #009fe3;
    padding-left: 25px;
  }

  ${NavItem}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    box-shadow: none;
    display: none;
    margin-top: 5px;

    ${NavItem}.active & {
      display: block;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
  }
`;

const Button = styled.button`
  background-color: #00c3ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 195, 255, 0.3);

  &:hover {
    background-color: #009fe3;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 195, 255, 0.4);
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
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);

  &:hover {
    background-color: #128C7E;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(37, 211, 102, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ToggleMenu = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  color: #009fe3;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 159, 227, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const WhatsAppLinkNav = `https://wa.me/554499991803?text=${encodeURIComponent("Olá, gostaria de saber mais informações sobre os sistemas DataVix!")}`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <HeaderContainer>
      <Logo>DataVix</Logo>

      <ToggleMenu onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </ToggleMenu>

      <Nav isOpen={menuOpen}>
        <NavItem 
          onClick={() => toggleDropdown('sistemas')}
          className={activeDropdown === 'sistemas' ? 'active' : ''}
        >
          <span>Sistemas</span>
          <SortDown />
          <Dropdown>
            <div>Berion Gestor</div>
            <div>Garage360</div>
            <div>DataVix ERP</div>
          </Dropdown>
        </NavItem>
        
        <NavItem 
          onClick={() => toggleDropdown('segmentos')}
          className={activeDropdown === 'segmentos' ? 'active' : ''}
        >
          <span>Segmentos</span>
          <SortDown />
          <Dropdown>
            <div>Comércio Varejista</div>
            <div>Lojas Automotivas</div>
            <div>Indústrias</div>
            <div>Serviços</div>
          </Dropdown>
        </NavItem>
        
        <NavItem>
          <span>IA</span>
        </NavItem>
        
        <NavItem>
          <span>Sobre</span>
        </NavItem>

        <Actions>
          <WhatsAppButton 
            href={WhatsAppLinkNav} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            LIGAMOS PARA VOCÊ
          </WhatsAppButton>
          
          <Button>
            SOU CLIENTE <SortDown />
          </Button>
        </Actions>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;