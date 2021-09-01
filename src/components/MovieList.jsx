// implement MovieList component here
import React from 'react';
// import PropTypes from 'prop-types';
import Movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      Movies.map((Movie) => <MovieCard key={ Movie.title } movies={ Movie } />)
    );
  }
}

export default MovieList;
