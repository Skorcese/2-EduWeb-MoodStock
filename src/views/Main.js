import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { unsplash, getWeather } from '../api';
import Form from '../components/molecules/Form';
import PhotoGallery from '../components/organisms/PhotoGallery';

class Main extends Component {
  state = {
    images: [],
    lat: null,
    long: null,
    errorMessage: '',
    favorites: [],
    // settings: {},
  };

  componentDidMount() {
    if (this.props.settings_geolocation) return this.fetchGeolocation();
    if (this.props.settings_weather) return this.fetchWeather(this.state.lat, this.state);
  }

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

  fetchWeather = async (lat, long) => {
    const response = await getWeather(`?lat=${lat}&lon=${long}`);

    console.log(response.data);
  };

  onSearchSubmit = async term => {
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
        <Form onSubmit={this.onSearchSubmit} />
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
