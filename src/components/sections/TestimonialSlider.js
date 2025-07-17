import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const TestimonialSection = styled.section`
  padding: 100px 0;
  background-color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #1db0f2, transparent);
    opacity: 0.3;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 576px) {
    padding: 40px 0;
  }
`;

const TestimonialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 576px) {
    padding: 0 10px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  h2 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  p {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 20px 0;
    margin: 0 10px;
  }
  
  @media (max-width: 576px) {
    padding: 15px 0;
    margin: 0 5px;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 400px;
  
  @media (max-width: 768px) {
    min-height: 350px;
  }
  
  @media (max-width: 576px) {
    min-height: 320px;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ active }) => active ? 1 : 0};
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  transform: translateX(${({ active }) => active ? '0' : '20px'});
  transition: all 0.5s ease-in-out;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  
  @media (max-width: 576px) {
    padding: 0 5px;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
  border: 1px solid rgba(29, 176, 242, 0.1);
  transition: all 0.3s ease;
  margin: 0 auto;
  max-width: 100%;
  
  &:hover {
    box-shadow: 0 20px 50px rgba(29, 176, 242, 0.15);
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 30px 25px;
    border-radius: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 25px 20px;
    border-radius: 12px;
    margin: 0;
  }
  
  @media (max-width: 420px) {
    padding: 20px 15px;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1db0f2 0%, #1ad861 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(29, 176, 242, 0.3);
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    top: -18px;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    top: -15px;
  }
`;

const TestimonialText = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.7;
  color: #2c3e50;
  margin-bottom: 30px;
  font-style: italic;
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
    line-height: 1.6;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 20px;
    line-height: 1.5;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;
  border: 3px solid #1db0f2;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 12px;
    border-width: 2px;
  }
  
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

const ClientName = styled.h4`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin-bottom: 5px;
  color: #2c3e50;
  font-weight: 600;
  
  @media (max-width: 576px) {
    margin-bottom: 3px;
  }
`;

const ClientRole = styled.p`
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: #64748b;
  margin-bottom: 15px;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

const RatingStars = styled.div`
  display: flex;
  justify-content: center;
  color: #1ad861;
  font-size: 1rem;
  gap: 2px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  
  @media (max-width: 576px) {
    margin-top: 25px;
  }
`;

const SliderDots = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 576px) {
    gap: 8px;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? '#1db0f2' : 'rgba(0, 0, 0, 0.2)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? '#1db0f2' : 'rgba(0, 0, 0, 0.4)'};
  }
  
  @media (max-width: 576px) {
    width: 10px;
    height: 10px;
  }
  
  @media (max-width: 420px) {
    width: 8px;
    height: 8px;
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1db0f2;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: linear-gradient(135deg, #1db0f2 0%, #1ad861 100%);
    color: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    background-color: #f0f0f0;
    color: #ccc;
    cursor: not-allowed;
    
    &:hover {
      transform: translateY(-50%);
      background-color: #f0f0f0;
      color: #ccc;
    }
  }
  
  &.prev {
    left: -25px;
  }
  
  &.next {
    right: -25px;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    
    &.prev {
      left: -10px;
    }
    
    &.next {
      right: -10px;
    }
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    
    &.prev {
      left: -5px;
    }
    
    &.next {
      right: -5px;
    }
  }
  
  @media (max-width: 420px) {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
    
    &.prev {
      left: 0;
    }
    
    &.next {
      right: 0;
    }
  }
`;

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      text: "TechRelieve's AI model photo generation has completely transformed our e-commerce business. We've cut our product photography costs by 80% while improving the quality of our visuals. Our customers love the consistent look across our entire catalog.",
      name: "Sarah Johnson",
      role: "E-commerce Manager, FashionHub",
      image: `${process.env.PUBLIC_URL}/assets/man.png`,
      rating: 5
    },
    {
      id: 2,
      text: "As a small business owner, I couldn't afford professional photoshoots for my clothing line. TechRelieve's solution has been a game-changer. Now I can compete with larger brands by showcasing my products on professional-looking models without breaking the bank.",
      name: "Michael Chen",
      role: "Owner, Urban Threads Boutique",
     image: `${process.env.PUBLIC_URL}/assets/man.png`,
      rating: 5
    },
    {
      id: 3,
      text: "The speed and quality of TechRelieve's AI model generation is impressive. We can now process hundreds of product images in minutes, allowing us to launch new collections faster than ever before. This technology has given us a significant competitive advantage.",
      name: "Jessica Williams",
      role: "Digital Marketing Director, StyleMax",
     image: `${process.env.PUBLIC_URL}/assets/man.png`,
      rating: 4
    }
  ];
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);
  
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);
  
  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      clearInterval(interval);
    };
  }, [autoplay, nextSlide]);
  
  const handleMouseEnter = () => {
    setAutoplay(false);
  };
  
  const handleMouseLeave = () => {
    setAutoplay(true);
  };
  
  return (
    <TestimonialSection>
      <TestimonialContainer>
        <SectionHeader>
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it. Here's what businesses using our AI-powered image transformation technology have to say.
          </p>
        </SectionHeader>
        
        <SliderContainer 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SliderWrapper>
            {testimonials.map((testimonial, index) => (
              <Slide key={testimonial.id} active={currentSlide === index}>
                <TestimonialCard>
                  <QuoteIcon>
                    <FaQuoteLeft />
                  </QuoteIcon>
                  <TestimonialText>
                    {testimonial.text}
                  </TestimonialText>
                  <ClientInfo>
                    <ClientImage>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </ClientImage>
                    <ClientName>{testimonial.name}</ClientName>
                    <ClientRole>{testimonial.role}</ClientRole>
                    <RatingStars>
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          color={i < testimonial.rating ? '#1ad861' : '#e4e5e9'} 
                        />
                      ))}
                    </RatingStars>
                  </ClientInfo>
                </TestimonialCard>
              </Slide>
            ))}
          </SliderWrapper>
          
          <SliderArrow 
            className="prev" 
            onClick={prevSlide}
            disabled={testimonials.length <= 1}
          >
            <FaChevronLeft />
          </SliderArrow>
          
          <SliderArrow 
            className="next" 
            onClick={nextSlide}
            disabled={testimonials.length <= 1}
          >
            <FaChevronRight />
          </SliderArrow>
          
          <SliderControls>
            <SliderDots>
              {testimonials.map((_, index) => (
                <Dot 
                  key={index} 
                  active={currentSlide === index ? 1 : 0}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </SliderDots>
          </SliderControls>
        </SliderContainer>
      </TestimonialContainer>
    </TestimonialSection>
  );
};

export default TestimonialSlider;