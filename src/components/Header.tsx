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
`;

const RobotImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none;
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
        
        <NavLinks>
          <motion.li whileHover={{ y: -2 }}>
            <NavLink onClick={() => scrollToSection('about')}>
              About
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <NavLink onClick={() => scrollToSection('core-systems')}>
              Events
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <NavLink onClick={onLeadershipClick}>
              Leadership
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <NavLink onClick={() => scrollToSection('connect')}>
              Connect
            </NavLink>
          </motion.li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
