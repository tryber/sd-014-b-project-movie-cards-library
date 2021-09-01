import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {movies.map((card, index) => {
          const titleKey = `Movie Title ${index + 1}`;
          return <MovieCard key={ titleKey } movie={ card } />;
        })}
      </section>
    );
  }
}

export default MovieList;
