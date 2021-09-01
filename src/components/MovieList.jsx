import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        {movies.map((filme) => <MovieCard movie={filme} />)}
      </main>
    );
  }
}

export default MovieList;
