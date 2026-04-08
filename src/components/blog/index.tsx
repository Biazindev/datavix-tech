import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaSearch, 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaArrowRight, 
  FaShareAlt,
  FaBookOpen,
  FaRegClock,
  FaChartLine,
  FaHandHoldingHeart,
  FaChurch,
  FaRocket
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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// ============================================
// TIPOS
// ============================================

interface Post {
  id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
  imagem: string;
  data: string;
  autor: string;
  categoria: string;
  tags: string[];
  tempoLeitura: string;
  destaque: boolean;
}

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

// Search Section
const SearchSection = styled.section`
  padding: 2rem 2rem 0;
  background: #F8FAFC;
`;

const SearchContainer = styled.div`
  max-width: 1400px;
  margin: -2rem auto 0;
  position: relative;
  z-index: 10;
`;

const SearchBar = styled.div`
  background: white;
  border-radius: 60px;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid #E2E8F0;

  input {
    flex: 1;
    padding: 1rem 1.5rem;
    border: none;
    background: transparent;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: #94A3B8;
    }
  }

  button {
    background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
    border: none;
    padding: 0 2rem;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 1rem;
    padding: 1rem;

    button {
      padding: 0.8rem;
      justify-content: center;
    }
  }
`;

// Categories Section
const CategoriesSection = styled.section`
  padding: 2rem 2rem;
  background: #F8FAFC;
`;

const CategoriesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const CategoriesTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #64748B;
  margin-bottom: 1rem;
  text-align: center;
`;

const CategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  background: ${({ active }) => active ? 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)' : 'white'};
  color: ${({ active }) => active ? 'white' : '#475569'};
  border: 1px solid ${({ active }) => active ? 'transparent' : '#E2E8F0'};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    ${({ active }) => !active && 'border-color: #7C3AED; color: #7C3AED;'}
  }
`;

// Featured Post Section
const FeaturedSection = styled.section`
  padding: 2rem 2rem;
  background: #F8FAFC;
`;

const FeaturedContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const FeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  background: linear-gradient(135deg, #7C3AED, #C026D3);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  svg {
    font-size: 5rem;
    color: white;
    opacity: 0.8;
  }
`;

const FeaturedContent = styled.div`
  padding: 2rem;

  .featured-badge {
    display: inline-block;
    background: linear-gradient(135deg, #F59E0B, #D97706);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .category {
    color: #7C3AED;
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  p {
    color: #64748B;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .meta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
    color: #94A3B8;

    span {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }
`;

const ReadMore = styled.button`
  background: transparent;
  color: #7C3AED;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    gap: 0.75rem;
    color: #C026D3;
  }
`;

// Posts Grid
const PostsSection = styled.section`
  padding: 3rem 2rem;
  background: #FFFFFF;
`;

const PostsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0F172A;
  }

  select {
    padding: 0.5rem 1rem;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    background: white;
    color: #475569;
    cursor: pointer;
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.article`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #E2E8F0;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
    border-color: rgba(124, 58, 237, 0.2);
  }
`;

const PostImage = styled.div`
  background: linear-gradient(135deg, #7C3AED40, #C026D340);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #7C3AED;
`;

const PostContent = styled.div`
  padding: 1.5rem;

  .category {
    display: inline-block;
    background: rgba(124, 58, 237, 0.1);
    color: #7C3AED;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  p {
    color: #64748B;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .meta {
    display: flex;
    gap: 1rem;
    font-size: 0.75rem;
    color: #94A3B8;
    margin-bottom: 1rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
`;

const PageButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => active ? 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)' : 'white'};
  color: ${({ active }) => active ? 'white' : '#475569'};
  border: 1px solid ${({ active }) => active ? 'transparent' : '#E2E8F0'};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    ${({ active }) => !active && 'border-color: #7C3AED; color: #7C3AED;'}
  }
`;

// Newsletter Section
const NewsletterSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
  text-align: center;
`;

const NewsletterContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: #94A3B8;
    margin-bottom: 2rem;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 50px;
    border: 1px solid rgba(124, 58, 237, 0.3);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    outline: none;

    &::placeholder {
      color: #64748B;
    }

    &:focus {
      border-color: #7C3AED;
    }
  }

  button {
    background: linear-gradient(135deg, #7C3AED 0%, #C026D3 100%);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// ============================================
// DADOS MOCKADOS
// ============================================

const posts: Post[] = [
  {
    id: 1,
    titulo: "Como implementar o split de dízimos na sua igreja",
    resumo: "Aprenda como configurar a divisão automática de dízimos e ofertas entre sede, regional e fundos de forma transparente.",
    conteudo: "",
    imagem: "",
    data: "15/04/2026",
    autor: "Tiago Biazin",
    categoria: "Finanças",
    tags: ["split", "dízimos", "gestão"],
    tempoLeitura: "5 min",
    destaque: true
  },
  {
    id: 2,
    titulo: "Benefícios da gestão digital de membros",
    resumo: "Descubra como o cadastro digital pode transformar a comunicação e o acompanhamento da sua congregação.",
    conteudo: "",
    imagem: "",
    data: "10/04/2026",
    autor: "Luciana Sanches",
    categoria: "Membros",
    tags: ["membros", "digital", "comunicação"],
    tempoLeitura: "4 min",
    destaque: false
  },
  {
    id: 3,
    titulo: "Relatórios automáticos: como enviar para a sede",
    resumo: "Entenda o fluxo de aprovação dupla e como os relatórios são enviados automaticamente para a sede mundial.",
    conteudo: "",
    imagem: "",
    data: "05/04/2026",
    autor: "Adriana Biazin",
    categoria: "Relatórios",
    tags: ["relatórios", "sede", "automação"],
    tempoLeitura: "6 min",
    destaque: false
  },
  {
    id: 4,
    titulo: "Segurança de dados em plataformas eclesiásticas",
    resumo: "Por que a segurança da informação é fundamental para igrejas e como o Berion protege seus dados.",
    conteudo: "",
    imagem: "",
    data: "28/03/2026",
    autor: "Lorenzo Biazin",
    categoria: "Segurança",
    tags: ["segurança", "dados", "LGPD"],
    tempoLeitura: "7 min",
    destaque: false
  },
  {
    id: 5,
    titulo: "CRM para igrejas: como funciona o fluxo guiado",
    resumo: "Saiba como o CRM inteligente do Berion direciona automaticamente as demandas para o setor correto.",
    conteudo: "",
    imagem: "",
    data: "22/03/2026",
    autor: "Tiago Biazin",
    categoria: "CRM",
    tags: ["crm", "suporte", "atendimento"],
    tempoLeitura: "5 min",
    destaque: false
  },
  {
    id: 6,
    titulo: "Dashboard multi-igrejas: visão consolidada",
    resumo: "Acompanhe todas as igrejas do seu ministério em um único painel com indicadores em tempo real.",
    conteudo: "",
    imagem: "",
    data: "15/03/2026",
    autor: "Luciana Sanches",
    categoria: "Dashboard",
    tags: ["dashboard", "múltiplas igrejas", "indicadores"],
    tempoLeitura: "4 min",
    destaque: false
  }
];

const categorias = ["Todos", "Finanças", "Membros", "Relatórios", "Segurança", "CRM", "Dashboard"];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('recentes');

  const featuredPost = posts.find(p => p.destaque);
  const regularPosts = posts.filter(p => !p.destaque);

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.resumo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'recentes') {
      return new Date(b.data.split('/').reverse().join('-')).getTime() - 
             new Date(a.data.split('/').reverse().join('-')).getTime();
    }
    return 0;
  });

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroBadge>📝 Berion Blog</HeroBadge>
          <HeroTitle>
            Conteúdos para <span>transformar</span> sua gestão
          </HeroTitle>
          <HeroDescription>
            Artigos, dicas e novidades sobre gestão de igrejas, tecnologia e finanças.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Search Section */}
      <SearchSection>
        <SearchContainer>
          <SearchBar>
            <input 
              type="text" 
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <FaSearch /> Buscar
            </button>
          </SearchBar>
        </SearchContainer>
      </SearchSection>

      {/* Categories Section */}
      <CategoriesSection>
        <CategoriesContainer>
          <CategoriesTitle>Categorias</CategoriesTitle>
          <CategoriesGrid>
            {categorias.map(cat => (
              <CategoryButton 
                key={cat}
                active={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </CategoryButton>
            ))}
          </CategoriesGrid>
        </CategoriesContainer>
      </CategoriesSection>

      {/* Featured Post */}
      {featuredPost && (
        <FeaturedSection>
          <FeaturedContainer>
            <FeaturedCard>
              <FeaturedImage>
                <FaBookOpen />
              </FeaturedImage>
              <FeaturedContent>
                <div>
                  <span className="featured-badge">🌟 Destaque</span>
                  <div className="category">{featuredPost.categoria}</div>
                  <h2>{featuredPost.titulo}</h2>
                  <p>{featuredPost.resumo}</p>
                  <div className="meta">
                    <span><FaCalendarAlt /> {featuredPost.data}</span>
                    <span><FaUser /> {featuredPost.autor}</span>
                    <span><FaRegClock /> {featuredPost.tempoLeitura} de leitura</span>
                  </div>
                  <ReadMore>
                    Ler artigo completo <FaArrowRight size={14} />
                  </ReadMore>
                </div>
              </FeaturedContent>
            </FeaturedCard>
          </FeaturedContainer>
        </FeaturedSection>
      )}

      {/* Posts Grid */}
      <PostsSection>
        <PostsContainer>
          <SectionHeader>
            <h2>Artigos Recentes</h2>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="recentes">Mais recentes</option>
              <option value="antigos">Mais antigos</option>
            </select>
          </SectionHeader>

          <PostsGrid>
            {sortedPosts.map(post => (
              <PostCard key={post.id}>
                <PostImage>
                  <FaBookOpen />
                </PostImage>
                <PostContent>
                  <span className="category">{post.categoria}</span>
                  <h3>{post.titulo}</h3>
                  <p>{post.resumo}</p>
                  <div className="meta">
                    <span><FaCalendarAlt /> {post.data}</span>
                    <span><FaUser /> {post.autor}</span>
                    <span><FaRegClock /> {post.tempoLeitura}</span>
                  </div>
                  <ReadMore>
                    Ler mais <FaArrowRight size={12} />
                  </ReadMore>
                </PostContent>
              </PostCard>
            ))}
          </PostsGrid>

          <Pagination>
            <PageButton active>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
          </Pagination>
        </PostsContainer>
      </PostsSection>

      {/* Newsletter Section */}
      <NewsletterSection>
        <NewsletterContainer>
          <h2>📧 Receba novidades no seu e-mail</h2>
          <p>Inscreva-se para receber nossos artigos e novidades sobre gestão de igrejas.</p>
          <NewsletterForm>
            <input type="email" placeholder="Seu melhor e-mail" />
            <button type="submit">Inscrever-se</button>
          </NewsletterForm>
        </NewsletterContainer>
      </NewsletterSection>
    </Container>
  );
};

export default Blog;