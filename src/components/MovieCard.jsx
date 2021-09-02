// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie: {
      title, subtitle, storyline, imagePath, rating,
    } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number
  }).isRequired,
};

export default MovieCard;
