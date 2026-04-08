import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCertificate, 
  FaIdCard, 
  FaStar, 
  FaDownload, 
  FaPrint, 
  FaWhatsapp,
  FaEye,
  FaSearch,
  FaPlus,
  FaUser,
  FaChurch,
  FaSpinner
} from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// ============================================
// ANIMAÇÕES
// ============================================

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// ============================================
// TIPOS
// ============================================

interface Membro {
  id: number;
  nome: string;
  dataNascimento: string;
  dataBatismo?: string;
  dataApresentacao?: string;
  cargo: string;
  igreja: string;
  pastor: string;
}

// ============================================
// STYLED COMPONENTS
// ============================================

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #F8FAFC;
  padding: 2rem;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.5s ease-out;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #7C3AED;
  }
`;

const Subtitle = styled.p`
  color: #64748B;
  font-size: 0.95rem;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #E2E8F0;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.5s ease-out 0.1s both;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ active }) => active ? '#7C3AED' : '#64748B'};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #7C3AED;
    transform: ${({ active }) => active ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #7C3AED;
  }
`;

const FiltersBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 0.5s ease-out 0.15s both;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #F8FAFC;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #E2E8F0;

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 0.85rem;
    width: 250px;

    &::placeholder {
      color: #94A3B8;
    }
  }

  svg {
    color: #94A3B8;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #7C3AED, #C026D3);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  animation: ${fadeInUp} 0.5s ease-out 0.2s both;
`;

const CertificadoCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #E2E8F0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const CardPreview = styled.div<{ tipo: string }>`
  height: 160px;
  background: ${({ tipo }) => {
    switch(tipo) {
      case 'membro': return '#2D1B69';
      case 'batismo': return '#065F46';
      case 'apresentacao': return '#9A3412';
      default: return '#2D1B69';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  svg {
    font-size: 3.5rem;
    color: white;
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const CardInfo = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardMeta = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.7rem;
  color: #64748B;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid #E2E8F0;
`;

const ActionIcon = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #F8FAFC;
  border: none;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7C3AED20;
    color: #7C3AED;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeInUp} 0.3s ease;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 1rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${pulse} 0.3s ease;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #E2E8F0;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0F172A;
  }

  button {
    background: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #64748B;
    transition: color 0.3s ease;

    &:hover {
      color: #EF4444;
    }
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const PreviewArea = styled.div`
  background: #F8FAFC;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

// ESTILO DO CERTIFICADO - SIMPLES E COMPATÍVEL COM CANVAS
const CertificadoPreviewWrapper = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 450px;
  text-align: center;
  border: 1px solid #E2E8F0;
  font-family: Arial, Helvetica, sans-serif;

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    color: #7C3AED;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #7C3AED;
    display: inline-block;
  }

  .certificado-nome {
    font-size: 1.2rem;
    font-weight: bold;
    color: #0F172A;
    margin: 1.5rem 0;
    text-transform: uppercase;
  }

  .certificado-texto {
    font-size: 0.85rem;
    color: #333;
    line-height: 1.5;
    text-align: center;
  }

  .certificado-igreja {
    margin-top: 1rem;
    font-size: 0.85rem;
    font-weight: bold;
    color: #7C3AED;
  }

  .certificado-data {
    margin-top: 1.5rem;
    font-size: 0.8rem;
    color: #666;
  }

  .certificado-assinatura {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px dashed #ccc;
    text-align: right;
    font-size: 0.8rem;
    font-weight: bold;
    color: #0F172A;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-weight: 600;
    font-size: 0.85rem;
    color: #0F172A;
    margin-bottom: 0.25rem;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    font-size: 0.9rem;

    &:focus {
      outline: none;
      border-color: #7C3AED;
      box-shadow: 0 0 0 2px #7C3AED20;
    }
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid #E2E8F0;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const ModalButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  ${({ variant }) => variant === 'primary' ? `
    background: linear-gradient(135deg, #7C3AED, #C026D3);
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
    }
  ` : `
    background: transparent;
    color: #64748B;
    border: 1px solid #E2E8F0;
    
    &:hover {
      border-color: #7C3AED;
      color: #7C3AED;
    }
  `}
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

// ============================================
// DADOS MOCKADOS - COMPLETAMENTE GENÉRICOS
// ============================================

const mockMembros: Membro[] = [
  {
    id: 1,
    nome: 'ANA CLARA SANTOS',
    dataNascimento: '1990-03-15',
    dataBatismo: '2005-06-20',
    dataApresentacao: '1990-08-10',
    cargo: 'Membro',
    igreja: 'IGREJA DO EVANGELHO',
    pastor: 'PASTOR JOSÉ CARLOS'
  },
  {
    id: 2,
    nome: 'CARLOS EDUARDO LIMA',
    dataNascimento: '1985-07-22',
    dataBatismo: '1998-11-15',
    cargo: 'Diácono',
    igreja: 'IGREJA DO EVANGELHO',
    pastor: 'PASTOR JOSÉ CARLOS'
  },
  {
    id: 3,
    nome: 'FERNANDA COSTA OLIVEIRA',
    dataNascimento: '1992-11-08',
    dataBatismo: '2008-03-25',
    cargo: 'Secretária',
    igreja: 'IGREJA DO EVANGELHO',
    pastor: 'PASTOR JOSÉ CARLOS'
  },
  {
    id: 4,
    nome: 'ROBERTO ALMEIDA SOUZA',
    dataNascimento: '1978-09-30',
    dataBatismo: '1995-12-10',
    cargo: 'Presbítero',
    igreja: 'IGREJA DO EVANGELHO',
    pastor: 'PASTOR JOSÉ CARLOS'
  },
  {
    id: 5,
    nome: 'JULIANA MARTINS RIBEIRO',
    dataNascimento: '1988-05-12',
    dataBatismo: '2002-08-18',
    cargo: 'Membro',
    igreja: 'IGREJA DO EVANGELHO',
    pastor: 'PASTOR JOSÉ CARLOS'
  },
  {
    id: 6,
    nome: 'LUCAS FERREIRA GOMES',
    dataNascimento: '1995-12-03',
    dataBatismo: '2010-04-22',
    cargo: 'Líder de Jovens',
    igreja: 'IGREJA DO EVANGELHO',
    pastor: 'PASTOR JOSÉ CARLOS'
  }
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

const Certificados: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'membro' | 'batismo' | 'apresentacao'>('membro');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMembro, setSelectedMembro] = useState<Membro | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dataCustom, setDataCustom] = useState('');
  const [pastorNome, setPastorNome] = useState('PASTOR JOSÉ CARLOS');

  const filteredMembros = mockMembros.filter(membro =>
    membro.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGenerateCertificate = (membro: Membro) => {
    setIsGenerating(true);
    setSelectedMembro(membro);
    setDataCustom('');
    
    setTimeout(() => {
      setShowModal(true);
      setIsGenerating(false);
    }, 500);
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('certificate-preview-container');
    if (!element) return;

    try {
      // Aguardar um pouco para garantir renderização
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(element, {
        scale: 3,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true,
        allowTaint: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 180;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const x = (210 - imgWidth) / 2;
      const y = (297 - imgHeight) / 2;
      
      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save(`certificado_${activeTab}_${selectedMembro?.nome.replace(/\s/g, '_')}.pdf`);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById('certificate-preview-container');
    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Certificado ${activeTab}</title>
              <style>
                body { 
                  margin: 0; 
                  padding: 20px; 
                  display: flex; 
                  justify-content: center; 
                  align-items: center; 
                  min-height: 100vh; 
                  font-family: Arial, sans-serif; 
                  background: #f5f5f5;
                }
                @media print {
                  body { 
                    margin: 0; 
                    padding: 0; 
                    background: white;
                  }
                }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  const handleShareWhatsApp = () => {
    const dataFormatada = dataCustom || (() => {
      if (activeTab === 'membro') return new Date().toLocaleDateString('pt-BR');
      if (activeTab === 'batismo') return selectedMembro?.dataBatismo || new Date().toLocaleDateString('pt-BR');
      return selectedMembro?.dataApresentacao || new Date().toLocaleDateString('pt-BR');
    })();

    const message = `*CERTIFICADO DE ${activeTab.toUpperCase()}*\n\n` +
                    `Nome: ${selectedMembro?.nome}\n` +
                    `Igreja: ${selectedMembro?.igreja}\n` +
                    `Data: ${dataFormatada}\n` +
                    `Pastor: ${pastorNome}\n\n` +
                    `"Que Deus continue abençoando sua vida!" 🙏`;
    
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const renderCertificatePreview = () => {
    if (!selectedMembro) return null;

    const dataFormatada = dataCustom || (() => {
      if (activeTab === 'membro') return new Date().toLocaleDateString('pt-BR');
      if (activeTab === 'batismo') return selectedMembro.dataBatismo || new Date().toLocaleDateString('pt-BR');
      return selectedMembro.dataApresentacao || new Date().toLocaleDateString('pt-BR');
    })();

    let textoCertificado = '';
    if (activeTab === 'membro') {
      textoCertificado = `É com grande alegria que declaramos que ${selectedMembro.nome} é membro ativo da ${selectedMembro.igreja}, tendo sido recebido(a) em nossa comunhão, comprometendo-se a viver os princípios do Evangelho e a servir ao Senhor com dedicação e amor.`;
    } else if (activeTab === 'batismo') {
      textoCertificado = `Foi batizado(a) por imersão em águas, em nome do Pai, do Filho e do Espírito Santo, testemunhando publicamente sua fé em Jesus Cristo como seu único e suficiente Salvador, e assumindo o compromisso de seguir Seus ensinamentos.`;
    } else {
      textoCertificado = `Foi apresentado(a) ao Senhor Jesus, consagrando sua vida aos caminhos de Deus, conforme o exemplo bíblico de trazer as crianças perante o Senhor, para que desde cedo sejam instruídas nos caminhos do Altíssimo.`;
    }

    let titulo = '';
    if (activeTab === 'membro') titulo = 'CERTIFICADO DE MEMBRO';
    else if (activeTab === 'batismo') titulo = 'CERTIFICADO DE BATISMO';
    else titulo = 'CERTIFICADO DE APRESENTAÇÃO';

    return (
      <CertificadoPreviewWrapper id="certificate-preview-container">
        <h3>{titulo}</h3>
        <div className="certificado-nome">{selectedMembro.nome}</div>
        <div className="certificado-texto">{textoCertificado}</div>
        <div className="certificado-igreja">{selectedMembro.igreja}</div>
        <div className="certificado-data">{dataFormatada}</div>
        <div className="certificado-assinatura">
          {pastorNome}<br />
          <span style={{ fontSize: '0.7rem', fontWeight: 'normal', color: '#666' }}>Pastor Presidente</span>
        </div>
      </CertificadoPreviewWrapper>
    );
  };

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>
            <FaCertificate /> Certificados e Documentos
          </Title>
          <Subtitle>
            Gerencie e emita certificados de membros, batismo e apresentação
          </Subtitle>
        </Header>

        <TabsContainer>
          <Tab active={activeTab === 'membro'} onClick={() => setActiveTab('membro')}>
            <FaIdCard /> Carteirinha de Membro
          </Tab>
          <Tab active={activeTab === 'batismo'} onClick={() => setActiveTab('batismo')}>
            <FaCertificate /> Certificado de Batismo
          </Tab>
          <Tab active={activeTab === 'apresentacao'} onClick={() => setActiveTab('apresentacao')}>
            <FaStar /> Certificado de Apresentação
          </Tab>
        </TabsContainer>

        <FiltersBar>
          <SearchInput>
            <FaSearch />
            <input 
              type="text" 
              placeholder="Buscar membro por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchInput>
          <AddButton>
            <FaPlus /> Novo Certificado
          </AddButton>
        </FiltersBar>

        <CardsGrid>
          {filteredMembros.map((membro) => (
            <CertificadoCard key={membro.id}>
              <CardPreview 
                tipo={activeTab}
                onClick={() => handleGenerateCertificate(membro)}
              >
                {activeTab === 'membro' && <FaIdCard />}
                {activeTab === 'batismo' && <FaCertificate />}
                {activeTab === 'apresentacao' && <FaStar />}
              </CardPreview>
              <CardInfo>
                <CardTitle title={membro.nome}>{membro.nome}</CardTitle>
                <CardMeta>
                  <span><FaUser /> {membro.cargo}</span>
                  <span><FaChurch /> {membro.igreja}</span>
                </CardMeta>
                <CardActions>
                  <ActionIcon onClick={() => handleGenerateCertificate(membro)}>
                    <FaEye /> Visualizar
                  </ActionIcon>
                  <ActionIcon>
                    <FaDownload /> Baixar
                  </ActionIcon>
                  <ActionIcon>
                    <FaPrint /> Imprimir
                  </ActionIcon>
                </CardActions>
              </CardInfo>
            </CertificadoCard>
          ))}
        </CardsGrid>

        {showModal && selectedMembro && (
          <ModalOverlay onClick={() => setShowModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <h2>
                  {activeTab === 'membro' && 'Carteirinha de Membro'}
                  {activeTab === 'batismo' && 'Certificado de Batismo'}
                  {activeTab === 'apresentacao' && 'Certificado de Apresentação'}
                </h2>
                <button onClick={() => setShowModal(false)}>✕</button>
              </ModalHeader>
              <ModalBody>
                <PreviewArea>
                  {renderCertificatePreview()}
                </PreviewArea>

                <FormGroup>
                  <label>📅 Data do Certificado</label>
                  <input 
                    type="date" 
                    value={dataCustom}
                    onChange={(e) => setDataCustom(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <label>👨‍💼 Nome do Pastor</label>
                  <input 
                    type="text" 
                    value={pastorNome}
                    onChange={(e) => setPastorNome(e.target.value.toUpperCase())}
                    placeholder="Digite o nome do pastor"
                  />
                </FormGroup>

                <ModalActions>
                  <ModalButton variant="secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                  </ModalButton>
                  <ModalButton variant="secondary" onClick={handleShareWhatsApp}>
                    <FaWhatsapp /> WhatsApp
                  </ModalButton>
                  <ModalButton variant="secondary" onClick={handlePrint}>
                    <FaPrint /> Imprimir
                  </ModalButton>
                  <ModalButton variant="primary" onClick={handleDownloadPDF}>
                    <FaDownload /> Baixar PDF
                  </ModalButton>
                </ModalActions>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}

        {isGenerating && (
          <ModalOverlay>
            <ModalContent style={{ maxWidth: '300px', textAlign: 'center' }}>
              <ModalBody>
                <LoadingSpinner>
                  <FaSpinner size={40} color="#7C3AED" />
                </LoadingSpinner>
                <p style={{ marginTop: '1rem', color: '#64748B' }}>
                  Gerando certificado...
                </p>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Certificados;