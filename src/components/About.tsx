import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 60px 50px;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(165, 28, 48, 0.04), rgba(200, 16, 46, 0.04));
  border-radius: 20px;
  margin: 10px auto;
  border: 1px solid rgba(165, 28, 48, 0.1);
  
  @media (max-width: 768px) {
    padding: 40px 20px;
    margin: 5px 20px;
  }
`;

const SectionTitle = styled(motion.h3)`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: #A51C30;
  text-shadow: 0 0 15px rgba(165, 28, 48, 0.4);
`;

const MissionText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  color: #ddd;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TechIconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 500px;
  }
  
  @media (max-width: 400px) {
    gap: 15px;
    max-width: 350px;
  }
`;

const TechIconItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: rgba(165, 28, 48, 0.05);
  border: 1px solid rgba(165, 28, 48, 0.15);
  border-radius: 16px;
  transition: all 0.3s;
  cursor: pointer;
  
  &:hover {
    border-color: rgba(165, 28, 48, 0.3);
    box-shadow: 0 15px 35px rgba(165, 28, 48, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 20px 15px;
    border-radius: 12px;
  }
  
  @media (max-width: 400px) {
    padding: 15px 10px;
  }
`;

const TechIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 15px;
  transition: transform 0.3s;
  
  ${TechIconItem}:hover & {
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 400px) {
    font-size: 2.2rem;
    margin-bottom: 8px;
  }
`;

const TechLabel = styled.span`
  font-size: 1.1rem;
  color: #ccc;
  text-align: center;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const techData = [
  { icon: '🤖', label: 'Robotics' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '⚛️', label: 'Quantum Computing' },
  { icon: '🌱', label: 'Climate Tech' },
  { icon: '🧬', label: 'Biotech' },
  { icon: '⚗️', label: 'Materials Science' }
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutSection id="about" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        MISSION PROTOCOL
      </SectionTitle>
      
      <MissionText
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        We are a community of future business leaders united by our passion for commercializing cutting-edge technology and research. Our mission is to help prepare the HBS community to bridge the gap between breakthrough innovations and business applications, across the variety of promising fields below.
      </MissionText>
      
      <TechIconsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {techData.map((tech, index) => (
          <TechIconItem
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechIcon>{tech.icon}</TechIcon>
            <TechLabel>{tech.label}</TechLabel>
          </TechIconItem>
        ))}
      </TechIconsGrid>
    </AboutSection>
  );
};

export default About;
