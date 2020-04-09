import React from 'react';
import styled from 'styled-components';
import PhotoFrame from './PhotoFrame';

const StyledPhotoGrid = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(${({ qty }) => (qty ? qty / 3 : 4)}, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2rem;
`;

const PhotoGrid = ({ photos, qty, mode }) => (
  <StyledPhotoGrid qty={qty}>
    {photos.map(img => (
      <PhotoFrame key={img.id} image={img} mode={mode} />
    ))}
  </StyledPhotoGrid>
);

export default PhotoGrid;
