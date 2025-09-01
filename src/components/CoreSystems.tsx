import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  padding: 60px 50px;
  max-width: 1200px;
  margin: 10px auto;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
    margin: 5px auto;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(165, 28, 48, 0.08), rgba(200, 16, 46, 0.08));
  border: 1px solid rgba(165, 28, 48, 0.2);
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: rgba(165, 28, 48, 0.4);
    box-shadow: 0 15px 30px rgba(165, 28, 48, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(165, 28, 48, 0.06), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #A51C30;
`;

const FeatureTitle = styled.h4`
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #fff;
`;

const FeatureDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

const featuresData = [
  {
    icon: '🤖',
    title: 'AI & Robotics',
    description: 'Deep dives into artificial intelligence, machine learning, and autonomous systems transforming industries worldwide.'
  },
  {
    icon: '⚡',
    title: 'Tech Innovation',
    description: 'Exploring breakthrough technologies in quantum computing, biotech, and next-generation manufacturing.'
  },
  {
    icon: '🚀',
    title: 'Future Business',
    description: 'Strategic insights on how deep tech will reshape markets, create new opportunities, and disrupt traditional models.'
  },
  {
    icon: '🧠',
    title: 'Network Access',
    description: 'Connect with industry leaders, researchers, and entrepreneurs at the forefront of technological advancement.'
  },
  {
    icon: '🔬',
    title: 'Research Labs',
    description: 'Hands-on workshops and lab visits to experience cutting-edge technology development firsthand.'
  },
  {
    icon: '💡',
    title: 'Innovation Hub',
    description: 'Collaborative projects and startup incubation focused on deep tech applications in business.'
  }
];

const CoreSystems: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
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
    <Section id="core-systems" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
                 EVENTS
      </SectionTitle>
      
      <FeaturesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Section>
  );
};

export default CoreSystems;
