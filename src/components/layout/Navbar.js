import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background-color: white;

  ${'' /* background-color: ${({ scrolled }) => scrolled ? 'var(--background-color)' : 'transparent'}; */}

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  z-index: 1001;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

// const NavLinks = styled.ul`
//   display: flex;
//   align-items: center;
  
//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     right: ${({ isOpen }) => isOpen ? '0' : '-100%'};
//     width: 70%;
//     height: 100vh;
//     background-color: var(--background-color);
//     flex-direction: column;
//     justify-content: center;
//     transition: all 0.5s ease-in-out;
//     box-shadow: ${({ isOpen }) => isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
//   }
// `;

// const NavItem = styled.li`
//   margin: 0 1rem;
  
//   @media (max-width: 768px) {
//     margin: 1.5rem 0;
//   }
// `;

// const NavLink = styled(Link)`
//   color: ${({ active }) => active ? 'var(--primary-color)' : 'var(--text-color)'};
//   font-weight: ${({ active }) => active ? '600' : '500'};
//   position: relative;
//   transition: all 0.3s ease;
  
//   &:hover {
//     color: var(--primary-color);
//   }
  
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -5px;
//     left: 0;
//     width: ${({ active }) => active ? '100%' : '0'};
//     height: 2px;
//     background-color: var(--primary-color);
//     transition: all 0.3s ease;
//   }
  
//   &:hover::after {
//     width: 100%;
//   }
// `;

// const DownloadButton = styled(Link)`
//   background-color: var(--primary-color);
//   color: white;
//   padding: 0.5rem 1.5rem;
//   border-radius: 50px;
//   font-weight: 500;
//   transition: all 0.3s ease;
  
//   &:hover {
//     background-color: white;
//     transform: translateY(-3px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   }
  
//   @media (max-width: 768px) {
//     margin-top: 1.5rem;
//   }
// `;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavbarContent>
          <Logo to="/">
         <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="TechRelieve Logo" />
          </Logo>
          
          <MenuIcon onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuIcon>
{/*           
          <NavLinks isOpen={isOpen}>
            <NavItem>
              <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <DownloadButton to="/api/apk/download/latest">
                Download App
              </DownloadButton>
            </NavItem>
          </NavLinks> */}
        </NavbarContent>
      </NavbarContainer>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Navbar;