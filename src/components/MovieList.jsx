import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList() {
  return (
    <div className="movie-list">
      {MovieCard.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </div>
  );
}
