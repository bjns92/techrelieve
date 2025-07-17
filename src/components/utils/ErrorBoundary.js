import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

const ErrorContainer = styled.div`
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

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: var(--error-color);
  margin-bottom: 20px;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--dark-color);
`;

const ErrorDescription = styled.p`
  font-size: 1.1rem;
  color: var(--gray-color);
  margin-bottom: 30px;
  max-width: 600px;
`;

const ErrorDetails = styled.div`
  background-color: var(--bg-gray);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  max-width: 100%;
  overflow-x: auto;
  text-align: left;
  font-family: var(--monospace-font-family);
  font-size: 0.9rem;
  color: var(--dark-color);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  svg {
    margin-right: 10px;
  }
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--primary-color);
  padding: 12px 25px;
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

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <ErrorContainer>
          <ErrorIcon>
            <FaExclamationTriangle />
          </ErrorIcon>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorDescription>
            We're sorry, but an unexpected error has occurred. Please try reloading the page or return to the homepage.
          </ErrorDescription>
          
          {this.state.error && process.env.NODE_ENV === 'development' && (
            <ErrorDetails>
              <p><strong>Error:</strong> {this.state.error.toString()}</p>
              {this.state.errorInfo && (
                <p>
                  <strong>Component Stack:</strong><br />
                  {this.state.errorInfo.componentStack}
                </p>
              )}
            </ErrorDetails>
          )}
          
          <ButtonsContainer>
            <PrimaryButton onClick={this.handleReload}>
              <FaRedo /> Reload Page
            </PrimaryButton>
            <SecondaryButton to="/">
              <FaHome /> Back to Home
            </SecondaryButton>
          </ButtonsContainer>
        </ErrorContainer>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;