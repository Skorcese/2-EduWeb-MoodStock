import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 3.5rem;
  margin-top: 2rem;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 2px;
  line-height: 3.6rem;
  /* left: -2rem; */
  position: absolute;

  span {
    z-index: 20;
  }

  span:nth-child(2) {
    margin-left: 2.3rem;
  }

  div:first-of-type {
    position: absolute;
    border: 0.2rem solid ${({ theme }) => theme.secondary};
    height: 2.1rem;
    top: 2.9rem;
    left: 7.1rem;
    z-index: 20;
  }

  div:nth-of-type(2) {
    position: absolute;
    background-color: ${({ theme }) => theme.primary};
    filter: brightness(150%);
    z-index: 10;
    width: 40rem;
    height: 40rem;
    top: 0;
    left: 0;
    transform: translate(-19rem, -28rem);
    clip-path: circle();
  }
`;

const Logo = () => (
  <StyledLogo>
    <span>>Mood</span>
    <span>Stock.</span>
    <div />
    <div />
  </StyledLogo>
);

export default Logo;
