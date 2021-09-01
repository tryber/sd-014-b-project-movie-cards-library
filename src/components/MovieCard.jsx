// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { movie } = props;
  return (
    <div className="movie-card">
      <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
      <div className="movie-card-body">
        <h4 className="movie-card-title">{movie.title}</h4>
        <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
        <p className="movie-card-storyline">{movie.storyline}</p>
      </div>
      <Rating rating={ movie.rating } />
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
