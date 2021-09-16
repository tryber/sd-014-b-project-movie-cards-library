import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    return (
      <img src={ movies.imagePath } alt="" />
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    },
  )).isRequired,
};

export default MovieCard;
