import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--light-gray);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  
  &:hover {
    background: var(--gradient-primary);
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(29, 176, 242, 0.2);
    
    svg {
      color: white;
    }
    
    h3, p {
      color: white;
    }
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--techrelieve-blue);
  font-size: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--charcoal-black);
  font-weight: 600;
  transition: all 0.3s ease;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  transition: all 0.3s ease;
  flex-grow: 1;
  font-size: 0.95rem;
`;

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;