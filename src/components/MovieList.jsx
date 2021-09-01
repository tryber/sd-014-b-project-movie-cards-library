import React, { Component } from 'react';
import movies from '../data';
// Por que não precisa de .js depois de data?
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

export default class MovieList extends Component {
  render() {
    return (
      <div className="movielist">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movies} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
}