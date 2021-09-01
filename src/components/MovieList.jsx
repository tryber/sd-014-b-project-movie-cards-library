import React from 'react';
import MovieCard from './MovieCard';

export default function () {
  return (
    function MovieList() {
      return (
        <div className="MovieList">
          <MovieCard />
        </div>
      );
    }
  );
}
