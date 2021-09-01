import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movie-list">
        { data.map((card) => <MovieCard key={ card.title } movie={ card } />) }
      </main>
    );
  }
}

export default MovieList;
