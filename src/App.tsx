import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Produtos } from '@/pages/Produtos'
import { BerionIgrejasPage } from '@/pages/products/BerionIgrejasPage'
import { AppMembrosPage } from '@/pages/products/AppMembrosPage'
import { ConexaoJovemPage } from '@/pages/products/ConexaoJovemPage'
import { BerionComerciosPage } from '@/pages/products/BerionComerciosPage'
import { Sobre } from '@/pages/Sobre'
import { Contato } from '@/pages/Contato'
import { Blog } from '@/pages/Blog'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/berion-igrejas" element={<BerionIgrejasPage />} />
        <Route path="/app-membros" element={<AppMembrosPage />} />
        <Route path="/conexao-jovem" element={<ConexaoJovemPage />} />
        <Route path="/berion-comercios" element={<BerionComerciosPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
