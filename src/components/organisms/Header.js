import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import Navigation from '../molecules/Navigation';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 9999;
  display: block;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
);

export default Header;
