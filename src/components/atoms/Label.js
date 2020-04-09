import styled from 'styled-components';

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.secondary};
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 0rem;
  margin-left: 3rem;
  transition: all 0.1s ease-out;
`;

export default Label;
