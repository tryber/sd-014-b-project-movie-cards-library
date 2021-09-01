// implement MovieList component here
import React from 'react';
// import PropTypes from 'prop-types';
import Movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      Movies.map((eachMovie, index) => <MovieCard key={ index } movies={ eachMovie }/>)
    )
  }
}

  
export default MovieList;
