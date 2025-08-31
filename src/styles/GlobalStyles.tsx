import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
    font-family: 'Exo 2', sans-serif;
    background: #000;
    color: #fff;
    overflow-x: hidden;
    position: relative;
    line-height: 1.6;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(165, 28, 48, 0.1);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #A51C30, #C8102E);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #C8102E, #A51C30);
  }
  
  /* Selection styles */
  ::selection {
    background: rgba(165, 28, 48, 0.3);
    color: #fff;
  }
  
  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid rgba(165, 28, 48, 0.5);
    outline-offset: 2px;
  }
  
  /* Smooth transitions for all elements */
  * {
    transition: all 0.3s ease;
  }
  
  /* Typography improvements */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  /* Link styles */
  a {
    color: inherit;
    text-decoration: none;
  }
  
  /* Button reset */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }
  
  /* List reset */
  ul, ol {
    list-style: none;
  }
  
  /* Image styles */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Responsive utilities */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  /* Animation utilities */
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Loading states */
  .loading {
    opacity: 0.6;
    pointer-events: none;
  }
  
  /* Error states */
  .error {
    color: #ff6b6b;
    border-color: #ff6b6b;
  }
  
  /* Success states */
  .success {
    color: #51cf66;
    border-color: #51cf66;
  }
`;

const GlobalStylesComponent: React.FC = () => {
  return <GlobalStyles />;
};

export default GlobalStylesComponent;
