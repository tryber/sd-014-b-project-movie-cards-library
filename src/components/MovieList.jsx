import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movie-list">
        { movies.map((card) => <MovieCard key={ card.title } movie={ card } />) }
      </main>
    );
  }
}

export default MovieList;
