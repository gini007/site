import React, { useState } from 'react';
import styled from 'styled-components';
import { JOIN_URL } from '../constants';
import { theme } from '../styles/theme';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(12, 12, 13, 0.88);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${theme.color.line};
`;

const Nav = styled.nav`
  max-width: ${theme.width};
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.font.serif};
  font-size: 1.15rem;
  color: ${theme.color.text};
  letter-spacing: 0.01em;

  img {
    height: 36px;
    width: auto;
    object-fit: contain;
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 800px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: ${theme.color.bg};
    border-bottom: 1px solid ${theme.color.line};
    padding: 8px 24px 16px;
  }
`;

const NavItem = styled.li`
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const NavLink = styled.a`
  color: ${theme.color.muted};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${theme.color.text};
  }

  @media (max-width: 800px) {
    display: block;
    padding: 12px 0;
  }
`;

const JoinLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: ${theme.color.crimson};
  color: ${theme.color.text};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 999px;

  &:hover {
    background: ${theme.color.crimsonHover};
  }

  @media (max-width: 800px) {
    margin-top: 8px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  color: ${theme.color.text};
  font-size: 22px;
  padding: 4px;

  @media (max-width: 800px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const goTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo href="#top" onClick={() => goTo('top')}>
          <img
            src={`${process.env.PUBLIC_URL}/adtc/adtc_white_logo_only.png`}
            alt="Automation & Deep Tech Club"
          />
          HBS ADTC
        </Logo>

        <HamburgerButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </HamburgerButton>

        <NavLinks isOpen={isMobileMenuOpen}>
          <NavItem>
            <NavLink onClick={() => goTo('about')}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => goTo('events')}>Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => goTo('leadership')}>Leadership</NavLink>
          </NavItem>
          <NavItem>
            <JoinLink
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join
            </JoinLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
