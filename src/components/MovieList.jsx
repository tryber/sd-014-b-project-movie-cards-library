import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />));
  }
}

export default MovieList;
