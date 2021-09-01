import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((info) => <MovieCard movie={ info } key={ info.title } />)}
      </section>
    );
  }
}

export default MovieList;
