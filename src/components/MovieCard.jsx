// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div className='movie-card'>
        <img className='movie-card-image' src={ imagePath } alt={ title } />
        <h4 className='movie-card-title'>{ title }</h4>
        <h5 className='movie-card-subtitle'>{ subtitle }</h5>
        <p className='movie-card-storyline'>{ storyline }</p>
        <Rating className='movie-card-rating' rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
