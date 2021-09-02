import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => (
        <MovieCard movie={ movie } key={ movie.title } />
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
