import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../atoms/SearchBar';
import Label from '../atoms/Label';

const StyledForm = styled.form`
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom: 5rem;
  width: 60vw;
  margin: 0 auto;

  input:focus ~ label {
    color: black;
    position: fixed;
    z-index: -100;
  }
`;

class Form extends Component {
  state = {
    term: '',
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <StyledForm onSubmit={this.onFormSubmit}>
        <SearchBar
          placeholder="your mood here"
          type="text"
          onChange={e => this.setState({ term: e.target.value })}
        />
        <Label>How do you feel?</Label>
      </StyledForm>
    );
  }
}

export default Form;
