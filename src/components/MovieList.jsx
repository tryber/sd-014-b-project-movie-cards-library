// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((elementMovies)=> <MovieCard key={ elementMovies.title } movie={elementMovies} />)}
      </div>
    );
  }
}

export default MovieList;
