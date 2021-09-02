import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => (<MovieCard
        key={ movie.title }
        movie={ movie }
      />))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
