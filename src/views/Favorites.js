import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '../components/atoms/Description';
import PhotoGallery from '../components/organisms/PhotoGallery';

class Favorites extends Component {
  render() {
    return (
      <div>
        {this.props.favorites ? (
          <PhotoGallery
            photos={this.props.favorites}
            mode="fav"
            qty={this.props.favorites.length}
          />
        ) : (
          <Description mode="fav" />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(mapStateToProps, null)(Favorites);
