import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaRocket, FaUsers, FaLightbulb, FaChartLine, FaPlay, FaArrowRight } from 'react-icons/fa';
import SEO from '../components/utils/SEO';

// Components
import CallToAction from '../components/sections/CallToAction';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 15px 35px rgba(29, 176, 242, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 20px 45px rgba(29, 176, 242, 0.5);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(26, 216, 97, 0.4);
  }
  50% {
    box-shadow: 0 0 30px rgba(26, 216, 97, 0.8);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Styled Components
const PageHeader = styled.div`
  background: linear-gradient(135deg, #1db0f2 0%, #1ad861 100%);
  padding: 150px 0 100px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/pattern.jpg') repeat;
    opacity: 0.05;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 120px 0 80px;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  animation: ${fadeInUp} 1s ease-out;
`;

const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const PageDescription = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const AboutContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    gap: 40px;
  }
`;

const AboutImage = styled.div`
  position: relative;
  animation: ${slideInLeft} 1s ease-out;
  
  img {
    width: 100%;
    border-radius: 25px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 35px 80px rgba(0, 0, 0, 0.2);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: linear-gradient(45deg, rgba(29, 176, 242, 0.2), rgba(26, 216, 97, 0.2));
    border-radius: 35px;
    z-index: -1;
    animation: ${glow} 4s ease-in-out infinite alternate;
  }
  
  @media (max-width: 992px) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AboutText = styled.div`
  animation: ${slideInRight} 1s ease-out;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #1db0f2 0%, #1ad861 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 992px) {
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`;

const MissionSection = styled.section`
  padding: 120px 0;
  background: white;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const MissionContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MissionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
`;

const MissionText = styled.div`
  animation: ${slideInLeft} 1s ease-out;
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const MissionParagraph = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`;

const TransformationShowcase = styled.div`
  animation: ${slideInRight} 1s ease-out;
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const ShowcaseContainer = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px;
  }
  
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

const ShowcaseTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const TransformationFlow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const BeforeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  animation: ${pulse} 3s infinite;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
    animation: ${shimmer} 2s infinite;
  }
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
  
  @media (max-width: 576px) {
    width: 160px;
    height: 160px;
  }
`;

const StageLabel = styled.div`
  background: linear-gradient(135deg, #1db0f2 0%, #1ad861 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(29, 176, 242, 0.3);
  
  @media (max-width: 576px) {
    padding: 6px 16px;
    font-size: 0.8rem;
  }
`;

const TransformArrow = styled.div`
  font-size: 2.5rem;
  color: #1db0f2;
  animation: ${float} 2s ease-in-out infinite;
  
  @media (max-width: 768px) {
    transform: rotate(90deg);
    font-size: 2rem;
  }
`;

const TransformText = styled.div`
  text-align: center;
  margin: 20px 0;
  
  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.6;
  }
  
  @media (max-width: 576px) {
    h4 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const AfterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 220px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  animation: ${glow} 4s ease-in-out infinite alternate;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.05);
    
    video {
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 180px;
  }
  
  @media (max-width: 576px) {
    width: 180px;
    height: 160px;
  }
`;

const VideoControls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  opacity: 0;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  pointer-events: none;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translate(-50%, -50%) scale(1.1);
  }
  
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
  }
`;

const ValuesSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const ValuesContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const ValuesHeader = styled.div`
  margin-bottom: 60px;
  animation: ${fadeInUp} 1s ease-out;
  
  h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  p {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    
    p {
      font-size: 1.1rem;
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ValueCard = styled.div`
  background: white;
  border-radius: 25px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(29, 176, 242, 0.1);
  animation: ${fadeInUp} 1s ease-out;
  animation-delay: ${props => props.delay}s;
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 60px rgba(29, 176, 242, 0.15);
    border-color: rgba(29, 176, 242, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
  
  @media (max-width: 576px) {
    padding: 30px 20px;
  }
`;

const ValueIcon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1db0f2 0%, #1ad861 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  color: white;
  font-size: 2.2rem;
  box-shadow: 0 10px 25px rgba(29, 176, 242, 0.3);
  transition: all 0.3s ease;
  
  ${ValueCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 15px 35px rgba(29, 176, 242, 0.4);
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #2c3e50;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
`;

const ValueDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const AboutPage = () => {
  const [videoRef, setVideoRef] = useState(null);
  
  // Auto-play video when component mounts and video ref is set
  React.useEffect(() => {
    if (videoRef) {
      videoRef.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [videoRef]);
  
  const values = [
    {
      id: 1,
      icon: <FaRocket />,
      title: "Innovation",
      description: "We constantly push the boundaries of AI technology to deliver cutting-edge solutions that transform the e-commerce industry.",
      delay: 0
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Customer Focus",
      description: "Our customers' success is our success. We're dedicated to providing exceptional service and solutions that meet real business needs.",
      delay: 0.2
    },
    {
      id: 3,
      icon: <FaLightbulb />,
      title: "Creativity",
      description: "We approach challenges with creativity and imagination, finding unique solutions that help our customers stand out in the market.",
      delay: 0.4
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our technology to our customer service and business practices.",
      delay: 0.6
    }
  ];

  return (
    <>
      <SEO 
        title="About TechRelieve - Our Story, Mission & Values"
        description="Learn about TechRelieve's journey to revolutionize e-commerce product photography with AI technology that transforms plain product images into stunning model shots."
        url="/about"
      />
      <PageHeader>
        <HeaderContent>
          <PageTitle>About TechRelieve</PageTitle>
          <PageDescription>
            We're revolutionizing e-commerce product photography with AI-powered technology that transforms plain product images into stunning model shots.
          </PageDescription>
        </HeaderContent>
      </PageHeader>
      
      <AboutSection>
        <AboutContainer>
          <AboutContent>
            <AboutText>
              <SectionTitle>Our Story</SectionTitle>
              <AboutParagraph>
                TechRelieve was founded in 2022 by a team of AI experts and e-commerce professionals who recognized a significant challenge in the online retail industry: the high cost and complexity of product photography, especially for fashion items.
              </AboutParagraph>
              <AboutParagraph>
                After witnessing small businesses struggle with expensive photoshoots and large retailers deal with the logistical challenges of managing hundreds of product images, we set out to create a solution that would democratize access to high-quality product visuals.
              </AboutParagraph>
              <AboutParagraph>
                Today, TechRelieve serves businesses of all sizes, from individual Etsy sellers to major e-commerce platforms, helping them create professional product images without the need for models, photographers, or studios.
              </AboutParagraph>
            </AboutText>
            
            <AboutImage>
              <img src="/assets/about-image.jpg" alt="TechRelieve team working on AI technology" />
            </AboutImage>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
      
      <MissionSection>
        <MissionContainer>
          <MissionContent>
            <MissionText>
              <SectionTitle>Our Mission</SectionTitle>
              <MissionParagraph>
                At TechRelieve, our mission is to empower e-commerce businesses with AI-driven solutions that save time, reduce costs, and enhance the visual appeal of their products.
              </MissionParagraph>
              <MissionParagraph>
                We believe that every business, regardless of size or budget, deserves access to professional-quality product images that can compete in today's visually-driven marketplace.
              </MissionParagraph>
              <MissionParagraph>
                Through continuous innovation and a deep understanding of both AI technology and e-commerce needs, we're committed to developing tools that make sophisticated image transformation accessible, affordable, and easy to use.
              </MissionParagraph>
            </MissionText>
            
            <TransformationShowcase>
              <ShowcaseContainer>
                <ShowcaseTitle>AI Transformation Process</ShowcaseTitle>
                
                <TransformationFlow>
                  <BeforeSection>
                    <ProductImageContainer>
                      <img src="/assets/models/2.jpg" alt="Plain product before AI transformation" />
                    </ProductImageContainer>
                    <StageLabel>Before</StageLabel>
                  </BeforeSection>
                  
                  <TransformArrow>
                    <FaArrowRight />
                  </TransformArrow>
                  
                  <div>
                    <TransformText>
                      <h4>AI Magic Happens</h4>
                      <p>Transform product images into stunning model shots</p>
                    </TransformText>
                  </div>
                  
                  <TransformArrow>
                    <FaArrowRight />
                  </TransformArrow>
                  
                  <AfterSection>
                    <VideoContainer>
                      <video
                        ref={setVideoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src="/assets/videos/2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <VideoControls>
                        <FaPlay />
                      </VideoControls>
                    </VideoContainer>
                    <StageLabel>After</StageLabel>
                  </AfterSection>
                </TransformationFlow>
              </ShowcaseContainer>
            </TransformationShowcase>
          </MissionContent>
        </MissionContainer>
      </MissionSection>
      
      <ValuesSection>
        <ValuesContainer>
          <ValuesHeader>
            <h2>Our Core Values</h2>
            <p>
              These principles guide everything we do at TechRelieve, from product development to customer service.
            </p>
          </ValuesHeader>
          
          <ValuesGrid>
            {values.map(value => (
              <ValueCard key={value.id} delay={value.delay}>
                <ValueIcon>
                  {value.icon}
                </ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>
      
      <CallToAction />
    </>
  );
};

export default AboutPage;