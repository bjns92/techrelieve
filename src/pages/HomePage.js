import React from 'react';
import styled from 'styled-components';
import { FaImage, FaMoneyBillWave, FaRocket, FaUserTie, FaStudiovinari, FaCloudUploadAlt, FaShoppingCart, FaClock } from 'react-icons/fa';
import SEO from '../components/utils/SEO';

// Components
import HeroSection from '../components/sections/HeroSection';
import ServiceCard from '../components/ui/ServiceCard';
import FeatureCard from '../components/ui/FeatureCard';
import ImageTransformDemo from '../components/sections/ImageTransformDemo';
import ContactInformation from '../pages/ContactInformation'
// import TestimonialSlider from '../components/sections/TestimonialSlider';
// import CallToAction from '../components/sections/CallToAction';

const ServicesSection = styled.section`
  padding: 10px 0;
  background-color: var(--light-gray);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient-primary);
  }
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 0;
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

// Styled icon components with custom colors
const BlueIcon = styled(FaImage)`
  color: #3498db !important;
  
  &:hover {
    color: #2980b9 !important;
  }
`;

const GreenIcon = styled(FaClock)`
  color: var(--techrelieve-green) !important;
  
  &:hover {
    color: #27ae60 !important;
  }
`;

const OrangeIcon = styled(FaMoneyBillWave)`
  color: #e67e22 !important;
  
  &:hover {
    color: #d35400 !important;
  }
`;

const HomePage = () => {
  const services = [
    {
      id: 1,
      icon: <FaUserTie />,
      title: 'No Models Required',
      description: 'Eliminate the need for hiring models, scheduling photoshoots, and managing talent. Our AI creates professional model shots from plain product images.',
    },
    {
      id: 2,
      icon: <FaStudiovinari />,
      title: 'No Studios Needed',
      description: 'Say goodbye to expensive studio rentals, lighting setups, and photography equipment. Generate professional product visuals with just a simple product image.',
    },
    {
      id: 3,
      icon: <FaMoneyBillWave />,
      title: '50% Cost Reduction',
      description: 'Dramatically reduce your product photography costs by up to 50% compared to traditional photoshoots while maintaining professional quality.',
    },
    {
      id: 4,
      icon: <FaRocket />,
      title: 'Faster Go-to-Market',
      description: 'Launch products faster with instant model shots. Reduce your time-to-market from weeks to minutes and stay ahead of competitors.',
    },
    {
      id: 5,
      icon: <FaCloudUploadAlt />,
      title: 'Optimized for Bulk Uploads',
      description: 'Perfect for e-commerce catalogs with hundreds or thousands of products. Process your entire inventory efficiently with our scalable solution.',
    },
    {
      id: 6,
      icon: <FaShoppingCart />,
      title: 'Marketplace Ready',
      description: 'Generate images that meet the requirements of major marketplaces like Amazon, eBay, and Shopify, boosting your product listings and conversion rates.',
    },
  ];

  const features = [
    {
      id: 1,
      icon: <BlueIcon />,
      title: 'Multiple Model Styles',
      description: 'Choose from a diverse range of virtual models to best represent your brand and target audience.',
    },
    {
      id: 2,
      icon: <OrangeIcon />,
      title: 'Cost-Effective',
      description: 'Eliminate expensive photoshoots, model hiring, and studio rentals. Pay only for what you use.',
    },
    {
      id: 3,
      icon: <GreenIcon />,
      title: 'High Visual Fidelity',
      description: 'Our AI generates photorealistic images that showcase your products in the best possible light.',
    },
  ];

  return (
    <>
      <SEO 
        title="TechRelieve - AI-Powered Product Image Transformation"
        description="Transform product images into stunning model shots with our AI technology. Save time and money on photoshoots for your e-commerce business."
        url="/"
      />
      <HeroSection />
      <ImageTransformDemo />
      <ServicesSection id="services">
        <ServicesContainer>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Transform product images into stunning model shots — effortlessly. Our AI technology revolutionizes e-commerce product visualization with these key benefits:
          </p>
          
          <ServicesGrid>
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>
      
   
      
      <FeaturesSection>
        <FeaturesContainer>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Our AI-powered solution offers numerous advantages over traditional product photography methods.
          </p>
          
          <FeaturesGrid>
            {features.map(feature => (
              <FeatureCard 
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesSection>
      <ContactInformation />
      {/* <TestimonialSlider /> */}
      
      {/* <CallToAction /> */}
    </>
  );
};

export default HomePage;