import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { unsplash, openWeatherKey } from '../api';
import Form from '../components/molecules/Form';
import PhotoGallery from '../components/organisms/PhotoGallery';

const StyledP = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.2rem;
  /* margin: 1rem 43rem 0 0; */
  position: relative;
  width: 50%;
  margin: 1rem auto 0;
`;
class Main extends Component {
  state = {
    images: [],
    lat: 51.1004721,
    long: 17.0369858,
    errorMessage: '',
    favorites: [],
    terms: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    if (this.props.settings_geolocation === true) return this.fetchGeolocation();
    if (this.props.settings_weather === true)
      return this.fetchWeatherTerms(this.state.lat, this.state);
  };

  fetchGeolocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      err => this.setState({ errorMessage: err.message }),
    );
  };

  fetchWeatherTerms = (lat, long) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${openWeatherKey}&units=metric`,
    )
      .then(result => result.json())
      .then(result => {
        const filtered = {
          city: result.name,
          weather: result.weather[0].description,
          temperature: result.main.feels_like,
          dt: new Date(1000 * result.dt),
          country: result.sys.country,
        };

        const time = hour => {
          if (hour >= 6 && hour <= 12) {
            return 'morning';
          } else if (hour > 12 && hour <= 16) {
            return 'afternoon';
          } else if (hour > 16 && hour <= 21) {
            return 'evening';
          } else {
            return 'night';
          }
        };

        const season = month => {
          if (month > 2 && month < 9) {
            return this.state.lat > 0 ? 'summer' : 'winter';
          } else {
            return this.state.lat > 0 ? 'winter' : 'summer';
          }
        };

        const readyData = {
          city: filtered.city,
          weather: filtered.weather,
          tempWord: filtered.temperature > 3.0 ? 'warm' : 'cold',
          timeWord: time(filtered.dt.getHours()),
          seasonWord: season(filtered.dt.getMonth()),
        };

        this.setState({
          terms: Object.values(readyData),
        });
      })
      .catch(reject => console.log('Rejected: ' + reject));
  };

  onSearchSubmit = async term => {
    if (this.props.settings_weather && this.props.settings_geolocation) {
      term = term + ` ${this.state.terms.join(' ')}`;
    }
    const response = await unsplash.get('/search/photos', { params: { query: term } });
    const results = response.data.results;
    const cleanData = results
      .map(r => [_.pick(r, ['id', 'urls.regular', 'user.name'])])
      .map(i => i[0])
      .map(i => {
        return {
          id: i.id,
          url: i.urls.regular,
          user: i.user.name,
        };
      })
      .slice(0, this.props.settings_quantity);

    this.setState({ images: cleanData });
  };

  render() {
    const { images } = this.state;
    const { settings_quantity } = this.props;

    return (
      <div>
        <Form onSubmit={this.onSearchSubmit} terms={this.state.terms} />
        <StyledP className="hash">{this.state.terms.map(t => `#${t} `)}</StyledP>
        <PhotoGallery photos={images} settingsQty={settings_quantity} mode="main" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings_quantity: state.settings_quantity,
  settings_geolocation: state.settings_geolocation,
  settings_weather: state.settings_weather,
});

export default connect(mapStateToProps)(Main);
