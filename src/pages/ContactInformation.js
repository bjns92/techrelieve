import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 10px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(29, 176, 242, 0.05) 0%, rgba(26, 216, 97, 0.05) 100%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const ContactInfo = styled.div`
  background: white;
  color: #2c3e50;
  padding: 40px;
  border-radius: 25px;
  width: 100%;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(29, 176, 242, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #1db0f2, #1ad861, #1db0f2);
    border-radius: 27px;
    z-index: -1;
    opacity: 0.1;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 576px) {
    padding: 25px 15px;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
  color: #2c3e50;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(135deg, #1db0f2 0%, #1ad861 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 25px;
  }
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  background: rgba(29, 176, 242, 0.05);
  border: 1px solid rgba(29, 176, 242, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(29, 176, 242, 0.08);
    border-color: rgba(29, 176, 242, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(29, 176, 242, 0.1);
  }
  
  svg {
    margin-right: 15px;
    font-size: 1.2rem;
    color: #1db0f2;
    background: rgba(29, 176, 242, 0.1);
    padding: 8px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  @media (max-width: 576px) {
    padding: 12px;
    
    svg {
      margin-right: 12px;
      font-size: 1.1rem;
      width: 32px;
      height: 32px;
      padding: 6px;
    }
  }
`;

const ContactInfoContent = styled.div`
  flex: 1;
  
  h4 {
    margin: 0 0 4px;
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    font-weight: 600;
    color: #2c3e50;
  }
  
  p {
    margin: 0;
    color: #64748b;
    font-size: clamp(0.85rem, 1.8vw, 0.95rem);
    line-height: 1.4;
  }
`;

const ContactInformation = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactInfo>
          <ContactInfoTitle>Contact Information</ContactInfoTitle>
          <ContactInfoList>
            <ContactInfoItem>
              <FaMapMarkerAlt />
              <ContactInfoContent>
                <h4>Our Location</h4>
                <p>Sowparnika Pragati, B312, off Sarjapur Road, Ittangur, Bengaluru, Karnataka 562125</p>
              </ContactInfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <FaPhone />
              <ContactInfoContent>
                <h4>Phone Number</h4>
                <p>+91 9741081717</p>
              </ContactInfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <FaEnvelope />
              <ContactInfoContent>
                <h4>Email Address</h4>
                <p>info@techrelieve.ai</p>
              </ContactInfoContent>
            </ContactInfoItem>
            
          </ContactInfoList>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactInformation;