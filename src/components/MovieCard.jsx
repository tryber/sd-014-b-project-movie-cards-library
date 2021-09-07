import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section
        title={ movie.title }
        subtitle={ movie.subtitle }
        storyline={ movie.storyline }
        imagePath={ movie.imagePath }
        rating={ movie.rating }
        className="movie-card"
      >
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4 className="movie-card-title ">{ movie.title }</h4>
        <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
        <p className="movie-card-storyline">{ movie.storyline }</p>
        <Rating rating={ movie.rating } className="movie-card-rating" />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
