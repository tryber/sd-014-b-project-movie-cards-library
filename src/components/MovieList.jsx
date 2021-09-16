import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {movies.map((obj) => <MovieCard movie={ obj } key={ obj.title } />)}
      </section>
    );
  }
}

export default MovieList;
