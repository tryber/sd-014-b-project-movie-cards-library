import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        { movies.map((filme) => <MovieCard key={ filme.title } movie={ filme } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape([]),
}.isRequired;

/*
MovieList.defaultProps = {
  movies: []
}; */

export default MovieList;
