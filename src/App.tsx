import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CoreSystems from './components/CoreSystems';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import Leadership from './components/Leadership';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'leadership'>('home');

  const showLeadership = () => setCurrentPage('leadership');
  const showHome = () => setCurrentPage('home');

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <BackgroundEffects />
        {currentPage === 'home' ? (
          <>
            <Header onLeadershipClick={showLeadership} />
            <Hero />
            <About />
            <CoreSystems />
            <Footer />
          </>
        ) : (
          <Leadership onBack={showHome} />
        )}
      </AppContainer>
    </>
  );
}

export default App;
