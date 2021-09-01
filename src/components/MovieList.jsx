// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((theMovie) => <MovieCard movie={ theMovie } key={ theMovie.title } />)
    );
  }
}

export default MovieList;
