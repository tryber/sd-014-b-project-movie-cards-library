// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        <h1>Movie List Section</h1>
        <div>
          { movies.map((movie) => <MovieCard movieObject='movie'/>)}
        </div>
      </main>
    );
  }
}

export default MovieList;
