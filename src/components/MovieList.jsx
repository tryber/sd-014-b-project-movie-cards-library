import React, { Component } from 'react';
import MovieCard from './MovieCard';
import data from '../data';

export default class MovieList extends Component {
  render() {
    return (
      data.map((movie) => (<MovieCard
        key={ movie.title }
        movie={ movie }
      />))
    );
  }
}
