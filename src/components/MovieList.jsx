import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return ( movies.map( (movie) => <MovieCard movies = {movie} key = {movie.title}/> ) );
  }
}

export default MovieList;
