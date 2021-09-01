import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {movie:{title, subtitle, storyline, imagePath, rating}} = this.props;
    return (
      <div>
        <img src={ imagePath } alt="capa do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>);
  }
}

MovieCard.propType = {
  movies: PropTypes.arrayOf,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
};
MovieCard.defaultProps = {
  movies: 'Faltou filmes',
};

export default MovieCard;
