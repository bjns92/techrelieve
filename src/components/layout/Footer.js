import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--dark-color);
  color: var(--light-color);
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--light-color);
  margin-bottom: 1rem;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const FooterDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--primary-color);
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: var(--light-color);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    
    &:hover {
      color: var(--primary-color);
      transform: translateX(5px);
    }
    
    svg {
      margin-right: 8px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--light-color);
  margin-right: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-5px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo to="/">
            <img src="/assets/logo.png" alt="TechRelieve Logo" />
          </FooterLogo>
          <FooterDescription>
            Transform product images into stunning model shots effortlessly with our AI-powered technology. Save time and money while creating high-quality visuals for your e-commerce business.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon to="#">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon to="#">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon to="#">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon to="#">
              <FaLinkedin />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/">Home</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/about">About Us</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/services">Services</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/contact">Contact Us</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/contact">Get Started</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Our Services</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/#services">AI Model Photo Generation</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/#services">E-commerce Product Catalogs</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/#services">Fashion Marketplace Solutions</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/#services">Custom AI Integration</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <a href="mailto:info@techrelieve.com">
                <FaEnvelope /> info@techrelieve.com
              </a>
            </FooterLink>
            <FooterLink>
              <a href="tel:+1234567890">
                <FaPhone /> +1 (234) 567-890
              </a>
            </FooterLink>
            <FooterLink>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt /> 123 Tech Street, Innovation City
              </a>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} TechRelieve. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;