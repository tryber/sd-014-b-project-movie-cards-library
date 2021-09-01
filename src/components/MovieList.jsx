import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render () {
    const movies = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard movies={movie} key={movie.title} />) }
      </div>
    );
  }
}

export default MovieList;
