// implement MovieList component here
import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((card) => <MovieCard key={ card.title } movies={ card } />)}
      </section>
    );
  }
}

export default MovieList;
