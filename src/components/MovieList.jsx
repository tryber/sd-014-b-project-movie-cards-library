// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        <div>
          {movies.map((movie) => <MovieCard key={ movie.id } movieObject={ movie } />)}
        </div>
      </main>
    );
  }
}

export default MovieList;
