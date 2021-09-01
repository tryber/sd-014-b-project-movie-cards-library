// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((Movie) => <MovieCard key={ Movie.title } movie={ Movie } />)
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default MovieList;
