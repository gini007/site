import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section = styled.section`
  max-width: ${theme.width};
  margin: 0 auto;
  padding: 24px 24px 80px;
`;

const Intro = styled.div`
  max-width: 40rem;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 16px;
`;

const Mission = styled.p`
  color: ${theme.color.muted};
  font-size: 1.12rem;
`;

const Pillars = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Pillar = styled.article`
  padding: 24px;
  background: ${theme.color.surface};
  border: 1px solid ${theme.color.line};
  border-radius: 14px;
`;

const PillarIndex = styled.span`
  display: block;
  color: ${theme.color.crimson};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  margin-bottom: 14px;
`;

const PillarTitle = styled.h3`
  font-size: 1.35rem;
  margin-bottom: 10px;
`;

const PillarBody = styled.p`
  color: ${theme.color.muted};
  font-size: 0.98rem;
`;

const pillars = [
  {
    title: 'A community around hard tech',
    body: 'The kickoff turned broad interest into a shared mission, with roughly 200 students already engaged in the first semester.',
  },
  {
    title: 'Founders and operators in the room',
    body: 'Argus, Waabi, Formlabs, and RightHand Robotics gave members direct access to people building and commercializing Physical AI.',
  },
  {
    title: 'Labs, floors, and workflows',
    body: 'The SEAS / Grid tour and RightHand visit moved the club beyond discussion into makerspaces, robotics labs, and operating environments.',
  },
  {
    title: 'Careers, ventures, and belonging',
    body: 'Programming linked emerging technology to company-building, while mixers and an alumni breakfast made space for collaboration.',
  },
];

const About: React.FC = () => {
  return (
    <Section id="about">
      <Intro>
        <SectionTitle>About the club</SectionTitle>
        <Mission>
          We are future business leaders focused on commercializing breakthrough
          science and engineering. The work sits at the intersection of Physical
          AI, robotics, automation, and community-building — preparing HBS
          students to turn R&amp;D into companies, products, and careers.
        </Mission>
      </Intro>
      <Pillars>
        {pillars.map((pillar, index) => (
          <Pillar key={pillar.title}>
            <PillarIndex>{String(index + 1).padStart(2, '0')}</PillarIndex>
            <PillarTitle>{pillar.title}</PillarTitle>
            <PillarBody>{pillar.body}</PillarBody>
          </Pillar>
        ))}
      </Pillars>
    </Section>
  );
};

export default About;
