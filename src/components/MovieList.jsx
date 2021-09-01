import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props.movies;
    return (movies.map( (movie) => <MovieCard movie={ movie } key={ movie.title } />));
  }
}

export default MovieList;
