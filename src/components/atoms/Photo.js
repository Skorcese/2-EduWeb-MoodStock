import styled from 'styled-components';

const Photo = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 1rem;
  border-radius: 2rem;
  z-index: 20;
  transition: all 1s ease-out;
`;

export default Photo;
