import React, { Component } from 'react';
import movies from '../data';
// Por que não precisa de .js depois de data?
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movielist">
        {movies.map((movie) => <MovieCard key={movie.title} movies={movie.title} />)}
      </div>
    );
  }
}
