import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        { movies.map((card) => <MovieCard key={ card.title } movies={ card } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
