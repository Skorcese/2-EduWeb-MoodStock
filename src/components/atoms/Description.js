import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -20%);
  text-align: justify;
  padding: 7rem;
  color: ${({ theme }) => theme.secondary};

  h1 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .first {
    margin-bottom: 1rem;
    text-align-last: center;
  }
`;

const Description = ({ mode }) => (
  <StyledDescription>
    <h1>{mode === 'main' ? 'Enter the keyword in the searchbar above.' : 'Favorites.'}</h1>
    <p className="first">
      {mode === 'main'
        ? 'You can add your favorite photos to the gallery. Just hover on the photo and click the heart icon.'
        : 'Add the photos you like in the serach section above.'}
    </p>
    {mode === 'main' ? <p>Visit settings for more features.</p> : null}
  </StyledDescription>
);

export default Description;
