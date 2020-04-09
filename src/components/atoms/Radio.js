import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  margin: 1rem 6rem 0 0;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: relative;
  label {
    margin-left: 2.5rem;
  }
  &::before {
    content: '';
    border-radius: 100%;
    background: ${({ theme }) => theme.secondary};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

const Fill = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: '';
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`;

const Radio = ({ onChange, value, labelText, checked, name }) => (
  <Root>
    <label>
      {labelText}
      <Input
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        checked={checked}
        aria-checked={checked}
      />
      <Fill />
    </label>
  </Root>
);

export default Radio;
