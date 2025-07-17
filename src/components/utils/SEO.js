import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEO component for managing all document head tags
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the page
 * @param {string} props.description - The description of the page
 * @param {string} props.keywords - Keywords for the page
 * @param {string} props.image - The image to be displayed when sharing
 * @param {string} props.url - The canonical URL of the page
 */
const SEO = ({ 
  title = 'TechRelieve - AI-Powered Product Image Transformation',
  description = 'Transform product images into stunning model shots with AI technology. Save time and money on photoshoots for your e-commerce business.',
  keywords = 'AI, image transformation, e-commerce, product photography, model shots, fashion, tech',
  image = '/assets/og-image.jpg',
  url = '',
}) => {
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://techrelieve.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical link */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;