import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
import Leadership from './components/Leadership';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(165, 28, 48, 0.18), transparent 55%),
    ${theme.color.bg};
  color: ${theme.color.text};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <main>
          <Hero />
          <Events />
          <Leadership />
        </main>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
