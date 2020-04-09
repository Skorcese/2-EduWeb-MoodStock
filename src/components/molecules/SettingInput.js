import React from 'react';
import styled from 'styled-components';
import RadioGroup from './RadioGroup';

const StyledSettingInput = styled.div`
  h3 {
    color: ${({ theme }) => theme.secondary};
  }
`;

const SettingInput = ({ onChange, text, name, parentState }) => (
  <StyledSettingInput>
    <h3>{text}</h3>
    <RadioGroup onChange={name => onChange(name)} name={name} parentState={parentState} />
  </StyledSettingInput>
);

export default SettingInput;
