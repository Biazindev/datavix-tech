import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, Parallax } from 'swiper/modules';
import styled, { keyframes } from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

// substitua pelas imagens do Berion ERP
import erpDashboard from '../../assets/dash.jpeg';
import erpReports from '../../assets/contas receber.jpeg';
import erpTeam from '../../assets/contasPagar.jpeg';
import erpAutomation from '../../assets/home.jpeg';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;
const appearUp = keyframes`
  from { transform: translateY(12px); opacity: 0; }
  to   { transform: translateY(0);  opacity: 1; }
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
      color: #00c3ff;
    }
  }

  .slide-subtext {
    color: rgba(255, 255, 255, 0.9);
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 400;
    max-width: 650px;
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
    cursor: pointer;
    border: none;

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
`
export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 992px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 2rem 1rem;
  }
`;

export const HeroLabel = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #00c3ff;
  margin-bottom: 0.75rem;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;

  strong {
    color: #00c3ff;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(0, 0, 0, 0.7);
  max-width: 650px;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
  }
`;

export const HeroRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;

    > div {
      width: 100% !important;
      max-width: 100% !important;
    }
  }
`;
;

const Berion = () => {
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (swiperRef.current && swiperRef.current.swiper) {
                const scrollY = window.scrollY;
                const slideHeight = swiperRef.current.swiper.height;
                const currentSlide = swiperRef.current.swiper.activeIndex;
                const parallaxValue = scrollY * 0.3;
                swiperRef.current.swiper.slides[currentSlide]
                    .querySelector('.slide-image').style.transform =
                    `scale(${1 + parallaxValue * 0.0005})`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <HeroContent>
                <HeroLabel>Berion</HeroLabel>
                <HeroTitle>Berion <strong style={{ fontWeight: 900 }}>Gestor</strong></HeroTitle>
                <HeroSubtitle>
                    Plataforma para gerir vendas, estoque e PDV com automações e integração fiscal — pensada sua empresa.
                </HeroSubtitle>
            </HeroContent>
            <HeroSection>
                <Swiper
                    ref={swiperRef}
                    modules={[Autoplay, EffectFade, Pagination, Navigation, Parallax]}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect="fade"
                    speed={1200}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    loop
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    parallax
                >
                    <SwiperSlide>
                        <img src={erpDashboard} alt="ERP Dashboard" className="slide-image" />
                        <div className="slide-content">
                            <h2 className="slide-text">Gestão completa em um só <span>sistema</span></h2>
                            <p className="slide-subtext">
                                Controle financeiro, estoque, vendas e relatórios em tempo real, tudo integrado.
                            </p>
                            <button className="slide-button">Explorar Funcionalidades</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={erpReports} alt="ERP Reports" className="slide-image" />
                        <div className="slide-content">
                            <h2 className="slide-text">Decisões baseadas em <span>dados</span></h2>
                            <p className="slide-subtext">
                                Relatórios inteligentes e dashboards personalizados para análise precisa.
                            </p>
                            <button className="slide-button">Ver Demonstração</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={erpTeam} alt="ERP Team" className="slide-image" />
                        <div className="slide-content">
                            <h2 className="slide-text">Colaboração que <span>impulsiona</span></h2>
                            <p className="slide-subtext">
                                Conecte setores, facilite processos e aumente a produtividade da sua equipe.
                            </p>
                            <button className="slide-button">Agendar Reunião</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={erpAutomation} alt="ERP Automation" className="slide-image" />
                        <div className="slide-content">
                            <h2 className="slide-text">Automação que <span>transforma</span></h2>
                            <p className="slide-subtext">
                                Reduza tarefas manuais com fluxos automatizados e aumente eficiência.
                            </p>
                            <button className="slide-button">Solicitar Proposta</button>
                        </div>
                    </SwiperSlide>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </HeroSection>

        </>
    );
};

export default Berion;
