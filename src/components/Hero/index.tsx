import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, Parallax } from 'swiper/modules';
import styled, { keyframes } from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import berionHome from '../../assets/hero (1).jpg';
import garage360Home from '../../assets/hero (2).jpg';
import berionDash from '../../assets/hero (3).jpg';
import berionPainel from '../../assets/hero (4).jpg';

// Animação personalizada
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 85vh;
  min-height: 500px;
  max-height: 800px;
  position: relative;
  overflow: hidden;
  background: #000;

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
    filter: brightness(0.7);
    transform: scale(1.1);
    transition: transform 10s ease-out;
  }

  .swiper-slide-active .slide-image {
    transform: scale(1);
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

  .slide-text {
    color: #fff;
    font-size: clamp(2.2rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
    
    span {
      background: #00c3ff;
      -webkit-background-clip: text;
      background-clip: text;
      color: #00c3ff;
    }
  }

  .slide-subtext {
    color: rgba(255, 255, 255, 0.9);
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.5;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out 0.2s;
  }

  .slide-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #00c3ff 0%, #009fe3 100%);
    color: white;
    font-weight: 600;
    font-size: clamp(0.9rem, 1.3vw, 1.1rem);
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(0, 195, 255, 0.4);
    transition: all 0.5s ease-out 0.4s;
    opacity: 0;
    transform: translateY(30px);
    position: relative;
    overflow: hidden;
    z-index: 1;
    border: none;
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0, 195, 255, 0.6);
    }
  }

  .swiper-slide-active {
    .slide-text,
    .slide-subtext,
    .slide-button {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .swiper-pagination {
    bottom: 20px !important;
    
    &-bullet {
      width: 10px;
      height: 10px;
      background: rgba(255, 255, 255, 0.5);
      opacity: 1;
      transition: all 0.3s ease;
      margin: 0 6px !important;

      &-active {
        background: #00c3ff;
        transform: scale(1.3);
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #00c3ff;
    width: 45px;
    height: 45px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    transition: all 0.3s ease;
    opacity: 0.7;

    &:hover {
      background: rgba(0, 195, 255, 0.2);
      opacity: 1;
    }

    &::after {
      font-size: 1.4rem;
    }
  }

  .swiper-button-next {
    right: 20px;
  }

  .swiper-button-prev {
    left: 20px;
  }

  @media (max-width: 768px) {
    height: 75vh;
    min-height: 450px;

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

    .slide-content {
      width: 95%;
    }

    .slide-button {
      padding: 0.9rem 2rem;
    }
  }

  @media (max-width: 480px) {
    height: 70vh;
    min-height: 400px;

    .slide-text {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    .slide-subtext {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }

    .slide-button {
      padding: 0.8rem 1.8rem;
    }

    .swiper-pagination {
      bottom: 15px !important;
    }
  }

  @media (max-width: 360px) {
    min-height: 380px;

    .slide-text {
      font-size: 1.6rem;
    }

    .slide-subtext {
      font-size: 0.9rem;
    }
  }
`;

const Hero = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const scrollY = window.scrollY;
        const slideHeight = swiperRef.current.swiper.height;
        const currentSlide = swiperRef.current.swiper.activeIndex;
        
        // Efeito parallax personalizado
        const parallaxValue = scrollY * 0.3;
        swiperRef.current.swiper.slides[currentSlide].querySelector('.slide-image').style.transform = `scale(${1 + parallaxValue * 0.0005})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroSection>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Pagination, Navigation, Parallax]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        parallax={true}
      >
        <SwiperSlide>
          <img 
            src={berionHome} 
            alt="Banner Berion" 
            className="slide-image" 
            data-swiper-parallax="20%"
          />
          <div className="slide-content">
            <h2 className="slide-text">
              Transforme sua empresa com <span>tecnologia</span>
            </h2>
            <p className="slide-subtext">
              Soluções inteligentes para gestão, automação e crescimento exponencial do seu negócio
            </p>
            <button className="slide-button">
              Saiba Mais
            </button>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img 
            src={garage360Home} 
            alt="Banner Garage360" 
            className="slide-image" 
            data-swiper-parallax="20%"
          />
          <div className="slide-content">
            <h2 className="slide-text">
              Sistemas <span>inteligentes</span> sob medida
            </h2>
            <p className="slide-subtext">
              Desenvolvemos soluções 100% personalizadas para as necessidades específicas do seu segmento
            </p>
            <button className="slide-button">
              Conheça Nossos Produtos
            </button>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img 
            src={berionDash} 
            alt="Banner Berion Dashboard" 
            className="slide-image" 
            data-swiper-parallax="20%"
          />
          <div className="slide-content">
            <h2 className="slide-text">
              Inovação que conecta o <span>presente ao futuro</span>
            </h2>
            <p className="slide-subtext">
              Tecnologia de ponta combinada com inteligência artificial para transformar seus resultados
            </p>
            <button className="slide-button">
              Fale com um Especialista
            </button>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img 
            src={berionPainel} 
            alt="Banner Berion Painel" 
            className="slide-image" 
            data-swiper-parallax="20%"
          />
          <div className="slide-content">
            <h2 className="slide-text">
              Soluções que <span>antecipam</span> seu sucesso
            </h2>
            <p className="slide-subtext">
              Análise preditiva de dados e machine learning para decisões estratégicas precisas
            </p>
            <button className="slide-button">
              Agende uma Demonstração
            </button>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </HeroSection>
  );
};

export default Hero;