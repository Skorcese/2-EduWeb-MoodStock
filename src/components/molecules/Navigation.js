import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavButton from '../atoms/NavButton';

const StyledNavigation = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 8rem;
  background-color: ${({ theme }) => theme.primary};
`;

const Navigation = () => (
  <StyledNavigation>
    <NavButton as={NavLink} exact to="/" activeclass="active">
      Search
    </NavButton>
    <NavButton as={NavLink} to="/favorites" activeclass="active">
      Favorites
    </NavButton>
    <NavButton as={NavLink} to="/settings" activeclass="active">
      Settings
    </NavButton>
  </StyledNavigation>
);

export default Navigation;
