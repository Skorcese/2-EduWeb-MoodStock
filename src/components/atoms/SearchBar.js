import styled from 'styled-components';
import magnifierIcon from '../../assets/magnifier.svg';

const Input = styled.input`
  padding: 1.5rem 3rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  background-color: ${({ theme }) => theme.primary};
  filter: brightness(150%);
  border: none;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
  background-image: url(${magnifierIcon});
  background-repeat: no-repeat;
  background-size: 3rem;
  background-position: 50% 50%;
  width: 1rem;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.primary};
  }

  :focus {
    border-radius: 10rem;
    background-position: 96% 50%;
    background-color: ${({ theme }) => theme.secondary};
    filter: brightness(100%);
    /* position: absolute; */
    width: 100%;
  }

  :hover {
    cursor: pointer;
  }
`;

export default Input;
