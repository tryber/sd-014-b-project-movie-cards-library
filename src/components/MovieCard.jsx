import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ `${title}` } />
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </section>
        <div className="movie-card-rating">
          <Rating rating={ rating } className="movie-card-rating" />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
