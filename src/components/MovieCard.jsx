import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const {movie:{title, subtitle, storyline, imagePath, rating}} = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
        <img src={ imagePath } alt="capa do filme" />
        <p>{rating}</p>
      </div>);
  }
}

MovieCard.propType = {
  movies: PropTypes.arrayOf,
};
MovieCard.defaultProps = {
  movies: 'Faltou filmes',
};

export default MovieCard;
