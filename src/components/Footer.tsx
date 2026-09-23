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
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
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

const Icon = styled.svg`
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const LinkedInIcon = styled.svg`
  width: 19px;
  height: 19px;
  fill: currentColor;
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
          <JoinLink
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join on Eventbrite"
            title="Join on Eventbrite"
          >
            <Icon viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M8 2v4M16 2v4M3 9h18M8 13h3M8 17h5" />
            </Icon>
          </JoinLink>
          <FooterLink
            href={EVENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View events on Luma"
            title="View events on Luma"
          >
            <Icon viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18M8 2v4M16 2v4M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
            </Icon>
          </FooterLink>
          <FooterLink href={EMAIL_URL} aria-label="Email" title="Email">
            <Icon viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </Icon>
          </FooterLink>
          <FooterLink
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.2 7.4A2.2 2.2 0 1 0 5.2 3a2.2 2.2 0 0 0 0 4.4ZM3.3 21h3.8V9H3.3v12ZM9.4 9v12h3.8v-6.7c0-1.8.3-3.6 2.6-3.6s2.3 2.1 2.3 3.7V21H22v-7.4C22 10 21.2 8.5 17.8 8.5c-1.6 0-2.8.9-3.3 1.7h-.1V9H9.4Z" />
            </LinkedInIcon>
          </FooterLink>
        </Links>
      </Inner>
      <Copyright>© 2026 HBS Automation & Deep Tech Club</Copyright>
    </FooterContainer>
  );
};

export default Footer;
