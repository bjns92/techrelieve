import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages
import HomePage from './pages/HomePage';

import NotFoundPage from './pages/NotFoundPage';

// Components
import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <ScrollToTop />
      <Navbar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ContentWrapper>
      {/* <Footer /> */}
    </AppContainer>
  );
}

export default App;