import React from 'react';
import styled from 'styled-components';
import { EMAIL_URL, EVENTS_URL, JOIN_URL, LINKEDIN_URL } from '../constants';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  border-top: 1px solid ${theme.color.line};
`;

const Inner = styled.div`
  max-width: ${theme.width};
  margin: 0 auto;
  padding: 48px 24px 40px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  align-items: end;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Note = styled.p`
  color: ${theme.color.muted};
  max-width: 28rem;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 700px) {
    justify-content: flex-start;
  }
`;

const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid ${theme.color.lineStrong};
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 600;
  color: ${theme.color.text};

  &:hover {
    border-color: ${theme.color.text};
  }
`;

const JoinLink = styled(FooterLink)`
  background: ${theme.color.crimson};
  border-color: ${theme.color.crimson};

  &:hover {
    background: ${theme.color.crimsonHover};
    border-color: ${theme.color.crimsonHover};
  }
`;

const Copyright = styled.p`
  max-width: ${theme.width};
  margin: 0 auto;
  padding: 0 24px 36px;
  color: ${theme.color.faint};
  font-size: 0.88rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer id="connect">
      <Inner>
        <div>
          <Title>Get involved</Title>
          <Note>
            Browse upcoming events on Luma, join the club on Eventbrite, or reach
            the team by email and LinkedIn.
          </Note>
        </div>
        <Links>
          <JoinLink href={JOIN_URL} target="_blank" rel="noopener noreferrer">
            Join on Eventbrite
          </JoinLink>
          <FooterLink href={EVENTS_URL} target="_blank" rel="noopener noreferrer">
            View events on Luma
          </FooterLink>
          <FooterLink href={EMAIL_URL}>Email</FooterLink>
          <FooterLink href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
        </Links>
      </Inner>
      <Copyright>© 2026 HBS Automation & Deep Tech Club</Copyright>
    </FooterContainer>
  );
};

export default Footer;
