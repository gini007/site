import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section = styled.section`
  max-width: ${theme.width};
  margin: 0 auto;
  padding: 24px 24px 80px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 36px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
`;

const Card = styled.article`
  padding: 28px 24px 32px;
  background: ${theme.color.surface};
  border: 1px solid ${theme.color.line};
  border-radius: 16px;
  text-align: center;
`;

const Monogram = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(165, 28, 48, 0.12);
  border: 1px solid rgba(165, 28, 48, 0.35);
  color: ${theme.color.crimson};
  font-family: ${theme.font.serif};
  font-size: 2.1rem;
  letter-spacing: 0.04em;
`;

const Name = styled.h3`
  font-size: 1.45rem;
  margin-bottom: 6px;
`;

const Role = styled.p`
  color: ${theme.color.muted};
  font-size: 0.98rem;
`;

const leadership = [
  {
    name: 'Tyler Mangini',
    title: 'Co-President',
    initials: 'TM',
  },
  {
    name: 'Gurshaan Madan',
    title: 'Co-President',
    initials: 'GM',
  },
  {
    name: 'Nathan Shiham Alam',
    title: 'Chief Financial Officer',
    initials: 'NA',
  },
];

const Leadership: React.FC = () => {
  return (
    <Section id="leadership">
      <SectionTitle>Leadership</SectionTitle>
      <Grid>
        {leadership.map(leader => (
          <Card key={leader.name}>
            <Monogram aria-hidden="true">{leader.initials}</Monogram>
            <Name>{leader.name}</Name>
            <Role>{leader.title}</Role>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Leadership;
