import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>{storyline}</h4>
        <p>{rating}</p>
        <img src={ imagePath } alt={ `${title} banner` } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
