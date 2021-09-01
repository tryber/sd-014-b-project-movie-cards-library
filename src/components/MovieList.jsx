// implement MovieList component here

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
    );
  }
}

// Linha 18 retirada do repositório do Fernando Serpa
// ref:https://github.com/tryber/sd-014-b-project-movie-cards-library/pull/10/commits/ffb0eb68deb78670d618d2029844d39e86fe2d40
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
