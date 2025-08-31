import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CoreSystems from './components/CoreSystems';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <BackgroundEffects />
        <Header />
        <Hero />
        <About />
        <CoreSystems />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
