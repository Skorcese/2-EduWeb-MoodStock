import React from 'react';
import styled from 'styled-components';
import Photo from '../atoms/Photo';
import PhotoOverlay from '../atoms/PhotoOverlay';

const StyledPhotoFrame = styled.div`
  position: relative;

  :hover ~ .over {
    position: relative;
    border: 1rem solid yellow;
  }
`;

const PhotoFrame = ({ image }) => (
  <StyledPhotoFrame>
    <Photo src={image.url} />
    <PhotoOverlay className="over" author={image.user} />
  </StyledPhotoFrame>
);

export default PhotoFrame;
