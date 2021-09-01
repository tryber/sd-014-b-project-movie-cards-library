import React from 'react';
import MovieCard from './MovieCard';
import { data } from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
    <section>
      { movies.map((filme) => <MovieCard key={ movies.title } movie = { filme } />) }
    </section>
    );
  }
}

export default MovieList;
