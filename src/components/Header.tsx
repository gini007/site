import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axolotlRobot from '../assets/axolotl_robot.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 50px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(165, 28, 48, 0.2);
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  font-weight: 700;
  color: #A51C30;
  text-shadow: 0 0 15px rgba(165, 28, 48, 0.5);
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    text-shadow: 0 0 20px rgba(165, 28, 48, 0.8);
  }
`;

const RobotPopup = styled(motion.div)`
  position: absolute;
  right: -60px;
  top: 5%;
  transform: translateY(-15%);
  pointer-events: none;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const RobotImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.98);
    padding: 20px;
    border-top: 1px solid rgba(165, 28, 48, 0.2);
    gap: 20px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileRobotContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const NavLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  
  &:hover {
    color: #A51C30;
    text-shadow: 0 0 8px rgba(165, 28, 48, 0.6);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #A51C30, #D2232A);
    transition: width 0.3s;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

interface HeaderProps {
  onLeadershipClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLeadershipClick }) => {
  const [showRobot, setShowRobot] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo
          onHoverStart={() => setShowRobot(true)}
          onHoverEnd={() => setShowRobot(false)}
          whileHover={{ scale: 1.05 }}
        >
          Deep Tech @ HBS
          <RobotPopup
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={showRobot ? { 
              opacity: 1, 
              x: 0, 
              y: [0, -3, 0, 3, 0],
              rotate: [0, 2, -1, 1, 0]
            } : { 
              opacity: 0, 
              x: 20, 
              y: 10 
            }}
            transition={{ 
              opacity: { duration: 0.3 },
              x: { duration: 0.4, ease: "easeOut" },
              y: { 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              },
              rotate: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            <RobotImage src={axolotlRobot} alt="Axolotl Robot" />
          </RobotPopup>
        </Logo>
        
        <MobileRobotContainer>
          <motion.div
            animate={{
              y: [0, -3, 0, 3, 0],
              rotate: [0, 2, -1, 1, 0]
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <RobotImage src={axolotlRobot} alt="Axolotl Robot" />
          </motion.div>
        </MobileRobotContainer>
        
        <HamburgerButton 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </HamburgerButton>
        
        <NavLinks isOpen={isMobileMenuOpen}>
          <motion.li whileHover={{ y: -2 }}>
            <NavLink onClick={() => {
              scrollToSection('about');
              setIsMobileMenuOpen(false);
            }}>
              About
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <NavLink onClick={() => {
              scrollToSection('core-systems');
              setIsMobileMenuOpen(false);
            }}>
              Events
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <NavLink onClick={() => {
              onLeadershipClick();
              setIsMobileMenuOpen(false);
            }}>
              Leadership
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <NavLink onClick={() => {
              scrollToSection('connect');
              setIsMobileMenuOpen(false);
            }}>
              Connect
            </NavLink>
          </motion.li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
