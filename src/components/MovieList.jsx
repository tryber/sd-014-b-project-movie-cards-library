import React from 'react';
import MovieCard from './MovieCard';

const mapAndRenderCards = (movies) => movies
  .map((movie) => <MovieCard movie={movie} key={movie.title} />);

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        {mapAndRenderCards(movies)}
      </main>
    );
  }
}

export default MovieList;
