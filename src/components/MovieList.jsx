// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {movies.map((info) => <MovieCard movie={ info } key={ info.title } />)}
      </section>
    );
  }
}

export default MovieList;
