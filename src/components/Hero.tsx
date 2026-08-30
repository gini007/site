import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(165, 28, 48, 0.08) 0%, transparent 70%);
  padding: 40px 0;
  
  @media (max-width: 768px) {
    padding-top: 120px;
    min-height: 80vh;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #A51C30, #D2232A, #C8102E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
`;

const HeroRobotPopup = styled(motion.div)`
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 60px;
  pointer-events: none;
  z-index: 1001;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  margin-bottom: 30px;
  color: #ccc;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  margin: 20px auto;
  color: #aaa;
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 15px 40px;
  background: linear-gradient(45deg, #A51C30, #C8102E);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  border-radius: 50px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(165, 28, 48, 0.5);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(165, 28, 48, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const Hero: React.FC = () => {
  const [showRobot, setShowRobot] = useState(false);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.9,
        ease: "easeOut"
      }
    }
  };

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          onHoverStart={() => setShowRobot(true)}
          onHoverEnd={() => setShowRobot(false)}
          whileHover={{ scale: 1.02 }}
        >
          AUTOMATION & DEEP TECH
          <HeroRobotPopup
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={showRobot ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0, x: 20 }}
            transition={{ duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            🤖
          </HeroRobotPopup>
        </HeroTitle>
        
        <HeroSubtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          A student club at Harvard Business School
        </HeroSubtitle>
        
        <HeroDescription
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          Building and supporting the growing HBS community interested in commercialization of R&D-driven scientific innovations.
        </HeroDescription>
        
        <CTAButton
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          href="https://forms.gle/pKab1rkMa7aZnu4M7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          JOIN US!
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
