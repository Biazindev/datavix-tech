import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

// Páginas
import PlanosPrecos from './components/planos';

// Componentes para a Home (temporários, serão substituídos pelas páginas)
import Hero from './components/Hero';
import HeroSection from './components/heroSection';
import FuncionalidadesSection from './components/solutions';
import Berion from './components/Berion/berion';
import SplitDemonstrativo from './components/split';
import CTAFinal from './components/cta';
import Sobre from './components/sobre';
import Blog from './components/blog';
import Comecar from './components/comecar';
import IgrejasLocais from './components/igrejasLocais';
import SedesRedes from './components/sedesRedes';
import SplitPagamentos from './components/splitPagamentos';
import RelatoriosAutomaticos from './components/RelatoriosAutomaticos';
import GestaoMembros from './components/GestaoMembros';
import TesourariaSplit from './components/TesourariaSplit';
import GlobalStyles from './styles';

// Página Home que agrupa todos os componentes
const HomePage: React.FC = () => {
  return (
    <>
    <GlobalStyles />
      <Hero />
      <HeroSection />
      <FuncionalidadesSection />
      <Berion />
      <SplitDemonstrativo />
      <CTAFinal />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Header />
      <Routes>
        {/* Rota Principal */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rotas Principais */}
        <Route path="/planos" element={<PlanosPrecos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comecar" element={<Comecar />} />
        
        {/* Rotas de Soluções */}
        <Route path="/solucoes/igrejas-locais" element={<IgrejasLocais />} />
        <Route path="/solucoes/sedes-redes" element={<SedesRedes />} />
        <Route path="/solucoes/split" element={<SplitPagamentos />} />
        <Route path="/solucoes/relatorios" element={<RelatoriosAutomaticos />} />
        <Route path="/solucoes/membros" element={<GestaoMembros />} />
        
        {/* Rotas de Funcionalidades */}
        <Route path="/funcionalidades/tesouraria" element={<TesourariaSplit />} />
        {/* <Route path="/funcionalidades/dashboard" element={<DashboardMulti />} />
        <Route path="/funcionalidades/certificados" element={<Certificados />} />
        <Route path="/funcionalidades/crm" element={<CRMFluxoGuiado />} />
        <Route path="/funcionalidades/seguranca" element={<SegurancaRBAC />} /> */}
        
        {/* Rota 404 - Página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// Componente 404 (crie este arquivo depois)
const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404</h1>
      <p>Página não encontrada</p>
    </div>
  );
};

export default App;