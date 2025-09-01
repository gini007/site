import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import sanchitPic from '../assets/sanchit-pic.jpg';
import michellePic from '../assets/michelle-pic.jpg';
import ottoPic from '../assets/otto-pic.jpg';

const LeadershipContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 120px 50px 100px;
  
  @media (max-width: 768px) {
    padding: 100px 20px 80px;
  }
`;

const PageTitle = styled(motion.h1)`
  font-family: 'Orbitron', monospace;
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(45deg, #A51C30, #D2232A, #C8102E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(165, 28, 48, 0.4);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
`;

const LeadershipGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LeaderCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(165, 28, 48, 0.08), rgba(200, 16, 46, 0.08));
  border: 1px solid rgba(165, 28, 48, 0.2);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  max-width: 350px;
  width: 100%;
  
  &:hover {
    border-color: rgba(165, 28, 48, 0.4);
    box-shadow: 0 20px 40px rgba(165, 28, 48, 0.15);
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 25px;
  object-fit: cover;
  border: 3px solid rgba(165, 28, 48, 0.4);
  transition: all 0.3s;
  
  &:hover {
    border-color: rgba(165, 28, 48, 0.6);
    transform: scale(1.05);
  }
`;

const LeaderName = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.45rem;
  margin-bottom: 10px;
  color: #A51C30;
`;

const LeaderTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: 300;
`;

const LeaderBio = styled.p`
  color: #ccc;
  line-height: 1.6;
  font-size: 1rem;
`;

const BackButton = styled(motion.button)`
  position: fixed;
  top: 20px;
  left: 20px;
  background: linear-gradient(45deg, #A51C30, #C8102E);
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(165, 28, 48, 0.3);
  }
`;

const leadershipData = [
  {
    name: "Sanchit Bhattacharjee",
    title: "Co-President",
    bio: "",
    image: sanchitPic
  },
  {
    name: "Michelle Chen", 
    title: "Co-President",
    bio: "",
    image: michellePic
  },
  {
    name: "Otto Salmi",
    title: "Chief Financial Officer",
    bio: "",
    image: ottoPic
  }
];

interface LeadershipProps {
  onBack: () => void;
}

const Leadership: React.FC<LeadershipProps> = ({ onBack }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <LeadershipContainer>
      <BackButton
        onClick={onBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Home
      </BackButton>
      
      <PageTitle
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        LEADERSHIP TEAM
      </PageTitle>
      
      <LeadershipGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {leadershipData.map((leader, index) => (
          <LeaderCard
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
                         <ProfileImage 
               src={leader.image} 
               alt={leader.name}
             />
            <LeaderName>{leader.name}</LeaderName>
            <LeaderTitle>{leader.title}</LeaderTitle>
            <LeaderBio>{leader.bio}</LeaderBio>
          </LeaderCard>
        ))}
      </LeadershipGrid>
    </LeadershipContainer>
  );
};

export default Leadership;
