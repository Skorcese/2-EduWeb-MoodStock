import React from 'react';
import styled from 'styled-components';
import PhotoFrame from './PhotoFrame';

const StyledPhotoGrid = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(${({ qty }) => qty / 3}, 1fr);
  /* grid-auto-rows: 20vh; */
  grid-auto-flow: dense;
  grid-gap: 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2rem;
`;

const PhotoGrid = ({ photos, qty }) => (
  <StyledPhotoGrid qty={qty}>
    {photos.map(img => (
      <PhotoFrame key={img.id} image={img} />
    ))}
  </StyledPhotoGrid>
);

export default PhotoGrid;
