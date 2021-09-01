import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movie-list">
        { data.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </main>
    );
  }
}

export default MovieList;
