import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

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

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

const DemoSection = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding: 60px 0;
  
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
    padding: 40px 0;
  }
`;

const DemoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
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

// AI Transformation Process Component
const TransformationSection = styled.div`
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TransformationShowcase = styled.div`
  display: flex;
  justify-content: center;
  animation: ${slideInUp} 1s ease-out;
  animation-delay: ${props => props.delay}s;
  animation-fill-mode: both;
`;

const ShowcaseContainer = styled.div`
  background: white;
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(29, 176, 242, 0.1);
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 2;
  
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
    opacity: 0.08;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 0 10px;
  }
  
  @media (max-width: 576px) {
    padding: 25px 15px;
    margin: 0 5px;
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
  
  @media (max-width: 576px) {
    gap: 20px;
  }
`;

const BeforeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex: 1;
`;

const ProductImageContainer = styled.div`
  position: relative;
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  
  img {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
    object-position: center;
    display: block;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 12px 25px rgba(29, 176, 242, 0.25);
    
    img {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 768px) {
    max-width: 160px;
    max-height: 160px;
    
    img {
      max-width: 160px;
      max-height: 160px;
    }
  }
  
  @media (max-width: 576px) {
    max-width: 140px;
    max-height: 140px;
    
    img {
      max-width: 140px;
      max-height: 140px;
    }
  }
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex: 1;
`;

const MiddleImageContainer = styled.div`
  position: relative;
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  
  img {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
    object-position: center;
    display: block;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 12px 25px rgba(26, 216, 97, 0.25);
    
    img {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 768px) {
    max-width: 160px;
    max-height: 160px;
    
    img {
      max-width: 160px;
      max-height: 160px;
    }
  }
  
  @media (max-width: 576px) {
    max-width: 140px;
    max-height: 140px;
    
    img {
      max-width: 140px;
      max-height: 140px;
    }
  }
`;

const StageLabel = styled.div`
  background: linear-gradient(135deg, #1db0f2 0%, #1ad861 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(29, 176, 242, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 576px) {
    padding: 6px 16px;
    font-size: 0.8rem;
  }
`;

const TransformArrow = styled.div`
  font-size: 1.5rem;
  color: #1db0f2;
  animation: ${float} 2s ease-in-out infinite;
  padding: 10px;
  background: rgba(29, 176, 242, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    transform: rotate(90deg);
    font-size: 1.2rem;
    padding: 8px;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 6px;
  }
`;

const AfterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex: 1;
`;

const VideoContainer = styled.div`
  position: relative;
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  
  video {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 12px 25px rgba(138, 43, 226, 0.25);
    
    video {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 768px) {
    max-width: 160px;
    max-height: 160px;
    
    video {
      max-width: 160px;
      max-height: 160px;
    }
  }
  
  @media (max-width: 576px) {
    max-width: 140px;
    max-height: 140px;
    
    video {
      max-width: 140px;
      max-height: 140px;
    }
  }
`;

const VideoControls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
  opacity: 0;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
  pointer-events: none;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%) scale(1.05);
  }
  
  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
`;

// Original AITransformationProcess Component (Image → Image → Video)
const AITransformationProcess = ({ beforeImage, afterImage, videoSrc, delay = 0 }) => {
  const [videoRef, setVideoRef] = useState(null);
  
  React.useEffect(() => {
    if (videoRef) {
      videoRef.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [videoRef]);
  
  return (
    <TransformationSection>
      <TransformationShowcase delay={delay}>
        <ShowcaseContainer>
          <TransformationFlow>
            <BeforeSection>
              <ProductImageContainer>
                <img src={beforeImage} alt="Plain product on white background" />
              </ProductImageContainer>
              <StageLabel>User-Submitted Visual</StageLabel>
            </BeforeSection>
            
            <TransformArrow>
              <FaArrowRight />
            </TransformArrow>
            
            <MiddleSection>
              <MiddleImageContainer>
                <img src={afterImage} alt="Product worn by professional model" />
              </MiddleImageContainer>
              <StageLabel>Enhanced Product Visual</StageLabel>
            </MiddleSection>
            
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
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <VideoControls>
                  <FaPlay />
                </VideoControls>
              </VideoContainer>
              <StageLabel>Engagement-Driven Video</StageLabel>
            </AfterSection>
          </TransformationFlow>
        </ShowcaseContainer>
      </TransformationShowcase>
    </TransformationSection>
  );
};

// New AITransformationProcessVideo Component (Image → Video → Video)
const AITransformationProcessVideo = ({ beforeImage, afterVideo, videoSrc, delay = 0 }) => {
  const [videoRef1, setVideoRef1] = useState(null);
  const [videoRef2, setVideoRef2] = useState(null);
  
  React.useEffect(() => {
    if (videoRef1) {
      videoRef1.play().catch(error => {
        console.log('Video 1 autoplay failed:', error);
      });
    }
    if (videoRef2) {
      videoRef2.play().catch(error => {
        console.log('Video 2 autoplay failed:', error);
      });
    }
  }, [videoRef1, videoRef2]);
  
  return (
    <TransformationSection>
      <TransformationShowcase delay={delay}>
        <ShowcaseContainer>
          <TransformationFlow>
            <BeforeSection>
              <ProductImageContainer>
                <img src={beforeImage} alt="Plain product on white background" />
              </ProductImageContainer>
              <StageLabel>User-Submitted Visual</StageLabel>
            </BeforeSection>
            
            <TransformArrow>
              <FaArrowRight />
            </TransformArrow>
            
            <MiddleSection>
              <VideoContainer>
                <video
                  ref={setVideoRef1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={afterVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <VideoControls>
                  <FaPlay />
                </VideoControls>
              </VideoContainer>
              <StageLabel>Engagement-Driven Video 1</StageLabel>
            </MiddleSection>
            
            <TransformArrow>
              <FaArrowRight />
            </TransformArrow>
            
            <AfterSection>
              <VideoContainer>
                <video
                  ref={setVideoRef2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <VideoControls>
                  <FaPlay />
                </VideoControls>
              </VideoContainer>
              <StageLabel>Engagement-Driven Video 2</StageLabel>
            </AfterSection>
          </TransformationFlow>
        </ShowcaseContainer>
      </TransformationShowcase>
    </TransformationSection>
  );
};

const ImageTransformDemo = () => {
  // Original transformations array (Image → Image → Video)
  const transformations = [
    {
      id: 1,
      beforeImage: `${process.env.PUBLIC_URL}/assets/dress/3.jpg`,
      afterImage: `${process.env.PUBLIC_URL}/assets/models/3.jpg`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/3.mp4`
    },
    {
      id: 2,
      beforeImage: `${process.env.PUBLIC_URL}/assets/dress/2.jpg`,
      afterImage: `${process.env.PUBLIC_URL}/assets/models/2.jpg`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/2.mp4`
    },
    {
      id: 3,
      beforeImage: `${process.env.PUBLIC_URL}/assets/dress/1.jpg`,
      afterImage: `${process.env.PUBLIC_URL}/assets/models/1.jpg`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/1.mp4`
    },
    {
      id: 4,
      beforeImage: `${process.env.PUBLIC_URL}/assets/dress/4.jpg`,
      afterImage: `${process.env.PUBLIC_URL}/assets/models/4.jpg`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/4.mp4`
    },
    {
      id: 5,
      beforeImage: `${process.env.PUBLIC_URL}/assets/dress/5.jpg`,
      afterImage: `${process.env.PUBLIC_URL}/assets/models/5.jpg`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/5.mp4`
    },
    {
      id: 6,
      beforeImage: `${process.env.PUBLIC_URL}/assets/dress/6.jpg`,
      afterImage: `${process.env.PUBLIC_URL}/assets/models/6.jpg`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/6.mp4`
    }
  ];

  // New transformationsVideo array (Image → Video → Video)
  const transformationsVideo = [
    {
      id: 7,
      beforeImage: `${process.env.PUBLIC_URL}/assets/dress/7.jpg`,
      afterVideo: `${process.env.PUBLIC_URL}/assets/videos/7.mp4`,
      videoSrc: `${process.env.PUBLIC_URL}/assets/videos/7.mp4`
    },
    
  ];
  
  return (
    <DemoSection id="demo">
      <DemoContainer>
        <SectionHeader>
          <h2>Product Showcase</h2>
          <p>
            See how our AI technology transforms plain product images into professional model shots instantly.
          </p>
        </SectionHeader>
        
        {/* Render Image → Image → Video transformations */}
        {transformations.map((transformation, index) => (
          <AITransformationProcess
            key={transformation.id}
            beforeImage={transformation.beforeImage}
            afterImage={transformation.afterImage}
            videoSrc={transformation.videoSrc}
            delay={index * 0.1}
          />
        ))}
        
        {/* Render Image → Video → Video transformations */}
        {transformationsVideo.map((transformation, index) => (
          <AITransformationProcessVideo
            key={transformation.id}
            beforeImage={transformation.beforeImage}
            afterVideo={transformation.afterVideo}
            videoSrc={transformation.videoSrc}
            delay={(transformations.length + index) * 0.1}
          />
        ))}
      </DemoContainer>
    </DemoSection>
  );
};

export default ImageTransformDemo;