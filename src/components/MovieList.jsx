import React from 'react';
import Moviecard from './MovieCard'

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return(
      <div>
      {movies.map(mov => <MovieCard key={mov.title} movies={mov} />)}
      </div>
    )
  }
}

export default MovieList;