import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      [<MovieCard key="Movie Title 1" movie={ movies[0] } />,
        <MovieCard key="Movie Title 2" movie={ movies[1] } />,
        <MovieCard key="Movie Title 3" movie={ movies[2] } />]
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
