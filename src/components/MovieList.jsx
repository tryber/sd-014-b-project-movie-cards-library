import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <main>
        {movie.map((movieData) => <MovieCard key={ movieData.title } movie={ movieData } />) }
      </main>
    );
  }
}

export default MovieList;
