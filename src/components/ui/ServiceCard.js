import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid transparent;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid var(--techrelieve-blue);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  font-size: 1.8rem;
  box-shadow: 0 10px 20px rgba(29, 176, 242, 0.2);
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--charcoal-black);
  font-weight: 600;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  flex-grow: 1;
  font-size: 1rem;
`;

const ServiceCard = ({ icon, title, description }) => {
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

export default ServiceCard;