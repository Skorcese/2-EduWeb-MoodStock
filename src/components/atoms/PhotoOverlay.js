import React from 'react';
import styled from 'styled-components';

const StyledPhotoOverlay = styled.div`
  color: white;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  border: 1rem solid green;
  z-index: -10;
`;

const PhotoOverlay = ({ className, author }) => (
  <StyledPhotoOverlay className={className}>{author}</StyledPhotoOverlay>
);

export default PhotoOverlay;
