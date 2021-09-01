import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-list">
        { movie.map((movie) => <MovieCard movie={ movie }/>)}
      </section>
    );
  }
}

// MovieList.a

export default MovieList;
