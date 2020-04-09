import styled from 'styled-components';

const NavButton = styled.button`
  border: none;
  background-color: transparent;
  height: 3.5rem;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  border-bottom: 0.2rem solid ${({ theme }) => theme.primary};
  transition: all 0.05s ease-out;
  margin: 0 1rem;
  text-decoration: none;
  padding: 0 0.2rem;

  &.active {
    border-bottom: 0.2rem ridge ${({ theme }) => theme.secondary};
    /* transform: translateY(3.2rem); */
  }

  :hover {
    border-bottom: 0.2rem solid ${({ theme }) => theme.secondary};
    border-radius: 2rem;

    cursor: pointer;
  }

  :active {
    padding: 0.5rem 0.2rem;
    border-bottom: 0.2rem solid ${({ theme }) => theme.primary};
  }
`;

export default NavButton;
