// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((item, index) => (
          <MovieCard
            movie={ item }
            key={ `Movie Title ${index + 1}` }
          />))}
      </div>);
  }
}

export default MovieList;
