/* eslint-disable react/prop-types */
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((actualMovie) => (<MovieCard
          key={ actualMovie.title }
          actualMovie={ actualMovie }
        />))}
      </main>
    );
  }
}

export default MovieList;
