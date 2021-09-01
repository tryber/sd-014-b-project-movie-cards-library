// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie: {
      title, subtitle, storyline, imagePath, rating,
    } } = this.props;

    return (
      <section>
        <img src={ imagePath } alt={ title } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
