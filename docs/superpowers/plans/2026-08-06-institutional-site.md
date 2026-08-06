# DataVix Tech Institutional Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `datavix-tech` from a single-product (Berion Igrejas) CRA landing page into a Vite/Tailwind/shadcn institutional site for DataVix Tech, with a full product page for each of the 4 products (Berion Igrejas, App Membros Berion, Conexão Jovem, Berion Comércios).

**Architecture:** Single-page React app (Vite + TypeScript + React Router + Tailwind + shadcn/ui). Content for each product lives in a typed data file under `src/content/products/`; a single `ProductPage` template renders whichever product object it's given, so adding a 5th product later means adding a content file, not a new page component.

**Tech Stack:** Vite, React 18, TypeScript, React Router v6, Tailwind CSS, shadcn/ui, Vitest + React Testing Library (component tests), `class-variance-authority` + `clsx`/`tailwind-merge` (shadcn's `cn()` helper).

## Global Constraints

- Replace CRA + styled-components entirely; no `styled-components`, `react-scripts`, or `react-app-env.d.ts` in the final project.
- Every CTA ("Começar agora", "Baixar app", "Solicitar demo", "Falar com o time", etc.) across every page links to WhatsApp using the primary number **(44) 99117-9564** → `https://wa.me/5544991179564`.
- The secondary number **(17) 98135-2391** appears only as text in the footer, never as a CTA target.
- Routes are exactly: `/`, `/produtos`, `/berion-igrejas`, `/app-membros`, `/conexao-jovem`, `/berion-comercios`, `/sobre`, `/contato`, `/blog`, and a catch-all 404.
- Each product page uses its own accent color over a shared neutral institutional base (accent colors defined in Task 2 with `frontend-design`/`ui-ux-pro-max` guidance).
- No backend/contact-form submission logic — contact is a WhatsApp link only.
- Content per product must match the spec's content summary (`docs/superpowers/specs/2026-08-06-institutional-site-design.md`), not be invented from scratch.

---

### Task 1: Scaffold Vite + TypeScript + Tailwind + shadcn project

**Files:**
- Create: `vite.config.ts`, `index.html`, `src/main.tsx`, `tsconfig.json`, `tsconfig.node.json`, `tailwind.config.ts`, `postcss.config.js`, `components.json`, `src/lib/utils.ts`, `src/index.css`
- Delete: `public/index.html` (CRA), `src/react-app-env.d.ts`, `src/reportWebVitals.ts`, `src/index.tsx`, `src/styles.ts`, `src/eslintrc.json` (root `eslintrc.json`)
- Modify: `package.json` (full replace of scripts/deps)
- Test: `src/App.test.tsx`

**Interfaces:**
- Produces: `cn(...)` helper from `src/lib/utils.ts` (`import { cn } from "@/lib/utils"`), used by every component task from here on.
- Produces: path alias `@/*` → `src/*` (configured in both `tsconfig.json` and `vite.config.ts`), used by all later imports.

- [ ] **Step 1: Remove the CRA project files**

```bash
git rm -r public/index.html src/react-app-env.d.ts src/reportWebVitals.ts src/index.tsx src/styles.ts eslintrc.json
```

Keep `src/App.tsx`, `src/components/`, `public/` (minus `index.html`) for now — later tasks will overwrite/replace them.

- [ ] **Step 2: Scaffold Vite in place**

```bash
npm create vite@latest . -- --template react-ts
```

When prompted about the current directory not being empty, choose to continue / merge (Vite will only add files that don't already exist; it will not overwrite `src/App.tsx` — delete the Vite-generated `src/App.tsx`, `src/App.css`, `src/assets/react.svg`, `src/index.css` if they collide, keeping the project's own `src/App.tsx` for now, since Task 11 rewrites it anyway).

- [ ] **Step 3: Install Tailwind, Router, and test tooling**

```bash
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
npx tailwindcss init -p
```

- [ ] **Step 4: Configure the `@` path alias**

Edit `tsconfig.json` to add under `compilerOptions`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Edit `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test-setup.ts',
  },
})
```

- [ ] **Step 5: Create the Vitest setup file**

Create `src/test-setup.ts`:

```typescript
import '@testing-library/jest-dom'
```

- [ ] **Step 6: Initialize shadcn/ui**

```bash
npx shadcn@latest init -d
```

This generates/updates `components.json` and `src/lib/utils.ts` (the `cn()` helper) and wires Tailwind CSS variables into `src/index.css`. Confirm `src/lib/utils.ts` exports:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 7: Add the `button` and `dropdown-menu` shadcn components (needed by Header in Task 4)**

```bash
npx shadcn@latest add button dropdown-menu
```

- [ ] **Step 8: Update `package.json` scripts**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- [ ] **Step 9: Write a smoke test**

Create `src/App.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    expect(document.body).toBeTruthy()
  })
})
```

- [ ] **Step 10: Run the test to verify it passes**

Run: `npm test`
Expected: PASS (1 test) — if `App.tsx` still references deleted styled-components imports, temporarily reduce it to `export default function App() { return <div /> }` so this task's build is green; Task 11 replaces it for real.

- [ ] **Step 11: Verify the dev server boots**

Run: `npm run dev` and confirm it starts without errors, then stop it.

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "chore: scaffold Vite + TS + Tailwind + shadcn, remove CRA"
```

---

### Task 2: Design tokens — institutional theme + 4 product accent colors

**Files:**
- Modify: `src/index.css` (CSS variables), `tailwind.config.ts`
- Test: `src/content/theme.test.ts`
- Create: `src/content/theme.ts`

**Interfaces:**
- Produces: `productAccent` map in `src/content/theme.ts`, typed `Record<ProductSlug, string>` (Tailwind color name), consumed by Task 3's content files and Task 5's `ProductPage`.

- [ ] **Step 1: Decide the institutional palette and 4 accent colors**

Using the `frontend-design` and `ui-ux-pro-max` skills for guidance, pick:
- A neutral institutional base (background/foreground/primary) for shadcn's CSS variables in `src/index.css` — a slate/zinc neutral base with one institutional brand color (e.g. indigo) as `--primary`.
- One distinct Tailwind accent color per product, avoiding the institutional primary color: Berion Igrejas → `violet`, App Membros Berion → `sky`, Conexão Jovem → `amber`, Berion Comércios → `emerald`.

- [ ] **Step 2: Write the failing test**

Create `src/content/theme.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { productAccent } from './theme'

describe('productAccent', () => {
  it('defines a distinct accent color for each of the 4 products', () => {
    const slugs = ['berion-igrejas', 'app-membros', 'conexao-jovem', 'berion-comercios'] as const
    const colors = slugs.map((slug) => productAccent[slug])
    expect(colors).toHaveLength(4)
    expect(new Set(colors).size).toBe(4)
    colors.forEach((color) => expect(typeof color).toBe('string'))
  })
})
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- theme`
Expected: FAIL — `Cannot find module './theme'`

- [ ] **Step 4: Implement `src/content/theme.ts`**

```typescript
export type ProductSlug =
  | 'berion-igrejas'
  | 'app-membros'
  | 'conexao-jovem'
  | 'berion-comercios'

export const productAccent: Record<ProductSlug, string> = {
  'berion-igrejas': 'violet',
  'app-membros': 'sky',
  'conexao-jovem': 'amber',
  'berion-comercios': 'emerald',
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- theme`
Expected: PASS

- [ ] **Step 6: Wire the institutional base into Tailwind/shadcn CSS variables**

In `src/index.css`, under the `:root` block generated by `shadcn init`, set the institutional primary (e.g. indigo-based `--primary` HSL values) so the base UI (buttons, nav) reads as DataVix Tech's institutional brand rather than any single product's color.

- [ ] **Step 7: Commit**

```bash
git add src/content/theme.ts src/content/theme.test.ts src/index.css
git commit -m "feat: define institutional theme and per-product accent colors"
```

---

### Task 3: Product content data layer

**Files:**
- Create: `src/content/products/types.ts`, `src/content/products/berion-igrejas.ts`, `src/content/products/app-membros.ts`, `src/content/products/conexao-jovem.ts`, `src/content/products/berion-comercios.ts`, `src/content/products/index.ts`
- Test: `src/content/products/index.test.ts`

**Interfaces:**
- Consumes: `ProductSlug`, `productAccent` from `src/content/theme.ts` (Task 2).
- Produces: `ProductContent` type and `products: ProductContent[]` array from `src/content/products/index.ts`, consumed by Task 4 (Header dropdown, Footer links), Task 5 (`ProductPage`), Task 6 (Home), Task 7 (Produtos grade).

- [ ] **Step 1: Write the failing test**

Create `src/content/products/index.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { products } from './index'

describe('products', () => {
  it('has exactly 4 products with unique slugs and at least 3 features each', () => {
    expect(products).toHaveLength(4)
    const slugs = products.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(4)
    products.forEach((p) => {
      expect(p.features.length).toBeGreaterThanOrEqual(3)
      expect(p.name.length).toBeGreaterThan(0)
      expect(p.tagline.length).toBeGreaterThan(0)
      expect(p.ctaLabel.length).toBeGreaterThan(0)
    })
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- content/products`
Expected: FAIL — `Cannot find module './index'`

- [ ] **Step 3: Define the shared type**

Create `src/content/products/types.ts`:

```typescript
import type { ProductSlug } from '../theme'

export interface ProductFeature {
  title: string
  description: string
}

export interface ProductStat {
  label: string
  value: string
}

export interface ProductContent {
  slug: ProductSlug
  name: string
  tagline: string
  description: string
  accentColor: string
  features: ProductFeature[]
  stats?: ProductStat[]
  ctaLabel: string
}
```

- [ ] **Step 4: Create the Berion Igrejas content file**

Create `src/content/products/berion-igrejas.ts`:

```typescript
import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const berionIgrejas: ProductContent = {
  slug: 'berion-igrejas',
  name: 'Berion Igrejas',
  tagline: 'Gestão completa para sua igreja',
  description:
    'Plataforma eclesiástica completa: controle de membros, dízimos, ofertas e votos em um só lugar, com split automático de repasses e relatórios inteligentes.',
  accentColor: productAccent['berion-igrejas'],
  ctaLabel: 'Começar agora',
  stats: [
    { label: 'Igrejas atendidas', value: '500+' },
    { label: 'Em repasses processados', value: 'R$ 2M+' },
    { label: 'Suporte', value: '24/7' },
  ],
  features: [
    {
      title: 'Split automático de repasses',
      description:
        'Divisão automática de dízimos e ofertas entre sede mundial, regional, fundos e pastor, com percentuais configuráveis por igreja.',
    },
    {
      title: 'Relatórios com dupla aprovação',
      description:
        'Fluxo guiado em que pastor e tesoureiro aprovam, e o sistema envia o relatório financeiro automaticamente para a sede.',
    },
    {
      title: 'Dashboard multi-igrejas',
      description:
        'Visão em tempo real para sedes e redes acompanharem indicadores financeiros e de crescimento de todas as igrejas.',
    },
    {
      title: 'Gestão completa de membros',
      description: 'Cadastro, aniversariantes, certificados e carteirinhas em um só lugar.',
    },
    {
      title: 'RBAC granular',
      description: 'Perfis de acesso para Pastor, Tesoureiro, Secretaria e Admin.',
    },
    {
      title: 'PIX e boleto',
      description: 'Integração com gateway de pagamentos para repasses e contribuições.',
    },
  ],
}
```

- [ ] **Step 5: Create the App Membros Berion content file**

Create `src/content/products/app-membros.ts`:

```typescript
import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const appMembros: ProductContent = {
  slug: 'app-membros',
  name: 'App Membros Berion',
  tagline: 'Sua igreja no bolso, todos os dias',
  description:
    'App para o membro acompanhar a vida da igreja: feed da comunidade, agenda, Bíblia, departamentos, lives e ofertas, direto do celular.',
  accentColor: productAccent['app-membros'],
  ctaLabel: 'Conhecer o app',
  features: [
    {
      title: 'Feed da comunidade',
      description: 'Acompanhe avisos, novidades e a vida da igreja em um feed único.',
    },
    {
      title: 'Agenda de reuniões e eventos',
      description: 'Todos os compromissos da igreja e dos departamentos organizados em um calendário.',
    },
    {
      title: 'Bíblia integrada',
      description: 'Leitura da Bíblia direto no app, sem precisar trocar de aplicativo.',
    },
    {
      title: 'Departamentos e ministérios',
      description: 'Cada departamento com sua própria página, avisos e reuniões.',
    },
    {
      title: 'Lives e transmissões',
      description: 'Acesso às transmissões ao vivo da igreja direto pelo app.',
    },
    {
      title: 'Ofertas pelo app e múltiplas igrejas',
      description:
        'Contribua direto pelo app e, se participar de mais de uma igreja, alterne entre elas com um toque.',
    },
  ],
}
```

- [ ] **Step 6: Create the Conexão Jovem content file**

Create `src/content/products/conexao-jovem.ts`:

```typescript
import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const conexaoJovem: ProductContent = {
  slug: 'conexao-jovem',
  name: 'Conexão Jovem',
  tagline: 'Comunidade para o departamento de jovens',
  description:
    'App de comunidade feito para o departamento de jovens: devocional diário, eventos e feed, com assinatura acessível a partir de R$ 4,99.',
  accentColor: productAccent['conexao-jovem'],
  ctaLabel: 'Conhecer o Conexão Jovem',
  features: [
    {
      title: 'Devocional diário com reflexão gerada por IA',
      description: 'Um devocional novo todos os dias, com reflexão e versículo do dia.',
    },
    {
      title: 'Agenda de eventos do departamento',
      description: 'Todos os encontros e eventos de jovens organizados em um só lugar.',
    },
    {
      title: 'Feed de comunidade',
      description: 'Espaço para os jovens interagirem e acompanharem a vida do departamento.',
    },
    {
      title: 'Login com Google',
      description: 'Entrada rápida e segura usando a conta Google do jovem.',
    },
    {
      title: 'Planos de assinatura acessíveis',
      description: 'Mensal (R$ 4,99), semestral (R$ 29,90) ou anual (R$ 49,90).',
    },
  ],
}
```

- [ ] **Step 7: Create the Berion Comércios content file**

Create `src/content/products/berion-comercios.ts`:

```typescript
import { productAccent } from '../theme'
import type { ProductContent } from './types'

export const berionComercios: ProductContent = {
  slug: 'berion-comercios',
  name: 'Berion Comércios',
  tagline: 'ERP completo para comércio e serviços',
  description:
    'Gestão de vendas, estoque, financeiro e múltiplas filiais em uma plataforma só, para comércios e prestadores de serviço.',
  accentColor: productAccent['berion-comercios'],
  ctaLabel: 'Conhecer o ERP',
  features: [
    {
      title: 'PDV e vendas',
      description: 'Frente de caixa completa para registrar vendas rapidamente.',
    },
    {
      title: 'Comandas e delivery',
      description: 'Controle de comandas e pedidos de delivery integrados ao mesmo sistema.',
    },
    {
      title: 'Estoque e financeiro',
      description: 'Controle de estoque em tempo real e visão financeira do negócio.',
    },
    {
      title: 'Multi-filiais',
      description: 'Gerencie várias filiais a partir de um único painel.',
    },
    {
      title: 'Orçamentos e ordens de serviço',
      description: 'Monte orçamentos e acompanhe ordens de serviço do início ao fim.',
    },
    {
      title: 'Clientes e usuários',
      description: 'Cadastro de clientes e controle de acesso por usuário.',
    },
  ],
}
```

- [ ] **Step 8: Aggregate all products**

Create `src/content/products/index.ts`:

```typescript
import { berionIgrejas } from './berion-igrejas'
import { appMembros } from './app-membros'
import { conexaoJovem } from './conexao-jovem'
import { berionComercios } from './berion-comercios'
import type { ProductContent } from './types'

export type { ProductContent, ProductFeature, ProductStat } from './types'
export { berionIgrejas, appMembros, conexaoJovem, berionComercios }

export const products: ProductContent[] = [berionIgrejas, appMembros, conexaoJovem, berionComercios]
```

- [ ] **Step 9: Run the test to verify it passes**

Run: `npm test -- content/products`
Expected: PASS

- [ ] **Step 10: Commit**

```bash
git add src/content/products
git commit -m "feat: add typed content for all 4 products"
```

---

### Task 4: Shared layout — WhatsApp link helper, Header, Footer

**Files:**
- Create: `src/lib/whatsapp.ts`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/Layout.tsx`
- Test: `src/lib/whatsapp.test.ts`, `src/components/layout/Header.test.tsx`, `src/components/layout/Footer.test.tsx`

**Interfaces:**
- Consumes: `products` from `src/content/products` (Task 3).
- Produces: `whatsappLink(message?: string): string` from `src/lib/whatsapp.ts`, used by every CTA in Tasks 5–10. Produces `Layout` component wrapping `<Header />`, `children`, `<Footer />`, used by Task 11's routing.

- [ ] **Step 1: Write the failing test for the WhatsApp helper**

Create `src/lib/whatsapp.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { whatsappLink } from './whatsapp'

describe('whatsappLink', () => {
  it('builds a wa.me link with the primary number', () => {
    expect(whatsappLink()).toBe('https://wa.me/5544991179564')
  })

  it('appends an url-encoded message when provided', () => {
    expect(whatsappLink('Quero saber mais')).toBe(
      'https://wa.me/5544991179564?text=Quero%20saber%20mais'
    )
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- whatsapp`
Expected: FAIL — `Cannot find module './whatsapp'`

- [ ] **Step 3: Implement the helper**

Create `src/lib/whatsapp.ts`:

```typescript
const PRIMARY_WHATSAPP_NUMBER = '5544991179564'

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- whatsapp`
Expected: PASS

- [ ] **Step 5: Write the failing test for Header**

Create `src/components/layout/Header.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Header', () => {
  it('lists all 4 products in the Produtos dropdown', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    await userEvent.click(screen.getByRole('button', { name: /produtos/i }))
    expect(await screen.findByRole('link', { name: /berion igrejas/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /app membros berion/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /conexão jovem/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /berion comércios/i })).toBeInTheDocument()
  })

  it('has a CTA linking to WhatsApp', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const cta = screen.getByRole('link', { name: /falar com o time/i })
    expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564'))
  })
})
```

- [ ] **Step 6: Run the test to verify it fails**

Run: `npm test -- Header`
Expected: FAIL — `Cannot find module './Header'`

- [ ] **Step 7: Implement Header**

Create `src/components/layout/Header.tsx`:

```typescript
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight">
          DataVix Tech
        </Link>
        <nav className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Produtos</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {products.map((product) => (
                <DropdownMenuItem key={product.slug} asChild>
                  <Link to={`/${product.slug}`}>{product.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Sobre
          </Link>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Blog
          </Link>
          <Link to="/contato" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Contato
          </Link>
        </nav>
        <Button asChild>
          <a href={whatsappLink('Olá! Quero saber mais sobre os produtos da DataVix Tech.')}>
            Falar com o time
          </a>
        </Button>
      </div>
    </header>
  )
}
```

- [ ] **Step 8: Run the Header test to verify it passes**

Run: `npm test -- Header`
Expected: PASS

- [ ] **Step 9: Write the failing test for Footer**

Create `src/components/layout/Footer.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows both phone numbers, with only the primary as a WhatsApp link', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(screen.getByText(/\(44\) 99117-9564/)).toBeInTheDocument()
    expect(screen.getByText(/\(17\) 98135-2391/)).toBeInTheDocument()
    const links = screen.getAllByRole('link').filter((a) => a.getAttribute('href')?.includes('wa.me'))
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => expect(link).toHaveAttribute('href', expect.stringContaining('5544991179564')))
  })

  it('links to all 4 product pages', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: /berion igrejas/i })).toHaveAttribute('href', '/berion-igrejas')
    expect(screen.getByRole('link', { name: /app membros berion/i })).toHaveAttribute('href', '/app-membros')
    expect(screen.getByRole('link', { name: /conexão jovem/i })).toHaveAttribute('href', '/conexao-jovem')
    expect(screen.getByRole('link', { name: /berion comércios/i })).toHaveAttribute('href', '/berion-comercios')
  })
})
```

- [ ] **Step 10: Run the test to verify it fails**

Run: `npm test -- Footer`
Expected: FAIL — `Cannot find module './Footer'`

- [ ] **Step 11: Implement Footer**

Create `src/components/layout/Footer.tsx`:

```typescript
import { Link } from 'react-router-dom'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">DataVix Tech</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Plataformas de gestão para igrejas e comércios, com tecnologia de ponta.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Produtos</p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Empresa</p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Contato</p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={whatsappLink('Olá! Quero saber mais sobre a DataVix Tech.')}>(44) 99117-9564</a>
            </li>
            <li>(17) 98135-2391</li>
            <li>help@biazinsistemas.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DataVix Tech. Todos os direitos reservados.
      </div>
    </footer>
  )
}
```

- [ ] **Step 12: Run the Footer test to verify it passes**

Run: `npm test -- Footer`
Expected: PASS

- [ ] **Step 13: Create the Layout wrapper**

Create `src/components/layout/Layout.tsx`:

```typescript
import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 14: Commit**

```bash
git add src/lib/whatsapp.ts src/lib/whatsapp.test.ts src/components/layout
git commit -m "feat: add WhatsApp CTA helper and shared Header/Footer layout"
```

---

### Task 5: `ProductPage` template

**Files:**
- Create: `src/pages/ProductPage.tsx`
- Test: `src/pages/ProductPage.test.tsx`

**Interfaces:**
- Consumes: `ProductContent` type (Task 3), `whatsappLink` (Task 4), `Layout` (Task 4).
- Produces: `<ProductPage product={ProductContent} />`, consumed by Task 11's route wiring for all 4 product routes.

- [ ] **Step 1: Write the failing test**

Create `src/pages/ProductPage.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ProductPage } from './ProductPage'
import { berionComercios } from '@/content/products'

describe('ProductPage', () => {
  it('renders the product name, tagline, all features, and a WhatsApp CTA', () => {
    render(
      <MemoryRouter>
        <ProductPage product={berionComercios} />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: berionComercios.name })).toBeInTheDocument()
    expect(screen.getByText(berionComercios.tagline)).toBeInTheDocument()
    berionComercios.features.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument()
    })
    const ctas = screen.getAllByRole('link', { name: berionComercios.ctaLabel })
    expect(ctas.length).toBeGreaterThan(0)
    ctas.forEach((cta) => expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564')))
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- ProductPage`
Expected: FAIL — `Cannot find module './ProductPage'`

- [ ] **Step 3: Implement `ProductPage`**

Create `src/pages/ProductPage.tsx`:

```typescript
import { Button } from '@/components/ui/button'
import type { ProductContent } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function ProductPage({ product }: { product: ProductContent }) {
  const cta = whatsappLink(`Olá! Quero saber mais sobre o ${product.name}.`)

  return (
    <div>
      <section className={`bg-${product.accentColor}-50 px-4 py-20`}>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className={`mt-2 text-xl font-medium text-${product.accentColor}-600`}>{product.tagline}</p>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{product.description}</p>
          <Button asChild size="lg" className="mt-8">
            <a href={cta}>{product.ctaLabel}</a>
          </Button>
        </div>
      </section>

      {product.stats && (
        <section className="border-y border-border bg-muted/30 px-4 py-10">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-center sm:grid-cols-3">
            {product.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">Funcionalidades</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-border p-6">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-${product.accentColor}-600 px-4 py-16 text-center text-white`}>
        <h2 className="text-2xl font-bold">Pronto para conhecer o {product.name}?</h2>
        <Button asChild size="lg" variant="secondary" className="mt-6">
          <a href={cta}>{product.ctaLabel}</a>
        </Button>
      </section>
    </div>
  )
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- ProductPage`
Expected: PASS

- [ ] **Step 5: Add the dynamic accent classes to the Tailwind safelist**

Since `bg-${accent}-50`, `text-${accent}-600`, and `bg-${accent}-600` are built from a template string, Tailwind's static analysis won't see them. In `tailwind.config.ts`, add a `safelist` covering the 4 accent colors used in `src/content/theme.ts`:

```typescript
const accentColors = ['violet', 'sky', 'amber', 'emerald']

export default {
  // ...existing config
  safelist: accentColors.flatMap((color) => [
    `bg-${color}-50`,
    `bg-${color}-600`,
    `text-${color}-600`,
  ]),
}
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/ProductPage.tsx src/pages/ProductPage.test.tsx tailwind.config.ts
git commit -m "feat: add reusable ProductPage template"
```

---

### Task 6: Home page

**Files:**
- Create: `src/pages/Home.tsx`
- Test: `src/pages/Home.test.tsx`

**Interfaces:**
- Consumes: `products` (Task 3), `whatsappLink` (Task 4).
- Produces: `<Home />`, consumed by Task 11.

- [ ] **Step 1: Write the failing test**

Create `src/pages/Home.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Home } from './Home'
import { products } from '@/content/products'

describe('Home', () => {
  it('introduces DataVix Tech and links to all 4 products', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: /datavix tech/i })).toBeInTheDocument()
    products.forEach((product) => {
      expect(screen.getByRole('link', { name: new RegExp(product.name, 'i') })).toHaveAttribute(
        'href',
        `/${product.slug}`
      )
    })
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- Home`
Expected: FAIL — `Cannot find module './Home'`

- [ ] **Step 3: Implement Home**

Create `src/pages/Home.tsx`:

```typescript
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'
import { whatsappLink } from '@/lib/whatsapp'

export function Home() {
  return (
    <div>
      <section className="px-4 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">DataVix Tech</p>
        <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Tecnologia que organiza a gestão de igrejas e comércios
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Desenvolvemos plataformas completas para quem precisa de gestão financeira, de membros e
          de vendas com transparência e automação.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/produtos">Conhecer os produtos</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={whatsappLink('Olá! Quero saber mais sobre a DataVix Tech.')}>Falar com o time</a>
          </Button>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">Nossos produtos</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/${product.slug}`}
                className="rounded-lg border border-border p-6 transition hover:border-primary"
              >
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- Home`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/Home.tsx src/pages/Home.test.tsx
git commit -m "feat: add institutional home page"
```

---

### Task 7: Produtos grade page

**Files:**
- Create: `src/pages/Produtos.tsx`
- Test: `src/pages/Produtos.test.tsx`

**Interfaces:**
- Consumes: `products` (Task 3).
- Produces: `<Produtos />`, consumed by Task 11.

- [ ] **Step 1: Write the failing test**

Create `src/pages/Produtos.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Produtos } from './Produtos'
import { products } from '@/content/products'

describe('Produtos', () => {
  it('lists all 4 products with a link to each product page', () => {
    render(
      <MemoryRouter>
        <Produtos />
      </MemoryRouter>
    )
    products.forEach((product) => {
      expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: new RegExp(product.ctaLabel, 'i') })).toHaveAttribute(
        'href',
        `/${product.slug}`
      )
    })
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- Produtos`
Expected: FAIL — `Cannot find module './Produtos'`

- [ ] **Step 3: Implement Produtos**

Create `src/pages/Produtos.tsx`:

```typescript
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { products } from '@/content/products'

export function Produtos() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-3xl font-bold">Nossos produtos</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Quatro plataformas, um só objetivo: simplificar a gestão de quem confia na DataVix Tech.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {products.map((product) => (
            <div key={product.slug} className="rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{product.tagline}</p>
              <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>
              <Button asChild className="mt-6">
                <Link to={`/${product.slug}`}>{product.ctaLabel}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- Produtos`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/Produtos.tsx src/pages/Produtos.test.tsx
git commit -m "feat: add produtos grade page"
```

---

### Task 8: Sobre page

**Files:**
- Create: `src/pages/Sobre.tsx`
- Test: `src/pages/Sobre.test.tsx`

**Interfaces:**
- Produces: `<Sobre />`, consumed by Task 11.

- [ ] **Step 1: Write the failing test**

Create `src/pages/Sobre.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Sobre } from './Sobre'

describe('Sobre', () => {
  it('renders the company mission heading', () => {
    render(<Sobre />)
    expect(screen.getByRole('heading', { name: /quem somos/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- Sobre`
Expected: FAIL — `Cannot find module './Sobre'`

- [ ] **Step 3: Implement Sobre**

Create `src/pages/Sobre.tsx`:

```typescript
export function Sobre() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Quem somos</h1>
        <p className="mt-6 text-muted-foreground">
          A DataVix Tech desenvolve plataformas de gestão para igrejas e comércios, unindo
          tecnologia de ponta a processos que antes eram manuais e demorados.
        </p>
        <h2 className="mt-10 text-xl font-semibold">Nossa missão</h2>
        <p className="mt-4 text-muted-foreground">
          Simplificar a gestão financeira, de membros e de vendas de quem confia em nós, com
          transparência, automação e suporte próximo em cada etapa.
        </p>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- Sobre`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/Sobre.tsx src/pages/Sobre.test.tsx
git commit -m "feat: add sobre page"
```

---

### Task 9: Contato page

**Files:**
- Create: `src/pages/Contato.tsx`
- Test: `src/pages/Contato.test.tsx`

**Interfaces:**
- Consumes: `whatsappLink` (Task 4).
- Produces: `<Contato />`, consumed by Task 11.

- [ ] **Step 1: Write the failing test**

Create `src/pages/Contato.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contato } from './Contato'

describe('Contato', () => {
  it('renders a primary WhatsApp CTA and both phone numbers', () => {
    render(<Contato />)
    const cta = screen.getByRole('link', { name: /whatsapp/i })
    expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me/5544991179564'))
    expect(screen.getByText(/\(44\) 99117-9564/)).toBeInTheDocument()
    expect(screen.getByText(/\(17\) 98135-2391/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- Contato`
Expected: FAIL — `Cannot find module './Contato'`

- [ ] **Step 3: Implement Contato**

Create `src/pages/Contato.tsx`:

```typescript
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/whatsapp'

export function Contato() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-bold">Fale com a gente</h1>
        <p className="mt-4 text-muted-foreground">
          A forma mais rápida de falar com o time da DataVix Tech é pelo WhatsApp.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href={whatsappLink('Olá! Quero falar com o time da DataVix Tech.')}>
            Chamar no WhatsApp
          </a>
        </Button>
        <div className="mt-12 space-y-1 text-sm text-muted-foreground">
          <p>(44) 99117-9564</p>
          <p>(17) 98135-2391</p>
          <p>help@biazinsistemas.com</p>
          <p>Av. Napoleão Moreira da Silva, 430 — Centro, Terra Boa - PR, CEP 87240-000</p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- Contato`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/Contato.tsx src/pages/Contato.test.tsx
git commit -m "feat: add contato page"
```

---

### Task 10: Blog placeholder + 404 page

**Files:**
- Create: `src/pages/Blog.tsx`, `src/pages/NotFound.tsx`
- Test: `src/pages/Blog.test.tsx`, `src/pages/NotFound.test.tsx`

**Interfaces:**
- Produces: `<Blog />`, `<NotFound />`, consumed by Task 11.

- [ ] **Step 1: Write the failing tests**

Create `src/pages/Blog.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders a coming-soon message', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByText(/em breve/i)).toBeInTheDocument()
  })
})
```

Create `src/pages/NotFound.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { NotFound } from './NotFound'

describe('NotFound', () => {
  it('renders a 404 message with a link back home', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    )
    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /voltar/i })).toHaveAttribute('href', '/')
  })
})
```

- [ ] **Step 2: Run both tests to verify they fail**

Run: `npm test -- Blog NotFound`
Expected: FAIL — modules not found

- [ ] **Step 3: Implement Blog**

Create `src/pages/Blog.tsx`:

```typescript
export function Blog() {
  return (
    <div className="px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-4 text-muted-foreground">Conteúdo em breve.</p>
    </div>
  )
}
```

- [ ] **Step 4: Implement NotFound**

Create `src/pages/NotFound.tsx`:

```typescript
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <div className="px-4 py-20 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-muted-foreground">Página não encontrada.</p>
      <Button asChild className="mt-8">
        <Link to="/">Voltar para a home</Link>
      </Button>
    </div>
  )
}
```

- [ ] **Step 5: Run both tests to verify they pass**

Run: `npm test -- Blog NotFound`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/pages/Blog.tsx src/pages/Blog.test.tsx src/pages/NotFound.tsx src/pages/NotFound.test.tsx
git commit -m "feat: add blog placeholder and 404 page"
```

---

### Task 11: Wire routing in `App.tsx`

**Files:**
- Modify: `src/App.tsx`
- Test: `src/App.test.tsx` (extend the smoke test from Task 1)

**Interfaces:**
- Consumes: `Layout` (Task 4), `Home` (Task 6), `Produtos` (Task 7), `ProductPage` + `products` (Task 5, Task 3), `Sobre` (Task 8), `Contato` (Task 9), `Blog`/`NotFound` (Task 10).

- [ ] **Step 1: Write the failing routing test**

Replace `src/App.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )
}

describe('App routing', () => {
  it('renders Home at /', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { name: /datavix tech/i })).toBeInTheDocument()
  })

  it('renders each product page at its route', () => {
    renderAt('/berion-igrejas')
    expect(screen.getByRole('heading', { name: 'Berion Igrejas' })).toBeInTheDocument()
  })

  it('renders NotFound for an unknown route', () => {
    renderAt('/rota-que-nao-existe')
    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- App`
Expected: FAIL — current `App.tsx` is still the placeholder `<div />` from Task 1.

- [ ] **Step 3: Implement `App.tsx`**

Replace `src/App.tsx`:

```typescript
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
```

- [ ] **Step 4: Wire the router provider in `main.tsx`**

Ensure `src/main.tsx` wraps `<App />` in `<BrowserRouter>`:

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- App`
Expected: PASS

- [ ] **Step 6: Run the full test suite**

Run: `npm test`
Expected: PASS (all tests across all tasks)

- [ ] **Step 7: Remove the old CRA/styled-components product components**

The pre-migration components under `src/components/` (`Hero.tsx`, `heroSection`, `solutions`, `Berion/`, `split`, `cta`, `sobre`, `blog`, `comecar`, `igrejasLocais`, `sedesRedes`, `splitPagamentos`, `RelatoriosAutomaticos`, `GestaoMembros`, `TesourariaSplit`, `DashMult`, `certificados`, `CRM`, `seguranca`, `planos`, and the old `header`/`footer`) are no longer imported by anything after this task. Remove them, keeping only `src/components/layout/` and `src/components/ui/` (shadcn):

```bash
git rm -r src/components/Hero.tsx src/components/heroSection src/components/solutions src/components/Berion src/components/split src/components/cta src/components/sobre src/components/blog src/components/comecar src/components/igrejasLocais src/components/sedesRedes src/components/splitPagamentos src/components/RelatoriosAutomaticos src/components/GestaoMembros src/components/TesourariaSplit src/components/DashMult src/components/certificados src/components/CRM src/components/seguranca src/components/planos src/components/header src/components/footer
```

(Adjust the exact list to whatever remains after `git status` — only delete files under `src/components/` that are not `layout/` or `ui/` and are not imported by the new `App.tsx`.)

- [ ] **Step 8: Remove the now-unused `styled-components` dependency**

```bash
npm uninstall styled-components @types/styled-components
```

- [ ] **Step 9: Run the full test suite and build again**

Run: `npm test && npm run build`
Expected: both PASS with no errors.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: wire routing for all institutional and product pages, remove legacy CRA components"
```

---

### Task 12: Manual verification pass

**Files:** none (verification only)

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`

- [ ] **Step 2: Click through every route**

Visit `/`, `/produtos`, `/berion-igrejas`, `/app-membros`, `/conexao-jovem`, `/berion-comercios`, `/sobre`, `/contato`, `/blog`, and an unknown path (confirm 404). Confirm:
- Header "Produtos" dropdown opens and links to all 4 product pages.
- Every CTA button opens `https://wa.me/5544991179564` (with a prefilled message).
- Each product page shows a visually distinct accent color.
- Footer shows both phone numbers and links to all 4 products plus Sobre/Blog/Contato.

- [ ] **Step 3: Check responsiveness**

Resize the browser to a mobile width (~375px) and re-check the header nav, product grids, and footer columns stack sensibly with no horizontal overflow.

- [ ] **Step 4: Check the browser console**

Confirm no errors or warnings in the browser console on any of the visited routes.

- [ ] **Step 5: Run a production build**

Run: `npm run build`
Expected: build succeeds with no TypeScript errors.

- [ ] **Step 6: Stop the dev server**

Stop the `npm run dev` process once verification is complete.
