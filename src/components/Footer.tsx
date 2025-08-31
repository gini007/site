import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import linkedinLogo from '../assets/linkedin-icon-logo-png-transparent.png';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 50px;
  border-top: 1px solid rgba(165, 28, 48, 0.2);
  background: rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const FooterTitle = styled(motion.h3)`
  font-family: 'Orbitron', monospace;
  color: #A51C30;
  margin-bottom: 30px;
  font-size: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const SocialLink = styled(motion.a)`
  display: inline-block;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #A51C30, #C8102E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 0 20px rgba(165, 28, 48, 0.4);
  }
`;

const Copyright = styled(motion.p)`
  color: #888;
  font-size: 0.9rem;
`;

const socialLinks = [
  { icon: '📧', href: 'mailto:mbaautomationanddeeptechclub@groups.hbs.edu', label: 'Email' },
  { icon: linkedinLogo, href: 'https://www.linkedin.com/company/automation-deep-tech-club-at-harvard-business-school/', label: 'LinkedIn', isImage: true }
];

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <FooterContainer id="connect" ref={ref}>
      <FooterTitle
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        INITIALIZE CONNECTION
      </FooterTitle>
      
      <SocialLinks
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {socialLinks.map((social, index) => (
          <SocialLink
            key={index}
            href={social.href}
            aria-label={social.label}
            variants={itemVariants}
            whileHover={{ 
              rotate: 360, 
              scale: 1.1,
              transition: { duration: 0.6 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            {social.isImage ? (
              <img src={social.icon} alt={social.label} style={{ width: '24px', height: '24px' }} />
            ) : (
              social.icon
            )}
          </SocialLink>
        ))}
      </SocialLinks>
      
      <Copyright
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        © 2025 HBS Automation & Deep Tech Club • Powered by Innovation
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
