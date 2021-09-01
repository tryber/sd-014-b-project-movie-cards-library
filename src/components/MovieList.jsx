// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        <h1>Movie List Section</h1>
        <div>
          <h1>Aqui onde vai vir os Cartazes</h1>
          {movies.map((movie) => <MovieCard key={ movie.id } movieObject={ movie } />)}
        </div>
      </main>
    );
  }
}

export default MovieList;
