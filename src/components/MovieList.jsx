/* eslint-disable react/prop-types */
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((actualMovie) => <MovieCard key={ actualMovie.title } />)}
      </main>
    );
  }
}

MovieList.prototypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
