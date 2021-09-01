// implement MovieList component here

import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)
    );
  }
}

export default MovieList;
