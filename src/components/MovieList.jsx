import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movieObj) => (<MovieCard movie={ movieObj } key={ movieObj.title } />))
    );
  }
}
// Bugfix com ajuda do Thomas Ferreira Turma 14-Bis

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
