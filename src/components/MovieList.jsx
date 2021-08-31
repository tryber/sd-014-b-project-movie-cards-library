import React from 'react';
// Passo Final de testes
import propTypes from 'prop-types';
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

// Passo Final de testes

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieList;
