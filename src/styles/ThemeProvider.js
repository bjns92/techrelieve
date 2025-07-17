import React from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './theme';

// Global styles that will be applied throughout the application
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: ${props => props.theme.colors.primary};
    --secondary-color: ${props => props.theme.colors.secondary};
    --dark-color: ${props => props.theme.colors.dark};
    --light-color: ${props => props.theme.colors.light};
    --gray-color: ${props => props.theme.colors.gray};
    --success-color: ${props => props.theme.colors.success};
    --warning-color: ${props => props.theme.colors.warning};
    --error-color: ${props => props.theme.colors.error};
    --info-color: ${props => props.theme.colors.info};
    --bg-light: ${props => props.theme.colors.bgLight};
    --bg-dark: ${props => props.theme.colors.bgDark};
    --bg-gray: ${props => props.theme.colors.bgGray};
    --gradient: ${props => props.theme.colors.gradient};
    --primary-color-rgb: ${props => props.theme.rgbColors.primaryRGB};
    --secondary-color-rgb: ${props => props.theme.rgbColors.secondaryRGB};
    --font-family: ${props => props.theme.fonts.body};
    --heading-font-family: ${props => props.theme.fonts.heading};
    --monospace-font-family: ${props => props.theme.fonts.monospace};
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-family);
    color: var(--dark-color);
    background-color: var(--bg-light);
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: var(--secondary-color);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font-family);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, textarea, select {
    font-family: var(--font-family);
  }
  
  /* Section styling */
  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--dark-color);
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem;
    color: var(--gray-color);
  }
  
  /* Animation classes */
  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  
  .slide-in-left {
    animation: slideInLeft 1s ease-in-out;
  }
  
  .slide-in-right {
    animation: slideInRight 1s ease-in-out;
  }
  
  .slide-in-up {
    animation: slideInUp 1s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

// ThemeProvider component that wraps the application with the theme
const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;