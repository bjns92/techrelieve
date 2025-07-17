import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCloudDownloadAlt, FaEnvelope, FaAndroid } from 'react-icons/fa';

const CTASection = styled.section`
  padding: 100px 0;
  background: var(--gradient-primary);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('${process.env.PUBLIC_URL}/assets/pattern.jpg') repeat;
    opacity: 0.1;
    z-index: 1;
  }
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--techrelieve-blue);
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(29, 176, 242, 0.1);
    transition: width 0.3s ease;
    z-index: 1;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  span {
    position: relative;
    z-index: 2;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid white;
  
  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

// const VersionBadge = styled.div`
//   position: absolute;
//   top: -10px;
//   right: -10px;
//   background-color: var(--techrelieve-green);
//   color: white;
//   font-size: 0.7rem;
//   padding: 3px 8px;
//   border-radius: 20px;
//   font-weight: bold;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   z-index: 3;
// `;

const AndroidIcon = styled(FaAndroid)`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: white;
`;

const CallToAction = () => {
  return (
    <CTASection id="download">
      <CTAContainer>
        <AndroidIcon />
        <CTATitle>Ready to Transform Your Product Images?</CTATitle>
        <CTADescription>
          Join thousands of businesses that are saving time and money with our AI-powered image transformation technology. 
          Contact us today and start transforming your product images instantly.
        </CTADescription>
        <CTAButtons>
          <PrimaryButton to="/contact">
            <span><FaCloudDownloadAlt /> Get Started</span>
          </PrimaryButton>
          <SecondaryButton to="/contact">
            <FaEnvelope /> Contact Us
          </SecondaryButton>
        </CTAButtons>
      </CTAContainer>
    </CTASection>
  );
};

export default CallToAction;