// Theme configuration based on TechRelieve logo colors

const theme = {
  colors: {
    // Primary brand colors
    primary: '#4A6FFF', // Main blue color
    secondary: '#FF6B6B', // Accent red color
    
    // UI colors
    dark: '#2D3748', // Dark text color
    light: '#F8FAFC', // Light background color
    gray: '#718096', // Gray text color
    
    // Feedback colors
    success: '#48BB78', // Green for success messages
    warning: '#F6AD55', // Orange for warnings
    error: '#F56565', // Red for errors
    info: '#4299E1', // Blue for information
    
    // Background colors
    bgLight: '#FFFFFF',
    bgDark: '#1A202C',
    bgGray: '#F7FAFC',
    
    // Gradient
    gradient: 'linear-gradient(135deg, #4A6FFF 0%, #FF6B6B 100%)'
  },
  
  // Convert primary and secondary colors to RGB format for rgba usage
  rgbColors: {
    primaryRGB: '74, 111, 255', // RGB values for #4A6FFF
    secondaryRGB: '255, 107, 107' // RGB values for #FF6B6B
  },
  
  // Font settings
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
    monospace: "'Roboto Mono', monospace"
  },
  
  // Font weights
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },
  
  // Border radius
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%'
  },
  
  // Box shadows
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.1)',
    large: '0 8px 30px rgba(0, 0, 0, 0.1)',
    focus: '0 0 0 3px rgba(74, 111, 255, 0.4)'
  },
  
  // Transitions
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease'
  },
  
  // Z-index scale
  zIndices: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500
  }
};

export default theme;