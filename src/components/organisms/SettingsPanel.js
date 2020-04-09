import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSetting } from '../../actions';
import styled from 'styled-components';
import SettingInput from '../molecules/SettingInput';

const StyledSettingsPanel = styled.div`
  height: 30rem;
  width: 60rem;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: auto auto;
  background-color: ${({ theme }) => theme.primary};
  border-bottom: 0.4rem solid ${({ theme }) => theme.secondary};
  border-right: 0.2rem solid ${({ theme }) => theme.secondary};
  border-radius: 3rem;

  .wrapper {
    position: relative;
    margin: 0 auto;
    padding: 5rem;
    width: 50rem;
  }
`;

class SettingsPanel extends Component {
  componentDidMount() {
    // this.props.fetchSettings();
  }

  onRadioChange = e => {
    let val = e.target.value;
    let type = e.target.name;

    if (val !== 'true' && val !== 'false') val = Number.parseInt(val);
    if (val === 'true') val = true;
    if (val === 'false') val = false;

    this.props.changeSetting(type, val);
  };

  render() {
    return (
      <StyledSettingsPanel>
        <div className="wrapper">
          <SettingInput
            text={'Number of displayed photos: '}
            onChange={this.onRadioChange}
            name="settings_quantity"
            parentState={this.props.settings_quantity}
          />
          <SettingInput
            text={'Allow geolocation: '}
            onChange={this.onRadioChange}
            name="settings_geolocation"
            parentState={this.props.settings_geolocation}
          />
          <SettingInput
            text={'Track current weather, time and season: '}
            onChange={this.onRadioChange}
            name="settings_weather"
            parentState={this.props.settings_weather}
          />
        </div>
      </StyledSettingsPanel>
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

const mapDispatchToProps = dispatch => ({
  // fetchSettings: () => dispatch(fetchSettings()),
  changeSetting: (settingType, val) => dispatch(changeSetting(settingType, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
