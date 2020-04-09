import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Radio from '../atoms/Radio';

const StyledRadioGroup = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 2rem;
`;

class RadioGroup extends Component {
  checked = (xName, value, xParentState) => {
    if (xName === 'settings_quantity' && Number.parseInt(value) === xParentState) return true;

    let val = value === 'true' ? true : false;
    if (xName === 'settings_geolocation' && val === xParentState) return true;
    if (xName === 'settings_weather' && val === xParentState) return true;
  };

  render() {
    const { parentState, name, onChange } = this.props;
    return (
      <StyledRadioGroup>
        {name === 'settings_quantity' ? (
          <>
            <Radio
              onChange={name => onChange(name)}
              name={name}
              value="3"
              labelText="3"
              checked={this.checked(name, '3', parentState)}
            />
            <Radio
              onChange={name => onChange(name)}
              name={name}
              value="6"
              labelText="6"
              checked={this.checked(name, '6', parentState)}
            />
            <Radio
              onChange={name => onChange(name)}
              name={name}
              value="9"
              labelText="9"
              checked={this.checked(name, '9', parentState)}
            />
          </>
        ) : (
          <>
            <Radio
              onChange={name => onChange(name)}
              name={name}
              value={true}
              labelText="Allow"
              checked={this.checked(name, 'true', parentState)}
            />
            <Radio
              onChange={name => onChange(name)}
              name={name}
              value={false}
              labelText="Disallow"
              checked={this.checked(name, false, parentState)}
            />
          </>
        )}
      </StyledRadioGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings_quantity: state.settings_quantity,
    settings_geolocation: state.settings_geolocation,
    settings_weather: state.settings_weather,
  };
};

export default connect(mapStateToProps)(RadioGroup);
