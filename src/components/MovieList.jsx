import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Componet {
  render() {
    const { movie } = this.props;

    return (
      <main>
        { movie.map((card) => <MovieCard key={ movie.title } movie={ card } />) }
      </main>
    );
  }
}

export default MovieList;
