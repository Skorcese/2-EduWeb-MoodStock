import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions';
import heart from '../../assets/favoritePlus.svg';

const StyledPhotoOverlay = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  padding: 2rem;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1000;
  transition: all 0.5s ease-out;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 2rem;

  h3 {
    color: ${({ theme }) => theme.primary};
  }
`;

const Heart = styled.div`
  background-image: url(${heart});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  width: 5rem;
  height: 5rem;
  margin: 0 auto;

  :hover {
    cursor: pointer;
  }
`;

class PhotoOverlay extends Component {
  state = {
    showButton: true,
  };

  componentDidMount() {}

  componentDidUpdate() {
    this.compareStateToImage();
  }

  compareStateToImage = () => {
    let ret = true;

    if (this.props.favorites.length > 0) {
      this.props.favorites.find(i => i.id === this.props.image.id) === undefined
        ? (ret = false) //this.setState({ showButton: false })
        : (ret = true); //this.setState({ showButton: true });
    }

    return ret;
  };

  onClickHandle = () => {
    console.log(this.props.mode);
    this.props.mode === 'main'
      ? this.props.add(this.props.image)
      : this.props.remove(this.props.image);
  };

  render() {
    const { className, author } = this.props;

    return (
      <StyledPhotoOverlay className={className}>
        <h3>{author}</h3>
        {this.state.showButton && <Heart onClick={this.onClickHandle} />}
      </StyledPhotoOverlay>
    );
  }
}

const mapStateToProps = ({ favorites }) => ({ favorites });

const mapDispatchToProps = dispatch => ({
  add: image => dispatch(addFavorite(image)),
  remove: image => dispatch(removeFavorite(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoOverlay);
