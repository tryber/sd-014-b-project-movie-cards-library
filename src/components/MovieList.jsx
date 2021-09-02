import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Data from '../data';

export default class MovieList extends Component {
  render() {
    return (
      Data.map((movie) => (<MovieCard
        key={ movie.title }
        movie={ movie }
      />))
    );
  }
}
