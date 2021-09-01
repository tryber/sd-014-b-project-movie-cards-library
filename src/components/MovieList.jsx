// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((el) => <MovieCard key={ el.title } />);
  }
}

Movies.

export default MovieList;
