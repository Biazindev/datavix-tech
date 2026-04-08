import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* 1. Reset moderno e Box-Sizing */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 2. Configurações de Raiz e Layout */
  html {
    font-size: 16px; 
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
    overflow-x: hidden;
  }

  /* 3. Garantia para o React/SPA */
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* 4. Elementos Interativos */
  a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
  }

  button, input, select, textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  }

  /* 5. Mídia e Imagens */
  img, picture, svg, video, canvas {
    max-width: 100%;
    display: block;
    height: auto;
  }

  /* 6. Scrollbar Profissional (Minimalista) */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
    border: 2px solid #f9f9f9;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }
`;

export default GlobalStyles;