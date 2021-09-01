// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { moviesAr } = this.props;
    return (
      <main>
        {moviesAr.map((movie) => <MovieCard key={ movie.title } movieObject={ movie } />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  moviesAr: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
