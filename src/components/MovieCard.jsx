import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, subtitle, storyline, rating, imagePath },
    } = this.props;
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <img src={ imagePath } alt="Capa do Filme" className="movie-card-image" />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.String,
  subtitle: PropTypes.String,
  storyline: PropTypes.String,
  magePath: PropTypes.String,
  rating: PropTypes.Number,
}.isRequired;

export default MovieCard;
