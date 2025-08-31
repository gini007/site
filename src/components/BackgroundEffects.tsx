import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const gridMove = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-15px) rotate(180deg); opacity: 0.8; }
`;

const GridBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(165, 28, 48, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(165, 28, 48, 0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: ${gridMove} 25s linear infinite;
  z-index: -2;
`;

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Particle = styled.div<{ delay: number; duration: number; left: string; top: string }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(165, 28, 48, 0.6);
  border-radius: 50%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left};
  top: ${props => props.top};
`;

interface ParticleData {
  id: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
}

const BackgroundEffects: React.FC = () => {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const particleCount = 20;
      const newParticles: ParticleData[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: Math.random() * 8,
          duration: Math.random() * 4 + 6
        });
      }
      
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <>
      <GridBackground />
      <ParticlesContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            left={particle.left}
            top={particle.top}
            delay={particle.delay}
            duration={particle.duration}
          />
        ))}
      </ParticlesContainer>
    </>
  );
};

export default BackgroundEffects;
