import React from 'react';
import styled from 'styled-components';
import sanchitPic from '../assets/sanchit-pic.jpg';
import michellePic from '../assets/michelle-pic.jpg';
import ottoPic from '../assets/otto-pic.jpg';
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

const Photo = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 18px;
  border: 1px solid ${theme.color.lineStrong};
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
    name: 'Sanchit Bhattacharjee',
    title: 'Co-President',
    image: sanchitPic,
  },
  {
    name: 'Michelle Chen',
    title: 'Co-President',
    image: michellePic,
  },
  {
    name: 'Otto Salmi',
    title: 'Chief Financial Officer',
    image: ottoPic,
  },
];

const Leadership: React.FC = () => {
  return (
    <Section id="leadership">
      <SectionTitle>Leadership</SectionTitle>
      <Grid>
        {leadership.map(leader => (
          <Card key={leader.name}>
            <Photo src={leader.image} alt={leader.name} />
            <Name>{leader.name}</Name>
            <Role>{leader.title}</Role>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Leadership;
