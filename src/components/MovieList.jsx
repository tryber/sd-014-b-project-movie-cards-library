import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((element) => <MovieCard key={ title } movies={ element } />)}
        ;
      </main>
    );
  }
}

export default MovieList;
