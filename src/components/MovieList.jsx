// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {data.map((card, index) => <MovieCard key={ index } movies={ card } />)}
      </section>
    );
  }
}

export default MovieList;
