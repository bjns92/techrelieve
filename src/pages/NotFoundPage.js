import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';
import SEO from '../components/utils/SEO';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 0 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  
  @media (max-width: 576px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  margin: 20px 0;
  color: var(--dark-color);
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const ErrorDescription = styled.p`
  font-size: 1.2rem;
  color: var(--gray-color);
  margin-bottom: 40px;
  max-width: 600px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 10px;
  }
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--primary-color);
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color);
  
  svg {
    margin-right: 10px;
  }
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Page Not Found - 404 Error | TechRelieve"
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        url="/404"
      />
      <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorDescription>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </ErrorDescription>
      <ButtonsContainer>
        <PrimaryButton to="/">
          <FaHome /> Back to Home
        </PrimaryButton>
        <SecondaryButton to="/contact">
          <FaSearch /> Contact Support
        </SecondaryButton>
      </ButtonsContainer>
    </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;