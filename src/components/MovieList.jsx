// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieCard movies={ movies } />
      </div>);
  }
}

export default MovieList;
