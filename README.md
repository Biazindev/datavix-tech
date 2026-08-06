# DataVix Tech

Site institucional da DataVix Tech, construído com Vite, React, TypeScript, Tailwind CSS e shadcn/ui.

## Stack

- [Vite](https://vitejs.dev/) — build tool e dev server
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/) para roteamento
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) para testes

## Scripts disponíveis

No diretório do projeto, você pode rodar:

### `npm run dev`

Inicia o servidor de desenvolvimento do Vite.

### `npm run build`

Faz a checagem de tipos (`tsc -b`) e gera o build de produção na pasta `dist/`.

### `npm run preview`

Serve localmente o build de produção gerado em `dist/` para conferência antes do deploy.

### `npm test`

Executa a suíte de testes uma única vez com o Vitest.

### `npm run test:watch`

Executa a suíte de testes em modo watch.

## Deploy

O projeto é publicado na [Vercel](https://vercel.com/). O arquivo `vercel.json` garante o fallback de rotas para uma SPA, redirecionando qualquer caminho para `index.html`.
