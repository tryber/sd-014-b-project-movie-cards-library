import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, subtitle, storyline, rating, imagePath },
    } = this.props;
    return (
      <section>
        <img src={ imagePath } alt="Imagem de capa do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
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
