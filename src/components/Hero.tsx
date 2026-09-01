import React from 'react';
import styled from 'styled-components';
import { JOIN_URL } from '../constants';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  max-width: ${theme.width};
  margin: 0 auto;
  padding: 88px 24px 72px;
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 64px;
  align-items: end;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
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
  max-width: 14ch;
`;

const Description = styled.p`
  font-size: 1.15rem;
  color: ${theme.color.muted};
  max-width: 38rem;
  margin-bottom: 32px;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 22px;
  background: ${theme.color.crimson};
  color: ${theme.color.text};
  font-weight: 600;
  border-radius: 999px;

  &:hover {
    background: ${theme.color.crimsonHover};
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 22px;
  border: 1px solid ${theme.color.lineStrong};
  color: ${theme.color.text};
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    border-color: ${theme.color.text};
  }
`;

const Stats = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 24px;
  padding: 28px;
  background: ${theme.color.surface};
  border: 1px solid ${theme.color.line};
  border-radius: 16px;
`;

const Stat = styled.div`
  dt {
    font-family: ${theme.font.serif};
    font-size: 2rem;
    color: ${theme.color.text};
    line-height: 1;
    margin-bottom: 6px;
  }

  dd {
    color: ${theme.color.muted};
    font-size: 0.88rem;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="top">
      <div>
        <Eyebrow>Harvard Business School</Eyebrow>
        <Title>Automation & Deep Tech</Title>
        <Description>
          A student club building the HBS community around Physical AI, robotics,
          automation, and the commercialization of R&amp;D-driven science.
        </Description>
        <Actions>
          <PrimaryButton href={JOIN_URL} target="_blank" rel="noopener noreferrer">
            Join the club
          </PrimaryButton>
          <SecondaryButton href="#events">See 2025 highlights</SecondaryButton>
        </Actions>
      </div>
      <Stats>
        <Stat>
          <dt>~200</dt>
          <dd>students at kickoff</dd>
        </Stat>
        <Stat>
          <dt>10</dt>
          <dd>documented events</dd>
        </Stat>
        <Stat>
          <dt>4</dt>
          <dd>fireside conversations</dd>
        </Stat>
        <Stat>
          <dt>4</dt>
          <dd>hands-on / community formats</dd>
        </Stat>
      </Stats>
    </HeroSection>
  );
};

export default Hero;
