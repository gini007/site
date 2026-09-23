import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  max-width: ${theme.width};
  margin: 0 auto;
  padding: 88px 24px 72px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;

  @media (max-width: 800px) {
    padding: 56px 24px 48px;
    gap: 40px;
  }
`;

const Eyebrow = styled.p`
  color: ${theme.color.crimson};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const Title = styled.h1`
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.15rem;
  color: ${theme.color.muted};
  margin-bottom: 32px;
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="top">
      <div>
        <Eyebrow>Harvard Business School</Eyebrow>
        <Title>Automation & Deep Tech</Title>
        <Description>
          A student club building the HBS community around Physical AI, robotics, automation, and the commercialization of R&amp;D-driven science.
        </Description>
      </div>
    </HeroSection>
  );
};

export default Hero;
