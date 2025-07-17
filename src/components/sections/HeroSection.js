// import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FaCloudDownloadAlt, FaArrowRight, FaRocket, FaMagic, FaImages } from 'react-icons/fa';
import { FaRocket, FaMagic, FaImages } from 'react-icons/fa';
// import axios from 'axios';

const HeroContainer = styled.section`
  height: 100vh;
  min-height: 700px;
  padding-top:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--gradient-primary);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('${process.env.PUBLIC_URL}/assets/pattern.jpg') repeat;
    opacity: 0.05;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    min-height: 600px;
    padding: 80px 0 40px;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 2;
  animation: fadeInUp 1s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  span {
    background: linear-gradient(135deg, #ff6b6b, #feca57);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: 300;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;


// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 25px;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
  
//   @media (max-width: 576px) {
//     flex-direction: column;
//     gap: 20px;
//   }
// `;

// const PrimaryButton = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
//   color: white;
//   padding: 18px 35px;
//   border-radius: 50px;
//   font-weight: 700;
//   font-size: 1.1rem;
//   transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   box-shadow: 0 15px 35px rgba(238, 90, 36, 0.3);
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
//     transition: left 0.5s;
//   }
  
//   &:hover::before {
//     left: 100%;
//   }
  
//   svg {
//     margin-right: 12px;
//     font-size: 1.3rem;
//     animation: bounce 2s infinite;
//   }
  
//   @keyframes bounce {
//     0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//     40% { transform: translateY(-3px); }
//     60% { transform: translateY(-2px); }
//   }
  
//   &:hover {
//     transform: translateY(-8px) scale(1.05);
//     box-shadow: 0 25px 50px rgba(238, 90, 36, 0.4);
//   }
  
//   @media (max-width: 576px) {
//     padding: 16px 30px;
//     font-size: 1rem;
//     width: 80%;
//     max-width: 300px;
//   }
// `;

// const SecondaryButton = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background: rgba(255, 255, 255, 0.1);
//   color: white;
//   padding: 18px 35px;
//   border-radius: 50px;
//   font-weight: 600;
//   font-size: 1.1rem;
//   transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   border: 2px solid rgba(255, 255, 255, 0.3);
//   backdrop-filter: blur(10px);
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(255, 255, 255, 0.1);
//     transform: scaleX(0);
//     transform-origin: left;
//     transition: transform 0.3s ease;
//   }
  
//   &:hover::before {
//     transform: scaleX(1);
//   }
  
//   svg {
//     margin-left: 12px;
//     font-size: 1.1rem;
//     transition: transform 0.3s ease;
//     position: relative;
//     z-index: 1;
//   }
  
//   span {
//     position: relative;
//     z-index: 1;
//   }
  
//   &:hover {
//     transform: translateY(-8px) scale(1.05);
//     border-color: rgba(255, 255, 255, 0.5);
    
//     svg {
//       transform: translateX(8px);
//     }
//   }
  
//   @media (max-width: 576px) {
//     padding: 16px 30px;
//     font-size: 1rem;
//     width: 80%;
//     max-width: 300px;
//   }
// `;

// const DownloadButton = styled(PrimaryButton)`
//   position: relative;
  
//   .version {
//     position: absolute;
//     top: -8px;
//     right: -8px;
//     background: #feca57;
//     color: #2c3e50;
//     font-size: 0.7rem;
//     padding: 2px 8px;
//     border-radius: 12px;
//     font-weight: 600;
//     animation: float 3s ease-in-out infinite;
//   }
  
//   @keyframes float {
//     0%, 100% { transform: translateY(0); }
//     50% { transform: translateY(-5px); }
//   }
// `;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  
  .floating-element {
    position: absolute;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
    
    &:nth-child(1) {
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      top: 20%;
      right: 15%;
      animation-delay: 2s;
    }
    
    &:nth-child(3) {
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }
    
    &:nth-child(4) {
      bottom: 15%;
      right: 10%;
      animation-delay: 1s;
    }
  }
`;

const FloatingIcon = styled.div`
  font-size: 4rem;
  color: white;
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(5deg); }
    66% { transform: translateY(5px) rotate(-5deg); }
  }
`;

const HeroSection = () => {
  // const [apkData, setApkData] = useState(null);
  // const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   const fetchApkData = async () => {
  //     try {
  //       const response = await axios.get('/api/apk/latest');
  //       setApkData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching APK data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
    
  //   fetchApkData();
  // }, []);
  
  return (
    <HeroContainer>
      <BackgroundElements>
        <div className="floating-element">
          <FloatingIcon><FaImages /></FloatingIcon>
        </div>
        <div className="floating-element">
          <FloatingIcon><FaMagic /></FloatingIcon>
        </div>
        <div className="floating-element">
          <FloatingIcon><FaRocket /></FloatingIcon>
        </div>
        <div className="floating-element">
          <FloatingIcon><FaImages /></FloatingIcon>
        </div>
      </BackgroundElements>
      
      <HeroContent>
        <HeroTitle>
          Transform product images into <span>stunning model shots</span>effortlessly.
        </HeroTitle>
        <HeroSubtitle>
          Our AI-powered technology takes plain clothing images and generates high-quality visuals with virtual models wearing your products. Experience the future of e-commerce photography.
        </HeroSubtitle>
        {/* <ButtonGroup>
          <DownloadButton to="/contact">
            <FaCloudDownloadAlt />
            <span>Get Started</span>
          </DownloadButton>
          <SecondaryButton to="#services">
            <span>Our Services</span>
            <FaArrowRight />
          </SecondaryButton>
        </ButtonGroup> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;