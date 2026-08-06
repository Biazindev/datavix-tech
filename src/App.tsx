import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Produtos } from '@/pages/Produtos'
import { ProductPage } from '@/pages/ProductPage'
import { Sobre } from '@/pages/Sobre'
import { Contato } from '@/pages/Contato'
import { Blog } from '@/pages/Blog'
import { NotFound } from '@/pages/NotFound'
import { berionIgrejas, appMembros, conexaoJovem, berionComercios } from '@/content/products'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/berion-igrejas" element={<ProductPage product={berionIgrejas} />} />
        <Route path="/app-membros" element={<ProductPage product={appMembros} />} />
        <Route path="/conexao-jovem" element={<ProductPage product={conexaoJovem} />} />
        <Route path="/berion-comercios" element={<ProductPage product={berionComercios} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
