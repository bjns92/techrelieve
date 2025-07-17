import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.fullScreen ? '100vh' : '200px'};
`;

const Spinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 4px solid rgba(var(--primary-color-rgb), 0.1);
  border-radius: 50%;
  border-top: 4px solid var(--primary-color);
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 15px;
  color: var(--gray-color);
  font-size: 1rem;
`;

const LoadingSpinner = ({ size, fullScreen, text }) => {
  return (
    <SpinnerContainer fullScreen={fullScreen}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size={size} />
        {text && <LoadingText>{text}</LoadingText>}
      </div>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;