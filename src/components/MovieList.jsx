import React from 'react';

// Passo 4
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {/* Passo 5: fazer dinâmico com a Key sendo o valor único de nome. */}
        {movies.map((mov) => (
          <MovieCard key={ mov.title } movie={ mov } />
        ))}
      </div>
    );
  }
}

export default MovieList;
