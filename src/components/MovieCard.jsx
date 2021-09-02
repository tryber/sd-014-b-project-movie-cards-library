import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div calssName="movie-card">
        <div className="movie-body">
          <img
            src={ movie.imagePath }
            alt="img"
            className="movie-card-imagem"
          />
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p calssName="movie-card-storyline">{ movie.storyline }</p>
        </div>
        <Rating rating={ movie.rating } className="rating" />
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
