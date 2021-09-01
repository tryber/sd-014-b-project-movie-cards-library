import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      data.map((movieObj) => <MovieCard key={ movieObj.title } movie={ movieObj } />)
    );
  }
}

export default MovieList;
