import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.font.sans};
    background: ${theme.color.bg};
    color: ${theme.color.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  ::selection {
    background: rgba(165, 28, 48, 0.35);
    color: ${theme.color.text};
  }

  :focus-visible {
    outline: 2px solid ${theme.color.crimson};
    outline-offset: 3px;
  }

  h1, h2, h3, h4 {
    font-family: ${theme.font.serif};
    font-weight: 400;
    line-height: 1.15;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const GlobalStylesComponent: React.FC = () => {
  return <GlobalStyles />;
};

export default GlobalStylesComponent;
