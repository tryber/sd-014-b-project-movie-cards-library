import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    // const { movies } = this.props;
    const movies = data;
    const allMovies = movies
      .map((item, index) => <MovieCard movie={ item } key={ index } />);
    return (
      { allMovies }
    );
  }
}

export default MovieList;
