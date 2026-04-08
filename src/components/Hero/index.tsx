import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import styled, { keyframes } from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Imagens do Berion Igrejas (substitua pelas suas)
import igrejaGestao from '../../assets/hero (1).jpg';
import splitPagamento from '../../assets/hero (2).jpg';
import relatoriosAuto from '../../assets/hero (3).jpg';
import dashboardSede from '../../assets/hero (4).jpg';

// ============================================
// ANIMAÇÕES
// ============================================

const shine = keyframes`
  0% {
    left: -100%;
  }
  20% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
`;

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

// ============================================
// STYLED COMPONENTS
// ============================================

const HeroSection = styled.section`
  width: 100%;
  height: 90vh;
  min-height: 600px;
  max-height: 900px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.4) contrast(1.1);
    transform: scale(1.08);
    transition: transform 12s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .swiper-slide-active .slide-image {
    transform: scale(1);
  }

  .slide-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.85) 0%,
      rgba(30, 27, 75, 0.75) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }

  .slide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1200px;
    text-align: center;
    z-index: 10;
    padding: 0 20px;
  }

  .slide-badge {
    display: inline-block;
    background: rgba(124, 58, 237, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1.2rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #A855F7;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(124, 58, 237, 0.4);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }

  .slide-text {
    color: #fff;
    font-size: clamp(2.2rem, 5vw, 4.2rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.2rem;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out 0.1s;
    
    span {
      background: linear-gradient(135deg, #A855F7 0%, #F59E0B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .slide-subtext {
    color: rgba(255, 255, 255, 0.85);
    font-size: clamp(1rem, 1.8vw, 1.3rem);
    font-weight: 400;
    max-width: 650px;
    margin: 0 auto 2rem;
    line-height: 1.6;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out 0.2s;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out 0.3s;
  }

  .slide-button-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 2.2rem;
    background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
    color: white;
    font-weight: 600;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
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
      transition: left 0.5s ease;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(124, 58, 237, 0.5);
      
      &::before {
        left: 100%;
      }
    }
  }

  .slide-button-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 2.2rem;
    background: transparent;
    color: white;
    font-weight: 600;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);

    &:hover {
      border-color: #A855F7;
      background: rgba(124, 58, 237, 0.15);
      transform: translateY(-3px);
    }
  }

  .swiper-slide-active {
    .slide-badge,
    .slide-text,
    .slide-subtext,
    .button-group {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .swiper-pagination {
    bottom: 25px !important;
    
    &-bullet {
      width: 10px;
      height: 10px;
      background: rgba(255, 255, 255, 0.4);
      opacity: 1;
      transition: all 0.3s ease;
      margin: 0 6px !important;

      &-active {
        background: #A855F7;
        transform: scale(1.3);
        box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #A855F7;
    width: 48px;
    height: 48px;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(8px);
    border-radius: 50%;
    transition: all 0.3s ease;
    opacity: 0.6;
    border: 1px solid rgba(168, 85, 247, 0.3);

    &:hover {
      background: rgba(124, 58, 237, 0.3);
      opacity: 1;
      transform: scale(1.05);
    }

    &::after {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .swiper-button-next {
    right: 25px;
  }

  .swiper-button-prev {
    left: 25px;
  }

  // Responsividade
  @media (max-width: 992px) {
    height: 85vh;
    min-height: 550px;
  }

  @media (max-width: 768px) {
    height: 80vh;
    min-height: 500px;

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

    .slide-content {
      width: 95%;
    }

    .slide-badge {
      font-size: 0.65rem;
      margin-bottom: 1rem;
    }

    .slide-button-primary,
    .slide-button-secondary {
      padding: 0.8rem 1.8rem;
    }
  }

  @media (max-width: 480px) {
    height: 75vh;
    min-height: 450px;

    .slide-badge {
      font-size: 0.6rem;
      padding: 0.4rem 1rem;
    }

    .slide-text {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    .slide-subtext {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .button-group {
      gap: 0.8rem;
    }

    .slide-button-primary,
    .slide-button-secondary {
      padding: 0.7rem 1.5rem;
      font-size: 0.85rem;
    }

    .swiper-pagination {
      bottom: 15px !important;
    }
  }

  @media (max-width: 360px) {
    min-height: 420px;

    .slide-text {
      font-size: 1.5rem;
    }

    .slide-subtext {
      font-size: 0.8rem;
    }
  }
`;

// ============================================
// SLIDES DATA
// ============================================

const slides = [
  {
    image: igrejaGestao,
    badge: "✨ Plataforma Eclesiástica Completa",
    title: "Gestão completa para sua <span>igreja</span>",
    description: "Controle de membros, dízimos, ofertas e votos em um só lugar. Tudo integrado e automatizado.",
    ctaPrimary: "Começar Agora",
    ctaSecondary: "Ver Demonstração"
  },
  {
    image: splitPagamento,
    badge: "💰 Split Automático de Pagamentos",
    title: "Divida dízimos e ofertas com <span>transparência</span>",
    description: "Repasses automáticos para sede, regional e fundos. Configuração personalizada por igreja.",
    ctaPrimary: "Conhecer Split",
    ctaSecondary: "Calcular Repasses"
  },
  {
    image: relatoriosAuto,
    badge: "📊 Relatórios Inteligentes",
    title: "Envio automático de relatórios para a <span>sede</span>",
    description: "Fluxo guiado com dupla aprovação. Pastor e Tesoureiro aprovam, o sistema envia automaticamente.",
    ctaPrimary: "Ver Funcionalidades",
    ctaSecondary: "Como Funciona"
  },
  {
    image: dashboardSede,
    badge: "🌍 Visão Multi-Igrejas",
    title: "Dashboard em tempo real para <span>sedes e redes</span>",
    description: "Acompanhe todas as igrejas do seu ministério com indicadores financeiros e de crescimento.",
    ctaPrimary: "Solicitar Demo",
    ctaSecondary: "Planos e Preços"
  }
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Hero: React.FC = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (swiperRef.current?.swiper) {
        const scrollY = window.scrollY;
        const currentSlide = swiperRef.current.swiper.activeIndex;
        const img = swiperRef.current.swiper.slides[currentSlide]?.querySelector('.slide-image');
        
        if (img) {
          const parallaxValue = Math.min(scrollY * 0.0003, 0.15);
          img.style.transform = `scale(${1 + parallaxValue})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroSection>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img 
              src={slide.image} 
              alt={`Berion Igrejas - ${slide.title.replace(/<[^>]*>/g, '')}`}
              className="slide-image" 
            />
            <div className="slide-overlay" />
            <div className="slide-content">
              <span className="slide-badge">{slide.badge}</span>
              <h2 
                className="slide-text" 
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <p className="slide-subtext">{slide.description}</p>
              <div className="button-group">
                <button className="slide-button-primary">
                  {slide.ctaPrimary}
                </button>
                <button className="slide-button-secondary">
                  {slide.ctaSecondary}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroSection>
  );
};

export default Hero;