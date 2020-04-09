import styled from 'styled-components';

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 1rem;
  border-radius: 2rem;
  z-index: 0;

  :hover {
    z-index: -20;
    filter: brightness(150%);
  }
`;

export default Photo;
