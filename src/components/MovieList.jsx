import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((filme, index) => <MovieCard key={ movies[index] } movie={ filme } />)}
      </div>
    );
  }
}

export default MovieList;
