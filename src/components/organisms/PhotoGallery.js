import React from 'react';
import styled from 'styled-components';
import PhotoGrid from '../molecules/PhotoGrid';
import Description from '../atoms/Description';

const StyledPhotoGallery = styled.div``;

const PhotoGallery = ({ photos, settingsQty }) => (
  <StyledPhotoGallery>
    {photos.length > 0 ? (
      <PhotoGrid photos={photos} qty={settingsQty} />
    ) : (
      <Description mode="main" />
    )}
  </StyledPhotoGallery>
);

export default PhotoGallery;
