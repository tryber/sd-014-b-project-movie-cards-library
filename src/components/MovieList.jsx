import React, { Component } from 'react';
import movies from '../data';
// Por que não precisa de .js depois de data?
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    return (
      <div className="movielist">
        {movies.map((movie, index) => <MovieCard key={ `Movie Title ${index}` } movie={ movie } />)}
      </div>
    );
  }
}
