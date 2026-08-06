# DataVix Tech — Site institucional multi-produto

## Contexto

O site atual (`datavix-tech`, CRA + styled-components) é uma landing page de produto único, 100% dedicada ao Berion Igrejas. A empresa por trás (DataVix Tech) tem hoje 4 produtos e precisa de um site institucional que apresente a empresa e dê uma página completa para cada produto, com foco em geração de leads.

## Objetivo

Reconstruir o site como uma vitrine institucional da DataVix Tech, com página própria e completa para cada um dos 4 produtos:

1. **Berion Igrejas** — gestão eclesiástica (split de dízimos, relatórios, dashboard multi-igrejas, RBAC). Fonte: `D:\biazin\Nova pasta (2)\isosed-api`. Conteúdo já existe no site atual e será migrado/adaptado ao novo template.
2. **App Membros Berion** — app do membro de igreja (feed, agenda, Bíblia, departamentos, lives, ofertas, cadastro/convite, seleção de igreja). Android via Capacitor. Fonte: `D:\biazin\App-Igreja\app-membros-berion`.
3. **Conexão Jovem** — comunidade do departamento de jovens (devocional diário, eventos, feed, assinatura paga via EFI, login Google, PWA). Fonte: `D:\biazin\app-conexao-jovem`.
4. **Berion Comércios** — ERP de comércio/serviços (PDV/vendas, comandas, delivery, estoque, financeiro, multi-filiais, orçamentos, ordens de serviço). Fonte: `D:\biazin\Berion Comercios\berion-frontend`.

## Escopo

**Dentro do escopo:**
- Reconstrução do site em nova stack (Vite + React + TypeScript + Tailwind + shadcn/ui), substituindo CRA + styled-components.
- Home institucional apresentando a DataVix Tech e os 4 produtos.
- Página `/produtos` com grade dos 4 produtos.
- Página completa por produto (`/berion-igrejas`, `/app-membros`, `/conexao-jovem`, `/berion-comercios`), cada uma com identidade de cor própria dentro do template institucional neutro.
- Páginas `/sobre` e `/contato`.
- `/blog` mantido como placeholder (estrutura de rota existe, sem conteúdo novo).
- Header com dropdown "Produtos", footer institucional com coluna de produtos.
- Conteúdo de cada produto redigido a partir da leitura do código/READMEs dos respectivos repositórios (feito nesta sessão de brainstorming, resumido abaixo).
- Todos os CTAs ("Começar agora", "Baixar app", "Solicitar demo" etc.) apontam para `/contato` (formulário + WhatsApp), já que nenhum produto tem login/loja pública ainda.

**Fora do escopo (não fazer agora):**
- Autenticação real, formulário de contato com backend funcional (pode ser mailto/WhatsApp link ou formulário estático por enquanto — decidir na fase de plano).
- Conteúdo de blog.
- Deploy/infra nova (manter o processo de deploy atual do projeto, se houver).
- Alterar qualquer um dos 4 repositórios de produto — este projeto só consome informação deles como fonte de conteúdo, não os modifica.

## Arquitetura e stack

- **Stack**: Vite + React + TypeScript + Tailwind CSS + shadcn/ui + React Router. Substitui CRA + styled-components integralmente.
- **SPA única**, sem monorepo e sem CMS — todo o conteúdo institucional e de produto vive neste repositório.
- **Conteúdo dirigido por dados**: cada produto é descrito por um objeto de conteúdo TypeScript tipado (ex.: `src/content/products/berion-igrejas.ts`) contendo nome, tagline, cor de destaque, lista de funcionalidades, estatísticas, CTA. A página de produto é um **template único** que renderiza qualquer um desses objetos — adicionar um 5º produto no futuro é criar um novo arquivo de conteúdo, não uma nova página do zero.
- **Diretrizes de implementação de UI** (a aplicar na fase de execução, não nesta fase de spec): usar os skills `frontend-design`, `ui-ux-pro-max` e o skill/plugin do `shadcn` já instalados neste ambiente para guiar decisões de estilo, tipografia, paleta e composição de componentes shadcn.

## Arquitetura de informação (sitemap)

```
/                      Home institucional (DataVix Tech)
/produtos              Grade com os 4 produtos (resumo + link)
/berion-igrejas        Página completa do produto
/app-membros           Página completa do produto
/conexao-jovem         Página completa do produto
/berion-comercios      Página completa do produto
/sobre                 Quem somos / missão
/contato               Formulário + WhatsApp (destino de todos os CTAs)
/blog                  Placeholder, mantém estrutura de rota
* (404)                Página não encontrada
```

**Header**: logo DataVix Tech, nav (Produtos ▾ com os 4 no dropdown, Sobre, Blog, Contato), CTA "Falar com o time" → `/contato`.
**Footer**: bloco institucional (empresa, endereço, contato, redes sociais) + coluna "Produtos" linkando as 4 páginas + coluna institucional (Sobre, Blog, Contato) + linha de copyright/políticas (mantém Política de Privacidade, Termos, Cookies, LGPD já existentes no footer atual).

## Design system / identidade visual

- Identidade nova, criada do zero para a camada institucional (home, produtos, sobre, contato): paleta neutra/corporativa da DataVix Tech, tipografia e componentes shadcn como base.
- Cada página de produto usa uma **cor de destaque própria** (accent color) sobre a base institucional neutra, para diferenciar visualmente os 4 produtos sem quebrar a coerência do site. Cores exatas dos 4 produtos serão definidas na fase de execução com apoio dos skills de design citados acima.
- Página de produto segue uma seção-padrão: Hero (nome + tagline + CTA), Funcionalidades (grade de cards), Para quem é / benefícios, CTA final. Estrutura inspirada no que já existe hoje para Berion Igrejas, generalizada como template.

## Conteúdo por produto (resumo para a página)

### Berion Igrejas
Plataforma de gestão eclesiástica: split automático de dízimos/ofertas (sede mundial, regional, fundos, pastor), relatórios financeiros com fluxo de dupla aprovação (pastor + tesoureiro) e envio automático à sede, dashboard multi-igrejas em tempo real, gestão de membros (cadastro, certificados, carteirinhas), RBAC granular (Pastor/Tesoureiro/Secretaria/Admin), PIX e boleto, CRM com fluxo guiado, segurança multitenant. Reaproveita estatísticas já usadas (500+ igrejas, R$2M+ em repasses).

### App Membros Berion
App do membro de igreja, complementar ao Berion Igrejas: feed de comunidade, agenda de reuniões/eventos, leitura da Bíblia, departamentos/ministérios com detalhe, lives/transmissões, controle de membresia, ofertas pelo app, cadastro e convite de novos membros, seleção de igreja (para quem participa de mais de uma). App Android via Capacitor (`br.com.isosed.app`).

### Conexão Jovem
Comunidade digital para o departamento de jovens da igreja: devocional diário (com reflexão gerada por IA), agenda de eventos, feed de comunidade, perfil, login com Google, assinatura paga com planos mensal (R$4,99), semestral (R$29,90) e anual (R$49,90) via EFI. PWA hoje, com plano de evoluir para app publicado na Play Store.

### Berion Comércios
ERP para comércio e prestação de serviços: PDV/vendas, comandas, delivery, controle de estoque, financeiro, gestão de múltiplas filiais, orçamentos, ordens de serviço, cadastro de clientes e usuários com controle de acesso.

## Migração do conteúdo existente

- O conteúdo textual/estatísticas já usados hoje para Berion Igrejas (500+ igrejas, R$2M+ em repasses, simulador de split, lista de funcionalidades) são reaproveitados na nova página `/berion-igrejas`, adaptados ao template de produto.
- Componentes atuais (`Hero`, `HeroSection`, `Berion`, `SplitDemonstrativo`, `CTAFinal`, `solutions`, etc.) não são reaproveitados como código — a stack muda para Tailwind/shadcn — mas o conteúdo/copy que carregam é a base para o novo texto.

## Testes / verificação

- Rodar o site localmente (`npm run dev`) e navegar pelas 4 páginas de produto, home, produtos, sobre e contato conferindo: nav funcional, CTAs levando a `/contato`, responsividade mobile/desktop, ausência de erros no console.
- Sem testes automatizados novos previstos neste escopo (site de marketing, sem lógica de negócio).

## Decisões confirmadas

- **Contato**: `/contato` e todos os CTAs usam link direto para WhatsApp (sem formulário com backend), usando o número principal (44) 99117-9564. O segundo número do footer atual, (17) 98135-2391, pode continuar listado como contato secundário no rodapé, sem ser o alvo dos CTAs.
- **Cores por produto**: confirmado — cada produto mantém uma cor de destaque própria (accent color) sobre a base institucional neutra. As cores exatas são definidas na fase de execução com apoio dos skills `frontend-design` e `ui-ux-pro-max`.
