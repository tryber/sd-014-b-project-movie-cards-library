// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { moviesArray } = this.props;
    return (
      <main>
        {moviesArray.map((movie) => <MovieCard key={movie.title} movieObject={movie} />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  moviesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
