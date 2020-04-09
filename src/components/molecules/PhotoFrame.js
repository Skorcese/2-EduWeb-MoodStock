import React from 'react';
import styled from 'styled-components';
import Photo from '../atoms/Photo';
import PhotoOverlay from '../atoms/PhotoOverlay';

const StyledPhotoFrame = styled.div`
  position: relative;
  transition: all 0.5s ease-out;

  .over {
    opacity: 0;
  }

  .under:hover {
    filter: blur(4px) brightness(70%);

    ~ .over {
      opacity: 1;
    }
  }

  .over:hover ~ .under:hover {
    filter: blur(7px) brightness(50%);
  }

  .over:hover {
    opacity: 1;

    ~ .under {
      filter: blur(7px) brightness(50%);
    }
  }
`;

const PhotoFrame = ({ image, mode }) => (
  <StyledPhotoFrame>
    <Photo className="under" src={image.url} />
    <PhotoOverlay className="over" author={image.user} image={image} mode={mode} />
  </StyledPhotoFrame>
);

export default PhotoFrame;
