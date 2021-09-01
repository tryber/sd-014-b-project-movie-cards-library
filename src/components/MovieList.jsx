import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component{
  render () {
    const {movies} = this.props;
    return (
      movies.map((Movie) => <MovieCard key= {Movie.title} movie={Movie} />  )
    );
  }
}

MovieList.PropTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default MovieList