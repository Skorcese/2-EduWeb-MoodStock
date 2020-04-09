import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
  position: relative;
  margin: 10rem 20rem;
  padding: 10rem;
  color: ${({ theme }) => theme.secondary};

  h1 {
    margin-bottom: 1rem;
  }

  .first {
    margin-bottom: 1rem;
  }
`;

const Description = ({ mode }) => (
  <StyledDescription>
    <h1>{mode === 'main' ? 'Enter the keyword in the searchbar above.' : 'Favorites.'}</h1>

    {mode === 'main' ? (
      <p className="first">
        You can add your favorite photos to the gallery. Just hover on the photo.
      </p>
    ) : null}
    {mode === 'main' ? <p>Visit settings for more features.</p> : null}
  </StyledDescription>
);

export default Description;
